import { useGSAP } from "@gsap/react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { navSections, utilityLinks } from "@/content/nav";
import { site } from "@/content/site";
import { gsap, prefersReducedMotion } from "@/lib/gsap";
import { cn } from "@/lib/utils";
import type { NavLink } from "@/content/types";

function ChildRow({ link }: { link: NavLink }) {
  const isExternal = !!link.external;
  const classes =
    "flex items-center justify-between rounded-xl px-4 py-3 text-[15px] text-ink-700 transition-colors hover:bg-brand-50 hover:text-brand-900";
  if (link.isGroupLabel) {
    return (
      <span className="mt-2 block px-4 pt-2 text-xs font-semibold uppercase tracking-wide text-ink-500 first:mt-0">
        {link.label}
      </span>
    );
  }
  if (isExternal) {
    return (
      <a href={link.href} target="_blank" rel="noopener noreferrer" className={classes}>
        {link.label}
        <span className="text-ink-500" aria-hidden="true">
          ↗
        </span>
      </a>
    );
  }
  return (
    <Link to={link.href} className={classes}>
      {link.label}
    </Link>
  );
}

export function MenuOverlay({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [expanded, setExpanded] = useState<string | null>(navSections[1]?.label ?? null);
  const panelRef = useRef<HTMLDivElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  useGSAP(
    () => {
      if (!open) return;
      if (prefersReducedMotion()) return;
      gsap.fromTo(backdropRef.current, { opacity: 0 }, { opacity: 1, duration: 0.3, ease: "power2.out" });
      gsap.fromTo(panelRef.current, { opacity: 0, y: -16 }, { opacity: 1, y: 0, duration: 0.4, ease: "power3.out" });
      if (listRef.current) {
        gsap.fromTo(
          listRef.current.children,
          { opacity: 0, y: 14 },
          { opacity: 1, y: 0, duration: 0.4, stagger: 0.045, delay: 0.1, ease: "power3.out" },
        );
      }
    },
    { dependencies: [open] },
  );

  if (!open) return null;

  return (
    <div
      id="menu-overlay"
      ref={backdropRef}
      className="fixed inset-0 z-40 overflow-y-auto bg-ink-950/40 backdrop-blur-sm"
      onClick={(e) => e.target === backdropRef.current && onClose()}
    >
      <div ref={panelRef} className="min-h-full bg-paper-50 pb-10 pt-20 sm:pt-24">
        <div className="mx-auto grid w-full max-w-3xl gap-10 px-5 sm:px-8 lg:grid-cols-[1fr_260px]">
          <nav aria-label="Menu utama" ref={listRef} className="space-y-2">
            {navSections.map((section) => {
              const hasChildren = !!section.children?.length;
              const isOpen = expanded === section.label;

              if (!hasChildren && section.href) {
                return (
                  <Link
                    key={section.label}
                    to={section.href}
                    className="block rounded-2xl px-4 py-4 font-display text-xl text-ink-950 transition-colors hover:bg-paper-100"
                  >
                    {section.label}
                  </Link>
                );
              }

              return (
                <div key={section.label} className="overflow-hidden rounded-2xl">
                  <button
                    onClick={() => setExpanded(isOpen ? null : section.label)}
                    aria-expanded={isOpen}
                    className={cn(
                      "flex w-full items-center justify-between px-4 py-4 text-left font-display text-xl transition-colors",
                      isOpen ? "bg-brand-700 text-paper-50" : "text-ink-950 hover:bg-paper-100",
                    )}
                  >
                    {section.label}
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      className={cn("shrink-0 transition-transform duration-300", isOpen && "rotate-180")}
                      aria-hidden="true"
                    >
                      <path d="M4.5 6.5L9 11L13.5 6.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  <div
                    className="grid transition-[grid-template-rows] duration-300 ease-in-out"
                    style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                    inert={!isOpen}
                    aria-hidden={!isOpen}
                  >
                    <div className="overflow-hidden">
                      <div className="flex flex-col gap-0.5 bg-brand-50/60 p-2">
                        {section.children?.map((link) => <ChildRow key={link.label} link={link} />)}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </nav>

          <aside className="border-t border-paper-200 pt-6 lg:border-t-0 lg:border-l lg:pl-8 lg:pt-1">
            <p className="text-xs font-semibold uppercase tracking-wide text-ink-500">Akses Cepat</p>
            <div className="mt-3 flex flex-col gap-1">
              {utilityLinks.map((link) => (
                <Link key={link.label} to={link.href} className="rounded-lg px-2 py-2 text-sm text-ink-700 hover:bg-paper-100 hover:text-brand-700">
                  {link.label}
                </Link>
              ))}
            </div>
            <p className="mt-6 text-xs font-semibold uppercase tracking-wide text-ink-500">Hubungi Kami</p>
            <a href={`mailto:${site.contact.email}`} className="mt-2 block break-words px-2 text-sm text-ink-700 hover:text-brand-700 hover:underline">
              {site.contact.email}
            </a>
          </aside>
        </div>
      </div>
    </div>
  );
}
