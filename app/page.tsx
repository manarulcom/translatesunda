"use client";

import { useState } from "react";
import { ThemeProvider, useTheme, colors } from "@/lib/theme";
import NavBar from "@/components/NavBar";
import HomePage from "@/components/HomePage";
import BlogPage from "@/components/BlogPage";
import ArticlePage from "@/components/ArticlePage";
import TentangPage from "@/components/TentangPage";
import KontakPage from "@/components/KontakPage";
import { Article } from "@/lib/articles";
import { G } from "@/lib/constants";

function AppInner() {
  const [page, setPage] = useState("home");
  const [fromLang, setFromLang] = useState("");
  const [toLang, setToLang] = useState("");
  const [article, setArticle] = useState<Article | null>(null);
  const { isDark } = useTheme();
  const C = colors(isDark);

  function goPage(p: string) {
    setPage(p);
    if (typeof window !== "undefined") window.scrollTo(0, 0);
  }

  return (
    <div style={{ minHeight: "100vh", background: C.bg, transition: "background 0.2s, color 0.2s" }}>
      <div style={{
        fontFamily: "'Inter', system-ui, sans-serif",
        color: C.text,
        maxWidth: 900,
        margin: "0 auto",
        padding: "0 16px",
      }}>
        <NavBar page={page === "article" ? "blog" : page} setPage={goPage} />
        {page === "home" && (
          <HomePage fromLang={fromLang} setFromLang={setFromLang} toLang={toLang} setToLang={setToLang} setPage={goPage} />
        )}
        {page === "blog" && <BlogPage setPage={goPage} setArticle={setArticle} />}
        {page === "article" && article && <ArticlePage article={article} setPage={goPage} setArticle={setArticle} />}
        {page === "tentang" && <TentangPage />}
        {page === "kontak" && <KontakPage />}

        <footer style={{
          borderTop: `1px solid ${C.border3}`,
          padding: "24px 0",
          textAlign: "center",
          fontSize: 14,
          color: C.text3,
        }}>
          © 2026 BahasaJawa.id - Translate Bahasa Jawa.
        </footer>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppInner />
    </ThemeProvider>
  );
}
