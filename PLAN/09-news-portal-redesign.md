# Redesign: Portal Berita (Tempo / Kompas Style)

Seiring dengan bertambahnya jumlah artikel (mencapai ribuan), layout blog portofolio sederhana diubah menjadi **Portal Berita Skala Penuh**.

## Struktur Halaman Utama (Homepage)

Halaman utama (`index.astro`) dirancang menggunakan sistem grid CSS untuk meniru koran/media online:

### 1. Top Section (Headline)
- **Kiri (Utama):** 1 Artikel Headline (Tumbnail besar, Judul besar tebal) merentang selebar 2/3 layar (`col-span-2`).
- **Kanan (Subhero):** 3 Artikel pendukung yang berjajar vertikal menumpuk di sisi 1/3 kanan (`flex-col`).

### 2. Ticker Berita
- Ticker "Breaking News" dengan animasi teks berjalan (marquee) di bawah header.

### 3. Berita Terbaru (Latest News)
- Kumpulan artikel terbaru dirender dengan layout **List** (Thumbnail kecil di kiri, Judul di kanan).

### 4. Category Blocks (Middle Section)
Kumpulan sisa artikel tidak lagi dicampur, melainkan dipisah-pisah ke dalam "Blok Kategori" (misal blok Teknologi, blok Bisnis):
- Setiap kategori menampilkan kombinasi: **1 Berita Utama (Hero)** merentang penuh, diikuti oleh **3 Berita Grid** (berjajar horizontal di bawahnya dalam 1 baris menggunakan `grid-cols-3`).

### 5. Artikel Populer & Topik Hangat (Sidebar)
- Sidebar (1/3 kanan) untuk list artikel terpopuler dengan penomoran unik (1, 2, 3) dan layout `compact`.
- Kumpulan tombol kategori (pills) "Topik Hangat".
- Widget langganan Newsletter dan banner Iklan.

## Struktur Halaman Detail Artikel

- Membuang hero banner yang terlalu lebar.
- Judul artikel ditaruh paling atas dengan font **Merriweather**.
- Terdapat breadcrumb: `Beranda > Kategori > Judul Artikel`.
- Konten ditaruh dalam kontainer maksimal 768px (`max-w-3xl`) untuk kenyamanan membaca.
- *Rich Text HTML* dirender sepenuhnya di dalam Astro, tidak perlu kembali ke Wix untuk membaca ulasan detailnya.
