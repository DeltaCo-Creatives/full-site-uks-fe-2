import { Navigate, useLocation, useParams } from "react-router-dom";
import { hashRedirects, programHashRedirects } from "@/content/redirects";
import { ContentPage } from "./ContentPage";

/**
 * Redirects an old path whose *hash* (not just its pathname) decides the
 * destination — e.g. /uksm/profil#struktur → /uksm/struktur-organisasi vs.
 * /uksm/profil#deskripsi → /uksm/tentang. React Router's <Route path> can't
 * match on location.hash, so this reads it directly. `fallbackTo` is used
 * when there's no hash, or one not listed in hashRedirects for this path.
 */
export function HashAwareRedirect({ fallbackTo }: { fallbackTo: string }) {
  const { pathname, hash } = useLocation();
  const key = hash.replace(/^#/, "");
  const to = (key && hashRedirects[pathname]?.[key]) || fallbackTo;
  return <Navigate to={to} replace />;
}

/**
 * /program is a real page (programIndexPage) — only redirect when the
 * visitor arrived with one of the old /program#{anchor} hashes; otherwise
 * render the index page like any other content route.
 */
export function ProgramIndexRoute() {
  const { hash } = useLocation();
  const key = hash.replace(/^#/, "");
  const to = key ? programHashRedirects[key] : undefined;
  if (to) return <Navigate to={to} replace />;
  return <ContentPage />;
}

/**
 * Rewrites a legacy `{base}/{slug}` path to its new base, keeping the slug
 * — e.g. /halaman/berita/{slug} and /informasi/berita/{slug} both →
 * /berita/{slug} (docs/sitemaps/sitemap-portal-uks.md §3).
 */
export function LegacySlugRedirect({ toBase }: { toBase: string }) {
  const { slug } = useParams<{ slug: string }>();
  return <Navigate to={`${toBase}/${slug ?? ""}`} replace />;
}
