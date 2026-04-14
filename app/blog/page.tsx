import { Metadata } from "next";
import BlogPage from "@/components/BlogPage";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://bahasajawa.id";

export const metadata: Metadata = {
  title: "Blog Bahasa Jawa | Artikel, Sejarah, Panduan Belajar",
  description: "Kumpulan artikel, tips, sejarah, dan panduan belajar seputar bahasa dan budaya Jawa.",
  alternates: {
    canonical: `${SITE_URL}/blog`,
  },
  openGraph: {
    title: "Blog Bahasa Jawa | Artikel, Sejarah, Panduan Belajar",
    description: "Kumpulan artikel, tips, sejarah, dan panduan belajar seputar bahasa dan budaya Jawa.",
    url: `${SITE_URL}/blog`,
  },
};

export default function Blog() {
  return <BlogPage />;
}
