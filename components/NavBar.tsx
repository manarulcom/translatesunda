"use client";

import { useState } from "react";
import { G } from "@/lib/constants";
import { useTheme, colors } from "@/lib/theme";

interface NavBarProps {
  page: string;
  setPage: (p: string) => void;
}

export default function NavBar({ page, setPage }: NavBarProps) {
  const { isDark, setTheme } = useTheme();
  const C = colors(isDark);
  const [showThemeMenu, setShowThemeMenu] = useState(false);

  return (
    <nav style={{
      display: "flex", alignItems: "center", justifyContent: "space-between",
      padding: "18px 0 14px", borderBottom: `1px solid ${C.border3}`,
    }}>
      {/* Logo */}
      <div style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer" }} onClick={() => setPage("home")}>
        <div style={{ width: 32, height: 32, borderRadius: 8, overflow: "hidden", flexShrink: 0 }}>
          <img
            src="/icon.png"
            alt="Translate Jawa"
            width={32}
            height={32}
            style={{ objectFit: "cover", display: "block" }}
          />
        </div>
        <span style={{ fontWeight: 600, fontSize: 16, color: C.text }}>Translate Jawa</span>
        <span style={{ fontSize: 11, border: `1px solid ${C.border}`, borderRadius: 5, padding: "2px 6px", color: C.text3, fontWeight: 500 }}>ID</span>
      </div>

      {/* Nav links + Theme toggle */}
      <div style={{ display: "flex", gap: 24, fontSize: 14, alignItems: "center" }}>
        {([["Translate","home"],["Blog","blog"],["Tentang","tentang"],["Kontak","kontak"]] as [string,string][]).map(([label,p]) => (
          <span key={p} onClick={() => setPage(p)} style={{
            cursor: "pointer", color: page === p ? G : C.text2,
            fontWeight: page === p ? 600 : 400, transition: "color 0.15s",
          }}>{label}</span>
        ))}

        {/* Theme toggle dropdown */}
        <div style={{ position: "relative" }} onBlur={() => setTimeout(() => setShowThemeMenu(false), 150)}>
          <button
            onClick={() => setShowThemeMenu(o => !o)}
            style={{
              width: 34, height: 34, borderRadius: 8, border: `1.5px solid ${C.border}`,
              background: C.bg2, cursor: "pointer", display: "flex",
              alignItems: "center", justifyContent: "center", fontSize: 15,
              color: C.text2, transition: "border-color 0.15s, background 0.2s",
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = G; e.currentTarget.style.color = G; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = C.border; e.currentTarget.style.color = C.text2; }}
          >
            {isDark ? "🌙" : "☀️"}
          </button>

          {showThemeMenu && (
            <div style={{
              position: "absolute", top: "calc(100% + 8px)", right: 0, zIndex: 99,
              background: C.bg, border: `1.5px solid ${C.border}`,
              borderRadius: 12, boxShadow: `0 8px 24px ${C.shadow}`,
              overflow: "hidden", minWidth: 130,
            }}>
              {([
                ["☀️", "Terang", "light"],
                ["🌙", "Gelap", "dark"],
              ] as [string, string, "light"|"dark"][]).map(([icon, label, t]) => (
                <div
                  key={t}
                  onClick={() => { setTheme(t); setShowThemeMenu(false); }}
                  style={{
                    display: "flex", alignItems: "center", gap: 10,
                    padding: "10px 16px", fontSize: 14, cursor: "pointer",
                    color: (isDark ? t==="dark" : t==="light") ? G : C.text,
                    fontWeight: (isDark ? t==="dark" : t==="light") ? 600 : 400,
                    background: (isDark ? t==="dark" : t==="light") ? C.greenBg : "transparent",
                    transition: "background 0.1s",
                  }}
                  onMouseEnter={e => { if (!((isDark ? t==="dark" : t==="light"))) e.currentTarget.style.background = C.bg2; }}
                  onMouseLeave={e => { if (!((isDark ? t==="dark" : t==="light"))) e.currentTarget.style.background = "transparent"; }}
                >
                  <span>{icon}</span>
                  <span>{label}</span>
                  {(isDark ? t==="dark" : t==="light") && (
                    <span style={{ marginLeft: "auto", color: G, fontSize: 12 }}>✓</span>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
