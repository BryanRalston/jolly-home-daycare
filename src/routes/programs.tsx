import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { PlayDots } from "@/components/logo";
import { asset } from "@/lib/assets";
import { site } from "@/lib/site";

export const Route = createFileRoute("/programs")({
  component: Programs,
  head: () => ({
    meta: [
      { title: `Programs · ${site.name}` },
      {
        name: "description",
        content:
          "Infant, toddler, preschool, and before-and-after school care at a licensed family day home in Leesburg, VA. Meals included.",
      },
    ],
  }),
});

const programs = [
  {
    title: "Infants",
    ages: "From 2 months",
    image: "images/floor-play.jpg",
    alt: "Children playing on the floor in the daycare playroom.",
    points: [
      "Held, fed, and rested on your child’s own rhythm as much as a group day allows.",
      "Familiar rooms and the same caregiver — no rotating infant-room staff.",
      "Safe sleep practices and daily notes at pickup.",
    ],
  },
  {
    title: "Toddlers",
    ages: "Walking through ~age 3",
    image: "images/playroom.jpg",
    alt: "The playroom with a play kitchen, chalkboard, and shelves of toys.",
    points: [
      "Language, climbing, and the hard work of sharing in a small group.",
      "Outdoor play every day weather allows.",
      "Potty learning in partnership with home — never a race.",
    ],
  },
  {
    title: "Preschool",
    ages: "Around 3 to 5",
    image: "images/art.jpg",
    alt: "Art table with paints, brushes, and sun paintings.",
    points: [
      "Stories, songs, scissors, and enough mess to make a picture worth hanging.",
      "Practice for kindergarten: coats, listening, waiting a turn — without drilling worksheets.",
      "Mixed-age days, so younger friends are nearby and older ones lead.",
    ],
  },
  {
    title: "Before & after school",
    ages: "School-age",
    image: "images/backyard.jpg",
    alt: "The fenced backyard with a playhouse, slide, and toys.",
    points: [
      "A known house before the bus and after the bell.",
      "Snack, a stretch of outdoor time, and quiet for homework if it’s needed.",
      "Siblings can often stay under one roof, which is the whole point of a family day home.",
    ],
  },
];

function Programs() {
  return (
    <main>
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:py-16">
        <div className="flex items-center gap-3">
          <PlayDots />
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-terracotta">
            Programs
          </p>
        </div>
        <h1 className="mt-3 max-w-2xl font-display text-4xl font-semibold text-ink sm:text-5xl">
          From the first months through the school-age years.
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
          Openings are offered for infants starting at 2 months, children through age 5, and
          before- and after-schoolers. Hours are {site.hours.days}, {site.hours.time}.
        </p>
      </section>

      <section className="mx-auto max-w-6xl space-y-16 px-4 pb-20 sm:px-6">
        {programs.map((p, i) => {
          const rings = ["ring-blush/80", "ring-sunflower", "ring-aqua/70", "ring-leaf/60"];
          const dots = ["bg-terracotta", "bg-sunflower-dark", "bg-aqua", "bg-leaf"];
          return (
          <article
            key={p.title}
            className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12"
          >
            <div className={i % 2 === 1 ? "lg:order-2" : undefined}>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-leaf">{p.ages}</p>
              <h2 className="mt-2 font-display text-3xl font-semibold text-ink">{p.title}</h2>
              <ul className="mt-5 space-y-3">
                {p.points.map((point) => (
                  <li key={point} className="flex gap-3 text-sm leading-relaxed text-muted">
                    <span className={`mt-2 size-2 shrink-0 rounded-full ${dots[i]}`} />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className={i % 2 === 1 ? "lg:order-1" : undefined}>
              <img
                src={asset(p.image)}
                alt={p.alt}
                className={`aspect-[4/3] w-full rounded-xl object-cover ring-4 ${rings[i]}`}
              />
            </div>
          </article>
          );
        })}
      </section>

      <section className="bg-sunflower/40">
        <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6">
          <h2 className="font-display text-3xl font-semibold text-ink">
            Weekly rate includes meals.
          </h2>
          <p className="mt-3 text-muted">
            Breakfast, lunch, snacks, and dinner are cooked here and included. We’ll talk tuition
            on a visit — it depends on age and the days you need.
          </p>
          <Button asChild size="lg" className="mt-8">
            <Link to="/enrollment">Ask about openings</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
