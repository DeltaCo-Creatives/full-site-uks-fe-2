import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/ui/Container";
import type { Block } from "@/content/types";

export function Hero({ block }: { block: Extract<Block, { type: "hero" }> }) {
  return (
    <section className="border-b border-paper-200 bg-brand-50/60 pb-14 pt-14 sm:pb-20 sm:pt-20">
      <Container>
        <div className={block.image ? "grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]" : "max-w-3xl"}>
          <Reveal>
            {block.eyebrow && (
              <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-accent-700">{block.eyebrow}</p>
            )}
            <h1 className="text-balance font-display text-4xl leading-tight text-ink-950 sm:text-5xl">{block.title}</h1>
            {block.lead && <p className="mt-5 text-pretty text-lg leading-relaxed text-ink-700">{block.lead}</p>}
          </Reveal>
          {block.image && (
            <Reveal delay={0.1} className="overflow-hidden rounded-3xl shadow-card">
              <img src={block.image} alt="" className="aspect-[4/3] w-full object-cover" />
            </Reveal>
          )}
        </div>
      </Container>
    </section>
  );
}
