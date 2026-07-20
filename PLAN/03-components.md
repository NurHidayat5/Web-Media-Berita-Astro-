# Components

## Layout Components

### BaseLayout.astro
- HTML boilerplate dengan Google Fonts (Inter + Merriweather)
- SEO meta tags via SEOHead component
- Favicon SVG
- Header & Footer wrapper
- Global CSS import dari `src/styles/global.css`

### Header.astro
- Logo "Hidayat" + subtitle "Blog & Portfolio"
- Navigation links (Beranda, Blog, Tentang)
- Active state: text-blue-600 / bg-blue-50
- Mobile menu dengan hamburger button
- Sticky header dengan border bottom

### Footer.astro
- 3-column grid layout:
  1. Brand + deskripsi
  2. Navigasi links
  3. Sosial media icons (GitHub, LinkedIn, Twitter)
- Copyright notice

## Blog Components

### ArticleCard.astro
Props:
- title: string
- slug: string
- excerpt: string
- coverImage?: string
- publishDate: string
- category?: string
- featured?: boolean

Renders:
- Cover image (aspect-video, rounded-lg)
- Category badge (uppercase, blue-600)
- Title (bold, hover:text-blue-600)
- Excerpt (gray-500, line-clamp)
- Date

### CategoryFilter.astro
Props:
- categories: Category[]
- activeCategory?: string

Renders:
- "Semua" button (active: bg-gray-900)
- Category pills/buttons

### SEOHead.astro
Props:
- title: string
- description: string
- image?: string
- url: string

Renders:
- Open Graph tags + og:site_name
- Twitter cards
- Canonical URL
- JSON-LD structured data

## File Locations

```
src/
├── components/
│   ├── ArticleCard.astro
│   ├── CategoryFilter.astro
│   ├── Footer.astro
│   ├── Header.astro
│   └── SEOHead.astro
├── layouts/
│   └── BaseLayout.astro
├── lib/
│   └── wix.ts
├── pages/
│   ├── 404.astro
│   ├── about.astro
│   ├── index.astro
│   └── blog/
│       ├── index.astro
│       ├── [slug].astro
│       └── category/
│           └── [cat].astro
└── styles/
    └── global.css
```