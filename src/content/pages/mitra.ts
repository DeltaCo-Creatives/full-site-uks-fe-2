import type { PageContent, Partner, SupportPartnerNote, SupportRecord } from "../types";

/**
 * Curated highlight set for the logo marquee. This is a subset with real
 * logo assets on hand — the full, text-only partner rosters (2025 /
 * 2023–2024 / 2022) are below in `mitraPartnersByYear`, sourced verbatim
 * from docs/content-source/kemitraan/mitra-kami.md.
 */
export const mitraPartners: Partner[] = [
  { name: "Kementerian Kesehatan", logo: "/images/mitra/kemenkes.png", href: "https://www.kemkes.go.id/" },
  { name: "Kementerian Agama", logo: "/images/mitra/kemenag.png", href: "https://kemenag.go.id/" },
  { name: "Kementerian Dalam Negeri", logo: "/images/mitra/kemendagri.png", href: "https://www.kemendagri.go.id/" },
  { name: "Badan Gizi Nasional", logo: "/images/mitra/bgn.png", href: "https://www.bgn.go.id/" },
  { name: "Badan Pengawas Obat dan Makanan", logo: "/images/mitra/bpom.jpg", href: "https://www.pom.go.id/" },
  { name: "Bio Farma", logo: "/images/mitra/biofarma.png", href: "https://www.biofarma.co.id/" },
  { name: "UNICEF Indonesia", logo: "/images/mitra/unicef.png", href: "https://www.unicef.org/indonesia/id" },
  { name: "Save the Children", logo: "/images/mitra/savethechildren.jpg", href: "https://savethechildren.or.id/" },
  { name: "Tanoto Foundation", logo: "/images/mitra/tanoto.png", href: "https://www.tanotofoundation.org/" },
  { name: "AIA", logo: "/images/mitra/aia.png", href: "https://www.aia-financial.co.id/id" },
  { name: "Danone", logo: "/images/mitra/danone.png", href: "https://www.danone.com/" },
  { name: "KAO Indonesia", logo: "/images/mitra/kao.png", href: "https://www.kao.com/id/id/" },
  { name: "Universitas Pendidikan Indonesia", logo: "/images/mitra/upi.png", href: "https://www.upi.edu/" },
  { name: "Oatside", logo: "/images/mitra/oatside.png", href: "https://oatside.com/id/" },
];

// Source: docs/content-source/kemitraan/mitra-kami.md — full rosters, names only (no logos given for these).
export const mitraPartnersByYear = [
  {
    year: "2025",
    names: [
      "UNICEF Indonesia",
      "Save The Children Indonesia",
      "AIA Financial",
      "Maleo Edukasi (educourse.id)",
      "KAO Indonesia",
      "Wardhana",
      "Wings Group",
      "Cisarua Mountain Dairy",
      "Mondelez Indonesia Trading",
      "Yayasan Sagasitas Indonesia",
      "Tanoto Foundation",
      "Danone Indonesia",
      "Float Oat Indonesia",
      "PT Bio Farma Indonesia",
      "Red Nose Foundation",
      "PT. KPM Ikhlas Tegas Puas",
      "Badan Gizi Nasional (BGN)",
      "Badan Pengawas Obat dan Makanan (BPOM)",
      "Universitas Pendidikan Indonesia (UPI)",
      "Center of Excellence",
    ],
  },
  {
    year: "2023–2024",
    names: [
      "AIA dan Bobo",
      "Yayasan Hidung Merah (Red Nose Foundation)",
      "Badan Pangan Nasional (Direktorat Kewaspadaan Pangan dan Gizi & Direktorat Penganekaragaman Konsumsi Pangan)",
      "LP Ma'arif",
      "Hisminu",
      "PT. Nestle Indonesia",
      "PT. Frisian Flag Indonesia",
      "PT. Beta Moringa Indonesia",
      "PT. Acer Indonesia",
      "PT. Asaba",
      "PT. Smart Consulting Indonesia",
      "PT. Dwida Jaya Tama",
      "PT. Bangga Teknologi Indonesia",
      "PT. Prima Duta Nusantara",
      "PT. Pameterindo Edukatama Aneka (Pamduta)",
      "Gamma Persada Group",
      "PT. Tera Data Indonusa",
      "PT. Haula Sejahtera",
      "PT. Sentra Kriya Edukasi",
      "PT Macananjaya Cemerlang",
      "CV. Wardhana",
      "CV. Alkautsar Aflah Mandiri",
      "CV. Orion",
      "CV. Putra Putri",
      "PT. Tribina Dinar Kencana (Inke Maris & Associates)",
      "Yayasan Wahana Visi Indonesia (WVI)",
      "Yayasan Sagasitas Indonesia",
      "PT. Inovasi Desa Nusantara",
      "PT. Trakindo Utama",
      "World Food Program",
    ],
  },
  {
    year: "2022",
    names: [
      "PT. Unilever Indonesia TBK",
      "PT. Investama dan PT. Sarihusada Generasi Mahardhika (Danone)",
      "PT KAO",
      "PT Nutrifood",
      "PT. Uni-Charm Indonesia TBK dan PT. Awina Sinergi International",
      "PT. Maleo Edukasi Teknologi (Educourse.id)",
      "Yayasan Save The Children Indonesia",
    ],
  },
];

// Source: docs/content-source/kemitraan/dukungan-mitra.md. Tanoto Foundation's first Kegiatan line
// ("Pengembangan karakter positif bagi peserta didik melalui Modul Choice") is dropped
// here — see docs/content-source/kemitraan/kemitraan-curation.md open item 4: it's identical to Save the
// Children's Kegiatan 1 and doesn't fit an MBG evaluation study, so it reads as a
// copy/paste error in the source rather than a real fact about Tanoto's program.
const mitraSupportRecords: SupportRecord[] = [
  {
    name: "UNICEF - Section Nutrition",
    period: "Maret s.d. November 2025",
    collaboration: [
      "Panduan Implementasi Program Makan Bergizi Gratis di Satuan Pendidikan",
      "Modul Pelatihan Implementasi Program Makan Bergizi Gratis di Satuan Pendidikan",
      "Modul Edukasi Gizi pada Program Makan Bergizi Gratis di Satuan Pendidikan",
    ],
    activities: ["Review", "Penyusunan", "Finalisasi", "Peluncuran"],
    beneficiaries: ["Satuan pendidikan seluruh jenjang"],
    locations: ["Jakarta"],
    funding: "IDR 601.689.860",
  },
  {
    name: "Tanoto Foundation",
    period: "Agustus 2025 s.d. Mei 2026",
    collaboration: ["Studi Evaluasi Implementasi Program Makan Bergizi Gratis"],
    activities: ["Penyusunan instrumen", "Uji coba instrumen", "Pengumpulan data lapangan"],
    beneficiaries: ["PAUD", "SD kelas 1–6", "SMP kelas 7–9", "SMA kelas 10–12"],
    locations: [
      "Riau (Kabupaten Siak, Kota Pekanbaru)",
      "Jawa Tengah (Kota Semarang, Kabupaten Kendal)",
      "Kalimantan Timur (Kota Balikpapan, Kabupaten Paser)",
      "Sumatera Utara (Kota Medan)",
      "Jambi (Kabupaten Tanjung Jabung Timur, Kota Jambi)",
    ],
    funding: "IDR 599.870.000",
  },
  {
    name: "Save the Children Indonesia – Program We See Equal",
    period: "Phase 4, Juli 2024 s.d. Juni 2026",
    collaboration: ["Budaya Sekolah Aman dan Nyaman"],
    activities: [
      "Pengembangan karakter positif bagi peserta didik melalui Modul Choice",
      "Edukasi bagi orang tua melalui Modul Pengasuhan",
      "Panduan pelaksanaan SOP Penanganan Kekerasan di satuan pendidikan yang merujuk pada juknis SOP Kemendikdasmen",
    ],
    beneficiaries: [
      "576 SMP Negeri dan swasta di Kabupaten Bandung dan Cianjur",
      "987 guru sudah dilatih modul choice dan pengasuhan",
      "34 master trainer modul choice (pendidikan karakter untuk siswa)",
      "35 master trainer modul pengasuhan/parenting untuk ortu siswa",
      "Training untuk buku panduan SOP penanganan kekerasan di satuan pendidikan sedang berjalan saat ini",
      "38.048 siswa di Kab. Bandung dan Cianjur menerima edukasi modul choice dalam pelaksanaan MPLS tahun 2025",
    ],
    locations: ["Kabupaten Bandung dan Kabupaten Cianjur"],
    funding: "USD 440.000",
  },
  {
    name: "KAO Indonesia",
    period: "Januari s.d. Desember 2025",
    collaboration: ["Edukasi Anak KAO (Kreatif Aktif Optimis)"],
    activities: [
      "Edukasi Perilaku Hidup Bersih dan Sehat",
      "Pembiasaan 7 Kebiasaan Anak Indonesia Hebat",
      "Anak KAO BISA (Bijak Sampah) – edukasi dan penyediaan fasilitas waste drop box point",
      "Kompetisi Duta Anak KAO – Sekolah Sehat 2025",
    ],
    beneficiaries: [
      "10.781 peserta didik",
      "41 sekolah teredukasi (19 SMP, 22 SD)",
      "9 sekolah berpartisipasi dalam program Duta Anak KAO",
      "Tingkat pemahaman siswa 80%, tertinggi pada materi 7 Kebiasaan Anak Indonesia Hebat (89%)",
    ],
    locations: [
      "Ring 1 Target Area (Jabodetabek, Cikarang, Karawang)",
      "Kota Yogyakarta (bersamaan dengan penyediaan akses air bersih Gama Rain Filter System)",
      "Kabupaten Sentani, Papua",
      "Kabupaten Timor Tengah Selatan, NTT",
    ],
    funding: "IDR 617.700.999",
  },
  {
    name: "Danone Indonesia",
    period: "April s.d. Desember 2025",
    collaboration: ["Edukasi Pengelolaan Sampah"],
    activities: ["Edukasi Program Sampahku Tanggungjawabku (SAMTAKU) secara daring"],
    beneficiaries: [
      "1.000 satuan pendidikan jenjang SMP",
      "Peningkatan jumlah peserta didik teredukasi: dari target 2 juta pada 2025, tercapai kurang lebih 1,7 juta",
    ],
    locations: ["DKI Jakarta", "Banten", "Jawa Barat", "Jawa Tengah", "DI Yogyakarta", "Jawa Timur"],
  },
  {
    name: "Maleo Edukasi Teknologi",
    period: "November 2025",
    collaboration: ["Online Exchange Program Indonesia - Korea"],
    activities: ["Bintang Sobat SMP (Daring)"],
    beneficiaries: ["37 Bintang Sobat SMP 2025"],
    locations: ["37 Provinsi"],
    funding: "IDR 10.000.000",
  },
];

// The other 14 of 20 Mitra 2025 partners have no support record beyond their name.
// BGN is the one exception with a one-line note instead of "Belum ada data".
// KPM vs "Klinik Pendidikan MIPA": docs/content-source/kemitraan/kemitraan-curation.md open item 5 flags these
// as possibly the same partner under two different names; shown separately, verbatim,
// pending confirmation.
const mitraSupportOthers: SupportPartnerNote[] = [
  { name: "Cisarua Mountain Dairy" },
  { name: "Wings Group" },
  { name: "Mondelez Indonesia" },
  { name: "AIA Financial" },
  { name: "Yayasan Sagasitas Indonesia" },
  { name: "Wardhana" },
  { name: "Float Oat Indonesia" },
  { name: "Bio Farma" },
  { name: "Red Nose Foundation" },
  { name: "Klinik Pendidikan MIPA" },
  { name: "Universitas Pendidikan Indonesia (UPI)" },
  { name: "Badan Gizi Nasional (BGN)", note: "Mitra strategis pelaksanaan Program Prioritas Makan Bergizi Gratis (MBG)" },
  { name: "BPOM" },
  { name: "Center of Excellence" },
];

export const mitraPage: PageContent = {
  slug: "/mitra",
  title: "Mitra UKS/M",
  seoDescription: "Direktori mitra kementerian, lembaga internasional, dan dunia usaha yang mendukung penyelenggaraan UKS/M.",
  crumbs: [{ label: "Mitra UKS/M" }],
  blocks: [
    {
      type: "hero",
      eyebrow: "Mitra",
      title: "Mitra UKS/M",
      lead: "UKS/M terbuka bagi mitra kementerian/lembaga, dunia usaha, dan organisasi internasional yang ingin berkontribusi pada kesehatan sekolah.",
    },

    // ---------- Panduan Kemitraan (M-01, merged with SS-11) ----------
    { type: "anchor", id: "panduan" },
    {
      type: "themeGroups",
      title: "Bentuk Kerja Sama",
      intro: "Sepuluh bentuk kerja sama Mitra Sekolah Sehat, dikelompokkan dalam empat tema.",
      groups: [
        {
          title: "Sarana dan Prasarana",
          description: "Dukungan fisik untuk aktivitas Sekolah Sehat di satuan pendidikan.",
          items: [
            "Pembangunan sarana/fasilitas terkait aktivitas Sekolah Sehat",
            "Penyediaan prasarana/perlengkapan/peralatan penunjang beragam aktivitas Sekolah Sehat",
          ],
        },
        {
          title: "Kapasitas dan Edukasi",
          description: "Penguatan sumber daya manusia lewat pelatihan, narasumber, dan layanan konseling.",
          items: [
            "Penyelenggaraan kegiatan peningkatan kapasitas SDM/kegiatan edukatif bagi peserta didik, pendidik, guru, tenaga kependidikan, dan orang tua di satuan pendidikan (sekolah)",
            "Penyediaan narasumber atau ahli dalam kegiatan peningkatan kapasitas SDM/kegiatan edukatif bagi peserta didik, pendidik, guru, tenaga kependidikan, dan orang tua di satuan pendidikan (sekolah)",
            "Penyelenggaraan kegiatan edukasi atau bimbingan/konseling terkait kesehatan mental dan psikologis di satuan pendidikan",
          ],
        },
        {
          title: "Layanan Kesehatan",
          description: "Percepatan dan perluasan program imunisasi bagi peserta didik.",
          items: ["Dukungan terhadap pelaksanaan percepatan dan perluasan program imunisasi bagi peserta didik pada satuan pendidikan"],
        },
        {
          title: "Kampanye, Materi, dan Penghargaan",
          description: "Kompetisi, kampanye kreatif, dan materi publikasi Gerakan Sekolah Sehat.",
          items: [
            "Penyelenggaraan dan/atau pemberian hadiah/penghargaan kompetisi terkait Sekolah Sehat",
            "Penyelenggaraan gerakan kreatif di daerah, media massa, dan media sosial, termasuk pelibatan pemengaruh (influencer)",
            "Pencetakan dan pendistribusian materi/pedoman Sekolah Sehat",
            "Pembuatan iklan layanan masyarakat atau materi sosialisasi Sekolah Sehat",
          ],
        },
      ],
    },
    {
      type: "richText",
      title: "Ketentuan Kerja Sama",
      nodes: [
        {
          kind: "ul",
          items: [
            "Mitra dapat mengolaborasikan atau mengikutsertakan ongoing atau existing program/project sebagai bagian dari Sekolah Sehat namun tanpa menyebutkan merek produk atau layanan yang dikerjasamakan sebagai bentuk komitmen untuk menjadikan kampanye ini sebuah gerakan bersama.",
            "Kegiatan/program yang dikerjasamakan tidak bersifat atau bertujuan komersial.",
            "Mitra tidak diperkenankan untuk menjual produk/layanan yang dilakukan dalam kerangka Sekolah Sehat baik di satuan pendidikan maupun lingkungan satuan pendidikan.",
            "Dalam hal mitra akan memberikan bingkisan atau donasi berbentuk produk atau materi/bahan edukasi ke satuan pendidikan, maka harus terlebih dahulu dikurasi dan mendapat persetujuan dari Kemendikbudristek.",
            "Produk yang diberikan bukan berupa rokok, alat kontrasepsi, minuman keras, dan/atau makanan yang tidak sesuai dengan pedoman gizi seimbang dan sehat (tidak tinggi lemak, garam, dan gula, maupun mengandung zat-zat yang membahayakan).",
            "Segala kerja sama yang dilakukan dengan Kemendikbudristek didasarkan pada sebuah Perjanjian Kerja Sama yang akan disusun bersama dan dikoordinasikan oleh Direktorat Jenderal PAUD dan Dikdasmen Kemendikbudristek.",
          ],
        },
        {
          kind: "p",
          text: "Catatan: Kemendikbudristek terbuka terhadap bentuk atau ide lain terkait aktivitas yang potensial diselenggarakan bersama dalam kerangka program Sekolah Sehat selama sesuai ketentuan.",
        },
      ],
    },
    {
      type: "richText",
      title: "Manfaat Kerja Sama bagi Mitra",
      nodes: [
        {
          kind: "ul",
          items: [
            "Pencantuman logo Kemendikbudristek dan logo mitra dalam materi/bahan pedoman maupun materi publikasi Gerakan",
            "Penggunaan bahan/materi/produk/layanan yang dimiliki atau dikembangkan oleh mitra dalam kampanye di satuan pendidikan selama sesuai ketentuan dan telah dikurasi serta mendapatkan persetujuan dari Kemendikbudristek",
            "Penetapan wilayah untuk target/sasaran penerima program Sekolah Sehat dapat disesuaikan dengan wilayah atau area kerja maupun program yang dimiliki/direncanakan mitra",
            "Penyediaan narasumber dari pimpinan/pejabat Kemendikbudristek dalam kegiatan atau program yang dilakukan oleh mitra",
          ],
        },
      ],
    },

    // ---------- Kriteria & Pendaftaran Mitra (M-02, M-03) ----------
    { type: "anchor", id: "kriteria" },
    {
      type: "orgStructure",
      title: "Kriteria Mitra",
      intro: "Unsur-unsur mitra yang diharapkan berperan aktif dalam Kemitraan Sekolah Sehat (KSS).",
      groups: [
        {
          title: "Mitra Sektor Pemerintah",
          description: "Kementerian, Lembaga Pemerintah, Pemerintah Daerah, Unit Pelaksana Teknis, dan institusi pemerintah lainnya baik di pusat maupun daerah.",
          points: [
            "Memiliki program yang selaras dengan program Sekolah Sehat.",
            "Bersedia berbagi sumber daya dalam mendukung dan memperkuat program Sekolah Sehat.",
          ],
        },
        {
          title: "Mitra Pendukung Sektor Pemerintah",
          description: "Pokja Bunda PAUD, Tim Penggerak Pemberdayaan dan Kesejahteraan Keluarga (PKK), Dharma Wanita Persatuan (DWP), dan lainnya.",
          points: [
            "Memiliki program yang selaras dengan program Sekolah Sehat.",
            "Bersedia berbagi sumber daya dalam mendukung dan memperkuat program Sekolah Sehat.",
          ],
        },
        {
          title: "Mitra Sektor Non-Pemerintah",
          description: "BUMN, Dunia Usaha dan Dunia Industri (DUDI), Lembaga/Organisasi Kemasyarakatan, Yayasan, maupun bentuk organisasi/komunitas lainnya.",
          points: [
            "Memiliki ketertarikan di bidang pendidikan, khususnya program Sekolah Sehat.",
            "Diutamakan berbadan hukum (memiliki legalitas dokumen sesuai dengan ketentuan yang berlaku).",
            "Memiliki rekam jejak yang baik dan tidak pernah berhadapan atau bermasalah dengan hukum.",
            "Bersifat non-komersial dalam pelaksanaan sebagai Mitra Sekolah Sehat.",
            "Memiliki program yang relevan dengan pendanaan mandiri.",
          ],
        },
      ],
    },
    // M-03: prod's pendaftaran-mitra.md is a single-line stub ("Halaman Pendaftaran
    // Mitra sedang dikembangkan."). No working registration form or address exists yet,
    // so this is a status note plus a Kontak CTA rather than an invented form.
    {
      type: "ctaBand",
      title: "Pendaftaran Mitra",
      description: "Pendaftaran mitra sedang dikembangkan. Sementara itu, hubungi sekretariat UKS/M untuk mendiskusikan rencana kemitraan Anda.",
      actions: [{ label: "Hubungi Kami", href: "/kontak", variant: "primary" }],
    },

    // ---------- Mitra Kami (M-04) ----------
    { type: "anchor", id: "mitra-kami" },
    {
      type: "richText",
      title: "Bidang Usaha dan Bentuk Dukungan Mitra",
      nodes: [
        {
          kind: "p",
          text: "Bidang usaha mitra: Dunia Industri, Industri Pendidikan, Organisasi Masyarakat, Yayasan, Perusahaan Komunikasi, Badan PBB, dan lainnya.",
        },
        {
          kind: "ul",
          items: [
            "Melakukan pendampingan implementasi Penguatan Peran UKS atau Sekolah Sehat di satuan dampingan",
            "Pemberian bantuan sarana dan prasarana",
            "Dukungan untuk publikasi dan komunikasi",
            "Peningkatan Kapasitas Pendidik dan Peserta Didik",
          ],
        },
      ],
    },
    {
      type: "partnerMarquee",
      title: "Mitra Pilihan",
      intro: "Sebagian mitra UKS/M dengan logo terverifikasi; daftar lengkap per tahun ada di bawah.",
      partners: mitraPartners,
    },
    {
      type: "partnerYearList",
      title: "Mitra Berdasarkan Tahun",
      intro: "Seluruh mitra yang tercatat pada halaman Mitra Kami, dikelompokkan per tahun kerja sama.",
      groups: mitraPartnersByYear,
    },

    // ---------- Dukungan Mitra (M-05) ----------
    // TODO(content): M-05 owner to confirm publication — docs/reports/content-inventory.md
    // marks this row "decide"; the detailed records below are real
    // (docs/content-source/kemitraan/dukungan-mitra.md) but an owner still needs to confirm this table should go live.
    { type: "anchor", id: "dukungan" },
    {
      type: "supportTable",
      title: "Dukungan Mitra 2025",
      intro: "Bentuk dukungan mitra yang tercatat pada tahun 2025. Enam mitra memiliki catatan rinci; mitra lain belum memiliki data yang tercatat.",
      records: mitraSupportRecords,
      othersTitle: "Mitra Lain Tahun 2025 (Belum Ada Data)",
      others: mitraSupportOthers,
    },
  ],
};
