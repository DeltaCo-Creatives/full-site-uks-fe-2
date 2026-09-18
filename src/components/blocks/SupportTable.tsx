import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { Block, SupportRecord } from "@/content/types";

function ListCell({ items }: { items: string[] }) {
  if (items.length === 0) return <span className="text-ink-400">—</span>;
  if (items.length === 1) return <span>{items[0]}</span>;
  return (
    <ul className="space-y-1">
      {items.map((item, i) => (
        <li key={i} className="flex gap-1.5">
          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent-500" aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

const columns: { key: keyof SupportRecord; label: string }[] = [
  { key: "period", label: "Periode" },
  { key: "collaboration", label: "Bentuk Kolaborasi" },
  { key: "activities", label: "Kegiatan" },
  { key: "beneficiaries", label: "Penerima Manfaat" },
  { key: "locations", label: "Lokasi" },
  { key: "funding", label: "Pembiayaan" },
];

function cellValue(record: SupportRecord, key: keyof SupportRecord) {
  const value = record[key];
  if (Array.isArray(value)) return <ListCell items={value} />;
  return value ? <span>{value}</span> : <span className="text-ink-400">—</span>;
}

/**
 * Dukungan Mitra 2025: a table on desktop, one stacked card per partner on
 * mobile. Both renderings read the same `records` array — nothing is
 * duplicated as state, only as markup, which is the standard way to give a
 * dense table an honest small-screen layout instead of a horizontal scroll.
 */
export function SupportTable({ block }: { block: Extract<Block, { type: "supportTable" }> }) {
  const records = block.records ?? [];
  const others = block.others ?? [];
  if (records.length === 0 && others.length === 0) return null;

  return (
    <section className="py-12 sm:py-16">
      <Container>
        <SectionHeading title={block.title} intro={block.intro} />

        {records.length > 0 && (
          <>
            {/* Desktop / tablet: real table, horizontally scrollable as a safety net. */}
            <div className="hidden overflow-x-auto rounded-2xl border border-paper-200 shadow-soft sm:block">
              <table className="w-full min-w-[860px] border-collapse text-left text-sm">
                <thead>
                  <tr className="bg-paper-100 text-xs font-semibold uppercase tracking-wide text-ink-500">
                    <th className="px-4 py-3">Mitra</th>
                    {columns.map((col) => (
                      <th key={col.key} className="px-4 py-3">
                        {col.label}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {records.map((record, i) => (
                    <tr key={record.name} className={i % 2 === 0 ? "bg-paper-50" : "bg-white"}>
                      <td className="px-4 py-4 align-top font-display text-base text-ink-950">{record.name}</td>
                      {columns.map((col) => (
                        <td key={col.key} className="px-4 py-4 align-top text-ink-700">
                          {cellValue(record, col.key)}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile: one card per partner, same fields as the table rows. */}
            <div className="space-y-4 sm:hidden">
              {records.map((record, i) => (
                <Reveal
                  key={record.name}
                  delay={Math.min(i * 0.05, 0.2)}
                  className="rounded-2xl border border-paper-200 bg-paper-50 p-5 shadow-soft"
                >
                  <h3 className="font-display text-base text-ink-950">{record.name}</h3>
                  <dl className="mt-3 space-y-3 text-sm text-ink-700">
                    {columns.map((col) => (
                      <div key={col.key}>
                        <dt className="text-xs font-semibold uppercase tracking-wide text-ink-500">{col.label}</dt>
                        <dd className="mt-1">{cellValue(record, col.key)}</dd>
                      </div>
                    ))}
                  </dl>
                </Reveal>
              ))}
            </div>
          </>
        )}

        {others.length > 0 && (
          <div className="mt-10">
            {block.othersTitle && <h3 className="font-display text-lg text-ink-950">{block.othersTitle}</h3>}
            <ul className="mt-4 grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2 lg:grid-cols-3">
              {others.map((partner) => (
                <li key={partner.name} className="flex items-start gap-2.5 text-sm text-ink-700">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-paper-300" aria-hidden="true" />
                  <span>
                    {partner.name}
                    {partner.note && <span className="block text-xs italic text-ink-500">{partner.note}</span>}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </Container>
    </section>
  );
}
