import type { NewsItem } from "./types";

/**
 * Real articles pulled from the live portal-uks.demo.or.id Inertia page
 * payload (latestBerita prop) on 2026-09-17. Body paragraphs use the
 * portal's own published summary text; excerpts beyond what the source
 * exposed are not invented.
 */
export const beritaItems: NewsItem[] = [
  {
    slug: "rapat-koordinasi-upt-implementasi-edukasi-gizi-perkuat-sinergi-pendampingan-di-satuan-pendidikan",
    title:
      "Rapat Koordinasi UPT Implementasi Edukasi Gizi Perkuat Sinergi Pendampingan di Satuan Pendidikan",
    category: "Umum",
    date: "2026-08-31",
    image: "/images/berita/rakor_mbg_cover.png",
    excerpt:
      "Serpong, Banten, 21 Agustus 2026. Kementerian Pendidikan Dasar dan Menengah (Kemendikdasmen) melalui Direktorat Sekolah Menengah Pertama (SMP) menyelenggarakan Rapat Koordinasi UPT Implementasi Edukasi Gizi.",
    body: [
      "Serpong, Banten, 21 Agustus 2026. Kementerian Pendidikan Dasar dan Menengah (Kemendikdasmen) melalui Direktorat Sekolah Menengah Pertama (SMP) menyelenggarakan Rapat Koordinasi UPT Implementasi Edukasi Gizi pada 19 sampai 21 Agustus 2026 di Jakarta.",
      "Kegiatan ini menjadi momentum untuk memperkuat kesepahaman, sinergi, dan komitmen bersama dalam mendukung implementasi edukasi gizi di satuan pendidikan, melibatkan unit pelaksana teknis dari berbagai wilayah untuk menyelaraskan langkah pendampingan di lapangan.",
    ],
  },
  {
    slug: "belajar-gizi-dari-kebun-sekolah-cara-ngts-ubah-pengetahuan-menjadi-kebiasaan",
    title: "Belajar Gizi dari Kebun Sekolah, Cara NGTS Ubah Pengetahuan menjadi Kebiasaan",
    category: "UKS",
    date: "2026-08-25",
    image: "/images/berita/gizi-kebun-sekolah.png",
    excerpt:
      "Jakarta, 25 Agustus 2026. Kemendikdasmen melalui SEAMEO RECFON mendorong sekolah mengubah pengetahuan gizi menjadi kebiasaan lewat kebun sekolah.",
    body: [
      "Jakarta, 25 Agustus 2026. Kementerian Pendidikan Dasar dan Menengah (Kemendikdasmen) melalui SEAMEO RECFON (Southeast Asian Ministers of Education Organization Regional Centre for Food and Nutrition) mendorong pembelajaran gizi berbasis pengalaman langsung di lingkungan sekolah.",
      "Kebun sekolah dijadikan ruang belajar hidup: peserta didik menanam, merawat, dan memanen sendiri bahan pangan bergizi, sehingga pengetahuan gizi yang diajarkan di kelas berubah menjadi kebiasaan sehari-hari yang melekat.",
    ],
  },
  {
    slug: "kemendikdasmen-jadikan-mbg-bagian-pendidikan-gizi-sekolah",
    title: "Kemendikdasmen Jadikan MBG Bagian Pendidikan Gizi Sekolah",
    category: "Umum",
    date: "2026-08-23",
    image: "/images/berita/mbg-gizi-sekolah.png",
    excerpt:
      "Program Makan Bergizi Gratis (MBG) di sekolah didorong tidak hanya berfokus pada penyediaan makanan, tetapi menjadi bagian dari pendidikan gizi peserta didik.",
    body: [
      "Program Makan Bergizi Gratis (MBG) di sekolah didorong tidak hanya berfokus pada penyediaan makanan bagi peserta didik. Program tersebut perlu menjadi bagian dari pendidikan gizi yang terintegrasi dengan kegiatan belajar mengajar sehari-hari.",
      "Dengan pendekatan ini, MBG diharapkan tidak berhenti sebagai program bantuan pangan, melainkan turut membentuk pemahaman dan kebiasaan makan sehat peserta didik dalam jangka panjang.",
    ],
  },
  {
    slug: "kemendikdasmen-dorong-sekolah-jadi-agen-perubahan-budaya-gizi-dan-hidup-sehat",
    title: "Kemendikdasmen Dorong Sekolah Jadi Agen Perubahan Budaya Gizi dan Hidup Sehat",
    category: "Umum",
    date: "2026-08-23",
    image: "/images/berita/agen-perubahan.png",
    excerpt:
      "Kemendikdasmen mendorong edukasi gizi dan kebiasaan hidup sehat menjadi bagian dari budaya sekolah di seluruh jenjang pendidikan.",
    body: [
      "Kementerian Pendidikan Dasar dan Menengah (Kemendikdasmen) mendorong edukasi gizi dan kebiasaan hidup sehat menjadi bagian dari budaya sekolah, bukan sekadar materi pelajaran yang berdiri sendiri.",
      "Sekolah didorong berperan aktif sebagai agen perubahan, menjadikan lingkungan pendidikan sebagai tempat pembiasaan pola hidup sehat yang berkelanjutan bagi peserta didik maupun tenaga pendidik.",
    ],
  },
];

export const praktikBaikItems: NewsItem[] = [
  {
    slug: "duta-sma-2026",
    title: "Duta SMA 2026: Dari Potensi Pelajar, Lahir Gagasan untuk Pendidikan",
    date: "2026-08-14",
    category: "Praktik Baik",
    excerpt: "Kisah pelajar SMA yang mengubah potensi pribadi menjadi gagasan nyata untuk pendidikan di sekolahnya.",
  },
  {
    slug: "ruang-kelas-darurat-sorkam",
    title: "Ruang Kelas Darurat Tumbuhkan Kembali Semangat Belajar Anak-anak Sorkam",
    date: "2026-08-07",
    category: "Praktik Baik",
    excerpt: "Upaya pemulihan semangat belajar anak-anak di Sorkam melalui ruang kelas darurat yang dibangun bersama.",
  },
  {
    slug: "revitalisasi-pulau-terluar",
    title: "Setelah 21 Tahun, Revitalisasi Tembus Pulau Terluar Indonesia",
    date: "2026-08-05",
    category: "Praktik Baik",
    excerpt: "Revitalisasi sekolah akhirnya menjangkau satuan pendidikan di pulau terluar Indonesia setelah dua dekade.",
  },
  {
    slug: "sdn-jalmak-1-pamekasan",
    title: "Dulu Rusak Berat, Kini SDN Jalmak 1 Jadi Rujukan Festival Pendidikan di Pamekasan",
    date: "2026-05-25",
    category: "Praktik Baik",
    excerpt: "SDN Jalmak 1 bertransformasi dari kondisi rusak berat menjadi sekolah rujukan festival pendidikan.",
  },
  {
    slug: "gerakan-asri-menanamkan-kepedulian",
    title: "Menanamkan Kepedulian Lingkungan Sejak Dini melalui Gerakan ASRI di Sekolah",
    date: "2026-03-07",
    category: "Praktik Baik",
    excerpt: "Gerakan ASRI menumbuhkan kepedulian lingkungan pada peserta didik sejak usia dini.",
  },
  {
    slug: "buleleng-7kaih-senam-kreasi",
    title: "Mendikdasmen Apresiasi Kabupaten Buleleng, Internalisasikan 7 KAIH melalui Senam Kreasi",
    date: "2026-02-13",
    category: "Praktik Baik",
    excerpt: "Kabupaten Buleleng mendapat apresiasi atas internalisasi 7KAIH lewat kegiatan senam kreasi rutin.",
  },
];
