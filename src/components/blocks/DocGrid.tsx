import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/Button";
import { Modal } from "@/components/ui/Modal";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { formatDate } from "@/lib/utils";
import type { Block } from "@/content/types";

export function DocGrid({ block }: { block: Extract<Block, { type: "docGrid" }> }) {
  const items = block.items ?? [];
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  if (items.length === 0) return null;
  const active = openIndex !== null ? items[openIndex] : null;

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
        <div className="grid grid-cols-2 gap-5 sm:grid-cols-4">
          {items.map((item, i) => (
            <Reveal key={item.title} delay={Math.min(i * 0.05, 0.25)}>
              <button onClick={() => setOpenIndex(i)} className="group block w-full text-left">
                <div className="aspect-[3/4] overflow-hidden rounded-xl border border-paper-200 bg-paper-200 shadow-soft">
                  {item.image ? (
                    <img
                      src={item.image}
                      alt=""
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="grid h-full w-full place-items-center text-ink-700">
                      <span className="font-display text-xs">Dokumen</span>
                    </div>
                  )}
                </div>
                <p className="mt-2.5 line-clamp-2 text-sm font-medium text-ink-900">{item.title}</p>
                <p className="text-xs text-ink-500">{formatDate(item.date)}</p>
              </button>
            </Reveal>
          ))}
        </div>
      </Container>

      <Modal open={active !== null} onClose={() => setOpenIndex(null)} title={active?.title ?? ""}>
        {active && (
          <div className="grid gap-5 sm:grid-cols-[1fr_1.3fr]">
            <div className="overflow-hidden rounded-xl bg-paper-200">
              {active.image && <img src={active.image} alt="" className="w-full object-cover" />}
            </div>
            <div>
              {active.description && <p className="text-sm text-ink-700">{active.description}</p>}
              <p className="mt-3 text-xs font-medium text-ink-500">Diterbitkan {formatDate(active.date)}</p>
              {active.fileUrl ? (
                <LinkButton href={active.fileUrl} className="mt-5" variant="primary">
                  Unduh Dokumen
                </LinkButton>
              ) : (
                <p className="mt-5 text-xs italic text-ink-500">Berkas unduhan belum tersedia pada mockup ini.</p>
              )}
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
}
