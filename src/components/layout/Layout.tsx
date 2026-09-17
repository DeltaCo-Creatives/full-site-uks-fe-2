import { useEffect, useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { gsap, prefersReducedMotion } from "@/lib/gsap";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { ScrollProgress } from "./ScrollProgress";

export function Layout() {
  const location = useLocation();
  const mainRef = useRef<HTMLDivElement>(null);

  // Scroll restoration: jump to an in-page anchor if the URL has a hash,
  // otherwise reset to top on every route change (SPA default browsers
  // don't give you for free).
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const timer = window.setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 80);
      return () => window.clearTimeout(timer);
    }
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [location.pathname, location.hash]);

  useEffect(() => {
    if (!mainRef.current || prefersReducedMotion()) return;
    gsap.fromTo(mainRef.current, { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 0.45, ease: "power2.out" });
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen flex-col">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-full focus:bg-brand-700 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-paper-50"
      >
        Lewati ke konten
      </a>
      <Header />
      <ScrollProgress />
      <main id="main-content" ref={mainRef} className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
