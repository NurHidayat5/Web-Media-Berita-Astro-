# Styling & Design System

## Tech
- Tailwind CSS
- Google Fonts: Inter (body) + Merriweather (headings, optional)
- Custom global CSS: `src/styles/global.css`

## Color Palette

| Name | Hex | Usage |
|------|-----|-------|
| Primary | `#2563EB` | Links, buttons, accents |
| Gray 900 | `#111827` | Headings, text, dark backgrounds |
| Gray 600 | `#4B5563` | Body text, descriptions |
| Gray 400 | `#9CA3AF` | Captions, muted text |
| Gray 100 | `#F3F4F6` | Card backgrounds, borders |
| Gray 50 | `#F9FAFB` | Page sections alternates |
| White | `#FFFFFF` | Page background, cards |
| Blue 50 | `#EFF6FF` | Active nav item background |
| Blue 700 | `#1D4ED8` | Button hover state |

## Typography

| Element | Font | Size | Weight |
|---------|------|------|--------|
| Logo | Inter | 1.5rem | 800 (extrabold) |
| H1 | Inter | 3-3.75rem | 800 (extrabold) |
| H2 | Inter | 1.5-1.875rem | 700 (bold) |
| H3 | Inter | 1.125-1.25rem | 700 (bold) |
| Body | Inter | 1rem | 400 (normal) |
| Caption | Inter | 0.875rem | 500 (medium) |
| Category Badge | Inter | 0.75rem | 600 (semibold), uppercase, tracking-wider |

## Layout

| Container | Max Width | Usage |
|-----------|-----------|-------|
| Default | 768px (max-w-3xl) | Article detail, about |
| Wide | 1152px (max-w-6xl) | Homepage, blog listing, category |
| Article Grid | 2 columns | Blog listing, category |

## Breakpoints

| Name | Width |
|------|-------|
| sm | 640px |
| md | 768px |
| lg | 1024px |
| xl | 1280px |

## Design Principles

1. **Clean & Minimalis** — Seperti media profesional (Kompas, Tirto)
2. **Reading-friendly** — Typography yang nyaman dibaca
3. **Mobile-first** — Semua halaman responsif
4. **Dark hero** — Homepage pakai dark background untuk impact
5. **Consistent spacing** — `py-16 sm:py-20` untuk sections
6. **Subtle interactions** — Hover effects pada cards dan links