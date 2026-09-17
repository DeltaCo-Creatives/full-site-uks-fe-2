import { Link } from "react-router-dom";
import { Container } from "@/components/ui/Container";
import type { Crumb } from "@/content/types";

export function Breadcrumbs({ crumbs }: { crumbs: Crumb[] }) {
  if (crumbs.length === 0) return null;

  return (
    <nav aria-label="Breadcrumb" className="border-b border-paper-200 bg-paper-100/50">
      <Container>
        <ol className="flex flex-wrap items-center gap-1.5 py-3 text-xs text-ink-500">
          <li>
            <Link to="/" className="hover:text-brand-700 hover:underline">
              Beranda
            </Link>
          </li>
          {crumbs.map((c, i) => (
            <li key={i} className="flex items-center gap-1.5">
              <span aria-hidden="true">/</span>
              {c.href ? (
                <Link to={c.href} className="hover:text-brand-700 hover:underline">
                  {c.label}
                </Link>
              ) : (
                <span className={i === crumbs.length - 1 ? "font-medium text-ink-700" : undefined}>{c.label}</span>
              )}
            </li>
          ))}
        </ol>
      </Container>
    </nav>
  );
}
