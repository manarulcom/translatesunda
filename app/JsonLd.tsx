// Server component — no "use client" directive
// Renders JSON-LD structured data for SEO rich snippets
// Only Organization schema is global (appears on every page).
// Page-specific schemas (WebApplication, FAQ, Breadcrumb, Article) live in each page file.

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://translatesunda.id";

// Organization schema: global — helps Google understand the brand across all pages
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Translate Sunda",
  url: SITE_URL,
  logo: {
    "@type": "ImageObject",
    url: `${SITE_URL}/icon.png`,
    width: 32,
    height: 32,
  },
  sameAs: [SITE_URL],
  knowsAbout: [
    { "@type": "Thing", name: "Bahasa Sunda", sameAs: "https://id.wikipedia.org/wiki/Bahasa_Sunda" },
    { "@type": "Thing", name: "Undak Usuk Basa Sunda", sameAs: "https://id.wikipedia.org/wiki/Undak-usuk_basa_Sunda" },
    { "@type": "Thing", name: "Basa Lemes", sameAs: "https://id.wikipedia.org/wiki/Bahasa_Sunda" },
    { "@type": "Thing", name: "Aksara Sunda", sameAs: "https://id.wikipedia.org/wiki/Aksara_Sunda" },
    { "@type": "Thing", name: "Sastra Sunda", sameAs: "https://id.wikipedia.org/wiki/Sastra_Sunda" },
  ],
};

export default function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
    />
  );
}
