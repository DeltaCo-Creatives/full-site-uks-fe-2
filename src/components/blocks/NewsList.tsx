import { useMemo, type ReactNode } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn, formatDate } from "@/lib/utils";
import type { Block, NewsItem } from "@/content/types";

/**
 * Legacy prod URLs filtered Praktik Baik by numeric category id
 * (`?kategori=15` for 7KAIH, `?kategori=16` for MBG — see
 * docs/sitemaps/sitemap-portal-uks.md §3). The rebuilt filter uses the category's own
 * label instead, so an incoming numeric code is translated once on read.
 */
const LEGACY_KATEGORI_CODES: Record<string, string> = { "15": "7kaih", "16": "mbg" };

function normalizeKategoriParam(raw: string | null): string | null {
  if (!raw) return null;
  return LEGACY_KATEGORI_CODES[raw] ?? raw;
}

function NewsCardShell({ item, basePath, children }: { item: NewsItem; basePath: string; children: ReactNode }) {
  const classes =
    "group flex h-full flex-col overflow-hidden rounded-2xl border border-paper-200 bg-paper-50 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card";
  // Only link through when there's an actual detail page for it (has a body) —
  // linking to a page that doesn't exist is exactly the "blank page" bug this
  // rebuild set out to avoid.
  if (item.body?.length) {
    return (
      <Link to={`${basePath}/${item.slug}`} className={classes}>
        {children}
      </Link>
    );
  }
  return <div className={classes}>{children}</div>;
}

const ALL_CATEGORIES = "Semua";

export function NewsList({ block }: { block: Extract<Block, { type: "newsList" }> }) {
  const basePath = block.basePath ?? "/berita";
  const [params, setParams] = useSearchParams();

  const allItems = useMemo(() => block.items ?? [], [block.items]);
  const categories = useMemo(() => {
    const seen = new Set<string>();
    for (const item of allItems) {
      if (item.category) seen.add(item.category);
    }
    return [...seen];
  }, [allItems]);

  const activeCategory = useMemo(() => {
    if (!block.filterable) return null;
    const normalized = normalizeKategoriParam(params.get("kategori"));
    if (!normalized) return ALL_CATEGORIES;
    const match = categories.find((c) => c.toLowerCase() === normalized.toLowerCase());
    return match ?? ALL_CATEGORIES;
  }, [block.filterable, categories, params]);

  const items = block.filterable && activeCategory && activeCategory !== ALL_CATEGORIES
    ? allItems.filter((item) => item.category === activeCategory)
    : allItems;

  function setCategory(category: string) {
    const next = new URLSearchParams(params);
    if (category === ALL_CATEGORIES) next.delete("kategori");
    else next.set("kategori", category.toLowerCase());
    setParams(next, { replace: true });
  }

  if (allItems.length === 0) return null;

  return (
    <section className="py-12 sm:py-16">
      <Container>
        <SectionHeading
          title={block.title}
          action={
            block.viewAllHref && (
              <LinkButton href={block.viewAllHref} variant="ghost">
                Lihat Semua
              </LinkButton>
            )
          }
        />
        {block.filterable && categories.length > 1 && (
          <div role="group" aria-label="Filter kategori" className="mb-6 flex flex-wrap gap-2">
            {[ALL_CATEGORIES, ...categories].map((category) => (
              <button
                key={category}
                type="button"
                aria-pressed={activeCategory === category}
                onClick={() => setCategory(category)}
                className={cn(
                  "rounded-full px-4 py-1.5 text-sm font-medium transition-colors",
                  activeCategory === category
                    ? "bg-brand-700 text-paper-50"
                    : "bg-paper-100 text-ink-700 hover:bg-paper-200",
                )}
              >
                {category}
              </button>
            ))}
          </div>
        )}
        {items.length === 0 && (
          <p className="text-ink-500">Belum ada konten pada kategori ini.</p>
        )}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => (
            <Reveal key={item.slug} delay={Math.min(i * 0.05, 0.25)}>
              <NewsCardShell item={item} basePath={basePath}>
                <div className="aspect-[16/10] w-full overflow-hidden bg-paper-200">
                  {item.image ? (
                    <img
                      src={item.image}
                      alt=""
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="grid h-full w-full place-items-center text-ink-700">
                      <span className="font-display text-sm">UKS/M</span>
                    </div>
                  )}
                </div>
                <div className="flex flex-1 flex-col p-5">
                  {item.category && (
                    <span className="mb-2 w-fit rounded-full bg-brand-100 px-2.5 py-0.5 text-xs font-semibold text-brand-700">
                      {item.category}
                    </span>
                  )}
                  <h3 className="line-clamp-2 font-display text-base leading-snug text-ink-950">{item.title}</h3>
                  <p className="mt-2 line-clamp-2 flex-1 text-sm text-ink-700">{item.excerpt}</p>
                  <p className="mt-3 text-xs font-medium text-ink-500">{formatDate(item.date)}</p>
                </div>
              </NewsCardShell>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
