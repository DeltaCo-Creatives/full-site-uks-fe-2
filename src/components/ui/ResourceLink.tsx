import type { ReactNode } from "react";

/**
 * External resource link with a "belum tersedia" fallback when no href is
 * available yet — the pattern was duplicated across FocusTabs, AdvocacyList,
 * and SubProgramPanel. `className`/`unavailableClassName` are passed in per
 * call site so each one keeps its own visual style.
 */
export function ResourceLink({
  href,
  children,
  className,
  unavailableClassName,
  unavailableLabel = "Belum tersedia",
}: {
  href: string | null;
  children: ReactNode;
  className?: string;
  unavailableClassName?: string;
  unavailableLabel?: string;
}) {
  if (!href) {
    return <span className={unavailableClassName}>{unavailableLabel}</span>;
  }

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
    </a>
  );
}
