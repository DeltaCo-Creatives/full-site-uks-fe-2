import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ResourceLink } from "@/components/ui/ResourceLink";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { AdvocacyGroup, Block } from "@/content/types";

// Stable reference so a page with no groups doesn't retrigger useMemo on every render
// (block.groups ?? [] would otherwise allocate a fresh empty array each time).
const EMPTY_GROUPS: AdvocacyGroup[] = [];

/** Client-side text filter over produk hukum / materi kampanye: matches title or category,
 * case-insensitively, and drops groups left with no matches instead of showing an empty heading. */
function filterGroups(groups: AdvocacyGroup[], query: string): AdvocacyGroup[] {
  const q = query.trim().toLowerCase();
  if (!q) return groups;
  return groups
    .map((group) => ({
      ...group,
      items: group.items.filter((item) => item.title.toLowerCase().includes(q) || item.category.toLowerCase().includes(q)),
    }))
    .filter((group) => group.items.length > 0);
}

export function AdvocacyList({ block }: { block: Extract<Block, { type: "advocacyList" }> }) {
  const groups = block.groups ?? EMPTY_GROUPS;
  const [query, setQuery] = useState("");
  const filteredGroups = useMemo(() => filterGroups(groups, query), [groups, query]);
  const totalCount = useMemo(() => groups.reduce((sum, group) => sum + group.items.length, 0), [groups]);

  if (groups.length === 0) return null;

  return (
    <section id={block.anchorId} className="scroll-mt-24 py-12 sm:py-16">
      <Container>
        <SectionHeading title={block.title} intro={block.intro} />

        <Reveal className="relative mb-8 max-w-md">
          <label htmlFor="advocacy-search" className="sr-only">
            Cari dokumen bahan advokasi
          </label>
          <Search size={16} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-ink-500" aria-hidden="true" />
          <input
            id="advocacy-search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={`Cari dari ${totalCount} dokumen…`}
            className="w-full rounded-full border border-paper-200 bg-paper-50 py-2.5 pl-11 pr-4 text-sm text-ink-900 shadow-soft outline-none transition-colors focus:border-brand-700"
          />
        </Reveal>

        {filteredGroups.length === 0 && (
          <p className="text-sm text-ink-500">Tidak ada dokumen yang cocok dengan pencarian &ldquo;{query}&rdquo;.</p>
        )}

        <div className="space-y-10">
          {filteredGroups.map((group) => (
            <div key={group.title}>
              <h3 className="mb-4 font-display text-lg text-ink-950">
                {group.title} <span className="text-sm font-normal text-ink-500">({group.items.length})</span>
              </h3>
              <ul className="grid gap-3 sm:grid-cols-2">
                {group.items.map((item) => (
                  <Reveal
                    as="li"
                    key={item.title}
                    className="flex items-start justify-between gap-3 rounded-xl border border-paper-200 bg-paper-50 p-4 shadow-soft"
                  >
                    <div className="min-w-0">
                      <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-accent-700">{item.category}</p>
                      <p className="break-words text-sm leading-snug text-ink-800">{item.title}</p>
                    </div>
                    <ResourceLink
                      href={item.href}
                      className="shrink-0 whitespace-nowrap text-sm font-semibold text-brand-700 hover:underline"
                      unavailableClassName="shrink-0 whitespace-nowrap text-xs italic text-ink-500"
                    >
                      Unduh
                    </ResourceLink>
                  </Reveal>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
