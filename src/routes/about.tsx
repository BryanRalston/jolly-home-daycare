import { createFileRoute, Link } from "@tanstack/react-router";
import { ShieldCheck, Sparkles, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PlayDots } from "@/components/logo";
import { asset } from "@/lib/assets";
import { site } from "@/lib/site";

export const Route = createFileRoute("/about")({
  component: About,
  head: () => ({
    meta: [
      { title: `About · ${site.name}` },
      {
        name: "description",
        content:
          "Licensed family day home in Potomac Station, Leesburg. More than ten years of home daycare, CPR/First-Aid/MAT certified, meals included.",
      },
    ],
  }),
});

function About() {
  return (
    <main>
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:py-16">
        <div className="flex items-center gap-3">
          <PlayDots />
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-terracotta">About</p>
        </div>
        <h1 className="mt-3 max-w-2xl font-display text-4xl font-semibold leading-tight text-ink sm:text-5xl">
          Care that still looks like a house.
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
          Jolly Home Daycare is a Virginia-licensed family day home at 18945 Longhouse Place in
          Leesburg’s Potomac Station neighborhood. Children eat, rest, and play in the same rooms a
          family lives in — not a converted classroom wing.
        </p>
      </section>

      <section className="mx-auto grid max-w-6xl gap-4 px-4 pb-16 sm:grid-cols-2 sm:px-6">
        <img
          src={asset("images/playroom.jpg")}
          alt="The indoor playroom at Jolly Home Daycare, with a play kitchen, chalkboard, and toys."
          className="aspect-[4/3] w-full rounded-xl object-cover"
        />
        <img
          src={asset("images/floor-play.jpg")}
          alt="Children playing on the floor in the daycare playroom."
          className="aspect-[4/3] w-full rounded-xl object-cover"
        />
      </section>

      <section className="border-y border-line bg-paper/60">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-3">
          <article>
            <span className="inline-flex size-11 items-center justify-center rounded-full bg-terracotta/15 text-terracotta">
              <Users className="size-5" aria-hidden="true" />
            </span>
            <h2 className="mt-4 font-display text-2xl font-semibold text-ink">A decade in the work</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              The provider has more than ten years of home daycare experience and parent references
              to match. This is not a first-year pop-up — it is a practiced daily craft.
            </p>
          </article>
          <article>
            <span className="inline-flex size-11 items-center justify-center rounded-full bg-aqua/20 text-aqua-dark">
              <ShieldCheck className="size-5" aria-hidden="true" />
            </span>
            <h2 className="mt-4 font-display text-2xl font-semibold text-ink">Licensed & checked</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              State license verified. Adult and Child CPR, First-Aid, and Medication Administration
              Training (MAT). Criminal and Child Protective Services background checks.
            </p>
          </article>
          <article>
            <span className="inline-flex size-11 items-center justify-center rounded-full bg-sunflower/60 text-ink">
              <Sparkles className="size-5" aria-hidden="true" />
            </span>
            <h2 className="mt-4 font-display text-2xl font-semibold text-ink">Small on purpose</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              A family day home is capped far below a commercial center. Children know the rooms,
              the yard, and the grown-up at the door. Mixed ages mean younger ones watch, and older
              ones practice kindness.
            </p>
          </article>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <h2 className="font-display text-3xl font-semibold text-ink">What “at home” means here</h2>
        <div className="mt-6 space-y-4 text-base leading-relaxed text-muted">
          <p>
            It means breakfast is cooked in the kitchen you can see from the playroom. It means the
            backyard — playhouse, slide, garden bed — is the morning’s big adventure, not a fenced
            strip behind a parking lot. It means rest time happens in a quiet house, not a hallway
            of cots.
          </p>
          <p>
            It also means we are honest about limits. A family day home cannot offer a gymnasium or
            a staff of twelve. What we can offer is continuity, a known adult, meals that follow
            Child Nutrition guidance, and a neighborhood street in Leesburg that is easy to live
            with on a weekday.
          </p>
          <p>
            Families on Care.com have rated the program 5.0 from ten reviews. We’re glad for that —
            and we still think a visit is the only review that matters.
          </p>
        </div>
        <Button asChild size="lg" className="mt-8">
          <Link to="/enrollment">Ask about a visit</Link>
        </Button>
      </section>
    </main>
  );
}
