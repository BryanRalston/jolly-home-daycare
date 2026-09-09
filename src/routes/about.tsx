import { createFileRoute, Link } from "@tanstack/react-router";
import { FactChips } from "@/components/fact-chips";
import { Button } from "@/components/ui/button";
import { credentialChips, houseFacade, licensingFacts } from "@/lib/content";
import { asset } from "@/lib/assets";
import { addressLine, site } from "@/lib/site";

export const Route = createFileRoute("/about")({
  component: About,
  head: () => ({
    meta: [
      { title: `Meet Ms. Jolly · ${site.name} · Leesburg Family Day Home` },
      {
        name: "description",
        content:
          "Farhana Abid (Ms. Jolly) runs a Virginia-licensed family day home in Potomac Station, Leesburg. CPR and First-Aid certified. Serving families since 2000.",
      },
    ],
    links: [{ rel: "canonical", href: `${site.publicUrl}/about` }],
  }),
});

function About() {
  return (
    <main className="pb-24 md:pb-0">
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:py-16">
        <p className="text-xs font-semibold tracking-[0.2em] text-terracotta uppercase">
          Meet Ms. Jolly
        </p>
        <h1 className="mt-3 max-w-2xl font-display text-4xl leading-tight text-ink sm:text-5xl">
          {site.providerName}, {site.providerHonorific}
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
          Farhana Abid — families know her as Ms. Jolly — has cared for children in her Potomac
          Station home since {site.since}. She calls it a home away from home: a licensed family day
          home at {addressLine}.
        </p>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
          Care for infants from 2 months through age 5, plus before- and after-school care. Tuition
          is shared in person.
        </p>
      </section>

      <section className="mx-auto grid max-w-6xl gap-4 px-4 pb-16 sm:grid-cols-2 sm:px-6">
        <img
          src={asset("images/logo.png")}
          alt={`${site.name} logo. ${site.tagline}.`}
          className="aspect-[4/3] w-full rounded-lg bg-cream object-contain p-6 shadow-soft"
        />
        <img
          src={asset(houseFacade.src)}
          alt={houseFacade.alt}
          className="aspect-[4/3] w-full rounded-lg object-cover object-[center_70%] shadow-soft"
        />
      </section>

      <section className="border-y border-line bg-cream">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.2em] text-terracotta uppercase">
              Credentials
            </p>
            <p className="mt-3 text-base leading-relaxed text-muted">
              Certified in Adult and Child CPR and First-Aid. Criminal and Child Protective Agency
              background checked.
            </p>
            <FactChips items={credentialChips} className="mt-5" />
          </div>
          <div className="mt-12 max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.2em] text-terracotta uppercase">
              Licensing
            </p>
            <p className="mt-3 text-base leading-relaxed text-muted">
              A Virginia-licensed family day home in Potomac Station, Leesburg.
            </p>
            <FactChips items={licensingFacts} className="mt-5" />
          </div>
          <p className="mt-10 max-w-2xl text-sm text-muted">
            Parents on Care.com rate the program 5.0 from ten reviews.{" "}
            <Link to="/" hash="reviews" className="text-terracotta-deep hover:underline">
              Read what families say
            </Link>
            .
          </p>
          <Button asChild size="lg" className="mt-8">
            <Link to="/enrollment" hash="visit">
              Schedule a Visit
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
