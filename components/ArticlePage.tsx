"use client";

import React from "react";
import Link from "next/link";
import { ARTICLES, Article } from "@/lib/articles";
import { CAT_COLORS, G } from "@/lib/constants";
import { useTheme, colors } from "@/lib/theme";

function catStyle(c: string, isDark: boolean): React.CSSProperties {
  const col = CAT_COLORS[c] || G;
  return { background: col + (isDark ? "25" : "18"), color: col, fontSize: 11, fontWeight: 600, padding: "3px 10px", borderRadius: 50, display: "inline-block" };
}

// Render inline markdown: **bold** dan [link text](url)
function renderInline(text: string): React.ReactNode[] {
  const tokens = text.split(/(\*\*.*?\*\*|\[.*?\]\(.*?\))/g);
  return tokens.map((token, i) => {
    // Bold: **text**
    const boldMatch = token.match(/^\*\*(.*?)\*\*$/);
    if (boldMatch) return <strong key={i}>{boldMatch[1]}</strong>;
    // Link: [text](url)
    const linkMatch = token.match(/^\[(.*?)\]\((.*?)\)$/);
    if (linkMatch) {
      const isInternal = linkMatch[2].startsWith("/") || linkMatch[2].includes("translatesunda.id");
      const href = linkMatch[2].replace("https://translatesunda.id", "");
      return isInternal
        ? <a key={i} href={href} style={{ color: "#16a37f", textDecoration: "underline", fontWeight: 500 }}>{linkMatch[1]}</a>
        : <a key={i} href={linkMatch[2]} target="_blank" rel="noopener noreferrer" style={{ color: "#16a37f", textDecoration: "underline", fontWeight: 500 }}>{linkMatch[1]}</a>;
    }
    return token;
  });
}

export default function ArticlePage({ article }: { article: Article }) {
  const { isDark } = useTheme();
  const C = colors(isDark);
  const related = ARTICLES.filter(a => a.slug !== article.slug && a.category === article.category).slice(0, 3);
  const paragraphs = article.body.split("\n\n");

  return (
    <div style={{ paddingTop: 40 }}>
      <Link href="/blog"
        style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 14, color: C.text2, textDecoration: "none", marginBottom: 32 }}>
        ← Kembali ke Blog
      </Link>
      <div style={{ maxWidth: 720, margin: "0 auto" }}>
        <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
          <span style={catStyle(article.category, isDark)}>{article.category}</span>
        </div>
        <h1 style={{ fontSize: 36, fontWeight: 800, color: C.text, margin: "0 0 16px", letterSpacing: "-0.02em", lineHeight: 1.2 }}>{article.title}</h1>
        <div style={{ display: "flex", gap: 16, fontSize: 14, color: C.text3, marginBottom: 32, alignItems: "center" }}>
          <span>{article.date}</span><span>·</span><span>{article.readTime} baca</span>
        </div>
        <div style={{ fontSize: 72, textAlign: "center", background: C.bg2, borderRadius: 16, padding: "32px 0", marginBottom: 40, border: `1px solid ${C.border2}` }}>
          {article.cover}
        </div>
        <div style={{ fontSize: 17, color: C.text4, lineHeight: 1.85 }}>
          {paragraphs.map((p, i) => {
            // H3 heading: **Title**
            if (p.startsWith("**") && p.endsWith("**"))
              return <h3 key={i} style={{ fontSize: 18, fontWeight: 700, color: C.text, margin: "28px 0 12px" }}>{p.replace(/\*\*/g, "")}</h3>;
            // Unordered list
            if (p.startsWith("- "))
              return (
                <ul key={i} style={{ paddingLeft: 20, margin: "0 0 16px" }}>
                  {p.split("\n").map((l, j) => <li key={j} style={{ marginBottom: 6 }}>{renderInline(l.replace(/^- /, ""))}</li>)}
                </ul>
              );
            // Table (| col | col |)
            if (p.startsWith("|")) {
              const rows = p.split("\n").filter(r => !r.match(/^\|[-| ]+\|$/));
              return (
                <div key={i} style={{ overflowX: "auto", margin: "0 0 18px" }}>
                  <table style={{ borderCollapse: "collapse", width: "100%", fontSize: 15 }}>
                    <tbody>
                      {rows.map((row, ri) => {
                        const cells = row.split("|").filter((_, ci) => ci > 0 && ci < row.split("|").length - 1);
                        const Tag = ri === 0 ? "th" : "td";
                        return (
                          <tr key={ri}>
                            {cells.map((cell, ci) => (
                              <Tag key={ci} style={{ border: `1px solid ${C.border2}`, padding: "8px 12px", textAlign: "left", fontWeight: ri === 0 ? 700 : 400, background: ri === 0 ? C.bg2 : "transparent", color: C.text }}>{cell.trim()}</Tag>
                            ))}
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              );
            }
            // Regular paragraph with inline formatting
            return <p key={i} style={{ margin: "0 0 18px" }}>{renderInline(p)}</p>;
          })}
        </div>

        {/* CTA — dinamis berdasarkan kategori */}
        {article.category === "Aksara" ? (
          <div style={{ background: C.greenBg, borderRadius: 16, padding: "28px", border: `1px solid ${C.greenBorder}`, margin: "48px 0", textAlign: "center" }}>
            <div style={{ fontSize: 32, marginBottom: 12 }}>ᮃ</div>
            <h3 style={{ fontSize: 18, fontWeight: 700, color: C.text, margin: "0 0 8px" }}>Coba Langsung Transliterasi Aksara Sunda!</h3>
            <p style={{ color: C.text2, fontSize: 14, margin: "0 0 20px" }}>Latin → Aksara Sunda, Aksara → Latin, papan ketik on-screen — semuanya gratis di TranslateSunda.id</p>
            <a href="https://translatesunda.id/aksara"
              style={{ display: "inline-block", padding: "10px 28px", fontSize: 14, fontWeight: 500, borderRadius: 50, border: "none", background: `linear-gradient(135deg,${G},#0d8f6d)`, color: "#fff", cursor: "pointer", boxShadow: "0 4px 14px rgba(22,163,127,0.3)", textDecoration: "none" }}>
              Buka Aksara Sunda →
            </a>
          </div>
        ) : (
          <div style={{ background: C.greenBg, borderRadius: 16, padding: "28px", border: `1px solid ${C.greenBorder}`, margin: "48px 0", textAlign: "center" }}>
            <div style={{ fontSize: 32, marginBottom: 12 }}>🌐</div>
            <h3 style={{ fontSize: 18, fontWeight: 700, color: C.text, margin: "0 0 8px" }}>Mau coba translate bahasa Sunda langsung?</h3>
            <p style={{ color: C.text2, fontSize: 14, margin: "0 0 20px" }}>Gunakan Translate Sunda secara gratis — Halus (Lemes), Sedang, dan Kasar (Wantah).</p>
            <Link href="/"
              style={{ display: "inline-block", padding: "10px 28px", fontSize: 14, fontWeight: 500, borderRadius: 50, border: "none", background: `linear-gradient(135deg,${G},#0d8f6d)`, color: "#fff", cursor: "pointer", boxShadow: "0 4px 14px rgba(22,163,127,0.3)", textDecoration: "none" }}>
              Coba Sekarang →
            </Link>
          </div>
        )}

        {/* Related */}
        {related.length > 0 && (
          <div style={{ marginBottom: 64 }}>
            <h3 style={{ fontSize: 18, fontWeight: 700, color: C.text, margin: "0 0 20px" }}>Artikel Terkait</h3>
            <div className="steps-grid" style={{ gap: 16 }}>
              {related.map(a => (
                <Link key={a.slug} href={`/blog/${a.slug}`}
                  style={{ textDecoration: "none", display: "block", background: C.bg2, borderRadius: 12, padding: 16, border: `1px solid ${C.border2}`, cursor: "pointer", transition: "background 0.15s" }}
                  onMouseEnter={e => e.currentTarget.style.background = C.greenBg}
                  onMouseLeave={e => e.currentTarget.style.background = C.bg2}>
                  <div style={{ fontSize: 28, marginBottom: 8 }}>{a.cover}</div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: C.text, lineHeight: 1.4 }}>{a.title}</div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
