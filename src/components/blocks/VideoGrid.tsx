import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/Button";
import { Modal } from "@/components/ui/Modal";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { formatDate, youtubeId } from "@/lib/utils";
import type { Block } from "@/content/types";

function PlayGlyph() {
  return (
    <span className="grid h-12 w-12 place-items-center rounded-full bg-paper-50/95 text-brand-700 shadow-soft transition-transform duration-300 group-hover:scale-110">
      <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor" aria-hidden="true">
        <path d="M4 2.5L15 9L4 15.5V2.5Z" />
      </svg>
    </span>
  );
}

export function VideoGrid({ block }: { block: Extract<Block, { type: "videoGrid" }> }) {
  const items = block.items ?? [];
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  if (items.length === 0) return null;
  const active = openIndex !== null ? items[openIndex] : null;
  const activeId = active ? youtubeId(active.youtubeUrl) : null;

  return (
    <section id={block.anchorId} className="scroll-mt-24 py-12 sm:py-16">
      <Container>
        <SectionHeading
          title={block.title}
          action={
            block.viewAllHref && (
              <LinkButton href={block.viewAllHref} variant="ghost">
                Lihat Semua
              </LinkButton>
            )
          }
        />
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => (
            <Reveal key={item.title} delay={Math.min(i * 0.05, 0.25)}>
              <button onClick={() => setOpenIndex(i)} className="group block w-full text-left">
                <div className="relative aspect-video overflow-hidden rounded-xl border border-paper-200 bg-ink-950">
                  {item.image ? (
                    <img
                      src={item.image}
                      alt=""
                      loading="lazy"
                      className="h-full w-full object-cover opacity-90 transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="h-full w-full bg-brand-950" />
                  )}
                  <div className="absolute inset-0 grid place-items-center bg-ink-950/20">
                    <PlayGlyph />
                  </div>
                </div>
                <p className="mt-2.5 line-clamp-2 text-sm font-medium text-ink-900">{item.title}</p>
                <p className="text-xs text-ink-500">{formatDate(item.date)}</p>
              </button>
            </Reveal>
          ))}
        </div>
      </Container>

      <Modal open={active !== null} onClose={() => setOpenIndex(null)} title={active?.title ?? ""}>
        {activeId && (
          <div className="aspect-video overflow-hidden rounded-xl">
            <iframe
              src={`https://www.youtube.com/embed/${activeId}?autoplay=1`}
              title={active?.title}
              className="h-full w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        )}
      </Modal>
    </section>
  );
}
