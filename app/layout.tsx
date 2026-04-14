import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import JsonLd from "./JsonLd";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://bahasajawa.id";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: "√ Translate Jawa ke Indonesia : Ngoko, Krama Lugu, Krama Alus",
    template: "%s | Translate Jawa ke Indonesia",
  },
  description:
    "Translate Bahasa Jawa ke Indonesia atau Indonesia ke Bahasa Jawa dengan versi Ngoko, Krama Lugu, dan Krama Alus (Krama Inggil).",
  keywords: [
    "translate jawa",
    "terjemah bahasa jawa",
    "bahasa jawa ke indonesia",
    "indonesia ke jawa",
    "krama alus",
    "krama lugu",
    "jawa ngoko",
    "translator bahasa jawa",
    "translate jawa online",
    "krama inggil",
  ],

  authors: [{ name: "Translate Jawa" }],
  creator: "Translate Jawa",
  publisher: "Translate Jawa",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "id_ID",
    url: SITE_URL,
    siteName: "Translate Jawa",
    title: "√ Translate Jawa ke Indonesia : Ngoko, Krama Lugu, Krama Alus",
    description:
      "Translate Bahasa Jawa ke Indonesia atau Indonesia ke Bahasa Jawa dengan versi Ngoko, Krama Lugu, dan Krama Alus (Krama Inggil).",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Translate Jawa — Terjemahan Bahasa Jawa Online Gratis",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "√ Translate Jawa ke Indonesia : Ngoko, Krama Lugu, Krama Alus",
    description:
      "Translate Bahasa Jawa ke Indonesia atau Indonesia ke Bahasa Jawa dengan versi Ngoko, Krama Lugu, dan Krama Alus (Krama Inggil).",
    images: ["/og-image.png"],
    creator: "@bahasajawaid",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: [
      { url: "/icon.png", sizes: "any" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180" },
    ],
  },
  verification: {
    google: "On-s97fmEqILNE3_81aK_tduEriR4enmDt_VhGXONAk",
  },
};

import ClientLayout from "@/components/ClientLayout";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <head>
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-ES9XHP1DSB"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-ES9XHP1DSB');
          `}
        </Script>
      </head>
      <body>
        <JsonLd />
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
