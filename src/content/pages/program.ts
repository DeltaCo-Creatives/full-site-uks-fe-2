import { beritaItems } from "../berita";
import type { PageContent } from "../types";

export const kaih7Page: PageContent = {
  slug: "/program/7kaih",
  title: "7 Kebiasaan Anak Indonesia Hebat",
  seoDescription: "Gerakan penguatan karakter lewat tujuh kebiasaan baik setiap hari, menuju Generasi Emas Indonesia 2045.",
  crumbs: [{ label: "Program Prioritas" }, { label: "7KAIH" }],
  blocks: [
    {
      type: "hero",
      eyebrow: "Program Prioritas",
      title: "7 Kebiasaan Anak Indonesia Hebat",
      lead:
        "Gerakan Tujuh Kebiasaan Anak Indonesia Hebat (7KAIH) mengajak setiap anak Indonesia membiasakan tujuh kebiasaan baik setiap hari, langkah nyata menuju Generasi Emas Indonesia 2045.",
      image: "/images/hero/7kaih.png",
    },
    {
      type: "richText",
      nodes: [
        {
          kind: "p",
          text: "Gerakan ini lahir untuk menjawab tantangan zaman, mulai dari derasnya arus teknologi, gaya hidup serba instan, hingga menurunnya karakter dan kesehatan fisik-psikis anak muda. Melalui pembiasaan tujuh kebiasaan ini, 7KAIH ingin membentuk generasi yang sehat fisik, mental, dan spiritual; cerdas dan kreatif; serta peduli dan bertanggung jawab secara sosial.",
        },
      ],
    },
    {
      type: "cardGrid",
      title: "Tujuh Kebiasaan",
      columns: 4,
      cards: [
        { eyebrow: "1", title: "Bangun Pagi", description: "Mengajarkan nilai disiplin, keseimbangan, produktivitas, dan menghargai waktu." },
        { eyebrow: "2", title: "Beribadah", description: "Menyimpan makna spiritual dan moral yang membentuk kepribadian dan hubungan harmonis." },
        { eyebrow: "3", title: "Berolahraga", description: "Membangun disiplin, keseimbangan, dan ketahanan mental lewat aktivitas fisik." },
        { eyebrow: "4", title: "Makan Sehat dan Bergizi", description: "Memenuhi kebutuhan nutrisi tubuh dengan prinsip gizi seimbang." },
        { eyebrow: "5", title: "Gemar Belajar", description: "Mengajak setiap anak terus tumbuh dalam pemahaman, karakter, dan kearifan." },
        { eyebrow: "6", title: "Bermasyarakat", description: "Mendorong setiap anak hidup harmonis dan berkontribusi pada kesejahteraan bersama." },
        { eyebrow: "7", title: "Tidur Cepat", description: "Berdampak pada kesehatan fisik, kesejahteraan mental, serta kehidupan sosial." },
      ],
    },
    {
      type: "ctaBand",
      title: "Yuk, Praktikkan 7KAIH!",
      description: "Ajak keluarga, teman, dan sekolahmu membiasakan tujuh kebiasaan baik ini setiap hari, mulai dari hari ini.",
      actions: [
        { label: "Lihat Panduan di Publikasi", href: "/publikasi/buku-panduan", variant: "primary" },
        { label: "Ikuti Lomba SAIH", href: "/program/saih-gala-kreasi", variant: "ghost" },
      ],
    },
    {
      type: "docGrid",
      title: "Infografis 7KAIH",
      items: [
        { title: "Poster 7 KAIH SMP", date: "2025-12-01", image: "/images/publikasi/poster-7kaih-smp.png" },
        { title: "Poster 7 KAIH SD", date: "2025-12-01", image: "/images/publikasi/poster-7kaih-sd.png" },
        { title: "Poster 7 KAIH SMA/SMK", date: "2025-12-01", image: "/images/publikasi/poster-7kaih-smasmk.png" },
      ],
    },
  ],
};

export const mbgPage: PageContent = {
  slug: "/program/mbg",
  title: "Makan Bergizi Gratis",
  seoDescription: "Program nasional pemberian makanan bergizi gratis dan berkelanjutan untuk membangun fondasi generasi sehat.",
  crumbs: [{ label: "Program Prioritas" }, { label: "MBG" }],
  blocks: [
    {
      type: "hero",
      eyebrow: "Program Prioritas",
      title: "Makan Bergizi Gratis (MBG)",
      lead:
        "Program nasional pemberian makanan bergizi secara gratis dan berkelanjutan kepada kelompok sasaran prioritas di seluruh Indonesia, sebagai upaya pemerintah memenuhi kebutuhan gizi masyarakat sekaligus membangun fondasi generasi yang sehat dan berkualitas.",
      image: "/images/hero/mbg.jpg",
    },
    {
      type: "richText",
      title: "Dasar Hukum & Pelaksana",
      nodes: [
        { kind: "p", text: "Program ini dijalankan berdasarkan Peraturan Presiden Nomor 83 Tahun 2024, dengan Badan Gizi Nasional (BGN) sebagai badan koordinator melalui Satuan Pelayanan Pemenuhan Gizi (SPPG) di daerah." },
        { kind: "p", text: "Di lingkup pendidikan, UKS/M berperan menjadikan MBG bukan sekadar penyediaan makanan, melainkan bagian dari pendidikan gizi yang terintegrasi dengan kegiatan belajar mengajar." },
      ],
    },
    {
      type: "newsList",
      title: "Berita Terkait MBG",
      viewAllHref: "/berita",
      items: beritaItems.slice(0, 3),
    },
  ],
};

export const ckgPage: PageContent = {
  slug: "/program/ckg",
  title: "Cek Kesehatan Gratis Sekolah",
  seoDescription: "Pemeriksaan kesehatan tahunan bagi anak usia sekolah untuk deteksi dini faktor risiko dan kondisi pra-penyakit.",
  crumbs: [{ label: "Program Prioritas" }, { label: "CKG" }],
  blocks: [
    {
      type: "hero",
      eyebrow: "Program Prioritas",
      title: "Cek Kesehatan Gratis Sekolah",
      lead:
        "Pemeriksaan kesehatan yang ditujukan pada anak usia sekolah untuk identifikasi faktor risiko kesehatan, deteksi dini kondisi pra-penyakit, dan deteksi penyakit lebih awal.",
      image: "/images/hero/ckg.jpg",
    },
    {
      type: "richText",
      title: "Cakupan Program",
      nodes: [
        { kind: "p", text: "CKG menyasar peserta didik jenjang kelas 1 hingga 12, termasuk santri pesantren, dengan pemeriksaan rutin tahunan di satuan pendidikan masing-masing." },
        { kind: "ul", items: ["Skrining kesehatan dasar dan antropometri", "Deteksi dini faktor risiko penyakit tidak menular", "Rujukan lanjutan bila ditemukan indikasi kesehatan tertentu"] },
      ],
    },
  ],
};

export const asriPage: PageContent = {
  slug: "/program/asri",
  title: "Gerakan Sekolah ASRI",
  seoDescription: "Aman, Sehat, Resik, Indah: kampanye menciptakan lingkungan belajar yang layak dan nyaman.",
  crumbs: [{ label: "Program Prioritas" }, { label: "ASRI" }],
  blocks: [
    {
      type: "hero",
      eyebrow: "Program Prioritas",
      title: "Gerakan Sekolah ASRI",
      lead: "Gerakan Aman, Sehat, Resik, dan Indah untuk menciptakan lingkungan belajar yang nyaman bagi siswa.",
      image: "/images/hero/asri.jpg",
    },
    {
      type: "cardGrid",
      columns: 4,
      cards: [
        { title: "Aman", description: "Lingkungan sekolah bebas dari risiko kecelakaan dan kekerasan." },
        { title: "Sehat", description: "Sarana kesehatan dan sanitasi yang memadai di seluruh area sekolah." },
        { title: "Resik", description: "Kebersihan lingkungan terjaga lewat pengelolaan sampah yang baik." },
        { title: "Indah", description: "Penataan ruang dan penghijauan yang membuat sekolah nyaman ditinggali." },
      ],
    },
  ],
};

export const saihGalaKreasiPage: PageContent = {
  slug: "/program/saih-gala-kreasi",
  title: "SAIH & Gala Kreasi Video",
  seoDescription: "Semarak Anak Indonesia Hebat (SAIH) dan Gala Kreasi Video Gerakan Sekolah Sehat: ajang lomba dan apresiasi karya pelajar Indonesia.",
  crumbs: [{ label: "Program Prioritas" }, { label: "SAIH & Gala Kreasi" }],
  blocks: [
    {
      type: "hero",
      eyebrow: "Program Prioritas",
      title: "SAIH & Gala Kreasi Video",
      lead:
        "Dua ajang lomba dan apresiasi karya pelajar Indonesia: Semarak Anak Indonesia Hebat (SAIH), rangkaian lomba pembiasaan karakter, dan Gala Kreasi Video Gerakan Sekolah Sehat, ajang video praktik baik 5 Sehat di satuan pendidikan.",
    },
    {
      type: "richText",
      title: "Semarak Anak Indonesia Hebat (SAIH) 2025",
      nodes: [
        {
          kind: "p",
          text: "Diselenggarakan dalam rangka Hari Pendidikan Nasional 2025, sebagai tindak lanjut Surat Edaran Bersama No 1 Tahun 2025 tentang Penguatan Pendidikan Karakter melalui Pembiasaan di Satuan Pendidikan. Direktorat Jenderal PAUD, Pendidikan Dasar, dan Pendidikan Menengah bersama BBPMP dan BPMP menyelenggarakan lima lomba dengan sasaran peserta didik PAUD, SD, SMP, dan SMA di seluruh Indonesia.",
        },
      ],
    },
    {
      type: "cardGrid",
      title: "Lima Lomba SAIH 2025",
      columns: 3,
      cards: [
        { eyebrow: "Seluruh Jenjang", title: "Lomba Senam Anak Indonesia Hebat", href: "https://s.id/InformasiLSAIH", external: true },
        { eyebrow: "PAUD", title: "Lomba Video Cerita Anak" },
        { eyebrow: "SD", title: "Lomba Potret Cerita" },
        { eyebrow: "SMP", title: "Lomba Video Cerita Pendek", href: "https://s.id/ReelsvideoPendek7KAIHDitSMP_", external: true },
        { eyebrow: "SMA", title: "Lomba Video Cerita Pendek / Vlog", href: "https://s.id/cerita7KAIH", external: true },
      ],
    },
    {
      type: "richText",
      title: "Gala Kreasi Video Gerakan Sekolah Sehat 2024",
      nodes: [
        {
          kind: "p",
          text: "Ajang lomba video praktik baik implementasi sebagian atau seluruh fokus Gerakan Sekolah Sehat (5 Sehat) di seluruh jenjang satuan pendidikan, dengan tema \"Sekolah Sehat, Generasi Hebat\". Penghargaan diberikan kepada satuan pendidikan berdasarkan hasil penilaian video, peringkat 1 sampai 10 terbaik untuk setiap jenjang pendidikan.",
        },
        {
          kind: "h3",
          text: "Tujuan Kegiatan",
        },
        {
          kind: "ul",
          items: [
            "Meningkatkan motivasi satuan pendidikan dalam melaksanakan implementasi atau mengaktivasi Gerakan Sekolah Sehat (5 Sehat) di satuannya.",
            "Memberikan apresiasi kepada satuan pendidikan yang telah dapat melaksanakan implementasi atau mengaktivasi Gerakan Sekolah Sehat (5 Sehat) dengan baik di satuannya.",
            "Memantik dan mengoptimalkan implementasi atau aktivasi pesan Gerakan Sekolah Sehat.",
            "Ajang berbagi praktik baik implementasi atau aktivasi Gerakan Sekolah Sehat (5 Sehat) antar satuan pendidikan.",
          ],
        },
        {
          kind: "h3",
          text: "Sasaran",
        },
        {
          kind: "p",
          text: "Satuan pendidikan berstatus negeri maupun swasta: PAUD (TK, KB, TPA, SPS), SD, SMP, SMA, SMK, SLB, serta SKB dan PKBM.",
        },
      ],
    },
    {
      type: "docGrid",
      title: "Unduhan Gala Kreasi 2024",
      items: [
        {
          title: "Buku Petunjuk Pelaksanaan Gala Kreasi Video 2024",
          date: "2024-01-01",
          fileUrl:
            "https://uks.kemendikdasmen.go.id/storage/manajemen_uks/files/images/uPpuXgH6FalmAGQhTHwv6TGqfQI8ZJMXxk4fhdoM.pdf",
        },
      ],
    },
    {
      type: "richText",
      title: "Gala Kreasi Video Gerakan Sekolah Sehat 2023",
      nodes: [
        {
          kind: "p",
          text: "Edisi sebelumnya dari ajang yang sama, dengan tema \"Sekolah Sehat, Generasi Hebat\" dan cakupan 3 Sehat, penilaian peringkat 1 sampai 10 terbaik untuk setiap jenjang pendidikan, dengan sasaran satuan pendidikan yang sama seperti edisi 2024.",
        },
      ],
    },
  ],
};

export const programPages: PageContent[] = [kaih7Page, mbgPage, ckgPage, asriPage, saihGalaKreasiPage];
