import { Metadata } from "next";
import TentangPage from "@/components/TentangPage";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://translatesunda.id";

export const metadata: Metadata = {
  title: "Tentang Translate Sunda",
  description: "Pelajari lebih lanjut tentang Translate Sunda, misi kami, dan tim di balik layar.",
  alternates: {
    canonical: `${SITE_URL}/tentang`,
  },
};

export default function Tentang() {
  return <TentangPage />;
}
