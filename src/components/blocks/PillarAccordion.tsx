import { useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SubProgramPanel } from "./SubProgramPanel";
import { cn } from "@/lib/utils";
import type { Block } from "@/content/types";

function slugify(title: string) {
  return title.split(" ").slice(0, 2).join("-").toLowerCase();
}

export function PillarAccordion({ block }: { block: Extract<Block, { type: "pillarAccordion" }> }) {
  // Memoised so the hash effect below can depend on it without re-running on
  // every render (`?? []` would otherwise be a fresh array each time).
  const pillars = useMemo(() => block.pillars ?? [], [block.pillars]);
  const [openPillar, setOpenPillar] = useState(0);
  const [openItemId, setOpenItemId] = useState<string | null>(null);
  const { hash: locationHash } = useLocation();

  useEffect(() => {
    const hash = locationHash.replace("#", "");
    if (!hash) return;

    const pillarWithItem = pillars.findIndex((p) => p.items.some((item) => item.id === hash));
    if (pillarWithItem >= 0) {
      setOpenPillar(pillarWithItem);
      setOpenItemId(hash);
    } else {
      const idx = pillars.findIndex((p) => slugify(p.title) === hash);
      if (idx < 0) return;
      setOpenPillar(idx);
    }

    const el = document.getElementById(hash);
    if (el) window.setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "start" }), 500);
  }, [locationHash, pillars]);

  if (pillars.length === 0) return null;

  return (
    <section className="py-12 sm:py-16">
      <Container>
        <SectionHeading title={block.title} intro={block.intro} />
        <div className="space-y-4">
          {pillars.map((pillar, i) => {
            const id = slugify(pillar.title);
            const isOpen = openPillar === i;
            return (
              <Reveal key={pillar.title} delay={i * 0.06} className="overflow-hidden rounded-2xl border border-paper-200 bg-paper-50 shadow-soft">
                <button
                  onClick={() => setOpenPillar(isOpen ? -1 : i)}
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
                    <div id={id} className="scroll-mt-28 space-y-3 border-t border-paper-200 px-6 pb-6 pt-5 sm:px-8">
                      {pillar.items.map((item) => {
                        const itemOpen = openItemId === item.id;
                        return (
                          <div key={item.id} className="overflow-hidden rounded-xl border border-paper-200 bg-white">
                            <button
                              onClick={() => setOpenItemId(itemOpen ? null : item.id)}
                              aria-expanded={itemOpen}
                              aria-controls={`subpanel-${item.id}`}
                              className="flex w-full items-center justify-between gap-3 px-4 py-3.5 text-left transition-colors duration-200 hover:bg-brand-50/60"
                            >
                              <span className="font-display text-base text-ink-950">{item.title}</span>
                              <span className={cn("shrink-0 text-ink-500 transition-transform duration-300", itemOpen && "rotate-180")} aria-hidden="true">
                                <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                                  <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                              </span>
                            </button>
                            <div
                              id={`subpanel-${item.id}`}
                              inert={!itemOpen}
                              className="grid transition-[grid-template-rows] duration-300 ease-in-out"
                              style={{ gridTemplateRows: itemOpen ? "1fr" : "0fr" }}
                            >
                              <div className="overflow-hidden">
                                <div id={item.id} className="scroll-mt-28 border-t border-paper-200 px-4 py-4">
                                  <SubProgramPanel item={item} />
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
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
