"use client";

import { useState, useRef } from "react";
import { G, FROM_OPTS, TO_OPTS_MAP } from "@/lib/constants";
import { useTheme, colors } from "@/lib/theme";

// Opsi tingkatan Sunda (dipakai untuk output Indo→Sunda DAN konteks input Sunda→Indo)
const SUNDA_LEVEL_OPTS = ["Sunda Halus (Lemes)", "Sunda Sedang", "Sunda Kasar (Wantah)"];

// ─── Badge ──────────────────────────────────────────────────────────────────
export function Badge({ text }: { text: string }) {
  const { isDark } = useTheme();
  const C = colors(isDark);
  return (
    <div style={{
      display: "inline-flex", alignItems: "center",
      background: C.greenBg, border: `1px solid ${C.greenBorder}`,
      borderRadius: 50, padding: "5px 14px", marginBottom: 16,
    }}>
      <span style={{ fontSize: 13, color: G, fontWeight: 500 }}>{text}</span>
    </div>
  );
}

// ─── CustomSelect ────────────────────────────────────────────────────────────
interface SelectProps {
  label: string;
  options: string[];
  value: string;
  onChange: (v: string) => void;
  disabled?: boolean;
  highlight?: boolean; // beri aksen warna berbeda untuk konteks input
}

function CustomSelect({ label, options, value, onChange, disabled, highlight }: SelectProps) {
  const [open, setOpen] = useState(false);
  const { isDark } = useTheme();
  const C = colors(isDark);

  const accentColor = highlight ? "#8b5cf6" : G; // ungu untuk "konteks input"
  const accentBg    = highlight ? (isDark ? "#8b5cf620" : "#8b5cf610") : C.greenBg;
  const accentBorder = highlight ? (isDark ? "#8b5cf640" : "#8b5cf630") : C.greenBorder;

  return (
    <div style={{ position: "relative" }} onBlur={() => setTimeout(() => setOpen(false), 150)}>
      <div style={{
        fontSize: 11, color: highlight ? accentColor : C.text3,
        marginBottom: 6, fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase",
        display: "flex", alignItems: "center", gap: 5,
      }}>
        {highlight && <span style={{ fontSize: 10 }}>📌</span>}
        {label}
      </div>
      <div
        tabIndex={0}
        onClick={() => !disabled && setOpen(o => !o)}
        style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "10px 14px", borderRadius: 10,
          border: open
            ? `1.5px solid ${accentColor}`
            : highlight
            ? `1.5px solid ${accentBorder}`
            : `1.5px solid ${C.border}`,
          background: disabled ? C.bg2 : highlight ? accentBg : C.inputBg,
          cursor: disabled ? "not-allowed" : "pointer",
          fontSize: 15, color: value ? (highlight ? accentColor : C.text) : C.text3,
          userSelect: "none", transition: "border-color 0.15s, box-shadow 0.15s",
          boxShadow: open ? `0 0 0 3px ${accentColor}22` : "none",
          fontWeight: highlight && value ? 500 : 400,
        }}
      >
        <span>{value || "Pilih..."}</span>
        <span style={{
          fontSize: 12, color: highlight ? accentColor : C.text3,
          transform: open ? "rotate(180deg)" : "none", transition: "transform 0.2s"
        }}>▾</span>
      </div>
      {open && (
        <div style={{
          position: "absolute", top: "calc(100% + 6px)", left: 0, right: 0, zIndex: 99,
          background: C.bg, borderRadius: 10, border: `1.5px solid ${C.border}`,
          boxShadow: `0 8px 24px ${C.shadow}`, overflow: "hidden",
        }}>
          {options.map(opt => (
            <div key={opt} onClick={() => { onChange(opt); setOpen(false); }}
              style={{
                padding: "10px 14px", fontSize: 15,
                background: value === opt ? (highlight ? accentBg : C.greenBg) : "transparent",
                color: value === opt ? accentColor : C.text,
                cursor: "pointer", fontWeight: value === opt ? 500 : 400, transition: "background 0.1s",
              }}
              onMouseEnter={e => { if (value !== opt) e.currentTarget.style.background = C.bg2; }}
              onMouseLeave={e => { if (value !== opt) e.currentTarget.style.background = "transparent"; }}
            >{opt}</div>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── TranslatorBox ───────────────────────────────────────────────────────────
interface TranslatorBoxProps {
  fromLang: string; setFromLang: (v: string) => void;
  toLang: string;   setToLang:   (v: string) => void;
}

export default function TranslatorBox({ fromLang, setFromLang, toLang, setToLang }: TranslatorBoxProps) {
  const [input, setInput]   = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [copied, setCopied]   = useState(false);
  const [error, setError]     = useState("");

  // State khusus untuk tingkatan Sunda ketika mode Sunda → Indonesia
  // Default "Sunda Sedang" agar langsung siap pakai
  const [sundaLevel, setSundaLevel] = useState("Sunda Sedang");

  const abortRef = useRef<AbortController | null>(null);
  const { isDark } = useTheme();
  const C = colors(isDark);

  const isFromSunda = fromLang === "Sunda";

  // ─── Swap Bahasa (cerdas: ingat tingkatan) ────────────────────────────────
  function swapLanguages() {
    if (!fromLang) return;

    if (fromLang === "Indonesia" && toLang) {
      // Indonesia → Sunda [X] ⟶ Sunda → Indonesia, konteks input = [X]
      setSundaLevel(toLang);       // simpan tingkatan yang dipilih sebagai konteks input
      setFromLang("Sunda");
      setToLang("Indonesia");      // target selalu Indonesia saat arah balik
    } else if (fromLang === "Sunda") {
      // Sunda → Indonesia (konteks = sundaLevel) ⟶ Indonesia → Sunda [sundaLevel]
      setFromLang("Indonesia");
      setToLang(sundaLevel);       // pulihkan tingkatan output
    }

    setInput(result);
    setResult(""); setError("");
  }

  // ─── Translate ────────────────────────────────────────────────────────────
  async function translate() {
    const readyToGo = isFromSunda
      ? !!input.trim() && !!sundaLevel
      : !!input.trim() && !!fromLang && !!toLang;
    if (!readyToGo || loading) return;

    setLoading(true); setResult(""); setError("");
    if (abortRef.current) abortRef.current.abort();
    const ctrl = new AbortController(); abortRef.current = ctrl;

    try {
      const body: Record<string, string> = {
        text: input,
        fromLang,
        toLang: isFromSunda ? "Indonesia" : toLang,
      };
      // Kirim sundaLevel sebagai konteks saat Sunda → Indonesia
      if (isFromSunda) body.sundaLevel = sundaLevel;

      const res = await fetch("/api/translate", {
        method: "POST", signal: ctrl.signal,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const data = await res.json();
      if (!res.ok) setError(data.error ?? "Gagal menerjemahkan.");
      else setResult(data.result);
    } catch (e: unknown) {
      if (e instanceof Error && e.name !== "AbortError")
        setError("Gagal menerjemahkan. Periksa koneksi internet.");
    } finally { setLoading(false); }
  }

  const canTranslate = isFromSunda
    ? !!input.trim() && !!sundaLevel && !loading
    : !!input.trim() && !!fromLang && !!toLang && !loading;

  const charCount = input.length;
  const overLimit = charCount > 500;

  // Config dropdown kanan berdasarkan arah terjemahan
  const rightLabel   = isFromSunda ? "Tingkatan Sunda Input" : "Translate ke";
  const rightOptions = isFromSunda ? SUNDA_LEVEL_OPTS : (fromLang ? TO_OPTS_MAP[fromLang] : []);
  const rightValue   = isFromSunda ? sundaLevel : toLang;
  const rightChange  = isFromSunda
    ? (v: string) => { setSundaLevel(v); setResult(""); setError(""); }
    : (v: string) => { setToLang(v);    setResult(""); setError(""); };

  return (
    <div style={{
      background: C.bg, borderRadius: 16, padding: "28px 28px 24px",
      border: `1.5px solid ${C.border4}`, boxShadow: `0 4px 32px ${C.shadow}`,
      transition: "background 0.2s, border-color 0.2s", textAlign: "left",
    }}>

      {/* ── Baris selector bahasa + tombol swap ── */}
      <div style={{ display: "flex", alignItems: "flex-end", gap: 12, marginBottom: 20 }}>

        {/* Dropdown kiri: bahasa sumber */}
        <div style={{ flex: 1 }}>
          <CustomSelect
            label="Translate dari"
            options={FROM_OPTS as unknown as string[]}
            value={fromLang}
            onChange={v => {
              setFromLang(v);
              setToLang("");
              setResult(""); setError("");
              // Reset sundaLevel ke default saat pindah arah
              if (v === "Sunda") setSundaLevel("Sunda Sedang");
            }}
          />
        </div>

        {/* Tombol Swap ⇄ */}
        <button
          onClick={swapLanguages}
          disabled={!fromLang || (!isFromSunda && !toLang)}
          title="Balik arah terjemahan"
          style={{
            width: 40, height: 40, borderRadius: 10,
            border: `1.5px solid ${(!fromLang || (!isFromSunda && !toLang)) ? C.border : G}`,
            background: (!fromLang || (!isFromSunda && !toLang)) ? C.bg2 : C.inputBg,
            cursor: (!fromLang || (!isFromSunda && !toLang)) ? "not-allowed" : "pointer",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 16, color: (!fromLang || (!isFromSunda && !toLang)) ? C.text3 : G,
            flexShrink: 0, marginBottom: 1, transition: "border-color 0.15s, color 0.15s, transform 0.15s",
          }}
          onMouseEnter={e => { if (fromLang) e.currentTarget.style.transform = "scale(1.1)"; }}
          onMouseLeave={e => { e.currentTarget.style.transform = "scale(1)"; }}
        >
          ⇄
        </button>

        {/* Dropdown kanan: output (Indo→Sunda) ATAU konteks input (Sunda→Indo) */}
        <div style={{ flex: 1 }}>
          <CustomSelect
            label={rightLabel}
            options={rightOptions}
            value={rightValue}
            onChange={rightChange}
            disabled={!fromLang}
            highlight={isFromSunda} // warna ungu saat mode konteks input
          />
        </div>
      </div>

      {/* Hint kecil saat mode Sunda → Indonesia */}
      {isFromSunda && (
        <div style={{
          fontSize: 12, color: "#8b5cf6", marginBottom: 14, marginTop: -8,
          background: isDark ? "#8b5cf615" : "#8b5cf608",
          borderRadius: 8, padding: "6px 12px",
          border: `1px solid ${isDark ? "#8b5cf630" : "#8b5cf620"}`,
        }}>
          💡 Pilih tingkatan Sunda sesuai teks yang kamu masukkan agar terjemahan lebih akurat.
        </div>
      )}

      {/* ── Textarea input & output ── */}
      <div className="translator-grid" style={{ gap: 12 }}>

        {/* Input */}
        <div style={{ position: "relative" }}>
          <textarea
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => { if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) translate(); }}
            placeholder="Ketik atau paste teks di sini..."
            rows={6}
            style={{
              width: "100%", boxSizing: "border-box", resize: "none",
              fontSize: 16, padding: "14px 16px", paddingBottom: 32, borderRadius: 10,
              border: overLimit ? "1.5px solid #f87171" : `1.5px solid ${C.border}`,
              color: C.text, outline: "none", lineHeight: 1.65, fontFamily: "inherit",
              background: C.inputBg, transition: "border-color 0.15s, background 0.2s",
            }}
          />
          <div style={{ position: "absolute", bottom: 10, left: 14, fontSize: 12, color: overLimit ? "#f87171" : C.text3 }}>
            {charCount}/500
          </div>
          {input && (
            <button onClick={() => { setInput(""); setResult(""); setError(""); }}
              style={{ position: "absolute", top: 10, right: 10, background: "none", border: "none", color: C.text3, cursor: "pointer", fontSize: 16, padding: 4 }}>
              ✕
            </button>
          )}
        </div>

        {/* Output */}
        <div style={{
          background: C.bg2, borderRadius: 10, padding: "14px 16px",
          border: `1.5px solid ${C.border}`, minHeight: 150, position: "relative",
          transition: "background 0.2s", textAlign: "left",
        }}>
          {loading ? (
            <div style={{ display: "flex", gap: 5, alignItems: "center", padding: "4px 0" }}>
              {[0, 1, 2].map(i => (
                <div key={i} style={{ width: 8, height: 8, borderRadius: "50%", background: G, animation: `dot 1.2s ease-in-out ${i * 0.2}s infinite` }} />
              ))}
            </div>
          ) : error ? (
            <p style={{ margin: 0, fontSize: 14, color: "#f87171", lineHeight: 1.6 }}>⚠️ {error}</p>
          ) : result ? (
            <>
              <p className="fade-in" style={{ margin: 0, fontSize: 16, color: C.text, lineHeight: 1.65, whiteSpace: "pre-wrap", paddingBottom: 32, textAlign: "left" }}>
                {result}
              </p>
              <button
                onClick={() => { navigator.clipboard.writeText(result); setCopied(true); setTimeout(() => setCopied(false), 1800); }}
                style={{ position: "absolute", bottom: 12, right: 14, display: "flex", alignItems: "center", gap: 5, fontSize: 13, color: copied ? G : C.text3, background: "none", border: "none", cursor: "pointer", fontWeight: copied ? 500 : 400 }}>
                ⎘ {copied ? "Tersalin!" : "Salin"}
              </button>
            </>
          ) : (
            <span style={{ color: C.text3, fontSize: 16 }}>Terjemahan</span>
          )}
        </div>
      </div>

      {/* ── Tombol Terjemahkan ── */}
      <div style={{ display: "flex", justifyContent: "center", marginTop: 18 }}>
        <button onClick={translate} disabled={!canTranslate || overLimit}
          style={{
            padding: "11px 36px", fontSize: 15, fontWeight: 500, borderRadius: 50, border: "none",
            background: (!canTranslate || overLimit) ? C.border2 : `linear-gradient(135deg,${G},#0d8f6d)`,
            color: (!canTranslate || overLimit) ? C.text3 : "#fff",
            cursor: (!canTranslate || overLimit) ? "not-allowed" : "pointer",
            boxShadow: (!canTranslate || overLimit) ? "none" : "0 4px 14px rgba(22,163,127,0.35)",
            transition: "background 0.2s, box-shadow 0.2s",
          }}>
          {loading ? "Menerjemahkan..." : "Terjemahkan"}
        </button>
      </div>
      <p style={{ textAlign: "center", fontSize: 12, color: C.text3, marginTop: 10, marginBottom: 0 }}>
        Tekan Ctrl+Enter untuk translate cepat
      </p>
    </div>
  );
}
