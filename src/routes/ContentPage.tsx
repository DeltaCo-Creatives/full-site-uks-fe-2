import { useLocation } from "react-router-dom";
import { BlockRenderer } from "@/components/blocks";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { pageRegistry } from "@/content/registry";
import { usePageMeta } from "@/hooks/usePageMeta";
import { NotFoundPage } from "./NotFoundPage";

/**
 * Generic renderer used by every static content route: look the current
 * path up in the page registry and render its blocks. Swapping the registry
 * lookup for a CMS fetch-by-slug call is the entire migration path.
 */
export function ContentPage() {
  const { pathname } = useLocation();
  const page = pageRegistry[pathname];

  usePageMeta(page?.title ?? "Halaman tidak ditemukan", page?.seoDescription);

  if (!page) return <NotFoundPage />;

  return (
    <>
      <Breadcrumbs crumbs={page.crumbs} />
      <BlockRenderer blocks={page.blocks} />
    </>
  );
}
