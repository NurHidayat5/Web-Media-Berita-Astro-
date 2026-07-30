# Styling & Design System

## Tech
- Tailwind CSS
- Google Fonts: Inter (Digunakan untuk semua elemen text agar ramah & modern)
- Custom global CSS: `src/styles/global.css`

## Color Palette

| Name | Hex | Usage |
|------|-----|-------|
| Primary | `#2563EB` | Links, buttons, accents (Warna Biru Media) |
| Gray 900 | `#111827` | Headings, text, dark backgrounds |
| Gray 600 | `#4B5563` | Body text, descriptions |
| Gray 400 | `#9CA3AF` | Captions, muted text |
| Gray 100 | `#F3F4F6` | Card backgrounds, borders |
| Gray 50 | `#F9FAFB` | Page sections alternates |
| White | `#FFFFFF` | Page background, cards |
| Red 600 | `#DC2626` | Breaking News / Tag Terkini (Portal Berita style) |

## Typography

| Element | Font | Size | Weight |
|---------|------|------|--------|
| Logo | Inter | 1.5rem | 800 (extrabold) |
| Headline | Inter | 2.5-3.5rem | 800 (extrabold) |
| News Title | Inter | 1.25-1.5rem | 700 (bold) |
| Meta/Date | Inter | 0.75rem | 400 (normal) |
| Body | Inter | 1rem | 400 (normal) |
| Category Badge | Inter | 0.75rem | 600 (semibold), uppercase, tracking-wider |

## Layout (Portal Berita)

| Container | Max Width | Usage |
|-----------|-----------|-------|
| Default | 768px (max-w-3xl) | Article detail |
| Wide (Grid)| 1280px (max-w-7xl) | Homepage (Grid Kompas/Tempo), kategori |

## Desain Portal Berita:
1. **Lebih Padat:** Halaman depan akan menampilkan lebih banyak judul berita dan tumbnail yang lebih kecil/rapat untuk memberi kesan "kaya informasi".
2. **Kategorisasi:** Artikel akan dikelompokkan per kategori di halaman utama (misal: satu baris WQMS, satu baris Instalasi).
3. **Sidebar:** Artikel Terpopuler/Terkini biasanya ditempatkan di sidebar sisi kanan.