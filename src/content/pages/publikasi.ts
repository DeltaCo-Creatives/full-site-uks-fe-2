import { produkHukumItems } from "./sekolahSehat";
import type { AdvocacyGroup, DocItem, PageContent, VideoItem } from "../types";

/**
 * Cross-checked against docs/content-source/program/*.md and docs/content-source/sekolah-sehat/*.md
 * (see docs/reports/content-curation-report.md §9 "Publikasi", findings U1/U2).
 * Items without a traceable source are kept but flagged `// TODO(content): unsourced`
 * instead of being deleted outright, per the curation rule "flagged, not removed".
 */
export const bukuPanduanItems: DocItem[] = [
  // Source: docs/content-source/kemitraan/dukungan-mitra.md (UNICEF – Section Nutrition, Maret–November 2025).
  {
    title: "Panduan Implementasi Program Makan Bergizi Gratis di Satuan Pendidikan",
    description: "MBG & Gizi Sekolah",
    date: "2026-08-24",
    image: "/images/publikasi/panduan-mbg.png",
  },
  { title: "Modul Pelatihan Implementasi Program Makan Bergizi Gratis di Satuan Pendidikan", description: "MBG & Gizi Sekolah", date: "2024-04-03" },
  { title: "Modul Edukasi Gizi pada Program Makan Bergizi Gratis di Satuan Pendidikan", description: "MBG & Gizi Sekolah", date: "2024-04-03" },
  // Source: docs/content-source/program/7kaih.md · docs/content-source/program/mbg.md (s.id/pedomanmbg).
  {
    title: "Pedoman Pendidikan Karakter dalam Makan Bergizi Gratis",
    date: "2026-08-13",
    image: "/images/publikasi/pedoman-karakter-mbg.png",
    fileUrl: "https://s.id/pedomanmbg",
  },
  // TODO(content): unsourced — named only as an example in docs/sitemaps/sitemap-dev-uks.MD, no content file or link found.
  { title: "Pedoman Kesehatan Sekolah", date: "2026-07-07", image: "/images/publikasi/pedoman-kesehatan-sekolah.png" },
  // TODO(content): unsourced — named only as an example in docs/sitemaps/sitemap-dev-uks.MD, no content file or link found.
  { title: "Modul Kesehatan Reproduksi Remaja Luar Sekolah", date: "2025-11-20", image: "/images/publikasi/modul-kespro.png" },
  // Source: docs/content-source/sekolah-sehat/sehat-bergizi.md · sehat-lingkungan.md (same underlying PDF on both pages).
  {
    title: "Buku Saku Gizi Seimbang dan Kantin/Jajanan Sehat di Sekolah Dasar",
    description: "Sehat Bergizi & Sehat Lingkungan",
    date: "2023-05-07",
    fileUrl: "https://is3.cloudhost.id/storagedirectus1/manajemen_uks/files/publikasi/L4H44OkNQw3Oal3CXziuAuHDgoGZuTIQ3UogIaNT.pdf",
  },
  // Source: docs/content-source/sekolah-sehat/sehat-fisik.md.
  {
    title: "Buku Saku Gerak Ragaku di Sekolah",
    description: "Sehat Fisik",
    date: "2023-05-07",
    fileUrl: "https://drive.google.com/file/d/111Vwr0_RfervHeA2PBFqDgWpdNbf-Rol/view?usp=sharing",
  },
  // Source: docs/content-source/program/7kaih.md, "Buku Kiat Jitu 7 Kebiasaan Anak Indonesia Hebat untuk Guru" (s.id links, all resolve).
  { title: "Buku Kiat Jitu 7KAIH untuk Guru — PAUD", date: "2026-09-17", fileUrl: "https://s.id/kiatjitu7kaih-gurupaud" },
  { title: "Buku Kiat Jitu 7KAIH untuk Guru — SD", date: "2026-09-17", fileUrl: "https://s.id/kiatjitu7kaih-gurusd" },
  { title: "Buku Kiat Jitu 7KAIH untuk Guru — SMP", date: "2026-09-17", fileUrl: "https://s.id/kiatjitu7kaih-gurusmp" },
  { title: "Buku Kiat Jitu 7KAIH untuk Guru — SMA", date: "2026-09-17", fileUrl: "https://s.id/kiatjitu7kaih-gurusma" },
  // Source: docs/content-source/program/7kaih.md, "Buku Kiat Jitu 7 Kebiasaan Anak Indonesia Hebat untuk Orang Tua".
  { title: "Buku Kiat Jitu 7KAIH untuk Orang Tua — PAUD", date: "2026-09-17", fileUrl: "https://s.id/kiatjitu7kaih-ortupaud" },
  { title: "Buku Kiat Jitu 7KAIH untuk Orang Tua — SD", date: "2026-09-17", fileUrl: "https://s.id/kiatjitu7kaih-ortusd" },
  { title: "Buku Kiat Jitu 7KAIH untuk Orang Tua — SMP", date: "2026-09-17", fileUrl: "https://s.id/kiatjitu7kaih-ortusmp" },
  { title: "Buku Kiat Jitu 7KAIH untuk Orang Tua — SMA", date: "2026-09-17", fileUrl: "https://s.id/kiatjitu7kaih-ortusma" },
  { title: "Modul Penguatan 7KAIH dalam Kepramukaan", date: "2026-09-17", fileUrl: "https://s.id/modul7kaih-kepramukaan" },
  // Source: docs/content-source/program/7kaih.md, "Panduan (portal publikasi, 29/3/2025)" — no download link given in source.
  { title: "Panduan Penerapan Gerakan 7KAIH untuk Orang Tua", date: "2025-03-29" },
  { title: "Panduan Penerapan Gerakan 7KAIH — Jenjang SMA/SMK", date: "2025-03-29" },
  { title: "Panduan Penerapan Gerakan 7KAIH — Jenjang PAUD", date: "2025-03-29" },
  { title: "Panduan Penerapan Gerakan 7KAIH — Jenjang SD", date: "2025-03-29" },
];

export const infografisItems: DocItem[] = [
  // TODO(content): unsourced — named only as an example in docs/sitemaps/sitemap-dev-uks.MD, no content file or link found.
  { title: "Poster 8 MBG", description: "MBG", date: "2026-08-24", image: "/images/publikasi/poster-mbg.png" },
  // Source: docs/content-source/program/7kaih.md, "Infografis: Poster 7 KAIH SD / SMP / SMA/SMK / PAUD."
  { title: "Poster 7 KAIH SD", date: "2025-12-01", image: "/images/publikasi/poster-7kaih-sd.png" },
  { title: "Poster 7 KAIH SMP", date: "2025-12-01", image: "/images/publikasi/poster-7kaih-smp.png" },
  { title: "Poster 7 KAIH SMA/SMK", date: "2025-12-01", image: "/images/publikasi/poster-7kaih-smasmk.png" },
  { title: "Poster 7 KAIH PAUD", date: "2025-12-01" },
  // Source: docs/content-source/sekolah-sehat/bahan-advokasi.md, "Materi Kampanye Sekolah Sehat".
  { title: "Infografis Kampanye Sekolah Sehat", date: "2023-05-07", fileUrl: "https://drive.google.com/file/d/1JKfCJNc4MvI5b3yPX9MPG3TJ6w6Xq-1x/view?usp=sharing" },
  { title: "Infografis Sehat Bergizi", date: "2023-05-07", fileUrl: "https://drive.google.com/file/d/15Ix2S3QhBl10msfMjVCbGvPBm9f5lzp3/view?usp=sharing" },
  { title: "Infografis Sehat Fisik", date: "2023-05-07", fileUrl: "https://drive.google.com/file/d/1eRBEUjU9s47-ZBZoymJdREb5a9C4E8Mm/view?usp=sharing" },
  { title: "Infografis Sehat Imunisasi", date: "2023-05-07", fileUrl: "https://drive.google.com/file/d/1dHhkRmhg4Ir8qyuYfTuPF0diNX-sydOR/view?usp=sharing" },
];

export const videoItems: VideoItem[] = [
  { title: "MBG: Bukan Sekedar Makan Gratis!", date: "2026-07-23", image: "/images/publikasi/video-mbg.png", youtubeUrl: "https://www.youtube.com/watch?v=PdjSymf4ZSE" },
  { title: "Penguatan Peran UKS di Satuan Pendidikan: Karawang 2025", date: "2025-11-10", image: "/images/publikasi/video-karawang.png", youtubeUrl: "https://www.youtube.com/watch?v=iWr14i9aO2k" },
  { title: "Penguatan Peran UKS Jenjang SMP: Medan 2025", date: "2025-10-21", image: "/images/publikasi/video-medan.png", youtubeUrl: "https://www.youtube.com/watch?v=qdsgqJSa8s0" },
  { title: "Lagu Tujuh Kebiasaan Anak Indonesia Hebat", date: "2025-01-17", image: "/images/publikasi/video-mars.png", youtubeUrl: "https://www.youtube.com/watch?v=d1NwNLFT94g" },
  // Source: docs/content-source/sekolah-sehat/bahan-advokasi.md, "Materi Kampanye Sekolah Sehat" (YouTube links).
  { title: "SKJ 2022", date: "2023-05-07", youtubeUrl: "https://youtu.be/V-GpqteRbeA" },
  { title: "Gerak Lagu Sekolah Sehat", date: "2023-05-07", youtubeUrl: "https://youtu.be/gl56oxJOWVo" },
  { title: "Iklan Layanan Masyarakat Sekolah Sehat", date: "2023-05-07", youtubeUrl: "https://youtu.be/Cbqg3RnW0ss" },
];

const produkHukumGroups: AdvocacyGroup[] = [{ title: "Produk Hukum", items: produkHukumItems }];

export const publikasiPage: PageContent = {
  slug: "/publikasi",
  title: "Publikasi",
  seoDescription: "Buku panduan, infografis, video edukasi, dan produk hukum resmi UKS/M, siap diunduh dan dibagikan ke satuan pendidikan.",
  crumbs: [{ label: "Publikasi" }],
  blocks: [
    { type: "hero", eyebrow: "Publikasi", title: "Publikasi UKS/M", lead: "Kumpulan buku panduan, infografis, video edukasi, dan produk hukum resmi yang dapat diunduh dan dibagikan ke satuan pendidikan." },
    {
      type: "cardGrid",
      columns: 4,
      cards: [
        { eyebrow: `${bukuPanduanItems.length} dokumen`, title: "Buku Panduan", description: "Panduan dan pedoman implementasi program UKS/M.", href: "/publikasi/buku-panduan" },
        { eyebrow: `${infografisItems.length} dokumen`, title: "Infografis", description: "Poster dan infografis edukasi kesehatan sekolah.", href: "/publikasi/infografis" },
        { eyebrow: `${videoItems.length} video`, title: "Video Edukasi", description: "Video edukasi dan dokumentasi kegiatan UKS/M.", href: "/publikasi/video" },
        { eyebrow: `${produkHukumItems.length} dokumen`, title: "Produk Hukum", description: "Dasar hukum dan regulasi penyelenggaraan UKS/M.", href: "/publikasi/produk-hukum" },
      ],
    },
  ],
};

export const bukuPanduanPage: PageContent = {
  slug: "/publikasi/buku-panduan",
  title: "Buku Panduan",
  seoDescription: "Kumpulan buku panduan dan pedoman resmi implementasi program UKS/M, siap diunduh oleh satuan pendidikan.",
  crumbs: [{ label: "Publikasi", href: "/publikasi" }, { label: "Buku Panduan" }],
  blocks: [
    { type: "hero", eyebrow: "Publikasi", title: "Buku Panduan", lead: "Buku panduan dan pedoman resmi implementasi program UKS/M di satuan pendidikan." },
    { type: "docGrid", items: bukuPanduanItems },
  ],
};

export const infografisPage: PageContent = {
  slug: "/publikasi/infografis",
  title: "Infografis",
  seoDescription: "Kumpulan poster dan infografis edukasi kesehatan sekolah UKS/M.",
  crumbs: [{ label: "Publikasi", href: "/publikasi" }, { label: "Infografis" }],
  blocks: [
    { type: "hero", eyebrow: "Publikasi", title: "Infografis", lead: "Poster dan infografis edukasi kesehatan sekolah yang dapat diunduh dan dibagikan." },
    { type: "docGrid", items: infografisItems },
  ],
};

export const videoPage: PageContent = {
  slug: "/publikasi/video",
  title: "Video Edukasi",
  seoDescription: "Kumpulan video edukasi dan dokumentasi kegiatan UKS/M.",
  crumbs: [{ label: "Publikasi", href: "/publikasi" }, { label: "Video" }],
  blocks: [
    { type: "hero", eyebrow: "Publikasi", title: "Video Edukasi", lead: "Video edukasi dan dokumentasi kegiatan UKS/M dari seluruh Indonesia." },
    { type: "videoGrid", items: videoItems },
  ],
};

// TODO(content): U-01 unify with program regulations, owner decision — docs/reports/content-inventory.md
// row U-01 flags two produk hukum lists (this page and GSS ▸ Bahan Advokasi). Both now read from
// the same `produkHukumItems` array (defined in ./sekolahSehat.ts) so there is only one source of
// truth; whether this page should eventually be removed in favor of linking to GSS's list, or kept
// as-is, is still an open decision for the content owner.
export const produkHukumPage: PageContent = {
  slug: "/publikasi/produk-hukum",
  title: "Produk Hukum",
  seoDescription: "Kumpulan dasar hukum dan regulasi terkait penyelenggaraan UKS/M.",
  crumbs: [{ label: "Publikasi", href: "/publikasi" }, { label: "Produk Hukum" }],
  blocks: [
    { type: "hero", eyebrow: "Publikasi", title: "Produk Hukum", lead: "Kumpulan undang-undang, peraturan, dan keputusan yang menjadi dasar hukum penyelenggaraan UKS/M." },
    { type: "advocacyList", groups: produkHukumGroups },
    {
      type: "cardGrid",
      title: "Dasar Hukum per Program Prioritas",
      columns: 3,
      cards: [
        { title: "7 Kebiasaan Anak Indonesia Hebat", href: "/program/7kaih" },
        { title: "Makan Bergizi Gratis", href: "/program/mbg" },
        { title: "Cek Kesehatan Gratis", href: "/program/ckg" },
      ],
    },
  ],
};
