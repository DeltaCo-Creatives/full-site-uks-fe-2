import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { Block } from "@/content/types";

/**
 * Partner names grouped by cooperation year. Text-only on purpose — the
 * source page only ever gave names, never logos, so this shows partners
 * for what they are instead of implying a verified logo/brand asset.
 */
export function PartnerYearList({ block }: { block: Extract<Block, { type: "partnerYearList" }> }) {
  const groups = block.groups ?? [];
  if (groups.length === 0) return null;

  return (
    <section className="py-12 sm:py-16">
      <Container>
        <SectionHeading title={block.title} intro={block.intro} />
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
          {groups.map((group, i) => (
            <Reveal
              key={group.year}
              delay={Math.min(i * 0.08, 0.24)}
              className="rounded-2xl border border-paper-200 bg-paper-50 p-6 shadow-soft"
            >
              <p className="mb-4 inline-flex w-fit items-center rounded-full bg-brand-100 px-3 py-1 text-sm font-semibold text-brand-700">
                Mitra {group.year}
              </p>
              <ol className="list-decimal space-y-2 pl-5 text-sm leading-relaxed text-ink-700 marker:font-semibold marker:text-brand-700">
                {group.names.map((name) => (
                  <li key={name} className="pl-1">
                    {name}
                  </li>
                ))}
              </ol>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
