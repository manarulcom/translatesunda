import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import JsonLd from "./JsonLd";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://translatesunda.id";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: "√ Translate Sunda ke Indonesia : Halus, Sedang, Kasar",
    template: "%s | Translate Sunda ke Indonesia",
  },
  description:
    "Translate Bahasa Sunda ke Indonesia atau Indonesia ke Bahasa Sunda dengan tingkatan Halus (Lemes), Sedang, dan Kasar (Wantah). Gratis dan berbasis AI.",
  keywords: [
    "translate sunda",
    "terjemah bahasa sunda",
    "bahasa sunda ke indonesia",
    "indonesia ke sunda",
    "sunda halus",
    "sunda lemes",
    "sunda wantah",
    "translator bahasa sunda",
    "translate sunda online",
    "undak usuk basa sunda",
  ],

  authors: [{ name: "Translate Sunda" }],
  creator: "Translate Sunda",
  publisher: "Translate Sunda",


  openGraph: {
    type: "website",
    locale: "id_ID",
    url: SITE_URL,
    siteName: "Translate Sunda",
    title: "√ Translate Sunda ke Indonesia : Halus, Sedang, Kasar",
    description:
      "Translate Bahasa Sunda ke Indonesia atau Indonesia ke Bahasa Sunda dengan tingkatan Halus (Lemes), Sedang, dan Kasar (Wantah). Gratis dan berbasis AI.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Translate Sunda — Terjemahan Bahasa Sunda Online Gratis",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "√ Translate Sunda ke Indonesia : Halus, Sedang, Kasar",
    description:
      "Translate Bahasa Sunda ke Indonesia atau Indonesia ke Bahasa Sunda dengan tingkatan Halus (Lemes), Sedang, dan Kasar (Wantah).",
    images: ["/og-image.png"],
    creator: "@translatesundaid",
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
    google: "_GK8gS6dCA4J2Oq9oIk6JErIuHo26DvhUgufxej3frI",
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
          src="https://www.googletagmanager.com/gtag/js?id=G-Y4646BYPHN"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-Y4646BYPHN');
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
