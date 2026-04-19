// Server component — no "use client" directive
// Renders JSON-LD structured data for SEO rich snippets

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://translatesunda.id";

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

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Translate Sunda",
  url: SITE_URL,
  logo: `${SITE_URL}/icon.png`,
  sameAs: [SITE_URL],
  knowsAbout: [
    { "@type": "Thing", name: "Bahasa Sunda", sameAs: "https://id.wikipedia.org/wiki/Bahasa_Sunda" },
    { "@type": "Thing", name: "Undak Usuk Basa Sunda", sameAs: "https://id.wikipedia.org/wiki/Undak-usuk_basa_Sunda" },
    { "@type": "Thing", name: "Basa Lemes", sameAs: "https://id.wikipedia.org/wiki/Bahasa_Sunda" },
    { "@type": "Thing", name: "Aksara Sunda", sameAs: "https://id.wikipedia.org/wiki/Aksara_Sunda" },
    { "@type": "Thing", name: "Sastra Sunda", sameAs: "https://id.wikipedia.org/wiki/Sastra_Sunda" },
  ]
};

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
    </>
  );
}
