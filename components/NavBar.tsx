"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { G } from "@/lib/constants";
import { useTheme, colors } from "@/lib/theme";

const NAV_LINKS = [
  ["Aksara Sunda", "/aksara"],
  ["Blog", "/blog"],
  ["Tentang", "/tentang"],
  ["Kontak", "/kontak"]
] as [string,string][];

export default function NavBar() {
  const pathname = usePathname();
  const { isDark, setTheme } = useTheme();
  const C = colors(isDark);
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenus() {
    setMenuOpen(false);
  }


  return (
    <nav style={{ borderBottom: `1px solid ${C.border3}`, position: "relative" }}>
      {/* ── Main bar ── */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 0" }}>

        {/* Logo */}
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer", textDecoration: "none" }} onClick={closeMenus}>
          <div style={{ width: 32, height: 32, borderRadius: 8, overflow: "hidden", flexShrink: 0 }}>
            <img src="/icon.png" alt="Translate Sunda" width={32} height={32} style={{ objectFit: "cover", display: "block" }} />
          </div>
          <span style={{ fontWeight: 600, fontSize: 16, color: C.text }}>Translate Sunda</span>
          <span style={{ fontSize: 11, border: `1px solid ${C.border}`, borderRadius: 5, padding: "2px 6px", color: C.text3, fontWeight: 500 }}>ID</span>
        </Link>

        {/* ── Desktop nav links + theme toggle ── */}
        <div className="nav-links-desktop" style={{ gap: 24, fontSize: 14, alignItems: "center" }}>
          {NAV_LINKS.map(([label, href]) => {
            // match exactly for root, or startsWith for blog
            const isActive = href === "/" ? pathname === "/" : pathname?.startsWith(href);
            return (
              <Link key={href} href={href} style={{
                cursor: "pointer", color: isActive ? G : C.text2,
                fontWeight: isActive ? 600 : 400, transition: "color 0.15s", textDecoration: "none"
              }}>{label}</Link>
            );
          })}

          {/* Theme toggle */}
          <button
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className="theme-toggle"
            aria-label="Toggle Dark Mode"
            style={{
              width: 34, height: 34, borderRadius: 8, border: `1.5px solid ${C.border}`,
              background: C.bg2, cursor: "pointer", display: "flex",
              alignItems: "center", justifyContent: "center", fontSize: 15,
              color: C.text2, transition: "border-color 0.15s, background 0.2s",
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = G; e.currentTarget.style.color = G; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = C.border; e.currentTarget.style.color = C.text2; }}
          >
            {isDark ? "☀️" : "🌙"}
          </button>
        </div>

        {/* ── Hamburger button (mobile only) ── */}
        <button
          className="nav-hamburger"
          onClick={() => setMenuOpen(o => !o)}
          style={{
            width: 38, height: 38, border: `1.5px solid ${C.border}`, borderRadius: 8,
            background: C.bg2, cursor: "pointer",
            flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 5,
          }}
          aria-label="Buka menu"
        >
          <span style={{ display: "block", width: 18, height: 2, background: C.text, borderRadius: 2, transition: "all 0.22s", transform: menuOpen ? "rotate(45deg) translateY(7px)" : "none" }} />
          <span style={{ display: "block", width: 18, height: 2, background: C.text, borderRadius: 2, transition: "all 0.22s", opacity: menuOpen ? 0 : 1 }} />
          <span style={{ display: "block", width: 18, height: 2, background: C.text, borderRadius: 2, transition: "all 0.22s", transform: menuOpen ? "rotate(-45deg) translateY(-7px)" : "none" }} />
        </button>
      </div>

      {/* ── Mobile dropdown menu ── */}
      {menuOpen && (
        <div style={{
          position: "absolute", top: "100%", left: "-1rem", right: "-1rem", zIndex: 200,
          background: C.bg, borderTop: `1px solid ${C.border3}`,
          borderBottom: `1px solid ${C.border3}`,
          boxShadow: `0 8px 24px ${C.shadow}`,
          animation: "fadeIn 0.15s ease",
        }}>
          {/* Nav links */}
          {NAV_LINKS.map(([label, href]) => {
            const isActiveLink = href === "/" ? pathname === "/" : pathname?.startsWith(href);
            return (
              <Link key={href} href={href} onClick={closeMenus} style={{
                display: "block", padding: "15px 20px", fontSize: 15, cursor: "pointer", textDecoration: "none",
                color: isActiveLink ? G : C.text, fontWeight: isActiveLink ? 600 : 400,
                borderLeft: isActiveLink ? `3px solid ${G}` : "3px solid transparent",
                background: "transparent", transition: "background 0.1s",
              }}
              >
                {label}
              </Link>
            );
          })}

          {/* Theme toggle in mobile menu */}
          <div style={{ borderTop: `1px solid ${C.border3}`, padding: "12px 20px 16px" }}>
            <div style={{ fontSize: 11, color: C.text3, marginBottom: 10, fontWeight: 600, letterSpacing: "0.05em" }}>TAMPILAN</div>
            <div style={{ display: "flex", gap: 8 }}>
              <button onClick={() => { setTheme(isDark ? "light" : "dark"); setMenuOpen(false); }}
                style={{
                  flex: 1, padding: "9px 0", fontSize: 13, borderRadius: 8, cursor: "pointer",
                  border: `1.5px solid ${C.border}`,
                  background: C.bg2,
                  color: C.text2, fontWeight: 600, display: "flex", alignItems: "center", justifyContent: "center", gap: 8
                }}
              >
                {isDark ? "☀️ Mode Terang" : "🌙 Mode Gelap"}
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
