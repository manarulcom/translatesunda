import { NextRequest, NextResponse } from "next/server";
import { Redis } from "@upstash/redis";
import { Ratelimit } from "@upstash/ratelimit";
import crypto from "crypto";

// ─── Inisialisasi Redis (hanya jika env tersedia) ──────────────────────────
const hasRedis =
  process.env.UPSTASH_REDIS_REST_URL &&
  process.env.UPSTASH_REDIS_REST_TOKEN &&
  !process.env.UPSTASH_REDIS_REST_URL.includes("your-redis-url");

const redis = hasRedis
  ? new Redis({
      url: process.env.UPSTASH_REDIS_REST_URL!,
      token: process.env.UPSTASH_REDIS_REST_TOKEN!,
    })
  : null;

// Rate limiter: 10 request per 60 detik per IP
const ratelimit = redis
  ? new Ratelimit({
      redis,
      limiter: Ratelimit.slidingWindow(10, "60 s"),
      analytics: true,
      prefix: "translatesunda",
    })
  : null;

// ─── Validasi input ─────────────────────────────────────────────────────────
const VALID_FROM = ["Indonesia", "Sunda"];
const VALID_TO   = ["Sunda Halus (Lemes)", "Sunda Sedang", "Sunda Kasar (Wantah)", "Indonesia"];
const VALID_SUNDA_LEVELS = ["Sunda Halus (Lemes)", "Sunda Sedang", "Sunda Kasar (Wantah)"];
const MAX_CHARS = 500;

// ─── Label singkat tingkatan Sunda untuk dimasukkan ke prompt ───────────────
const SUNDA_LEVEL_LABEL: Record<string, string> = {
  "Sunda Halus (Lemes)": "Halus (Lemes)",
  "Sunda Sedang":        "Sedang",
  "Sunda Kasar (Wantah)": "Kasar (Wantah)",
};

// ─── Build system prompt ────────────────────────────────────────────────────
function buildSystemPrompt(fromLang: string, toLang: string, sundaLevel?: string): string {
  if (fromLang === "Indonesia") {
    // Indonesia → Sunda: tingkatan ditentukan dari toLang
    if (toLang === "Sunda Halus (Lemes)") {
      return "Kamu adalah penerjemah profesional Bahasa Indonesia ke Bahasa Sunda. Terjemahkan teks berikut ke Bahasa Sunda HALUS (lemes). Balas hanya dengan hasil terjemahan, tanpa penjelasan tambahan.";
    }
    if (toLang === "Sunda Sedang") {
      return "Kamu adalah penerjemah profesional Bahasa Indonesia ke Bahasa Sunda. Terjemahkan teks berikut ke Bahasa Sunda SEDANG (umum/sehari-hari). Balas hanya dengan hasil terjemahan, tanpa penjelasan tambahan.";
    }
    // Sunda Kasar (Wantah)
    return "Kamu adalah penerjemah profesional Bahasa Indonesia ke Bahasa Sunda. Terjemahkan teks berikut ke Bahasa Sunda KASAR (wantah/informal). Balas hanya dengan hasil terjemahan, tanpa penjelasan tambahan.";
  }

  // Sunda → Indonesia: gunakan sundaLevel sebagai konteks tingkatan INPUT
  const levelLabel = sundaLevel
    ? (SUNDA_LEVEL_LABEL[sundaLevel] ?? "umum")
    : "umum";

  return `Kamu adalah penerjemah profesional Bahasa Sunda ke Bahasa Indonesia. Input adalah Bahasa Sunda tingkatan ${levelLabel}. Terjemahkan ke Bahasa Indonesia yang baik dan benar. Balas hanya dengan hasil terjemahan, tanpa penjelasan tambahan.`;
}

// ─── Handler ──────────────────────────────────────────────────────────────────
export async function POST(request: NextRequest) {
  try {
    // 1. Rate limiting (per IP)
    if (ratelimit) {
      const ip =
        request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
        request.headers.get("x-real-ip") ??
        "anonymous";

      const { success, remaining } = await ratelimit.limit(ip);

      if (!success) {
        return NextResponse.json(
          { error: "Terlalu banyak request. Coba lagi dalam 1 menit." },
          {
            status: 429,
            headers: { "X-RateLimit-Remaining": remaining.toString() },
          }
        );
      }
    }

    // 2. Parse & validasi body
    const body = await request.json().catch(() => null);
    if (!body) {
      return NextResponse.json({ error: "Request tidak valid." }, { status: 400 });
    }

    const { text, fromLang, toLang, sundaLevel } = body as {
      text?: string;
      fromLang?: string;
      toLang?: string;
      sundaLevel?: string; // konteks tingkatan input saat Sunda → Indonesia
    };

    if (!text || typeof text !== "string" || !text.trim()) {
      return NextResponse.json({ error: "Teks tidak boleh kosong." }, { status: 400 });
    }
    if (text.trim().length > MAX_CHARS) {
      return NextResponse.json(
        { error: `Teks terlalu panjang. Maksimal ${MAX_CHARS} karakter.` },
        { status: 400 }
      );
    }
    if (!fromLang || !VALID_FROM.includes(fromLang)) {
      return NextResponse.json({ error: "Bahasa sumber tidak valid." }, { status: 400 });
    }
    if (!toLang || !VALID_TO.includes(toLang)) {
      return NextResponse.json({ error: "Bahasa tujuan tidak valid." }, { status: 400 });
    }
    // Validasi sundaLevel hanya ketika Sunda → Indonesia
    if (fromLang === "Sunda" && sundaLevel && !VALID_SUNDA_LEVELS.includes(sundaLevel)) {
      return NextResponse.json({ error: "Tingkatan Sunda tidak valid." }, { status: 400 });
    }

    // 3. Cek response cache
    // Sertakan sundaLevel dalam hash agar cache berbeda per tingkatan
    const cacheKey = `translatesunda:${crypto
      .createHash("sha256")
      .update(`${fromLang}|${toLang}|${sundaLevel ?? ""}|${text.trim().toLowerCase()}`)
      .digest("hex")}`;

    if (redis) {
      const cached = await redis.get<string>(cacheKey);
      if (cached) {
        return NextResponse.json({ result: cached, cached: true });
      }
    }

    // 4. Panggil Claude API (dengan prompt caching)
    const apiKey = process.env.ANTHROPIC_API_KEY;
    if (!apiKey || apiKey.includes("xxxxx")) {
      return NextResponse.json(
        { error: "API key belum dikonfigurasi." },
        { status: 500 }
      );
    }

    const systemPrompt = buildSystemPrompt(fromLang, toLang, sundaLevel);

    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,                         // ✅ API key aman, hanya di server
        "anthropic-version": "2023-06-01",
        "anthropic-beta": "prompt-caching-2024-07-31", // ✅ Prompt caching
      },
      body: JSON.stringify({
        model: "claude-haiku-4-5-20251001",
        max_tokens: 1000,
        system: [
          {
            type: "text",
            text: systemPrompt,
            cache_control: { type: "ephemeral" }, // ✅ Cache system prompt di Anthropic
          },
        ],
        messages: [{ role: "user", content: text.trim() }],
      }),
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error("Anthropic API error:", response.status, errText);
      return NextResponse.json(
        { error: "Gagal menerjemahkan. Coba lagi nanti." },
        { status: 500 }
      );
    }

    const data = await response.json();
    const result: string = data?.content?.[0]?.text ?? "Terjadi kesalahan.";

    // 5. Simpan ke cache (expire 7 hari)
    if (redis) {
      await redis.set(cacheKey, result, { ex: 60 * 60 * 24 * 7 });
    }

    return NextResponse.json({ result, cached: false });
  } catch (err) {
    console.error("Translate API error:", err);
    return NextResponse.json(
      { error: "Terjadi kesalahan server." },
      { status: 500 }
    );
  }
}
