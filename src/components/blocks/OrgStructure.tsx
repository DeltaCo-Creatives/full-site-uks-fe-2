import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { Block } from "@/content/types";

export function OrgStructure({ block }: { block: Extract<Block, { type: "orgStructure" }> }) {
  const groups = block.groups ?? [];
  if (groups.length === 0) return null;

  return (
    <section className="py-12 sm:py-16">
      <Container>
        <SectionHeading title={block.title} intro={block.intro} />
        <div className="grid gap-5 lg:grid-cols-2">
          {groups.map((group) => (
            <Reveal
              key={group.title}
              className="rounded-2xl border border-paper-200 bg-paper-50 p-6 shadow-soft sm:p-8"
            >
              <h3 className="font-display text-xl text-ink-950">{group.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-700">{group.description}</p>
              {group.points && group.points.length > 0 && (
                <ul className="mt-5 space-y-2 border-t border-paper-200 pt-4">
                  {group.points.map((point) => (
                    <li key={point} className="flex items-center gap-2.5 text-sm font-medium text-ink-900">
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-600" aria-hidden="true" />
                      {point}
                    </li>
                  ))}
                </ul>
              )}
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
