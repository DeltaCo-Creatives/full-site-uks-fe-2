import { BlockRenderer } from "@/components/blocks";
import { homePage } from "@/content/pages/home";
import { usePageMeta } from "@/hooks/usePageMeta";

export function HomePage() {
  usePageMeta(homePage.title, homePage.seoDescription);
  return <BlockRenderer blocks={homePage.blocks} />;
}
