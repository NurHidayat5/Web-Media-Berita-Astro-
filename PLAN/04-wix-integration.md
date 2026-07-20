# Wix RSS Feed Integration

## Implementasi Aktual

Blog ini menggunakan **RSS Feed** dari Wix untuk mengambil data artikel, bukan Wix SDK.

## Setup

### 1. Environment Variables
```env
WIX_SITE_URL=https://nurhidayatttyattt.wixsite.com/mertani-dev
```

### 2. Dependencies
```bash
npm install fast-xml-parser
```

## Data Fetching

### Build-Time Fetching (RSS Feed)
```typescript
// src/lib/wix.ts
import { XMLParser } from 'fast-xml-parser';

const RSS_FEED_URL = `${WIX_SITE_URL}/blog-feed.xml`;

export async function getAllPosts(): Promise<BlogPost[]> {
  const data = await fetchRSSFeed();
  const channel = data.rss?.channel;
  // Parse items...
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const posts = await getAllPosts();
  return posts.find((post) => post.slug === slug) || null;
}

export async function getAllCategories(): Promise<Category[]> {
  const posts = await getAllPosts();
  // Extract unique categories...
}
```

### Why RSS Feed?
- **Simpler** — Tidak perlu API key atau SDK setup
- **Reliable** — RSS Feed selalu tersedia di Wix
- **Fast** — Fetch langsung dari XML
- **No Auth** — Tidak perlu autentikasi

### Build-Time Benefits
- **SEO:** Static HTML, fast crawl
- **Performance:** No client-side fetching
- **Reliability:** No runtime API calls

## Data Structure

### Blog Post
```typescript
interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage: string;
  category: string;
  publishDate: string;
  author: string;
  url: string;
}
```

### Category
```typescript
interface Category {
  id: string;
  name: string;
  slug: string;
}
```

## Testing
```bash
npm run test:wix
```

## File Locations
- `src/lib/wix.ts` — Data fetching functions
- `.env` — WIX_SITE_URL
- `test-wix.mjs` — Test script