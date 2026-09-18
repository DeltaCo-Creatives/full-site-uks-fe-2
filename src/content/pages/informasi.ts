import { beritaItems, praktikBaikItems } from "../berita";
import { uptStories } from "../upt";
import type { PageContent } from "../types";

export const informasiPage: PageContent = {
  slug: "/informasi",
  title: "Informasi",
  seoDescription: "Berita, praktik baik, cerita UPT, agenda, dan aplikasi pendukung seputar UKS/M dalam satu halaman.",
  crumbs: [{ label: "Informasi" }],
  blocks: [
    { type: "hero", eyebrow: "Informasi", title: "Informasi UKS/M", lead: "Kabar, cerita lapangan, dan agenda kegiatan seputar UKS/M dari seluruh Indonesia." },
    {
      type: "cardGrid",
      columns: 3,
      cards: [
        { eyebrow: `${beritaItems.length} berita`, title: "Berita", description: "Kabar dan siaran pers terbaru seputar UKS/M dan program prioritas.", href: "/berita" },
        { eyebrow: `${praktikBaikItems.length} cerita`, title: "Praktik Baik", description: "Cerita nyata satuan pendidikan menjalankan program UKS/M di daerahnya.", href: "/informasi/praktik-baik" },
        { eyebrow: `${uptStories.length} cerita`, title: "UPT Bercerita", description: "Cerita pendampingan dari unit pelaksana teknis di berbagai daerah.", href: "/informasi/upt-bercerita" },
        { title: "Agenda", description: "Jadwal kegiatan, bimbingan teknis, dan acara resmi UKS/M.", href: "/informasi/agenda" },
        { title: "Aplikasi Pendukung", description: "Aplikasi resmi yang mendukung kesehatan fisik dan mental pelajar.", href: "/informasi/aplikasi" },
      ],
    },
  ],
};

export const praktikBaikPage: PageContent = {
  slug: "/informasi/praktik-baik",
  title: "Praktik Baik",
  seoDescription: "Cerita praktik baik dari satuan pendidikan di seluruh Indonesia dalam menjalankan program UKS/M.",
  crumbs: [{ label: "Informasi", href: "/informasi" }, { label: "Praktik Baik" }],
  blocks: [
    { type: "hero", eyebrow: "Informasi", title: "Praktik Baik", lead: "Cerita nyata dari satuan pendidikan yang menjalankan program UKS/M dan Gerakan Sekolah Sehat di daerahnya masing-masing." },
    { type: "newsList", items: praktikBaikItems, basePath: "/informasi/praktik-baik" },
  ],
};

export const agendaPage: PageContent = {
  slug: "/informasi/agenda",
  title: "Agenda",
  seoDescription: "Jadwal kegiatan, pelatihan, dan acara resmi UKS/M.",
  crumbs: [{ label: "Informasi", href: "/informasi" }, { label: "Agenda" }],
  blocks: [
    { type: "hero", eyebrow: "Informasi", title: "Agenda", lead: "Jadwal kegiatan, bimbingan teknis, dan acara resmi UKS/M akan tampil di halaman ini." },
    {
      type: "richText",
      nodes: [{ kind: "p", text: "Kalender agenda untuk mockup ini belum diisi. Pada portal produksi, halaman ini menampilkan daftar acara yang dapat difilter dan diurutkan berdasarkan tanggal." }],
    },
    {
      type: "ctaBand",
      title: "Sementara itu, ikuti perkembangan lewat Berita",
      actions: [{ label: "Lihat Berita", href: "/berita", variant: "primary" }],
    },
  ],
};

export const aplikasiPage: PageContent = {
  slug: "/informasi/aplikasi",
  title: "Aplikasi Pendukung",
  seoDescription: "Dua aplikasi resmi untuk mendukung kesehatan pelajar: SIJIWA dan Oky Period Tracker.",
  crumbs: [{ label: "Informasi", href: "/informasi" }, { label: "Aplikasi" }],
  blocks: [
    { type: "hero", eyebrow: "Informasi", title: "Aplikasi Pendukung", lead: "Dua aplikasi resmi yang mendukung kesehatan fisik dan mental pelajar Indonesia." },
    {
      type: "cardGrid",
      columns: 2,
      cards: [
        {
          eyebrow: "Kesehatan Jiwa",
          title: "SIJIWA",
          description: "Sistem informasi kesehatan jiwa untuk pelajar, dikembangkan oleh Garuda Teknologi Indonesia.",
        },
        {
          eyebrow: "Kesehatan Reproduksi",
          title: "Oky Period Tracker",
          description: "Aplikasi pelacak siklus menstruasi untuk remaja putri, dikembangkan oleh UNICEF.",
          href: "https://www.unicef.org/indonesia/id",
          external: true,
        },
      ],
    },
  ],
};
