import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { uptStories } from "@/content/upt";
import { usePageMeta } from "@/hooks/usePageMeta";
import { formatDate, cn } from "@/lib/utils";

export function UptBerceritaListPage() {
  usePageMeta("UPT Bercerita", "Cerita pendampingan program UKS/M dari unit pelaksana teknis di berbagai daerah.");
  const categories = useMemo(() => ["Semua", ...new Set(uptStories.map((s) => s.category))], []);
  const [active, setActive] = useState("Semua");

  const items = active === "Semua" ? uptStories : uptStories.filter((s) => s.category === active);

  return (
    <>
      <Breadcrumbs crumbs={[{ label: "Informasi", href: "/informasi" }, { label: "UPT Bercerita" }]} />
      <section className="py-12 sm:py-16">
        <Container>
          <Reveal className="mb-10 max-w-2xl">
            <h1 className="font-display text-3xl text-ink-950 sm:text-4xl">UPT Bercerita</h1>
            <p className="mt-3 text-ink-700">
              Cerita pendampingan program UKS/M dari unit pelaksana teknis (UPT) di berbagai daerah, mulai dari MBG, CKG, hingga 7KAIH.
            </p>
          </Reveal>

          <Reveal className="mb-8 flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={cn(
                  "rounded-full px-4 py-1.5 text-sm font-medium transition-colors",
                  active === cat ? "bg-brand-700 text-paper-50" : "bg-paper-100 text-ink-700 hover:bg-paper-200",
                )}
              >
                {cat}
              </button>
            ))}
          </Reveal>

          {items.length === 0 ? (
            <p className="text-ink-500">Belum ada cerita pada kategori ini.</p>
          ) : (
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((item, i) => (
                <Reveal key={item.slug} delay={Math.min(i * 0.04, 0.3)}>
                  <Link
                    to={`/informasi/upt-bercerita/${item.slug}`}
                    className="group flex h-full flex-col overflow-hidden rounded-2xl border border-paper-200 bg-paper-50 p-5 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
                  >
                    <span className="mb-2 w-fit rounded-full bg-brand-100 px-2.5 py-0.5 text-xs font-semibold text-brand-700">
                      {item.category}
                    </span>
                    <h2 className="line-clamp-2 font-display text-base leading-snug text-ink-950">{item.title}</h2>
                    <p className="mt-2 line-clamp-3 flex-1 text-sm text-ink-700">{item.excerpt}</p>
                    <div className="mt-3 flex items-center justify-between text-xs font-medium text-ink-500">
                      <span>{item.region}</span>
                      <span>{formatDate(item.date)}</span>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          )}
        </Container>
      </section>
    </>
  );
}
