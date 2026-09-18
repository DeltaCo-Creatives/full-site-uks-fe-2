import type { Block } from "@/content/types";

/**
 * Invisible scroll target for in-page hash navigation (e.g. /mitra#panduan).
 * Placed right before a section's real content, so a hash link lands just
 * above it, clear of the sticky header — the same `scroll-mt` offset every
 * other anchored block on the site uses.
 */
export function SectionAnchor({ block }: { block: Extract<Block, { type: "anchor" }> }) {
  return <div id={block.id} className="scroll-mt-24" aria-hidden="true" />;
}
