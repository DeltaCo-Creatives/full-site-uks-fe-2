import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { Block } from "@/content/types";

/**
 * Grouped list of related items under a theme heading — used for Mitra's
 * "Bentuk Kerja Sama" (10 forms of cooperation grouped into 4 themes).
 * Simpler than PillarAccordion on purpose: nothing here needs to collapse,
 * it's a flat list under a card.
 */
export function ThemeGroups({ block }: { block: Extract<Block, { type: "themeGroups" }> }) {
  const groups = block.groups ?? [];
  if (groups.length === 0) return null;

  return (
    <section className="py-12 sm:py-16">
      <Container>
        <SectionHeading title={block.title} intro={block.intro} />
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {groups.map((group, i) => (
            <Reveal
              key={group.title}
              delay={Math.min(i * 0.06, 0.24)}
              className="rounded-2xl border border-paper-200 bg-paper-50 p-6 shadow-soft sm:p-7"
            >
              <h3 className="font-display text-lg text-ink-950">{group.title}</h3>
              {group.description && <p className="mt-2 text-sm leading-relaxed text-ink-700">{group.description}</p>}
              <ul className="mt-4 space-y-2.5 border-t border-paper-200 pt-4">
                {group.items.map((item) => (
                  <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-ink-700">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
