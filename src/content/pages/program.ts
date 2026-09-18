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
      // PR-03: source's two-paragraph intro (docs/content-source/program/7kaih.md, S1), both kept
      // verbatim instead of the earlier single condensed paragraph.
      type: "richText",
      nodes: [
        {
          kind: "p",
          text: "Gerakan Tujuh Kebiasaan Anak Indonesia Hebat (7KAIH) adalah gerakan penguatan karakter yang mengajak setiap anak Indonesia membiasakan tujuh kebiasaan baik setiap hari: Bangun Pagi, Beribadah, Berolahraga, Makan Sehat dan Bergizi, Gemar Belajar, Bermasyarakat, Tidur Cepat.",
        },
        {
          kind: "p",
          text: "Gerakan ini lahir untuk menjawab tantangan zaman, mulai dari derasnya arus teknologi, gaya hidup serba instan, hingga menurunnya karakter dan kesehatan fisik-psikis anak muda. Melalui pembiasaan tujuh kebiasaan ini, 7KAIH ingin membentuk generasi yang sehat fisik, mental, dan spiritual; cerdas dan kreatif; serta peduli dan bertanggung jawab secara sosial — langkah nyata menuju Generasi Emas Indonesia 2045.",
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
    // PR-03: the 4 portal Panduan (docs/content-source/program/7kaih.md line 25) are recorded by
    // title and date only — the DEV portal source gives no file URL for any of
    // them, unlike the separate "Buku Kiat Jitu" s.id links also in that doc
    // (which target Guru/Orang Tua per jenjang, a different document set).
    // TODO(content): PR-03 portal Panduan file URLs missing.
    {
      type: "docGrid",
      title: "Panduan Penerapan 7KAIH",
      items: [
        { title: "Panduan Penerapan Gerakan 7KAIH untuk Orang Tua", date: "2025-03-29" },
        { title: "Panduan Penerapan Gerakan 7KAIH untuk Jenjang SMA/SMK", date: "2025-03-29" },
        { title: "Panduan Penerapan Gerakan 7KAIH untuk Jenjang PAUD", date: "2025-03-29" },
        { title: "Panduan Penerapan Gerakan 7KAIH untuk Jenjang SD", date: "2025-03-29" },
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
      // Source: docs/content-source/program/mbg.md S1 "Sasaran Program" — Perpres 83/2024 Pasal 5
      // names PAUD/dikdasmen peserta didik, balita, and ibu hamil/menyusui as
      // scope, matched by the portal's three sasaran cards.
      type: "cardGrid",
      title: "Sasaran Program",
      columns: 3,
      cards: [
        { title: "Peserta Didik" },
        { title: "Anak-Anak" },
        { title: "Ibu Hamil dan Menyusui" },
      ],
    },
    {
      type: "cardGrid",
      title: "Dampak yang Diharapkan",
      columns: 3,
      cards: [
        { title: "Status Gizi Baik", description: "Memastikan setiap individu generasi mendatang memiliki status gizi optimal sebagai modal kesehatan dan kecerdasan." },
        { title: "Morbiditas & Mortalitas Rendah", description: "Menurunnya angka kesakitan dan kematian, terutama pada ibu, bayi, dan anak-anak." },
        { title: "Partisipasi Sekolah Tinggi", description: "Menjamin anak-anak Indonesia dapat mengakses pendidikan dengan baik, didukung gizi yang memadai." },
        { title: "Penurunan Biaya Pengobatan", description: "Generasi yang sehat menekan beban biaya pengobatan bagi keluarga dan negara." },
        { title: "Peningkatan PDB Jangka Panjang", description: "Generasi sehat dan produktif berkontribusi pada pertumbuhan ekonomi yang berkelanjutan." },
      ],
    },
    {
      type: "ctaBand",
      title: "Pelajari Program MBG Lebih Lanjut",
      description: "Badan Gizi Nasional (BGN) mengoordinasikan pelaksanaan MBG melalui Satuan Pelayanan Pemenuhan Gizi (SPPG) di seluruh daerah.",
      actions: [{ label: "Kunjungi Badan Gizi Nasional", href: "https://bgn.go.id", variant: "primary", external: true }],
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
      // PR-02: headline and closing sentence from docs/content-source/program/ckg.md S1, both
      // omitted from the page before this pass.
      type: "richText",
      nodes: [
        { kind: "h3", text: "Sekolah Mulai, Cek Kesehatan Gratis Jangan Terlewat!" },
        {
          kind: "p",
          text: "Cek Kesehatan Gratis (CKG) Sekolah adalah pemeriksaan kesehatan gratis dari pemerintah untuk seluruh peserta didik kelas 1–12 atau sederajat (termasuk pesantren), yang dilaksanakan setiap tahun ajaran baru. Bukan hal yang perlu ditakuti — CKG Sekolah justru jadi langkah positif untuk mendeteksi masalah kesehatan sejak dini, sebelum berkembang jadi lebih serius, supaya siswa-siswi bisa belajar dan tumbuh dengan lebih optimal.",
        },
      ],
    },
    {
      type: "richText",
      title: "Cakupan Program",
      nodes: [
        { kind: "p", text: "CKG menyasar peserta didik jenjang kelas 1 hingga 12, termasuk santri pesantren, dengan pemeriksaan rutin tahunan di satuan pendidikan masing-masing." },
        { kind: "ul", items: ["Skrining kesehatan dasar dan antropometri", "Deteksi dini faktor risiko penyakit tidak menular", "Rujukan lanjutan bila ditemukan indikasi kesehatan tertentu"] },
        {
          kind: "p",
          text: "Program ini bagian dari Cek Kesehatan Gratis (CKG) yang lebih luas, mengedepankan upaya promotif dan preventif — periksa hari ini, sehat di masa depan.",
        },
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
      // Source: docs/content-source/program/asri.md S1 intro paragraph, verbatim.
      type: "richText",
      nodes: [
        {
          kind: "p",
          text: "Gerakan Sekolah ASRI adalah program nasional yang mengajak seluruh warga sekolah — murid, guru, tenaga kependidikan, hingga orang tua — untuk bersama-sama menciptakan lingkungan belajar yang nyaman, bersih, hijau, dan aman. Gerakan ini merupakan bagian dari upaya pembinaan Usaha Kesehatan Sekolah/Madrasah (UKS/M) yang menekankan pada kebersihan, keindahan, dan kenyamanan lingkungan sekolah.",
        },
      ],
    },
    {
      // Descriptions replaced with docs/content-source/program/asri.md S1's own wording for
      // each pillar (the previous copy here didn't match any source).
      type: "cardGrid",
      title: "Empat Pilar Utama",
      columns: 4,
      cards: [
        { title: "Aman", description: "Bebas dari perundungan (bullying), infrastruktur yang tahan bencana, serta bekal keamanan digital untuk murid." },
        { title: "Sehat", description: "Gaya hidup sehat lewat kebiasaan cuci tangan, olahraga rutin, kantin sehat, dan kawasan bebas rokok." },
        { title: "Resik", description: "Budaya menjaga kebersihan lewat piket kelas, pemilahan sampah, daur ulang, hingga bank sampah sekolah." },
        { title: "Indah", description: "Penataan lingkungan fisik agar rapi, ruang terbuka hijau, dan pembiasaan tertib antre." },
      ],
    },
    {
      // Source: Kemendikdasmen siaran pers 14859 (docs/content-source/program/asri.md S3),
      // condensed to the facts of the example without dropping the attribution.
      type: "richText",
      title: "Contoh Praktik Baik: Jumat Bersih",
      nodes: [
        {
          kind: "p",
          text: "Sukabumi, Jawa Barat, 7 Maret 2026 — Wakil Menteri Pendidikan Dasar dan Menengah (Wamendikdasmen), Fajar Riza Ul Haq, meninjau pelaksanaan kegiatan Jumat Bersih di SD Negeri 01 Cibadak, Kabupaten Sukabumi, sebagai bagian dari implementasi Gerakan Indonesia ASRI (Aman, Sehat, Resik, dan Indah).",
        },
        {
          kind: "p",
          text: "Wamen Fajar menegaskan bahwa pembiasaan menjaga kebersihan lingkungan sekolah merupakan bagian penting dari upaya membangun karakter peserta didik. Melalui kegiatan Jumat Bersih, siswa tidak hanya diajak menjaga kebersihan lingkungan sekolah, tetapi juga dilatih untuk memiliki tanggung jawab terhadap lingkungan sekitar.",
        },
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
      // PR-07: docs/content-source/program/saih-gala-kreasi.md S3 "Unduh" lists 4 downloads;
      // only Buku Petunjuk Pelaksanaan has a working URL. The other 3 have none.
      // TODO(content): PR-07 Panduan (ppt), Surat Pernyataan and Logo file URLs missing.
      type: "docGrid",
      title: "Unduhan Gala Kreasi 2024",
      items: [
        {
          title: "Buku Petunjuk Pelaksanaan Gala Kreasi Video 2024",
          date: "2024-01-01",
          fileUrl:
            "https://uks.kemendikdasmen.go.id/storage/manajemen_uks/files/images/uPpuXgH6FalmAGQhTHwv6TGqfQI8ZJMXxk4fhdoM.pdf",
        },
        { title: "Panduan Gala Kreasi Video 2024 (Segera Tersedia)", date: "2024-01-01" },
        { title: "Surat Pernyataan Gala Kreasi Video 2024 (Segera Tersedia)", date: "2024-01-01" },
        { title: "Logo Gala Kreasi Video 2024 (Segera Tersedia)", date: "2024-01-01" },
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

/**
 * Overview page for /program (docs/sitemaps/sitemap-portal-uks.md "Program" page).
 * The sitemap models this as one page with a picker and five anchored
 * sections; this app keeps each program on its own route instead, so this
 * page is a minimal hub linking out to them, one card per program with a
 * one-line description sourced from docs/content-source/program/*.md.
 */
export const programIndexPage: PageContent = {
  slug: "/program",
  title: "Program Prioritas",
  seoDescription: "Lima program prioritas UKS/M yang berjalan lintas satuan pendidikan di seluruh Indonesia.",
  crumbs: [{ label: "Program Prioritas" }],
  blocks: [
    {
      type: "hero",
      eyebrow: "Program Prioritas",
      title: "Program Prioritas UKS/M",
      lead: "Lima program prioritas yang berjalan lintas satuan pendidikan di seluruh Indonesia, dari pembiasaan karakter hingga pemenuhan gizi dan kesehatan.",
    },
    {
      type: "cardGrid",
      columns: 3,
      cards: [
        {
          title: "7 Kebiasaan Anak Indonesia Hebat",
          description: "Tujuh kebiasaan baik setiap hari untuk membentuk generasi yang sehat, cerdas, dan berkarakter.",
          href: "/program/7kaih",
        },
        {
          title: "Makan Bergizi Gratis",
          description: "Makanan bergizi gratis dan berkelanjutan bagi peserta didik, anak-anak, dan ibu hamil-menyusui.",
          href: "/program/mbg",
        },
        {
          title: "Cek Kesehatan Gratis Sekolah",
          description: "Pemeriksaan kesehatan gratis tahunan bagi peserta didik kelas 1–12, dari deteksi dini hingga rujukan.",
          href: "/program/ckg",
        },
        {
          title: "Gerakan Sekolah ASRI",
          description: "Empat pilar Aman, Sehat, Resik, Indah untuk lingkungan belajar yang nyaman dan berkelanjutan.",
          href: "/program/asri",
        },
        {
          title: "SAIH & Gala Kreasi Video",
          description: "Ajang lomba dan apresiasi karya pelajar Indonesia, dari pembiasaan karakter hingga praktik baik Sekolah Sehat.",
          href: "/program/saih-gala-kreasi",
        },
      ],
    },
  ],
};
