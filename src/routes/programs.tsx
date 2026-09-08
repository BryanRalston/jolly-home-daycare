import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { earlyLearning, moodStills, programs } from "@/lib/content";
import { asset } from "@/lib/assets";
import { site } from "@/lib/site";

export const Route = createFileRoute("/programs")({
  component: Programs,
  head: () => ({
    meta: [
      {
        title: `Infant, Preschool & After-School Care · ${site.name} · Leesburg, VA`,
      },
      {
        name: "description",
        content:
          "Infant care from 2 months, preschool curriculum ages 2+, and before-and-after school care at a licensed family day home in Potomac Station, Leesburg. Meals included.",
      },
    ],
    links: [{ rel: "canonical", href: `${site.publicUrl}/programs` }],
  }),
});

const stills = [moodStills[1], moodStills[0], moodStills[2]] as const;

function Programs() {
  return (
    <main className="pb-24 md:pb-0">
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:py-16">
        <p className="text-xs font-semibold tracking-[0.2em] text-terracotta uppercase">Programs</p>
        <h1 className="mt-3 max-w-2xl font-display text-4xl text-ink sm:text-5xl">
          Infant, preschool, and before- &amp; after-school care
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
          A licensed family day home in Potomac Station, Leesburg. Care for infants from 2 months
          through age 5, plus before- and after-school care. Hours are {site.hours.days},{" "}
          {site.hours.time}.
        </p>
      </section>

      <section className="mx-auto max-w-6xl space-y-16 px-4 pb-16 sm:px-6">
        {programs.map((p, i) => (
          <article key={p.title} className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
            <div className={i % 2 === 1 ? "lg:order-2" : undefined}>
              <p className="text-xs font-semibold tracking-[0.16em] text-terracotta uppercase">
                {p.ages}
              </p>
              <h2 className="mt-2 font-display text-3xl text-ink">{p.title}</h2>
              <p className="mt-5 text-sm leading-relaxed text-muted">{p.body}</p>
            </div>
            <img
              src={asset(stills[i].src)}
              alt={stills[i].alt}
              className={`aspect-[4/3] w-full rounded-lg object-cover shadow-soft ${i % 2 === 1 ? "lg:order-1" : ""}`}
            />
          </article>
        ))}
      </section>

      <section className="border-t border-line bg-cream">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
          <h2 className="font-display text-3xl text-ink">Early learning</h2>
          <p className="mt-3 text-muted">
            Poems, rhymes, alphabet, phonics, numbers, shapes, colors, and puzzles — including colors
            and numbers in English and Spanish. Preschool curriculum for ages 2 and up.
          </p>
          <ul className="mt-6 grid gap-2 sm:grid-cols-2">
            {earlyLearning.map((item) => (
              <li
                key={item}
                className="rounded-md border border-line bg-surface px-4 py-2.5 text-sm text-ink"
              >
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-8 text-muted">
            Breakfast, lunch, snacks, and dinner are included (CNI components). Tuition is shared in
            person — it varies by age and schedule.
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
