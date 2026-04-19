# Translate Sunda

Platform terjemahan Bahasa Sunda ↔ Indonesia berbasis AI, dibangun dengan Next.js dan Claude API.

🌐 **Live:** [translatesunda.id](https://translatesunda.id)

---

## Fitur

- **Terjemahan Indonesia → Sunda** dengan 3 tingkatan:
  - Sunda Halus (Lemes)
  - Sunda Sedang
  - Sunda Kasar (Wantah)
- **Terjemahan Sunda → Indonesia** dengan konteks tingkatan input
- Tombol swap ⇄ cerdas yang mengingat tingkatan
- Rate limiting per IP (Upstash)
- Response caching 7 hari (Upstash Redis)
- Blog artikel seputar bahasa & budaya Sunda
- SEO-ready: sitemap, robots.txt, JSON-LD, OG tags
- Dark mode / Light mode

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **AI:** Anthropic Claude (claude-haiku)
- **Cache & Rate Limit:** Upstash Redis
- **Styling:** Vanilla CSS (inline styles)
- **Deployment:** Vercel

## Cara Menjalankan Lokal

```bash
# Clone repo
git clone https://github.com/manarulcom/translatesunda.git
cd translatesunda

# Install dependencies
npm install

# Buat file .env.local
cp .env.example .env.local
# Isi dengan kredensial kamu (lihat bagian Environment Variables)

# Jalankan dev server
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000).

## Environment Variables

Buat file `.env.local` di root project dengan isi berikut:

```env
NEXT_PUBLIC_SITE_URL=https://translatesunda.id
UPSTASH_REDIS_REST_URL=your-upstash-redis-url
UPSTASH_REDIS_REST_TOKEN=your-upstash-redis-token
ANTHROPIC_API_KEY=your-anthropic-api-key
```

> ⚠️ Jangan pernah commit file `.env.local` ke repository.

## Deploy ke Vercel

1. Push ke GitHub
2. Import project di [vercel.com](https://vercel.com)
3. Tambahkan semua Environment Variables di Vercel Dashboard
4. Set custom domain `translatesunda.id`

## Struktur Folder

```
app/
  api/translate/   # API route terjemahan
  blog/            # Halaman blog & artikel
  kontak/          # Halaman kontak
  tentang/         # Halaman tentang
  layout.tsx       # Root layout + SEO metadata
  sitemap.ts       # Dynamic sitemap
  robots.ts        # robots.txt
components/
  TranslatorBox.tsx   # Komponen utama translator
  NavBar.tsx          # Navigasi
  HomePage.tsx        # Halaman utama
  BlogPage.tsx        # Daftar artikel
  ArticlePage.tsx     # Detail artikel
  TentangPage.tsx     # Halaman tentang
  KontakPage.tsx      # Halaman kontak
lib/
  articles.ts      # Data artikel blog
  constants.ts     # Konstanta (tingkatan, fitur, FAQ)
  theme.tsx        # Dark/light mode
public/            # Aset statis (icon, OG image)
```

---

© 2026 TranslateSunda.id
