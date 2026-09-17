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
};
