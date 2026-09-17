import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { gsap, prefersReducedMotion } from "@/lib/gsap";

export function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);

  useGSAP(() => {
    const el = ref.current;
    if (!el) return;

    if (prefersReducedMotion()) {
      el.textContent = value.toLocaleString("id-ID") + suffix;
      return;
    }

    const counter = { n: 0 };
    gsap.to(counter, {
      n: value,
      duration: 1.6,
      ease: "power2.out",
      scrollTrigger: { trigger: el, start: "top 90%", once: true },
      onUpdate: () => {
        el.textContent = Math.round(counter.n).toLocaleString("id-ID") + suffix;
      },
    });
  }, [value, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}
