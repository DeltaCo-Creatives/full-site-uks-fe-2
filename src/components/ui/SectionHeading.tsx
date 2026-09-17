import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

const toneClasses = {
  light: { eyebrow: "text-accent-700", title: "text-ink-950", intro: "text-ink-700" },
  dark: { eyebrow: "text-accent-300", title: "text-paper-50", intro: "text-paper-100/85" },
};

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  tone = "light",
  action,
}: {
  eyebrow?: string;
  title?: string;
  intro?: string;
  align?: "left" | "center";
  /** "dark" flips text colors for a dark section background (e.g. StrataJourney). */
  tone?: "light" | "dark";
  action?: ReactNode;
}) {
  if (!title && !intro) return null;
  const colors = toneClasses[tone];
  return (
    <Reveal
      className={cn(
        "mb-10 flex flex-col gap-3",
        align === "center" ? "items-center text-center" : "sm:flex-row sm:items-end sm:justify-between",
      )}
    >
      <div className="max-w-2xl">
        {eyebrow && <p className={cn("mb-2 text-sm font-semibold uppercase tracking-wide", colors.eyebrow)}>{eyebrow}</p>}
        {title && <h2 className={cn("text-balance font-display text-3xl sm:text-4xl", colors.title)}>{title}</h2>}
        {intro && <p className={cn("mt-3 text-pretty", colors.intro)}>{intro}</p>}
      </div>
      {action}
    </Reveal>
  );
}
