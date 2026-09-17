import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";
import type { Block, CardItem } from "@/content/types";

const colClass: Record<number, string> = {
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-2 lg:grid-cols-3",
  4: "sm:grid-cols-2 lg:grid-cols-4",
};

function CardShell({ card, children }: { card: CardItem; children: ReactNode }) {
  const classes =
    "group flex h-full flex-col rounded-2xl border border-paper-200 bg-paper-50 p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card";
  if (!card.href) return <div className={classes}>{children}</div>;
  if (card.external || /^https?:\/\//.test(card.href)) {
    return (
      <a href={card.href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    );
  }
  return (
    <Link to={card.href} className={classes}>
      {children}
    </Link>
  );
}

export function CardGrid({ block }: { block: Extract<Block, { type: "cardGrid" }> }) {
  const cards = block.cards ?? [];
  if (cards.length === 0) return null;
  const cols = colClass[block.columns ?? 3] ?? colClass[3];

  return (
    <section className="py-12 sm:py-16">
      <Container>
        <SectionHeading title={block.title} intro={block.intro} />
        <div className={cn("grid grid-cols-1 gap-5", cols)}>
          {cards.map((card, i) => (
            <Reveal key={card.title + i} delay={Math.min(i * 0.05, 0.3)}>
              <CardShell card={card}>
                {card.image && (
                  <div className="mb-4 -mx-6 -mt-6 overflow-hidden rounded-t-2xl">
                    <img
                      src={card.image}
                      alt=""
                      className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                )}
                {card.eyebrow && (
                  <span className="mb-2 inline-block w-fit rounded-full bg-brand-100 px-2.5 py-0.5 text-xs font-semibold text-brand-700 transition-colors duration-300 group-hover:bg-brand-700 group-hover:text-paper-50">
                    {card.eyebrow}
                  </span>
                )}
                <h3 className="font-display text-lg text-ink-950">{card.title}</h3>
                {card.description && <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-700">{card.description}</p>}
                {card.href && (
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700">
                    Selengkapnya
                    <span className="transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">
                      →
                    </span>
                  </span>
                )}
              </CardShell>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
