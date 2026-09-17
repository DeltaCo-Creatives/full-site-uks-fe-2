import type { PageContent, Partner } from "../types";

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
    {
      type: "richText",
      title: "Bentuk Kerja Sama",
      nodes: [
        { kind: "ul", items: [
          "Dukungan sarana dan prasarana kesehatan sekolah",
          "Program pengembangan kapasitas (capacity-building) bagi tenaga pendidik dan kader kesehatan",
          "Dukungan publikasi dan komunikasi program",
          "Kontribusi riset dan evaluasi program UKS/M",
        ] },
      ],
    },
    {
      type: "partnerMarquee",
      title: "Direktori Mitra",
      intro: "Sebagian dari lebih 60 mitra yang tercatat aktif mendukung UKS/M.",
      partners: mitraPartners,
    },
    {
      type: "ctaBand",
      title: "Ingin bermitra dengan UKS/M?",
      description: "Hubungi sekretariat UKS/M untuk mendiskusikan bentuk dukungan dan kerja sama yang sesuai.",
      actions: [{ label: "Hubungi Kami", href: "/kontak", variant: "primary" }],
    },
  ],
};
