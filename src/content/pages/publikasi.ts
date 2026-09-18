import type { DocItem, PageContent, VideoItem } from "../types";

export const bukuPanduanItems: DocItem[] = [
  {
    title: "Panduan Implementasi Program Makan Bergizi Gratis di Satuan Pendidikan",
    description: "MBG & Gizi Sekolah",
    date: "2026-08-24",
    image: "/images/publikasi/panduan-mbg.png",
  },
  { title: "Pedoman Pendidikan Karakter dalam Makan Bergizi Gratis", date: "2026-08-13", image: "/images/publikasi/pedoman-karakter-mbg.png" },
  { title: "Pedoman Kesehatan Sekolah", date: "2026-07-07", image: "/images/publikasi/pedoman-kesehatan-sekolah.png" },
  { title: "Modul Kesehatan Reproduksi Remaja Luar Sekolah", date: "2025-11-20", image: "/images/publikasi/modul-kespro.png" },
];

export const infografisItems: DocItem[] = [
  { title: "Poster 8 MBG", description: "MBG", date: "2026-08-24", image: "/images/publikasi/poster-mbg.png" },
  { title: "Poster 7 KAIH SMP", date: "2025-12-01", image: "/images/publikasi/poster-7kaih-smp.png" },
  { title: "Poster 7 KAIH SD", date: "2025-12-01", image: "/images/publikasi/poster-7kaih-sd.png" },
  { title: "Poster 7 KAIH SMA/SMK", date: "2025-12-01", image: "/images/publikasi/poster-7kaih-smasmk.png" },
];

export const videoItems: VideoItem[] = [
  { title: "MBG: Bukan Sekedar Makan Gratis!", date: "2026-07-23", image: "/images/publikasi/video-mbg.png", youtubeUrl: "https://www.youtube.com/watch?v=PdjSymf4ZSE" },
  { title: "Penguatan Peran UKS di Satuan Pendidikan: Karawang 2025", date: "2025-11-10", image: "/images/publikasi/video-karawang.png", youtubeUrl: "https://www.youtube.com/watch?v=iWr14i9aO2k" },
  { title: "Penguatan Peran UKS Jenjang SMP: Medan 2025", date: "2025-10-21", image: "/images/publikasi/video-medan.png", youtubeUrl: "https://www.youtube.com/watch?v=qdsgqJSa8s0" },
  { title: "Lagu Tujuh Kebiasaan Anak Indonesia Hebat", date: "2025-01-17", image: "/images/publikasi/video-mars.png", youtubeUrl: "https://www.youtube.com/watch?v=d1NwNLFT94g" },
];

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
        { title: "Produk Hukum", description: "Dasar hukum dan regulasi penyelenggaraan UKS/M.", href: "/publikasi/produk-hukum" },
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

export const produkHukumPage: PageContent = {
  slug: "/publikasi/produk-hukum",
  title: "Produk Hukum",
  seoDescription: "Kumpulan dasar hukum dan regulasi terkait penyelenggaraan UKS/M.",
  crumbs: [{ label: "Publikasi", href: "/publikasi" }, { label: "Produk Hukum" }],
  blocks: [
    { type: "hero", eyebrow: "Publikasi", title: "Produk Hukum", lead: "Kumpulan undang-undang, peraturan, dan keputusan yang menjadi dasar hukum penyelenggaraan UKS/M." },
    {
      type: "richText",
      nodes: [{ kind: "p", text: "Direktori dokumen hukum lengkap (UU, PP, Perpres, Kepres, Inpres, Permen, dan SE) sedang disiapkan untuk portal ini. Sementara itu, dasar hukum program-program prioritas dapat ditemukan pada masing-masing halaman program." }],
    },
    {
      type: "cardGrid",
      columns: 3,
      cards: [
        { title: "7 Kebiasaan Anak Indonesia Hebat", href: "/program/7kaih" },
        { title: "Makan Bergizi Gratis", href: "/program/mbg" },
        { title: "Cek Kesehatan Gratis", href: "/program/ckg" },
      ],
    },
  ],
};
