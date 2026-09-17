import { useEffect, useState } from "react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";
import type { Block } from "@/content/types";

function slugify(title: string) {
  return title.split(" ").slice(0, 2).join("-").toLowerCase();
}

export function PillarAccordion({ block }: { block: Extract<Block, { type: "pillarAccordion" }> }) {
  const pillars = block.pillars ?? [];
  const [openIndex, setOpenIndex] = useState(0);

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    const idx = pillars.findIndex((p) => slugify(p.title) === hash);
    if (idx < 0) return;
    setOpenIndex(idx);
    const el = document.getElementById(hash);
    if (el) window.setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "start" }), 500);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (pillars.length === 0) return null;

  return (
    <section className="py-12 sm:py-16">
      <Container>
        <SectionHeading title={block.title} intro={block.intro} />
        <div className="space-y-4">
          {pillars.map((pillar, i) => {
            const id = slugify(pillar.title);
            const isOpen = openIndex === i;
            return (
              <Reveal key={pillar.title} delay={i * 0.06} className="overflow-hidden rounded-2xl border border-paper-200 bg-paper-50 shadow-soft">
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  aria-controls={`panel-${id}`}
                  className="group flex w-full items-center gap-4 px-6 py-5 text-left transition-colors duration-200 hover:bg-brand-50/60 sm:px-8"
                >
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-brand-700 font-display text-lg text-paper-50 transition-transform duration-300 group-hover:scale-110">
                    {pillar.number}
                  </span>
                  <span className="flex-1">
                    <span className="block font-display text-xl text-ink-950">{pillar.title}</span>
                    <span className="mt-1 block text-sm text-ink-700">{pillar.description}</span>
                  </span>
                  <span
                    className={cn("shrink-0 text-ink-500 transition-transform duration-300", isOpen && "rotate-180")}
                    aria-hidden="true"
                  >
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </button>
                {/* CSS grid-rows trick instead of a JS-measured pixel height: the panel
                    always sizes to its actual content, so a window resize or a font
                    swap while it's open can never leave it clipped. */}
                <div
                  id={`panel-${id}`}
                  inert={!isOpen}
                  className="grid transition-[grid-template-rows] duration-300 ease-in-out"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <div id={id} className="scroll-mt-28 border-t border-paper-200 px-6 pb-6 pt-5 sm:px-8">
                      <ul className="grid gap-3 sm:grid-cols-2">
                        {pillar.items.map((item) => (
                          <li key={item} className="flex items-start gap-2.5 text-sm text-ink-700">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500" aria-hidden="true" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
