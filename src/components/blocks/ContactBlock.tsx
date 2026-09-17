import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import type { Block } from "@/content/types";

export function ContactBlock({ block }: { block: Extract<Block, { type: "contactBlock" }> }) {
  return (
    <section className="pb-16 sm:pb-24">
      <Container>
        <Reveal className="grid gap-5 rounded-3xl border border-paper-200 bg-paper-50 p-8 shadow-soft sm:grid-cols-3 sm:p-10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-accent-700">Alamat</p>
            <p className="mt-2 text-sm leading-relaxed text-ink-700">{block.address}</p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-accent-700">Email</p>
            <a href={`mailto:${block.email}`} className="mt-2 block text-sm font-medium text-brand-700 hover:underline">
              {block.email}
            </a>
          </div>
          {block.phone && (
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-accent-700">Telepon</p>
              <a href={`tel:${block.phone.replace(/[^\d+]/g, "")}`} className="mt-2 block text-sm font-medium text-brand-700 hover:underline">
                {block.phone}
              </a>
            </div>
          )}
        </Reveal>
      </Container>
    </section>
  );
}
