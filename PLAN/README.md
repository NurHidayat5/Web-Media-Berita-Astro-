# Blog Pribadi - Seputar Redaksi Portal Berita

## Deskripsi
Portal berita teknologi monitoring lingkungan yang dibangun dengan Astro + Wix Headless SDK.
Artikel ditulis di Wix Dashboard, lalu di-fetch ke Astro via Wix SDK (`@wix/blog`)
untuk menampilkan portal berita berskala besar dengan ribuan artikel, performa tinggi, dan SEO optimal.

## Tech Stack
- **Framework:** Astro 5
- **CMS:** Wix Headless (SDK `@wix/sdk` + `@wix/blog`)
- **Styling:** Tailwind CSS
- **Deployment:** Vercel

## Status
- [x] Project setup
- [x] Components
- [x] Wix SDK integration (ribuan artikel + konten penuh)
- [x] Pages
- [x] Redesign Portal Berita (Kompas/Tempo style)
- [ ] Deployment
- [ ] Testing

## Konfigurasi (.env)
```env
WIX_SITE_URL=https://[site].wixsite.com/[nama]
WIX_CLIENT_ID=[OAuth Client ID dari Wix Headless]
```

## Development
```bash
npm install
npm run dev
npm run build
npm run preview
```

## Preview
http://localhost:4321/