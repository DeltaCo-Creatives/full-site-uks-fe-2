import { useMemo, useState, type FormEvent } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Search } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { searchIndex } from "@/content/registry";
import { usePageMeta } from "@/hooks/usePageMeta";

const suggestions = ["Kesehatan Siswa", "Stratifikasi UKS/M", "Gizi Sekolah", "Cuci Tangan"];

export function SearchPage() {
  usePageMeta("Pencarian");
  const [params, setParams] = useSearchParams();
  const [query, setQuery] = useState(params.get("q") ?? "");

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return searchIndex.filter((e) => e.title.toLowerCase().includes(q) || e.excerpt.toLowerCase().includes(q)).slice(0, 20);
  }, [query]);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    setParams(query ? { q: query } : {});
  }

  return (
    <section className="py-14 sm:py-20">
      <Container className="max-w-2xl">
        <Reveal>
          <h1 className="text-center font-display text-3xl text-ink-950 sm:text-4xl">Pencarian</h1>
          <form onSubmit={onSubmit} className="relative mt-8">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-ink-500" size={19} />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Ketik kata kunci, mis. stratifikasi, gizi, imunisasi..."
              className="w-full rounded-full border border-paper-200 bg-paper-50 py-3.5 pl-12 pr-5 text-sm text-ink-900 shadow-soft placeholder:text-ink-500 focus:border-brand-500"
              autoFocus
            />
          </form>

          {!query && (
            <div className="mt-6 flex flex-wrap justify-center gap-2">
              {suggestions.map((s) => (
                <button
                  key={s}
                  onClick={() => setQuery(s)}
                  className="rounded-full bg-paper-100 px-3.5 py-1.5 text-sm text-ink-700 hover:bg-paper-200"
                >
                  {s}
                </button>
              ))}
            </div>
          )}
        </Reveal>

        <div className="mt-10 space-y-3">
          {query && results.length === 0 && (
            <p className="text-center text-ink-500">Tidak ada hasil untuk “{query}”. Coba kata kunci lain.</p>
          )}
          {results.map((r) => (
            <Reveal key={r.href + r.title}>
              <Link
                to={r.href}
                className="block rounded-2xl border border-paper-200 bg-paper-50 p-5 shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-card"
              >
                <span className="text-xs font-semibold uppercase tracking-wide text-accent-700">{r.group}</span>
                <h2 className="mt-1 font-display text-lg text-ink-950">{r.title}</h2>
                <p className="mt-1 line-clamp-2 text-sm text-ink-700">{r.excerpt}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
