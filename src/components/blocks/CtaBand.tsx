import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import type { Block } from "@/content/types";

export function CtaBand({ block }: { block: Extract<Block, { type: "ctaBand" }> }) {
  return (
    <section className="py-12 sm:py-16">
      <Container>
        <Reveal className="flex flex-col items-start gap-6 rounded-3xl bg-brand-700 px-7 py-10 text-paper-50 sm:flex-row sm:items-center sm:justify-between sm:px-10 sm:py-12">
          <div className="max-w-xl">
            {block.eyebrow && <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-brand-100">{block.eyebrow}</p>}
            <h2 className="text-balance font-display text-2xl sm:text-3xl">{block.title}</h2>
            {block.description && <p className="mt-3 text-pretty text-brand-50/90">{block.description}</p>}
          </div>
          {block.actions?.length > 0 && (
            <div className="flex shrink-0 flex-wrap gap-3">
              {block.actions.map((action) => (
                <LinkButton
                  key={action.label}
                  href={action.href}
                  external={action.external}
                  variant={action.variant === "ghost" ? "subtle" : "accent"}
                >
                  {action.label}
                </LinkButton>
              ))}
            </div>
          )}
        </Reveal>
      </Container>
    </section>
  );
}
