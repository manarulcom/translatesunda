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

export default function Kontak() {
  return <KontakPage />;
}
