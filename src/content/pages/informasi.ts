import { praktikBaikItems } from "../berita";
import type { PageContent } from "../types";

export const praktikBaikPage: PageContent = {
  slug: "/informasi/praktik-baik",
  title: "Praktik Baik",
  seoDescription: "Cerita praktik baik dari satuan pendidikan di seluruh Indonesia dalam menjalankan program UKS/M.",
  crumbs: [{ label: "Informasi" }, { label: "Praktik Baik" }],
  blocks: [
    { type: "hero", eyebrow: "Informasi", title: "Praktik Baik", lead: "Cerita nyata dari satuan pendidikan yang menjalankan program UKS/M dan Gerakan Sekolah Sehat di daerahnya masing-masing." },
    { type: "newsList", items: praktikBaikItems },
  ],
};

export const agendaPage: PageContent = {
  slug: "/informasi/agenda",
  title: "Agenda",
  seoDescription: "Jadwal kegiatan, pelatihan, dan acara resmi UKS/M.",
  crumbs: [{ label: "Informasi" }, { label: "Agenda" }],
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
  crumbs: [{ label: "Informasi" }, { label: "Aplikasi" }],
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
