import { beritaItems, praktikBaikItems } from "./berita";
import { aplikasiPage, agendaPage, informasiPage, praktikBaikPage } from "./pages/informasi";
import { kontakPage } from "./pages/kontak";
import { mitraPage } from "./pages/mitra";
import { asriPage, ckgPage, kaih7Page, mbgPage, saihGalaKreasiPage } from "./pages/program";
import { bukuPanduanPage, infografisPage, produkHukumPage, publikasiPage, videoPage } from "./pages/publikasi";
import { sekolahSehatPage } from "./pages/sekolahSehat";
import {
  manajemenPage,
  stratifikasiPage,
  strukturOrganisasiPage,
  tentangUksPage,
  triasPage,
} from "./pages/uksm";
import { uptStories } from "./upt";
import type { PageContent } from "./types";

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

export const searchIndex: SearchEntry[] = [
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
];
