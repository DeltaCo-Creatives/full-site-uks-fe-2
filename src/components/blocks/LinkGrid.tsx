import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { Block } from "@/content/types";

export function LinkGrid({ block }: { block: Extract<Block, { type: "linkGrid" }> }) {
  const groups = block.groups ?? [];
  if (groups.length === 0) return null;

  return (
    <section className="py-12 sm:py-16">
      <Container>
        <SectionHeading title={block.title} />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {groups.map((group) => (
            <Reveal key={group.title}>
              <h3 className="mb-3 font-display text-lg text-ink-950">{group.title}</h3>
              <ul className="space-y-2">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                      className="inline-flex items-center gap-1.5 text-sm text-ink-700 hover:text-brand-700 hover:underline"
                    >
                      {link.label}
                      {link.external && <span aria-hidden="true">↗</span>}
                    </a>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
