import { useGSAP } from "@gsap/react";
import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Container } from "@/components/ui/Container";
import { gsap, prefersReducedMotion } from "@/lib/gsap";
import type { Block } from "@/content/types";

const AUTOPLAY_MS = 6500;

export function HeroSlider({ block }: { block: Extract<Block, { type: "heroSlider" }> }) {
  const slides = block.slides;
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const imgRefs = useRef<(HTMLDivElement | null)[]>([]);
  const textRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const reduced = prefersReducedMotion();

  const goTo = useCallback(
    (next: number) => {
      setIndex(((next % slides.length) + slides.length) % slides.length);
    },
    [slides.length],
  );

  // Autoplay
  useEffect(() => {
    if (paused || reduced || slides.length <= 1) return;
    const id = setTimeout(() => goTo(index + 1), AUTOPLAY_MS);
    return () => clearTimeout(id);
  }, [index, paused, reduced, goTo, slides.length]);

  // Slide transition
  useGSAP(
    () => {
      const active = imgRefs.current[index];
      if (!active) return;

      if (reduced) {
        imgRefs.current.forEach((el, i) => el && gsap.set(el, { opacity: i === index ? 1 : 0 }));
        return;
      }

      imgRefs.current.forEach((el, i) => {
        if (!el) return;
        if (i === index) {
          gsap.fromTo(el, { opacity: 0 }, { opacity: 1, duration: 1, ease: "power2.out" });
          // Slow continuous Ken Burns drift for as long as this slide is on screen,
          // independent of the crossfade above, so the image never sits still.
          gsap.fromTo(
            el.querySelector("img"),
            { scale: 1 },
            { scale: 1.08, duration: AUTOPLAY_MS / 1000 + 1.5, ease: "none" },
          );
        } else {
          gsap.to(el, { opacity: 0, duration: 0.6, ease: "power1.out" });
        }
      });

      if (textRef.current) {
        gsap.fromTo(
          textRef.current,
          { opacity: 0, y: 18 },
          { opacity: 1, y: 0, duration: 0.7, delay: 0.15, ease: "power3.out" },
        );
      }

      if (progressRef.current) {
        gsap.fromTo(progressRef.current, { scaleX: 0 }, { scaleX: 1, duration: AUTOPLAY_MS / 1000, ease: "none" });
      }
    },
    { dependencies: [index, reduced] },
  );

  const slide = slides[index];
  if (!slide) return null;

  return (
    <section
      className="relative overflow-hidden bg-ink-950"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="relative h-[68vh] min-h-[440px] max-h-[720px] w-full">
        {slides.map((s, i) => (
          <div
            key={s.id}
            ref={(el) => {
              imgRefs.current[i] = el;
            }}
            className="absolute inset-0"
            style={{ opacity: i === index ? 1 : 0 }}
            aria-hidden={i !== index}
          >
            <img src={s.image} alt="" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-950/85 via-ink-950/25 to-ink-950/10" />
          </div>
        ))}

        <Container className="relative flex h-full items-end pb-16 pt-10 sm:pb-20">
          <div ref={textRef} className="max-w-2xl text-paper-50">
            <span className="mb-3 inline-block rounded-full bg-paper-50/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide backdrop-blur">
              {slide.kind === "berita" ? "Berita" : "Program"}
            </span>
            <h1 className="text-balance font-display text-3xl leading-tight sm:text-5xl">{slide.title}</h1>
            <p className="mt-4 max-w-xl text-pretty text-paper-100/90 sm:text-lg">{slide.description}</p>
            {slide.href && (
              <Link
                to={slide.href}
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-paper-50 px-5 py-2.5 text-sm font-semibold text-ink-950 transition-transform hover:-translate-y-0.5"
              >
                {slide.ctaLabel ?? "Selengkapnya"}
                <span aria-hidden="true">→</span>
              </Link>
            )}
          </div>
        </Container>
      </div>

      {slides.length > 1 && (
        <div className="absolute inset-x-0 bottom-5 z-10">
          <Container>
            <div className="flex items-center gap-2">
              {slides.map((s, i) => (
                <button
                  key={s.id}
                  onClick={() => goTo(i)}
                  aria-label={`Slide ${i + 1}: ${s.title}`}
                  aria-current={i === index}
                  className="group relative h-1.5 flex-1 overflow-hidden rounded-full bg-paper-50/25"
                >
                  {i === index && (
                    <div
                      ref={progressRef}
                      className="absolute inset-y-0 left-0 w-full origin-left rounded-full bg-paper-50"
                    />
                  )}
                  {i < index && <div className="absolute inset-0 rounded-full bg-paper-50" />}
                </button>
              ))}
            </div>
          </Container>
        </div>
      )}
    </section>
  );
}
