"use client";

import { useState, useRef } from "react";
import TranslatorBox, { Badge } from "@/components/TranslatorBox";
import { G, FEATURES, FAQS } from "@/lib/constants";
import { useTheme, colors } from "@/lib/theme";

function FAQItem({ q, a }: { q: string; a: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const { isDark } = useTheme();
  const C = colors(isDark);
  return (
    <div style={{ borderBottom: `1px solid ${C.border3}` }}>
      <button onClick={() => setIsOpen(o => !o)} style={{
        width: "100%", textAlign: "left", padding: "18px 0", background: "none",
        border: "none", cursor: "pointer", display: "flex", justifyContent: "space-between",
        alignItems: "center", fontSize: 15, fontWeight: 500, color: C.text,
      }}>
        {q}
        <span style={{ color: C.text3, fontSize: 18, transform: isOpen ? "rotate(180deg)" : "none", transition: "transform 0.2s", flexShrink: 0, marginLeft: 12 }}>⌄</span>
      </button>
      {isOpen && <p style={{ margin: "0 0 18px", fontSize: 15, color: C.text2, lineHeight: 1.7 }}>{a}</p>}
    </div>
  );
}

function MockCard({ f }: { f: (typeof FEATURES)[number] }) {
  const { isDark } = useTheme();
  const C = colors(isDark);
  return (
    <div style={{ background: C.greenBg, borderRadius: 16, padding: 3, border: `2px solid ${C.greenBorder}` }}>
      <div style={{ background: C.bg, borderRadius: 14, padding: "20px 20px 16px", border: `1px solid ${C.border2}` }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 12 }}>
          {([["Translate dari", f.from, false], ["Translate ke", f.to, true]] as [string,string,boolean][]).map(([lbl,val,green]) => (
            <div key={lbl}>
              <div style={{ fontSize: 11, color: C.text3, marginBottom: 6, textTransform: "uppercase", fontWeight: 500 }}>{lbl}</div>
              <div style={{ border: `1px solid ${C.border}`, borderRadius: 8, padding: "8px 12px", fontSize: 14, color: green ? G : C.text, fontWeight: green ? 500 : 400 }}>{val} ▾</div>
            </div>
          ))}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
          <div style={{ border: `1px solid ${C.border}`, borderRadius: 8, padding: 12, minHeight: 70, fontSize: 14, color: C.text3 }}>Ketik atau paste teks di sini...</div>
          <div style={{ background: C.bg2, border: `1px solid ${C.border}`, borderRadius: 8, padding: 12, minHeight: 70, fontSize: 14, color: C.text2 }}>Terjemahan</div>
        </div>
      </div>
    </div>
  );
}

interface HomePageProps {
  fromLang: string; setFromLang: (v: string) => void;
  toLang: string; setToLang: (v: string) => void;
  setPage: (p: string) => void;
}

export default function HomePage({ fromLang, setFromLang, toLang, setToLang, setPage }: HomePageProps) {
  const tRef = useRef<HTMLDivElement>(null);
  const { isDark } = useTheme();
  const C = colors(isDark);

  function scrollToTranslator(from: string, to: string) {
    setFromLang(from); setToLang(to);
    setTimeout(() => tRef.current?.scrollIntoView({ behavior: "smooth", block: "center" }), 100);
  }

  return (
    <div>
      {/* Hero */}
      <div style={{ textAlign: "center", padding: "56px 0 40px" }}>
        <Badge text="Gratis & Tanpa Registrasi" />
        <h1 style={{ fontSize: 52, fontWeight: 800, color: C.text, margin: "0 0 16px", letterSpacing: "-0.02em", lineHeight: 1.1 }}>
          Translate Jawa
        </h1>
        <p style={{ fontSize: 17, color: C.text2, margin: "0 auto 48px", maxWidth: 520, lineHeight: 1.7 }}>
          Terjemahkan bahasa Jawa ke Indonesia atau Indonesia ke Jawa dengan versi Ngoko, Krama Lugu, dan Krama Alus.
        </p>
        <div ref={tRef}>
          <TranslatorBox fromLang={fromLang} setFromLang={setFromLang} toLang={toLang} setToLang={setToLang} />
        </div>
      </div>

      {/* How to use */}
      <div style={{ padding: "64px 0 48px", textAlign: "center" }}>
        <Badge text="Cara Penggunaan" />
        <h2 style={{ fontSize: 32, fontWeight: 700, color: C.text, margin: "0 0 12px" }}>Translate Bahasa Jawa ke Indonesia dan Sebaliknya</h2>
        <p style={{ color: C.text2, fontSize: 16, margin: "0 0 40px" }}>Terjemahkan kata, kalimat, hingga teks dengan mudah dan cepat.</p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 20 }}>
          {[
            { n:"1", t:"Pilih Bahasa", d:"Pilih bahasa terjemahan, dari Indonesia ke Jawa atau Jawa ke Indonesia." },
            { n:"2", t:"Masukkan Teks", d:"Ketik atau paste teks yang ingin diterjemahkan pada kolom yang tersedia." },
            { n:"3", t:"Cek Hasil", d:"Lihat hasil terjemahan atau salin untuk digunakan nanti." },
          ].map(s => (
            <div key={s.n} style={{ background: C.bg2, borderRadius: 14, padding: "24px 20px", textAlign: "left", border: `1px solid ${C.border2}` }}>
              <div style={{ width: 36, height: 36, borderRadius: "50%", background: `linear-gradient(135deg,${G},#0d8f6d)`, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 14, marginBottom: 14 }}>{s.n}</div>
              <div style={{ fontWeight: 600, fontSize: 15, marginBottom: 8, color: C.text }}>{s.t}</div>
              <div style={{ color: C.text2, fontSize: 14, lineHeight: 1.6 }}>{s.d}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Features */}
      <div style={{ padding: "16px 0 64px" }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <h2 style={{ fontSize: 32, fontWeight: 700, color: C.text, margin: "0 0 12px" }}>Opsi Terjemahan</h2>
          <p style={{ color: C.text2, fontSize: 16 }}>Pilihan translate bahasa Jawa berdasarkan unggah-ungguh Jawa anyar.</p>
        </div>
        {FEATURES.map((f, i) => (
          <div key={i} style={{ display: "grid", gridTemplateColumns: i%2===0 ? "1fr 1.2fr" : "1.2fr 1fr", gap: 48, alignItems: "center", marginBottom: 64 }}>
            {i%2!==0 && <MockCard f={f} />}
            <div>
              <div style={{ fontSize: 28, marginBottom: 12 }}>{f.icon}</div>
              <h3 style={{ fontSize: 24, fontWeight: 700, color: C.text, margin: "0 0 12px" }}>{f.title}</h3>
              <p style={{ fontSize: 15, color: C.text2, lineHeight: 1.7, margin: "0 0 20px" }}>{f.desc}</p>
              <button onClick={() => scrollToTranslator(f.from, f.to)}
                style={{ padding: "9px 20px", fontSize: 14, fontWeight: 500, borderRadius: 50, border: `1.5px solid ${G}`, background: "transparent", color: G, cursor: "pointer" }}>
                Coba sekarang →
              </button>
            </div>
            {i%2===0 && <MockCard f={f} />}
          </div>
        ))}
      </div>

      {/* FAQ */}
      <div style={{ padding: "16px 0 72px", maxWidth: 720, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <h2 style={{ fontSize: 32, fontWeight: 700, color: C.text, margin: "0 0 12px" }}>FAQs</h2>
          <p style={{ color: C.text2, fontSize: 16 }}>Pertanyaan yang sering ditanyakan.</p>
        </div>
        {FAQS.map((f, i) => <FAQItem key={i} q={f.q} a={f.a} />)}
      </div>

      {/* Blog CTA */}
      <div style={{ background: C.greenBg, borderRadius: 20, padding: "48px 40px", textAlign: "center", border: `1px solid ${C.greenBorder}`, marginBottom: 72 }}>
        <div style={{ fontSize: 36, marginBottom: 12 }}>📖</div>
        <h2 style={{ fontSize: 24, fontWeight: 700, color: C.text, margin: "0 0 12px" }}>Pelajari Lebih Dalam tentang Bahasa Jawa</h2>
        <p style={{ color: C.text2, fontSize: 15, margin: "0 0 24px", maxWidth: 400, marginLeft: "auto", marginRight: "auto" }}>
          Artikel seputar budaya, sejarah, dan panduan belajar bahasa Jawa untuk semua kalangan.
        </p>
        <button onClick={() => setPage("blog")}
          style={{ padding: "11px 28px", fontSize: 14, fontWeight: 500, borderRadius: 50, border: "none", background: `linear-gradient(135deg,${G},#0d8f6d)`, color: "#fff", cursor: "pointer", boxShadow: "0 4px 14px rgba(22,163,127,0.3)" }}>
          Baca Blog →
        </button>
      </div>
    </div>
  );
}
