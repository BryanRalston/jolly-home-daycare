import { Link } from "@tanstack/react-router";
import { Logo } from "@/components/logo";
import { addressLine, nav, site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="bg-ink text-cream">
      <div className="grid grid-cols-4" aria-hidden="true">
        <span className="h-2 bg-terracotta" />
        <span className="h-2 bg-sunflower" />
        <span className="h-2 bg-aqua" />
        <span className="h-2 bg-leaf" />
      </div>
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3 md:py-16">
        <div>
          <Logo onDark />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/70">
            A licensed family day home in {site.address.neighborhood}, Leesburg. Small groups,
            home-cooked meals, and a yard to run in.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cream/50">Visit</p>
          <p className="mt-3 text-sm leading-relaxed text-cream/85">
            {site.address.street}
            <br />
            {site.address.city}, {site.address.state} {site.address.zip}
          </p>
          <p className="mt-3 text-sm text-cream/85">
            {site.hours.days}
            <br />
            {site.hours.time}
          </p>
          <a
            href={site.phoneHref}
            className="mt-3 block text-sm text-cream underline decoration-cream/30 underline-offset-4 hover:decoration-cream"
          >
            {site.phone}
          </a>
          <a
            href={site.emailHref}
            className="mt-2 block text-sm text-cream underline decoration-cream/30 underline-offset-4 hover:decoration-cream"
          >
            {site.email}
          </a>
          <a
            href={site.mapsUrl}
            className="mt-3 inline-block text-sm text-cream underline decoration-cream/30 underline-offset-4 hover:decoration-cream"
            target="_blank"
            rel="noreferrer"
          >
            Open in Google Maps
          </a>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cream/50">Explore</p>
          <ul className="mt-3 space-y-2">
            {nav.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="text-sm text-cream/85 underline decoration-transparent underline-offset-4 hover:decoration-cream/50"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href={site.facebook}
                className="text-sm text-cream/85 underline decoration-transparent underline-offset-4 hover:decoration-cream/50"
                target="_blank"
                rel="noreferrer"
              >
                Facebook
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-cream/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-5 text-xs text-cream/45 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>© {new Date().getFullYear()} {site.name}. Licensed family day home, Loudoun County, VA.</p>
          <p>{addressLine}</p>
        </div>
      </div>
    </footer>
  );
}
