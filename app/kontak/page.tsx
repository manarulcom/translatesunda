import { Metadata } from "next";
import KontakPage from "@/components/KontakPage";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://translatesunda.id";

export const metadata: Metadata = {
  title: "Kontak | Translate Sunda",
  description: "Hubungi kami untuk pertanyaan, saran, atau kerja sama.",
  alternates: {
    canonical: `${SITE_URL}/kontak`,
  },
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Translate Sunda", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Kontak", item: `${SITE_URL}/kontak` },
  ],
};

export default function Kontak() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <KontakPage />
    </>
  );
}
