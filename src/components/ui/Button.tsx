import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import { Link } from "react-router-dom";
import { useMagnetic } from "@/hooks/useMagnetic";
import { cn } from "@/lib/utils";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-[background-color,box-shadow,transform] duration-200 will-change-transform active:scale-[0.96] disabled:opacity-50 disabled:pointer-events-none";

const variants = {
  primary: "bg-brand-700 text-paper-50 hover:bg-brand-600 shadow-soft",
  ghost: "bg-transparent text-brand-700 ring-1 ring-inset ring-brand-700/25 hover:bg-brand-50",
  accent: "bg-accent-600 text-paper-50 hover:bg-accent-700 shadow-soft",
  subtle: "bg-paper-100 text-ink-900 hover:bg-paper-200",
};

type Variant = keyof typeof variants;

// Primary/accent buttons are the page's calls to action, so only these get
// the magnetic pull: one deliberate accent, not a jitter on every control.
const magneticVariants: Variant[] = ["primary", "accent"];

interface LinkButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  external?: boolean;
  variant?: Variant;
}

export function LinkButton({ href, external, variant = "primary", className, children, ...rest }: LinkButtonProps) {
  const classes = cn(base, variants[variant], className);
  const magneticRef = useMagnetic<HTMLAnchorElement>();
  const ref = magneticVariants.includes(variant) ? magneticRef : undefined;

  if (external || /^https?:\/\//.test(href)) {
    return (
      <a ref={ref} href={href} target="_blank" rel="noopener noreferrer" className={classes} {...rest}>
        {children}
      </a>
    );
  }
  return (
    <Link ref={ref} to={href} className={classes}>
      {children}
    </Link>
  );
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
}

export function Button({ variant = "primary", className, children, ...rest }: ButtonProps) {
  const magneticRef = useMagnetic<HTMLButtonElement>();
  const ref = magneticVariants.includes(variant) ? magneticRef : undefined;

  return (
    <button ref={ref} className={cn(base, variants[variant], className)} {...rest}>
      {children}
    </button>
  );
}
