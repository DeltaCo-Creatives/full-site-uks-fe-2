import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { gsap, prefersReducedMotion } from "@/lib/gsap";

/**
 * Pulls an element a few pixels toward the cursor while hovered, then eases
 * back to rest. Skipped on touch devices (no hover to react to) and under
 * reduced-motion. Used on primary CTAs only, not every button, so it reads
 * as a deliberate accent rather than the whole page jittering.
 */
export function useMagnetic<T extends HTMLElement>(strength = 14) {
  const ref = useRef<T>(null);

  useGSAP(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion() || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    const xTo = gsap.quickTo(el, "x", { duration: 0.5, ease: "power3.out" });
    const yTo = gsap.quickTo(el, "y", { duration: 0.5, ease: "power3.out" });

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const relX = e.clientX - (rect.left + rect.width / 2);
      const relY = e.clientY - (rect.top + rect.height / 2);
      xTo((relX / rect.width) * strength);
      yTo((relY / rect.height) * strength);
    };
    const onLeave = () => {
      xTo(0);
      yTo(0);
    };

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [strength]);

  return ref;
}
