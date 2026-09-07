import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { providerFacts } from "@/lib/content";
import { asset } from "@/lib/assets";
import { addressLine, site } from "@/lib/site";

export const Route = createFileRoute("/about")({
  component: About,
  head: () => ({
    meta: [
      { title: `About · ${site.name} · Leesburg, VA` },
      {
        name: "description",
        content:
          "Farhana Abid (Ms. Jolly) runs a Virginia-licensed family day home in Potomac Station, Leesburg. CPR, First-Aid, and MAT certified. In business since 2000.",
      },
    ],
    links: [{ rel: "canonical", href: `${site.publicUrl}/about` }],
  }),
});

function About() {
  return (
    <main className="pb-24 md:pb-0">
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:py-16">
        <p className="text-xs font-semibold tracking-[0.2em] text-terracotta uppercase">About</p>
        <h1 className="mt-3 max-w-2xl font-display text-4xl leading-tight text-ink sm:text-5xl">
          {site.providerName}, {site.providerHonorific}
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
          Jolly Home Daycare is a Virginia-licensed family day home (license {site.license.number})
          at {addressLine}. In business since 2000. The Care.com listing describes the tagline on
          the logo: “{site.tagline}.”
        </p>
      </section>

      <section className="mx-auto grid max-w-6xl gap-4 px-4 pb-16 sm:grid-cols-2 sm:px-6">
        <img
          src={asset("images/logo.png")}
          alt={`${site.name} logo. ${site.tagline}.`}
          className="aspect-[4/3] w-full rounded-lg bg-forest object-contain p-10 shadow-soft"
        />
        <div className="flex aspect-[4/3] flex-col justify-end rounded-lg bg-terracotta p-6 text-cream shadow-soft sm:p-8">
          <p className="font-display text-3xl leading-tight">{site.tagline}.</p>
          <p className="mt-3 text-sm text-cream/85">
            License {site.license.number} · Capacity {site.license.capacity}
          </p>
        </div>
      </section>

      <section className="border-y border-line bg-cream">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="font-display text-3xl text-ink">What is stated publicly</h2>
          <p className="mt-3 max-w-2xl text-sm text-muted">
            These details come from the Care.com listing and Virginia licensing directories. We do
            not publish tuition online — it is shared in person.
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {providerFacts.map((fact) => (
              <li
                key={fact}
                className="rounded-lg border border-line bg-surface px-4 py-3 text-sm leading-relaxed text-ink shadow-soft"
              >
                {fact}
              </li>
            ))}
          </ul>
          <p className="mt-8 text-sm text-muted">
            Families on Care.com have rated the program 5.0 from ten reviews.
          </p>
          <Button asChild size="lg" className="mt-8">
            <Link to="/enrollment" hash="visit">
              Request a visit
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
