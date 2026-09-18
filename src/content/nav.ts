import type { NavLink, NavSection } from "./types";

/**
 * Single source of truth for the whole nav tree — the menu overlay AND the
 * footer sitemap both render from this. The original site spread its ~3
 * level "UKS/M" menu across hover flyouts; here the tree only goes two
 * levels deep. The former third level (Trias UKS/M's numbered sub-programs,
 * Sekolah Sehat's five foci) became in-page sections with anchors instead of
 * menu items — see /uksm/trias and /sekolah-sehat. Same information, one
 * fewer level of hunting.
 *
 * Labels, grouping and order follow docs/sitemaps/sitemap-portal-uks.md §1 (the nav
 * tree) — including "Sekolah Sehat" living under UKS/M rather than as its
 * own header item. Only the URLs differ from the sitemap's proposal: this
 * app keeps route-per-topic URLs (e.g. /sekolah-sehat, /uksm/tentang)
 * instead of the sitemap's single-page-with-anchors model. See
 * src/content/redirects.ts for the old→new URL map this implies.
 */
export const navSections: NavSection[] = [
  { label: "Beranda", href: "/" },
  {
    label: "UKS/M",
    children: [
      { label: "Tentang UKS/M", href: "/uksm/tentang" },
      { label: "Trias UKS/M", href: "/uksm/trias" },
      { label: "Struktur Organisasi", href: "/uksm/struktur-organisasi" },
      { label: "Manajemen UKS/M", href: "/uksm/manajemen" },
      { label: "Stratifikasi UKS/M", href: "/uksm/stratifikasi" },
      { label: "Sekolah Sehat", href: "/sekolah-sehat" },
    ],
  },
  {
    label: "Program",
    children: [
      { label: "Semua Program", href: "/program" },
      { label: "7 Kebiasaan Anak Indonesia Hebat", href: "/program/7kaih" },
      { label: "Makan Bergizi Gratis", href: "/program/mbg" },
      { label: "Cek Kesehatan Gratis", href: "/program/ckg" },
      { label: "ASRI", href: "/program/asri" },
      { label: "SAIH & Gala Kreasi Video", href: "/program/saih-gala-kreasi" },
    ],
  },
  { label: "Mitra", href: "/mitra" },
  {
    label: "Informasi",
    children: [
      { label: "Semua Informasi", href: "/informasi" },
      { label: "Berita", href: "/berita" },
      { label: "Praktik Baik", href: "/informasi/praktik-baik" },
      { label: "UPT Bercerita", href: "/informasi/upt-bercerita" },
      { label: "Agenda", href: "/informasi/agenda" },
      { label: "Aplikasi Pendukung", href: "/informasi/aplikasi" },
    ],
  },
  {
    label: "Publikasi",
    children: [
      { label: "Ringkasan Publikasi", href: "/publikasi" },
      { label: "Buku Panduan", href: "/publikasi/buku-panduan" },
      { label: "Infografis", href: "/publikasi/infografis" },
      { label: "Video Edukasi", href: "/publikasi/video" },
      { label: "Produk Hukum", href: "/publikasi/produk-hukum" },
    ],
  },
  {
    label: "Tautan",
    // 4 groups / 11 links, per docs/sitemaps/sitemap-portal-uks.md §2 "Tautan" and
    // the URLs recorded in docs/sitemaps/sitemap-dev-uks.MD (G-02). Group headings
    // are non-clickable (isGroupLabel) — see ChildRow in MenuOverlay.tsx.
    children: [
      { label: "Kemenkes", href: "#", isGroupLabel: true },
      { label: "Kementerian Kesehatan", href: "https://kemkes.go.id", external: true },
      { label: "Ayo Sehat Kemenkes", href: "https://ayosehat.kemkes.go.id", external: true },
      { label: "Perangkat Ajar Kesehatan", href: "https://ayosehat.kemkes.go.id/perangkat-ajar-kesehatan", external: true },
      { label: "Kemendikdasmen", href: "#", isGroupLabel: true },
      { label: "Ditjen PAUDDIKDASMEN", href: "https://pdm.kemendikdasmen.go.id", external: true },
      { label: "Direktorat PAUD", href: "https://paudpedia.kemendikdasmen.go.id", external: true },
      { label: "Direktorat SD", href: "https://ditsd.kemendikdasmen.go.id", external: true },
      { label: "Direktorat SMP", href: "https://ditsmp.kemendikdasmen.go.id", external: true },
      { label: "Direktorat SMA", href: "https://sma.kemendikdasmen.go.id", external: true },
      { label: "Kemenag", href: "#", isGroupLabel: true },
      { label: "KSKK Madrasah", href: "https://pendis.kemenag.go.id/ditkskkmadrasah", external: true },
      { label: "Direktorat Pesantren", href: "https://pendis.kemenag.go.id/ditpdpontren", external: true },
      { label: "Kemendagri", href: "#", isGroupLabel: true },
      { label: "SUPD (Ditjen Bina Bangda)", href: "https://bangda.kemendagri.go.id", external: true },
    ],
  },
];

export const utilityLinks: NavLink[] = [
  { label: "Pencarian", href: "/pencarian" },
  { label: "Kontak", href: "/kontak" },
];

/**
 * Flat, one-level "same destinations as the header" list for the footer's
 * "Peta Navigasi" column (docs/sitemaps/sitemap-portal-uks.md §1, footer row).
 * Sections with children point at their overview/first page; single links
 * point at themselves.
 */
export const petaNavigasiLinks: NavLink[] = [
  // "Tautan" has no page of its own — it's already a full footer column of
  // external links, so it's left out of this internal sitemap list.
  ...navSections
    .filter((section) => section.label !== "Tautan")
    .map((section) => ({
      label: section.label,
      href: section.href ?? section.children?.find((c) => !c.isGroupLabel && !c.external)?.href ?? "#",
    })),
  ...utilityLinks,
];

export const footerLinkGroups = navSections
  .filter((s) => s.children && s.children.length > 0)
  .map((s) => ({ title: s.label, links: s.children ?? [] }));
