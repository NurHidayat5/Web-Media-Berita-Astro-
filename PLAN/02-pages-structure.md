# Pages & Routing

## Halaman yang Dibutuhkan

| Route | File | Deskripsi |
|-------|------|-----------|
| `/` | `src/pages/index.astro` | Homepage dengan intro & featured articles |
| `/blog` | `src/pages/blog/index.astro` | Daftar semua artikel + filter kategori |
| `/blog/[slug]` | `src/pages/blog/[slug].astro` | Detail artikel |
| `/blog/category/[cat]` | `src/pages/blog/category/[cat].astro` | Artikel per kategori |
| `/about` | `src/pages/about.astro` | Tentang saya |

## Data Structure (dari Wix)

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
}
```

### Category
```typescript
interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
}
```