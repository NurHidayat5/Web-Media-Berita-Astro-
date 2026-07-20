# Architecture

## Diagram Arsitektur

```
┌─────────────────┐                  ┌─────────────────┐
│  Wix Dashboard  │ ──── SDK ────►  │   Astro Blog    │
│  (CMS Editor)   │                  │   (Frontend)    │
└─────────────────┘                  └─────────────────┘
         │                                    │
         ▼                                    ▼
   Tulis Artikel                       Static HTML
   di Wix CMS                          (SEO Score: 100)
                                               │
                                               ▼
                                      ┌─────────────────┐
                                      │     Vercel      │
                                      │   (Hosting)     │
                                      └─────────────────┘
```

## Alur Data
1. **Author** menulis artikel di Wix Dashboard
2. **Wix CMS** menyimpan data (title, content, image, category)
3. **Astro** fetch data via Wix SDK saat build time
4. **Astro** generate static HTML pages
5. **Vercel** serve halaman ke visitors
6. **Google** crawl & index (SEO-friendly)

## Tech Stack Versions
- Node.js: v20.11.0+
- Astro: ^5.x
- Tailwind CSS: ^3.x
- Wix SDK: @wix/sdk