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

export interface PillarItem {
  number: number;
  title: string;
  description: string;
  items: string[];
}

export interface StrataLevel {
  name: string;
  description: string;
}

export interface OrgGroup {
  title: string;
  description: string;
  points?: string[];
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

export interface RichTextNode {
  kind: "p" | "h3" | "ul" | "ol";
  text?: string;
  items?: string[];
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
  | { type: "focusGrid"; title?: string; intro?: string; items: FocusItem[]; footnote?: string }
  | { type: "newsList"; title?: string; viewAllHref?: string; basePath?: string; items: NewsItem[] }
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
  | { type: "contactBlock"; title?: string; address: string; email: string; phone?: string };

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
