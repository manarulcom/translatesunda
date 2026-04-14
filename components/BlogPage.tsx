"use client";

import { useState } from "react";
import Link from "next/link";
import { ARTICLES, CATEGORIES, Article } from "@/lib/articles";
import { CAT_COLORS, G } from "@/lib/constants";
import { Badge } from "@/components/TranslatorBox";
import { useTheme, colors } from "@/lib/theme";

function catStyle(c: string, isDark: boolean): React.CSSProperties {
  const col = CAT_COLORS[c] || G;
  return { background: col + (isDark ? "25" : "18"), color: col, fontSize: 11, fontWeight: 600, padding: "3px 10px", borderRadius: 50, display: "inline-block" };
}

export default function BlogPage() {
  const [cat, setCat] = useState("Semua");
  const [search, setSearch] = useState("");
  const { isDark } = useTheme();
  const C = colors(isDark);

  const filtered = ARTICLES.filter(a =>
    (cat === "Semua" || a.category === cat) &&
    (a.title.toLowerCase().includes(search.toLowerCase()) || a.excerpt.toLowerCase().includes(search.toLowerCase()))
  );
  const featured = ARTICLES[0];

  return (
    <div style={{ paddingTop: 48 }}>
      <div style={{ textAlign: "center", marginBottom: 48 }}>
        <Badge text="Blog" />
        <h1 className="blog-h1" style={{ fontSize: 44, fontWeight: 800, color: C.text, margin: "0 0 16px", letterSpacing: "-0.02em" }}>Artikel Bahasa Jawa</h1>
        <p style={{ fontSize: 17, color: C.text2, maxWidth: 480, margin: "0 auto 28px", lineHeight: 1.8 }}>
          Tips, panduan, sejarah, dan budaya seputar bahasa Jawa untuk semua kalangan.
        </p>
        <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Cari artikel..."
          style={{ width: "100%", maxWidth: 400, padding: "10px 18px", fontSize: 14, borderRadius: 50, border: `1.5px solid ${C.border}`, outline: "none", boxSizing: "border-box", background: C.inputBg, color: C.text }} />
      </div>

      {/* Featured */}
      {!search && cat === "Semua" && (
        <Link href={`/blog/${featured.slug}`} className="featured-article"
          style={{ textDecoration: "none", display: "grid", background: C.greenBg, borderRadius: 20, padding: "36px", border: `1.5px solid ${C.greenBorder}`, marginBottom: 48, cursor: "pointer", transition: "background 0.2s" }}
          onMouseEnter={e => e.currentTarget.style.filter = "brightness(1.05)"}
          onMouseLeave={e => e.currentTarget.style.filter = "none"}
        >
          <div>
            <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 12 }}>
              <span style={{ background: G, color: "#fff", fontSize: 11, fontWeight: 600, padding: "3px 10px", borderRadius: 50 }}>Artikel Unggulan</span>
              <span style={catStyle(featured.category, isDark)}>{featured.category}</span>
            </div>
            <h2 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 12px", color: C.text }}>{featured.title}</h2>
            <p style={{ color: C.text2, fontSize: 15, lineHeight: 1.7, margin: "0 0 16px" }}>{featured.excerpt}</p>
            <div style={{ fontSize: 13, color: C.text3 }}>{featured.date} · {featured.readTime} baca</div>
          </div>
          <div className="featured-emoji" style={{ fontSize: 72 }}>{featured.cover}</div>
        </Link>
      )}

      {/* Categories */}
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 32 }}>
        {CATEGORIES.map(c => (
          <button key={c} onClick={() => setCat(c)}
            style={{ padding: "6px 16px", fontSize: 13, fontWeight: cat===c ? 600 : 400, borderRadius: 50, border: cat===c ? `1.5px solid ${G}` : `1.5px solid ${C.border}`, background: cat===c ? C.greenBg : "transparent", color: cat===c ? G : C.text2, cursor: "pointer" }}>
            {c}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="blog-grid">
        {filtered.map(a => (
          <Link key={a.slug} href={`/blog/${a.slug}`}
            style={{ textDecoration: "none", display: "block", background: C.bg, borderRadius: 14, border: `1.5px solid ${C.border2}`, overflow: "hidden", cursor: "pointer", transition: "box-shadow 0.2s, transform 0.2s" }}
            onMouseEnter={e => { e.currentTarget.style.boxShadow = `0 8px 24px ${C.shadow}`; e.currentTarget.style.transform = "translateY(-2px)"; }}
            onMouseLeave={e => { e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "translateY(0)"; }}>
            <div style={{ background: C.bg2, height: 100, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 48 }}>{a.cover}</div>
            <div style={{ padding: "16px 18px 20px" }}>
              <div style={{ display: "flex", gap: 6, alignItems: "center", marginBottom: 10 }}>
                <span style={catStyle(a.category, isDark)}>{a.category}</span>
              </div>
              <h3 style={{ fontSize: 15, fontWeight: 600, margin: "0 0 8px", lineHeight: 1.45, color: C.text }}>{a.title}</h3>
              <p style={{ fontSize: 13, color: C.text2, lineHeight: 1.6, margin: "0 0 14px" }}>{a.excerpt.substring(0, 100)}...</p>
              <div style={{ fontSize: 12, color: C.text3 }}>{a.date} · {a.readTime} baca</div>
            </div>
          </Link>
        ))}
      </div>
      {filtered.length === 0 && <div style={{ textAlign: "center", padding: "48px 0", color: C.text3 }}>Artikel tidak ditemukan.</div>}
    </div>
  );
}
