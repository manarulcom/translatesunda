export const FROM_OPTS = ["Indonesia", "Jawa"] as const;
export const TO_OPTS_MAP: Record<string, string[]> = {
  Indonesia: ["Jawa Ngoko", "Krama Lugu", "Krama Alus"],
  Jawa: ["Indonesia"],
};
export const LEVEL_MAP: Record<string, string> = {
  "Jawa Ngoko": "ngoko",
  "Krama Lugu": "krama lugu",
  "Krama Alus": "krama alus",
};

export const G = "#16a37f";
export const G2 = "#0d8f6d";

export const CAT_COLORS: Record<string, string> = {
  Panduan: "#3b82f6",
  Kosakata: "#8b5cf6",
  Sejarah: "#f59e0b",
  Aksara: "#ec4899",
  Budaya: "#16a37f",
  Linguistik: "#f97316",
  Opini: "#6366f1",
};

export const FEATURES = [
  {
    icon: "💬",
    title: "Translate Jawa Ngoko",
    desc: "Tingkatan paling rendah atau paling tidak formal. Digunakan dalam percakapan sehari-hari dengan teman sebaya, keluarga, atau orang yang lebih muda.",
    from: "Indonesia",
    to: "Jawa Ngoko",
  },
  {
    icon: "🗨️",
    title: "Translate Krama Lugu",
    desc: "Tingkatan menengah atau semi-formal. Digunakan saat berbicara dengan orang yang lebih tua atau orang yang belum dikenal dengan baik.",
    from: "Indonesia",
    to: "Krama Lugu",
  },
  {
    icon: "👑",
    title: "Translate Krama Alus",
    desc: "Tingkatan tertinggi atau paling formal. Digunakan saat berbicara dengan orang yang dihormati, seperti orang tua, atasan, atau tamu.",
    from: "Indonesia",
    to: "Krama Alus",
  },
];

export const FAQS = [
  { q: "Bahasa apa saja yang didukung?", a: "Mendukung penerjemahan dari bahasa Indonesia ke Jawa dan sebaliknya, dalam versi Ngoko, Krama Lugu, maupun Krama Alus." },
  { q: "Apakah harus install aplikasi?", a: "Tidak. Kamu bisa menggunakan layanan ini langsung melalui browser tanpa perlu menginstall apapun." },
  { q: "Bagaimana cara menggunakannya?", a: "Pilih bahasa sumber dan tujuan, ketik atau paste teks pada kolom yang tersedia, lalu klik tombol Terjemahkan." },
  { q: "Bagaimana cara melaporkan kesalahan terjemahan?", a: "Kamu bisa melaporkan kesalahan melalui halaman Kontak kami." },
  { q: "Apakah layanan ini gratis?", a: "Ya, layanan ini sepenuhnya gratis tanpa batasan kuota maupun jumlah karakter." },
];
