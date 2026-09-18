import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import { useLocation } from "react-router-dom";
import type { LucideIcon } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ResourceLink } from "@/components/ui/ResourceLink";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { resolveIcon } from "@/lib/icons";
import { cn, youtubeId } from "@/lib/utils";
import type { Block, FocusSection } from "@/content/types";

/**
 * Five anchored, keyboard-navigable tabs — one per Sekolah Sehat focus area
 * (#bergizi, #fisik, #imunisasi, #jiwa, #lingkungan). All panels render at
 * once (hidden via the `hidden` attribute) rather than only the active one,
 * so a saved #hash link or a slow paint never shows an empty panel.
 */
export function FocusTabs({ block }: { block: Extract<Block, { type: "focusTabs" }> }) {
  const sections = block.sections ?? [];
  const [activeId, setActiveId] = useState<string>(sections[0]?.id ?? "");
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const { hash } = useLocation();
  // Stable by value: `sections` is a fresh array on every render, so the ids
  // are joined into a string the effect can depend on without re-running.
  const sectionIds = sections.map((s) => s.id).join(",");

  useEffect(() => {
    const id = hash.replace("#", "");
    if (!sectionIds.split(",").includes(id)) return;
    setActiveId(id);
    const el = document.getElementById(id);
    if (el) window.setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "start" }), 400);
  }, [hash, sectionIds]);

  if (sections.length === 0) return null;

  function selectTab(id: string, focus = false) {
    setActiveId(id);
    window.history.replaceState(null, "", `#${id}`);
    if (focus) tabRefs.current[id]?.focus();
  }

  function onTabKeyDown(e: KeyboardEvent<HTMLButtonElement>, index: number) {
    const ids = sections.map((s) => s.id);
    let next = index;
    if (e.key === "ArrowRight") next = (index + 1) % ids.length;
    else if (e.key === "ArrowLeft") next = (index - 1 + ids.length) % ids.length;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = ids.length - 1;
    else return;
    e.preventDefault();
    selectTab(ids[next], true);
  }

  return (
    <section className="py-12 sm:py-16">
      <Container>
        <SectionHeading title={block.title} intro={block.intro} />

        <div role="tablist" aria-label="Lima fokus Gerakan Sekolah Sehat" className="flex flex-wrap gap-2 border-b border-paper-200 pb-3">
          {sections.map((section, i) => {
            const Icon = resolveIcon(section.icon);
            const isActive = section.id === activeId;
            return (
              <button
                key={section.id}
                ref={(el) => {
                  tabRefs.current[section.id] = el;
                }}
                type="button"
                role="tab"
                id={`tab-${section.id}`}
                aria-selected={isActive}
                aria-controls={`panel-${section.id}`}
                tabIndex={isActive ? 0 : -1}
                onClick={() => selectTab(section.id)}
                onKeyDown={(e) => onTabKeyDown(e, i)}
                className={cn(
                  "inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-colors duration-200",
                  isActive ? "bg-brand-700 text-paper-50 shadow-soft" : "bg-paper-100 text-ink-700 hover:bg-brand-50",
                )}
              >
                <Icon size={16} strokeWidth={1.75} aria-hidden="true" />
                {section.title}
              </button>
            );
          })}
        </div>

        {sections.map((section) => {
          const Icon = resolveIcon(section.icon);
          return <FocusPanel key={section.id} section={section} isActive={section.id === activeId} Icon={Icon} />;
        })}
      </Container>
    </section>
  );
}

function FocusPanel({ section, isActive, Icon }: { section: FocusSection; isActive: boolean; Icon: LucideIcon }) {
  const videoId = section.video ? youtubeId(section.video.youtubeUrl) : null;

  return (
    <div
      id={section.id}
      role="tabpanel"
      aria-labelledby={`tab-${section.id}`}
      hidden={!isActive}
      tabIndex={0}
      className="scroll-mt-28 pt-8 outline-none"
    >
      <Reveal className="grid gap-8 lg:grid-cols-[1.3fr_1fr]">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-100 text-brand-700">
              <Icon size={22} strokeWidth={1.75} aria-hidden="true" />
            </span>
            <h3 className="font-display text-2xl text-ink-950">{section.title}</h3>
          </div>
          <p className="text-pretty leading-relaxed text-ink-700">{section.summary}</p>

          {section.activities.length > 0 && (
            <div className="mt-6">
              <h4 className="font-display text-lg text-ink-900">Kegiatan {section.title} terdiri dari</h4>
              <ul className="mt-3 space-y-2.5">
                {section.activities.map((activity) => (
                  <li key={activity} className="flex gap-3 text-sm leading-relaxed text-ink-700">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500" aria-hidden="true" />
                    <span>{activity}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {section.programs?.map((program) => (
            <div key={program.title} className="mt-6 rounded-2xl border border-paper-200 bg-paper-50 p-5">
              <h4 className="font-display text-base text-ink-900">{program.title}</h4>
              <p className="mt-2 text-sm leading-relaxed text-ink-700">{program.description}</p>
              {program.items && program.items.length > 0 && (
                <ul className="mt-3 space-y-1.5">
                  {program.items.map((item) => (
                    <li key={item} className="flex gap-2.5 text-sm text-ink-700">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand-700" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        <div className="space-y-6">
          {videoId && (
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-accent-700">Video</p>
              <div className="aspect-video overflow-hidden rounded-xl border border-paper-200 bg-ink-950">
                <iframe
                  src={`https://www.youtube.com/embed/${videoId}`}
                  title={section.video?.title}
                  className="h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
              <p className="mt-2 text-sm text-ink-700">{section.video?.title}</p>
            </div>
          )}

          {section.tools.length > 0 && (
            <div className="rounded-2xl border border-paper-200 bg-paper-50 p-5">
              <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-accent-700">Alat Bantu Penerapan</p>
              <ul className="space-y-3">
                {section.tools.map((tool) => (
                  <li key={tool.label} className="flex items-start justify-between gap-3 text-sm">
                    <span className="min-w-0 break-words text-ink-800">{tool.label}</span>
                    <ResourceLink
                      href={tool.href}
                      className="shrink-0 whitespace-nowrap font-semibold text-brand-700 hover:underline"
                      unavailableClassName="shrink-0 whitespace-nowrap text-xs italic text-ink-500"
                    >
                      Unduh
                    </ResourceLink>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </Reveal>
    </div>
  );
}
