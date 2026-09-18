import { Link } from "react-router-dom";
import { footerLinkGroups, petaNavigasiLinks } from "@/content/nav";
import { site } from "@/content/site";
import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer className="border-t border-paper-200 bg-brand-950 text-paper-100">
      <Container className="py-14 sm:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5">
              <img src={site.logo} alt="" className="h-9 w-9 object-contain brightness-0 invert" />
              <span className="font-display text-lg text-paper-50">{site.name}</span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-paper-100/70">{site.tagline}</p>
            <address className="mt-5 text-sm not-italic leading-relaxed text-paper-100/70">
              {site.contact.address}
              <br />
              <a href={`mailto:${site.contact.email}`} className="hover:text-paper-50 hover:underline">
                {site.contact.email}
              </a>
            </address>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-paper-50">Peta Navigasi</h3>
            <ul className="mt-4 space-y-2.5">
              {petaNavigasiLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-sm text-paper-100/70 transition-colors hover:text-paper-50">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {footerLinkGroups.map((group) => (
            <div key={group.title}>
              <h3 className="text-sm font-semibold text-paper-50">{group.title}</h3>
              <ul className="mt-4 space-y-2.5">
                {group.links.map((link) =>
                  link.isGroupLabel ? (
                    <li key={link.label} className="pt-2 text-xs font-semibold uppercase tracking-wide text-paper-100/50 first:pt-0">
                      {link.label}
                    </li>
                  ) : (
                    <li key={link.label}>
                      {link.external ? (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-paper-100/70 transition-colors hover:text-paper-50"
                        >
                          {link.label}
                        </a>
                      ) : (
                        <Link to={link.href} className="text-sm text-paper-100/70 transition-colors hover:text-paper-50">
                          {link.label}
                        </Link>
                      )}
                    </li>
                  ),
                )}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-paper-50/10 pt-6 text-xs text-paper-100/80 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {site.ministry}. Mockup desain, bukan situs resmi.</p>
          <p>Dibangun dengan React, Tailwind CSS, dan GSAP.</p>
        </div>
      </Container>
    </footer>
  );
}
