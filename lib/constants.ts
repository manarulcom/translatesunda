export const FROM_OPTS = ["Indonesia", "Sunda"] as const;
export const TO_OPTS_MAP: Record<string, string[]> = {
  Indonesia: ["Sunda Halus (Lemes)", "Sunda Sedang", "Sunda Kasar (Wantah)"],
  Sunda: ["Indonesia"],
};
export const LEVEL_MAP: Record<string, string> = {
  "Sunda Halus (Lemes)": "lemes",
  "Sunda Sedang": "sedeng",
  "Sunda Kasar (Wantah)": "wantah",
};

export const SUNDA_LEVELS = ["lemes", "sedeng", "wantah"] as const;

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
    title: "Translate Sunda Halus (Lemes)",
    desc: "Tingkatan paling halus dan sopan. Digunakan dalam percakapan dengan orang yang lebih tua, dihormati, atau dalam situasi resmi.",
    from: "Indonesia",
    to: "Sunda Halus (Lemes)",
  },
  {
    icon: "🗨️",
    title: "Translate Sunda Sedang",
    desc: "Tingkatan umum yang dipakai sehari-hari. Cocok untuk percakapan dengan orang yang sudah dikenal atau situasi tidak terlalu formal.",
    from: "Indonesia",
    to: "Sunda Sedang",
  },
  {
    icon: "👑",
    title: "Translate Sunda Kasar (Wantah)",
    desc: "Tingkatan informal yang digunakan antar teman dekat atau keluarga dalam suasana santai dan akrab.",
    from: "Indonesia",
    to: "Sunda Kasar (Wantah)",
  },
];

export const FAQS = [
  { q: "Bahasa apa saja yang didukung?", a: "Mendukung penerjemahan dari bahasa Indonesia ke Sunda dan sebaliknya, dalam tingkatan Halus (Lemes), Sedang, maupun Kasar (Wantah)." },
  { q: "Apakah harus install aplikasi?", a: "Tidak. Kamu bisa menggunakan layanan ini langsung melalui browser tanpa perlu menginstall apapun." },
  { q: "Bagaimana cara menggunakannya?", a: "Pilih bahasa sumber dan tujuan, pilih tingkatan Bahasa Sunda, ketik atau paste teks pada kolom yang tersedia, lalu klik tombol Terjemahkan." },
  { q: "Bagaimana cara melaporkan kesalahan terjemahan?", a: "Kamu bisa melaporkan kesalahan melalui halaman Kontak kami." },
  { q: "Apakah layanan ini gratis?", a: "Ya, layanan ini sepenuhnya gratis tanpa batasan kuota maupun jumlah karakter." },
];
