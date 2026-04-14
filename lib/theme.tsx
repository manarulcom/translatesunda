"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Theme = "light" | "dark";

interface ThemeCtx {
  isDark: boolean;
  setTheme: (t: Theme) => void;
}

const ThemeContext = createContext<ThemeCtx>({ isDark: false, setTheme: () => {} });

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("tj-theme");
    if (saved === "dark") setIsDark(true);
  }, []);

  function setTheme(t: Theme) {
    setIsDark(t === "dark");
    localStorage.setItem("tj-theme", t);
  }

  return (
    <ThemeContext.Provider value={{ isDark, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}

export interface C {
  bg: string; bg2: string; bg3: string; bg4: string;
  text: string; text2: string; text3: string; text4: string;
  border: string; border2: string; border3: string; border4: string;
  greenBg: string; greenBorder: string; shadow: string; inputBg: string;
}

const LIGHT: C = {
  bg: "#ffffff", bg2: "#f8fafc", bg3: "#f0fdf9", bg4: "#f8f9fa",
  text: "#1a202c", text2: "#718096", text3: "#a0aec0", text4: "#4a5568",
  border: "#e2e8f0", border2: "#edf2f7", border3: "#f0f0f0", border4: "#e8edf2",
  greenBg: "#f0fdf9", greenBorder: "#bbf7e8", shadow: "rgba(0,0,0,0.06)", inputBg: "#fff",
};

const DARK: C = {
  bg: "#0f1117", bg2: "#1a1f2e", bg3: "#152820", bg4: "#1e2230",
  text: "#f1f5f9", text2: "#94a3b8", text3: "#4a5568", text4: "#cbd5e1",
  border: "#2d3748", border2: "#2d3748", border3: "#2d3748", border4: "#1e2d3d",
  greenBg: "#152820", greenBorder: "#1e4035", shadow: "rgba(0,0,0,0.4)", inputBg: "#1a1f2e",
};

export function colors(isDark: boolean): C {
  return isDark ? DARK : LIGHT;
}
