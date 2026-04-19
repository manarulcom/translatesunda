"use client";

import { G } from "@/lib/constants";
import { Badge } from "@/components/TranslatorBox";
import { useTheme, colors } from "@/lib/theme";

export default function TentangPage() {
  const { isDark } = useTheme();
  const C = colors(isDark);

  const stats = [{ n:"3", label:"Tingkatan Bahasa" }, { n:"2", label:"Arah Terjemahan" }, { n:"100%", label:"Gratis" }, { n:"24/7", label:"Tersedia" }];
  const values = [
    { icon:"🎯", title:"Akurasi", desc:"Menggunakan AI mutakhir untuk menghasilkan terjemahan yang natural dan kontekstual." },
    { icon:"🌿", title:"Pelestarian Budaya", desc:"Kami percaya bahasa Sunda adalah warisan budaya yang harus dijaga oleh semua generasi." },
    { icon:"🔓", title:"Aksesibilitas", desc:"Layanan sepenuhnya gratis, dapat diakses siapa saja tanpa registrasi." },
    { icon:"⚡", title:"Kemudahan", desc:"Antarmuka bersih dan sederhana, langsung bisa digunakan tanpa panduan." },
  ];

  return (
    <div style={{ paddingTop: 56 }}>
      <div style={{ textAlign: "center", marginBottom: 72 }}>
        <Badge text="Tentang Kami" />
        <h1 style={{ fontSize: 44, fontWeight: 800, color: C.text, margin: "0 0 20px", letterSpacing: "-0.02em" }}>
          Menjaga Bahasa Sunda<br />Tetap Hidup
        </h1>
        <p style={{ fontSize: 17, color: C.text2, maxWidth: 560, margin: "0 auto", lineHeight: 1.8 }}>
          Platform terjemahan bahasa Sunda online yang dibangun untuk memudahkan siapa saja memahami dan menggunakan bahasa Sunda.
        </p>
      </div>

      <div className="grid-cols-4" style={{ gap: 16, marginBottom: 72 }}>
        {stats.map(s => (
          <div key={s.n} style={{ background: C.bg2, borderRadius: 14, padding: "28px 20px", textAlign: "center", border: `1px solid ${C.border2}` }}>
            <div style={{ fontSize: 36, fontWeight: 800, color: G, marginBottom: 8 }}>{s.n}</div>
            <div style={{ fontSize: 14, color: C.text2 }}>{s.label}</div>
          </div>
        ))}
      </div>

      <div className="grid-cols-2-wide" style={{ gap: 48, alignItems: "center", marginBottom: 72 }}>
        <div>
          <h2 style={{ fontSize: 28, fontWeight: 700, color: C.text, margin: "0 0 16px" }}>Kenapa Translate Sunda Hadir?</h2>
          <p style={{ color: C.text2, lineHeight: 1.8, marginBottom: 16, fontSize: 15 }}>
            Bahasa Sunda adalah salah satu bahasa daerah dengan penutur terbanyak di Indonesia. Namun generasi muda semakin kesulitan memahami undak usuk basa Sunda yang kaya.
          </p>
          <p style={{ color: C.text2, lineHeight: 1.8, fontSize: 15, margin: 0 }}>
            Translate Sunda hadir sebagai solusi praktis: platform yang membantu siapapun menerjemahkan teks dari dan ke berbagai tingkatan bahasa Sunda secara akurat dan mudah.
          </p>
        </div>
        <div style={{ background: C.greenBg, borderRadius: 16, padding: "32px 28px", border: `1px solid ${C.greenBorder}` }}>
          <div style={{ fontSize: 40, marginBottom: 16 }}>🗺️</div>
          <h3 style={{ fontSize: 20, fontWeight: 700, color: C.text, margin: "0 0 12px" }}>Bahasa Sunda dalam Angka</h3>
          {[["~42 juta","penutur bahasa Sunda di seluruh dunia"],["3 tingkatan","utama: Halus (Lemes), Sedang, Kasar (Wantah)"],["Jawa Barat, Banten, DKI","daerah utama penutur"]].map(([b,r]) => (
            <div key={b} style={{ display: "flex", gap: 10, marginBottom: 12, alignItems: "flex-start" }}>
              <span style={{ color: G, fontWeight: 700, fontSize: 14, flexShrink: 0 }}>✓</span>
              <span style={{ fontSize: 14, color: C.text4, lineHeight: 1.6 }}><strong>{b}</strong> {r}</span>
            </div>
          ))}
        </div>
      </div>

      <div style={{ marginBottom: 72 }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <h2 style={{ fontSize: 28, fontWeight: 700, color: C.text, margin: "0 0 12px" }}>Nilai-Nilai Kami</h2>
        </div>
        <div className="grid-cols-2" style={{ gap: 20 }}>
          {values.map(v => (
            <div key={v.title} style={{ background: C.bg, borderRadius: 14, padding: "24px 20px", border: `1.5px solid ${C.border2}` }}>
              <div style={{ fontSize: 28, marginBottom: 12 }}>{v.icon}</div>
              <h3 style={{ fontSize: 16, fontWeight: 600, color: C.text, margin: "0 0 8px" }}>{v.title}</h3>
              <p style={{ fontSize: 14, color: C.text2, lineHeight: 1.7, margin: 0 }}>{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
