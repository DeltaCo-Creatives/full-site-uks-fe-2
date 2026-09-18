import { ResourceLink } from "@/components/ui/ResourceLink";
import type { SubProgram } from "@/content/types";

/** The fact/list content shown inside an open sub-program item (Waktu, Tempat,
 * Pelaksana, Sasaran facts, plus whichever optional sections it has — Kegiatan,
 * Sarana, Langkah-langkah, Tugas or Tautan Penting. See docs/content-source/trias-uks-content.MD:
 * the field set genuinely varies per item, so nothing here is required. */
export function SubProgramPanel({ item }: { item: SubProgram }) {
  const facts = [
    { label: "Waktu", value: item.waktu },
    { label: "Tempat", value: item.tempat },
    { label: "Pelaksana", value: item.pelaksana },
    { label: "Sasaran", value: item.sasaran },
  ].filter((fact): fact is { label: string; value: string } => Boolean(fact.value));

  return (
    <div className="space-y-4 text-sm leading-relaxed text-ink-700">
      <p>{item.description}</p>

      {facts.length > 0 && (
        <dl className="grid gap-4 rounded-xl bg-paper-100 p-4 sm:grid-cols-2">
          {facts.map((fact) => (
            <div key={fact.label}>
              <dt className="text-xs font-semibold uppercase tracking-wide text-ink-500">{fact.label}</dt>
              <dd className="mt-0.5 text-ink-800">{fact.value}</dd>
            </div>
          ))}
        </dl>
      )}

      {item.sections?.map((section) => (
        <div key={section.heading}>
          <h4 className="mb-2 font-display text-base text-ink-900">{section.heading}</h4>
          {section.kind === "linkList" && section.links && (
            <ul className="space-y-1.5">
              {section.links.map((link) => (
                <li key={link.label}>
                  <ResourceLink
                    href={link.url}
                    className="text-brand-700 underline underline-offset-2"
                    unavailableClassName="text-ink-600"
                    unavailableLabel={link.label}
                  >
                    {link.label}
                  </ResourceLink>
                </li>
              ))}
            </ul>
          )}
          {section.kind === "numberList" && section.items && (
            <ol className="list-decimal space-y-1.5 pl-5 marker:font-semibold marker:text-brand-700">
              {section.items.map((it, i) => (
                <li key={i} className="pl-1">
                  {it}
                </li>
              ))}
            </ol>
          )}
          {section.kind === "bulletList" && section.items && (
            <ul className="space-y-1.5">
              {section.items.map((it, i) => (
                <li key={i} className="flex gap-2.5">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500" aria-hidden="true" />
                  <span>{it}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}
