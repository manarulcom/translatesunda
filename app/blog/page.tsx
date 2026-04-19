import { Metadata } from "next";
import BlogPage from "@/components/BlogPage";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://translatesunda.id";

export const metadata: Metadata = {
  title: "Blog Bahasa Sunda | Artikel, Sejarah, Panduan Belajar",
  description: "Kumpulan artikel, tips, sejarah, dan panduan belajar seputar bahasa dan budaya Sunda.",
  alternates: {
    canonical: `${SITE_URL}/blog`,
  },
  openGraph: {
    title: "Blog Bahasa Sunda | Artikel, Sejarah, Panduan Belajar",
    description: "Kumpulan artikel, tips, sejarah, dan panduan belajar seputar bahasa dan budaya Sunda.",
    url: `${SITE_URL}/blog`,
  },
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Translate", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` }
  ]
};

export default function Blog() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <BlogPage />
    </>
  );
}
