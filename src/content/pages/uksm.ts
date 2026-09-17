import type { PageContent } from "../types";

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
        "Mewujudkan generasi sehat lewat sekolah. UKS/M hadir untuk meningkatkan derajat kesehatan anak usia sekolah di setiap jalur, jenis, dan jenjang pendidikan, melalui tiga pilar utama: Trias UKS/M.",
    },
    {
      type: "richText",
      title: "Tujuan UKS/M",
      nodes: [
        { kind: "ul", items: [
          "Meningkatkan kesehatan, mutu pendidikan, dan prestasi belajar peserta didik.",
          "Menumbuhkan Perilaku Hidup Bersih dan Sehat (PHBS) serta mewujudkan lingkungan sekolah yang sehat untuk mendukung tumbuh kembang optimal.",
          "Mendorong sekolah memenuhi stratifikasi UKS/M (Minimal, Standar, Optimal, Paripurna) melalui program yang berkelanjutan dan terintegrasi dalam RKAS.",
        ] },
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
            "Organisasi yang menaungi UKS/M, baik di tingkat pusat, provinsi, kabupaten/kota, dan kecamatan. Dibentuk untuk melaksanakan tugas pembinaan dan pengembangan UKS secara terpadu dan terkoordinasi pada setiap jenjang pemerintahan.",
        },
        {
          title: "Tim Pelaksana UKS/M",
          description:
            "Bertugas sebagai penanggung jawab dan pelaksana program UKS di sekolah dan perguruan agama, berdasarkan prioritas kebutuhan dan kebijakan yang ditetapkan oleh TP UKS Kabupaten/Kota.",
        },
      ],
    },
    {
      type: "cardGrid",
      title: "Sasaran UKS/M",
      columns: 4,
      cards: [
        { title: "Murid" },
        { title: "Pendidik" },
        { title: "Tenaga Kependidikan" },
        { title: "Masyarakat Sekolah" },
      ],
    },
    {
      type: "ctaBand",
      title: "Ingin tahu lebih dalam soal tiga pilar UKS/M?",
      description: "Pendidikan Kesehatan, Pelayanan Kesehatan, dan Pembinaan Lingkungan Sekolah Sehat, lengkap dengan program turunannya.",
      actions: [{ label: "Lihat Trias UKS/M", href: "/uksm/trias", variant: "primary" }],
    },
  ],
};

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
            "Membentuk pengetahuan, sikap, dan perilaku hidup sehat sejak dini melalui jalur intrakurikuler, ekstrakurikuler, dan kokurikuler.",
          items: [
            "Literasi Kesehatan",
            "Perilaku Hidup Bersih dan Sehat",
            "Pendidikan Gizi",
            "Pendidikan Kesehatan Reproduksi",
            "Pendidikan Karakter",
            "Pembiasaan Aktivitas Fisik",
            "Dokter Kecil",
          ],
        },
        {
          number: 2,
          title: "Pelayanan Kesehatan",
          description:
            "Upaya promotif, preventif, kuratif, dan rehabilitatif untuk menjaga kesehatan seluruh warga sekolah.",
          items: ["Penjaringan Kesehatan dan Pemeriksaan Berkala", "Imunisasi", "Pemberian Obat Cacing", "P3K dan P3P"],
        },
        {
          number: 3,
          title: "Pembinaan Lingkungan Sekolah Sehat",
          description: "Menciptakan lingkungan sekolah yang sehat secara fisik, sosial, dan emosional.",
          items: [
            "Sanitasi Sekolah",
            "Pembinaan Kantin Sehat",
            "Pemanfaatan Pekarangan Sekolah",
            "Pemberantasan Sarang Nyamuk",
            "Kawasan Tanpa Rokok, Napza, Kekerasan dan Pornografi",
          ],
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
            "Organisasi yang menaungi UKS/M di tingkat pusat, provinsi, kabupaten/kota, dan kecamatan. Dibentuk untuk melaksanakan tugas pembinaan dan pengembangan UKS secara terpadu dan terkoordinasi pada setiap jenjang pemerintahan.",
          points: ["Tingkat Pusat", "Tingkat Provinsi", "Tingkat Kabupaten/Kota", "Tingkat Kecamatan"],
        },
        {
          title: "Tim Pelaksana UKS/M di Sekolah/Madrasah",
          description:
            "Penanggung jawab dan pelaksana program UKS di sekolah dan perguruan agama, bekerja berdasarkan prioritas kebutuhan dan kebijakan yang ditetapkan oleh TP UKS Kabupaten/Kota.",
          points: ["Kepala Sekolah sebagai penanggung jawab", "Guru pembina UKS/M", "Kader kesehatan sekolah (Dokter Kecil / KKR)"],
        },
      ],
    },
  ],
};

export const manajemenPage: PageContent = {
  slug: "/uksm/manajemen",
  title: "Manajemen UKS/M",
  seoDescription: "Bagaimana UKS/M dikelola: kebijakan, perencanaan, koordinasi lintas jenjang, dan peningkatan kapasitas.",
  crumbs: [{ label: "UKS/M" }, { label: "Manajemen UKS/M" }],
  blocks: [
    {
      type: "hero",
      eyebrow: "UKS/M",
      title: "Manajemen UKS/M",
      lead: "Tata kelola UKS/M dirancang berjenjang, dari kebijakan pusat hingga pelaksanaan di satuan pendidikan.",
    },
    {
      type: "cardGrid",
      columns: 3,
      cards: [
        { title: "Kebijakan", description: "Dasar hukum dan arah kebijakan penyelenggaraan UKS/M secara nasional." },
        { title: "Perencanaan & Penganggaran", description: "Penyusunan rencana kerja UKS/M terintegrasi dengan RKAS satuan pendidikan." },
        { title: "Kegiatan Prioritas", description: "Penetapan program prioritas tahunan sesuai kebutuhan wilayah." },
        { title: "SDM & Sasaran", description: "Penyiapan tenaga pembina dan penetapan sasaran program di setiap jenjang." },
        { title: "Sumber Anggaran", description: "Pembiayaan bersumber dari APBN dan APBD sesuai kewenangan masing-masing." },
        { title: "Koordinasi", description: "Sinergi lintas tingkat pemerintahan: Pusat → Provinsi → Kabupaten/Kota → Kecamatan → Satuan Pendidikan." },
      ],
    },
    {
      type: "richText",
      title: "Peningkatan Kapasitas",
      nodes: [
        { kind: "p", text: "Pembinaan berkelanjutan dilakukan melalui pelatihan bagi guru dan tenaga kependidikan, agar pengelolaan UKS/M di satuan pendidikan berjalan konsisten dan sesuai standar." },
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
        { kind: "ul", items: [
          "Alat ukur pelaksanaan Trias UKS/M di satuan pendidikan.",
          "Dasar strategi peningkatan mutu penyelenggaraan UKS/M.",
          "Bagian dari sistem monitoring dan evaluasi program.",
          "Dasar penyusunan rekomendasi tindak lanjut bagi sekolah/madrasah.",
        ] },
        { kind: "p", text: "Pengisian data dan penilaian strata dilakukan melalui dasbor Stratifikasi UKS/M, sistem terpisah di luar portal ini yang dikelola khusus untuk keperluan penilaian sekolah." },
      ],
    },
  ],
};

export const uksmPages: PageContent[] = [tentangUksPage, triasPage, strukturOrganisasiPage, manajemenPage, stratifikasiPage];
