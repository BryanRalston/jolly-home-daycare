import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Baby,
  Clock,
  HeartHandshake,
  Leaf,
  ShieldCheck,
  Sun,
  UtensilsCrossed,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { PlayDots } from "@/components/logo";
import { asset } from "@/lib/assets";
import { site } from "@/lib/site";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <main>
      <Hero />
      <TrustBar />
      <Intro />
      <ProgramsTeaser />
      <LifeAtHome />
      <DayRhythm />
      <Meals />
      <LocationBand />
      <FinalCta />
    </main>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream">
      <div
        className="pointer-events-none absolute -right-10 -top-16 size-52 rounded-full bg-sunflower/50"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-20 left-8 size-40 rounded-full bg-aqua/25"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute right-1/3 top-1/2 hidden size-16 rounded-full bg-blush/40 lg:block"
        aria-hidden="true"
      />
      <div className="relative mx-auto grid max-w-6xl items-center gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:gap-12 lg:py-16">
        <div className="max-w-xl">
          <div className="flex items-center gap-3">
            <PlayDots />
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-terracotta">
              Leesburg · Potomac Station
            </p>
          </div>
          <h1 className="mt-4 font-display text-[2.35rem] font-semibold leading-[1.08] text-ink sm:text-5xl lg:text-[3.35rem]">
            A jolly start, right at home.
          </h1>
          <p className="mt-5 max-w-prose text-base leading-relaxed text-muted sm:text-lg">
            Licensed family day care in a real house on Longhouse Place. Small groups, home-cooked
            meals, a yard to play in, and a provider who has been doing this for more than a decade.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link to="/enrollment">Request a spot</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/about">Meet the home</Link>
            </Button>
          </div>
          <p className="mt-5 text-sm text-muted">
            Openings for infants from 2 months through age 5, plus before- and after-school care.
            Monday–Friday, 7:30 AM – 5:30 PM.
          </p>
        </div>
        <div className="relative">
          <div className="overflow-hidden rounded-xl ring-4 ring-sunflower shadow-[0_24px_60px_-28px_rgba(42,36,28,0.35)]">
            <img
              src={asset("images/playroom.jpg")}
              alt="The playroom at Jolly Home Daycare — toys, a play kitchen, chalkboard, and books in the Leesburg home."
              className="aspect-[16/10] w-full object-cover sm:aspect-[16/9]"
            />
          </div>
          <p className="mt-3 text-xs text-muted">18945 Longhouse Place, Leesburg, VA 20176</p>
        </div>
      </div>
    </section>
  );
}

function TrustBar() {
  const items = [
    { icon: ShieldCheck, label: "Virginia licensed family day home", tint: "bg-aqua/20 text-aqua-dark" },
    { icon: HeartHandshake, label: "CPR, First-Aid & MAT certified", tint: "bg-blush/30 text-terracotta-dark" },
    { icon: Sun, label: "10+ years of home daycare", tint: "bg-sunflower/50 text-ink" },
    { icon: UtensilsCrossed, label: "Breakfast through dinner included", tint: "bg-leaf/15 text-leaf-dark" },
  ];
  return (
    <section className="border-y border-line bg-paper/70">
      <ul className="mx-auto grid max-w-6xl gap-4 px-4 py-6 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
        {items.map((item) => (
          <li key={item.label} className="flex items-start gap-3">
            <span
              className={`flex size-9 shrink-0 items-center justify-center rounded-full ${item.tint}`}
            >
              <item.icon className="size-4" aria-hidden="true" />
            </span>
            <span className="text-sm font-medium leading-snug text-ink">{item.label}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

function Intro() {
  return (
    <section className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-center lg:py-24">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-leaf">Why this house</p>
        <h2 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
          Not a center. A home the children already know.
        </h2>
        <p className="mt-5 text-base leading-relaxed text-muted">
          Jolly Home Daycare is a licensed family day home in Potomac Station — the kind of care where
          the kitchen smells like lunch, the backyard is the playground, and the same grown-up
          greets your child every morning.
        </p>
        <p className="mt-4 text-base leading-relaxed text-muted">
          Families come here for a calmer ratio than a big center, mixed-age play, and meals that
          follow Child Nutrition guidelines: protein, grains, fruit, and vegetables, included in
          the weekly rate. Background-checked. State license verified.
        </p>
      </div>
      <div className="overflow-hidden rounded-xl ring-4 ring-blush/80">
        <img
          src={asset("images/room-kids.jpg")}
          alt="Children playing in the indoor play space at Jolly Home Daycare."
          className="aspect-[4/3] w-full object-cover"
        />
      </div>
    </section>
  );
}

function ProgramsTeaser() {
  const programs = [
    {
      icon: Baby,
      title: "Infants",
      ages: "From 2 months",
      copy: "Unhurried days, held close. Bottles, naps, tummy time, and the same familiar rooms.",
      chip: "bg-blush text-ink",
    },
    {
      icon: Sun,
      title: "Toddlers & preschool",
      ages: "Walking through age 5",
      copy: "Stories, art, outdoor play, and the social practice of a small mixed-age group.",
      chip: "bg-sunflower text-ink",
    },
    {
      icon: Clock,
      title: "Before & after school",
      ages: "School-age",
      copy: "A known house before the bus and after the bell — snack, homework quiet, and a yard.",
      chip: "bg-cream text-ink",
    },
  ];
  return (
    <section className="bg-aqua text-cream">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cream/80">
              Programs
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
              Room for the whole early years.
            </h2>
          </div>
          <Button asChild variant="sunflower">
            <Link to="/programs">See programs</Link>
          </Button>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {programs.map((p) => (
            <article key={p.title} className="rounded-xl bg-cream/15 p-6 ring-2 ring-cream/25">
              <span className={`inline-flex size-10 items-center justify-center rounded-full ${p.chip}`}>
                <p.icon className="size-5" aria-hidden="true" />
              </span>
              <h3 className="mt-4 font-display text-xl font-semibold">{p.title}</h3>
              <p className="mt-1 text-xs font-medium uppercase tracking-[0.14em] text-cream/75">
                {p.ages}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-cream/90">{p.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function LifeAtHome() {
  const shots = [
    {
      src: asset("images/backyard.jpg"),
      alt: "The fenced backyard play area with a playhouse, slide, and toys.",
      caption: "The yard",
      ring: "ring-leaf/70",
    },
    {
      src: asset("images/outside-play.jpg"),
      alt: "Children on the outdoor play set in the backyard.",
      caption: "Outside morning play",
      ring: "ring-aqua/70",
    },
    {
      src: asset("images/snow-day-wide.jpg"),
      alt: "A snow day at Jolly — children bundled up in the yard.",
      caption: "Days like this",
      ring: "ring-sunflower",
    },
  ];
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
      <div className="flex items-center gap-3">
        <PlayDots />
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-terracotta">
          Life at Jolly
        </p>
      </div>
      <h2 className="mt-3 max-w-xl font-display text-3xl font-semibold text-ink sm:text-4xl">
        Wooden toys, a real kitchen, and grass underfoot.
      </h2>
      <div className="mt-10 grid gap-4 sm:grid-cols-3">
        {shots.map((shot) => (
          <figure key={shot.src}>
            <img
              src={shot.src}
              alt={shot.alt}
              className={`aspect-[4/3] w-full rounded-xl object-cover ring-4 ${shot.ring}`}
            />
            <figcaption className="mt-2 text-sm text-muted">{shot.caption}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

function DayRhythm() {
  const beats = [
    { t: "Morning", d: "Greetings, breakfast, and unhurried play as everyone arrives.", n: "text-terracotta" },
    { t: "Midday", d: "Outdoor time, a sit-down lunch, and rest for the little ones.", n: "text-aqua" },
    { t: "Afternoon", d: "Art, stories, snacks, and school-age children returning.", n: "text-sunflower-dark" },
    { t: "Evening", d: "Dinner for the late day, then calm pickup at the door.", n: "text-leaf" },
  ];
  return (
    <section className="border-y border-line bg-paper/80">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="font-display text-3xl font-semibold text-ink">A day that feels like a day.</h2>
        <p className="mt-3 max-w-prose text-muted">
          We don’t run on bells. We do keep a rhythm children can count on — meals, rest, outdoor
          play, and enough quiet that a toddler can still hear themselves think.
        </p>
        <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {beats.map((b, i) => (
            <li key={b.t} className="rounded-xl bg-cream p-5 ring-2 ring-line">
              <p className={`font-display text-4xl font-semibold ${b.n}`}>
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-2 font-display text-xl font-semibold text-ink">{b.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{b.d}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Meals() {
  return (
    <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-24">
      <div className="overflow-hidden rounded-xl ring-4 ring-leaf/50 lg:order-2">
        <img
          src={asset("images/lunch.jpg")}
          alt="Lunchtime at Jolly — a child at the table with a home-cooked plate."
          className="aspect-[4/3] w-full object-cover"
        />
      </div>
      <div className="lg:order-1">
        <Leaf className="size-6 text-leaf" aria-hidden="true" />
        <h2 className="mt-4 font-display text-3xl font-semibold text-ink sm:text-4xl">
          Breakfast, lunch, snacks, and dinner — in the weekly rate.
        </h2>
        <p className="mt-4 text-base leading-relaxed text-muted">
          Meals are cooked here and built around the basics Child Nutrition Inc. asks for: protein,
          carbohydrates, vegetables, and fruit. No packing a cooler unless your child has a
          specific plan we agree on together.
        </p>
      </div>
    </section>
  );
}

function LocationBand() {
  return (
    <section className="bg-leaf text-cream">
      <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-14 sm:px-6 lg:grid-cols-2">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cream/60">
            Find us
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold">
            {site.address.street}
            <br />
            {site.address.city}, {site.address.state} {site.address.zip}
          </h2>
          <p className="mt-4 max-w-prose text-sm leading-relaxed text-cream/80">
            In the Potomac Station neighborhood of Leesburg — a quiet street, a fenced yard, and
            easy for Loudoun families running a weekday. {site.hours.days}, {site.hours.time}.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Button asChild variant="sunflower">
              <a href={site.mapsUrl} target="_blank" rel="noreferrer">
                Directions
              </a>
            </Button>
            <Button asChild variant="outline" className="border-cream/30 text-cream hover:bg-cream/10 hover:text-cream">
              <Link to="/enrollment">Plan a visit</Link>
            </Button>
          </div>
        </div>
        <div>
          <div className="overflow-hidden rounded-xl ring-4 ring-sunflower">
            <img
              src={asset("images/backyard.jpg")}
              alt="The backyard play area at 18945 Longhouse Place."
              className="aspect-[16/10] w-full object-cover lg:aspect-[16/9]"
            />
          </div>
          <p className="mt-2 text-xs text-cream/55">{site.address.neighborhood} · Loudoun County</p>
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="bg-sunflower/35">
      <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6 lg:py-24">
        <PlayDots className="justify-center" />
        <h2 className="mt-4 font-display text-3xl font-semibold text-ink sm:text-4xl">
          Spots come open. Tell us about your child.
        </h2>
        <p className="mx-auto mt-4 max-w-prose text-muted">
          Share ages, a hoped-for start date, and the best way to reach you. We’ll follow up about a
          tour of the house — the only honest way to know if this is the right fit.
        </p>
        <Button asChild size="lg" className="mt-8">
          <Link to="/enrollment">Request a spot</Link>
        </Button>
      </div>
    </section>
  );
}
