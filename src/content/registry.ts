import { beritaItems, praktikBaikItems } from "./berita";
import { aplikasiPage, agendaPage, informasiPage, praktikBaikPage } from "./pages/informasi";
import { kontakPage } from "./pages/kontak";
import { mitraPage } from "./pages/mitra";
import { asriPage, ckgPage, kaih7Page, mbgPage, programIndexPage, saihGalaKreasiPage } from "./pages/program";
import { bukuPanduanItems, bukuPanduanPage, infografisItems, infografisPage, produkHukumPage, publikasiPage, videoItems, videoPage } from "./pages/publikasi";
import { produkHukumItems, sekolahSehatPage } from "./pages/sekolahSehat";
import {
  manajemenPage,
  stratifikasiPage,
  strukturOrganisasiPage,
  tentangUksPage,
  triasPage,
} from "./pages/uksm";
import { uptStories } from "./upt";
import type { Block, PageContent } from "./types";

/**
 * Every statically-defined page in one lookup table, keyed by route path.
 * This is what a real CMS integration would replace with a fetch-by-slug
 * call — routes and rendering stay the same either way, see
 * src/routes/ContentPage.tsx.
 */
export const pageRegistry: Record<string, PageContent> = {
  "/uksm/tentang": tentangUksPage,
  "/uksm/trias": triasPage,
  "/uksm/struktur-organisasi": strukturOrganisasiPage,
  "/uksm/manajemen": manajemenPage,
  "/uksm/stratifikasi": stratifikasiPage,
  "/sekolah-sehat": sekolahSehatPage,
  "/program": programIndexPage,
  "/program/7kaih": kaih7Page,
  "/program/mbg": mbgPage,
  "/program/ckg": ckgPage,
  "/program/asri": asriPage,
  "/program/saih-gala-kreasi": saihGalaKreasiPage,
  "/mitra": mitraPage,
  "/publikasi": publikasiPage,
  "/publikasi/buku-panduan": bukuPanduanPage,
  "/publikasi/infografis": infografisPage,
  "/publikasi/video": videoPage,
  "/publikasi/produk-hukum": produkHukumPage,
  "/informasi": informasiPage,
  "/informasi/praktik-baik": praktikBaikPage,
  "/informasi/agenda": agendaPage,
  "/informasi/aplikasi": aplikasiPage,
  "/kontak": kontakPage,
};

export interface SearchEntry {
  title: string;
  href: string;
  excerpt: string;
  group: string;
}

/** Home isn't in pageRegistry (it renders via HomePage, not ContentPage), so it's indexed by hand. */
const homeEntry: SearchEntry = {
  title: "Portal UKS/M",
  href: "/",
  excerpt: "Portal resmi UKS/M: informasi program, berita, publikasi, dan panduan kesehatan sekolah untuk seluruh satuan pendidikan di Indonesia.",
  group: "Beranda",
};

/** Pulls a page's blocks of one type out for indexing, without depending on a page file exporting its raw item arrays. */
function blocksOfType<T extends Block["type"]>(page: PageContent, type: T): Extract<Block, { type: T }>[] {
  return page.blocks.filter((b): b is Extract<Block, { type: T }> => b.type === type);
}

const gssFocusEntries: SearchEntry[] = blocksOfType(sekolahSehatPage, "focusTabs").flatMap((block) =>
  block.sections.map((section) => ({
    title: section.title,
    href: `/sekolah-sehat#${section.id}`,
    excerpt: section.summary,
    group: "Sekolah Sehat",
  })),
);

const produkHukumEntries: SearchEntry[] = produkHukumItems.map((item) => ({
  title: item.title,
  href: "/publikasi/produk-hukum",
  excerpt: item.category,
  group: "Produk Hukum",
}));

const aplikasiEntries: SearchEntry[] = blocksOfType(aplikasiPage, "cardGrid").flatMap((block) =>
  block.cards.map((card) => ({
    title: card.title,
    href: card.href ?? "/informasi/aplikasi",
    excerpt: card.description ?? aplikasiPage.seoDescription,
    group: "Aplikasi",
  })),
);

export const searchIndex: SearchEntry[] = [
  homeEntry,
  ...Object.values(pageRegistry).map((p) => ({
    title: p.title,
    href: p.slug,
    excerpt: p.seoDescription,
    group: p.crumbs[0]?.label ?? "Halaman",
  })),
  ...beritaItems.map((b) => ({ title: b.title, href: `/berita/${b.slug}`, excerpt: b.excerpt, group: "Berita" })),
  ...praktikBaikItems.map((b) => ({
    title: b.title,
    href: b.body?.length ? `/informasi/praktik-baik/${b.slug}` : "/informasi/praktik-baik",
    excerpt: b.excerpt,
    group: "Praktik Baik",
  })),
  ...uptStories.map((s) => ({ title: s.title, href: `/informasi/upt-bercerita/${s.slug}`, excerpt: s.excerpt, group: "UPT Bercerita" })),
  ...gssFocusEntries,
  ...aplikasiEntries,
  ...bukuPanduanItems.map((d) => ({
    title: d.title,
    href: "/publikasi/buku-panduan",
    excerpt: d.description ?? bukuPanduanPage.seoDescription,
    group: "Buku Panduan",
  })),
  ...infografisItems.map((d) => ({
    title: d.title,
    href: "/publikasi/infografis",
    excerpt: d.description ?? infografisPage.seoDescription,
    group: "Infografis",
  })),
  ...videoItems.map((v) => ({ title: v.title, href: "/publikasi/video", excerpt: videoPage.seoDescription, group: "Video" })),
  ...produkHukumEntries,
];
