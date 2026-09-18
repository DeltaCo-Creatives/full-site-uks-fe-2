import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { LinkButton } from "@/components/ui/Button";
import type { Block } from "@/content/types";

export function StrataJourney({ block }: { block: Extract<Block, { type: "strataJourney" }> }) {
  const levels = block.levels ?? [];
  if (levels.length === 0) return null;

  return (
    <section className="bg-brand-950 py-14 text-paper-50 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Alat Ukur"
          title={block.title ?? "Stratifikasi UKS/M"}
          intro={block.intro}
          align="center"
          tone="dark"
        />

        <Reveal stagger className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-4">
          {levels.map((level, i) => (
            <div key={level.name} className="relative rounded-2xl bg-paper-50/[0.06] p-5 ring-1 ring-paper-50/10">
              <div className="mb-3 flex items-center gap-3">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-accent-500 text-sm font-bold text-ink-950">
                  {i + 1}
                </span>
                <h3 className="font-display text-lg">{level.name}</h3>
              </div>
              <p className="text-sm leading-relaxed text-paper-100/80">{level.description}</p>
            </div>
          ))}
        </Reveal>

        {block.categories?.length > 0 && (
          <Reveal className="mt-10 flex flex-wrap justify-center gap-2">
            {block.categories.map((cat) => (
              <span key={cat} className="rounded-full bg-paper-50/10 px-3.5 py-1.5 text-xs font-medium text-paper-100 ring-1 ring-paper-50/15">
                {cat}
              </span>
            ))}
          </Reveal>
        )}

        {block.externalHref && (
          <Reveal className="mt-10 flex justify-center">
            <LinkButton href={block.externalHref} external variant="accent">
              {block.externalLabel}
              <span aria-hidden="true">↗</span>
            </LinkButton>
          </Reveal>
        )}
      </Container>
    </section>
  );
}
