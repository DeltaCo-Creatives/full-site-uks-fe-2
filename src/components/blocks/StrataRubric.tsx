import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { Block, StrataRubricLevel } from "@/content/types";

function LevelCell({ level }: { level: StrataRubricLevel }) {
  if (level.items.length === 0 && !level.note) return <span className="text-ink-400">&mdash;</span>;
  return (
    <div className="space-y-1.5">
      {level.note && <p className="text-xs italic text-ink-500">{level.note}</p>}
      <ul className="space-y-1.5">
        {level.items.map((item, i) => (
          <li key={i} className="flex gap-2 text-sm leading-relaxed text-ink-700">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500" aria-hidden="true" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/**
 * Indicator rubric: categories x strata. A real <table> (horizontally
 * scrollable within its own frame, never the page) on wide screens, and
 * one stacked card per category — strata listed vertically — on mobile.
 */
export function StrataRubric({ block }: { block: Extract<Block, { type: "strataRubric" }> }) {
  const categories = block.categories ?? [];
  const strataNames = block.strataNames ?? [];
  if (categories.length === 0 || strataNames.length === 0) return null;

  return (
    <section className="py-12 sm:py-16">
      <Container>
        <SectionHeading
          title={block.title}
          intro={block.intro}
          action={block.jenjang && <span className="text-sm font-medium text-ink-500">Jenjang: {block.jenjang}</span>}
        />

        {/* Desktop / tablet: real table, scrollable within its own frame only. */}
        <Reveal className="hidden overflow-x-auto rounded-2xl border border-paper-200 shadow-soft lg:block">
          <table className="w-full min-w-[880px] table-fixed border-collapse bg-paper-50 text-left">
            <thead>
              <tr className="bg-brand-950 text-paper-50">
                <th scope="col" className="w-48 px-5 py-4 font-display text-sm font-semibold">
                  Kategori
                </th>
                {strataNames.map((name) => (
                  <th key={name} scope="col" className="px-5 py-4 font-display text-sm font-semibold">
                    {name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {categories.map((category, ci) => (
                <tr key={category.title} className={ci % 2 === 1 ? "bg-paper-100/60" : undefined}>
                  <th scope="row" className="align-top px-5 py-5 font-display text-sm text-ink-950">
                    {category.title}
                  </th>
                  {strataNames.map((name, li) => (
                    <td key={name} className="align-top border-l border-paper-200 px-5 py-5">
                      {category.levels[li] ? <LevelCell level={category.levels[li]} /> : <span className="text-ink-400">&mdash;</span>}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>

        {/* Mobile / tablet: one card per category, strata stacked vertically. */}
        <div className="space-y-5 lg:hidden">
          {categories.map((category) => (
            <Reveal
              key={category.title}
              className="rounded-2xl border border-paper-200 bg-paper-50 p-5 shadow-soft"
            >
              <h3 className="font-display text-lg text-ink-950">{category.title}</h3>
              <div className="mt-4 space-y-4">
                {category.levels.map((level) => (
                  <div key={level.name} className="border-t border-paper-200 pt-4 first:border-t-0 first:pt-0">
                    <p className="mb-2 text-sm font-semibold text-brand-700">{level.name}</p>
                    <LevelCell level={level} />
                  </div>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
