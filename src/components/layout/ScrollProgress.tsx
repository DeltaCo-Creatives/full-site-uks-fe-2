import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { gsap, prefersReducedMotion } from "@/lib/gsap";

/** Thin accent bar under the header that fills as the page scrolls. */
export function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    const bar = barRef.current;
    if (!bar) return;

    if (prefersReducedMotion()) {
      bar.style.transform = "scaleX(0)";
      return;
    }

    const quickSet = gsap.quickTo(bar, "scaleX", { duration: 0.15, ease: "none" });
    const onScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      const max = scrollHeight - clientHeight;
      quickSet(max > 0 ? scrollTop / max : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [location.pathname]);

  return (
    <div className="pointer-events-none fixed inset-x-0 top-16 z-40 h-[3px]" aria-hidden="true">
      <div ref={barRef} className="h-full w-full origin-left scale-x-0 bg-accent-600" />
    </div>
  );
}
