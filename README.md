# Portal UKS/M — Redesign Mockup

A frontend mockup for a redesigned Portal UKS/M (Usaha Kesehatan Sekolah/Madrasah), built with React, TypeScript, Vite, Tailwind CSS v4, and GSAP.

This is a **static frontend mockup**: content lives in typed TypeScript data files, not a database or CMS. It exists to demonstrate a new visual direction, navigation structure, and content architecture for the existing Portal UKS/M platform, using real content and images pulled from the live `portal-uks.demo.or.id` deployment.

## Why this exists

The current site's "UKS/M" menu is three dropdown levels deep, and several other sections repeat the same hover-flyout pattern across the header. This redesign replaces every dropdown with a single full-screen menu overlay (click to open, accordion inside, identical behavior on mobile and desktop) and moves what used to be third-level menu items into in-page sections with anchors instead.

## Content architecture (read this before wiring up a CMS)

Every page is a list of typed **blocks** (`src/content/types.ts`), each rendered by one component in `src/components/blocks/`. Page content lives in `src/content/pages/*.ts` as plain data, looked up by route in `src/content/registry.ts` (`src/routes/ContentPage.tsx`).

To connect a real CMS later: replace the registry's static object with a fetch-by-slug call that returns the same `PageContent` shape. Nothing else changes. Every block component already treats its fields as optional/defensive, so incomplete or malformed CMS content degrades gracefully instead of breaking the layout.

## Scope

Fully built: Beranda, Tentang UKS/M, Trias UKS/M, Struktur Organisasi, Manajemen UKS/M, Stratifikasi UKS/M, Sekolah Sehat, all four Program Prioritas pages, Mitra UKS/M, Publikasi (Buku Panduan/Infografis/Video), Berita (list + detail), Praktik Baik, Aplikasi Pendukung, Kontak, Pencarian.

Explicitly labeled "coming soon" rather than left as dead links: Agenda, Produk Hukum.

## Development

```bash
npm install
npm run dev      # dev server on :5173
npm run build    # type-check + production build
```
