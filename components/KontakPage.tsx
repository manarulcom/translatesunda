"use client";

import { useState } from "react";
import { G } from "@/lib/constants";
import { Badge } from "@/components/TranslatorBox";
import { useTheme, colors } from "@/lib/theme";

export default function KontakPage() {
  const [form, setForm] = useState({ nama: "", email: "", subjek: "", pesan: "" });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const { isDark } = useTheme();
  const C = colors(isDark);

  function handleSubmit() {
    if (!form.nama || !form.email || !form.pesan) return;
    setSending(true);
    setTimeout(() => { setSending(false); setSent(true); }, 1200);
  }

  const inputStyle: React.CSSProperties = {
    width: "100%", boxSizing: "border-box", padding: "10px 14px", fontSize: 14,
    borderRadius: 10, border: `1.5px solid ${C.border}`, outline: "none",
    color: C.text, fontFamily: "inherit", background: C.inputBg, transition: "background 0.2s, border-color 0.15s",
  };

  return (
    <div style={{ paddingTop: 56 }}>
      <div style={{ textAlign: "center", marginBottom: 56 }}>
        <Badge text="Hubungi Kami" />
        <h1 style={{ fontSize: 44, fontWeight: 800, color: C.text, margin: "0 0 16px", letterSpacing: "-0.02em" }}>Ada Pertanyaan?</h1>
        <p style={{ fontSize: 17, color: C.text2, maxWidth: 480, margin: "0 auto", lineHeight: 1.8 }}>
          Kami senang mendengar dari kamu — baik laporan kesalahan, saran fitur, atau sekadar menyapa.
        </p>
      </div>

      <div className="kontak-grid" style={{ gap: 40, marginBottom: 72, alignItems: "start" }}>
        <div>
          <h2 style={{ fontSize: 20, fontWeight: 700, color: C.text, margin: "0 0 20px" }}>Informasi Kontak</h2>
          {[
            { icon:"📧", title:"Email", val:"halo@translatesunda.id", sub:"Kami balas dalam 1x24 jam", href:"mailto:halo@translatesunda.id" },
            { icon:"📸", title:"Instagram", val:"@translatesunda.id", sub:"Follow untuk update terbaru", href:"https://instagram.com/translatesunda.id" },
            { icon:"𝕏", title:"X (Twitter)", val:"@translatesundaid", sub:"Untuk pertanyaan cepat", href:"https://x.com/translatesundaid" },
            { icon:"📘", title:"Facebook", val:"@translatesunda.id", sub:"Komunitas bahasa Sunda", href:"https://facebook.com/translatesunda.id" },
            { icon:"💼", title:"Kerjasama", val:"partner@translatesunda.id", sub:"Untuk kolaborasi & bisnis", href:"mailto:partner@translatesunda.id" },
          ].map(c => (
            <a key={c.title} href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
              style={{ display: "flex", gap: 16, alignItems: "flex-start", marginBottom: 20, textDecoration: "none" }}>
              <div style={{ width: 44, height: 44, borderRadius: 12, background: C.greenBg, border: `1px solid ${C.greenBorder}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, flexShrink: 0 }}>{c.icon}</div>
              <div>
                <div style={{ fontWeight: 600, fontSize: 15, marginBottom: 2, color: C.text }}>{c.title}</div>
                <div style={{ fontSize: 14, color: G, marginBottom: 2 }}>{c.val}</div>
                <div style={{ fontSize: 13, color: C.text3 }}>{c.sub}</div>
              </div>
            </a>
          ))}

          <div style={{ background: C.bg2, borderRadius: 14, padding: 20, border: `1px solid ${C.border2}` }}>
            <div style={{ fontWeight: 600, fontSize: 14, marginBottom: 8, color: C.text }}>Jam Operasional</div>
            {[["Senin – Jumat","08.00 – 17.00 WIB"],["Sabtu","09.00 – 14.00 WIB"],["Minggu","Libur"]].map(([h,v]) => (
              <div key={h} style={{ display: "flex", justifyContent: "space-between", fontSize: 13, color: C.text2, marginBottom: 6 }}>
                <span>{h}</span><span style={{ fontWeight: 500, color: C.text4 }}>{v}</span>
              </div>
            ))}
          </div>
        </div>

        <div style={{ background: C.bg, borderRadius: 16, padding: "32px 28px", border: `1.5px solid ${C.border4}`, boxShadow: `0 4px 24px ${C.shadow}` }}>
          {sent ? (
            <div style={{ textAlign: "center", padding: "32px 0" }}>
              <div style={{ fontSize: 56, marginBottom: 16 }}>✅</div>
              <h3 style={{ fontSize: 22, fontWeight: 700, color: C.text, margin: "0 0 12px" }}>Pesan Terkirim!</h3>
              <p style={{ color: C.text2, fontSize: 15, lineHeight: 1.7, margin: "0 0 24px" }}>Terima kasih sudah menghubungi kami. Kami akan membalas dalam 1x24 jam.</p>
              <button onClick={() => { setSent(false); setForm({ nama:"", email:"", subjek:"", pesan:"" }); }}
                style={{ padding: "10px 28px", fontSize: 14, fontWeight: 500, borderRadius: 50, border: "none", background: `linear-gradient(135deg,${G},#0d8f6d)`, color: "#fff", cursor: "pointer" }}>
                Kirim Pesan Lain
              </button>
            </div>
          ) : (
            <>
              <h2 style={{ fontSize: 20, fontWeight: 700, color: C.text, margin: "0 0 24px" }}>Kirim Pesan</h2>
              {([
                { key:"nama", label:"Nama Lengkap", placeholder:"Nama kamu", type:"text" },
                { key:"email", label:"Email", placeholder:"email@contoh.com", type:"email" },
                { key:"subjek", label:"Subjek", placeholder:"Topik pesan", type:"text" },
              ] as { key: keyof typeof form, label: string, placeholder: string, type: string }[]).map(f => (
                <div key={f.key} style={{ marginBottom: 16 }}>
                  <label style={{ display: "block", fontSize: 13, fontWeight: 500, color: C.text4, marginBottom: 6 }}>{f.label}</label>
                  <input type={f.type} value={form[f.key]} onChange={e => setForm(p => ({ ...p, [f.key]: e.target.value }))} placeholder={f.placeholder} style={inputStyle} />
                </div>
              ))}
              <div style={{ marginBottom: 24 }}>
                <label style={{ display: "block", fontSize: 13, fontWeight: 500, color: C.text4, marginBottom: 6 }}>Pesan</label>
                <textarea value={form.pesan} onChange={e => setForm(p => ({ ...p, pesan: e.target.value }))} placeholder="Tulis pesanmu di sini..." rows={5}
                  style={{ ...inputStyle, resize: "vertical", lineHeight: 1.65 }} />
              </div>
              <button onClick={handleSubmit} disabled={!form.nama||!form.email||!form.pesan||sending}
                style={{ padding: 12, width: "100%", fontSize: 15, fontWeight: 500, borderRadius: 50, border: "none", background: (!form.nama||!form.email||!form.pesan) ? C.border2 : `linear-gradient(135deg,${G},#0d8f6d)`, color: (!form.nama||!form.email||!form.pesan) ? C.text3 : "#fff", cursor: (!form.nama||!form.email||!form.pesan) ? "not-allowed" : "pointer" }}>
                {sending ? "Mengirim..." : "Kirim Pesan →"}
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
