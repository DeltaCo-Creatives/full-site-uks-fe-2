import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { formatDate } from "@/lib/utils";
import type { Block, NewsItem } from "@/content/types";

function NewsCardShell({ item, children }: { item: NewsItem; children: ReactNode }) {
  const classes =
    "group flex h-full flex-col overflow-hidden rounded-2xl border border-paper-200 bg-paper-50 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card";
  // Only link through when there's an actual detail page for it (has a body) —
  // linking to a page that doesn't exist is exactly the "blank page" bug this
  // rebuild set out to avoid.
  if (item.body?.length) {
    return (
      <Link to={`/berita/${item.slug}`} className={classes}>
        {children}
      </Link>
    );
  }
  return <div className={classes}>{children}</div>;
}

export function NewsList({ block }: { block: Extract<Block, { type: "newsList" }> }) {
  const items = block.items ?? [];
  if (items.length === 0) return null;

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
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => (
            <Reveal key={item.slug} delay={Math.min(i * 0.05, 0.25)}>
              <NewsCardShell item={item}>
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
