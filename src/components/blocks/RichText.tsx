import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import type { Block } from "@/content/types";

export function RichText({ block }: { block: Extract<Block, { type: "richText" }> }) {
  const nodes = block.nodes ?? [];
  if (nodes.length === 0 && !block.title) return null;

  return (
    <section className="py-12 sm:py-16">
      <Container>
        <Reveal className="mx-auto max-w-3xl">
          {block.title && <h2 className="mb-5 font-display text-2xl text-ink-950 sm:text-3xl">{block.title}</h2>}
          <div className="space-y-4 text-pretty leading-relaxed text-ink-700">
            {nodes.map((node, i) => {
              if (node.kind === "p" && node.text) return <p key={i}>{node.text}</p>;
              if (node.kind === "h3" && node.text)
                return (
                  <h3 key={i} className="pt-2 font-display text-xl text-ink-900">
                    {node.text}
                  </h3>
                );
              if (node.kind === "ul" && node.items?.length)
                return (
                  <ul key={i} className="list-none space-y-2">
                    {node.items.map((item, j) => (
                      <li key={j} className="flex gap-3">
                        <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                );
              if (node.kind === "ol" && node.items?.length)
                return (
                  <ol key={i} className="list-decimal space-y-2 pl-5 marker:font-semibold marker:text-brand-700">
                    {node.items.map((item, j) => (
                      <li key={j} className="pl-1">
                        {item}
                      </li>
                    ))}
                  </ol>
                );
              return null;
            })}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
