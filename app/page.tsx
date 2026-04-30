import { Metadata } from "next";
import HomePage from "@/components/HomePage";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://translatesunda.id";

// Canonical eksplisit untuk homepage
export const metadata: Metadata = {
  alternates: {
    canonical: SITE_URL,
  },
};

// WebApplication: hanya di homepage — ini adalah halaman utama aplikasi terjemahan
const webApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Translate Sunda",
  url: SITE_URL,
  description:
    "Translate bahasa Sunda ke Indonesia atau Indonesia ke Sunda dengan tingkatan Halus (Lemes), Sedang, dan Kasar (Wantah). Gratis dan berbasis AI.",
  applicationCategory: "UtilitiesApplication",
  operatingSystem: "Web",
  browserRequirements: "Requires JavaScript",
  inLanguage: "id",
  isAccessibleForFree: true,
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "IDR",
  },
  creator: {
    "@type": "Organization",
    name: "Translate Sunda",
    url: SITE_URL,
  },
  featureList: [
    "Translate Indonesia ke Sunda Halus (Lemes)",
    "Translate Indonesia ke Sunda Sedang",
    "Translate Indonesia ke Sunda Kasar (Wantah)",
    "Translate Sunda ke Indonesia",
  ],
};

// WebSite + SearchAction: memungkinkan Google menampilkan Sitelink Searchbox
// di hasil pencarian langsung saat orang mengetik nama brand
const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Translate Sunda",
  url: SITE_URL,
  description: "Terjemahkan bahasa Sunda ke Indonesia atau Indonesia ke Sunda dengan tingkatan Halus, Sedang, dan Kasar.",
  inLanguage: "id",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${SITE_URL}/blog?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

// FAQ: hanya di homepage karena FAQ section secara fisik ada di sini
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Bahasa apa saja yang didukung Translate Sunda?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Mendukung penerjemahan dari bahasa Indonesia ke Sunda dan sebaliknya, dalam tingkatan Halus (Lemes), Sedang, maupun Kasar (Wantah).",
      },
    },
    {
      "@type": "Question",
      name: "Apakah saya harus menginstall aplikasi Translate Sunda?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tidak. Kamu bisa menggunakan layanan ini langsung melalui browser tanpa perlu menginstall apapun.",
      },
    },
    {
      "@type": "Question",
      name: "Bagaimana cara menggunakan Translate Sunda?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pilih bahasa sumber dan tujuan, pilih tingkatan Bahasa Sunda, ketik atau paste teks pada kolom yang tersedia, lalu klik tombol Terjemahkan.",
      },
    },
    {
      "@type": "Question",
      name: "Apakah layanan ini gratis?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ya, layanan ini sepenuhnya gratis tanpa batasan kuota maupun jumlah karakter.",
      },
    },
    {
      "@type": "Question",
      name: "Bagaimana cara request fitur atau melaporkan kesalahan terjemahan?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Kamu bisa melaporkan kesalahan atau mengirim masukan melalui halaman Kontak kami.",
      },
    },
  ],
};

// Catatan: Breadcrumb TIDAK diperlukan untuk homepage.
// Homepage adalah root — Google tidak menampilkan breadcrumb untuk halaman root.
// Breadcrumb hanya bermakna untuk halaman yang memiliki hierarki di bawah root.

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webApplicationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <HomePage />
    </>
  );
}
