import { beritaItems } from "../berita";
import type { Block, HeroSlide, PageContent } from "../types";

export const heroSlides: HeroSlide[] = [
  {
    id: "berita-rakor",
    kind: "berita",
    title: "Rapat Koordinasi UPT Implementasi Edukasi Gizi",
    description:
      "Kemendikdasmen perkuat sinergi pendampingan edukasi gizi di satuan pendidikan lewat rapat koordinasi UPT, 19–21 Agustus 2026.",
    image: "/images/hero/berita-rakor.png",
    href: "/berita/rapat-koordinasi-upt-implementasi-edukasi-gizi-perkuat-sinergi-pendampingan-di-satuan-pendidikan",
    ctaLabel: "Baca Selengkapnya",
  },
  {
    id: "7kaih",
    kind: "promo",
    title: "7 Kebiasaan Anak Indonesia Hebat",
    description:
      "Pembiasaan baik sejak dini merupakan langkah penting membentuk generasi yang unggul, berakhlak, dan siap menghadapi masa depan.",
    image: "/images/hero/7kaih.png",
    href: "/program/7kaih",
    ctaLabel: "Kenali Gerakan 7KAIH",
  },
  {
    id: "asri",
    kind: "promo",
    title: "Gerakan Sekolah ASRI",
    description: "Aman, Sehat, Resik, dan Indah: menciptakan lingkungan belajar yang nyaman bagi setiap siswa.",
    image: "/images/hero/asri.jpg",
    href: "/program/asri",
    ctaLabel: "Pelajari ASRI",
  },
  {
    id: "ckg",
    kind: "promo",
    title: "Cek Kesehatan Gratis Sekolah",
    description:
      "Pemeriksaan kesehatan untuk anak usia sekolah guna mendeteksi dini faktor risiko dan kondisi pra-penyakit.",
    image: "/images/hero/ckg.jpg",
    href: "/program/ckg",
    ctaLabel: "Pelajari CKG",
  },
  {
    id: "mbg",
    kind: "promo",
    title: "Makan Bergizi Gratis",
    description:
      "Program nasional pemberian makanan bergizi gratis dan berkelanjutan untuk membangun fondasi generasi sehat.",
    image: "/images/hero/mbg.jpg",
    href: "/program/mbg",
    ctaLabel: "Pelajari MBG",
  },
];

export const homeBlocks: Block[] = [
  { type: "heroSlider", slides: heroSlides },
  {
    type: "statBand",
    items: [
      { value: 15000, suffix: "+", label: "Sekolah binaan" },
      { value: 50000, suffix: "+", label: "Dokter kecil" },
      { value: 25000, suffix: "+", label: "Kader TIWISADA" },
      { value: 38, suffix: "", label: "Provinsi terjangkau" },
    ],
  },
  {
    type: "cardGrid",
    title: "Trias UKS/M",
    intro:
      "Tiga pilar utama penyelenggaraan Usaha Kesehatan Sekolah/Madrasah, dilaksanakan secara terpadu di setiap satuan pendidikan.",
    columns: 3,
    cards: [
      {
        eyebrow: "Pilar 1",
        title: "Pendidikan Kesehatan",
        description: "Membentuk pengetahuan, sikap, dan perilaku hidup sehat sejak dini lewat 7 program literasi.",
        href: "/uksm/trias#pendidikan-kesehatan",
      },
      {
        eyebrow: "Pilar 2",
        title: "Pelayanan Kesehatan",
        description: "Upaya promotif, preventif, kuratif, dan rehabilitatif bagi seluruh warga sekolah.",
        href: "/uksm/trias#pelayanan-kesehatan",
      },
      {
        eyebrow: "Pilar 3",
        title: "Pembinaan Lingkungan Sekolah Sehat",
        description: "Menciptakan lingkungan sekolah yang sehat secara fisik, sosial, dan emosional.",
        href: "/uksm/trias#pembinaan-lingkungan",
      },
    ],
  },
  {
    type: "strataJourney",
    title: "Stratifikasi UKS/M",
    intro:
      "Alat bantu untuk mengetahui capaian dan kekurangan satuan pendidikan dalam penyelenggaraan UKS/M, dari tahap awal hingga paripurna.",
    levels: [
      { name: "Minimal", description: "Memenuhi indikator dasar penyelenggaraan UKS/M." },
      { name: "Standar", description: "Program berjalan konsisten sesuai standar minimum layanan." },
      { name: "Optimal", description: "Pelaksanaan menyeluruh dan terintegrasi dalam RKAS." },
      { name: "Paripurna", description: "UKS/M menjadi budaya sekolah yang berkelanjutan dan mandiri." },
    ],
    categories: [
      "Pendidikan kesehatan",
      "Pelayanan kesehatan",
      "Pembinaan lingkungan sekolah sehat",
      "Manajemen UKS/M",
    ],
    externalHref: "https://stratifikasiuks.org/",
    externalLabel: "Buka Dasbor Stratifikasi",
  },
  {
    type: "newsList",
    title: "Berita Terbaru",
    viewAllHref: "/berita",
    items: beritaItems.slice(0, 4),
  },
  {
    type: "cardGrid",
    title: "Program Prioritas",
    intro: "Lima program prioritas UKS/M yang berjalan lintas satuan pendidikan di seluruh Indonesia.",
    columns: 4,
    cards: [
      {
        title: "7 Kebiasaan Anak Indonesia Hebat",
        description: "Gerakan penguatan karakter lewat tujuh kebiasaan baik setiap hari.",
        href: "/program/7kaih",
      },
      {
        title: "Cek Kesehatan Gratis",
        description: "Skrining kesehatan tahunan untuk jenjang SD hingga SMA/SMK dan pesantren.",
        href: "/program/ckg",
      },
      {
        title: "Makan Bergizi Gratis",
        description: "Pemberian makanan bergizi gratis dan berkelanjutan bagi peserta didik.",
        href: "/program/mbg",
      },
      {
        title: "Gerakan Sekolah ASRI",
        description: "Aman, Sehat, Resik, Indah: kampanye lingkungan sekolah yang layak dan nyaman.",
        href: "/program/asri",
      },
      {
        title: "SAIH & Gala Kreasi Video",
        description: "Ajang lomba dan apresiasi karya pelajar dalam pembiasaan karakter dan Gerakan Sekolah Sehat.",
        href: "/program/saih-gala-kreasi",
      },
    ],
  },
  {
    type: "focusGrid",
    title: "Fokus Sekolah Sehat",
    intro: "Lima fokus Gerakan Sekolah Sehat yang menjadi acuan pembinaan satuan pendidikan.",
    items: [
      { id: "sehat-bergizi", title: "Sehat Bergizi", icon: "Heart", description: "Pemenuhan gizi seimbang untuk mendukung pertumbuhan dan prestasi belajar." },
      { id: "sehat-fisik", title: "Sehat Fisik", icon: "Award", description: "Aktivitas fisik rutin dan olahraga untuk kebugaran jasmani." },
      { id: "sehat-imunisasi", title: "Sehat Imunisasi", icon: "Syringe", description: "Perlindungan dari penyakit melalui imunisasi lengkap." },
      { id: "sehat-jiwa", title: "Sehat Jiwa", icon: "Smile", description: "Dukungan kesehatan mental dan kesejahteraan psikososial." },
      { id: "sehat-lingkungan", title: "Sehat Lingkungan", icon: "TreePine", description: "Lingkungan sekolah bersih, hijau, dan berkelanjutan." },
    ],
    footnote: "Selengkapnya di halaman Gerakan Sekolah Sehat.",
  },
  {
    type: "docGrid",
    title: "Modul & Panduan Terbaru",
    viewAllHref: "/publikasi/buku-panduan",
    items: [
      { title: "Panduan Implementasi Program Makan Bergizi Gratis di Satuan Pendidikan", date: "2026-08-24", image: "/images/publikasi/panduan-mbg.png" },
      { title: "Pedoman Pendidikan Karakter dalam Makan Bergizi Gratis", date: "2026-08-13", image: "/images/publikasi/pedoman-karakter-mbg.png" },
      { title: "Pedoman Kesehatan Sekolah", date: "2026-07-07", image: "/images/publikasi/pedoman-kesehatan-sekolah.png" },
      { title: "Modul Kesehatan Reproduksi Remaja Luar Sekolah", date: "2025-11-20", image: "/images/publikasi/modul-kespro.png" },
    ],
  },
  {
    type: "docGrid",
    title: "Infografis",
    viewAllHref: "/publikasi/infografis",
    items: [
      { title: "Poster 8 MBG", date: "2026-08-24", image: "/images/publikasi/poster-mbg.png" },
      { title: "Poster 7KAIH SMP", date: "2025-12-01", image: "/images/publikasi/poster-7kaih-smp.png" },
      { title: "Poster 7KAIH SD", date: "2025-12-01", image: "/images/publikasi/poster-7kaih-sd.png" },
      { title: "Poster 7KAIH SMA/SMK", date: "2025-12-01", image: "/images/publikasi/poster-7kaih-smasmk.png" },
    ],
  },
  {
    type: "videoGrid",
    title: "Video Edukasi",
    viewAllHref: "/publikasi/video",
    items: [
      { title: "MBG: Bukan Sekedar Makan Gratis!", date: "2026-07-23", image: "/images/publikasi/video-mbg.png", youtubeUrl: "https://www.youtube.com/watch?v=PdjSymf4ZSE" },
      { title: "Penguatan Peran UKS di Satuan Pendidikan: Karawang 2025", date: "2025-11-10", image: "/images/publikasi/video-karawang.png", youtubeUrl: "https://www.youtube.com/watch?v=iWr14i9aO2k" },
      { title: "Penguatan Peran UKS Jenjang SMP: Medan 2025", date: "2025-10-21", image: "/images/publikasi/video-medan.png", youtubeUrl: "https://www.youtube.com/watch?v=qdsgqJSa8s0" },
      { title: "Lagu Tujuh Kebiasaan Anak Indonesia Hebat", date: "2025-01-17", image: "/images/publikasi/video-mars.png", youtubeUrl: "https://www.youtube.com/watch?v=d1NwNLFT94g" },
    ],
  },
  {
    type: "partnerMarquee",
    title: "Mitra UKS/M",
    intro: "Lebih dari 60 mitra kementerian, lembaga internasional, dan dunia usaha mendukung penyelenggaraan UKS/M.",
    partners: [
      { name: "Kementerian Kesehatan", logo: "/images/mitra/kemenkes.png", href: "https://www.kemkes.go.id/" },
      { name: "Kementerian Agama", logo: "/images/mitra/kemenag.png", href: "https://kemenag.go.id/" },
      { name: "Kementerian Dalam Negeri", logo: "/images/mitra/kemendagri.png", href: "https://www.kemendagri.go.id/" },
      { name: "Badan Gizi Nasional", logo: "/images/mitra/bgn.png", href: "https://www.bgn.go.id/" },
      { name: "UNICEF Indonesia", logo: "/images/mitra/unicef.png", href: "https://www.unicef.org/indonesia/id" },
      { name: "Save the Children", logo: "/images/mitra/savethechildren.jpg", href: "https://savethechildren.or.id/" },
      { name: "Tanoto Foundation", logo: "/images/mitra/tanoto.png", href: "https://www.tanotofoundation.org/" },
      { name: "BPOM", logo: "/images/mitra/bpom.jpg", href: "https://www.pom.go.id/" },
      { name: "Bio Farma", logo: "/images/mitra/biofarma.png", href: "https://www.biofarma.co.id/" },
      { name: "AIA", logo: "/images/mitra/aia.png", href: "https://www.aia-financial.co.id/id" },
      { name: "Danone", logo: "/images/mitra/danone.png", href: "https://www.danone.com/" },
      { name: "KAO Indonesia", logo: "/images/mitra/kao.png", href: "https://www.kao.com/id/id/" },
      { name: "Universitas Pendidikan Indonesia", logo: "/images/mitra/upi.png", href: "https://www.upi.edu/" },
      { name: "Oatside", logo: "/images/mitra/oatside.png", href: "https://oatside.com/id/" },
    ],
  },
  {
    type: "ctaBand",
    eyebrow: "Aplikasi Pendukung",
    title: "Dua aplikasi resmi untuk mendukung kesehatan pelajar",
    description:
      "SIJIWA (sistem informasi kesehatan jiwa) dari Garuda Teknologi Indonesia, dan Oky Period Tracker dari UNICEF. Unduh di direktori Aplikasi.",
    actions: [{ label: "Lihat Aplikasi Pendukung", href: "/informasi/aplikasi" }],
  },
];

export const homePage: PageContent = {
  slug: "/",
  title: "Portal UKS/M",
  seoDescription:
    "Portal resmi UKS/M: informasi program, berita, publikasi, dan panduan kesehatan sekolah untuk seluruh satuan pendidikan di Indonesia.",
  crumbs: [],
  blocks: homeBlocks,
};
