/**
 * Global, page-independent site facts. In a real CMS this would be a single
 * "site settings" document editors fill in once (mirrors appConfig / stats
 * from the source portal's own data model).
 */
export const site = {
  name: "Portal UKS/M",
  fullName: "Usaha Kesehatan Sekolah/Madrasah",
  ministry: "Kementerian Pendidikan Dasar dan Menengah RI",
  tagline: "Mewujudkan generasi Indonesia yang sehat, mulai dari sekolah.",
  logo: "/images/brand/logo.png",
  contact: {
    address: "Gedung E Lantai 5, Kemendikbudristek, Jl. Jenderal Sudirman, Senayan, Jakarta 10270",
    email: "uks.dikdasmen@kemdikbud.go.id",
    phone: "021-5703303",
  },
  stats: [
    { value: 15000, suffix: "+", label: "Sekolah binaan" },
    { value: 50000, suffix: "+", label: "Dokter kecil" },
    { value: 25000, suffix: "+", label: "Kader TIWISADA" },
    { value: 38, suffix: "", label: "Provinsi terjangkau" },
  ],
  social: {
    instagram: undefined as string | undefined,
    youtube: undefined as string | undefined,
  },
  /**
   * The four ministries behind UKS/M (docs/sitemaps/sitemap-portal-uks.md, footer row
   * G-04's "lintas 4 Kementerian"), for Beranda's "Dikembangkan oleh /
   * Tautan Terkait" section (B-15). Text links only — no logo files exist
   * for this mockup, and the task explicitly rules out inventing them.
   */
  ministryLinks: [
    { name: "Kementerian Pendidikan Dasar dan Menengah", href: "https://kemendikdasmen.go.id" },
    { name: "Kementerian Kesehatan", href: "https://kemkes.go.id" },
    { name: "Kementerian Agama", href: "https://kemenag.go.id" },
    { name: "Kementerian Dalam Negeri", href: "https://www.kemendagri.go.id" },
  ],
};
