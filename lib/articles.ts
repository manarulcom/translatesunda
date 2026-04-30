export interface Article {
  slug: string;
  title: string;
  category: string;
  date: string;       // Human-readable display: "10 April 2026"
  isoDate: string;    // ISO 8601 for schema.org: "2026-04-10"
  readTime: string;
  cover: string;
  excerpt: string;
  body: string;
}

export const ARTICLES: Article[] = [
  {
    slug: "mengenal-undak-usuk-basa-sunda",
    title: "Mengenal Undak Usuk Basa Sunda: Halus, Sedang, dan Kasar",
    category: "Panduan",
    date: "10 April 2026",
    isoDate: "2026-04-10",
    readTime: "5 menit",
    cover: "🎓",
    excerpt: "Bahasa Sunda memiliki sistem tingkatan tutur yang disebut undak usuk basa. Pelajari perbedaan tingkatan Halus (Lemes), Sedang, dan Kasar (Wantah) secara lengkap.",
    body: `Bahasa Sunda adalah salah satu bahasa daerah terbesar di Indonesia dengan sistem sosiolinguistik yang unik. Tidak seperti bahasa Indonesia yang relatif seragam, bahasa Sunda memiliki tingkatan tutur yang disebut "undak usuk basa" — sebuah sistem yang mencerminkan hubungan sosial antara pembicara dan lawan bicaranya.

Sistem undak usuk basa bukanlah sekadar aturan tata bahasa biasa. Ini adalah cerminan filosofi hidup masyarakat Sunda yang menjunjung tinggi kesopanan, hierarki sosial, dan penghormatan kepada sesama — terutama kepada yang lebih tua atau memiliki kedudukan lebih tinggi.

**Basa Lemes (Halus) — Bahasa Hormat**
Basa lemes adalah tingkatan paling halus dan sopan. Digunakan ketika berbicara dengan orang yang lebih tua, dihormati, atau dalam situasi formal seperti upacara adat, rapat resmi, atau pidato. Ciri khasnya adalah penggunaan kosakata khusus yang berbeda jauh dari bahasa sehari-hari.

Contoh: "Abdi badé angkat ka mana?" (Saya mau pergi ke mana?)

Kata-kata khas basa lemes:
- Saya = Abdi, Kamu = Anjeun
- Makan = Neda, Tidur = Kulem, Pergi = Angkat
- Rumah = Bumi, Nama = Nami, Bilang = Nyarios

**Basa Sedeng (Sedang) — Bahasa Umum**
Basa sedeng adalah tingkatan menengah yang paling sering digunakan dalam percakapan sehari-hari. Cocok untuk berbicara dengan orang sebaya, teman yang sudah kenal, atau situasi yang tidak terlalu formal.

Contoh: "Kuring rék indit ka mana?" (Saya mau pergi ke mana?)

Kata-kata khas basa sedang:
- Saya = Kuring, Kamu = Manéh (untuk teman dekat) / Anjeun
- Makan = Dahar, Tidur = Sare, Pergi = Indit
- Rumah = Imah, Nama = Ngaran

**Basa Wantah (Kasar) — Bahasa Santai**
Basa wantah digunakan dalam percakapan santai antar teman dekat atau keluarga yang sudah sangat akrab. Tingkatan ini sangat informal dan tidak cocok untuk situasi resmi.

Contoh: "Aing rék ka mana?" (Saya mau ke mana?)

Perlu diingat: "kasar" di sini bukan berarti kasar atau tidak sopan secara universal — melainkan hanya informal. Menggunakannya dengan teman sebaya yang sudah akrab adalah hal yang sangat normal dalam budaya Sunda.

**Kapan Harus Menggunakan Tingkatan Mana?**
- Dengan orang tua, guru, atasan, atau orang yang baru dikenal → **Basa Lemes**
- Dengan teman sekolah, rekan kerja, atau orang sebaya → **Basa Sedang**
- Dengan teman sangat dekat, saudara, atau sahabat karib → **Basa Wantah** (opsional)

**Kenapa Sistem Ini Penting?**
Memahami ketiga tingkatan ini adalah kunci untuk berkomunikasi secara tepat dalam budaya Sunda. Kesalahan dalam memilih tingkatan bisa dianggap tidak sopan, meskipun tidak disengaja. Seorang pendatang yang menggunakan basa wantah kepada orang tua Sunda, misalnya, bisa dianggap tidak menghormati.

Ingin langsung mempraktikkan ketiga tingkatan ini? Coba [Translate Sunda](/) — kamu bisa memilih terjemahan dalam tingkatan Halus (Lemes), Sedang, maupun Kasar (Wantah) secara langsung. Gratis dan tanpa registrasi!

Baca juga: [50 Kata Sapaan Bahasa Sunda yang Wajib Kamu Tahu](/blog/kata-sapaan-bahasa-sunda) dan [Tata Krama Berbicara dalam Bahasa Sunda](/blog/tata-krama-bahasa-sunda).`,
  },
  {
    slug: "kata-sapaan-bahasa-sunda",
    title: "50 Kata Sapaan Bahasa Sunda yang Wajib Kamu Tahu",
    category: "Kosakata",
    date: "7 April 2026",
    isoDate: "2026-04-07",
    readTime: "4 menit",
    cover: "👋",
    excerpt: "Dari 'wilujeng énjing' hingga 'hatur nuhun', berikut kumpulan kata sapaan bahasa Sunda yang paling sering digunakan dalam kehidupan sehari-hari.",
    body: `Sapaan adalah pintu masuk sebuah percakapan. Dalam budaya Sunda, cara menyapa seseorang mencerminkan siapa kita dan bagaimana kita menghormati lawan bicara. Kesalahan dalam bersapaan bisa memberikan kesan tidak sopan, bahkan sebelum percakapan utama dimulai.

Pemilihan sapaan yang tepat erat kaitannya dengan sistem [undak usuk basa Sunda](/blog/mengenal-undak-usuk-basa-sunda) — tingkatan tutur yang membedakan cara berbicara kepada orang yang berbeda statusnya.

**Sapaan Waktu (Formal & Lemes)**
- Wilujeng énjing — Selamat pagi
- Wilujeng siang — Selamat siang
- Wilujeng sonten — Selamat sore
- Wilujeng wengi — Selamat malam
- Wilujeng sumping — Selamat datang
- Wilujeng istirahat — Selamat istirahat
- Wilujeng sareng — Selamat makan (bersama)

**Sapaan Waktu (Sedang/Harian)**
- Isuk-isuk — Pagi-pagi
- Peuting — Malam
- Geus beurang — Sudah siang

**Ungkapan Terima Kasih & Maaf**
- Hatur nuhun — Terima kasih (Lemes, paling sopan)
- Nuhun — Terima kasih (Sedang)
- Hapunten — Mohon maaf (Lemes)
- Punten — Permisi / Maaf ringan
- Punten bilih ngaganggu — Maaf jika mengganggu

**Kata Ganti Orang (3 Tingkatan)**
| Arti | Lemes | Sedang | Wantah |
|------|-------|--------|--------|
| Saya | Abdi | Kuring | Aing |
| Kamu | Anjeun | Manéh | Sia / Maneh |
| Dia | Anjeunna | Manéhna | Manehna |
| Kami | Urang | Urang | Urang |

**Sapaan Kekeluargaan**
- Bapa / Rama — Ayah (Sedang / Lemes)
- Ibu / Ema — Ibu
- Aki — Kakek, Nini — Nenek
- Aa — Kakak laki-laki, Téh — Kakak perempuan
- Adi — Adik
- Ua — Paman/Bibi yang lebih tua dari orang tua
- Bibi / Mamang — Bibi / Paman

**Sapaan Profesional & Formal**
- Pak / Bu — sama dengan Indonesia
- Juragan — Tuan / Bos (tidak umum tapi masih dipakai di daerah)
- Diajeng — Panggilan hormat untuk wanita muda bangsawan

**Ungkapan Perpisahan**
- Wilujeng ka payun — Selamat jalan (untuk yang pergi)
- Wilujeng cicing — Selamat tinggal (untuk yang ditinggal)
- Hatur nuhun kana tatamu na — Terima kasih atas kunjungannya

**Tips Menggunakan Sapaan dengan Benar**
1. Selalu gunakan "Punten" sebelum bertanya pada orang yang tidak dikenal
2. Gunakan "Hatur nuhun" (bukan sekadar "Nuhun") kepada orang yang lebih tua
3. Saat masuk rumah orang Sunda, ucapkan "Sampurasun!" — responsnya adalah "Rampes!"
4. Hindari memanggil nama langsung untuk orang yang lebih tua, gunakan gelar (Bapa, Ibu, Aa, Téh)

**Sapaan Khas yang Sering Didengar**
- "Kumaha damang?" — Apa kabar? (Lemes)
- "Kumaha baraya?" — Apa kabar keluarga?
- "Ti mana?" — Dari mana?
- "Rék ka mana?" — Mau ke mana?

Dengan menguasai kata-kata sapaan ini, kamu sudah bisa memulai percakapan dasar dalam bahasa Sunda dengan sopan dan percaya diri. Untuk memahami lebih dalam kapan harus memakai sapaan mana, baca panduan [Tata Krama Berbicara dalam Bahasa Sunda](/blog/tata-krama-bahasa-sunda).

Ingin langsung berlatih? Gunakan [Translate Sunda](/) untuk menerjemahkan percakapan kamu ke dalam tiga tingkatan bahasa Sunda sekaligus!`,
  },
  {
    slug: "sejarah-bahasa-sunda",
    title: "Sejarah Panjang Bahasa Sunda: Dari Kerajaan Sunda hingga Era Digital",
    category: "Sejarah",
    date: "3 April 2026",
    isoDate: "2026-04-03",
    readTime: "7 menit",
    cover: "📜",
    excerpt: "Bahasa Sunda telah berkembang selama lebih dari 1.000 tahun. Bagaimana perjalanan bahasa ini dari prasasti kuno hingga menjadi bahasa digital?",
    body: `Bahasa Sunda adalah salah satu bahasa tertua yang masih hidup dan aktif digunakan hingga hari ini. Perjalanannya merentang lebih dari seribu tahun, melewati berbagai kerajaan besar, kolonialisme, hingga era digital modern. Dengan jumlah penutur sekitar 42 juta jiwa, bahasa Sunda menempati posisi bahasa daerah kedua terbesar di Indonesia.

**Bahasa Sunda Kuno (Abad 7-14)**
Bukti tertua bahasa Sunda ditemukan dalam prasasti Kebon Kopi (932 M) dan prasasti Kawali yang berasal dari era Kerajaan Sunda. Pada periode ini, bahasa Sunda Kuno ditulis menggunakan [Aksara Sunda](/aksara) (Kaganga) kuno yang berbeda dari sistem aksara yang kita kenal sekarang.

Naskah-naskah tertua seperti Carita Parahiyangan dan Sewaka Darma ditulis dalam bahasa Sunda Kuno yang sangat berbeda dari bahasa Sunda modern — bahkan penutur Sunda masa kini pun akan kesulitan memahaminya tanpa pelatihan khusus.

**Bahasa Sunda Pertengahan (Abad 14-17)**
Memasuki era [Kerajaan Sunda Pajajaran](/blog/kerajaan-sunda-pajajaran), bahasa Sunda berkembang lebih jauh. Naskah Bujangga Manik dan Carita Parahiyangan ditulis pada periode ini, menjadi warisan sastra yang sangat berharga. Pada masa Pajajaran, bahasa Sunda sudah lebih terstruktur dan sistematis.

Pada periode ini juga berkembang tradisi [guguritan](/blog/guguritan-puisi-sunda) — puisi tembang dalam bahasa Sunda yang mengikuti aturan pupuh. Karya-karya sastra ini menjadi bukti betapa kayanya budaya intelektual Sunda pada masa itu.

**Pengaruh Islam dan Mataram (Abad 17-19)**
Setelah runtuhnya Pajajaran (1579), bahasa Sunda masuk fase transisi penting. Pengaruh Islam yang dibawa melalui Kesultanan Banten dan Cirebon memperkaya kosakata bahasa Sunda dengan kata-kata Arab. Di saat yang sama, pengaruh budaya keraton Mataram Islam dari Jawa memengaruhi sistem undak usuk basa yang kita kenal sekarang.

Penjajahan Belanda (1800-1945) juga meninggalkan jejak dalam kosakata Sunda — banyak kata serapan Belanda yang kini menjadi bagian natural bahasa Sunda sehari-hari.

**Bahasa Sunda Modern (Abad 20-Sekarang)**
Setelah kemerdekaan Indonesia (1945), bahasa Sunda mendapat status sebagai bahasa daerah yang dilindungi. Standardisasi ejaan dilakukan, dan bahasa Sunda mulai diajarkan secara formal di sekolah-sekolah di Jawa Barat.

Pada tahun 2008, pencapaian bersejarah terjadi: [Aksara Sunda dikodekan dalam standar Unicode internasional](/blog/unicode-aksara-sunda-lengkap) (blok U+1B80–U+1BBF), memungkinkan aksara ini ditampilkan di seluruh perangkat digital di dunia.

**Era Digital dan Tantangan Pelestarian**
Kini bahasa Sunda menghadapi tantangan baru: bersaing dengan bahasa Indonesia dan Inggris di ruang digital. Namun ada angin segar — konten berbahasa Sunda di TikTok, YouTube, dan Instagram semakin populer, membuktikan bahwa bahasa ini masih relevan dan dicintai generasi muda.

Platform seperti [Translate Sunda](/) hadir untuk memastikan bahasa ini tetap relevan dan mudah diakses. Dengan teknologi terjemahan modern, siapapun kini bisa belajar dan menggunakan bahasa Sunda tanpa harus tinggal di Jawa Barat.

Baca juga: [Bahasa Sunda di Era Modern: Tantangan dan Peluang](/blog/bahasa-sunda-di-era-modern) dan [Perbedaan Dialek Bahasa Sunda](/blog/dialek-bahasa-sunda).`,
  },
  {
    slug: "aksara-sunda-panduan-lengkap",
    title: "Aksara Sunda: Panduan Lengkap Membaca dan Menulis Kaganga",
    category: "Aksara",
    date: "29 Maret 2026",
    isoDate: "2026-03-29",
    readTime: "8 menit",
    cover: "✍️",
    excerpt: "Aksara Sunda atau Kaganga adalah sistem tulisan tradisional yang diakui UNESCO. Pelajari cara membacanya dari nol, lengkap dengan Unicode dan cara transliterasi ke Latin.",
    body: `Aksara Sunda, yang juga dikenal sebagai Aksara Kaganga, adalah sistem tulisan abugida yang digunakan untuk menulis bahasa Sunda. Aksara ini telah diakui oleh UNESCO sebagai bagian dari warisan budaya dunia dan sejak 2008 sudah dikodekan dalam standar [Unicode internasional (U+1B80–U+1BBF)](/blog/unicode-aksara-sunda-lengkap).

Sistem tulisan ini unik karena bersifat abugida — setiap konsonan secara otomatis membawa bunyi vokal "a" kecuali diberi tanda khusus (rarangkén) untuk mengubahnya. Ini berbeda dari alfabet Latin yang vokal dan konsonannya berdiri sendiri-sendiri.

**Sejarah Aksara Sunda**
Aksara Sunda berkembang dari aksara Pallawa yang dibawa dari India melalui jalur perdagangan pada abad ke-5 Masehi. Prasasti tertua bertulisan aksara Sunda berasal dari abad ke-7 Masehi, ditemukan di wilayah Kerajaan Sunda. Sampai abad ke-18, aksara ini aktif digunakan sebelum kemudian tergantikan oleh tulisan Latin di era kolonial Belanda.

Pada era [Kerajaan Pajajaran](/blog/kerajaan-sunda-pajajaran), aksara Sunda digunakan untuk menulis naskah-naskah penting seperti Carita Parahiyangan dan Sewaka Darma — dokumen sejarah yang kini menjadi warisan tak ternilai.

**Huruf-Huruf Dasar (Ngalagéna)**
Aksara Sunda terdiri dari 18 huruf konsonan dasar yang disebut ngalagéna. Setiap huruf sudah mengandung bunyi vokal "a" di dalamnya:

- Ka (ᮊ) Ga (ᮌ) Nga (ᮍ)
- Ca (ᮎ) Ja (ᮏ) Nya (ᮑ)
- Ta (ᮒ) Da (ᮓ) Na (ᮔ)
- Pa (ᮕ) Ba (ᮘ) Ma (ᮙ)
- Ya (ᮚ) Ra (ᮛ) La (ᮜ)
- Wa (ᮝ) Sa (ᮞ) Ha (ᮠ)

**Vokal Mandiri (Swara)**
Ketika vokal berdiri sendiri di awal kata atau suku kata, digunakan huruf vokal mandiri: A (ᮃ), I (ᮄ), U (ᮅ), É (ᮆ), O (ᮇ), E (ᮈ), EU (ᮉ).

Vokal EU adalah bunyi khas bahasa Sunda yang tidak ada padanannya dalam bahasa Indonesia. Ini adalah salah satu ciri paling khas yang membedakan [bahasa Sunda dari bahasa Jawa](/blog/perbandingan-bahasa-sunda-jawa).

**Rarangkén (Tanda Vokal)**
Untuk mengubah bunyi vokal konsonan, digunakan rarangkén (tanda diakritik):
- Panghulu — untuk bunyi "i" (contoh: ᮊᮤ = ki)
- Panyukú — untuk bunyi "u" (contoh: ᮊᮥ = ku)
- Pamepet — untuk bunyi "e" (contoh: ᮊᮨ = ke)
- Paneuleung — untuk bunyi "eu" (contoh: ᮊᮩ = keu)
- Pamaaeh (᮪) — untuk mematikan vokal inherent (contoh: ᮊ᮪ = k)

**Cara Membaca Kata dalam Aksara Sunda**
Mari coba baca kata "Sunda" dalam aksara: ᮞᮥᮔ᮪ᮓ
- ᮞ = Sa
- ᮥ = rarangkén u → jadi "su"
- ᮔ = Na
- ᮪ = Pamaaeh → Na jadi "n"
- ᮓ = Da (dengan vokal inherent "a")
- Hasil: S-u-n-d-a = "Sunda" ✓

Untuk panduan transliterasi yang lebih lengkap, baca artikel [Panduan Transliterasi Aksara Sunda ke Latin](/blog/transliterasi-aksara-sunda-ke-latin).

**Coba Langsung di TranslateSunda.id**
Kamu tidak perlu menghafal semua aksara sekaligus. Gunakan fitur [Translate Aksara Sunda](/aksara) untuk langsung mencoba menulis teks Latin dan melihat hasilnya dalam Aksara Sunda, dilengkapi papan ketik on-screen dan panduan referensi lengkap. Gratis dan tidak perlu registrasi!

**Aksara Sunda di Era Modern**
Sejak 2008, aksara Sunda resmi terdaftar di [Unicode block U+1B80–U+1BBF](/blog/unicode-aksara-sunda-lengkap), memungkinkan penggunaannya di perangkat digital. Font resmi yang direkomendasikan adalah Noto Sans Sundanese dari Google Fonts. Kini aksara Sunda bisa diketik di smartphone, ditampilkan di website, dan dilestarikan secara digital untuk generasi mendatang.

Baca juga: [Belajar Aksara Sunda dari Nol](/blog/belajar-aksara-sunda-dari-nol) dan [Sejarah Panjang Bahasa Sunda](/blog/sejarah-bahasa-sunda).`,
  },
  {
    slug: "transliterasi-aksara-sunda-ke-latin",
    title: "Panduan Transliterasi Aksara Sunda ke Latin: Aturan dan Contoh Lengkap",
    category: "Aksara",
    date: "15 April 2026",
    isoDate: "2026-04-15",
    readTime: "7 menit",
    cover: "🔤",
    excerpt: "Bagaimana cara mengubah teks Aksara Sunda menjadi huruf Latin yang bisa dibaca? Pelajari aturan transliterasi standar beserta contohnya.",
    body: `Transliterasi adalah proses mengubah sistem tulisan satu ke sistem tulisan lain tanpa mengubah bunyi. Untuk Aksara Sunda, transliterasi ke huruf Latin mengikuti aturan fonemik yang sudah distandardisasi. Berikut panduan lengkapnya.

**Prinsip Dasar: Vokal Inherent**
Setiap konsonan Aksara Sunda secara otomatis membawa bunyi vokal "a". Jadi, karakter ᮊ (Ka) dibaca "ka", ᮌ (Ga) dibaca "ga", dan seterusnya. Inilah yang disebut vokal inherent — tidak ditulis, namun selalu ada.

**Mengubah Vokal dengan Rarangkén**
Ketika konsonan harus dibaca dengan vokal selain "a", digunakan rarangkén (tanda diakritik):
- ᮊᮤ → "ki" (Ka + Panghulu)
- ᮊᮥ → "ku" (Ka + Panyukú)
- ᮊᮨ → "ke" (Ka + Pamepet)
- ᮊᮩ → "keu" (Ka + Paneuleung)
- ᮊᮧ → "ko" (Ka + Pamintu)

**Konsonan Akhir: Pamaaeh**
Konsonan yang berada di akhir suku kata (tanpa vokal) ditulis dengan menambahkan pamaaeh (᮪):
- ᮊ᮪ → "k" (bukan "ka")
- Contoh: kata "bandung" = ᮘᮔ᮪ᮓᮥᮀ

**Digraf dalam Bahasa Sunda**
Beberapa bunyi Sunda menggunakan dua huruf Latin:
- ᮍ → "ng" (satu karakter Aksara Sunda)
- ᮑ → "ny" (satu karakter Aksara Sunda)
- ᮉ → "eu" (vokal khas Sunda)

**Coba Konversi Otomatis**
Tidak perlu menghafal semua aturan ini sekarang. Kamu bisa menggunakan fitur **Aksara → Latin** di [translatesunda.id/aksara](https://translatesunda.id/aksara) — cukup tempel atau ketik teks Aksara Sunda, dan hasil Latin akan muncul otomatis!

**Contoh Kalimat Lengkap**
Kata "Sunda" dalam Aksara Sunda: ᮞᮥᮔ᮪ᮓ
- ᮞ = Sa
- ᮥ = rarangkén "u" → jadi "su"
- ᮔ = Na
- ᮪ = Pamaaeh → Na menjadi "n" (tanpa vokal)
- ᮓ = Da (dengan vokal inherent "a")
- Hasil: S-u-n-d-a = "Sunda" ✓`,
  },
  {
    slug: "unicode-aksara-sunda-lengkap",
    title: "Unicode Aksara Sunda U+1B80–U+1BBF: Daftar Karakter Lengkap",
    category: "Aksara",
    date: "12 April 2026",
    isoDate: "2026-04-12",
    readTime: "6 menit",
    cover: "🖥️",
    excerpt: "Aksara Sunda memiliki blok khusus di standar Unicode internasional. Kenali semua karakter dalam blok U+1B80–U+1BBF beserta fungsinya.",
    body: `Sejak tahun 2008, Aksara Sunda resmi menjadi bagian dari standar Unicode internasional — standar pengkodean karakter yang digunakan oleh semua perangkat digital di seluruh dunia. Ini adalah pencapaian besar dalam digitalisasi aksara tradisional Nusantara.

**Apa itu Unicode?**
Unicode adalah standar universal yang memberikan nomor unik (codepoint) untuk setiap karakter di semua sistem tulisan di dunia. Berkat Unicode, Aksara Sunda bisa ditampilkan di smartphone, website, dokumen Word, dan semua platform digital secara konsisten.

**Blok Aksara Sunda: U+1B80–U+1BBF**
Aksara Sunda menempati blok Unicode dari U+1B80 hingga U+1BBF, total 64 karakter yang mencakup:

**Tanda Bantu (U+1B80–U+1B82)**
- U+1B80: Panyecek (ng~ / suara nasal)
- U+1B81: Panglayar (-r akhir)
- U+1B82: Pangwisad (-h akhir)

**Vokal Mandiri (U+1B83–U+1B8B)**
- U+1B83: A (ᮃ)
- U+1B84: I (ᮄ)
- U+1B85: U (ᮅ)
- U+1B86: É / AE (ᮆ)
- U+1B87: O (ᮇ)
- U+1B88: E schwa (ᮈ)
- U+1B89: EU (ᮉ)

**Konsonan (U+1B8A–U+1BA0)**
18 konsonan dasar dari Ka (ᮊ) hingga Ha (ᮠ), termasuk Nga (ᮍ) dan Nya (ᮑ) yang mewakili bunyi digraf.

**Rarangkén Khusus (U+1BA1–U+1BA3)**
- U+1BA1: Pamingkal (-ya-)
- U+1BA2: Panyakra (-ra-)
- U+1BA3: Panyiku (-wa-)

**Rarangkén Vokal (U+1BA4–U+1BAB)**
- U+1BA4: Panghulu (-i)
- U+1BA5: Panyukú (-u)
- U+1BA8: Pamepet (-e)
- U+1BA9: Paneuleung (-eu)
- U+1BAA: Pamaaeh / Pangkon (mematikan vokal)

**Angka Sunda (U+1BB0–U+1BB9)**
Aksara Sunda memiliki sistem angka sendiri dari 0 hingga 9.

**Cara Menggunakan di Perangkatmu**
Font yang mendukung Aksara Sunda antara lain: **Noto Sans Sundanese** (Google Fonts, gratis), Sundanese Unicode, dan beberapa font khusus daerah.

Untuk langsung mencoba mengetik menggunakan seluruh karakter Unicode ini, kunjungi papan ketik on-screen di [translatesunda.id/aksara](https://translatesunda.id/aksara) — semua karakter U+1B80–U+1BBF tersedia dalam grid yang rapi dan mudah digunakan!`,
  },
  {
    slug: "belajar-aksara-sunda-dari-nol",
    title: "Belajar Aksara Sunda dari Nol: Metode Efektif untuk Pemula",
    category: "Aksara",
    date: "10 April 2026",
    isoDate: "2026-04-10",
    readTime: "9 menit",
    cover: "📖",
    excerpt: "Ingin bisa baca tulis Aksara Sunda tapi bingung mulai dari mana? Ikuti metode belajar bertahap ini dan kamu bisa membaca aksara dasar dalam 1 minggu.",
    body: `Belajar Aksara Sunda tidak sesulit yang dibayangkan. Dengan metode yang tepat dan konsistensi, kamu bisa mulai membaca kata-kata sederhana dalam waktu singkat. Panduan ini dirancang khusus untuk pemula yang belum pernah mengenal aksara Sunda sama sekali.

**Kenapa Belajar Aksara Sunda?**
- Memahami warisan budaya leluhur Sunda
- Bisa membaca prasasti, naskah, dan ornamen aksara di Jawa Barat  
- Memperdalam pemahaman bahasa Sunda secara holistik
- Keren dan unik — tidak banyak orang yang bisa melakukannya!

**Minggu 1: Mengenal Vokal Mandiri (7 huruf)**
Mulailah dengan vokal karena ini paling mudah dihafal:
- ᮃ = a, ᮄ = i, ᮅ = u, ᮆ = é, ᮇ = o, ᮈ = e, ᮉ = eu

Tip: Gunakan kartu flash (flashcard) dengan gambar aksara di depan dan bunyi di belakang.

**Minggu 2: Konsonan Baris Pertama (Ka hingga Na)**
Pelajari 9 konsonan pertama: ᮊ ᮌ ᮍ ᮎ ᮏ ᮑ ᮒ ᮓ ᮔ
Ingat bahwa setiap konsonan sudah membawa bunyi "a". Jadi ᮊ bukan "k" tapi "ka".

**Minggu 3: Konsonan Baris Kedua + Pamaaeh**
Selesaikan sisa konsonan: ᮕ ᮘ ᮙ ᮚ ᮛ ᮜ ᮝ ᮞ ᮠ
Pelajari juga pamaaeh (᮪) untuk mematikan vokal inherent.

**Minggu 4: Rarangkén Vokal**
Ini kunci untuk membaca kata-kata lengkap:
- + panghulu → bunyi "i" (contoh: ᮊᮤ = ki)
- + panyukú → bunyi "u" (contoh: ᮊᮥ = ku)
- + pamepet → bunyi "e" (contoh: ᮊᮨ = ke)

**Alat Bantu Belajar yang Direkomendasikan**
Gunakan fitur interaktif di [translatesunda.id/aksara](https://translatesunda.id/aksara) untuk:
- Mencoba mengetik aksara dengan papan ketik on-screen
- Melihat transliterasi Latin → Aksara secara real-time
- Menggunakan panduan referensi karakter lengkap sebagai kamus cepat

**Latihan Harian (15 menit/hari)**
1. Buka [translatesunda.id/aksara](https://translatesunda.id/aksara)
2. Ketik kata-kata Sunda yang kamu kenal di kolom Latin
3. Amati hasilnya dalam Aksara Sunda
4. Coba hafalkan pola yang sering muncul

**Target Realistis**
- Minggu 1: Hafal 7 vokal mandiri
- Minggu 2: Bisa membaca kata dengan konsonan Ka-Na
- Minggu 3: Bisa membaca semua konsonan dasar + pamaaeh
- Bulan 2: Bisa membaca kata-kata umum bahasa Sunda dalam aksara`,
  },

  {
    slug: "paribasa-sunda-filosofi-hidup",
    title: "10 Paribasa Sunda yang Mengandung Filosofi Hidup Mendalam",
    category: "Budaya",
    date: "25 Maret 2026",
    isoDate: "2026-03-25",
    readTime: "6 menit",
    cover: "🌺",
    excerpt: "Orang Sunda terkenal dengan kebijaksanaannya yang tertuang dalam paribasa. Berikut 10 paribasa Sunda yang relevan hingga hari ini.",
    body: `Paribasa Sunda bukan sekadar rangkaian kata indah. Di baliknya tersimpan kebijaksanaan hidup yang sudah teruji selama berabad-abad. Berikut 10 paribasa yang paling bermakna dan relevan hingga hari ini.

Paribasa adalah ungkapan peribahasa dalam bahasa Sunda yang biasanya terdiri dari beberapa kata dengan makna kiasan. Mirip dengan pepatah atau peribahasa dalam bahasa Indonesia, tapi dengan nuansa budaya Sunda yang kental.

**1. "Ulah léos méméh peunggas"**
Artinya: Jangan melepas sebelum putus. Mengajarkan pentingnya keteguhan dan komitmen dalam segala hal. Relevan sekali untuk generasi muda yang mudah menyerah.

**2. "Kudu inget ka budi nu geus kasorang"**
Artinya: Harus ingat atas budi yang sudah dirasakan. Mengajarkan pentingnya rasa syukur dan membalas kebaikan. Sangat relevan dalam konteks hubungan sosial dan kekeluargaan.

**3. "Ngalah lede ka nagara, ngalah budi ka indung"**
Artinya: Mengalah terhadap negara (aturan), berbudi baik kepada ibu. Tentang menghormati aturan dan orang tua — nilai yang menjadi fondasi masyarakat Sunda.

**4. "Herang caina, beunang lauk na"**
Artinya: Jernih airnya, dapat ikannya. Mengajarkan bahwa hasil yang baik didapat dari cara yang bersih dan jujur. Filosofi bisnis dan kehidupan yang sangat relevan di era modern.

**5. "Ciri sabumi cara sadésa"**
Artinya: Setiap daerah punya ciri khasnya sendiri. Mengingatkan pentingnya menghormati perbedaan budaya. Relevan untuk memahami mengapa [dialek bahasa Sunda](/blog/dialek-bahasa-sunda) berbeda di setiap daerah.

**6. "Silih asah, silih asih, silih asuh"**
Artinya: Saling mencerdaskan, saling mengasihi, saling membimbing. Ini adalah filosofi dasar kehidupan bermasyarakat Sunda — tiga nilai yang saling melengkapi dan tidak bisa dipisahkan.

**7. "Hade ku omong, goreng ku omong"**
Artinya: Baik karena ucapan, buruk karena ucapan. Pengingat betapa pentingnya menjaga lisan. Dalam konteks [tata krama bahasa Sunda](/blog/tata-krama-bahasa-sunda), ini tercermin dalam sistem undak usuk basa.

**8. "Bengkung ngariung, bongkok ngaronyok"**
Artinya: Bersatu dalam suka dan duka. Menggambarkan kekuatan persatuan dan kebersamaan masyarakat Sunda yang tercermin dalam berbagai upacara dan tradisi.

**9. "Sacangreud pageuh, sagolek pangkek"**
Artinya: Satu tekad bulat, satu pendirian teguh. Mengajarkan pentingnya konsistensi dan komitmen dalam menjalani kehidupan.

**10. "Hirup kudu sauyunan"**
Artinya: Hidup harus dalam kebersamaan dan harmoni. Tentang pentingnya menjaga kerukunan dalam kehidupan — nilai yang tercermin dalam banyak aspek budaya Sunda, termasuk [permainan tradisional Sunda](/blog/permainan-tradisional-sunda) yang selalu dimainkan bersama.

**Paribasa di Era Modern**
Meskipun diucapkan dalam bahasa Sunda kuno, nilai-nilai dalam paribasa ini sangat relevan di era modern. Banyak filosofi bisnis modern (Growth Mindset, Gratitude, Ethics) yang sebenarnya sudah ada dalam paribasa Sunda ratusan tahun yang lalu.

Ingin memahami lebih dalam budaya Sunda? Baca juga [Kawih Sunda: Warisan Budaya yang Hampir Terlupakan](/blog/lagu-kawih-sunda) dan [Sejarah Panjang Bahasa Sunda](/blog/sejarah-bahasa-sunda).`,
  },
  {
    slug: "belajar-bahasa-sunda-pemula",
    title: "Belajar Bahasa Sunda untuk Pemula: Mulai dari Mana?",
    category: "Panduan",
    date: "20 Maret 2026",
    isoDate: "2026-03-20",
    readTime: "5 menit",
    cover: "📚",
    excerpt: "Tertarik belajar bahasa Sunda tapi bingung harus mulai dari mana? Panduan lengkap ini akan membantumu memulai perjalanan belajar dengan cara yang menyenangkan.",
    body: `Belajar bahasa Sunda mungkin terasa menakutkan karena sistem undak usuk yang kompleks. Tapi tenang — dengan strategi yang tepat, siapapun bisa mulai bercakap-cakap dalam bahasa Sunda dalam waktu singkat.

**Langkah 1: Kenali Tiga Tingkatan Dahulu**
Sebelum belajar kosakata, pahami bahwa bahasa Sunda memiliki tiga tingkatan: Lemes (halus), Sedang, dan Wantah (kasar). Jangan pusing dulu dengan ketiganya — mulailah dengan basa sedang karena ini yang paling umum digunakan sehari-hari.

Pelajari lebih dalam tentang sistem ini di artikel [Mengenal Undak Usuk Basa Sunda](/blog/mengenal-undak-usuk-basa-sunda).

**Langkah 2: Mulai dari Basa Sedeng**
Jangan langsung belajar basa lemes. Mulailah dengan basa sedeng karena kosakatanya lebih sederhana dan sering digunakan. Kuasai 100 kata sedeng yang paling sering dipakai.

Mulai dari [50 kata sapaan bahasa Sunda](/blog/kata-sapaan-bahasa-sunda) — ini fondasi percakapan sehari-hari yang wajib kamu kuasai pertama.

**Langkah 3: Pahami Struktur Kalimat**
Struktur kalimat bahasa Sunda mirip dengan bahasa Indonesia: Subjek + Predikat + Objek. Namun ada beberapa partikel khas Sunda yang perlu dipelajari seperti "atuh", "mah", "teh", dan "wé" yang membuat kalimat terasa lebih natural.

**Langkah 4: Dengarkan Native Speaker**
Tonton konten berbahasa Sunda — sinetron Sunda, YouTube, atau radio lokal Jawa Barat. Ini membantu mengenali intonasi dan ritme bahasa Sunda yang natural. Di TikTok dan YouTube, kini banyak konten berbahasa Sunda yang viral dan menghibur.

**Langkah 5: Praktik dengan Translator**
Gunakan [Translate Sunda](/) untuk menerjemahkan kalimat yang ingin kamu ucapkan. Ini membantu membangun kosakata secara kontekstual — kamu belajar kata yang memang kamu butuhkan, bukan kata yang ada di buku teks.

**Langkah 6: Belajar Aksara Sunda (Opsional tapi Menarik!)**
Setelah percakapan dasar, kamu bisa mulai mengenal [Aksara Sunda](/aksara) — sistem tulisan tradisional yang diakui UNESCO. Fitur transliterasi interaktif di TranslateSunda.id membuatnya sangat mudah dipelajari.

**Langkah 7: Cari Teman Bicara**
Tidak ada cara belajar bahasa yang lebih efektif daripada langsung berbicara. Cari komunitas online berbahasa Sunda atau teman yang bisa kamu ajak latihan. Banyak grup Facebook dan komunitas Discord penutur Sunda yang terbuka untuk siapapun.

**Target Realistis**
- Minggu 1-2: Kuasai sapaan dasar dan angka 1-100 (lihat [panduan angka Sunda](/blog/angka-dalam-bahasa-sunda))
- Bulan 1: Bisa kalimat sederhana dalam basa sedeng
- Bulan 3: Mulai belajar basa lemes
- Bulan 6: Percakapan sehari-hari cukup lancar

**Tips Tambahan: Pahami Dialek**
Bahasa Sunda di Bandung berbeda dengan di Banten atau Cirebon. Pelajari perbedaannya di artikel [Dialek Bahasa Sunda](/blog/dialek-bahasa-sunda) agar kamu tidak bingung saat bertemu penutur dari daerah berbeda.`,
  },
  {
    slug: "dialek-bahasa-sunda",
    title: "Perbedaan Dialek Bahasa Sunda: Priangan, Banten, Cirebon, dan Baduy",
    category: "Linguistik",
    date: "15 Maret 2026",
    isoDate: "2026-03-15",
    readTime: "6 menit",
    cover: "🗺️",
    excerpt: "Tahukah kamu bahwa bahasa Sunda di Bandung berbeda dengan di Banten atau Cirebon? Kenali perbedaan dialek-dialek utama bahasa Sunda di berbagai daerah.",
    body: `Meskipun disebut "bahasa Sunda", kenyataannya bahasa ini memiliki beragam dialek yang berbeda cukup signifikan antara satu daerah dengan daerah lainnya. Perbedaan ini mencakup kosakata, intonasi, fonetik, bahkan beberapa aturan tata bahasa.

**Dialek Priangan (Bandung, Garut, Tasikmalaya, Sumedang)**
Dianggap sebagai dialek "standar" bahasa Sunda, karena wilayah Priangan secara historis menjadi pusat kebudayaan Sunda sejak era [Kerajaan Pajajaran](/blog/kerajaan-sunda-pajajaran). Bahasa Sunda Priangan terkenal halus dan sangat menjunjung tinggi [undak usuk basa](/blog/mengenal-undak-usuk-basa-sunda). Inilah dialek yang paling sering dijadikan acuan dalam buku-buku pembelajaran.

Ciri khas: pengucapan vokal "eu" yang kental, banyak menggunakan bentuk lemes dalam percakapan sehari-hari dengan orang yang lebih tua.

**Dialek Banten (Serang, Pandeglang, Lebak)**
Bahasa Sunda Banten memiliki ciri fonetis yang khas. Beberapa perbedaan yang mencolok:
- Kata "saya" di Banten: "uing" (bukan "kuring" seperti Priangan)
- Intonasi lebih datar dibanding Priangan
- Beberapa kosakata berbeda, dipengaruhi budaya Betawi dan Jawa

**Dialek Cirebon/Dermayon (Majalengka, Kuningan, Indramayu)**
Dialek ini merupakan perpaduan antara bahasa Sunda dan Cirebon (Dermayon). Pengaruh Jawa sangat terasa di sini karena kedekatannya dengan wilayah Jawa Tengah.
- Kata-kata tertentu lebih dekat ke bahasa Jawa
- Sistem undak usuk basa tidak seketat Priangan
- Beberapa kosakata unik yang tidak ditemukan di dialek lain

**Dialek Baduy (Kanekes, Lebak)**
Dialek Baduy adalah yang paling unik dan bersejarah karena digunakan oleh masyarakat adat Baduy yang relatif tertutup dari pengaruh luar.
- Mempertahankan kosakata kuno bahasa Sunda yang sudah hilang di dialek lainnya
- Tidak mengenal beberapa konsep modern seperti kata "telepon" atau "internet"
- Menjadi rujukan para ahli linguistik yang ingin memahami bahasa Sunda purba

**Perbedaan Kosakata Antar Dialek**
| Arti | Priangan | Banten | Cirebon |
|------|----------|--------|----------|
| Saya | Kuring | Uing | Inyong |
| Tidak | Henteu | Hanto | Ora |
| Bagaimana | Kumaha | Kemaha | Kepriye |

**Tips Praktis**
Jika kamu belajar bahasa Sunda untuk berkomunikasi secara umum, pelajari dialek Priangan terlebih dahulu karena ini yang paling dipahami di seluruh wilayah Jawa Barat. Gunakan [Translate Sunda](/) untuk berlatih terjemahan dalam dialek standar ini.

Baca juga: [Kata-kata Sunda yang Masuk ke Bahasa Indonesia](/blog/pengaruh-bahasa-sunda-bahasa-indonesia) dan [Bahasa Sunda vs Bahasa Jawa](/blog/perbandingan-bahasa-sunda-jawa).`,
  },
  {
    slug: "bahasa-sunda-di-era-modern",
    title: "Bahasa Sunda di Era Modern: Tantangan dan Peluang Pelestariannya",
    category: "Opini",
    date: "10 Maret 2026",
    isoDate: "2026-03-10",
    readTime: "5 menit",
    cover: "🌐",
    excerpt: "Di tengah dominasi bahasa Indonesia dan Inggris, apakah bahasa Sunda masih relevan? Kami mengulas tantangan dan bagaimana teknologi bisa membantu melestarikannya.",
    body: `Bahasa Sunda kini berada di persimpangan jalan. Di satu sisi, ia adalah warisan budaya dengan lebih dari 42 juta penutur. Di sisi lain, generasi muda semakin jarang menggunakannya dalam kehidupan sehari-hari. Apa yang sebenarnya terjadi, dan apa yang bisa kita lakukan?

**Tantangan 1: Urbanisasi**
Ketika orang Sunda pindah ke kota besar seperti Jakarta atau Surabaya, mereka cenderung beralih ke bahasa Indonesia untuk komunikasi sehari-hari. Anak-anak mereka pun tumbuh dengan bahasa Indonesia sebagai bahasa utama, membuat penguasaan bahasa Sunda semakin memudar setiap generasi.

**Tantangan 2: Sistem Pendidikan yang Terbatas**
Bahasa Sunda hanya diajarkan sebagai mata pelajaran muatan lokal di sekolah-sekolah di Jawa Barat, seringkali dengan jam yang sangat terbatas (1-2 jam per minggu). Akibatnya, banyak anak muda yang tidak bisa menggunakan [basa lemes](/blog/mengenal-undak-usuk-basa-sunda) dengan benar.

**Tantangan 3: Minimnya Konten Digital**
Konten digital berbahasa Sunda masih sangat sedikit dibandingkan bahasa Indonesia dan Inggris. Tidak ada Wikipedia bahasa Sunda yang komprehensif, tidak banyak aplikasi berbahasa Sunda, dan literatur digitalnya sangat terbatas.

**Peluang 1: Konten Kreator Sunda**
Tren konten lokal di media sosial membuat banyak kreator mulai membuat konten berbahasa Sunda. Di TikTok dan YouTube, konten berbahasa Sunda semakin banyak ditonton — bahkan beberapa kreator berhasil meraih jutaan pengikut. Baca lebih lanjut di [Tren Bahasa Sunda Gaul di Media Sosial](/blog/bahasa-sunda-di-media-sosial).

**Peluang 2: Teknologi Terjemahan**
Platform seperti [Translate Sunda](/) membuktikan bahwa teknologi bisa menjadi jembatan antara penutur dan non-penutur bahasa Sunda. Dengan hanya mengetik di browser, siapapun bisa mulai belajar dan menggunakan bahasa Sunda — tanpa perlu les formal.

**Peluang 3: Digitalisasi Aksara Sunda**
Sejak 2008, [Aksara Sunda](/aksara) resmi masuk Unicode internasional. Ini membuka pintu untuk pelestarian digital aksara tradisional, dari konten media sosial hingga pengembangan font dan keyboard khusus.

**Apa yang Bisa Kita Lakukan?**
- Gunakan bahasa Sunda dalam percakapan sehari-hari dengan keluarga
- Ajarkan anak-anak [sapaan dasar bahasa Sunda](/blog/kata-sapaan-bahasa-sunda)
- Dukung dan bagikan konten berbahasa Sunda di media sosial
- Belajar [basa lemes](/blog/tata-krama-bahasa-sunda) — karena ini yang membedakan penutur yang benar-benar paham budaya Sunda

Pelestarian bahasa dimulai dari keputusan kecil yang kita buat setiap hari. Setiap kata bahasa Sunda yang kamu ucapkan adalah kontribusi nyata untuk menjaga bahasa ini tetap hidup.`,
  },
  {
    slug: "lagu-kawih-sunda",
    title: "Lagu Kawih Sunda: Warisan Budaya yang Hampir Terlupakan",
    category: "Budaya",
    date: "5 Maret 2026",
    isoDate: "2026-03-05",
    readTime: "4 menit",
    cover: "🎵",
    excerpt: "Bubuy Bulan, Es Lilin, Manuk Dadali — lagu-lagu ini bukan sekadar nyanyian Sunda. Ada makna mendalam di balik setiap liriknya.",
    body: `Kawih Sunda adalah lagu-lagu tradisional Sunda yang menjadi harta karun budaya yang kini terancam punah. Di balik nada-nada indahnya, tersimpan pesan moral dan filosofi Sunda yang sangat dalam. Berbeda dari [guguritan](/blog/guguritan-puisi-sunda) yang menggunakan pola pupuh ketat, kawih lebih bebas secara musikal namun tetap kaya makna.

**Manuk Dadali**
Lagu kebanggaan Jawa Barat ini menceritakan tentang burung Garuda sebagai simbol kebanggaan rakyat Sunda dan Indonesia. Manuk Dadali (burung Garuda) melambangkan keberanian, kemerdekaan, dan semangat tinggi. Lagu ini biasa dinyanyikan dalam upacara formal dan perayaan hari jadi Jawa Barat.

Cuplikan lirik: *"Manuk dadali manuk panggagahna, perlambang sakti Indonesia raya..."*

**Bubuy Bulan**
Lagu romantis klasik Sunda ini bercerita tentang kerinduan dan keindahan alam. "Bubuy Bulan, bubuy bulan sangray béntang" — liriknya yang puitis mencerminkan kecintaan masyarakat Sunda pada alam semesta. Kata "bubuy" berarti membakar, sementara "béntang" adalah bintang — metafora tentang kerinduan yang membakar seperti bintang di langit.

**Es Lilin**
Lagu anak-anak yang penuh keceriaan ini mengajarkan nilai-nilai kebersamaan dan kegembiraan dalam kesederhanaan. Iramanya yang riang selalu berhasil membuat anak-anak bersemangat. Secara tidak langsung, lagu ini mengajarkan tentang transaksi jual-beli dan interaksi sosial yang sopan.

**Panon Hideung**
Lagu ini bercerita tentang daya pikat mata hitam sang pujaan hati. "Panon hideung" berarti "mata hitam" — menggambarkan pesona seseorang melalui detail yang spesifik. Ini adalah gaya puisi yang sangat khas dalam tradisi [guguritan Sunda](/blog/guguritan-puisi-sunda).

**Tembang Cianjuran**
Selain kawih, ada pula seni vokal Sunda yang disebut tembang cianjuran — nyanyian dengan iringan kacapi suling. Berbeda dari kawih yang lebih populer, tembang cianjuran lebih tinggi tingkat kesulitannya dan dianggap sebagai puncak seni vokal Sunda.

**Kawih vs Degung vs Tembang**
- **Kawih**: lagu vokal Sunda, bisa dengan atau tanpa iringan
- **[Degung](/blog/gamelan-degung-musik-sunda)**: ensemble gamelan khas Sunda, bisa instrumental atau dengan vokal
- **Tembang**: nyanyian dengan pola pupuh seperti dalam [guguritan](/blog/guguritan-puisi-sunda)

**Mengapa Ini Penting?**
Kawih Sunda bukan hanya hiburan — ia adalah media pendidikan karakter dan pengenalan budaya yang dibalut musik indah. Ketika anak-anak menyanyikan kawih, secara tidak sadar mereka belajar kosakata bahasa Sunda, nilai-nilai budaya, dan keindahan bahasa ibu mereka.

Melestarikan kawih adalah salah satu cara termudah untuk menjaga bahasa dan budaya Sunda tetap hidup. Dukung dengan [belajar bahasa Sunda](/blog/belajar-bahasa-sunda-pemula) agar kamu bisa memahami makna liriknya secara langsung!`,
  },
  {
    slug: "kosakata-bahasa-sunda-unik",
    title: "20 Kosakata Bahasa Sunda yang Tidak Ada Padanannya dalam Bahasa Indonesia",
    category: "Kosakata",
    date: "1 Maret 2026",
    isoDate: "2026-03-01",
    readTime: "5 menit",
    cover: "💡",
    excerpt: "Beberapa perasaan dan konsep dalam bahasa Sunda tidak bisa diterjemahkan satu kata ke bahasa Indonesia. Inilah bukti kekayaan budaya Sunda.",
    body: `Salah satu tanda kekayaan sebuah bahasa adalah adanya kosakata yang tidak bisa diterjemahkan secara langsung ke bahasa lain — linguist menyebutnya sebagai "untranslatable words". Bahasa Sunda ternyata kaya dengan kata-kata seperti ini, membuktikan betapa dalamnya cara pandang budaya Sunda terhadap kehidupan.

**1. Geulis**
Cantik/indah yang mencakup kecantikan lahir dan batin. Lebih dari sekadar "cantik" dalam bahasa Indonesia — geulis mengandung kesan anggun, lemah lembut, dan menyenangkan hati.

**2. Kasép**
Tampan/gagah yang mencakup penampilan dan kepribadian. Lebih kaya maknanya dari sekadar "ganteng" — kasép juga menyiratkan kerapian dan ketampanan yang datang dari dalam.

**3. Ngeluk**
Kondisi membungkuk karena kelelahan atau beban yang berat, dengan konotasi kesabaran dalam menanggung beban hidup. Lebih dari sekadar "membungkuk" secara fisik.

**4. Hémeng**
Perasaan terheran-heran, kagum, sekaligus sedikit bingung melihat sesuatu yang tidak terduga. Tidak ada padanan tunggal dalam bahasa Indonesia.

**5. Pieunteung**
Cerminan atau pantulan yang bisa dijadikan pelajaran. Biasa digunakan dalam konteks belajar dari pengalaman orang lain. Mirip konsep "vicarious learning" dalam psikologi.

**6. Waas**
Kerinduan mendalam yang disertai perasaan sedih kepada seseorang atau tempat yang sudah lama tidak dikunjungi. Lebih dalam dari "rindu" biasa.

**7. Ngahuleng**
Terdiam sambil melamun dan merenung, biasanya disertai raut muka yang kosong. Berbeda dengan sekadar "melamun" karena ada unsur perenungan yang lebih dalam.

**8. Dibaturan**
Ditemani dengan penuh ketulusan. Bukan sekadar "ditemani", tapi ada unsur kepedulian dan kesetiaan di dalamnya. Mencerminkan nilai [silih asih dalam budaya Sunda](/blog/paribasa-sunda-filosofi-hidup).

**9. Kataji**
Tertarik dan terpesona pada sesuatu atau seseorang hingga sulit melepaskan pandangan atau perhatian.

**10. Nyaah**
Rasa sayang yang sangat mendalam, lebih dari sekadar "sayang". Mengandung unsur perlindungan dan kepedulian yang tulus. Orang Sunda sering berkata "nyaah ka maneh" kepada orang yang mereka sayangi.

**11. Geuleuyeung**
Bergerak lamban karena lelah atau mengantuk. Menggambarkan kondisi tubuh yang terasa berat dan tidak semangat.

**12. Biantara**
Pidato atau sambutan formal. Berbeda dari sekadar "berbicara" karena biantara mengandung unsur keagungan dan perencanaan yang matang.

**13. Leugeut**
Lengket atau melekat erat. Biasa digunakan untuk menggambarkan hubungan yang sangat dekat dan tidak mudah dipisahkan.

**14. Gareulis**
Jamak dari geulis — cantik-cantik (untuk banyak orang atau hal). Bahasa Sunda memiliki cara unik untuk membentuk jamak yang berbeda dari bahasa Indonesia.

**15. Parojol**
Muncul atau keluar tiba-tiba dengan cara yang tidak terduga. Lebih dramatis dari sekadar "muncul".

**16. Ngarurug**
Menyerbu atau datang beramai-ramai. Menggambarkan gerakan massal yang datang dengan cepat dan dalam jumlah besar.

**17. Pisan**
Sangat/sekali — kata intensifier yang lebih kuat dari "banget" dalam bahasa Indonesia. "Geulis pisan" = cantik sekali, "hese pisan" = sulit sekali.

**18. Atuh**
Partikel diskursif yang tidak bisa diterjemahkan langsung. Menambahkan nuansa penekanan, kesal, atau penegasan tergantung konteks. "Geus atuh!" = Sudah lah! "Nuhun atuh" = Makasih ya!

**19. Téh**
Partikel yang menunjukkan bahwa sesuatu sudah diketahui/dimaklumi bersama, atau untuk menegaskan pernyataan. "Manehna téh guru" = Dia itu guru (dan sudah umum diketahui).

**20. Euy**
Partikel eksklamatif khas Sunda yang mengekspresikan keheranan, kegirangan, atau penekanan. "Geulis euy!" = Cantik banget sih! Sangat sering dipakai dalam percakapan sehari-hari.

Kosakata-kosakata ini membuktikan bahwa bahasa Sunda bukan hanya alat komunikasi, melainkan cermin dari cara pandang dan perasaan mendalam masyarakat Sunda terhadap kehidupan. Untuk menerjemahkan konsep-konsep ini ke dalam bahasa Indonesia, gunakan [Translate Sunda](/) dan eksplorasi nuansanya sendiri!

Baca juga: [Kata-kata Sunda yang Masuk ke Bahasa Indonesia](/blog/pengaruh-bahasa-sunda-bahasa-indonesia) dan [50 Kata Kerja Bahasa Sunda yang Paling Sering Digunakan](/blog/kata-kerja-sehari-hari-bahasa-sunda).`,
  },
  {
    slug: "angka-dalam-bahasa-sunda",
    title: "Angka 1 sampai 100 dalam Bahasa Sunda: Panduan Lengkap",
    category: "Kosakata",
    date: "20 April 2026",
    isoDate: "2026-04-20",
    readTime: "5 menit",
    cover: "🔢",
    excerpt: "Belajar menyebut angka dalam bahasa Sunda dari 1 hingga 100. Dilengkapi pola pembentukan angka puluhan dan ratusan agar mudah dihafal.",
    body: `Menguasai angka adalah fondasi penting dalam belajar bahasa Sunda. Tanpa mengenal bilangan, kamu tidak bisa berbelanja, menyebut waktu, atau memahami percakapan sehari-hari. Berikut panduan lengkapnya.

**Angka 1–10**
- 1 = hiji, 2 = dua, 3 = tilu, 4 = opat, 5 = lima
- 6 = genep, 7 = tujuh, 8 = dalapan, 9 = salapan, 10 = sapuluh

**Angka 11–19**
Pola: angka satuan + welas
- 11 = sawelas, 12 = dua welas, 13 = tilu welas
- 14 = opat welas, 15 = lima welas, 16 = genep welas
- 17 = tujuh welas, 18 = dalapan welas, 19 = salapan welas

**Angka Puluhan (20–90)**
Pola: angka + puluh
- 20 = dua puluh, 30 = tilu puluh, 40 = opat puluh
- 50 = lima puluh, 60 = genep puluh, 70 = tujuh puluh
- 80 = dalapan puluh, 90 = salapan puluh

**Angka 21–99**
Cukup gabungkan: puluhan + satuan
- 21 = dua puluh hiji, 35 = tilu puluh lima
- 47 = opat puluh tujuh, 99 = salapan puluh salapan

**Angka 100**
- 100 = saratus
- 200 = dua ratus, 1.000 = sarébu, 1.000.000 = sajuta

**Tips Hafal Cepat**
Karena pola angka Sunda sangat sistematis, kamu hanya perlu hafal 1–10 dengan baik. Sisanya tinggal mengikuti pola "X welas" (belasan) dan "X puluh" (puluhan). Dengan latihan 15 menit sehari, kamu bisa hafal 1–100 dalam seminggu.`,
  },
  {
    slug: "hari-bulan-waktu-bahasa-sunda",
    title: "Hari, Bulan, dan Waktu dalam Bahasa Sunda",
    category: "Kosakata",
    date: "18 April 2026",
    isoDate: "2026-04-18",
    readTime: "4 menit",
    cover: "📅",
    excerpt: "Dari 'Senin' hingga 'Minggu', dari 'Januari' hingga 'Desember' — inilah cara menyebutnya dalam bahasa Sunda beserta istilah waktu sehari-hari.",
    body: `Memahami cara menyebut waktu dalam bahasa Sunda sangat penting untuk percakapan sehari-hari. Berikut panduan lengkap yang perlu kamu kuasai.

**Hari dalam Seminggu**
- Senin = Senén, Selasa = Salasa, Rabu = Rebo
- Kamis = Kemis, Jumat = Jumaah
- Sabtu = Saptu, Minggu = Minggu (sama)

**Bulan dalam Setahun**
Bulan Sunda mengikuti sistem Hijriah (penanggalan Islam-Sunda) dan Latin. Dalam percakapan modern, nama bulan Latin sering digunakan langsung. Namun bulan Hijriah punya nama khas:
- Muharram = Muharam, Rajab = Rajab, Ramadan = Puasa
- Syawal = Syawal, Zulhijah = Rayagung

**Istilah Waktu**
- Pagi = énjing / isuk (lemes/sedang), Siang = siang
- Sore = sonten, Malam = wengi / peuting (lemes/sedang)
- Kemarin = kamari, Hari ini = ayeuna, Besok = énjing / isukan
- Sekarang = ayeuna / kiwari, Nanti = engké
- Sudah = geus / parantos (sedang/lemes), Belum = can / acan

**Contoh Kalimat**
- "Dinten ieu Senén." = Hari ini Senin. (lemes)
- "Kamari urang ka pasar." = Kemarin saya ke pasar. (sedang)
- "Engké sonten urang papanggih." = Nanti sore kita ketemu. (sedang)`,
  },
  {
    slug: "warna-dalam-bahasa-sunda",
    title: "Nama Warna dalam Bahasa Sunda dan Penggunaannya",
    category: "Kosakata",
    date: "16 April 2026",
    isoDate: "2026-04-16",
    readTime: "3 menit",
    cover: "🎨",
    excerpt: "Ketahui nama-nama warna dalam bahasa Sunda beserta cara penggunaannya dalam kalimat sehari-hari. Dari merah hingga ungu, semuanya ada di sini.",
    body: `Warna adalah bagian penting dari kosakata dasar bahasa Sunda. Berikut daftar nama warna beserta cara penggunaannya.

**Warna Dasar**
- Merah = beureum, Putih = bodas, Hitam = hideung
- Kuning = konéng, Hijau = héjo, Biru = bulao / biru
- Ungu = wungu, Oranye = jingga, Cokelat = coklat / kakao
- Abu-abu = hawu / abu, Pink = jambu, Emas = emas / konéng emas

**Kata Sifat Warna dalam Kalimat**
Dalam bahasa Sunda, kata sifat warna mengikuti kata benda:
- "Baju beureum" = Baju merah
- "Daun héjo" = Daun hijau
- "Langit bulao" = Langit biru

**Variasi Warna**
- Merah muda = beureum jambu
- Hijau tua = héjo kolot, Hijau muda = héjo ngora
- Biru tua = bulao kolot, Biru muda = bulao ngora

**Warna dalam Peribahasa Sunda**
Warna sering muncul dalam ekspresi Sunda:
- "Hideung legit" = hitam manis (kiasan untuk seseorang yang menarik)
- "Beureum beungeut" = merah muka (malu atau marah)
- "Konéng langsat" = kuning langsat (warna kulit ideal dalam budaya Sunda)

Menguasai kosakata warna akan sangat membantu saat berbelanja, mendeskripsikan benda, atau sekadar bercakap-cakap dalam bahasa Sunda.`,
  },
  {
    slug: "makanan-tradisional-sunda",
    title: "10 Makanan Tradisional Sunda dan Namanya dalam Bahasa Sunda",
    category: "Budaya",
    date: "14 April 2026",
    isoDate: "2026-04-14",
    readTime: "5 menit",
    cover: "🍱",
    excerpt: "Dari nasi timbel hingga peuyeum, kenali makanan khas Sunda beserta nama dan filosofi budaya di balik setiap hidangannya.",
    body: `Kuliner Sunda bukan sekadar soal rasa — ia adalah cerminan budaya, alam, dan kearifan lokal masyarakat Jawa Barat. Setiap makanan memiliki nama khas dalam bahasa Sunda yang sarat makna.

**1. Nasi Timbel (Sangu Timbel)**
Nasi yang dibungkus daun pisang dan dikukus. "Timbel" berasal dari kata membungkus. Biasa disajikan dengan lauk pauk lengkap: ayam goreng, tempe, oncom, dan sambal.

**2. Peuyeum**
Tape singkong khas Sunda, khususnya dari Bandung. "Peuyeum" adalah hasil fermentasi singkong dengan ragi, menghasilkan rasa manis-asam yang khas. Peuyeum Bandung sudah dikenal ke seluruh Indonesia.

**3. Oncom**
Makanan fermentasi khas Sunda yang dibuat dari ampas kacang tanah atau kedelai. Berbeda dengan tempe, oncom difermentasi dengan jamur Neurospora. Kaya protein dan sering dijadikan lauk atau isian.

**4. Lotek**
Salad sayuran rebus dengan siraman bumbu kacang. Lotek mirip gado-gado, namun bumbu kacangnya lebih kental dan aromatis dengan tambahan kencur.

**5. Karedok**
Berbeda dari lotek, karedok menggunakan sayuran mentah (timun, kacang panjang, tauge, kol). Bumbu kacangnya diberi kencur, memberi aroma khas yang segar.

**6. Colenak**
"COLé ENAk" — singkatan yang sekaligus deskripsinya. Peuyeum bakar yang disajikan dengan saus kelapa muda dan gula merah. Camilan rakyat Sunda yang hangat dan manis.

**7. Surabi**
Pancake khas Sunda yang dimasak di atas tungku tanah liat. Versi aslinya polos dengan siraman kinca (gula merah cair), namun kini hadir dengan berbagai topping modern.

**8. Bakakak Hayam**
Ayam kampung yang dibelah, dibumbui, lalu dibakar utuh. "Bakakak" berarti dibelah dua (spatchcock). Biasa disajikan dalam acara pernikahan dan syukuran adat Sunda.

**9. Tutug Oncom**
Nasi yang ditutug (ditumbuk perlahan) bersama oncom dan bumbu. Masakan sederhana rumahan yang kaya protein dan penuh rasa umami khas Sunda.

**10. Dodol Garut**
Kembang gula kenyal dari Garut yang dibuat dari ketan, santan, dan gula merah. Dodol Garut sudah menjadi oleh-oleh ikonik Jawa Barat selama berabad-abad.`,
  },
  {
    slug: "permainan-tradisional-sunda",
    title: "Permainan Tradisional Sunda yang Hampir Punah",
    category: "Budaya",
    date: "12 April 2026",
    isoDate: "2026-04-12",
    readTime: "5 menit",
    cover: "🎮",
    excerpt: "Congklak, gatrik, sorodot gaplok — permainan tradisional Sunda menyimpan keceriaan dan nilai budaya yang kini mulai terlupakan oleh generasi digital.",
    body: `Sebelum era smartphone, anak-anak Sunda mengisi waktu dengan permainan yang tidak hanya menyenangkan tetapi juga melatih kecerdasan, kerjasama, dan motorik. Berikut permainan tradisional Sunda yang perlu dilestarikan.

**1. Congklak (Jajangkung)**
Permainan papan dengan 16 lubang dan biji-bijian. Dua pemain bergiliran memindahkan biji mengikuti aturan tertentu. Melatih kemampuan berhitung dan strategi.

**2. Gatrik**
Permainan menggunakan dua bilah bambu — satu panjang (pemukul) dan satu pendek (gatrik). Gatrik dilempar ke atas lalu dipukul sejauh mungkin. Melatih koordinasi mata dan tangan.

**3. Sorodot Gaplok**
Permainan lempar batu ke garis sasaran. Siapa yang batu lemparannya paling dekat dengan garis, berhak memukul telapak tangan lawan menggunakan batu tersebut. Nama "gaplok" sendiri artinya tamparan ringan.

**4. Bebentengan**
Dua kelompok masing-masing mempertahankan "benteng" (biasanya tiang atau pohon) sambil berusaha menyentuh benteng lawan. Melatih kecepatan, strategi, dan kerjasama tim.

**5. Oray-orayan**
Permainan berantai seperti ular naga. Satu anak menjadi "kepala" dan satu menjadi "ekor". Pemain lain berjajar di tengah, sementara kepala berusaha menangkap ekor. Diiringi lagu "oray-orayan luar léor" yang khas.

**6. Ucing Sumput (Petak Umpet)**
Versi Sunda dari petak umpet. "Ucing" berarti kucing (penjaga), "sumput" berarti sembunyi. Permainan klasik yang dikenal di seluruh dunia namun memiliki lagu dan aturan khas Sunda.

**7. Egrang**
Berjalan menggunakan dua bilah bambu panjang. Melatih keseimbangan dan konsentrasi. Egrang adalah seni keseimbangan yang membutuhkan latihan intensif.

**Mengapa Penting Melestarikan?**
Setiap permainan ini mengandung nilai sosial, fisik, dan budaya yang tidak bisa digantikan oleh layar sentuh. Di balik kesenangan bermain, anak-anak Sunda dulu belajar tentang fairplay, kerjasama, dan sportivitas.`,
  },
  {
    slug: "cerita-rakyat-sunda-sangkuriang",
    title: "Sangkuriang: Legenda Sunda di Balik Gunung Tangkuban Perahu",
    category: "Budaya",
    date: "8 April 2026",
    isoDate: "2026-04-08",
    readTime: "6 menit",
    cover: "🌋",
    excerpt: "Sangkuriang adalah legenda Sunda paling terkenal. Di balik kisah cinta yang tragis, tersimpan nilai moral dan penjelasan mitologis asal-usul Gunung Tangkuban Perahu.",
    body: `Sangkuriang adalah salah satu cerita rakyat paling populer dari tanah Sunda, mengisahkan asal-usul Gunung Tangkuban Perahu di Jawa Barat.

**Sinopsis Cerita**
Dayang Sumbi, seorang putri cantik, mengandung seorang anak dari seekor anjing bernama Tumang. Anak itu diberi nama Sangkuriang. Suatu hari, Sangkuriang diperintahkan berburu ke hutan. Tanpa tahu bahwa Tumang adalah ayahnya, ia membunuh anjing itu karena tak berhasil mendapat hewan buruan.

Dayang Sumbi murka dan mengusir Sangkuriang. Bertahun-tahun kemudian, Sangkuriang yang telah dewasa kembali dan jatuh cinta pada seorang wanita cantik — tanpa menyadari bahwa ia adalah ibunya sendiri. Dayang Sumbi mengenali Sangkuriang dari bekas luka di kepalanya.

**Syarat yang Mustahil**
Dayang Sumbi menyetujui lamaran dengan syarat mustahil: Sangkuriang harus membendung Sungai Citarum dan membuat perahu besar dalam semalam. Sangkuriang hampir berhasil dengan bantuan makhluk gaib. Namun Dayang Sumbi menipu, membuat fajar tiba lebih awal dengan menebarkan kain berwarna merah di timur.

Sangkuriang murka. Ia menendang perahu besar yang hampir jadi itu hingga terbalik — perahu itulah yang kini kita kenal sebagai Gunung Tangkuban Perahu (perahu yang terbalik).

**Nilai Moral Cerita**
Legenda ini mengajarkan tentang bahaya keserakahan, pentingnya kejujuran dalam hubungan, dan konsekuensi dari tindakan yang dilakukan tanpa pikir panjang. Dalam perspektif budaya Sunda, kisah ini juga menggambarkan keharmonisan manusia dengan alam.

**Dalam Bahasa Sunda**
"Sangkuriang" secara harfiah bisa diartikan sebagai nama tokoh, sementara "Tangkuban Perahu" (ᮒᮀᮊᮥᮘᮔ᮪ ᮕᮨᮛᮠᮥ) berarti "perahu yang terbalik" dalam bahasa Sunda.`,
  },
  {
    slug: "wayang-golek-seni-budaya-sunda",
    title: "Wayang Golek: Warisan Budaya Sunda yang Mendunia",
    category: "Budaya",
    date: "6 April 2026",
    isoDate: "2026-04-06",
    readTime: "5 menit",
    cover: "🎭",
    excerpt: "Wayang golek bukan sekadar pertunjukan boneka kayu. Ia adalah media pendidikan moral, hiburan rakyat, dan ekspresi tertinggi seni budaya Sunda.",
    body: `Wayang golek adalah seni pertunjukan boneka tiga dimensi dari kayu yang berasal dari Jawa Barat. Berbeda dengan wayang kulit Jawa, wayang golek menggunakan boneka kayu utuh yang dapat digerakkan seluruh tubuhnya.

**Sejarah Wayang Golek**
Wayang golek diperkirakan berkembang pada abad ke-16 hingga ke-17 di wilayah Sunda, bertepatan dengan masuknya pengaruh Islam. Tokoh yang dianggap berjasa menyebarkan wayang golek adalah Sunan Kudus dan para Wali Sanga yang menggunakannya sebagai media dakwah.

**Struktur Pertunjukan**
Pertunjukan wayang golek dipimpin oleh dalang, seniman utama yang menghidupkan semua tokoh, bernarasi, dan memimpin musik pengiring (gamelan Sunda atau degung). Seorang dalang handal bisa memainkan puluhan boneka dengan suara, karakter, dan gerakan yang berbeda-beda.

**Tokoh-Tokoh Utama**
Cerita wayang golek bersumber dari epos India (Mahabharata dan Ramayana) yang telah di-Sundanisasi. Tokoh paling ikonik adalah **Cepot** — punakawan dengan wajah merah dan kepribadian jenaka. Cepot adalah suara rakyat, pengkritik sosial, dan pelawak yang menghadirkan tawa di tengah kisah serius.

**Wayang Golek dan Bahasa Sunda**
Pertunjukan wayang golek menggunakan bahasa Sunda dalam berbagai tingkatan. Tokoh bangsawan berbicara dalam basa lemes, sementara tokoh rakyat seperti Cepot menggunakan basa sedang atau kasar (wantah) yang penuh humor. Ini menjadikan wayang golek media pembelajaran bahasa Sunda yang kaya.

**Pengakuan Dunia**
UNESCO mengakui wayang (termasuk wayang golek) sebagai Masterpiece of the Oral and Intangible Heritage of Humanity sejak 2003.`,
  },
  {
    slug: "pengaruh-bahasa-sunda-bahasa-indonesia",
    title: "Kata-kata Sunda yang Masuk ke Bahasa Indonesia",
    category: "Linguistik",
    date: "4 April 2026",
    isoDate: "2026-04-04",
    readTime: "5 menit",
    cover: "🔤",
    excerpt: "Tahukah kamu bahwa banyak kata bahasa Indonesia sehari-hari ternyata berasal dari bahasa Sunda? Kenali serapan Sunda yang sudah melebur jadi Indonesia.",
    body: `Bahasa Indonesia sebagai bahasa pemersatu bangsa menyerap kosakata dari berbagai bahasa daerah, termasuk bahasa Sunda. Berikut adalah kata-kata Indonesia yang berasal dari Sunda.

**Kata Serapan Sunda dalam KBBI**
Banyak kata yang kita anggap "Indonesia asli" ternyata serapan dari bahasa Sunda:

- **Bejat** — dari Sunda "béjad" (rusak total, hancur)
- **Béngkok** — dari "bengkok" (tidak lurus, melenceng)
- **Bontot** — dari "bontot" (buncit, atau anak bungsu)
- **Canggung** — dari "canggung" (kikuk, tidak terampil)
- **Dongkol** — dari "dongkol" (kesal, hati yang memendam rasa tidak puas)
- **Gede** — dari "gedé" (besar)
- **Gemetar** — berakar dari "geter" (bergetar)
- **Gopoh** — dari "gopoh" (tergesa-gesa, panik)
- **Kesohor** — dari "kasohur" (terkenal, masyhur)
- **Kunyuk** — dari "kunyuk" (monyet kecil, kiasan untuk orang bodoh)

**Ungkapan dan Frasa**
- **"Punten"** kini sering digunakan di percakapan informal Indonesia
- **"Nuhun"** (terima kasih) mulai dipahami luas di luar Jawa Barat
- **"Mang/Mamang"** (panggilan untuk pria yang lebih tua) kini lazim di Jakarta

**Nama Tempat Sunda yang Menjadi Nama Indonesia**
Banyak nama geografis nasional berasal dari bahasa Sunda: Cianjur, Cirebon, Cikarang, Cisarua, Cikampek — semuanya diawali "Ci" yang dalam Sunda berarti "air/sungai".

**Mengapa Ini Penting?**
Memahami akar kata bahasa Sunda membantu kita memperkaya pemahaman bahasa Indonesia sekaligus menghargai kontribusi budaya Sunda dalam pembentukan bahasa nasional.`,
  },
  {
    slug: "guguritan-puisi-sunda",
    title: "Guguritan: Seni Puisi Tradisional Bahasa Sunda",
    category: "Sastra",
    date: "2 April 2026",
    isoDate: "2026-04-02",
    readTime: "6 menit",
    cover: "📜",
    excerpt: "Guguritan adalah puisi tradisional Sunda yang terikat aturan metrum dan rima. Pelajari struktur, jenis, dan contoh guguritan yang indah.",
    body: `Guguritan adalah bentuk puisi tradisional bahasa Sunda yang ditulis dalam tembang (nyanyian) dengan aturan bait, suku kata, dan nada yang ketat. Berbeda dari puisi bebas modern, guguritan adalah seni yang membutuhkan keahlian dan penguasaan bahasa Sunda tingkat tinggi.

**Apa itu Pupuh?**
Guguritan menggunakan pola metrum yang disebut pupuh. Ada 17 jenis pupuh dalam sastra Sunda, masing-masing memiliki aturan jumlah baris per bait (guru wilangan) dan bunyi vokal akhir tiap baris (guru lagu).

**Jenis-Jenis Pupuh Utama**

**1. Kinanti**
Paling populer. Tiap bait 6 baris, bersuasana rindu dan harapan. Sering digunakan untuk mengungkap perasaan cinta atau kerinduan:
*"Budak leutik bisa ngaji, keur gedéna jadi pinter..."*

**2. Sinom**
9 baris per bait, bersuasana gembira dan optimis. Sering dipakai dalam nasihat dan pendidikan:
*"Héy para nonoman Sunda, pék regepkeun ieu carita..."*

**3. Asmarandana**
7 baris per bait, bersuasana sedih dan memendam rindu. Sering digunakan dalam prosa liris tentang cinta yang terhalang.

**4. Dangdanggula**
10 baris per bait, bersuasana agung dan bijaksana. Dipakai dalam teks keagamaan atau nasihat untuk pemimpin.

**Guguritan di Era Modern**
Meski jarang dalam percakapan sehari-hari, guguritan masih diajarkan di sekolah dasar dan menengah Jawa Barat sebagai bagian dari muatan lokal bahasa Sunda. Festival guguritan juga rutin diselenggarakan untuk melestarikan seni ini.

**Contoh Guguritan Sederhana (Kinanti)**
*"Cai ngalir ti gunung luhur,*
*Ngurilingan tegal sawah,*
*Urang Sunda kudu jujur,*
*Dina sagala rupa perkara,*
*Hade goreng ulah poho,*
*Ka indung Bapa nu geus tua."*`,
  },
  {
    slug: "kerajaan-sunda-pajajaran",
    title: "Kerajaan Sunda Pajajaran: Kejayaan yang Dilupakan Sejarah",
    category: "Sejarah",
    date: "30 Maret 2026",
    isoDate: "2026-03-30",
    readTime: "7 menit",
    cover: "👑",
    excerpt: "Pajajaran adalah puncak kejayaan peradaban Sunda. Kenali sejarah kerajaan besar ini, ibukotanya, sistem pemerintahannya, dan mengapa ia runtuh.",
    body: `Kerajaan Sunda Pajajaran, atau dikenal juga sebagai Kerajaan Pakuan Pajajaran, adalah kerajaan Hindu-Sunda terbesar yang pernah berdiri di tanah Sunda. Kejayaannya berlangsung selama lebih dari dua abad sebelum akhirnya runtuh.

**Berdirinya Kerajaan**
Pajajaran berdiri sekitar abad ke-14 Masehi dengan pusat pemerintahan di Pakuan (kini wilayah Bogor, Jawa Barat). Raja yang paling terkenal adalah Sri Baduga Maharaja, yang memerintah dari 1482 hingga 1521. Ia dikenal dengan sebutan Prabu Siliwangi dan hingga kini dipuja sebagai tokoh legendaris masyarakat Sunda.

**Sistem Pemerintahan**
Pajajaran menganut sistem kerajaan Hindu dengan raja sebagai pusat kekuasaan. Namun berbeda dari kerajaan Jawa yang sentralistis, Pajajaran memiliki beberapa kerajaan vasal (bawahan) yang diperintah oleh pangeran-pangeran dari dinasti yang sama.

**Prasasti dan Bukti Sejarah**
Jejak Pajajaran masih bisa ditemukan dalam bentuk:
- **Prasasti Batutulis** (Bogor) — paling terkenal, menceritakan kejayaan Prabu Siliwangi
- **Prasasti Kawali** (Ciamis) — tertua dari era Sunda-Galuh
- **Naskah Bujangga Manik** — catatan perjalanan seorang pertapa yang menggambarkan kondisi kerajaan

**Kejatuhan Pajajaran**
Pajajaran runtuh pada tahun 1579 akibat serangan gabungan Kesultanan Banten dan Cirebon. Keruntuhan ini menandai berakhirnya era Hindu Sunda dan dimulainya pengaruh Islam yang kuat di wilayah Jawa Barat.

**Warisan untuk Bahasa Sunda**
Banyak kosakata, ungkapan, dan konsep dalam bahasa Sunda berakar dari era Pajajaran. Sistem undak usuk basa yang ada saat ini juga diperkirakan berkembang dari tata kesopanan keraton Pajajaran.`,
  },
  {
    slug: "kata-kerja-sehari-hari-bahasa-sunda",
    title: "50 Kata Kerja Bahasa Sunda yang Paling Sering Digunakan",
    category: "Kosakata",
    date: "28 Maret 2026",
    isoDate: "2026-03-28",
    readTime: "5 menit",
    cover: "⚡",
    excerpt: "Kuasai 50 kata kerja bahasa Sunda yang paling sering muncul dalam percakapan sehari-hari. Dilengkapi tiga tingkatan: lemes, sedang, dan kasar.",
    body: `Kata kerja adalah tulang punggung sebuah kalimat. Menguasai kata kerja bahasa Sunda berarti kamu sudah bisa membentuk kalimat dasar. Berikut 50 kata kerja paling penting beserta tingkatannya.

**Kata Kerja Gerak Dasar**
| Arti | Lemes | Sedang | Kasar |
|------|-------|--------|-------|
| Pergi | angkat | indit | indit |
| Datang | sumping | datang | datang |
| Makan | neda | dahar | nyatu |
| Minum | nginum | nginum | nginum |
| Tidur | kulem | sare | sare |
| Bangun | tangi | tangi | tangi |
| Duduk | calik | diuk | diuk |
| Berdiri | nangtung | nangtung | nangtung |
| Berjalan | leumpang | leumpang | leumpang |
| Berlari | lumpat | lumpat | lumpat |

**Kata Kerja Komunikasi**
- Berbicara = nyarios / nyarita / ngomong (lemes/sedang/kasar)
- Bertanya = naroskeun / nanya / nanya
- Menjawab = ngawaler / ngajawab / ngajawab
- Mendengar = ngadangu / ngadéngé / ngadéngé
- Melihat = ningali / nempo / nempo

**Kata Kerja Kegiatan Rumah**
- Memasak = masak, Mencuci = ngumbah / ngisikan
- Membersihkan = ngabersihan, Menyapu = nyapuan
- Membeli = meuli, Menjual = ngajual

**Kata Kerja Mental**
- Berpikir = mikir / mikiran, Mengerti = ngarti / ngartos (sedang/lemes)
- Ingat = inget / émut (sedang/lemes), Lupa = poho / hilap
- Suka = resep / senang, Tidak suka = teu resep

**Tips Penggunaan**
Dalam percakapan santai dengan teman sebaya, gunakan bentuk sedang. Saat berbicara dengan orang yang lebih tua atau dalam situasi formal, gunakan bentuk lemes. Bentuk kasar (wantah) hanya dipakai di antara teman sangat dekat.`,
  },
  {
    slug: "gamelan-degung-musik-sunda",
    title: "Degung: Musik Gamelan Khas Sunda yang Menenangkan Jiwa",
    category: "Budaya",
    date: "26 Maret 2026",
    isoDate: "2026-03-26",
    readTime: "5 menit",
    cover: "🎶",
    excerpt: "Degung adalah ensemble gamelan khas Sunda yang memiliki karakter suara lebih lembut dan meditatif dibanding gamelan Jawa. Kenali instrumen dan tangga nadanya.",
    body: `Degung adalah orkestra gamelan khas Jawa Barat (Sunda) yang membedakan diri dari gamelan Jawa melalui karakter suara, susunan instrumen, dan sistem tangga nada yang unik.

**Apa itu Degung?**
Kata "degung" mengacu pada ensemble alat musik pukul logam (metalofon) yang berkembang di lingkungan istana Sunda. Bunyi degung terkenal lebih lembut, meditatif, dan melankolis — mencerminkan karakter budaya Sunda yang halus dan harmonis.

**Instrumen dalam Degung**
- **Bonang** — gong-gong kecil yang disusun dalam bingkai, memainkan melodi utama
- **Saron** — bilah-bilah logam yang dipukul, menghasilkan nada dasar
- **Kendang** — gendang dua sisi yang mengatur tempo dan ekspresi
- **Suling Sunda** — seruling bambu dengan 4 lubang, suara khasnya menjadi identitas degung
- **Kacapi** — kecapi petik bersenar banyak, sering dipadukan sebagai melodi pengiring
- **Gong** — gong besar sebagai penjaga ketukan utama

**Tangga Nada Pelog Degung**
Degung menggunakan laras (tangga nada) pelog dengan 5 nada utama: da, mi, na, ti, la. Berbeda dari tangga nada barat (do-re-mi), tangga nada degung menciptakan interval yang khas — itulah yang membuat musik degung terasa berbeda di telinga.

**Degung dalam Kehidupan**
Musik degung tradisional biasa dimainkan dalam upacara adat, penyambutan tamu kehormatan, dan perayaan resmi. Kini degung modern banyak dipadukan dengan pop Sunda, jazz, bahkan elektronik — membuktikan adaptabilitas warisan budaya ini.

**Kacapi Suling**
Salah satu sub-genre degung yang paling populer adalah kacapi suling — duo kacapi dan suling Sunda yang sering dimainkan sebagai musik latar di restoran Sunda. Iramanya yang pelan dan syahdu menjadi identitas keramahan budaya Sunda.`,
  },
  {
    slug: "tata-krama-bahasa-sunda",
    title: "Tata Krama Berbicara dalam Bahasa Sunda: Dos and Don'ts",
    category: "Panduan",
    date: "23 Maret 2026",
    isoDate: "2026-03-23",
    readTime: "5 menit",
    cover: "🤝",
    excerpt: "Belajar bahasa Sunda bukan hanya soal kosakata. Ada aturan tata krama yang harus dipahami agar tidak dianggap tidak sopan oleh penutur asli.",
    body: `Bahasa Sunda memiliki sistem kesopanan yang sangat terstruktur. Kesalahan dalam tata krama berbicara bisa lebih menyinggung dibanding salah kata. Berikut panduan dos and don'ts yang perlu kamu ketahui.

**Prinsip Dasar: Siapa yang Kamu Ajak Bicara?**
Sebelum mulai berbicara, tentukan dulu posisi sosial lawan bicara:
- Lebih tua / dihormati → gunakan basa lemes
- Sebaya / sudah kenal → gunakan basa sedang
- Teman sangat dekat → boleh basa wantah (kasar)

**DO: Yang Harus Dilakukan**
✅ Selalu awali percakapan dengan salam: "Wilujeng énjing / siang / sonten"
✅ Gunakan "abdi" (bukan "kuring" atau "aing") saat berbicara dengan orang yang lebih tua
✅ Panggil orang tua dengan "Bapa" (ayah) / "Ibu" (ibu) atau "Aki" (kakek) / "Nini" (nenek)
✅ Gunakan "punten" (permisi/maaf) sebelum melewati orang atau meminta sesuatu
✅ Akhiri permintaan dengan "hapunten" jika khilaf atau mengganggu

**DON'T: Yang Harus Dihindari**
❌ Jangan gunakan "aing" (saya kasar) kepada orang yang baru dikenal atau lebih tua
❌ Jangan memanggil orang tua dengan nama mereka langsung
❌ Jangan berbicara sambil berdiri jika lawan bicara sedang duduk (dianggap tidak sopan)
❌ Jangan menyela pembicaraan orang yang lebih tua
❌ Jangan menggunakan kata "manéh" (kamu sedang) kepada orang yang baru dikenal

**Kata-Kata Sopan yang Wajib Hafal**
- Hatur nuhun = terima kasih (lemes, untuk semua situasi)
- Punten = permisi / maaf ringan
- Hapunten = maaf sungguh-sungguh
- Mangga = silakan (mempersilakan orang lain)
- Sumuhun / muhun = ya / betul (lemes)`,
  },
  {
    slug: "tips-belajar-bahasa-sunda-otodidak",
    title: "5 Metode Terbaik Belajar Bahasa Sunda Secara Otodidak",
    category: "Panduan",
    date: "22 Maret 2026",
    isoDate: "2026-03-22",
    readTime: "5 menit",
    cover: "🧠",
    excerpt: "Tidak perlu les formal untuk bisa berbahasa Sunda. Dengan metode yang tepat dan konsisten, kamu bisa belajar sendiri dari nol hingga percakapan dasar.",
    body: `Belajar bahasa Sunda secara otodidak kini semakin mudah berkat teknologi. Berikut 5 metode yang terbukti efektif.

**Metode 1: Immersion Digital**
Tenggelamkan dirimu dalam konten berbahasa Sunda:
- Tonton YouTube berbahasa Sunda (konten komedi, vlog, atau siaran berita TVRI Jawa Barat)
- Dengarkan podcast atau radio Sunda (RRI Bandung)
- Ikuti akun media sosial yang menggunakan bahasa Sunda
- Ubah bahasa HP ke Bahasa Sunda (jika tersedia)

**Metode 2: Spaced Repetition Flashcard**
Gunakan aplikasi Anki atau Quizlet. Buat deck khusus bahasa Sunda:
- Kosakata dasar (basa sedang dahulu)
- Kata-kata tata krama
- Pasangan kata Indonesia-Sunda
Ulangi setiap hari selama 10-15 menit. Metode ini terbukti 3x lebih efektif dari hafalan biasa.

**Metode 3: Output Harian**
Tulis satu kalimat per hari dalam bahasa Sunda di buku catatan atau apps seperti Notion. Mulai dari kalimat sederhana:
- "Kuring dahar sangu." (Saya makan nasi.)
- "Dinten ieu panas pisan." (Hari ini sangat panas.)

**Metode 4: Language Exchange**
Cari partner tukar bahasa melalui grup Facebook "Belajar Bahasa Sunda" atau komunitas Sunda di Reddit/Discord. Kamu bisa mengajarkan bahasa Indonesia atau Inggris sebagai imbal balik.

**Metode 5: Gunakan Translate Sunda sebagai Kamus Aktif**
Ketika menemukan frasa yang ingin kamu ucapkan, terjemahkan langsung menggunakan [translatesunda.id](https://translatesunda.id). Ini membangun kosakata secara kontekstual — kamu belajar kata yang memang kamu butuhkan.

**Target Realistis Otodidak**
- Bulan 1: Sapaan dan kalimat dasar
- Bulan 3: Percakapan sederhana (basa sedang)
- Bulan 6: Mulai memahami konten audio/video
- Tahun 1: Percakapan lancar basa sedang, mulai basa lemes`,
  },
  {
    slug: "perbandingan-bahasa-sunda-jawa",
    title: "Bahasa Sunda vs Bahasa Jawa: Persamaan dan Perbedaannya",
    category: "Linguistik",
    date: "18 Maret 2026",
    isoDate: "2026-03-18",
    readTime: "6 menit",
    cover: "⚖️",
    excerpt: "Bahasa Sunda dan Jawa sama-sama memiliki tingkatan tutur, tapi berbeda dalam kosakata dan aturan. Kenali persamaan dan perbedaan dua bahasa serumpun ini.",
    body: `Bahasa Sunda dan bahasa Jawa adalah dua bahasa daerah terbesar di Indonesia. Keduanya serumpun (sama-sama rumpun Austronesia) dan memiliki beberapa kesamaan, namun berbeda secara signifikan dalam kosakata, fonologi, dan sistem kesopanan.

**Persamaan Utama**
1. **Sistem tingkatan tutur**: Keduanya memiliki ragam bahasa berdasarkan status sosial. Jawa mengenal ngoko-madya-krama, Sunda mengenal wantah-sedang-lemes.
2. **Akar kata yang sama**: Beberapa kata dasar memiliki bentuk yang mirip — misalnya "mati" (Sunda: maot/paéh, Jawa: mati/séda).
3. **Pengaruh Sansekerta**: Keduanya menyerap banyak kosakata dari bahasa Sansekerta melalui agama Hindu.

**Perbedaan Kosakata**
| Arti | Bahasa Sunda | Bahasa Jawa |
|------|-------------|-------------|
| Saya (formal) | Abdi | Kula / Dalem |
| Kamu (formal) | Anjeun | Panjenengan |
| Makan (formal) | Neda | Dhahar |
| Tidur (formal) | Kulem | Sare / Tilem |
| Pergi | Indit / Angkat | Lunga / Tindak |
| Rumah | Imah / Bumi | Omah / Griya |

**Perbedaan Fonologi**
- Bahasa Sunda memiliki vokal "eu" yang tidak ada dalam bahasa Jawa
- Bahasa Jawa memiliki konsonan "dh" dan "th" yang tidak ada di Sunda
- Aksara Sunda berbeda dari aksara Jawa meski keduanya berasal dari aksara Brahmi

**Saling Pengaruh**
Karena kedekatan geografis (Jawa Barat berbatasan dengan Jawa Tengah), banyak kosakata Jawa yang masuk ke dialek Sunda di wilayah perbatasan (Cirebon, Majalengka, Kuningan), dan sebaliknya.

**Mana yang Lebih Mudah?**
Bagi penutur Indonesia, keduanya relatif menantang. Namun banyak yang menganggap bahasa Sunda sedikit lebih mudah karena sistem ortografi Latin-nya lebih konsisten dan kosakatanya tidak seterlalu berbeda dari bahasa Indonesia dibanding bahasa Jawa.`,
  },
  {
    slug: "nama-tempat-bahasa-sunda",
    title: "Arti Nama Tempat di Jawa Barat dalam Bahasa Sunda",
    category: "Linguistik",
    date: "12 Maret 2026",
    isoDate: "2026-03-12",
    readTime: "5 menit",
    cover: "🗺️",
    excerpt: "Dari Bandung hingga Cianjur, nama-nama kota di Jawa Barat memiliki arti mendalam dalam bahasa Sunda. Kenali makna di balik nama tempat yang kamu kenal.",
    body: `Setiap nama tempat di Jawa Barat menyimpan cerita dalam bahasa Sunda. Memahami artinya bukan sekadar pengetahuan trivia — ini jendela untuk memahami sejarah, geografi, dan budaya Sunda.

**Prefiks dan Kata Umum dalam Nama Tempat Sunda**
- **Ci-** = air / sungai (dari "cai") → Ciamis, Cirebon, Cikarang, Cianjur, Cikampek
- **Batu-** = batu/besar → Batu Jajar, Batununggal
- **Gunung-** = gunung → Gunungputri, Gunungsindur
- **Lembang** = lembah → Lembang (Bandung Utara)
- **Leuwi-** = lubuk/kedalaman sungai → Leuwinanggung, Leuwisadeng

**Arti Nama Kota-Kota Besar**

**Bandung** — berasal dari "Bendung" atau "Ngabandung" yang berarti bendungan. Mengacu pada cerita bahwa wilayah ini dulunya adalah danau purba yang terbendung aliran Sungai Citarum.

**Bogor** — berasal dari "Babadar" atau ada yang menyebut dari "Pakuan" (pacuan, tempat berlomba). Versi lain menyebut dari kata "Bagar" yaitu sejenis tanaman rumput.

**Sukabumi** — "Suka" (senang/baik) + "bumi" (tanah/dunia) = Tanah yang Menyenangkan.

**Cianjur** — "Ci" (air) + "anjur" → asal kata dari "anjuran" atau merujuk pada sungai Cianjur. Ada juga yang mengartikan dari "anjur" yang berarti tanjung.

**Garut** — ada beberapa versi: dari pohon "Garut" (tanaman pati), atau dari kata "ngagarut" (menggores/mencakar) yang merujuk kondisi tanah berkapur.

**Tasikmalaya** — "Tasik" (danau/genangan air besar) + "Malaya" (gunung/tinggi) = Danau di Ketinggian.

**Ciamis** — "Ci" (air) + "amis" (manis) = Air yang Manis, kemungkinan merujuk pada sumber air bersih yang jernih di wilayah tersebut.

**Mengapa Penting?**
Mengetahui arti nama tempat membantu kita memahami kondisi geografis, sejarah, dan karakter suatu daerah. Ini adalah peta budaya yang tersembunyi dalam bahasa Sunda.`,
  },
  {
    slug: "bahasa-sunda-di-media-sosial",
    title: "Tren Bahasa Sunda Gaul di Media Sosial: Kamus Singkat Gen Z",
    category: "Opini",
    date: "8 Maret 2026",
    isoDate: "2026-03-08",
    readTime: "4 menit",
    cover: "📱",
    excerpt: "Bahasa Sunda kini hadir dalam versi gaul di TikTok, Instagram, dan Twitter. Kenali ungkapan-ungkapan Sunda populer yang dipakai anak muda Jawa Barat.",
    body: `Media sosial telah menciptakan dialek baru dalam bahasa Sunda — campuran antara bahasa Sunda, Indonesia, dan slang internet yang khas dan dinamis. Inilah fenomena yang membuat bahasa Sunda tetap relevan di era digital.

**Kata-Kata Sunda yang Viral di Medsos**

**"Geus ah"** — "Sudah lah" / "Cukup deh". Ungkapan menyerah atau mengakhiri perdebatan. Sangat sering muncul di kolom komentar.

**"Enya atuh"** — "Iya dong" / "Ya iyalah". Ungkapan konfirmasi dengan nada sedikit kesal atau menegaskan sesuatu yang seharusnya sudah jelas.

**"Teu ngarti aing"** — "Aku gak ngerti" dalam logat kasar-santai. Sering dipakai dengan nada komedi.

**"Hayang pisan"** — "Pengen banget". Ungkapan keinginan yang kuat, sering muncul di konten makanan atau lifestyle.

**"Aduh manéh"** — "Aduh kamu" — ungkapan gemas/kesal kepada seseorang yang dekat.

**"Kumaha atuh"** — "Gimana dong" — ungkapan bingung atau minta solusi.

**Tren Konten Berbahasa Sunda**
Di TikTok, konten berbahasa Sunda — terutama komedi, tutorial, dan vlog — mendapatkan jutaan penonton. Kreator seperti komika Sunda dan content creator Bandung berhasil membawa bahasa Sunda ke audiens yang lebih muda dan lebih luas.

**Bahasa Sunda Gaul: Pro dan Kontra**
**Pro**: Bahasa jadi hidup, relevan, dan menarik bagi generasi muda. Memperluas penutur bahasa Sunda secara organik.
**Kontra**: Kekhawatiran dari pegiat bahasa bahwa versi gaul ini menggeser kosakata asli dan melemahkan penguasaan basa lemes yang menjadi identitas budaya Sunda.

**Kesimpulan**
Bahasa yang tidak berevolusi akan mati. Munculnya Sunda gaul di medsos adalah tanda bahwa bahasa ini masih hidup dan dicintai generasi muda — meskipun bentuknya berbeda dari yang diajarkan di sekolah.`,
  },
];

export const CATEGORIES = ["Semua", ...Array.from(new Set(ARTICLES.map((a) => a.category)))];
