import type { AdvocacyItem, FocusSection, PageContent } from "../types";

/**
 * Sourced from docs/content-source/sekolah-sehat/*.md (scraped 2026-09-17 from the live CMS)
 * and docs/content-source/sekolah-sehat/sekolah-sehat-curation.md, which records every wording fix and
 * every link the curation pass could not verify (set to `href: null` below,
 * shown in the UI as "Belum tersedia" rather than a dead link).
 */

/** SS-09: 18 produk hukum, in source order. Exported so Publikasi's Produk Hukum
 * page (U-01) can reuse this exact list instead of keeping a second, unsourced one. */
export const produkHukumItems: AdvocacyItem[] = [
  {
    title: "SKB 4 Menteri Nomor 83 Tahun 2022 Pelaksanaan Imunisasi dan Aksi Bergizi",
    category: "SKB",
    href: "https://uks.kemendikdasmen.go.id/storage/manajemen_uks/files/produk_hukum/2BmyYNrnxfnHenNHV3WzO7rtXh54k4IJ3gL09BBi.pdf",
  },
  {
    title:
      "Surat Edaran Mendikbudristek Nomor 7 Tahun 2022 Tentang Diskresi Pelaksanaan Keputusan Bersama 4 Menteri Tentang Panduan Penyelenggaraan Pembelajaran di Masa Pandemi Covid-19",
    category: "SE",
    href: "https://is3.cloudhost.id/storagedirectus1/manajemen_uks/files/produk_hukum/XWikLOLBzlv0IYkYqjRLePfATtwh9Y9gXoyTrgA4.pdf",
  },
  {
    title: "Permenko Bidang PMK Nomor 1 Tahun 2022 tentang Rencana Aksi Nasional Peningkatan Kesejahteraan Usia Anak Usia Sekolah dan Remaja",
    category: "Permenko",
    href: "https://is3.cloudhost.id/storagedirectus1/manajemen_uks/files/produk_hukum/5QoI8pk8youdhr8uRCyQk5SLEL7rQ23QRgP3fzEW.pdf",
  },
  {
    // Curation note: this source link reuses the Permenko PMK 1/2022 PDF above, not the actual Permenkes text.
    title: "Peraturan Menteri Kesehatan No 2269/MENKES/PER/XI/2011 tentang Pedoman Pembinaan Perilaku Hidup Bersih dan Sehat",
    category: "Permenkes",
    href: null,
  },
  {
    title: "Peraturan Menteri Pendidikan Nasional RI No. 57 Tahun 2009 tentang Pemberian Bantuan Pengembangan Sekolah Sehat",
    category: "Permendiknas",
    href: "https://is3.cloudhost.id/storagedirectus1/manajemen_uks/files/produk_hukum/9i2fSxvbbAEeYpKt9vvvnrIJ9LuthFPMW4F1uXXB.pdf",
  },
  {
    title: "Permendiknas Nomor 24 Tahun 2007 tentang Standar Sarana dan Prasarana untuk SD/MI, SMP/MTs dan SMA/MA",
    category: "Permendiknas",
    href: "https://is3.cloudhost.id/storagedirectus1/manajemen_uks/files/produk_hukum/3hxH6GkqVfOGOBZu4PfedzoFtHV1ExWI45pXHcrG.pdf",
  },
  {
    title: "Peraturan Bersama 4 Menteri Tahun 2014 tentang Pembinaan dan Pengembangan UKS/M",
    category: "Peraturan Bersama",
    href: "https://is3.cloudhost.id/storagedirectus1/manajemen_uks/files/produk_hukum/cQNMhqmcotaphaGnQfHbrfIQ13QnRryjROAkSBJY.pdf",
  },
  {
    // Curation note: no link in source.
    title: "Peraturan Presiden Nomor 67 Tahun 2021 tentang Penanggulangan Tuberkulosis",
    category: "Perpres",
    href: null,
  },
  {
    title: "Peraturan Pemerintah Nomor 57 Tahun 2021 tentang Standar Nasional Pendidikan",
    category: "PP",
    href: "https://is3.cloudhost.id/storagedirectus1/manajemen_uks/files/produk_hukum/4roWpXIbAsZWOQNU2sA58ezTntLKUpzj8zDP7h0J.pdf",
  },
  {
    title: "Instruksi Presiden Nomor 1 Tahun 2017 tentang Gerakan Masyarakat Hidup Sehat (GERMAS)",
    category: "Inpres",
    href: "https://is3.cloudhost.id/storagedirectus1/manajemen_uks/files/produk_hukum/HYRTIBhl1KoF7dZlBe4nEwhzItmDfsuo7RRcM3lg.pdf",
  },
  {
    title: "Peraturan Pemerintah Nomor 61 Tahun 2014 tentang Kesehatan Reproduksi",
    category: "PP",
    href: "https://is3.cloudhost.id/storagedirectus1/manajemen_uks/files/produk_hukum/sVwwpGnxjDQvXwj5AUAemMgwrQrigA1YrnpiX6fx.pdf",
  },
  {
    title: "Peraturan Presiden Nomor 60 Tahun 2013 tentang Pengembangan PAUD HI",
    category: "Perpres",
    href: "https://is3.cloudhost.id/storagedirectus1/manajemen_uks/files/produk_hukum/oDHktplglt409Gc0QOLFJR3EGq1fvFZLpwFDXk82.pdf",
  },
  {
    title: "Peraturan Presiden Nomor 72 Tahun 2012 tentang Sistem Kesehatan Nasional",
    category: "Perpres",
    href: "https://is3.cloudhost.id/storagedirectus1/manajemen_uks/files/produk_hukum/yEWtMsQ9nYvjKJ871Eo3LaHWcvxodGs3crqOssGw.pdf",
  },
  {
    title: "Peraturan Pemerintah Nomor 48 Tahun 2008 tentang Pendanaan Pendidikan",
    category: "PP",
    href: "https://is3.cloudhost.id/storagedirectus1/manajemen_uks/files/produk_hukum/xx7rhMWpY5rriyE2vBRZUEFOZRbH1Vu6RiwaAHe0.pdf",
  },
  {
    title: "Undang-Undang Nomor 23 Tahun 2014 tentang Pemerintahan Daerah",
    category: "UU",
    href: "https://is3.cloudhost.id/storagedirectus1/manajemen_uks/files/produk_hukum/mx1nibPGF7tD9zzusx5OEQfna1nTYjeWD0yAxUn5.pdf",
  },
  {
    title: "Undang-Undang Nomor 36 Tahun 2009 tentang Kesehatan",
    category: "UU",
    href: "https://is3.cloudhost.id/storagedirectus1/manajemen_uks/files/produk_hukum/1mx3JXeFSJsIwKFoR9gnrLATyWuTWsG156yGhkkN.pdf",
  },
  {
    title: "Undang-Undang Nomor 25 Tahun 2004 tentang Sistem Perencanaan Pembangunan Nasional",
    category: "UU",
    href: "https://is3.cloudhost.id/storagedirectus1/manajemen_uks/files/produk_hukum/8m8KH3KTC1mMq0vZhyYMv2YHXk7iisprevPM73nJ.pdf",
  },
  {
    title: "Undang-Undang Nomor 20 Tahun 2003 tentang Sistem Pendidikan Nasional",
    category: "UU",
    href: "https://is3.cloudhost.id/storagedirectus1/manajemen_uks/files/produk_hukum/pvvrRgryB8oQ2WsXsQRqT6h6HedlvTY8rFoTWpCX.pdf",
  },
];

/** SS-10: 20 campaign materials, in source order. */
export const materiKampanyeItems: AdvocacyItem[] = [
  {
    // Curation note: ditpsd.kemdikbud.go.id does not resolve.
    title: "Paparan Sekolah Sehat",
    category: "Paparan",
    href: null,
  },
  {
    title: "Siaran Pers Peluncuran Sekolah Sehat",
    category: "Siaran Pers",
    href: null,
  },
  {
    title: "Surat Edaran Kampanye Sekolah Sehat",
    category: "Surat Edaran",
    href: "https://drive.google.com/file/d/1xyJXy6hQ8oiRaXFeZ4bC-r3YYFRnUIrB/view?usp=sharing",
  },
  {
    title: "Pedoman Kampanye Sekolah Sehat",
    category: "Pedoman",
    href: "https://drive.google.com/file/d/13DG4BeuqPu8eUwL3c0clJ9MG-DNXQmEg/view?usp=sharing",
  },
  {
    title: "Buku Saku Sehat Bergizi",
    category: "Buku Saku",
    href: "https://is3.cloudhost.id/storagedirectus1/manajemen_uks/files/publikasi/L4H44OkNQw3Oal3CXziuAuHDgoGZuTIQ3UogIaNT.pdf",
  },
  {
    title: "Buku Saku Sehat Fisik",
    category: "Buku Saku",
    href: "https://drive.google.com/file/d/111Vwr0_RfervHeA2PBFqDgWpdNbf-Rol/view?usp=sharing",
  },
  {
    // Curation note: private Drive file (401).
    title: "Petunjuk Teknis Pelaksanaan BIAS",
    category: "Juknis",
    href: null,
  },
  {
    title: "Komik BIAS",
    category: "Komik",
    href: "https://drive.google.com/file/d/1PaSDbNYyERXOWtwAjPbBnxXJ-wTYWe1t/view?usp=sharing",
  },
  {
    title: "Desain Leaflet/Poster Sehat Bergizi",
    category: "Leaflet/Poster",
    href: "https://drive.google.com/file/d/1y4efWw89JPyv85Hld_XB8smlwGg1f90p/view?usp=sharing",
  },
  {
    title: "Desain Leaflet/Poster Sehat Fisik",
    category: "Leaflet/Poster",
    href: "https://drive.google.com/file/d/1e3y7p6p8pJ0Wy_sCgjzSLZraaoY4x_tB/view?usp=sharing",
  },
  {
    title: "Desain Leaflet/Poster Sehat Imunisasi",
    category: "Leaflet/Poster",
    href: "https://drive.google.com/file/d/1z5mbEois0XzOpqmIQF33Tox85Y7tEknt/view?usp=sharing",
  },
  {
    title: "Infografis Kampanye Sekolah Sehat",
    category: "Infografis",
    href: "https://drive.google.com/file/d/1JKfCJNc4MvI5b3yPX9MPG3TJ6w6Xq-1x/view?usp=sharing",
  },
  {
    title: "Infografis Sehat Bergizi",
    category: "Infografis",
    href: "https://drive.google.com/file/d/15Ix2S3QhBl10msfMjVCbGvPBm9f5lzp3/view?usp=sharing",
  },
  {
    title: "Infografis Sehat Fisik",
    category: "Infografis",
    href: "https://drive.google.com/file/d/1eRBEUjU9s47-ZBZoymJdREb5a9C4E8Mm/view?usp=sharing",
  },
  {
    title: "Infografis Sehat Imunisasi",
    category: "Infografis",
    href: "https://drive.google.com/file/d/1dHhkRmhg4Ir8qyuYfTuPF0diNX-sydOR/view?usp=sharing",
  },
  {
    // Curation note: private Drive file (401).
    title: "Desain Standing Banner Permainan Rakyat dan Olahraga Tradisional",
    category: "Standing Banner",
    href: null,
  },
  {
    title: "Desain Standing Banner Kampanye Sekolah Sehat",
    category: "Standing Banner",
    href: "https://drive.google.com/file/d/1xr70_Fqx5NwFhviAdjYn3rh0Jd7IYDvC/view?usp=sharing",
  },
  {
    title: "Iklan Layanan Masyarakat Sekolah Sehat",
    category: "Video",
    href: "https://youtu.be/Cbqg3RnW0ss",
  },
  {
    title: "Gerak Lagu Sekolah Sehat",
    category: "Video",
    href: "https://youtu.be/gl56oxJOWVo",
  },
  {
    title: "SKJ 2022",
    category: "Video",
    href: "https://youtu.be/V-GpqteRbeA",
  },
];

const focusSections: FocusSection[] = [
  {
    id: "bergizi",
    title: "Sehat Bergizi",
    icon: "Heart",
    summary: "Sehat Bergizi bertujuan untuk meningkatkan derajat kesehatan peserta didik melalui penerapan pola makan yang tepat dan konsumsi makanan bergizi.",
    activities: [
      "Pembiasaan minum air putih yang cukup, minimal 2 gelas sehari selama berkegiatan di sekolah.",
      "Peningkatan pemahaman dan pembiasaan konsumsi makanan bergizi seimbang, terutama protein tinggi, buah, dan sayuran melalui sarapan/makan bersama minimal 1 kali seminggu.",
      "Menghindari/meminimalisasi konsumsi makanan cepat saji; makanan/minuman berpemanis, berpengawet, kurang serat, tinggi gula, garam, dan lemak.",
      "Pembiasaan konsumsi Tablet Tambah Darah bagi remaja putri SMP/sederajat dan SMA/sederajat minimal 1 kali setiap minggu.",
    ],
    programs: [
      {
        title: "Isi Piringku",
        description:
          "Isi Piringku merupakan pedoman yang disusun oleh Kementerian Kesehatan mengampanyekan konsumsi makanan yang sesuai dengan pedoman gizi seimbang. Dalam satu piring setiap kali makan, setengah piring diisi dengan sayur dan buah, sedangkan setengah lainnya diisi dengan makanan pokok dan lauk pauk. Selain itu, Isi Piringku juga memuat ajakan untuk mengonsumsi 8 gelas air setiap hari, melakukan aktivitas fisik 30 menit setiap hari, dan mencuci tangan dengan air dan sabun sebelum dan setelah makan.",
      },
      {
        title: "Sepuluh Pedoman Gizi Seimbang",
        description: "Sepuluh kebiasaan yang dianjurkan untuk mendukung gizi seimbang sehari-hari:",
        items: [
          "Biasakan mengonsumsi aneka ragam makanan pokok.",
          "Batasi konsumsi panganan manis, asin, dan berlemak.",
          "Lakukan aktivitas fisik yang cukup dan pertahankan berat badan ideal.",
          "Biasakan mengonsumsi lauk pauk yang mengandung protein tinggi.",
          "Cuci tangan pakai sabun dengan air mengalir.",
          "Biasakan sarapan pagi.",
          "Biasakan minum air putih yang cukup dan aman.",
          "Banyak makan buah dan sayur.",
          "Biasakan membaca label pada kemasan pangan.",
          "Syukuri dan nikmati aneka ragam makanan.",
        ],
      },
      {
        title: "Empat Komponen Kantin dan Jajanan Sehat di Sekolah",
        description: "Untuk menjamin penyelenggaraan kantin dan jajanan sehat di sekolah, terdapat beberapa komponen yang perlu diperhatikan:",
        items: [
          "Komitmen dan Manajemen Sekolah, termasuk monitoring/supervisi dan evaluasi diri penyelenggaraan kantin dan jajanan sehat di sekolah.",
          "Sumber Daya Manusia yang mempunyai pengetahuan dan keterampilan dalam mengelola kantin dan jajanan sehat di sekolah.",
          "Sarana dan Prasarana, yaitu kebersihan peralatan dan lingkungan.",
          "Mutu Pangan yang aman, sehat, dan bergizi.",
        ],
      },
    ],
    video: { title: "Happy Monday Episode 8: Tengok Isi Piringku", youtubeUrl: "https://www.youtube.com/watch?v=DF-0fcEbqWs" },
    tools: [
      { label: "Buku Saku Gizi Seimbang dan Kantin/Jajanan Sehat di Sekolah Dasar", href: "https://is3.cloudhost.id/storagedirectus1/manajemen_uks/files/publikasi/L4H44OkNQw3Oal3CXziuAuHDgoGZuTIQ3UogIaNT.pdf" },
      { label: "Poster Sehat Bergizi", href: "https://drive.google.com/file/d/1x3_NMNXdC_6a690be197NWgO1e8nurt4/view" },
      { label: "Leaflet Sehat Bergizi", href: "https://drive.google.com/file/d/1y4efWw89JPyv85Hld_XB8smlwGg1f90p/view" },
    ],
  },
  {
    id: "fisik",
    title: "Sehat Fisik",
    icon: "Award",
    summary: "Dalam rangka mengurangi risiko obesitas dan meningkatkan kesehatan peserta didik, pembiasaan aktivitas fisik perlu dilakukan.",
    activities: [
      "Pembiasaan peregangan, minimal 1 kali selama pembelajaran, misalnya Gerak Lagu Sekolah Sehat.",
      "Pembiasaan senam dan/atau kegiatan sejenis, minimal 1 kali seminggu.",
      "Pembiasaan permainan rakyat dan olahraga tradisional.",
      "Pembiasaan jalan kaki.",
      "Pelaksanaan Tes Kebugaran Peserta Didik (TKSI).",
    ],
    programs: [
      {
        title: "Senam Kebugaran Jasmani (SKJ)",
        description:
          "SKJ merupakan bentuk senam massal dengan rangkaian gerak tertentu dan diiringi musik, yang berguna meningkatkan kebugaran jasmani peserta didik. Senam kesegaran jasmani juga menjadi media untuk mendorong perkembangan keterampilan motorik, kemampuan fisik, pengetahuan, penalaran, penghayatan nilai (sikap, mental, emosional, spiritual, sosial), dan pembiasaan pola hidup sehat yang merangsang pertumbuhan serta perkembangan yang seimbang. Pelaksanaannya dapat dilakukan secara massal, mudah, dan tidak memerlukan waktu yang lama.",
        items: [
          "Frekuensi: sekali seminggu.",
          "Waktu: pagi hari sebelum kegiatan belajar mengajar, hari pelaksanaannya ditentukan oleh sekolah.",
          "Sarana: halaman sekolah/lapangan/aula, pemutar musik, laptop, LCD, dan layar proyektor.",
          "Durasi: 10 s.d. 15 menit.",
          "Instruktur: Guru Pendidikan Jasmani, Olahraga dan Kesehatan (PJOK) dan peserta didik yang sudah terampil atau dapat meniru gerakan pada tampilan layar proyektor.",
        ],
      },
      {
        title: "Optimalisasi 4L (Lari, Lompat, Loncat, Lempar) melalui Permainan Rakyat dan Olahraga Tradisional",
        description:
          "Permainan rakyat dan olahraga tradisional merupakan warisan kebudayaan nenek moyang bangsa Indonesia yang tumbuh dan berkembang dalam komunitas masyarakat, diwariskan dan dimainkan dari generasi ke generasi. Penerapannya saat jam istirahat di sekolah merupakan salah satu upaya melestarikan kekayaan budaya bangsa Indonesia melalui pendidikan dan menumbuhkan kembali karakter budaya bangsa, sekaligus wadah untuk mengembangkan kemampuan motorik dan kebugaran jasmani peserta didik.",
      },
      {
        title: "Gerakan Peregangan pada Pergantian Jam Pelajaran",
        description:
          "Gerakan peregangan adalah gerakan untuk meningkatkan fleksibilitas otot atau jangkauan gerak sendi, berguna bagi peserta didik sebelum melakukan aktivitas fisik dan untuk melemaskan kembali bagian tubuh yang kaku setelah beraktivitas. Gerakan ini dapat dilakukan bersama-sama di dalam kelas sesaat sebelum memulai pembelajaran, atau saat pergantian jam pelajaran maupun istirahat.",
      },
    ],
    video: { title: "Gerak Lagu Sekolah Sehat", youtubeUrl: "https://youtu.be/gl56oxJOWVo" },
    tools: [
      { label: "Buku Saku Gerak Ragaku di Sekolah", href: "https://drive.google.com/file/d/111Vwr0_RfervHeA2PBFqDgWpdNbf-Rol/view?usp=sharing" },
      { label: "Poster Sehat Fisik", href: "https://drive.google.com/file/d/1e3y7p6p8pJ0Wy_sCgjzSLZraaoY4x_tB/view?usp=sharing" },
      { label: "Leaflet Sehat Fisik", href: "https://drive.google.com/file/d/1eRBEUjU9s47-ZBZoymJdREb5a9C4E8Mm/view?usp=sharing" },
      // Curation note: tksi.kemdikbud.go.id does not resolve.
      { label: "Tes Kebugaran Siswa Indonesia (TKSI)", href: null },
    ],
  },
  {
    id: "imunisasi",
    title: "Sehat Imunisasi",
    icon: "Syringe",
    summary: "Sehat Imunisasi bertujuan untuk meningkatkan capaian imunisasi peserta didik untuk mendapatkan imunisasi dasar lengkap.",
    activities: [
      "Pemetaan Status Imunisasi: dilakukan dengan memeriksa riwayat imunisasi peserta didik berdasarkan catatan dari puskesmas atau fasilitas kesehatan lainnya, atau dengan meminta informasi dari orang tua/wali.",
      "Pemberian Rekomendasi: sekolah atau satuan pendidikan menyampaikan informasi dan rekomendasi kepada orang tua atau wali tentang peserta didik yang belum mendapatkan imunisasi lengkap agar melengkapi imunisasinya.",
      "Pelaksanaan Imunisasi Lengkap bagi Anak Usia Sekolah dalam Bulan Imunisasi Anak Sekolah (BIAS): sekolah bekerja sama dengan puskesmas atau fasilitas pelayanan kesehatan setempat untuk memfasilitasi dan mendukung pelaksanaan imunisasi pada bulan Agustus dan November.",
    ],
    programs: [
      {
        title: "Bulan Imunisasi Anak Sekolah (BIAS)",
        description:
          "BIAS adalah kegiatan nasional pemberian imunisasi pada anak usia SD/MI/bentuk lain yang sederajat, dilaksanakan dua kali setahun: bulan Agustus untuk imunisasi Campak Rubela dan HPV, serta bulan November untuk imunisasi DT dan Td.",
      },
      {
        title: "Sasaran, Jenis dan Jadwal Pemberian Imunisasi",
        description:
          "Sasaran BIAS adalah peserta didik kelas 1, 2, 5, dan 6 SD/MI/bentuk lain yang sederajat, serta anak usia sekolah yang tidak sekolah. Imunisasi pada BIAS bertujuan mencegah Campak, Rubela, Difteri, Tetanus Neonatorum, dan Kanker Leher Rahim, yang dapat menyebabkan disabilitas dan kematian. Setiap anak usia sekolah harus memiliki riwayat imunisasi rutin lengkap, tidak hanya pada saat bayi dan di bawah usia dua tahun, tetapi juga imunisasi lanjutan pada usia sekolah dasar.",
      },
    ],
    video: { title: "Ayo Imunisasi, Lindungi Mimpi", youtubeUrl: "https://youtu.be/b37DSZbalb4" },
    tools: [
      // Curation note: private Drive file (401), same file as bahan advokasi's Juknis BIAS.
      { label: "Petunjuk Teknis BIAS", href: null },
      { label: "Komik BIAS", href: "https://drive.google.com/file/d/1PaSDbNYyERXOWtwAjPbBnxXJ-wTYWe1t/view?usp=sharing" },
      { label: "Surat Keputusan Bersama terkait Penyelenggaraan Peningkatan Status Kesehatan Peserta Didik", href: "https://drive.google.com/file/d/1dZYXFGOiulz1SGugKj3UO4E8Qy4_82hr/view?usp=sharing" },
      { label: "Poster Sehat Imunisasi", href: "https://drive.google.com/file/d/1ToqVG_nTxJMMwyBz4Uad0NGE_Z699u00/view?usp=sharing" },
      { label: "Leaflet Sehat Imunisasi", href: "https://drive.google.com/file/d/1z5mbEois0XzOpqmIQF33Tox85Y7tEknt/view?usp=sharing" },
    ],
  },
  {
    id: "jiwa",
    title: "Sehat Jiwa",
    icon: "Smile",
    summary:
      "Sehat Jiwa bertujuan untuk meningkatkan perkembangan kesehatan fisik, mental, spiritual, dan sosial sehingga peserta didik mampu menyadari kemampuan sendiri, mengatasi tekanan, bekerja/belajar secara optimal, dan memberikan kontribusi untuk komunitasnya.",
    activities: [
      "Sosialisasi Pencegahan dan Penanganan Kekerasan di Satuan Pendidikan, salah satunya pada saat pelaksanaan Masa Pengenalan Lingkungan Sekolah (MPLS).",
      "Sosialisasi kesehatan jiwa minimal satu kali dalam satu semester.",
      "Pelaksanaan doa bersama sebelum dan sesudah pembelajaran.",
      "Peningkatan pemahaman dan kapasitas pendidik terkait kesehatan jiwa.",
      "Pelaksanaan skrining kesehatan jiwa peserta didik melalui koordinasi dan kerja sama dengan Puskesmas.",
    ],
    programs: [
      {
        title: "Sosialisasi Kesehatan Jiwa di Lingkungan Sekolah",
        description:
          "Sosialisasi dilakukan bersama tenaga kesehatan dari Dinas Kesehatan, Puskesmas, atau narasumber lain, minimal 1 kali dalam 1 semester. Topik yang bisa dipilih meliputi:",
        items: [
          "Mengenali dan mengatur emosi, perilaku, dan keterampilan psiko-sosial.",
          "Pencegahan peredaran dan penggunaan Narkotika, Psikotropika, dan Zat Adiktif lainnya (NAPZA).",
          "Pemanfaatan internet/media sosial secara sehat dan bijaksana.",
        ],
      },
      {
        title: "Aplikasi SIJIWA untuk Skrining Kesehatan Jiwa Peserta Didik",
        description:
          "Skrining kesehatan jiwa dilakukan untuk mengetahui masalah kesehatan jiwa yang dialami peserta didik, agar mempermudah konseling dan penanganan lanjutan, menggunakan aplikasi Sistem Informasi Jiwa (SIJIWA) yang dikembangkan oleh Kementerian Kesehatan (informasi terkait aplikasi ini dan cara pengisiannya dapat menghubungi Puskesmas setempat). Pengisian dapat dilakukan oleh masing-masing peserta didik atau bersama-sama dengan dipandu oleh satuan pendidikan bekerja sama dengan Puskesmas setempat.",
      },
      {
        title: "Ayo, Cegah Bullying di Sekolah!",
        description: "Upaya pencegahan dan penanganan kekerasan di lingkungan satuan pendidikan bertujuan untuk:",
        items: [
          "Mencegah terjadinya kekerasan di lingkungan satuan pendidikan.",
          "Melaporkan kekerasan yang dialami dan/atau diketahuinya.",
          "Mampu mencari dan mendapatkan bantuan ketika mengalami kekerasan.",
          "Segera mendapatkan penanganan dan bantuan yang menyeluruh jika mengalami kekerasan.",
        ],
      },
    ],
    // Curation note: source video is mislabeled (duplicate of another page's clip) and was removed pending the correct one.
    tools: [
      { label: "Modul PPKSP — PAUD", href: "https://drive.google.com/file/d/1zmbUcn17p9Ulm3_4CmVojONdxdGWCA8B/view" },
      { label: "Modul PPKSP — SD", href: "https://drive.google.com/file/d/1jYZBf064d-Voj6-HK9PHnXGcn6yDYPof/view" },
      { label: "Modul PPKSP — SMP", href: "https://drive.google.com/file/d/18j8p1APYb8E-s82FEYBruhY4IycDhh-m/view" },
      { label: "Modul PPKSP — SMA/SMK", href: "https://drive.google.com/file/d/1cfeh36SLUdtorHoksx8jbBMwP30zvQLr/view" },
      // Curation note: link is actually the Poster Sehat Bergizi file.
      { label: "Modul Ayo Atasi Perundungan (AAP)", href: null },
      // Curation note: Play Store listing is 404.
      { label: "Aplikasi SIJIWA", href: null },
    ],
  },
  {
    id: "lingkungan",
    title: "Sehat Lingkungan",
    icon: "TreePine",
    summary:
      "Lingkungan sekolah sehat dapat mendukung tumbuh kembang peserta didik secara optimal serta membentuk perilaku hidup bersih dan sehat serta terhindar dari pengaruh negatif.",
    activities: [
      "Pembiasaan Cuci Tangan Pakai Sabun (CTPS) dengan air mengalir.",
      "Pembiasaan buang sampah ke tempat sampah tertutup dan terpilah.",
      "Kerja bakti kebersihan sekolah dan/atau penghijauan sekolah minimal sebulan sekali.",
      "Penerapan Kawasan Tanpa Rokok/Vaping di lingkungan sekolah.",
      "Penyediaan dan pemeliharaan toilet agar berfungsi dengan baik dan bersih serta terpisah antara toilet laki-laki dan perempuan.",
      "Penyediaan Kantin Sehat.",
      "Pengaturan ruangan yang memiliki penghawaan dan pencahayaan natural.",
    ],
    programs: [
      {
        title: "Ayo, Biasakan Cuci Tangan Pakai Sabun (CTPS) dengan Air Mengalir",
        description:
          "CTPS dilakukan sebelum masuk kelas, sebelum makan, sebelum dan setelah menggunakan toilet, setelah menggunakan fasilitas bersama, dan lain-lain. Langkah-langkah CTPS yang benar:",
        items: [
          "Membasahi kedua tangan dengan air bersih yang mengalir.",
          "Menggosokkan sabun pada kedua telapak tangan sampai berbusa, lalu menggosok kedua punggung tangan, jari jemari, dan kedua jempol, sampai semua permukaan kena busa sabun.",
          "Membersihkan ujung-ujung jari dan sela-sela di bawah kuku.",
          "Membilas dengan air bersih sambil menggosok-gosok kedua tangan sampai sisa sabun hilang.",
          "Mengeringkan kedua tangan dengan kain atau handuk bersih, kertas tisu, atau mengibas-ibaskan kedua tangan sampai kering.",
        ],
      },
      {
        title: "Bijak Mengelola Sampah dengan Prinsip 3R",
        description:
          "Pemilahan sampah di satuan pendidikan dapat dilakukan dengan memilah sampah organik, anorganik, dan residu, serta menerapkan prinsip Reduce, Reuse, Recycle:",
        items: [
          "Reduce (Mengurangi): mengurangi produksi limbah dengan mengurangi penggunaan barang sekali pakai atau langkah-langkah lain untuk mengurangi konsumsi sumber daya alam.",
          "Reuse (Menggunakan Ulang): menggunakan kembali barang atau bahan yang masih dapat digunakan setelah pemakaian awalnya.",
          "Recycle (Mendaur Ulang): proses mengubah bahan bekas menjadi bahan baru yang dapat digunakan kembali.",
        ],
      },
    ],
    // Curation note: source video is mislabeled (duplicate of another page's clip) and was removed pending the correct one.
    tools: [
      { label: "Buku Saku Kantin dan Jajanan Sehat di Sekolah", href: "https://is3.cloudhost.id/storagedirectus1/manajemen_uks/files/publikasi/L4H44OkNQw3Oal3CXziuAuHDgoGZuTIQ3UogIaNT.pdf" },
      // Curation note: old-domain infografis page does not resolve.
      { label: "Poster Prosedur Pembersihan Toilet", href: null },
      // Curation note: link is actually the Leaflet Sehat Bergizi file.
      { label: "Leaflet Sehat Lingkungan", href: null },
    ],
  },
];

/**
 * The source menu spec flagged an open question: the homepage's five
 * "Fokus Sekolah Sehat" cards all point at one shared page (confirmed by
 * the client), while the nav listed five separate entries — inconsistent,
 * and the client had already asked for it to be simplified. This page
 * resolves it the way the client wanted: one page, five anchored tabs
 * (#bergizi, #fisik, #imunisasi, #jiwa, #lingkungan).
 */
export const sekolahSehatPage: PageContent = {
  slug: "/sekolah-sehat",
  title: "Gerakan Sekolah Sehat",
  seoDescription: "Lima fokus Gerakan Sekolah Sehat: gizi, fisik, imunisasi, jiwa, dan lingkungan, dilengkapi bahan advokasi GSS.",
  crumbs: [{ label: "Sekolah Sehat" }],
  blocks: [
    {
      type: "hero",
      eyebrow: "Sekolah Sehat",
      title: "Gerakan Sekolah Sehat",
      lead: "Merupakan segala upaya yang dilakukan secara bersama-sama dan terus-menerus oleh semua pihak, mulai dari pemerintah pusat sampai pemerintah daerah, para mitra, satuan pendidikan, dan masyarakat pemangku kepentingan lainnya, tentang pentingnya penerapan Sekolah Sehat dengan berfokus pada Sehat Bergizi, Sehat Fisik, Sehat Imunisasi, Sehat Jiwa, dan Sehat Lingkungan di satuan pendidikan.",
    },
    {
      type: "richText",
      title: "Manfaat dan Sasaran Gerakan Sekolah Sehat",
      nodes: [
        { kind: "h3", text: "Manfaat" },
        {
          kind: "ul",
          items: [
            "Peserta Didik: pembudayaan Sehat Bergizi, Sehat Fisik, dan Sehat Imunisasi agar status kesehatan meningkat dan dapat mengikuti proses pembelajaran dengan baik.",
            "Pendidik dan Tenaga Kependidikan: peningkatan kesehatan agar dapat melaksanakan tugas dan fungsinya dengan baik.",
            "Orang Tua dan Masyarakat: berperan dalam usaha peningkatan derajat/status kesehatan peserta didik, baik di sekolah maupun di rumah.",
          ],
        },
        { kind: "h3", text: "Sasaran" },
        {
          kind: "ul",
          items: [
            "Pemerintah Provinsi/Kabupaten/Kota.",
            "Sekolah/Satuan Pendidikan di semua jalur, jenjang, dan jenis pendidikan (PAUD, SD/MI/Sederajat, SMP/MTs/Sederajat, SMA/SMK/MA/MAK/Sederajat, SLB, SKB, dan PKBM).",
            "Peserta Didik, Pendidik dan Tenaga Kependidikan, Komite Sekolah, Orang Tua, dan Masyarakat.",
          ],
        },
      ],
    },
    {
      type: "focusTabs",
      title: "Lima Fokus Gerakan Sekolah Sehat",
      intro: "Kelima fokus ini saling terkait dan dilaksanakan bersamaan sebagai satu kesatuan Gerakan Sekolah Sehat, bukan program yang berdiri sendiri-sendiri.",
      sections: focusSections,
    },
    {
      type: "advocacyList",
      anchorId: "bahan-advokasi",
      title: "Bahan Advokasi",
      intro: "Materi advokasi Gerakan Sekolah Sehat tersedia bagi dinas pendidikan, kepala sekolah, dan pemangku kepentingan lain untuk mendukung sosialisasi program di daerah masing-masing.",
      groups: [
        { title: "Produk Hukum", items: produkHukumItems },
        { title: "Materi Kampanye Sekolah Sehat", items: materiKampanyeItems },
      ],
    },
    {
      type: "ctaBand",
      title: "Gerakan Madrasah Sehat",
      description: "Untuk satuan pendidikan di bawah Kementerian Agama, program sejenis dijalankan lewat Gerakan Madrasah Sehat.",
      actions: [{ label: "Kunjungi Gerakan Madrasah Sehat", href: "https://madrasah.kemenag.go.id/madrasahsehat/", external: true }],
    },
  ],
};
