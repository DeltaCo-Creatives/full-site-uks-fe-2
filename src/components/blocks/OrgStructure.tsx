import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { Block } from "@/content/types";

export function OrgStructure({ block }: { block: Extract<Block, { type: "orgStructure" }> }) {
  const groups = block.groups ?? [];
  if (groups.length === 0) return null;

  return (
    <section className="py-12 sm:py-16">
      <Container>
        <SectionHeading title={block.title} intro={block.intro} />
        <div className="grid gap-5 lg:grid-cols-2">
          {groups.map((group) => (
            <Reveal
              key={group.title}
              className="rounded-2xl border border-paper-200 bg-paper-50 p-6 shadow-soft sm:p-8"
            >
              <h3 className="font-display text-xl text-ink-950">{group.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-700">{group.description}</p>
              {group.points && group.points.length > 0 && (
                <ul className="mt-5 space-y-2 border-t border-paper-200 pt-4">
                  {group.points.map((point) => (
                    <li key={point} className="flex items-center gap-2.5 text-sm font-medium text-ink-900">
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-600" aria-hidden="true" />
                      {point}
                    </li>
                  ))}
                </ul>
              )}
              {group.sections?.map((section) => (
                <div key={section.heading} className="mt-5 border-t border-paper-200 pt-4">
                  <h4 className="font-display text-base text-ink-900">{section.heading}</h4>
                  {section.text && <p className="mt-2 text-sm leading-relaxed text-ink-700">{section.text}</p>}
                  {section.items && section.items.length > 0 && (
                    <ol className="mt-2 list-decimal space-y-1.5 pl-5 text-sm leading-relaxed text-ink-700 marker:font-semibold marker:text-brand-700">
                      {section.items.map((item, i) => (
                        <li key={i} className="pl-1">
                          {item}
                        </li>
                      ))}
                    </ol>
                  )}
                </div>
              ))}
              {group.image && (
                <div className="mt-5 border-t border-paper-200 pt-4">
                  <div
                    className="flex flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-paper-300 bg-paper-100 px-4 py-10 text-center"
                    style={group.image.aspectRatio ? { aspectRatio: group.image.aspectRatio } : undefined}
                  >
                    {group.image.src ? (
                      <img src={group.image.src} alt={group.image.alt} className="h-full w-full object-contain" />
                    ) : (
                      <>
                        <span className="text-sm font-semibold text-ink-500">Gambar bagan menyusul</span>
                        {group.image.caption && (
                          <span className="max-w-sm text-xs leading-relaxed text-ink-400">{group.image.caption}</span>
                        )}
                      </>
                    )}
                  </div>
                </div>
              )}
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
