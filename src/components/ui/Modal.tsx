import { useGSAP } from "@gsap/react";
import { useEffect, useRef, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { gsap, prefersReducedMotion } from "@/lib/gsap";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
}

export function Modal({ open, onClose, title, children }: ModalProps) {
  const backdropRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  useGSAP(
    () => {
      if (!open || !backdropRef.current || !panelRef.current) return;
      if (prefersReducedMotion()) return;
      gsap.fromTo(backdropRef.current, { opacity: 0 }, { opacity: 1, duration: 0.25, ease: "power2.out" });
      gsap.fromTo(panelRef.current, { opacity: 0, y: 16, scale: 0.98 }, { opacity: 1, y: 0, scale: 1, duration: 0.35, ease: "power3.out" });
    },
    { dependencies: [open] },
  );

  if (!open) return null;

  return createPortal(
    <div
      ref={backdropRef}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-ink-950/70 p-4 backdrop-blur-sm"
      onClick={(e) => e.target === backdropRef.current && onClose()}
      role="presentation"
    >
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label={title}
        className="relative max-h-[88vh] w-full max-w-3xl overflow-auto rounded-2xl bg-paper-50 shadow-card"
      >
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-paper-200 bg-paper-50/95 px-5 py-4 backdrop-blur">
          <h3 className="font-display text-lg text-ink-900">{title}</h3>
          <button
            onClick={onClose}
            aria-label="Tutup"
            className="grid h-9 w-9 place-items-center rounded-full text-ink-700 transition-colors hover:bg-paper-200"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
              <path d="M2 2L16 16M16 2L2 16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </button>
        </div>
        <div className="p-5">{children}</div>
      </div>
    </div>,
    document.body,
  );
}
