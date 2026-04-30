import { Metadata } from "next";
import TentangPage from "@/components/TentangPage";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://translatesunda.id";

export const metadata: Metadata = {
  title: "Tentang Translate Sunda",
  description: "Pelajari lebih lanjut tentang Translate Sunda — platform terjemahan bahasa Sunda online gratis dengan fitur Aksara Sunda, undak usuk basa, dan blog edukasi budaya Sunda.",
  alternates: {
    canonical: `${SITE_URL}/tentang`,
  },
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Translate Sunda", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Tentang", item: `${SITE_URL}/tentang` },
  ],
};

const aboutPageLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": `${SITE_URL}/tentang`,
  url: `${SITE_URL}/tentang`,
  name: "Tentang Translate Sunda",
  description:
    "Translate Sunda adalah platform terjemahan bahasa Sunda online yang menyediakan terjemahan Indonesia ke Sunda (Halus, Sedang, Kasar) dan fitur Aksara Sunda interaktif.",
  inLanguage: "id",
  isPartOf: {
    "@type": "WebSite",
    name: "Translate Sunda",
    url: SITE_URL,
  },
  mainEntity: {
    "@type": "Organization",
    "@id": SITE_URL,
    name: "Translate Sunda",
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/icon.png`,
    },
    description:
      "Platform terjemahan bahasa Sunda online gratis. Menyediakan terjemahan Indonesia ke Sunda dalam tingkatan Halus (Lemes), Sedang, dan Kasar (Wantah), serta fitur Aksara Sunda dan blog edukasi budaya Sunda.",
    knowsAbout: [
      { "@type": "Thing", name: "Bahasa Sunda", sameAs: "https://id.wikipedia.org/wiki/Bahasa_Sunda" },
      { "@type": "Thing", name: "Aksara Sunda", sameAs: "https://id.wikipedia.org/wiki/Aksara_Sunda" },
      { "@type": "Thing", name: "Undak Usuk Basa Sunda", sameAs: "https://id.wikipedia.org/wiki/Undak-usuk_basa_Sunda" },
    ],
    areaServed: {
      "@type": "Country",
      name: "Indonesia",
    },
    audience: {
      "@type": "Audience",
      audienceType: "Penutur dan pelajar bahasa Sunda",
    },
  },
};

export default function Tentang() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageLd) }} />
      <TentangPage />
    </>
  );
}
