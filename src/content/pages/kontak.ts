import type { PageContent } from "../types";

/**
 * The source production site's Kontak page is a well-known dead link — the
 * header button is on every page but the route 500s with a missing
 * component. This page intentionally works.
 */
export const kontakPage: PageContent = {
  slug: "/kontak",
  title: "Kontak",
  seoDescription: "Hubungi sekretariat Portal UKS/M: alamat, email, dan telepon resmi.",
  crumbs: [{ label: "Kontak" }],
  blocks: [
    { type: "hero", eyebrow: "Kontak", title: "Hubungi Kami", lead: "Ada pertanyaan seputar UKS/M, program prioritas, atau kemitraan? Sekretariat UKS/M siap membantu." },
    {
      type: "contactBlock",
      address: "Gedung E Lantai 5, Kemendikbudristek, Jl. Jenderal Sudirman, Senayan, Jakarta 10270",
      email: "uks.dikdasmen@kemdikbud.go.id",
      phone: "021-5703303",
    },
  ],
};
