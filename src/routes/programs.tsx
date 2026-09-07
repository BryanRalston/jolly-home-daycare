import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

export const Route = createFileRoute("/programs")({
  component: Programs,
  head: () => ({
    meta: [
      { title: `Programs · ${site.name} · Leesburg, VA` },
      {
        name: "description",
        content:
          "Infant, preschool, and before-and-after school care at a licensed family day home in Leesburg, VA. Meals included. Preschool curriculum ages 2+.",
      },
    ],
    links: [{ rel: "canonical", href: `${site.publicUrl}/programs` }],
  }),
});

const programs = [
  {
    title: "Infants",
    ages: "From 2 months",
    copy: "The Care.com listing states openings for infants from 2 months. Meals — breakfast, lunch, snacks, and dinner — are included.",
    panel: "bg-forest text-cream",
  },
  {
    title: "Toddlers & preschool",
    ages: "Through age 5 · preschool curriculum ages 2+",
    copy: "Everyday activities listed on Care.com include poems, rhymes, alphabet, phonics, numbers, shapes, colors, puzzles, and colors and numbers in English and Spanish. Preschool curriculum for ages 2 and up is included, with lots of free play.",
    panel: "bg-terracotta text-cream",
  },
  {
    title: "Before & after school",
    ages: "School-age",
    copy: "The listing also notes openings for before- and after-schoolers. Hours are Monday–Friday, 7:30 AM – 5:30 PM. Capacity is 12, with a listed teacher/student ratio of 1:5.",
    panel: "bg-cream text-ink border border-line",
  },
] as const;

function Programs() {
  return (
    <main className="pb-24 md:pb-0">
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:py-16">
        <p className="text-xs font-semibold tracking-[0.2em] text-terracotta uppercase">Programs</p>
        <h1 className="mt-3 max-w-2xl font-display text-4xl text-ink sm:text-5xl">
          From the first months through the school-age years.
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
          Openings are offered for infants starting at 2 months, children through age 5, and
          before- and after-schoolers. Hours are {site.hours.days}, {site.hours.time}.
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
              <p className="mt-5 text-sm leading-relaxed text-muted">{p.copy}</p>
            </div>
            <div
              className={`flex aspect-[4/3] items-end rounded-lg p-6 shadow-soft sm:p-8 ${p.panel} ${i % 2 === 1 ? "lg:order-1" : ""}`}
            >
              <p className="font-display text-3xl leading-tight">{p.title}</p>
            </div>
          </article>
        ))}
      </section>

      <section className="border-t border-line bg-cream">
        <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6">
          <h2 className="font-display text-3xl text-ink">Meals are included. Tuition is not listed here.</h2>
          <p className="mt-3 text-muted">
            Breakfast, lunch, snacks, and dinner are included, with CNI-style meal components.
            We’ll talk tuition on a visit — it depends on age and the days you need.
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
