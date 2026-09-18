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
    category: "Umum",
    excerpt: "Kisah pelajar SMA yang mengubah potensi pribadi menjadi gagasan nyata untuk pendidikan di sekolahnya.",
    body: [
      "Ajang Duta SMA 2026 mengumpulkan pelajar dari berbagai provinsi untuk menyampaikan gagasan tentang perbaikan lingkungan belajar, termasuk penerapan kebiasaan hidup sehat di satuan pendidikan masing-masing.",
      "Para duta terpilih membawa gagasan yang lahir dari pengamatan langsung di sekolahnya, mulai dari kantin sehat, pembiasaan aktivitas fisik, hingga dukungan kesehatan mental sesama pelajar.",
    ],
  },
  {
    slug: "ruang-kelas-darurat-sorkam",
    title: "Ruang Kelas Darurat Tumbuhkan Kembali Semangat Belajar Anak-anak Sorkam",
    date: "2026-08-07",
    category: "Umum",
    excerpt: "Upaya pemulihan semangat belajar anak-anak di Sorkam melalui ruang kelas darurat yang dibangun bersama.",
    body: [
      "Setelah bencana yang merusak sejumlah ruang kelas di Sorkam, satuan pendidikan bersama warga sekitar bergotong royong mendirikan ruang kelas darurat agar kegiatan belajar mengajar tetap berjalan.",
      "Selain memulihkan akses belajar, ruang kelas darurat ini juga menjaga aspek kesehatan dan keamanan peserta didik selama masa transisi menuju pembangunan kembali fasilitas permanen.",
    ],
  },
  {
    slug: "revitalisasi-pulau-terluar",
    title: "Setelah 21 Tahun, Revitalisasi Tembus Pulau Terluar Indonesia",
    date: "2026-08-05",
    category: "Umum",
    excerpt: "Revitalisasi sekolah akhirnya menjangkau satuan pendidikan di pulau terluar Indonesia setelah dua dekade.",
    body: [
      "Setelah dua puluh satu tahun tanpa renovasi berarti, satuan pendidikan di salah satu pulau terluar Indonesia akhirnya mendapat giliran revitalisasi menyeluruh, termasuk perbaikan sarana sanitasi dan ruang UKS/M.",
      "Revitalisasi ini menjadi bagian dari upaya pemerataan akses pendidikan dan kesehatan sekolah hingga ke wilayah 3T (terdepan, terluar, tertinggal).",
    ],
  },
  {
    slug: "sdn-jalmak-1-pamekasan",
    title: "Dulu Rusak Berat, Kini SDN Jalmak 1 Jadi Rujukan Festival Pendidikan di Pamekasan",
    date: "2026-05-25",
    category: "Umum",
    excerpt: "SDN Jalmak 1 bertransformasi dari kondisi rusak berat menjadi sekolah rujukan festival pendidikan.",
    body: [
      "SDN Jalmak 1 di Pamekasan yang sebelumnya berada dalam kondisi rusak berat kini tampil sebagai salah satu sekolah rujukan dalam festival pendidikan tingkat kabupaten.",
      "Transformasi ini tidak lepas dari pembenahan lingkungan sekolah yang lebih sehat dan aman, sejalan dengan pilar Pembinaan Lingkungan Sekolah Sehat dalam Trias UKS/M.",
    ],
  },
  {
    slug: "gerakan-asri-menanamkan-kepedulian",
    title: "Menanamkan Kepedulian Lingkungan Sejak Dini melalui Gerakan ASRI di Sekolah",
    date: "2026-03-07",
    category: "ASRI",
    excerpt: "Gerakan ASRI menumbuhkan kepedulian lingkungan pada peserta didik sejak usia dini.",
    body: [
      "Lewat kegiatan rutin seperti Jumat Bersih, sekolah pelaksana Gerakan ASRI mengajak peserta didik merawat kebersihan dan penghijauan lingkungan belajarnya secara konsisten.",
      "Kebiasaan ini menanamkan rasa memiliki terhadap lingkungan sekolah sekaligus mendukung empat pilar ASRI: Aman, Sehat, Resik, dan Indah.",
    ],
  },
  {
    slug: "buleleng-7kaih-senam-kreasi",
    title: "Mendikdasmen Apresiasi Kabupaten Buleleng, Internalisasikan 7 KAIH melalui Senam Kreasi",
    date: "2026-02-13",
    category: "7KAIH",
    excerpt: "Kabupaten Buleleng mendapat apresiasi atas internalisasi 7KAIH lewat kegiatan senam kreasi rutin.",
    body: [
      "Kabupaten Buleleng mendapat apresiasi dari Kemendikdasmen atas caranya menginternalisasi Gerakan 7 Kebiasaan Anak Indonesia Hebat (7KAIH) lewat senam kreasi yang rutin dilakukan di sekolah-sekolah.",
      "Kegiatan senam kreasi ini menjadi contoh bagaimana pembiasaan sehat dapat dikemas secara menyenangkan agar konsisten diikuti oleh seluruh peserta didik.",
    ],
  },
];
