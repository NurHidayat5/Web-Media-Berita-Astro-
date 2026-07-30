# Rencana Perbaikan & Fitur Baru (30 Juli 2026)

Dokumen ini mencatat daftar perbaikan dan penambahan fitur yang diminta, agar tidak lupa.

## Ringkasan Status

| No | Masalah / Fitur | Status |
|----|---------|--------|
| 1 | Gambar berulang di artikel | ✅ Selesai |
| 2 | Font judul artikel aneh | ✅ Selesai |
| 3 | Hapus tombol "Baca di Wix" | ✅ Selesai |
| 4 | Loading lambat | ✅ Selesai (View Transitions + Cache Dev Server) |
| 5 | Integrasi Adsterra | ✅ Selesai (Script dipasang & diganti ke key baru) |
| 6 | Layout Home | ✅ Selesai (Disamakan dengan layout kategori lainnya) |
| 7 | Push ke GitHub | ✅ Selesai (repo: NurHidayat5/Web-Media-Berita-Astro-) |
| 8 | Deploy ke Vercel | ✅ Selesai (auto-deploy dari GitHub) |
| 9 | Navigasi Mobile (Bottom Nav) | ✅ Selesai (4 menu: Beranda, Terkini, Cari, Tentang) |
| 10 | Ganti Script Iklan Adsterra | ✅ Selesai (key lama → key baru `d82f91...`) |
| 11 | Deploy Hook (Wix → Vercel) | ⚠️ Belum diatur oleh user (lihat panduan di bawah) |

---

## Detail Perbaikan

### 1. Gambar Berurutan di Artikel
- **Masalah:** Saat membuka detail artikel, gambar cover muncul ganda.
- **Solusi:** Hapus blok cover image terpisah di `[slug].astro`. Gambar sekarang hanya muncul sekali dari konten Wix.

### 2. Font Judul Artikel Aneh
- **Masalah:** Font `font-serif` (Merriweather) tidak cocok.
- **Solusi:** Hapus class `font-serif`, sekarang menggunakan font Inter (sans-serif) yang konsisten.

### 3. Hapus Link "Baca di Wix"
- **Masalah:** Ada tombol yang mengarahkan ke Wix.
- **Solusi:** Hapus seluruh elemen link + ikon "Baca di Wix" dari `[slug].astro`.

### 4. Loading Pindah Halaman Terasa Lama
- **Masalah:** Navigasi lambat karena fetch ulang data dari Wix setiap halaman.
- **Solusi:**
  1. **View Transitions** — navigasi instan ala SPA.
  2. **Cache In-Memory** di `wix.ts` (TTL 5 menit) — data hanya diambil sekali.
  - *Catatan:* Di production (Vercel), halaman bersifat statis jadi sudah sangat cepat.

### 5. Integrasi Iklan Adsterra
- Komponen `AdsterraAd.astro` dibuat dengan `is:inline` agar script eksternal berjalan.
- **Script awal:** key `771ae998ff62a9c2fe1a45927e2f18a4`
- **Script diganti (30 Juli):** key `d82f91bac4277090adaaef9711ba534b`
- Dipasang di sidebar homepage (`index.astro`).

### 6. Layout Berita Utama (Home)
- Layout Headline Section diseragamkan: 1 hero besar di atas + 3 grid kecil di bawah.

### 7. Push ke GitHub
- Repository: `https://github.com/NurHidayat5/Web-Media-Berita-Astro-`
- Branch: `main`

### 8. Deploy ke Vercel
- Project Name: `web-media-berita-astro`
- Environment Variables yang diset: `WIX_CLIENT_ID`, `WIX_SITE_URL`
- Auto-deploy aktif: setiap `git push` ke GitHub, Vercel otomatis build ulang.

### 9. Navigasi Mobile (Bottom Nav Bar)
- Komponen baru: `MobileNav.astro`
- 4 menu: Beranda, Terkini, Cari, Tentang
- Menempel di bawah layar (fixed bottom), hanya tampil di layar kecil (< 640px)
- Halaman aktif ditandai warna merah
- Body diberi `pb-16 sm:pb-0` agar konten tidak tertutup nav bar

### 10. Ganti Script Iklan Adsterra
- Key lama dihapus, diganti key baru sesuai permintaan user.

| 11 | Mode Server Real-Time (SSR) | ✅ Selesai (Menggunakan `@astrojs/vercel` mode Server) |

---

## Detail Perbaikan

### 11. Mode Server Real-Time (SSR) untuk Update Otomatis
- **Permintaan:** Pengguna ingin agar setiap aksi (Tambah, Edit, Hapus artikel) di Wix langsung otomatis terupdate di website tanpa perlu re-deploy manual atau webhook.
- **Solusi:**
  1. Mengkonfigurasi Astro dari mode Statis (`output: 'static'`) menjadi Mode Server (`output: 'server'`) menggunakan adapter resmi `@astrojs/vercel`.
  2. Menghapus `getStaticPaths()` di dynamic routes (`[slug].astro` & `[cat].astro`) agar halaman dirender secara dinamis per permintaan.
  3. Mengatur cache Wix di `wix.ts` menjadi 15 detik.
- **Hasil:**
  - ➕ **Tambah Artikel:** Langsung muncul di website secara real-time.
  - ✏️ **Edit Artikel:** Perubahan teks/gambar langsung terupdate di website secara real-time.
  - 🗑️ **Hapus Artikel:** Artikel langsung hilang dari website secara real-time.

---
*Terakhir diperbarui: 30 Juli 2026, 10:18 WIB*

