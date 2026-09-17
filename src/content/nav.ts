import type { NavLink, NavSection } from "./types";

/**
 * Single source of truth for the whole nav tree — the menu overlay AND the
 * footer sitemap both render from this. The original site spread its ~3
 * level "UKS/M" menu across hover flyouts; here the tree only goes two
 * levels deep. The former third level (Trias UKS/M's numbered sub-programs,
 * Sekolah Sehat's five foci) became in-page sections with anchors instead of
 * menu items — see /uksm/trias and /sekolah-sehat. Same information, one
 * fewer level of hunting.
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
    ],
  },
  { label: "Sekolah Sehat", href: "/sekolah-sehat" },
  {
    label: "Program Prioritas",
    children: [
      { label: "7 Kebiasaan Anak Indonesia Hebat", href: "/program/7kaih" },
      { label: "Makan Bergizi Gratis", href: "/program/mbg" },
      { label: "Cek Kesehatan Gratis", href: "/program/ckg" },
      { label: "ASRI", href: "/program/asri" },
    ],
  },
  { label: "Mitra UKS/M", href: "/mitra" },
  {
    label: "Informasi",
    children: [
      { label: "Berita", href: "/berita" },
      { label: "Praktik Baik", href: "/informasi/praktik-baik" },
      { label: "Agenda", href: "/informasi/agenda" },
      { label: "Aplikasi Pendukung", href: "/informasi/aplikasi" },
    ],
  },
  {
    label: "Publikasi",
    children: [
      { label: "Buku Panduan", href: "/publikasi#buku-panduan" },
      { label: "Infografis", href: "/publikasi#infografis" },
      { label: "Video Edukasi", href: "/publikasi#video" },
      { label: "Produk Hukum", href: "/publikasi/produk-hukum" },
    ],
  },
  {
    label: "Tautan Terkait",
    children: [
      { label: "Kementerian Kesehatan", href: "https://kemkes.go.id", external: true },
      { label: "Ayo Sehat Kemenkes", href: "https://ayosehat.kemkes.go.id", external: true },
      { label: "Ditjen PAUDDIKDASMEN", href: "https://pdm.kemendikdasmen.go.id", external: true },
      { label: "Direktorat SMA", href: "https://sma.kemendikdasmen.go.id", external: true },
      { label: "Direktorat KSKK Madrasah (Kemenag)", href: "https://pendis.kemenag.go.id/ditkskkmadrasah", external: true },
      { label: "Ditjen Bina Pemdes (Kemendagri)", href: "https://bangda.kemendagri.go.id", external: true },
    ],
  },
];

export const utilityLinks: NavLink[] = [
  { label: "Pencarian", href: "/pencarian" },
  { label: "Kontak", href: "/kontak" },
];

export const footerLinkGroups = navSections
  .filter((s) => s.children && s.children.length > 0)
  .map((s) => ({ title: s.label, links: s.children ?? [] }));
