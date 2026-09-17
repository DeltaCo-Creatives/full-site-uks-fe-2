import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { gsap, prefersReducedMotion } from "@/lib/gsap";
import type { Block } from "@/content/types";

function Logo({ name, logo, href }: { name: string; logo: string; href?: string }) {
  const img = (
    <img
      src={logo}
      alt={name}
      title={name}
      className="h-10 w-auto max-w-[140px] object-contain grayscale transition-all duration-300 hover:scale-110 hover:grayscale-0"
    />
  );
  if (!href) return <div className="flex shrink-0 items-center px-6">{img}</div>;
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="flex shrink-0 items-center px-6">
      {img}
    </a>
  );
}

export function PartnerMarquee({ block }: { block: Extract<Block, { type: "partnerMarquee" }> }) {
  const partners = block.partners ?? [];
  const trackRef = useRef<HTMLDivElement>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);

  useGSAP(() => {
    if (!trackRef.current || prefersReducedMotion() || partners.length === 0) return;
    const track = trackRef.current;
    const width = track.scrollWidth / 2;
    tweenRef.current = gsap.to(track, { x: -width, duration: partners.length * 3, ease: "none", repeat: -1 });
    return () => {
      tweenRef.current?.kill();
    };
  }, [partners.length]);

  if (partners.length === 0) return null;

  return (
    <section className="border-y border-paper-200 bg-paper-100/70 py-12 sm:py-16">
      <Container>
        <SectionHeading title={block.title} intro={block.intro} align="center" />
      </Container>
      <div
        className="no-scrollbar overflow-hidden"
        onMouseEnter={() => tweenRef.current?.pause()}
        onMouseLeave={() => tweenRef.current?.play()}
      >
        <div ref={trackRef} className="flex w-max items-center">
          {[...partners, ...partners].map((p, i) => (
            <Logo key={`${p.name}-${i}`} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}
