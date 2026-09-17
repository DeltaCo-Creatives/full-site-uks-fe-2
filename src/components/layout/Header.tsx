import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Search } from "lucide-react";
import { site } from "@/content/site";
import { cn } from "@/lib/utils";
import { MenuOverlay } from "./MenuOverlay";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 border-b bg-paper-50/95 backdrop-blur transition-shadow duration-300",
          scrolled ? "border-paper-200 shadow-soft" : "border-transparent",
        )}
      >
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
          <Link to="/" className="flex items-center gap-2.5">
            <img src={site.logo} alt={site.name} className="h-9 w-9 object-contain" />
            <span className="hidden flex-col leading-tight sm:flex">
              <span className="font-display text-base font-semibold text-ink-950">{site.name}</span>
              <span className="text-[11px] text-ink-500">{site.ministry}</span>
            </span>
          </Link>

          <div className="flex items-center gap-1.5 sm:gap-2">
            <Link
              to="/pencarian"
              aria-label="Pencarian"
              className="grid h-10 w-10 place-items-center rounded-full text-ink-700 transition-all duration-200 hover:-translate-y-0.5 hover:bg-paper-200"
            >
              <Search size={19} strokeWidth={1.8} />
            </Link>
            <Link
              to="/kontak"
              className="hidden rounded-full px-4 py-2 text-sm font-semibold text-ink-700 ring-1 ring-inset ring-paper-200 transition-colors hover:bg-paper-100 sm:inline-flex"
            >
              Kontak
            </Link>
            <button
              onClick={() => setMenuOpen((v) => !v)}
              aria-expanded={menuOpen}
              aria-controls="menu-overlay"
              className="inline-flex items-center gap-2 rounded-full bg-brand-700 px-4 py-2.5 text-sm font-semibold text-paper-50 transition-[background-color,transform] duration-200 will-change-transform hover:bg-brand-600 active:scale-95 sm:px-5"
            >
              <MorphingMenuGlyph open={menuOpen} />
              <span className="hidden sm:inline">{menuOpen ? "Tutup" : "Menu"}</span>
            </button>
          </div>
        </div>
      </header>

      <MenuOverlay open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}

/** Two lines that pinch into an X instead of swapping icons outright. */
function MorphingMenuGlyph({ open }: { open: boolean }) {
  return (
    <span className="relative grid h-[18px] w-[18px] shrink-0 place-items-center" aria-hidden="true">
      <span
        className={cn(
          "absolute h-[1.8px] w-4 rounded-full bg-current transition-transform duration-300 ease-out",
          open ? "rotate-45" : "-translate-y-[4px]",
        )}
      />
      <span
        className={cn(
          "absolute h-[1.8px] w-4 rounded-full bg-current transition-transform duration-300 ease-out",
          open ? "-rotate-45" : "translate-y-[4px]",
        )}
      />
    </span>
  );
}
