/**
 * Content model for the whole site.
 *
 * Every page is a flat list of typed "blocks". Components under
 * src/components/blocks render one block type each and never assume a field
 * is present beyond what its type guarantees — optional fields are checked,
 * missing arrays are treated as empty. That's what makes this CMS-safe: a
 * future admin panel can produce this exact JSON shape (or a subset of it)
 * and no page can visually break, only look sparser than intended.
 */

export interface NavLink {
  label: string;
  href: string;
  external?: boolean;
  children?: NavLink[];
  /** Non-clickable group heading inside a nav section, e.g. "TRIAS UKS/M". */
  isGroupLabel?: boolean;
}

export interface NavSection {
  label: string;
  href?: string;
  children?: NavLink[];
}

export interface Crumb {
  label: string;
  href?: string;
}

export interface StatItem {
  value: number;
  suffix?: string;
  label: string;
}

export interface CardItem {
  title: string;
  description?: string;
  href?: string;
  external?: boolean;
  image?: string;
  badge?: string;
  eyebrow?: string;
}

export interface NewsItem {
  slug: string;
  title: string;
  excerpt: string;
  image?: string;
  date: string;
  category?: string;
  body?: string[];
}

export interface UptStory {
  slug: string;
  title: string;
  region: string;
  category: "7KAIH" | "CKG" | "MBG" | "UKS";
  date: string;
  excerpt: string;
  image?: string;
  body?: string[];
}

export interface DocItem {
  title: string;
  description?: string;
  date: string;
  image?: string;
  fileUrl?: string;
}

export interface VideoItem {
  title: string;
  date: string;
  image?: string;
  youtubeUrl: string;
}

export interface Partner {
  name: string;
  logo: string;
  href?: string;
}

/** One labeled section inside a sub-program's detail (Kegiatan, Sarana, Langkah-langkah, Tugas, Tautan Penting...). */
export interface SubProgramSection {
  heading: string;
  kind: "numberList" | "bulletList" | "linkList";
  items?: string[];
  /** Only for kind "linkList". A null url renders as plain, non-clickable text. */
  links?: { label: string; url: string | null }[];
}

/** A single Trias UKS/M sub-program (e.g. "Literasi Kesehatan"). Field presence is
 * intentionally inconsistent across items — see docs/content-source/trias-uks-content.MD. */
export interface SubProgram {
  /** Slug used as the DOM id, so /uksm/trias#{id} can deep-link into it. */
  id: string;
  title: string;
  description: string;
  waktu?: string;
  tempat?: string;
  pelaksana?: string;
  sasaran?: string;
  sections?: SubProgramSection[];
}

export interface PillarItem {
  number: number;
  title: string;
  description: string;
  items: SubProgram[];
}

export interface StrataLevel {
  name: string;
  description: string;
}

/** Placeholder slot for an org chart image pending final asset delivery. */
export interface OrgImage {
  alt: string;
  caption?: string;
  src?: string;
  /** e.g. "1010/814", to reserve the final image's aspect ratio. */
  aspectRatio?: string;
}

export interface OrgSection {
  heading: string;
  text?: string;
  items?: string[];
}

export interface OrgGroup {
  title: string;
  description: string;
  points?: string[];
  sections?: OrgSection[];
  image?: OrgImage;
}

export interface StrataRubricLevel {
  name: string;
  /** e.g. "Dipenuhinya strata minimal, plus:" for cumulative tiers. */
  note?: string;
  items: string[];
}

export interface StrataRubricCategory {
  title: string;
  /** One entry per strata, in the same order as the block's strataNames. */
  levels: StrataRubricLevel[];
}

export interface FocusItem {
  id: string;
  title: string;
  icon: string;
  description: string;
}

export interface LinkGroup {
  title: string;
  links: NavLink[];
}

/** A sub-topic inside a Sekolah Sehat focus tab, e.g. "Isi Piringku" under Sehat Bergizi. */
export interface FocusSubProgram {
  title: string;
  description: string;
  items?: string[];
}

/** A downloadable resource or external tool linked from a focus tab. `href: null` means the
 * source link is dead/private and the UI shows "Belum tersedia" instead of a broken link. */
export interface FocusResourceLink {
  label: string;
  href: string | null;
}

export interface FocusSection {
  id: string;
  title: string;
  icon: string;
  summary: string;
  activities: string[];
  programs?: FocusSubProgram[];
  video?: { title: string; youtubeUrl: string };
  tools: FocusResourceLink[];
}

/** A produk hukum or campaign-material entry in GSS's Bahan Advokasi list (also reused by
 * Publikasi's Produk Hukum page). `href: null` follows the same dead-link convention as
 * FocusResourceLink. */
export interface AdvocacyItem {
  title: string;
  category: string;
  href: string | null;
}

export interface AdvocacyGroup {
  title: string;
  items: AdvocacyItem[];
}

export interface RichTextNode {
  kind: "p" | "h3" | "ul" | "ol";
  text?: string;
  items?: string[];
}

/** One theme card grouping related forms of cooperation (Mitra ▸ panduan). */
export interface ThemeGroup {
  title: string;
  description?: string;
  items: string[];
}

/** Partner names for one cooperation year, text-only (Mitra ▸ mitra-kami). */
export interface PartnerYearGroup {
  year: string;
  names: string[];
}

/** One detailed 2025 support record (Mitra ▸ dukungan). Array fields render as lists. */
export interface SupportRecord {
  name: string;
  period?: string;
  collaboration: string[];
  activities: string[];
  beneficiaries: string[];
  locations: string[];
  funding?: string;
}

/** A partner with no support record on file yet, shown by name instead of hidden. */
export interface SupportPartnerNote {
  name: string;
  note?: string;
}

export type Block =
  | { type: "hero"; eyebrow?: string; title: string; lead?: string; image?: string }
  | { type: "heroSlider"; slides: HeroSlide[] }
  | { type: "statBand"; items: StatItem[] }
  | { type: "richText"; title?: string; nodes: RichTextNode[] }
  | { type: "cardGrid"; title?: string; intro?: string; columns?: 2 | 3 | 4; cards: CardItem[] }
  | { type: "pillarAccordion"; title?: string; intro?: string; pillars: PillarItem[] }
  | {
      type: "strataJourney";
      title?: string;
      intro?: string;
      levels: StrataLevel[];
      categories: string[];
      externalHref: string;
      externalLabel: string;
    }
  | { type: "orgStructure"; title?: string; intro?: string; groups: OrgGroup[] }
  | {
      type: "strataRubric";
      title?: string;
      intro?: string;
      /** e.g. "SD/MI" — the source rubric only covers this jenjang. */
      jenjang?: string;
      strataNames: string[];
      categories: StrataRubricCategory[];
    }
  | { type: "focusGrid"; title?: string; intro?: string; items: FocusItem[]; footnote?: string }
  | { type: "focusTabs"; title?: string; intro?: string; sections: FocusSection[] }
  | { type: "advocacyList"; title?: string; intro?: string; anchorId?: string; groups: AdvocacyGroup[] }
  | { type: "newsList"; title?: string; viewAllHref?: string; basePath?: string; items: NewsItem[]; filterable?: boolean }
  | { type: "docGrid"; title?: string; anchorId?: string; viewAllHref?: string; items: DocItem[] }
  | { type: "videoGrid"; title?: string; anchorId?: string; viewAllHref?: string; items: VideoItem[] }
  | { type: "partnerMarquee"; title?: string; intro?: string; partners: Partner[] }
  | {
      type: "ctaBand";
      eyebrow?: string;
      title: string;
      description?: string;
      actions: { label: string; href: string; variant?: "primary" | "ghost"; external?: boolean }[];
    }
  | { type: "linkGrid"; title?: string; groups: LinkGroup[] }
  | { type: "contactBlock"; title?: string; address: string; email: string; phone?: string }
  /** Invisible scroll target for in-page hash links (e.g. /mitra#panduan). */
  | { type: "anchor"; id: string }
  | { type: "themeGroups"; title?: string; intro?: string; groups: ThemeGroup[] }
  | { type: "partnerYearList"; title?: string; intro?: string; groups: PartnerYearGroup[] }
  | {
      type: "supportTable";
      title?: string;
      intro?: string;
      records: SupportRecord[];
      othersTitle?: string;
      others: SupportPartnerNote[];
    };

export interface HeroSlide {
  id: string;
  kind: "promo" | "berita";
  title: string;
  description: string;
  image: string;
  href?: string;
  ctaLabel?: string;
}

export interface PageContent {
  slug: string;
  title: string;
  seoDescription: string;
  crumbs: Crumb[];
  blocks: Block[];
}
