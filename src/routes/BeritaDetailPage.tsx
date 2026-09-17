import { Link, useParams } from "react-router-dom";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { beritaItems } from "@/content/berita";
import { usePageMeta } from "@/hooks/usePageMeta";
import { formatDate } from "@/lib/utils";
import { NotFoundPage } from "./NotFoundPage";

export function BeritaDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const item = beritaItems.find((b) => b.slug === slug);
  const related = beritaItems.filter((b) => b.slug !== slug).slice(0, 3);

  usePageMeta(item?.title ?? "Berita", item?.excerpt);

  if (!item) return <NotFoundPage />;

  return (
    <>
      <Breadcrumbs crumbs={[{ label: "Berita", href: "/berita" }, { label: item.title }]} />
      <article className="py-12 sm:py-16">
        <Container>
          <Reveal className="mx-auto max-w-2xl">
            {item.category && (
              <span className="mb-4 inline-block rounded-full bg-brand-100 px-3 py-1 text-xs font-semibold text-brand-700">
                {item.category}
              </span>
            )}
            <h1 className="text-balance font-display text-3xl leading-tight text-ink-950 sm:text-4xl">{item.title}</h1>
            <p className="mt-4 text-sm font-medium text-ink-500">{formatDate(item.date)}</p>
          </Reveal>

          {item.image && (
            <Reveal delay={0.1} className="mx-auto mt-8 max-w-3xl overflow-hidden rounded-3xl shadow-card">
              <img src={item.image} alt="" className="w-full object-cover" />
            </Reveal>
          )}

          <Reveal delay={0.15} className="mx-auto mt-8 max-w-2xl space-y-4 text-pretty leading-relaxed text-ink-700">
            {(item.body ?? [item.excerpt]).map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </Reveal>
        </Container>
      </article>

      {related.length > 0 && (
        <section className="border-t border-paper-200 bg-paper-100/50 py-12 sm:py-16">
          <Container>
            <h2 className="mb-6 font-display text-2xl text-ink-950">Berita Lainnya</h2>
            <div className="grid gap-5 sm:grid-cols-3">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  to={`/berita/${r.slug}`}
                  className="group rounded-2xl border border-paper-200 bg-paper-50 p-5 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
                >
                  <h3 className="line-clamp-2 font-display text-base text-ink-950">{r.title}</h3>
                  <p className="mt-2 text-xs text-ink-500">{formatDate(r.date)}</p>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}
    </>
  );
}
