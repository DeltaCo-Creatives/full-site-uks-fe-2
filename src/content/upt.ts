import type { UptStory } from "./types";

/**
 * Storytelling feed from regional units (UPT), filterable by category
 * 7KAIH / CKG / MBG / UKS. Placeholder content pending a real feed from
 * the regional UPTs — see content-inventory.md I-03.
 */
export const uptStories: UptStory[] = [
  {
    slug: "mbg-tanjungpinang-sinergi-sppg",
    title: "SPPG Tanjungpinang Perkuat Sinergi Pendampingan Gizi di Satuan Pendidikan",
    region: "Tanjungpinang, Kepulauan Riau",
    category: "MBG",
    date: "2026-08-19",
    excerpt: "UPT setempat mendampingi sekolah menyelaraskan jadwal distribusi Makan Bergizi Gratis dengan kegiatan belajar mengajar.",
    body: [
      "Satuan Pelayanan Pemenuhan Gizi (SPPG) di Tanjungpinang bekerja sama dengan UPT pendidikan setempat untuk menyelaraskan jadwal distribusi Makan Bergizi Gratis dengan jam belajar, agar program berjalan tanpa mengganggu kegiatan sekolah.",
      "Pendampingan ini juga mencakup edukasi gizi singkat sebelum makan bersama, sehingga MBG tidak berhenti sebagai penyediaan makanan semata.",
    ],
  },
  {
    slug: "mbg-pangandaran-kantin-sehat",
    title: "UPT Pangandaran Dorong Sekolah Selaraskan MBG dengan Kantin Sehat",
    region: "Pangandaran, Jawa Barat",
    category: "MBG",
    date: "2026-08-12",
    excerpt: "Pendampingan UPT membantu sekolah memastikan menu MBG dan jajanan kantin sama-sama memenuhi standar gizi seimbang.",
    body: [
      "UPT pendidikan Pangandaran mendampingi satuan pendidikan menyelaraskan menu Makan Bergizi Gratis dengan pengelolaan kantin sekolah, agar asupan gizi peserta didik konsisten sepanjang hari.",
      "Langkah ini menjadi bagian dari penguatan pilar Pembinaan Lingkungan Sekolah Sehat, khususnya program kantin sehat di bawah TRIAS UKS/M.",
    ],
  },
  {
    slug: "mbg-jakarta-selatan-monitoring",
    title: "UPT Jakarta Selatan Perkuat Pemantauan Distribusi MBG di Sekolah Padat Penduduk",
    region: "Jakarta Selatan, DKI Jakarta",
    category: "MBG",
    date: "2026-08-04",
    excerpt: "Pemantauan berkala UPT membantu memastikan distribusi Makan Bergizi Gratis tepat waktu di wilayah padat penduduk.",
    body: [
      "Kepadatan jumlah sekolah di Jakarta Selatan menjadi tantangan tersendiri dalam distribusi Makan Bergizi Gratis. UPT setempat memperkuat pemantauan berkala agar jadwal antar sekolah tetap tepat waktu.",
      "Koordinasi rutin antara UPT, SPPG, dan pihak sekolah menjadi kunci agar program tetap berjalan lancar meski dengan jumlah satuan pendidikan yang besar.",
    ],
  },
  {
    slug: "ckg-bandung-skrining-sekolah",
    title: "UPT Bandung Kawal Skrining Cek Kesehatan Gratis di Jenjang SMP",
    region: "Kota Bandung, Jawa Barat",
    category: "CKG",
    date: "2026-07-28",
    excerpt: "UPT setempat mengoordinasikan jadwal Cek Kesehatan Gratis agar seluruh SMP negeri dan swasta mendapat giliran pemeriksaan.",
    body: [
      "UPT pendidikan Kota Bandung mengoordinasikan jadwal Cek Kesehatan Gratis (CKG) bersama fasilitas kesehatan setempat, memastikan seluruh SMP negeri dan swasta di wilayahnya mendapat giliran pemeriksaan.",
      "Hasil skrining awal digunakan sekolah untuk menindaklanjuti temuan kesehatan peserta didik bersama orang tua dan Puskesmas rujukan.",
    ],
  },
  {
    slug: "ckg-makassar-pesantren",
    title: "CKG Menjangkau Santri Pesantren di Makassar",
    region: "Makassar, Sulawesi Selatan",
    category: "CKG",
    date: "2026-07-15",
    excerpt: "UPT dan kantor Kemenag setempat memperluas cakupan Cek Kesehatan Gratis hingga ke pesantren.",
    body: [
      "Selain satuan pendidikan formal, UPT bersama kantor Kementerian Agama Makassar memperluas cakupan Cek Kesehatan Gratis hingga ke pesantren, sejalan dengan sasaran program yang mencakup santri.",
      "Pemeriksaan dilakukan bertahap per angkatan agar tidak mengganggu jadwal belajar mengajar di pesantren.",
    ],
  },
  {
    slug: "7kaih-buleleng-senam-pagi",
    title: "UPT Buleleng Dampingi Sekolah Rutinkan Senam Pagi 7KAIH",
    region: "Buleleng, Bali",
    category: "7KAIH",
    date: "2026-06-30",
    excerpt: "Pendampingan UPT membantu sekolah menjadikan senam pagi sebagai kebiasaan rutin dalam Gerakan 7KAIH.",
    body: [
      "UPT pendidikan Buleleng mendampingi sekolah-sekolah menjadikan senam pagi sebagai kebiasaan rutin, salah satu wujud pembiasaan aktivitas fisik dalam Gerakan 7 Kebiasaan Anak Indonesia Hebat.",
      "Kebiasaan ini kini menjadi bagian tetap dari rutinitas pagi sebelum kegiatan belajar mengajar dimulai di sejumlah sekolah dampingan.",
    ],
  },
  {
    slug: "uks-ntt-pelatihan-dokter-kecil",
    title: "UPT NTT Gelar Pelatihan Dokter Kecil untuk Perkuat Pelayanan Kesehatan Sekolah",
    region: "Kupang, Nusa Tenggara Timur",
    category: "UKS",
    date: "2026-06-18",
    excerpt: "Pelatihan dokter kecil digelar UPT untuk memperkuat pelayanan kesehatan sederhana di sekolah-sekolah dampingan.",
    body: [
      "UPT pendidikan Kupang menggelar pelatihan dokter kecil bagi peserta didik SD, membekali mereka dengan keterampilan dasar pertolongan pertama dan promosi hidup bersih dan sehat di lingkungan sekolah.",
      "Program ini menjadi salah satu sub-program pilar Pendidikan Kesehatan dalam TRIAS UKS/M, sekaligus menumbuhkan rasa tanggung jawab peserta didik terhadap kesehatan teman sebaya.",
    ],
  },
  {
    slug: "uks-papua-sanitasi-sekolah",
    title: "UPT Jayapura Kawal Perbaikan Sanitasi di Sekolah Dampingan UKS/M",
    region: "Jayapura, Papua",
    category: "UKS",
    date: "2026-05-22",
    excerpt: "Perbaikan sarana sanitasi sekolah dikawal UPT sebagai bagian dari penguatan Pembinaan Lingkungan Sekolah Sehat.",
    body: [
      "UPT pendidikan Jayapura mengawal perbaikan sarana sanitasi di sejumlah sekolah dampingan, mulai dari akses air bersih hingga jamban yang layak, sejalan dengan indikator Stratifikasi UKS/M.",
      "Perbaikan bertahap ini menjadi bagian dari komitmen daerah meningkatkan strata UKS/M satuan pendidikan di wilayahnya.",
    ],
  },
];
