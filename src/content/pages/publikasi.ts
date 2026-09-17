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
  seoDescription: "Buku panduan, infografis, dan video edukasi resmi UKS/M, siap diunduh dan dibagikan ke satuan pendidikan.",
  crumbs: [{ label: "Publikasi" }],
  blocks: [
    { type: "hero", eyebrow: "Publikasi", title: "Publikasi UKS/M", lead: "Kumpulan buku panduan, infografis, dan video edukasi resmi yang dapat diunduh dan dibagikan ke satuan pendidikan." },
    { type: "docGrid", title: "Buku Panduan", anchorId: "buku-panduan", items: bukuPanduanItems },
    { type: "docGrid", title: "Infografis", anchorId: "infografis", items: infografisItems },
    { type: "videoGrid", title: "Video Edukasi", anchorId: "video", items: videoItems },
  ],
};

export const produkHukumPage: PageContent = {
  slug: "/publikasi/produk-hukum",
  title: "Produk Hukum",
  seoDescription: "Kumpulan dasar hukum dan regulasi terkait penyelenggaraan UKS/M.",
  crumbs: [{ label: "Publikasi" }, { label: "Produk Hukum" }],
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
