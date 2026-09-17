import { useGSAP } from "@gsap/react";
import { useRef, type ElementType, type ReactNode } from "react";
import { gsap, prefersReducedMotion } from "@/lib/gsap";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  id?: string;
  /** Stagger direct children instead of animating the wrapper as one block. */
  stagger?: boolean;
  delay?: number;
  y?: number;
}

/**
 * Fades + lifts content into place the first time it enters the viewport.
 * Staggered groups (card grids) get a slight alternating tilt and a touch of
 * overshoot on the way in, so a row of cards settles into place rather than
 * sliding up in lockstep, one focal motion per grid instead of a flat wipe.
 */
export function Reveal({ children, as: Tag = "div", className, id, stagger, delay = 0, y = 28 }: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (!ref.current || prefersReducedMotion()) return;
      const targets = stagger ? gsap.utils.toArray<HTMLElement>(ref.current.children) : ref.current;

      if (stagger) {
        gsap.set(targets, { opacity: 0, y, rotate: (i: number) => (i % 2 === 0 ? -1.1 : 1.1) });
        gsap.to(targets, {
          opacity: 1,
          y: 0,
          rotate: 0,
          duration: 0.75,
          delay,
          ease: "back.out(1.5)",
          stagger: 0.08,
          scrollTrigger: { trigger: ref.current, start: "top 85%", once: true },
        });
      } else {
        gsap.set(targets, { opacity: 0, y });
        gsap.to(targets, {
          opacity: 1,
          y: 0,
          duration: 0.7,
          delay,
          ease: "power3.out",
          scrollTrigger: { trigger: ref.current, start: "top 85%", once: true },
        });
      }
    },
    { scope: ref },
  );

  return (
    <Tag ref={ref} id={id} className={cn(className)}>
      {children}
    </Tag>
  );
}
