import type { PageContent, SubProgram } from "../types";

export const tentangUksPage: PageContent = {
  slug: "/uksm/tentang",
  title: "Tentang UKS/M",
  seoDescription:
    "Usaha Kesehatan Sekolah/Madrasah (UKS/M): mewujudkan generasi sehat lewat sekolah, melalui tiga pilar utama Trias UKS/M.",
  crumbs: [{ label: "UKS/M" }, { label: "Tentang UKS/M" }],
  blocks: [
    {
      type: "hero",
      eyebrow: "UKS/M",
      title: "Usaha Kesehatan Sekolah/Madrasah",
      lead:
        "Usaha Kesehatan Sekolah/Madrasah (UKS/M) merupakan kegiatan yang dilakukan untuk meningkatkan kesehatan anak usia sekolah pada setiap jalur, jenis, dan jenjang pendidikan. UKS/M diwujudkan melalui pelaksanaan Trias UKS/M.",
    },
    {
      type: "richText",
      title: "Trias UKS/M",
      nodes: [
        {
          kind: "ul",
          items: [
            "Pendidikan Kesehatan — kegiatan yang ditujukan untuk meningkatkan pengetahuan, sikap, dan perilaku serta keterampilan hidup sehat, dilakukan melalui intrakurikuler, ekstrakurikuler dan kokurikuler.",
            "Pelayanan Kesehatan — setiap upaya yang diselenggarakan sendiri atau bersama-sama untuk memelihara dan meningkatkan kesehatan melalui upaya promotif, preventif, kuratif dan rehabilitatif, meliputi skrining kesehatan, pemberian suplementasi, P3K, P3P, P3LP, imunisasi, konseling dan rujukan.",
            "Pembinaan Lingkungan Sekolah Sehat — usaha menciptakan kondisi lingkungan sekolah yang sehat secara fisik, sosial dan emosional, melalui penyediaan sarana prasarana (air bersih, toilet, sarana CTPS, tempat sampah) serta kegiatan pembinaan lingkungan seperti kantin, pengelolaan sampah dan pemanfaatan pekarangan sekolah.",
          ],
        },
      ],
    },
    {
      type: "richText",
      title: "Tujuan UKS/M",
      // TODO(content): P-02 has two official wordings — Deskripsi Umum and the
      // dedicated Tujuan page differ (goal vs. means, "optimal" vs "harmonis").
      // Using the Tujuan page's own wording here, per the curation decision in
      // docs/content-source/profil-tata-kelola/profil-tata-kelola-curation.md ("Use the Tujuan page sentence,
      // pending owner confirmation"). See that file's "Open items" #2 for the
      // alternate Deskripsi Umum wording and the exact differences.
      nodes: [
        { kind: "h3", text: "Yang ingin dicapai" },
        { kind: "p", text: "Meningkatkan mutu pendidikan dan prestasi belajar peserta didik." },
        { kind: "h3", text: "Caranya" },
        {
          kind: "p",
          text: "Dengan meningkatkan perilaku hidup bersih dan sehat serta menciptakan lingkungan pendidikan yang sehat.",
        },
        { kind: "h3", text: "Hasilnya" },
        { kind: "p", text: "Memungkinkan pertumbuhan dan perkembangan yang harmonis bagi peserta didik." },
      ],
    },
    {
      type: "orgStructure",
      title: "Struktur Organisasi",
      intro: "UKS/M dijalankan lewat dua tim yang bekerja berjenjang, dari pusat hingga satuan pendidikan.",
      groups: [
        {
          title: "Tim Pembina UKS/M (TP UKS/M)",
          description:
            "Organisasi yang menangani UKS/M, baik di tingkat pusat, provinsi, kabupaten/kota, dan kecamatan. Dibentuk untuk melaksanakan tugas pembinaan dan pengembangan UKS secara terpadu dan terkoordinasi pada setiap jenjang pemerintahan.",
        },
        {
          title: "Tim Pelaksana UKS/M",
          description:
            "Organisasi yang melaksanakan UKS/M, berkedudukan di sekolah, berfungsi sebagai penanggung jawab dan pelaksana program UKS berdasarkan prioritas kebutuhan dan kebijakan yang ditetapkan oleh TP UKS Kabupaten/Kota.",
        },
      ],
    },
    {
      type: "cardGrid",
      title: "Sasaran UKS/M",
      intro:
        "UKS/M adalah usaha kesehatan yang ada di dalam lingkungan sekolah maupun di sekitarnya, dengan sasaran utama peserta didik, pendidik, tenaga kependidikan, beserta masyarakat sekolah lainnya, bertujuan meningkatkan kemampuan hidup sehat sehingga peserta didik dapat belajar, tumbuh dan berkembang secara harmonis serta optimal, menjadi sumber daya manusia yang berkualitas.",
      columns: 4,
      cards: [
        { title: "Peserta Didik" },
        { title: "Pendidik" },
        { title: "Tenaga Kependidikan" },
        { title: "Masyarakat Sekolah Lainnya" },
      ],
    },
    {
      type: "richText",
      title: "Stakeholder Pendukung",
      nodes: [
        {
          kind: "ul",
          items: [
            "Kepala Sekolah",
            "GTK (Guru dan Tenaga Kependidikan)",
            "Peserta Didik",
            "Komite Sekolah",
            "Masyarakat Setempat",
            "Puskesmas",
          ],
        },
      ],
    },
    {
      type: "ctaBand",
      title: "Ingin tahu lebih dalam soal tiga pilar UKS/M?",
      description:
        "Pendidikan Kesehatan, Pelayanan Kesehatan, dan Pembinaan Lingkungan Sekolah Sehat, lengkap dengan program turunannya.",
      actions: [{ label: "Lihat Trias UKS/M", href: "/uksm/trias", variant: "primary" }],
    },
  ],
};

const pendidikanKesehatanItems: SubProgram[] = [
  {
    id: "literasi-kesehatan",
    title: "Literasi Kesehatan",
    description:
      "Literasi merupakan kemampuan mengakses, memahami melalui berbagai aktivitas membaca, melihat, menyimak, menyampaikan dan mempraktekkan. Gerakan Literasi Sekolah (GLS) merupakan kegiatan partisipatif yang melibatkan peserta didik, guru, warga sekolah/madrasah dan pemangku kepentingan lainnya. Literasi dapat menggunakan berbagai materi termasuk kesehatan. Dalam rangka meningkatkan penerapan Trias UKS/M, literasi yang diselenggarakan di sekolah/madrasah diantaranya meliputi literasi kesehatan, yang diberikan dengan cara interaktif, menarik dan partisipatif. Contoh literasi kesehatan seperti diskusi dengan guru kelas, pembuatan proyek terkait kesehatan (misal video dan poster kesehatan atau melalui permainan bertema kesehatan). Kegiatan ini dilaksanakan dengan tujuan untuk memastikan pesan kunci kesehatan dapat tersampaikan dengan baik kepada peserta didik.",
    waktu:
      "Dilakukan secara rutin dalam jam literasi minimal 1 minggu 1 kali selama 15 menit. Waktu pelaksanaan dapat ditambah dan disesuaikan dengan kebijakan masing-masing sekolah/madrasah.",
    tempat: "Masing-masing kelas atau luar kelas.",
    pelaksana: "Guru kelas, guru mata pelajaran pada sesi literasi sekolah/madrasah, peserta didik.",
    sections: [
      {
        heading: "Sarana",
        kind: "bulletList",
        items: [
          "Buku Rapor Kesehatanku seri Informasi Kesehatan, Buku Aksi Bergizi dan Buku/Media KIE kesehatan lainnya.",
          "Permainan-permainan bertema kesehatan.",
          "Aplikasi dan media KIE yang dikeluarkan Kementerian Kesehatan yang bisa diakses melalui www.kesga.kemkes.go.id, twitter/instagram/facebook Ditkesga, YouTube Direktorat Kesehatan Keluarga, www.kemkes.go.id, dan www.promkes.kemkes.go.id, dan lain-lain.",
        ],
      },
      {
        heading: "Langkah-langkah",
        kind: "numberList",
        items: [
          "Sekolah/madrasah mengalokasikan waktu dan jam literasi kesehatan minimal 1 (satu) kali seminggu.",
          "Guru UKS/M membuat jadwal literasi kesehatan berdasarkan topik-topik dalam Buku Rapor Kesehatan Seri Informasi Kesehatan atau materi kesehatan lainnya yang dibutuhkan. Topik literasi kesehatan juga dapat ditambahkan dengan topik kesehatan kekinian.",
        ],
      },
    ],
  },
  {
    id: "perilaku-hidup-bersih-dan-sehat",
    title: "Perilaku Hidup Bersih dan Sehat",
    // TODO(content): T-03 needs its own copy. Both the prod and dev sources
    // wrongly reuse the "Sanitasi Sekolah" article's text for this sub-program
    // — see the note under "02. Perilaku Hidup Bersih dan Sehat" in
    // docs/content-source/trias-uks-content.MD. This description is a short, neutral stand-in
    // until real PHBS-specific copy is written.
    description:
      "Perilaku Hidup Bersih dan Sehat (PHBS) membiasakan seluruh warga sekolah/madrasah menerapkan pola hidup bersih dan sehat dalam kegiatan sehari-hari di lingkungan sekolah, sebagai bagian dari penerapan Trias UKS/M.",
  },
  {
    id: "pendidikan-gizi",
    title: "Pendidikan Gizi",
    description:
      "Pendidikan gizi merupakan upaya untuk mengubah sikap dan perilaku untuk mendukung pemenuhan gizi seimbang pada peserta didik. Pemenuhan gizi seimbang sangat penting dilakukan untuk meningkatkan pencapaian pertumbuhan dan perkembangan peserta didik yang optimal sehingga mereka dapat mengikuti proses pembelajaran secara lebih baik.",
    waktu:
      "Kegiatan sarapan bersama dilaksanakan minimal satu kali dalam seminggu sebelum jam pelajaran pertama, berurutan pada hari yang sama dengan kegiatan cuci tangan pakai sabun, pemberian tablet tambah darah bagi peserta didik puteri tingkat SMP/MTs dan SMA/SMK/MA, dan sikat gigi bersama.",
    tempat:
      "Kelas masing-masing atau di luar kelas yang kondusif. Untuk pelaksanaan yang lebih tertib dan cepat, disarankan dilaksanakan di kelas masing-masing dengan pengawasan guru kelas.",
    pelaksana: "Guru kelas, kader kesehatan sekolah/madrasah, peserta didik.",
    sections: [
      {
        heading: "Kegiatan",
        kind: "numberList",
        items: [
          "Pemahaman akan gizi seimbang atau Isi Piringku, termasuk contoh pada saat acara-acara yang diselenggarakan di sekolah (rapat komite sekolah, acara kesenian, ulang tahun sekolah, Hari Guru, dan sebagainya).",
          "Sarapan bersama dengan gizi seimbang. Umpan balik dari guru kelas terhadap sarapan bersama yang dibawa peserta didik.",
          "Konsumsi tablet tambah darah.",
          "Menghindari/meminimalisir makanan siap saji, makanan/minuman yang berpemanis, pengawet, kurang serat, tinggi gula, garam, dan lemak.",
          "Pendidikan gizi diberikan kepada petugas kantin, pedagang kaki lima, dan warung di sekitar sekolah untuk menghindari menjajakan makanan siap saji, makanan/minuman yang berpemanis, pengawet, kurang serat, tinggi gula, garam, dan lemak.",
          "Peserta didik diminta untuk membawa bekal dari rumah sesuai dengan prinsip Isi Piringku dan membawa air putih secukupnya. Sarapan bersama dilakukan sebelum atau sekitar pukul 07.00 pagi agar dapat mendukung proses pembelajaran. Aktivitas fisik diajarkan dan diaktifkan kepada semua peserta didik untuk mencegah dan meminimalisir kelebihan berat badan termasuk obesitas.",
        ],
      },
      {
        heading: "Sarana",
        kind: "bulletList",
        items: [
          "Bekal sarapan menu bergizi seimbang yang dibawa oleh masing-masing peserta didik dan makanan atau minuman pada acara sekolah.",
          "Sarana cuci tangan dengan sabun dan air mengalir.",
          "Materi edukasi gizi seperti modul Aksi Bergizi untuk fasilitator dan Buku Saku Aksi Bergizi untuk peserta didik, atau materi edukasi gizi lainnya yang dikeluarkan Kemenkes/sumber lainnya yang diakui kebenarannya (digital/bahan cetak).",
        ],
      },
      {
        heading: "Langkah-langkah",
        kind: "numberList",
        items: [
          "Orang tua/wali menyiapkan bekal sarapan dengan menu gizi seimbang untuk dibawa ke sekolah/madrasah sesuai dengan jadwal yang telah ditentukan.",
          "Peserta didik melaksanakan sarapan di kelas masing-masing didampingi oleh guru kelas: mencuci tangan dengan sabun dan air mengalir sebelum makan, berdoa, sarapan bersama dengan menu bergizi seimbang, diakhiri minum tablet tambah darah khusus bagi remaja putri, minum air putih, membuang sampah pada tempatnya, dan mencuci tangan dengan sabun dan air mengalir setelah sarapan.",
          "Pada saat peserta didik melaksanakan sarapan bersama, guru memantau menu makanan yang dibawa peserta didik dan memastikan menu yang dibawa adalah menu gizi seimbang sesuai dengan ketentuan Isi Piringku.",
          "Dalam memantau pelaksanaan sarapan bersama, guru kelas dapat dibantu oleh kader kesehatan sekolah/madrasah pokja gizi di masing-masing kelas.",
          "Guru menyampaikan pendidikan gizi kepada peserta didik sesuai topik yang ada di buku Aksi Bergizi, buku rapor seri informasi dan buku lainnya.",
        ],
      },
      {
        heading: "Tautan Penting",
        kind: "linkList",
        // Both links have no URL in the source (dev build) — rendered as
        // plain, non-clickable text. See T-04 in docs/reports/content-inventory.md.
        links: [
          { label: "Pendidikan untuk Anak (Nutrition Education for Children)", url: null },
          { label: "Pendidikan untuk Orang Tua (Nutrition Education for Parents)", url: null },
        ],
      },
    ],
  },
  {
    id: "pendidikan-kesehatan-reproduksi",
    title: "Pendidikan Kesehatan Reproduksi",
    description:
      "Kesehatan reproduksi adalah keadaan sehat secara fisik, mental dan sosial secara utuh, tidak semata-mata terbebas dari penyakit atau kecacatan yang berkaitan dengan sistem, fungsi dan proses reproduksi. Pendidikan kesehatan reproduksi di sekolah/madrasah sangat penting mengingat belum tersosialisasikannya secara menyeluruh cara perawatan kebersihan organ reproduksi, perilaku seksual pranikah, kehamilan anak yang berisiko dan masalah reproduksi pada peserta didik saat ini dan setelah dewasa. Materi yang diberikan antara lain: konsep dasar pendidikan kesehatan reproduksi; nilai, norma, batasan diri dan hubungan dengan orang lain; pertumbuhan dan perkembangan peserta didik; masalah kesehatan reproduksi peserta didik; gender dan kekerasan; teknologi, informasi dan komunikasi; serta dukungan dan layanan masalah kesehatan reproduksi di sekolah.",
    waktu:
      "Intrakurikuler: sedikitnya 1 kali setiap minggu pada jam pelajaran Guru BK/Guru kelas atau terintegrasi pada mata pelajaran lain seperti IPA atau PJOK. Kokurikuler: sedikitnya 1 kali setiap minggu. Ekstrakurikuler: sedikitnya 1 kali setiap minggu melalui kegiatan interaktif/permainan.",
    pelaksana: "Guru kelas, guru mata pelajaran IPA, PJOK, guru UKS/M, peserta didik.",
    sections: [
      {
        heading: "Kegiatan",
        kind: "numberList",
        items: [
          "Pemberian materi kesehatan reproduksi kepada peserta didik disesuaikan dengan usia, tingkat pendidikan dan terintegrasi dengan mata pelajaran (diberikan dalam bentuk permainan dan diskusi kasus) secara intrakurikuler, kokurikuler dan ekstrakurikuler.",
        ],
      },
      {
        heading: "Sarana",
        kind: "bulletList",
        items: ["Buku-buku pedoman/panduan kesehatan reproduksi/rencana aksi guru.", "Video tutorial dan media KIE lainnya."],
      },
      {
        heading: "Langkah-langkah",
        kind: "numberList",
        items: [
          "Intrakurikuler: pendidikan kesehatan reproduksi diberikan melalui program Aksi Guru secara berjenjang dari Direktorat GTK (Guru & Tenaga Kependidikan) Kemendikbud.",
          "Kokurikuler: dilaksanakan seperti alur pemberian pelajaran melalui kokurikuler seperti biasanya.",
          "Ekstrakurikuler: dilaksanakan sedikitnya 1 kali setiap minggu dengan memberikan pemahaman dan keterampilan terkait kesehatan reproduksi. Guru menyampaikan pendidikan kesehatan reproduksi melalui diskusi, bermain peran, studi kasus dan permainan.",
        ],
      },
    ],
  },
  {
    id: "pendidikan-karakter",
    title: "Pendidikan Karakter",
    description:
      "Pendidikan Keterampilan Hidup Sehat (PKHS) adalah kemampuan psikososial seseorang untuk memenuhi kebutuhan dan mengatasi masalah dalam kehidupan sehari-hari secara efektif. PKHS berperan besar dalam membantu peserta didik mengatasi masalah kesehatannya. Ada 10 keterampilan hidup sehat yang wajib diketahui dan dipraktikkan peserta didik dalam kehidupan sehari-hari, yaitu: empati; kesadaran diri; pengambilan keputusan; pemecahan masalah; berpikir kreatif; berpikir kritis; komunikasi efektif; hubungan interpersonal; mengendalikan emosi; dan mengatasi stres.",
    waktu:
      "Intrakurikuler: sedikitnya 1 kali setiap minggu pada jam pelajaran Guru BK/Guru kelas atau terintegrasi pada mata pelajaran lain yang sesuai. Kokurikuler: sedikitnya 1 kali setiap minggu. Ekstrakurikuler: sedikitnya 1 kali setiap minggu melalui kegiatan interaktif/permainan.",
    tempat: "Di kelas atau di luar kelas yang kondusif untuk pelaksanaan PKHS.",
    pelaksana: "Guru kelas, guru mata pelajaran, guru UKS/M, peserta didik.",
    sections: [
      {
        heading: "Kegiatan",
        kind: "numberList",
        items: [
          "Pendidikan keterampilan hidup sehat dilakukan dengan cara pemberian informasi dan keterampilan melalui metode-metode partisipatif yang dapat mendorong peserta didik memahami dan mempraktikkan keterampilan hidup sehat.",
          "PKHS dilaksanakan secara terintegrasi dengan mata pelajaran yang sesuai, seperti bimbingan dan konseling di tingkat SMP/SMA atau sederajatnya, di setiap pelajaran tematik di tingkat PAUD (TK/RA/KB/BA/TPA/SPS) dan SD, atau sesi khusus guru kelas.",
          "PKHS juga dapat dilakukan terintegrasi, contohnya dengan pendidikan kesehatan reproduksi, pendidikan gizi dan PHBS, dan lain-lain.",
        ],
      },
      {
        heading: "Sarana",
        kind: "bulletList",
        items: [
          "Buku pedoman PKHS Kementerian Kesehatan.",
          "Buku Petunjuk Pelaksanaan Pelayanan Kesehatan Jiwa di Sekolah Kementerian Kesehatan.",
          "Buku Pendidikan Keterampilan Hidup Kementerian Pendidikan dan Kebudayaan.",
          "Beberapa media KIE dan video tutorial yang digunakan untuk mendukung pembelajaran terkait konten PKHS.",
        ],
      },
    ],
  },
  {
    id: "pembiasaan-aktivitas-fisik",
    title: "Pembiasaan Aktivitas Fisik",
    description:
      "Pembiasaan aktivitas fisik merupakan pembiasaan kegiatan aktivitas fisik di sekolah untuk mendukung pencapaian pertumbuhan dan perkembangan yang optimal, menjaga kebugaran dan mencegah risiko terkena penyakit tidak menular.",
    waktu:
      "Peregangan pada pergantian jam pelajaran atau saat peserta didik mulai bosan dan lelah di kelas, minimal 1 kali per hari. Optimalisasi 4L minimal 1 kali per hari pada jam istirahat untuk jenjang SD/MI. Optimalisasi olahraga sesuai jam mata pelajaran olahraga. Ekstrakurikuler wajib olahraga/beladiri/kesenian minimal satu kali per minggu.",
    tempat:
      "Peregangan dilaksanakan di kelas. Kegiatan optimalisasi aktivitas fisik lainnya dilaksanakan di lapangan sekolah/madrasah atau lingkungan sekolah/madrasah yang kondusif.",
    pelaksana: "Peserta didik, guru kelas, guru mata pelajaran, dan guru PJOK.",
    sections: [
      {
        heading: "Kegiatan",
        kind: "numberList",
        items: [
          "Gerakan peregangan pada pergantian jam pelajaran.",
          "Optimalisasi 4 (empat) L (Lompat, Lari, Lempar, Loncat) pada jam istirahat khusus bagi peserta didik SD/MI.",
          "Ekstrakurikuler wajib olahraga/beladiri/kesenian bagi peserta didik SMP/MTs dan SMA/SMK/MA.",
          "Optimalisasi jam pelajaran olahraga.",
        ],
      },
      {
        heading: "Sarana",
        kind: "bulletList",
        items: [
          "Kreasi gerakan peregangan yang dapat dibuat oleh guru atau peserta didik, misalnya gerak kapiten, gerak penguin, dan lain-lain, dapat diiringi lagu melalui sound system atau bernyanyi sendiri.",
          "Halaman sekolah/madrasah atau aula yang dapat digunakan sebagai tempat bermain/olahraga.",
          "Sarana dan prasarana olahraga.",
        ],
      },
      {
        heading: "Langkah-langkah",
        kind: "numberList",
        items: [
          "Guru dan peserta didik melakukan kreasi gerakan peregangan.",
          "Guru meminta peserta didik untuk memimpin peregangan secara bergantian, ditandai dengan bunyi bel atau lonceng.",
          "Sekolah/madrasah mendorong peserta didik untuk bermain dan berolahraga yang mengandung gerakan 4L saat jam istirahat.",
          "Sekolah/madrasah menginformasikan dan mendorong ekstrakurikuler olahraga/beladiri/kesenian sebagai ekstrakurikuler wajib.",
          "Guru PJOK mendorong peserta didik untuk melaksanakan olahraga secara optimal minimal pada jam pelajaran olahraga.",
          "Sekolah/madrasah menyediakan sarana dan prasarana untuk mendukung peningkatan olahraga berprestasi di sekolah/madrasah.",
        ],
      },
    ],
  },
  {
    id: "dokter-kecil",
    title: "Dokter Kecil",
    description:
      "Dokter kecil adalah peserta didik yang memenuhi kriteria dan telah dilatih untuk ikut melaksanakan sebagian usaha pemeliharaan dan peningkatan kesehatan terhadap diri sendiri, teman, keluarga dan lingkungannya.",
    sections: [
      {
        heading: "Tugas",
        kind: "numberList",
        items: [
          "Menggerakkan dan membimbing teman menerapkan Trias UKS.",
          "Membantu petugas kesehatan dalam P3K dan P3P.",
          "Memperoleh pembekalan materi pelatihan.",
          "Pengamatan kebersihan.",
          "Pencatatan pelaporan.",
          "Membantu guru untuk hal-hal khusus.",
        ],
      },
    ],
  },
];

const pelayananKesehatanItems: SubProgram[] = [
  {
    id: "penjaringan-kesehatan-dan-pemeriksaan-berkala",
    title: "Penjaringan Kesehatan dan Pemeriksaan Berkala",
    description:
      "Penjaringan kesehatan merupakan rangkaian pemeriksaan kesehatan (skrining) yang dilakukan pada seluruh peserta didik baru yaitu kelas 1 SD/MI, 7 SMP/MTs dan 10 SMA/SMK/MA (entry level), sedangkan pemeriksaan berkala adalah rangkaian pemeriksaan kesehatan (skrining) yang dilakukan pada seluruh peserta didik kelas 2-6 SD/MI, 8-9 SMP/MTs dan 11-12 SMA/SMK/MA. Pada masa pandemi, skrining sederhana dapat dilakukan langsung oleh peserta didik didampingi orang tua menggunakan formulir pemantauan kesehatan mandiri anak usia sekolah dan remaja pada masa pandemi COVID-19.",
    sections: [
      {
        heading: "Kegiatan",
        kind: "numberList",
        items: [
          "Pemeriksaan kesehatan menggunakan kuesioner berisi pertanyaan mengenai riwayat kesehatan keluarga, diri, imunisasi dan perilaku terkait kesehatan lainnya, diisi oleh masing-masing peserta didik. Bagi peserta didik kelas 1-3 SD/MI atau di SLB, pengisian dapat dibantu oleh orang tua/wali/guru.",
          "Pemeriksaan kesehatan secara fisik oleh sekolah/madrasah (guru dan kader kesehatan sekolah) dan petugas Puskesmas. Pemeriksaan oleh sekolah/madrasah antara lain pengukuran tinggi badan, berat badan, tekanan darah, ketajaman penglihatan dan kebersihan diri (kuku, rambut) serta kebugaran jasmani. Pemeriksaan oleh Puskesmas meliputi pemeriksaan klinis seperti gigi dan mulut, telinga, denyut jantung dan pernapasan, dan lain-lain.",
        ],
      },
    ],
  },
  {
    id: "imunisasi",
    title: "Imunisasi",
    description:
      "Imunisasi adalah upaya menimbulkan/meningkatkan kekebalan seseorang secara aktif terhadap suatu penyakit sehingga bila suatu saat terpajan dengan penyakit tersebut tidak akan sakit atau hanya mengalami sakit ringan. Anak usia 0-11 bulan mendapatkan imunisasi dasar lengkap, sedangkan anak usia 18 bulan mendapatkan imunisasi lanjutan. Anak usia sekolah dasar perlu mendapatkan imunisasi lanjutan untuk mempertahankan tingkat kekebalan dan memperpanjang masa perlindungan anak. Imunisasi yang diberikan kepada anak usia sekolah adalah campak rubella, difteri, tetanus dan HPV (HPV baru diberikan di beberapa provinsi dan kabupaten/kota).",
    waktu: "Bulan Imunisasi Anak Sekolah (BIAS) diintegrasikan dengan usaha kesehatan sekolah, dilaksanakan setiap tahun pada bulan Agustus dan November.",
    tempat:
      "Dilaksanakan di sekolah/madrasah. Apabila peserta didik berhalangan hadir, imunisasi dapat diberikan di Puskesmas dengan surat pengantar dari sekolah/madrasah. Pada masa pandemi, BIAS dapat dilaksanakan di sekolah/madrasah, Puskesmas, atau melalui Puskesmas keliling sesuai kebijakan pemerintah daerah setempat.",
    pelaksana:
      "Puskesmas dibantu oleh sekolah/madrasah atau guru dan orang tua peserta didik. Petugas Puskesmas memasukkan hasil imunisasi di kohort Anak Usia Sekolah dan Remaja.",
    sections: [
      {
        heading: "Kegiatan",
        kind: "numberList",
        items: ["Program imunisasi lanjutan ini dinamakan Bulan Imunisasi Anak Sekolah (BIAS), ditujukan untuk peserta didik di jenjang SD/MI."],
      },
      {
        heading: "Sarana",
        kind: "bulletList",
        items: [
          "Sekolah/madrasah menyediakan daftar absensi peserta didik dan membantu menggerakkan peserta didik mendapatkan pelayanan esensial.",
          "Puskesmas menyediakan vaksin, Auto Disable Syringe (ADS), Safety Box, Vaccine Carrier, peralatan anafilaktik, dan dokumen pencatatan pelayanan imunisasi.",
        ],
      },
      {
        heading: "Langkah-langkah",
        kind: "numberList",
        items: [
          "Puskesmas berkoordinasi dengan sekolah/madrasah di wilayah kerjanya menyepakati pelaksanaan jadwal imunisasi di masing-masing sekolah/madrasah.",
          "Puskesmas menghitung kebutuhan dan menyiapkan kebutuhan vaksin, ADS, Safety Box, peralatan anafilaktik dan lain-lain.",
          "Sekolah/madrasah memberikan surat pemberitahuan kepada orang tua peserta didik mengenai pemberian imunisasi/BIAS.",
          "Puskesmas memberikan penyuluhan kepada guru, orang tua dan peserta didik sebelum dan sesudah pelaksanaan imunisasi.",
          "Puskesmas melaksanakan kegiatan imunisasi dibantu dengan sekolah/madrasah.",
        ],
      },
    ],
  },
  {
    id: "pemberian-obat-cacing",
    title: "Pemberian Obat Cacing",
    description:
      "Cacingan adalah penyakit yang disebabkan oleh infeksi cacing dalam tubuh manusia yang ditularkan melalui tanah. Pemberian Obat Pencegahan Secara Massal Cacingan (POPM Cacingan) merupakan pemberian obat cacing secara serentak kepada semua penduduk sasaran di wilayah berisiko cacingan sebagai bagian dari upaya pencegahan penularan cacingan.",
    waktu:
      "Dilaksanakan di kelas masing-masing dua kali dalam 1 tahun untuk daerah kabupaten/kota dengan prevalensi tinggi, dan satu kali dalam 1 tahun untuk prevalensi sedang. Diberikan pada peserta didik tingkat PAUD (TK/RA/KB/BA/TPA/SPS) dan SD/MI, sejak umur 1 tahun sampai umur 12 tahun, 1 kali per tahun sesuai dosis.",
    pelaksana: "Puskesmas, guru UKS/M, kader kesehatan sekolah/madrasah, peserta didik.",
    sections: [
      {
        heading: "Sarana",
        kind: "bulletList",
        items: [
          "Obat cacing.",
          "Buku Rapor Kesehatanku atau form pencatatan pemberian obat cacing yang disediakan oleh Puskesmas.",
          "Buku KIA atau lembar pencatatan pemberian obat cacing yang disediakan oleh Puskesmas.",
        ],
      },
      {
        heading: "Langkah-langkah",
        kind: "numberList",
        items: [
          "Petugas Puskesmas berkoordinasi dengan kepala sekolah/madrasah dan guru untuk menjadwalkan POPM Cacingan kepada peserta didik.",
          "Pada hari pelaksanaan POPM Cacingan, guru membantu petugas Puskesmas untuk mengatur peserta didik.",
          "Petugas Puskesmas melakukan pencatatan dan pelaporan.",
        ],
      },
    ],
  },
  {
    id: "p3k-dan-p3p",
    title: "P3K dan P3P",
    description:
      "Pemberian P3K dan P3P dilakukan sebagai penanganan awal terhadap cedera atau kejadian sakit yang terjadi di sekolah/madrasah sebelum dilakukan pemeriksaan lebih lanjut di fasilitas kesehatan apabila masalah cedera/sakit belum terselesaikan. Kegiatan ini bertujuan untuk mencegah perburukan penyakit/cedera.",
    tempat: "Ruang UKS/M atau lokasi kondusif lainnya di sekolah/madrasah.",
    pelaksana: "Guru UKS/M dan guru lainnya yang terlatih, pelatih PMR, PMR, kader kesehatan sekolah/madrasah terlatih lainnya.",
    sections: [
      {
        heading: "Kegiatan",
        kind: "numberList",
        items: [
          "P3K — cedera seperti jatuh, luka, patah tulang dan lain-lain dapat saja terjadi apabila peserta didik tidak berhati-hati dalam beraktivitas. Penanganan disesuaikan dengan jenis cedera dan diberikan oleh petugas terlatih.",
          "P3P — kejadian sakit seperti demam, diare, sakit maag, nyeri haid, pingsan, sakit kepala dan lain-lain ditangani dengan pengobatan sederhana untuk gejala awal yang ringan. Peserta didik yang sakit diminta beristirahat di ruang UKS/M; apabila sakit masih berlanjut atau tidak ringan, sekolah/madrasah menginformasikan ke orang tua dan merujuk ke Puskesmas atau fasilitas kesehatan lainnya.",
        ],
      },
      {
        heading: "Sarana",
        kind: "bulletList",
        items: [
          "Peralatan P3K di ruang UKS/M sesuai Pedoman Tim Pembina UKS/M.",
          "Obat-obatan sederhana di ruang UKS/M sesuai Pedoman Tim Pembina UKS/M.",
        ],
      },
      {
        heading: "Langkah-langkah",
        kind: "numberList",
        items: [
          "Sekolah/madrasah mengidentifikasi kebutuhan dan menyediakan sarana prasarana (peralatan dan obat-obatan sederhana), berkoordinasi dengan Puskesmas untuk melatih guru UKS/M dan kader kesehatan, berkoordinasi dengan pelatih PMR bila memiliki ekstrakurikuler PMR, serta menyusun jadwal piket.",
          "Guru UKS/M, pelatih PMR dan PMR/kader kesehatan sekolah/madrasah memberikan P3K dan P3P pada saat diperlukan.",
          "Guru UKS/M dan kader kesehatan melakukan pencatatan pemberian P3K dan P3P serta memantau perkembangan kondisi peserta didik. Apabila sakit masih berlanjut atau tidak ringan, guru UKS/M menginformasikan ke orang tua dan merujuk ke Puskesmas atau fasilitas kesehatan lainnya.",
        ],
      },
    ],
  },
];

const pembinaanLingkunganItems: SubProgram[] = [
  {
    id: "sanitasi-sekolah",
    title: "Sanitasi Sekolah",
    description:
      "Sanitasi merupakan pengendalian semua faktor lingkungan fisik manusia yang dapat menimbulkan akibat buruk terhadap kehidupan manusia, baik fisik maupun mental (WHO). Sarana prasarana sanitasi sekolah/madrasah yang diperlukan antara lain air bersih yang cukup, jamban sehat, sarana cuci tangan dengan sabun air mengalir, pembuangan limbah cair dan tempat sampah. Sanitasi berkaitan erat dengan pelaksanaan pembiasaan hidup bersih. Komponen sanitasi sekolah meliputi: ketersediaan sarana dan prasarana sanitasi sekolah; implementasi Perilaku Hidup Bersih dan Sehat; serta manajemen sanitasi sekolah.",
    waktu:
      "Pembersihan dan desinfeksi dilakukan minimal 2 kali/hari; pembuangan sampah ke tempat sampah tertutup dan terpilah serta ke TPS dilakukan setiap hari; pelaksanaan reuse atau recycle dilaksanakan 1 kali/minggu atau sesuai kebutuhan.",
    tempat: "Seluruh lingkungan sekolah/madrasah.",
    pelaksana:
      "Kepala sekolah/madrasah, guru dan wali kelas, peserta didik, orang tua/wali, masyarakat sekolah/madrasah lainnya dan masyarakat sekitar sekolah/madrasah termasuk sanitarian di Puskesmas.",
    sections: [
      {
        heading: "Kegiatan",
        kind: "numberList",
        items: [
          "Pelaksanaan inspeksi kesehatan lingkungan sekolah/madrasah oleh Puskesmas dan pihak sekolah/madrasah.",
          "Penilaian mandiri kesehatan lingkungan dilakukan setiap bulan oleh sekolah/madrasah.",
          "Pembersihan dan desinfeksi ruang kelas, ruang guru, laboratorium, kantin dan semua ruangan setiap hari.",
          "Pembersihan dan desinfeksi sarana yang sering tersentuh tangan seperti pegangan pintu, tombol lampu, meja/kursi setiap hari.",
          "Pembersihan sarana luar kelas seperti lapangan.",
          "Pembuangan sampah ke tempat sampah tertutup dan terpilah setiap hari.",
          "Pengumpulan sampah dari berbagai lokasi tempat sampah ke Tempat Pembuangan Sampah (TPS) sementara setiap hari atau kurang dari setiap hari apabila sampah sudah mencapai ¾ dari isi.",
          "Kerja bakti.",
          "Pelaksanaan 3R (reuse: menggunakan kembali, reduce: berupaya mengurangi sampah, recycle: mendaur ulang).",
        ],
      },
      {
        heading: "Sarana",
        kind: "bulletList",
        items: [
          "Surat edaran/peraturan penerapan dari sekolah/madrasah.",
          "Tempat sampah tertutup dan terpilah di setiap kelas, dilapisi plastik.",
          "Alat-alat kebersihan: sapu, plastik.",
          "Cairan pembersih/desinfektan.",
          "Tempat pembuangan sampah sementara terbuat dari bata atau drum yang disertai tutup.",
          "Lokasi pengumpulan sampah untuk digunakan kembali/Bank Sampah.",
          "Tempat pengolahan sampah/sarana pembuatan pupuk.",
        ],
      },
      {
        heading: "Langkah-langkah",
        kind: "numberList",
        items: [
          "Sekolah/madrasah bekerjasama dengan Puskesmas dan Dinas Kebersihan/Lingkungan Hidup mengorientasikan kegiatan sanitasi dan pengelolaan sampah, pengenalan daur ulang sampah dan pembuatan pupuk.",
          "Sekolah/madrasah menunjuk guru yang akan menjadi pembimbing dalam pengelolaan dan daur ulang sampah hingga pembuatan pupuk.",
          "Guru membuat jadwal pelaksanaan pengelolaan sampah.",
          "Kader kesehatan sekolah/madrasah pokja sanitasi dan 3R membantu pelaksanaan pengawasan sanitasi, kerja bakti dan melaksanakan 3R.",
        ],
      },
    ],
  },
  {
    id: "pembinaan-kantin-sehat",
    title: "Pembinaan Kantin Sehat",
    description:
      "Kantin sehat sekolah adalah tempat warga satuan pendidikan termasuk peserta didik dapat membeli makanan dan minuman yang sehat, baik makanan utama yang bergizi seimbang atau makanan selingan. Makanan sehat menunjang pencapaian dan pertumbuhan peserta didik yang optimal.",
    waktu: "Berkesinambungan sepanjang waktu.",
    tempat: "Kantin sekolah/madrasah dan pedagang kaki lima di sekitarnya.",
    pelaksana: "Kepala sekolah/madrasah, guru UKS/M, Puskesmas, pengelola kantin, kader kesehatan sekolah/madrasah.",
    sasaran: "Pengelola kantin dan pedagang kaki lima serta peserta didik.",
    sections: [
      {
        heading: "Kegiatan",
        kind: "numberList",
        items: [
          "Penyuluhan higiene sanitasi pangan untuk food handler (penjamah makanan di kantin) oleh sekolah/madrasah bekerjasama dengan Puskesmas, BPOM atau lembaga lainnya.",
          "Penyuluhan makanan bergizi seimbang untuk food handler dan pengelola kantin sekolah/madrasah.",
          "Pengawasan kantin sehat dan pengisian buku rapor kantin oleh sekolah/madrasah (kepala sekolah/madrasah, guru UKS/M).",
          "Inspeksi kantin sekolah/madrasah oleh Puskesmas.",
          "Pemberian stiker kepada kantin yang memenuhi syarat.",
          "Pemberdayaan kader kesehatan sekolah/madrasah untuk melakukan kegiatan peningkatan dan pengawasan kantin sehat.",
        ],
      },
      {
        heading: "Sarana",
        kind: "bulletList",
        items: [
          "Buku Rapor Penilaian Mandiri Kesehatan Lingkungan, tempat pengelolaan pangan kantin/pangan jajanan, stiker, APD (celemek, tutup kepala, sarung tangan dan masker).",
        ],
      },
      {
        heading: "Langkah-langkah",
        kind: "numberList",
        items: [
          "Sekolah/madrasah bekerjasama dengan Puskesmas dan BPOM mengadakan penyuluhan tentang higiene sanitasi pangan dan makanan jajanan sehat yang bergizi dan tidak mengandung bahan dan zat berbahaya.",
          "BPOM mengambil sampel makanan yang dijual untuk diteliti apakah mengandung zat berbahaya atau tidak.",
          "Kepala sekolah/madrasah, guru dan pembina UKS/M melakukan pembinaan keamanan pangan dan pengawasan berkala mengenai pengelolaan makanan dan jajanan sehat, menggunakan rapor penilaian mandiri kesehatan lingkungan.",
          "Kader kesehatan sekolah/madrasah sebagai detektif kantin melaporkan kepada guru atau kepala sekolah/madrasah jika terdapat makanan/minuman kurang sehat, serta menggerakkan peserta didik dan penjamah makanan untuk meningkatkan kebersihan, keamanan dan kualitas gizi makanan.",
          "Pembinaan kantin juga dilakukan terhadap kemasan atau tempat penyajian makan, dengan mengurangi penggunaan kemasan plastik dan styrofoam dan bila memungkinkan menggunakan alat makan yang bisa dicuci.",
          "Pembinaan penjamah makanan dilakukan terhadap tampilan fisik, penggunaan celemek, alas kaki dan tutup kepala, perilaku cuci tangan, cara mengambil makanan dan perilaku lainnya.",
          "Pembinaan sarana dan prasarana dilakukan terhadap peralatan makan dan masak, proses pencuciannya, bahan baku peralatan, serta penggunaan bahan kimia pada kemasan makanan.",
          "Sekolah/madrasah bekerjasama dengan Dinkes atau BPOM memberikan stiker kantin sehat setelah memenuhi daftar tilik.",
          "Pembinaan juga dilakukan pada pedagang kaki lima dan warung-warung di sekitar sekolah/madrasah.",
        ],
      },
    ],
  },
  {
    id: "pemanfaatan-pekarangan-sekolah",
    title: "Pemanfaatan Pekarangan Sekolah/Madrasah",
    description: "Pekarangan sekolah/madrasah adalah tanah atau halaman di sekitar sekolah/madrasah yang dapat dimanfaatkan untuk menanam berbagai macam tanaman.",
    waktu: "Berkesinambungan, dapat diintegrasikan dengan mata pelajaran terkait seperti IPA atau Pramuka.",
    tempat: "Pekarangan/halaman sekolah/madrasah.",
    pelaksana: "Seluruh warga sekolah/madrasah dan dinas terkait.",
    sasaran: "Peserta didik, guru dan warga sekolah/madrasah.",
    sections: [
      {
        heading: "Kegiatan",
        kind: "numberList",
        items: [
          "Memanfaatkan halaman atau lahan sekolah/madrasah yang masih kosong untuk ditanami tanaman obat, sayuran, buah serta tanaman pengusir nyamuk.",
          "Memberi label pada tanaman sebagai sarana edukasi (nama latin tanaman, nama Indonesia, nama daerah serta manfaatnya).",
        ],
      },
      {
        heading: "Sarana",
        kind: "bulletList",
        items: [
          "Bibit sayur, bibit buah, pupuk, alat berkebun.",
          "Aneka sayuran (bayam, kangkung, sawi, cabai, tomat, terong, bawang, kentang, dan lain-lain) disesuaikan dengan kearifan lokal masing-masing.",
          "Tanaman obat (jahe, kunyit, kencur, temulawak, kelor, katuk, lidah buaya, jeruk nipis, serai, lavender, dan lain-lain) disesuaikan dengan kearifan lokal masing-masing daerah.",
          "Kompos dan/atau pupuk organik.",
        ],
      },
      {
        heading: "Langkah-langkah",
        kind: "numberList",
        items: [
          "Setiap peserta didik pada saat memasuki tahun ajaran baru diwajibkan membawa satu bibit tanaman sayuran dan/atau tanaman obat kemudian ditanam di taman/kebun sekolah/madrasah, termasuk memanfaatkan botol/kaleng plastik sebagai wadah tanam untuk lahan terbatas. Bila sekolah/madrasah memiliki sarana pengairan, peserta didik diwajibkan membawa benih ikan tawar untuk dibudidayakan.",
          "Setiap kelas memiliki kewajiban untuk membentuk taman kelas.",
          "Perawatan budidaya di taman/kebun/kolam dilakukan oleh peserta didik secara bergilir setiap minggunya.",
          "Guru UKS/M melakukan pembinaan kepada kader kesehatan Pokja Toga sedikitnya 1 kali seminggu.",
          "Sekolah/madrasah dapat melakukan kemitraan dengan KLHK untuk pemanfaatan pekarangan sekolah/madrasah.",
        ],
      },
    ],
  },
  {
    id: "pemberantasan-sarang-nyamuk",
    title: "Pemberantasan Sarang Nyamuk",
    description:
      "Pemberantasan sarang nyamuk (PSN) adalah tindakan pemberantasan sarang nyamuk melalui kegiatan menutup, menguras dan memanfaatkan barang bekas yang masih bernilai (yang dikenal dengan istilah 3M).",
    waktu: "Dilaksanakan minimal 1 kali dalam seminggu di lingkungan sekolah/madrasah.",
    pelaksana: "Anak sekolah/madrasah, dipantau oleh Jumantik.",
    sasaran: "Tempat perkembangbiakan nyamuk.",
    sections: [
      {
        heading: "Kegiatan",
        kind: "numberList",
        items: [
          "Kegiatan PSN anak sekolah/madrasah meliputi pengamatan jentik dan kegiatan 3M (menutup, menguras, memanfaatkan barang-barang bekas yang masih bernilai ekonomis) serta mencegah gigitan nyamuk. PSN 3M Plus merupakan kegiatan terencana secara terus-menerus dan berkesinambungan, paling efektif untuk mencegah DBD serta mewujudkan kebersihan lingkungan dan perilaku hidup sehat.",
        ],
      },
      {
        heading: "Sarana",
        kind: "bulletList",
        items: ["Senter, meja jalan, formulir, gayung."],
      },
      {
        heading: "Langkah-langkah",
        kind: "numberList",
        items: [
          "Guru PJ mengajarkan kegiatan PSN 3M Plus kepada peserta didik.",
          "Setiap minggu peserta didik melakukan pemantauan jentik dan PSN 3M Plus di sekolah/madrasah dan rumah/tempat tinggalnya masing-masing serta melakukan pencatatan.",
          "Pengamatan jentik dilakukan dengan mencari semua tempat perkembangbiakan jentik nyamuk di area sekolah/madrasah; formulir pencatatan dilaporkan setiap minggu ke guru Penanggung Jawab (PJ), yang memberikan arahan bila ditemukan jentik.",
        ],
      },
    ],
  },
  {
    id: "kawasan-tanpa-rokok-napza-kekerasan-pornografi",
    title: "Kawasan Tanpa Rokok, NAPZA, Kekerasan dan Pornografi",
    description:
      "Kawasan Tanpa Rokok di lingkungan sekolah adalah ruangan atau area yang dinyatakan dilarang untuk kegiatan merokok atau kegiatan memproduksi, menjual, dan/atau mempromosikan rokok. Kawasan Tanpa NAPZA adalah kawasan yang terbebas dari kegiatan penyalahgunaan NAPZA baik membawa, menggunakan atau mengedarkan NAPZA. Kawasan Tanpa Kekerasan adalah kawasan yang terbebas dari permasalahan kekerasan baik fisik, psikis maupun sosial termasuk perundungan di sekolah. Kawasan Tanpa Pornografi dilakukan dengan memastikan tidak ada peserta didik maupun warga sekolah/madrasah lainnya yang menyediakan, mengakses, menyimpan dan mengedarkan konten yang memuat kecabulan atau eksploitasi seksual yang melanggar norma kesusilaan dalam masyarakat.",
    waktu: "Penerapan KTR, KTN, KTK dan KTP di lingkungan sekolah/madrasah dilaksanakan sepanjang waktu.",
    tempat: "Seluruh lingkungan sekolah/madrasah.",
    pelaksana: "Kepala sekolah/madrasah, guru dan wali kelas, orang tua, peserta didik dan kader kesehatan sekolah/madrasah.",
    sasaran: "Kepala sekolah/madrasah, guru, tenaga kependidikan, peserta didik dan pihak lain di dalam lingkungan sekolah/madrasah serta satgas KTR, KTN, KTK dan KTP.",
    sections: [
      {
        heading: "Kegiatan",
        kind: "numberList",
        items: [
          "Memasukkan larangan terkait rokok dan NAPZA dalam aturan tata tertib sekolah/madrasah.",
          "Melakukan penolakan terhadap penawaran iklan, promosi, pemberian sponsor, dan/atau kerja sama dalam bentuk apapun dari perusahaan rokok dan/atau organisasi yang menggunakan merek dagang, logo, semboyan atau warna yang dapat diasosiasikan sebagai ciri khas perusahaan rokok.",
          "Memberlakukan larangan pemasangan papan iklan, reklame, penyebaran pamflet dan bentuk-bentuk iklan lainnya dari perusahaan atau yayasan rokok di lingkungan sekolah/madrasah.",
          "Melarang penjualan rokok di kantin/warung sekolah/madrasah, koperasi atau bentuk penjualan lain di lingkungan sekolah/madrasah dan tidak ada asbak di ruang tamu atau ruang guru.",
          "Memasang tanda kawasan tanpa rokok dan NAPZA di lingkungan sekolah/madrasah.",
          "Membiasakan warga satuan pendidikan melaksanakan senyum, sapa, salam, sopan dan santun setiap hari.",
          "Membiasakan membaca doa setiap mulai jam pelajaran sesuai dengan agama dan kepercayaannya.",
          "Mengembangkan kegiatan belajar mengajar yang aktif, interaktif dan menyenangkan; menerapkan reward and punishment yang mendidik; menyelenggarakan kegiatan keagamaan/ibadah; mengembangkan ekstrakurikuler seperti Pramuka dan PMR; mengembangkan kegiatan gotong royong seperti piket kelas dan jumat bersih; menyelenggarakan lomba-lomba; memfasilitasi pelatihan konseling bagi guru BK; serta memberikan pengetahuan tambahan mengenai isu kesehatan yang sedang tren.",
          "Meningkatkan pengetahuan dan keterampilan peserta didik untuk menggunakan gawai dengan bijak.",
        ],
      },
      {
        heading: "Sarana",
        kind: "bulletList",
        items: [
          "Surat edaran/peraturan penerapan KTR, KTN, KTK dan KTP serta spanduk/poster pemberitahuan penerapannya di sekolah/madrasah.",
          "CCTV di tempat strategis di lingkungan sekolah.",
        ],
      },
      {
        heading: "Langkah-langkah",
        kind: "numberList",
        items: [
          "Pembuatan peraturan dari kepala sekolah/madrasah terkait penerapan KTR, KTN, KTK dan KTP di sekolah/madrasah.",
          "Sosialisasi kepada kepala sekolah/madrasah, guru, tenaga kependidikan, peserta didik, orang tua, seluruh warga sekolah/madrasah, dan RT/RW di sekitar sekolah/madrasah tentang KTR, KTN, KTK dan KTP.",
          "Pembentukan satuan tugas (satgas) termasuk peer educator di antara peserta didik yang akan melakukan pengawasan KTR, KTN, KTK dan KTP di lingkungan sekolah/madrasah.",
        ],
      },
    ],
  },
];

export const triasPage: PageContent = {
  slug: "/uksm/trias",
  title: "Trias UKS/M",
  seoDescription: "Tiga pilar utama UKS/M: Pendidikan Kesehatan, Pelayanan Kesehatan, dan Pembinaan Lingkungan Sekolah Sehat.",
  crumbs: [{ label: "UKS/M" }, { label: "Trias UKS/M" }],
  blocks: [
    {
      type: "hero",
      eyebrow: "UKS/M",
      title: "Trias UKS/M",
      lead: "Tiga pilar yang menopang penyelenggaraan UKS/M di setiap satuan pendidikan, dilaksanakan secara terpadu dan berkelanjutan.",
    },
    {
      type: "pillarAccordion",
      pillars: [
        {
          number: 1,
          title: "Pendidikan Kesehatan",
          description:
            "Pendidikan kesehatan di sekolah/madrasah dilaksanakan melalui berbagai kegiatan yang bertujuan meningkatkan pengetahuan, keterampilan, sikap, dan perilaku hidup sehat peserta didik melalui penerapan Trias UKS/M.",
          items: pendidikanKesehatanItems,
        },
        {
          number: 2,
          title: "Pelayanan Kesehatan",
          description:
            "Upaya promotif, preventif, kuratif, dan rehabilitatif untuk menjaga kesehatan warga sekolah, meliputi penjaringan kesehatan dan pemeriksaan berkala, imunisasi, pemberian obat cacing, serta P3K dan P3P.",
          items: pelayananKesehatanItems,
        },
        {
          number: 3,
          title: "Pembinaan Lingkungan Sekolah Sehat",
          description:
            "Upaya mewujudkan lingkungan sekolah/madrasah yang bersih, sehat, aman, dan nyaman melalui sanitasi sekolah, pembinaan kantin sehat, pemanfaatan pekarangan, pemberantasan sarang nyamuk, serta penerapan kawasan tanpa rokok, NAPZA, kekerasan, dan pornografi.",
          items: pembinaanLingkunganItems,
        },
      ],
    },
  ],
};

export const strukturOrganisasiPage: PageContent = {
  slug: "/uksm/struktur-organisasi",
  title: "Struktur Organisasi UKS/M",
  seoDescription: "Tim Pembina UKS/M dan Tim Pelaksana UKS/M: struktur organisasi berjenjang dari pusat hingga sekolah.",
  crumbs: [{ label: "UKS/M" }, { label: "Struktur Organisasi" }],
  blocks: [
    {
      type: "hero",
      eyebrow: "UKS/M",
      title: "Struktur Organisasi",
      lead: "UKS/M dikelola melalui dua tim yang saling melengkapi, berjenjang dari tingkat pusat hingga satuan pendidikan.",
    },
    {
      type: "orgStructure",
      groups: [
        {
          title: "Tim Pembina UKS/M (TP UKS/M)",
          description:
            "Tim Pembina UKS/M yang selanjutnya disebut TP UKS/M adalah organisasi yang menangani UKS/M, baik di tingkat pusat, provinsi, kabupaten/kota dan kecamatan. Untuk melaksanakan tugas pembinaan dan pengembangan UKS secara terpadu dan terkoordinasi, dibentuk Tim Pembina UKS pada setiap jenjang pemerintahan.",
          points: [
            "Tim Pembina UKS Tingkat Pusat",
            "Tim Pembina UKS Tingkat Provinsi",
            "Tim Pembina UKS Tingkat Kabupaten/Kota",
            "Tim Pembina UKS Tingkat Kecamatan",
          ],
          // TODO(content): org chart image pending — final asset needed (P-05).
          // Owner should also confirm the ministry name (Kemendikbudristek vs
          // Kemendikdasmen), "SMA/MTs" (probably SMA/MA) and "Kanwil Kemenag"
          // at Kab/Kota before reusing the PROD chart image. Content is
          // transcribed in docs/content-source/profil-tata-kelola/profil-tata-kelola-content.MD.
          image: {
            alt: "Bagan struktur Tim Pembina UKS/M dari tingkat Pusat hingga Kecamatan",
            caption:
              "Bagan jenjang Pusat → Provinsi → Kabupaten/Kota → Kecamatan, diteruskan ke satuan pendidikan (PAUD, TK/RA, SD/MI, SMP/MTs, SMA/MA, SMK/MAK, dan Satuan Pendidikan Khusus).",
            aspectRatio: "1010/814",
          },
        },
        {
          title: "Tim Pelaksana UKS/M di Sekolah/Madrasah",
          description: "Tim Pelaksana UKS/M adalah organisasi yang melaksanakan UKS/M, berkedudukan di sekolah.",
          sections: [
            {
              heading: "Fungsi",
              text: "Tim Pelaksana UKS di sekolah dan perguruan agama berfungsi sebagai penanggung jawab dan pelaksana program UKS di sekolah dan perguruan agama, berdasarkan prioritas kebutuhan dan kebijakan yang ditetapkan oleh TP UKS Kabupaten/Kota.",
            },
            {
              heading: "Tugas",
              items: [
                "Melaksanakan Tiga Program Pokok UKS yang terdiri dari Pendidikan Kesehatan, Pelayanan Kesehatan, dan Pembinaan Lingkungan Sekolah Sehat yang telah ditetapkan oleh Tim Pembina UKS.",
                "Menjalin kerjasama dengan orang tua/komite sekolah, instansi lain dan masyarakat dalam pelaksanaan kegiatan UKS.",
                "Menyusun program, melaksanakan penilaian/evaluasi dan menyampaikan laporan kepada Tim UKS Kecamatan.",
                "Melaksanakan Ketatausahaan Tim Pelaksana UKS di Sekolah.",
              ],
            },
          ],
          // TODO(content): org chart image pending — final asset needed (P-07).
          image: {
            alt: "Bagan struktur Tim Pelaksana UKS/M di sekolah/madrasah",
            caption:
              "Pembina: Lurah/Kepala Desa, Ketua Yayasan · Ketua: Kepala Sekolah · Sekretaris I: Guru Pembina UKS/M · Sekretaris II: Ketua Komite Sekolah · Anggota: unsur Komite Sekolah/Orang Tua, unsur Petugas UKS/M dan Puskesmas, unsur Guru, unsur Peserta Didik, OSIS/Kader UKS/PKK Desa.",
            aspectRatio: "555/578",
          },
        },
      ],
    },
  ],
};

export const manajemenPage: PageContent = {
  slug: "/uksm/manajemen",
  title: "Manajemen UKS/M",
  seoDescription: "Bagaimana UKS/M dikelola: kebijakan, perencanaan, koordinasi lintas jenjang, peningkatan kapasitas, serta monitoring dan evaluasi.",
  crumbs: [{ label: "UKS/M" }, { label: "Manajemen UKS/M" }],
  blocks: [
    {
      type: "hero",
      eyebrow: "UKS/M",
      title: "Manajemen UKS/M",
      lead: "Manajemen Sekolah/Madrasah Sehat adalah kegiatan-kegiatan yang berhubungan dengan tata kelola pelaksanaan Trias UKS/M, terdiri dari 5 komponen.",
    },
    {
      type: "cardGrid",
      title: "5 Komponen Manajemen Sekolah/Madrasah Sehat",
      columns: 3,
      cards: [
        {
          title: "Kebijakan",
          description:
            "Payung kebijakan sebagai rujukan pelaksanaan Trias UKS/M secara konsisten, sistematis dan berkelanjutan — di tingkat pusat maupun daerah, termasuk penganggaran dan peran serta fungsi masing-masing pihak.",
        },
        {
          title: "Perencanaan dan Penganggaran",
          description:
            "Tim Pembina UKS/M bersama sekolah/madrasah merencanakan kegiatan prioritas, waktu pelaksanaan, SDM, sasaran dan anggaran, terintegrasi dengan RKS dan bersumber dari APBN, APBD atau sumber lain yang tidak mengikat.",
        },
        {
          title: "Koordinasi",
          description:
            "Sinkronisasi perencanaan, pelaksanaan, monitoring dan evaluasi dari tingkat Pusat, Provinsi, Kota/Kabupaten, Kecamatan sampai satuan pendidikan, rutin minimal 3 bulan sekali.",
        },
        {
          title: "Peningkatan Kapasitas",
          description:
            "Orientasi dan pelatihan tata kelola serta kegiatan Trias UKS/M bagi guru dan tenaga kependidikan, dilengkapi buku panduan, KIE dan sarana prasarana pendukung.",
        },
        {
          title: "Monitoring dan Evaluasi",
          description:
            "Strata UKS/M menjadi acuan utama pemantauan rutin dan terpadu, untuk mengukur capaian, tantangan dan keberhasilan Sekolah/Madrasah Sehat.",
        },
      ],
    },
    {
      type: "richText",
      title: "Monitoring Sekolah/Madrasah Sehat",
      nodes: [
        {
          kind: "p",
          text: "Monitoring merupakan serangkaian kegiatan mengumpulkan dan menganalisis data secara rutin pelaksanaan Program Sekolah/Madrasah Sehat, untuk memastikan program berada di jalur yang tepat, sumber daya tersedia memadai, kegiatan telah dilaksanakan, dan hasil sesuai rencana. Monitoring dilakukan oleh Tim Pembina UKS/M tingkat kecamatan kepada Tim Pelaksana UKS/M di tingkat sekolah/madrasah termasuk kepala sekolah/madrasah dan guru UKS/M, setiap bulan dengan mengisi form monitoring secara deskriptif, meliputi:",
        },
        { kind: "h3", text: "Pendidikan Kesehatan" },
        {
          kind: "ol",
          items: [
            "Literasi kesehatan",
            "Pendidikan Gizi",
            "Perilaku Hidup Bersih dan Sehat",
            "Pembiasaan aktivitas fisik",
            "Pendidikan Kesehatan Reproduksi",
            "Pendidikan Keterampilan hidup sehat",
            "Pembinaan kader kesehatan remaja",
          ],
        },
        { kind: "h3", text: "Pelayanan Kesehatan" },
        {
          kind: "ol",
          items: [
            "Pemeriksaan kesehatan",
            "Imunisasi",
            "Pemberian suplementasi vitamin A",
            "Pemberian tablet tambah darah",
            "Pemberian obat cacing",
            "P3K dan P3P",
            "Konseling",
          ],
        },
        { kind: "h3", text: "Pembinaan Lingkungan Sekolah Sehat" },
        {
          kind: "ol",
          items: [
            "Pemeliharaan sanitasi sekolah dan pengelolaan sampah",
            "Pembinaan kantin sehat",
            "Pemanfaatan pekarangan sekolah/madrasah",
            "Pemberantasan sarang nyamuk",
            "Penerapan KTR, KTN, KTK, KTP",
          ],
        },
        { kind: "h3", text: "Manajemen" },
        { kind: "ol", items: ["Manajemen UKS/M"] },
      ],
    },
    {
      type: "richText",
      title: "Evaluasi Sekolah/Madrasah Sehat",
      nodes: [
        {
          kind: "p",
          text: "Evaluasi adalah proses penilaian yang sistematis untuk melihat pencapaian Sekolah/Madrasah Sehat, mengetahui sejauh mana kegiatan Trias UKS/M dilaksanakan serta mengetahui permasalahan, solusi dan rencana tindak lanjut untuk meningkatkan cakupan dan kualitas pelaksanaannya. Proses evaluasi dapat dilakukan dengan pendekatan kuantitatif maupun kualitatif, menggunakan data monitoring, dan dapat dijadikan acuan untuk kegiatan replikasi ke sekolah/madrasah lainnya.",
        },
        {
          kind: "p",
          text: "Evaluasi Sekolah/Madrasah Sehat ditujukan kepada peserta didik, kepala sekolah/madrasah, guru, Puskesmas dan Tim Pembina UKS/M, dengan target pencapaian jangka pendek (6 bulan pelaksanaan), jangka menengah (1 tahun ajaran), dan jangka panjang (3 tahun pelaksanaan).",
        },
        { kind: "h3", text: "Sumber Indikator Evaluasi" },
        {
          kind: "ul",
          items: [
            "Hasil pengisian instrumen monitoring penerapan Sekolah/Madrasah Sehat.",
            "Hasil kegiatan penjaringan kesehatan dan pemeriksaan berkala dan tindak lanjut yang dilaksanakan Puskesmas dan sekolah/madrasah.",
            "Hasil penilaian stratifikasi UKS/M setelah kegiatan-kegiatan Sekolah/Madrasah Sehat.",
            "Integrasi kegiatan UKS/M dengan kegiatan belajar mengajar dan kegiatan sehari-hari di sekolah.",
            "Analisis data asesmen awal dan asesmen akhir yang bersumber dari hasil stratifikasi UKS/M, hasil penjaringan kesehatan dan pemeriksaan berkala serta hasil penilaian pengetahuan, sikap dan perilaku.",
          ],
        },
        { kind: "p", text: "Penanggung jawab: Tim Pembina UKS/M." },
        { kind: "h3", text: "Tahap Perencanaan" },
        {
          kind: "p",
          text: "Diawali dengan pelaksanaan asesmen awal, penetapan tujuan, indikator dan target indikator yang akan dievaluasi, serta persiapan metode, alat evaluasi, jadwal dan tim yang akan bertugas.",
        },
        { kind: "h3", text: "Tahap Pelaksanaan" },
        {
          kind: "p",
          text: "Tim yang bertanggung jawab mengumpulkan data kuantitatif maupun kualitatif, menganalisisnya, dan menyusun laporan evaluasi, dengan kesinambungan dari hasil monitoring rutin yang telah dilaksanakan.",
        },
        { kind: "h3", text: "Tahap Tindak Lanjut" },
        {
          kind: "p",
          text: "Hasil evaluasi dilaporkan secara tertulis maupun verbal kepada pihak-pihak terkait sebagai acuan peningkatan kualitas Sekolah/Madrasah Sehat ke depan, termasuk identifikasi tindak lanjut yang menjadi tanggung jawab sekolah/madrasah maupun stakeholder terkait.",
        },
      ],
    },
  ],
};

export const stratifikasiPage: PageContent = {
  slug: "/uksm/stratifikasi",
  title: "Stratifikasi UKS/M",
  seoDescription: "Alat ukur capaian penyelenggaraan UKS/M di satuan pendidikan, dari tahap Minimal hingga Paripurna.",
  crumbs: [{ label: "UKS/M" }, { label: "Stratifikasi UKS/M" }],
  blocks: [
    {
      type: "hero",
      eyebrow: "UKS/M",
      title: "Stratifikasi UKS/M",
      lead:
        "Alat bantu untuk mengetahui capaian dan kekurangan satuan pendidikan dalam penyelenggaraan UKS/M, dasar strategi peningkatan mutu dan bagian dari sistem monitoring & evaluasi.",
    },
    // TODO(content): S-04 strata naming is an open owner decision. Dev's
    // `/stratifikasi-uks` hero uses "Dasar/Madya/Utama/Paripurna", but the
    // homepage, this page's own unused CMS content, and the SD indicator
    // rubric below all agree on "Minimal/Standar/Optimal/Paripurna" — used
    // here per that majority. See docs/reports/content-inventory.md (S-04) and
    // docs/content-source/stratifikasi-uks-content.MD (Flag 3).
    {
      type: "strataJourney",
      intro: "Sekolah/madrasah harus memenuhi seluruh indikator pada satu kelompok strata untuk dinyatakan berada di strata tersebut.",
      levels: [
        { name: "Minimal", description: "Memenuhi indikator dasar penyelenggaraan UKS/M di satuan pendidikan." },
        { name: "Standar", description: "Program Trias UKS/M berjalan konsisten sesuai standar minimum layanan." },
        { name: "Optimal", description: "Pelaksanaan menyeluruh dan terintegrasi dalam perencanaan RKAS." },
        { name: "Paripurna", description: "UKS/M menjadi budaya sekolah yang mandiri dan berkelanjutan." },
      ],
      categories: ["Pendidikan kesehatan", "Pelayanan kesehatan", "Pembinaan lingkungan sehat di sekolah sehat", "Manajemen UKS/M"],
      externalHref: "https://stratifikasiuks.org/",
      externalLabel: "Buka Dasbor Stratifikasi UKS/M",
    },
    {
      type: "richText",
      title: "Fungsi Stratifikasi",
      nodes: [
        {
          kind: "ul",
          items: [
            "Alat ukur pelaksanaan Trias UKS/M di satuan pendidikan.",
            "Dasar strategi peningkatan mutu penyelenggaraan UKS/M.",
            "Bagian dari sistem monitoring dan evaluasi program.",
            "Dasar penyusunan rekomendasi tindak lanjut bagi sekolah/madrasah.",
          ],
        },
        {
          kind: "p",
          text: "Pengisian data dan penilaian strata dilakukan melalui dasbor Stratifikasi UKS/M, sistem terpisah di luar portal ini yang dikelola khusus untuk keperluan penilaian sekolah.",
        },
      ],
    },
    {
      type: "richText",
      title: "Definisi, Maksud, dan Penilaian",
      nodes: [
        { kind: "h3", text: "Definisi Stratifikasi UKS/M" },
        {
          kind: "p",
          text: "Alat ukur kinerja yang dilakukan oleh sekolah dan Puskesmas (Tim Pelaksana UKS/M Kecamatan) serta Kementerian di pusat atau OPD terkait di Kabupaten/Kota (Tim Pembina UKS/M Kabupaten/Kota), terkait kegiatan Trias UKS/M, yakni Pendidikan Kesehatan, Pelayanan Kesehatan dan Lingkungan Sekolah Sehat.",
        },
        { kind: "h3", text: "Maksud Stratifikasi UKS/M" },
        {
          kind: "p",
          text: "Dijadikan sebagai alat bantu untuk mengetahui apa yang sudah dicapai dan yang harus dilakukan satuan pendidikan untuk mencapai strata Minimal, Standar, Optimal dan Paripurna.",
        },
        { kind: "h3", text: "Penilaian Stratifikasi UKS/M" },
        {
          kind: "p",
          text: "Bersifat absolut: semua kegiatan yang tercantum dalam daftar indikator Minimal/Standar/Optimal/Paripurna harus terlaksana/terpenuhi seluruhnya, baru satuan pendidikan dapat dinyatakan UKS/M-nya berada pada tingkat tersebut.",
        },
      ],
    },
    {
      type: "strataRubric",
      title: "Indikator Stratifikasi UKS/M",
      intro: "Sekolah harus memenuhi seluruh indikator berikut pada kelompok strata yang sama, per kategori Trias UKS/M dan Manajemen UKS/M.",
      jenjang: "SD/MI",
      strataNames: ["Minimal", "Standar", "Optimal", "Paripurna"],
      categories: [
        {
          title: "Pendidikan Kesehatan",
          levels: [
            {
              name: "Minimal",
              items: [
                "Adanya rencana pembelajaran tentang pendidikan kesehatan",
                "Pendidikan kesehatan dilaksanakan secara kurikuler",
                "Pendidikan jasmani dilaksanakan secara kurikuler",
              ],
            },
            {
              name: "Standar",
              note: "Dipenuhinya strata minimal, plus:",
              items: [
                "Pendidikan jasmani dan kesehatan dilaksanakan secara ekstrakurikuler",
                "Sekolah melaksanakan literasi dengan materi kesehatan",
                "Sekolah melaksanakan pembinaan kader kesehatan",
                "Sekolah melaksanakan kegiatan CTPS bersama",
                "Sekolah melaksanakan sarapan bersama dengan gizi seimbang",
                "Sekolah melaksanakan kegiatan sikat gigi bersama",
              ],
            },
            {
              name: "Optimal",
              note: "Dipenuhinya strata standar, plus:",
              items: [
                "Sekolah melakukan peregangan di antara jam pelajaran",
                "Sekolah melakukan tes kebugaran",
                "Pendidikan kesehatan (kespro, napza, sanitasi, gizi) terintegrasi dengan mata pelajaran lain",
              ],
            },
            {
              name: "Paripurna",
              note: "Dipenuhinya strata optimal, plus:",
              items: [
                "Penerapan pendidikan karakter dan keterampilan hidup sehat",
                "Adanya forum komunikasi pendidik dan konselor sebaya",
                "Melibatkan orang tua dalam pendidikan kesehatan",
              ],
            },
          ],
        },
        {
          title: "Pelayanan Kesehatan",
          levels: [
            {
              name: "Minimal",
              items: [
                "Sekolah memfasilitasi Puskesmas melaksanakan penjaringan kesehatan dan pemeriksaan berkala",
                "Sekolah membantu pelaksanaan imunisasi anak sekolah",
                "Sekolah memeriksa kebersihan diri peserta didik",
              ],
            },
            {
              name: "Standar",
              note: "Dipenuhinya strata minimal, plus:",
              items: [
                "Sekolah melaksanakan pelayanan P3K dan P3P",
                "Sekolah melibatkan Puskesmas dalam penanganan rujukan jika diperlukan",
                "Sekolah memberikan obat cacing",
              ],
            },
            {
              name: "Optimal",
              note: "Dipenuhinya strata standar, plus:",
              items: ["Sekolah melaksanakan layanan konseling"],
            },
            {
              name: "Paripurna",
              note: "Dipenuhinya strata optimal, plus:",
              items: [
                "Sekolah menindaklanjuti hasil penjaringan dan pemeriksaan berkala",
                "Menurunnya jumlah hari tidak masuk sekolah karena sakit",
                "Peserta didik memiliki status gizi baik",
              ],
            },
          ],
        },
        {
          title: "Pembinaan Lingkungan Sekolah Sehat",
          levels: [
            {
              name: "Minimal",
              items: [
                "Sekolah dengan sumber air layak, tersedia di lingkungan sekolah dan cukup",
                "Sekolah dengan tempat cuci tangan dengan sabun dan air mengalir",
                "Sekolah memiliki toilet dengan kondisi baik dan terpisah",
                "Sekolah memiliki saluran drainase",
                "Sekolah memiliki kantin",
                "Sekolah memiliki lahan/ruang terbuka hijau",
                "Sekolah memiliki tempat sampah yang tertutup",
                "Sekolah memiliki tempat pembuangan sampah sementara yang tertutup",
                "Ruang kelas dalam keadaan bersih",
                "Sekolah melaksanakan pemberantasan sarang nyamuk",
                "Sekolah memiliki aturan KTR, KTN, KTK, KTP",
              ],
            },
            {
              name: "Standar",
              note: "Dipenuhinya strata minimal, plus:",
              items: [
                "Sekolah memiliki rasio toilet sesuai dengan standar Permendikbud 24/2007",
                "Sekolah memiliki tempat sampah yang terpilah",
                "Sekolah memiliki kantin sehat",
                "Sekolah menerapkan KTR",
              ],
            },
            {
              name: "Optimal",
              note: "Dipenuhinya strata standar, plus:",
              items: [
                "Sekolah memanfaatkan pekarangan sekolah dengan menanam tanaman obat dan pangan",
                "Sekolah melakukan 3R (reduce, reuse, recycle)",
                "Tersedia toilet MKM (Manajemen Kebersihan Menstruasi)",
              ],
            },
            {
              name: "Paripurna",
              note: "Dipenuhinya strata optimal, plus:",
              items: [
                "Air minum disediakan oleh sekolah",
                "Sekolah memiliki rasio toilet sesuai dengan standar Kepmenkes 1429/2006",
                "Kantin telah mendapatkan stiker tanda laik higiene sanitasi",
                "Tersedia toilet disabilitas",
                "Sekolah bekerja sama dengan Puskesmas melakukan pemeriksaan kualitas udara dan skrining siswa perokok",
                "Sekolah bekerjasama dengan pihak lain untuk menyediakan bank sampah",
                "Sekolah melakukan kegiatan pengolahan tanaman obat dan pangan",
              ],
            },
          ],
        },
        {
          title: "Manajemen UKS/M",
          levels: [
            {
              name: "Minimal",
              items: [
                "Buku pegangan kesehatan (Buku UKS/M, gizi seimbang, kespro, sanitasi, NAPZA dll.)",
                "Ada penanggung jawab UKS",
                "Tersedia media KIE kesehatan (alat peraga, poster dll.)",
                "Tersedia sarana prasarana olahraga",
                "Tersedia dana untuk kegiatan UKS dan pemeliharaan sanitasi sekolah",
                "Terdapat kemitraan dengan Puskesmas",
                "Terdapat perencanaan kegiatan UKS di sekolah",
              ],
            },
            {
              name: "Standar",
              note: "Dipenuhinya strata minimal, plus:",
              items: [
                "Sekolah menggunakan Buku Rapor Kesehatanku",
                "Sekolah melakukan konsultasi/koordinasi dengan Tim Pembina UKS",
                "Sekolah memiliki ruang UKS",
              ],
            },
            {
              name: "Optimal",
              note: "Dipenuhinya strata standar, plus:",
              items: ["Adanya kemitraan dengan instansi terkait", "Tersedia sarana dan prasarana sekolah aman bencana"],
            },
            {
              name: "Paripurna",
              note: "Dipenuhinya strata optimal, plus:",
              items: [
                "Sekolah melakukan pembinaan dan pengawasan",
                "Seluruh guru terorientasi UKS",
                "Sekolah menggunakan Rapor Kesehatan Lingkungan dan Kantin",
              ],
            },
          ],
        },
      ],
    },
    {
      type: "richText",
      title: "Cara Perhitungan Stratifikasi UKS/M",
      nodes: [
        {
          kind: "p",
          text: "Sekolah/madrasah harus memenuhi seluruh indikator (pendidikan kesehatan, pelayanan kesehatan, pembinaan lingkungan sekolah sehat dan manajemen UKS/M) pada kelompok stratifikasi UKS/M tertentu (minimal atau standar atau optimal atau paripurna).",
        },
        {
          kind: "ul",
          items: [
            "Sekolah memiliki stratifikasi UKS/M Minimal apabila telah memenuhi seluruh indikator pada kelompok stratifikasi UKS/M Minimal.",
            "Sekolah memiliki stratifikasi UKS/M Standar apabila telah memenuhi seluruh indikator pada kelompok stratifikasi UKS/M Standar.",
            "Sekolah memiliki stratifikasi UKS/M Optimal apabila telah memenuhi seluruh indikator pada kelompok stratifikasi UKS/M Optimal.",
            "Sekolah memiliki stratifikasi UKS/M Paripurna apabila telah memenuhi seluruh indikator pada kelompok stratifikasi UKS/M Paripurna.",
          ],
        },
      ],
    },
  ],
};

export const uksmPages: PageContent[] = [tentangUksPage, triasPage, strukturOrganisasiPage, manajemenPage, stratifikasiPage];
