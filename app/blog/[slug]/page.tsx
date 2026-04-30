import { Metadata } from "next";
import { notFound } from "next/navigation";
import { ARTICLES } from "@/lib/articles";
import ArticlePage from "@/components/ArticlePage";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://translatesunda.id";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = ARTICLES.find((a) => a.slug === slug);
  
  if (!article) {
    return { title: "Artikel Tidak Ditemukan" };
  }

  const url = `${SITE_URL}/blog/${article.slug}`;

  return {
    title: article.title,
    description: article.excerpt,
    alternates: { canonical: url },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      url,
      type: "article",
      publishedTime: article.isoDate,
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
    },
  };
}

// Generate static params for all articles so they are pre-rendered at build time
export function generateStaticParams() {
  return ARTICLES.map((article) => ({
    slug: article.slug,
  }));
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const article = ARTICLES.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    image: [`${SITE_URL}/og-image.png`], 
    datePublished: article.isoDate,
    dateModified: article.isoDate,  // update ini jika artikel direvisi
    author: [{
        "@type": "Organization",
        name: "Translate Sunda",
        url: SITE_URL
    }],
    publisher: {
      "@type": "Organization",
      name: "Translate Sunda",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/icon.png`
      }
    }
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Translate Sunda", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
      { "@type": "ListItem", position: 3, name: article.title, item: `${SITE_URL}/blog/${article.slug}` }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <ArticlePage article={article} />
    </>
  );
}
