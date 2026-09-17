import type { PageContent } from "../types";

/**
 * The source menu spec flagged an open question: the homepage's five
 * "Fokus Sekolah Sehat" cards all point at one shared page (confirmed by
 * the client), while the nav listed five separate entries — inconsistent,
 * and the client had already asked for it to be simplified. This page
 * resolves it the way the client wanted: one page, five anchored sections.
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
      lead: "Lima fokus yang menjadi acuan pembinaan satuan pendidikan menuju sekolah yang sehat secara menyeluruh.",
    },
    {
      type: "focusGrid",
      items: [
        { id: "sehat-bergizi", title: "Sehat Bergizi", icon: "Heart", description: "Pemenuhan gizi seimbang untuk mendukung pertumbuhan dan prestasi belajar, termasuk lewat integrasi dengan program Makan Bergizi Gratis." },
        { id: "sehat-fisik", title: "Sehat Fisik", icon: "Award", description: "Aktivitas fisik rutin dan olahraga terjadwal untuk menjaga kebugaran jasmani peserta didik." },
        { id: "sehat-imunisasi", title: "Sehat Imunisasi", icon: "Syringe", description: "Perlindungan dari penyakit menular melalui program imunisasi lengkap dan terjadwal." },
        { id: "sehat-jiwa", title: "Sehat Jiwa", icon: "Smile", description: "Dukungan kesehatan mental dan kesejahteraan psikososial bagi peserta didik dan tenaga pendidik." },
        { id: "sehat-lingkungan", title: "Sehat Lingkungan", icon: "TreePine", description: "Lingkungan sekolah yang bersih, hijau, dan berkelanjutan sebagai tempat belajar yang layak." },
      ],
      footnote: "Kelima fokus ini saling terkait dan dilaksanakan bersamaan sebagai satu kesatuan Gerakan Sekolah Sehat, bukan program yang berdiri sendiri-sendiri.",
    },
    {
      type: "richText",
      title: "Bahan Advokasi GSS",
      nodes: [
        { kind: "p", text: "Materi advokasi Gerakan Sekolah Sehat tersedia bagi dinas pendidikan, kepala sekolah, dan pemangku kepentingan lain untuk mendukung sosialisasi program di daerah masing-masing." },
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
