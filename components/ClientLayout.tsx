"use client";

import { usePathname } from "next/navigation";
import { ThemeProvider, useTheme, colors } from "@/lib/theme";
import NavBar from "@/components/NavBar";

function ClientLayoutInner({ children }: { children: React.ReactNode }) {
  const { isDark } = useTheme();
  const C = colors(isDark);

  return (
    <div style={{ minHeight: "100vh", background: C.bg, transition: "background 0.2s, color 0.2s" }}>
      <div style={{
        fontFamily: "'Inter', system-ui, sans-serif",
        color: C.text,
        maxWidth: 900,
        margin: "0 auto",
        padding: "0 16px",
      }}>
        <NavBar />
        {children}
        <footer style={{
          borderTop: `1px solid ${C.border3}`,
          padding: "24px 0",
          textAlign: "center",
          fontSize: 14,
          color: C.text3,
          marginTop: 64,
        }}>
          © 2026 TranslateSunda.id - Translate Bahasa Sunda.
        </footer>
      </div>
    </div>
  );
}

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <ClientLayoutInner>{children}</ClientLayoutInner>
    </ThemeProvider>
  );
}
