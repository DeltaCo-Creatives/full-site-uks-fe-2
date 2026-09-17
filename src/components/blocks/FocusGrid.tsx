import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { resolveIcon } from "@/lib/icons";
import type { Block } from "@/content/types";

export function FocusGrid({ block }: { block: Extract<Block, { type: "focusGrid" }> }) {
  const items = block.items ?? [];
  if (items.length === 0) return null;

  return (
    <section className="py-12 sm:py-16">
      <Container>
        <SectionHeading title={block.title} intro={block.intro} />
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {items.map((item, i) => {
            const Icon = resolveIcon(item.icon);
            return (
              <Reveal
                key={item.id}
                id={item.id}
                delay={i * 0.06}
                className="group scroll-mt-28 rounded-2xl border border-paper-200 bg-paper-50 p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
              >
                <div className="mb-4 grid h-11 w-11 place-items-center rounded-xl bg-brand-100 text-brand-700 transition-all duration-300 group-hover:-rotate-6 group-hover:scale-110 group-hover:bg-brand-700 group-hover:text-paper-50">
                  <Icon size={22} strokeWidth={1.75} aria-hidden="true" />
                </div>
                <h3 className="font-display text-lg text-ink-950">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-700">{item.description}</p>
              </Reveal>
            );
          })}
        </div>
        {block.footnote && <p className="mt-8 text-sm text-ink-500">{block.footnote}</p>}
      </Container>
    </section>
  );
}
