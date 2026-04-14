// Server component — no "use client" directive
// Renders JSON-LD structured data for SEO rich snippets

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://bahasajawa.id";

const webApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Translate Jawa",
  url: SITE_URL,
  description:
    "Translate bahasa Jawa ke Indonesia atau Indonesia ke Jawa dengan versi Ngoko, Krama Lugu, dan Krama Alus. Gratis dan berbasis AI.",
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
    name: "Translate Jawa",
    url: SITE_URL,
  },
  featureList: [
    "Translate Indonesia ke Jawa Ngoko",
    "Translate Indonesia ke Krama Lugu",
    "Translate Indonesia ke Krama Alus",
    "Translate Jawa ke Indonesia",
  ],
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Translate Jawa",
  url: SITE_URL,
  logo: `${SITE_URL}/icon.png`,
  sameAs: [SITE_URL],
  knowsAbout: [
    { "@type": "Thing", name: "Bahasa Jawa", sameAs: "https://id.wikipedia.org/wiki/Bahasa_Jawa" },
    { "@type": "Thing", name: "Ngoko", sameAs: "https://id.wikipedia.org/wiki/Ngoko" },
    { "@type": "Thing", name: "Krama", sameAs: "https://id.wikipedia.org/wiki/Krama" },
    { "@type": "Thing", name: "Madya", sameAs: "https://id.wikipedia.org/wiki/Madya" },
    { "@type": "Thing", name: "Krama Inggil", sameAs: "https://id.wikipedia.org/wiki/Krama_Inggil" },
    { "@type": "Thing", name: "Aksara Jawa", sameAs: "https://id.wikipedia.org/wiki/Aksara_Jawa" }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Bahasa apa saja yang didukung Translate Jawa?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Mendukung penerjemahan dari bahasa Indonesia ke Jawa dan sebaliknya, dalam versi Ngoko, Krama Lugu, maupun Krama Alus.",
      },
    },
    {
      "@type": "Question",
      name: "Apakah saya harus menginstall aplikasi Translate Jawa?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tidak. Kamu bisa menggunakan layanan ini langsung melalui browser tanpa perlu menginstall apapun.",
      },
    },
    {
      "@type": "Question",
      name: "Bagaimana cara menggunakan Translate Jawa?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pilih bahasa sumber dan tujuan, ketik atau paste teks pada kolom yang tersedia, lalu klik tombol Terjemahkan.",
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

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Translate",
      item: SITE_URL,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Tentang",
      item: `${SITE_URL}/tentang`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Kontak",
      item: `${SITE_URL}/kontak`,
    },
  ],
};

export default function JsonLd() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webApplicationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}
