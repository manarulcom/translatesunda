import { MetadataRoute } from "next";
import { ARTICLES } from "@/lib/articles";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://translatesunda.id";

// Priority per category: Aksara & Panduan paling relevan dengan fitur utama
const CATEGORY_PRIORITY: Record<string, number> = {
  Aksara: 0.85,
  Panduan: 0.82,
  Kosakata: 0.80,
  Sastra: 0.78,
  Sejarah: 0.76,
  Linguistik: 0.76,
  Budaya: 0.75,
  Opini: 0.70,
};

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/aksara`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/tentang`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/kontak`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];

  const articleRoutes: MetadataRoute.Sitemap = ARTICLES.map((article) => ({
    url: `${SITE_URL}/blog/${article.slug}`,
    lastModified: new Date(article.isoDate),
    changeFrequency: "monthly" as const,
    priority: CATEGORY_PRIORITY[article.category] ?? 0.75,
  }));

  return [...routes, ...articleRoutes];
}
