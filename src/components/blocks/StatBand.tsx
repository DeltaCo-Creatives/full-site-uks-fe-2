import { Container } from "@/components/ui/Container";
import { Counter } from "@/components/ui/Counter";
import { Reveal } from "@/components/ui/Reveal";
import type { Block } from "@/content/types";

export function StatBand({ block }: { block: Extract<Block, { type: "statBand" }> }) {
  const items = block.items ?? [];
  if (items.length === 0) return null;

  return (
    <section className="border-b border-paper-200 bg-paper-100/60 py-10">
      <Container>
        <Reveal stagger className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          {items.map((item) => (
            <div key={item.label} className="text-center sm:text-left">
              <p className="font-display text-3xl text-brand-700 sm:text-4xl">
                <Counter value={item.value} suffix={item.suffix} />
              </p>
              <p className="mt-1 text-sm text-ink-700">{item.label}</p>
            </div>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
