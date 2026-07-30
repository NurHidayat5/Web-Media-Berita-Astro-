# Wix SDK Integration

## Implementasi Aktual

Blog ini menggunakan **Wix Headless SDK** (`@wix/sdk` dan `@wix/blog`) untuk mengambil data. Ini merupakan perubahan dari versi sebelumnya yang menggunakan RSS Feed.
Perubahan ini dilakukan agar blog dapat memuat **ribuan artikel**, menangani pagination, serta merender HTML utuh secara lokal.

## Setup

### 1. Environment Variables
Untuk menggunakan Wix SDK, kita harus mendefinisikan WIX_CLIENT_ID yang didapat dari Wix Headless OAuth App.
```env
WIX_CLIENT_ID=your_client_id_here
```

### 2. Dependencies
```bash
npm install @wix/sdk @wix/blog
```

## Data Fetching

### Build-Time Fetching (Wix SDK)
```typescript
// src/lib/wix.ts
import { createClient, OAuthStrategy } from '@wix/sdk';
import { items } from '@wix/blog';

// Inisialisasi Wix Client
const wixClient = createClient({
  modules: { items },
  auth: OAuthStrategy({ clientId: process.env.WIX_CLIENT_ID })
});

export async function getAllPosts() {
  // Query all posts menggunakan Wix SDK dengan pagination loop
  // wixClient.items.queryPosts().limit(100).find();
}

export async function getPostBySlug(slug: string) {
  // Query post berdasarkan slug
}

export async function getAllCategories() {
  // Ambil data kategori yang ada
}
```

### Why Wix SDK?
- **Skalabilitas** — Mampu memuat ribuan artikel dengan pagination (RSS dibatasi 20-50).
- **Konten Utuh** — Mendapatkan HTML penuh (`richContent`) tanpa harus scraping `url` live.
- **Relasional** — Relasi artikel dan kategori lebih terstruktur.

## File Locations
- `src/lib/wix.ts` — Data fetching functions
- `.env` — Konfigurasi Client ID