# Rencana Perbaikan & Fitur Baru (30 Juli 2026)

Dokumen ini mencatat daftar perbaikan dan penambahan fitur yang diminta, agar tidak lupa.

| No | Masalah | Status |
|----|---------|--------|
| 1 | Gambar berulang di artikel | ✅ Selesai |
| 2 | Font judul artikel aneh | ✅ Selesai |
| 3 | Hapus tombol "Baca di Wix" | ✅ Selesai |
| 4 | Loading lambat | ✅ Selesai (View Transitions + Cache Dev Server) |
| 5 | Integrasi Adsterra | ✅ Selesai (Komponen Placeholder Dibuat & Script Dipasang) |
| 6 | Layout Home | ✅ Selesai (Disamakan dengan layout kategori lainnya) |

## 1. Masalah Gambar Berurutan di Artikel
- **Masalah:** Saat membuka detail artikel, terkadang gambar cover muncul ganda (satu dari cover image, satu lagi dari konten artikel).
- **Solusi:** Di halaman `[slug].astro`, kita akan menyembunyikan gambar cover image jika gambar tersebut sudah ada di dalam konten (atau sebaliknya).

## 2. Font Judul Artikel Aneh
- **Masalah:** Font pada judul artikel yang sedang dibuka terlihat aneh (`font-serif` / Merriweather mungkin tidak sesuai selera).
- **Solusi:** Ganti class `font-serif` menjadi sans-serif standar bawaan Tailwind yang lebih bersih (`font-sans`, `font-extrabold`).

## 3. Hapus Link "Baca di Wix"
- **Masalah:** Terdapat tombol/link yang mengarahkan pengunjung kembali ke situs Wix asli. Ini mengganggu alur pengunjung.
- **Solusi:** Hapus elemen link "Baca di Wix" beserta ikonnya dari komponen halaman artikel (`[slug].astro`).

## 4. Loading Pindah Halaman Terasa Lama
- **Masalah:** Transisi antar halaman (seperti klik kategori atau artikel) terasa lama. Khusus pada mode *development* (`npm run dev`), setiap perpindahan halaman membuat Astro mengambil ulang ratusan artikel langsung dari Wix secara terus-menerus.
- **Solusi:**
  1. Menggunakan fitur **View Transitions** dari Astro untuk transisi instan bak aplikasi.
  2. Menerapkan sistem **Cache In-Memory** di `wix.ts` dengan masa berlaku 5 menit. Hal ini secara drastis mempercepat proses *development* karena data ribuan artikel hanya diambil sesekali saja.
  - *Catatan:* Pada saat website sudah online (Production Build), pemuatan akan 100% instan karena halamannya bersifat statis.

## 5. Persiapan Pemasangan Iklan Adsterra
- **Rencana & Solusi:** Komponen iklan `AdsterraAd.astro` telah dibuat dan kode script dari Anda sudah berhasil ditanam menggunakan parameter `is:inline`.

## 6. Layout Berita Utama (Home)
- **Masalah:** Layout "Headline Section" di posisi paling atas halaman utama berbeda gayanya dengan layout kategori lainnya.
- **Solusi:** Layout Headline Section (Berita Utama) sudah diubah menggunakan struktur yang sama persis dengan section berita lainnya, yaitu 1 gambar besar (Hero) di bagian atas, dan 3 gambar kecil (Grid) berbaris sejajar di bawahnya.

---
*Perubahan ini dicatat dan dieksekusi berdasarkan permintaan bertahap dari pengguna.*
