import { InquiryForm } from "@/components/inquiry-form";
import { Button } from "@/components/ui/button";
import { moodStills, parentVoices, providerFacts, trustItems } from "@/lib/content";
import { asset } from "@/lib/assets";
import { addressLine, site } from "@/lib/site";
import { cn } from "@/lib/utils";

/** Public enrollment / visit request — served at both `/` and `/enrollment`. */
export function EnrollmentPage() {
  return (
    <main className="pb-24 md:pb-0">
      <Hero />
      <TrustStrip />
      <PhotoGrid />
      <AboutProvider />
      <ParentVoices />
      <VisitSection />
      <FindTheDoor />
    </main>
  );
}

function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-forest">
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(circle at 18% 20%, rgba(193,122,92,0.35), transparent 42%), radial-gradient(circle at 88% 78%, rgba(251,246,238,0.12), transparent 38%)",
        }}
      />
      <div className="relative mx-auto grid min-h-[78vh] max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:py-24">
        <div>
          <p className="reveal text-xs font-semibold tracking-[0.22em] text-cream/80 uppercase">
            {site.address.neighborhood} · Leesburg, VA
          </p>
          <h1 className="reveal mt-4 max-w-xl font-display text-5xl leading-[1.05] text-cream sm:text-6xl lg:text-7xl">
            Come see the house.
          </h1>
          <p className="reveal mt-5 max-w-lg text-base leading-relaxed text-cream/85 sm:text-lg">
            A licensed family day home — meals included, a known adult at the door, and a short visit
            so you can walk the rooms before you decide.
          </p>
          <div className="reveal mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <a href="#visit">Request a visit</a>
            </Button>
            <Button asChild size="lg" variant="cream">
              <a href={site.phoneHref}>Call {site.phone}</a>
            </Button>
          </div>
        </div>
        <div className="reveal justify-self-center lg:justify-self-end">
          <img
            src={asset("images/logo.png")}
            alt={`${site.name}. ${site.tagline}.`}
            width={450}
            height={450}
            className="w-64 rounded-lg shadow-soft ring-1 ring-cream/10 sm:w-80 lg:w-[22rem]"
          />
        </div>
      </div>
    </section>
  );
}

function TrustStrip() {
  return (
    <section className="border-b border-line bg-cream" aria-label="At a glance">
      <div className="mx-auto flex max-w-6xl gap-6 overflow-x-auto px-4 py-6 sm:grid sm:grid-cols-5 sm:overflow-visible sm:px-6 sm:py-8">
        {trustItems.map((item) => (
          <div key={item.label} className="min-w-[10.5rem] shrink-0 sm:min-w-0">
            <p className="text-[0.7rem] font-semibold tracking-[0.16em] text-terracotta uppercase">
              {item.label}
            </p>
            <p className="mt-1.5 text-sm leading-snug text-ink">{item.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function PhotoGrid() {
  const [learning, meals, warmth] = moodStills;

  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
      <p className="text-xs font-semibold tracking-[0.2em] text-terracotta uppercase">
        Still lifes
      </p>
      <h2 className="mt-3 max-w-xl font-display text-3xl text-ink sm:text-4xl">
        Learning, meals, warmth.
      </h2>
      <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted">
        Generated still lifes for mood — not photographs of the Leesburg house. Come walk the rooms
        on a visit. We don’t publish photos of the children in care.
      </p>
      <div className="mt-8 grid gap-3 sm:grid-cols-2">
        <figure className="overflow-hidden rounded-lg bg-cream shadow-soft sm:col-span-2">
          <img
            src={asset(learning.src)}
            alt={learning.alt}
            className="aspect-[16/9] w-full object-cover"
          />
          <figcaption className="px-4 py-3 text-sm text-muted">
            <span className="font-medium text-ink">{learning.caption}.</span> {learning.alt}
          </figcaption>
        </figure>
        <figure className="overflow-hidden rounded-lg bg-cream shadow-soft">
          <img src={asset(meals.src)} alt={meals.alt} className="aspect-[4/3] w-full object-cover" />
          <figcaption className="px-4 py-3 text-sm text-muted">
            <span className="font-medium text-ink">{meals.caption}.</span> {meals.alt}
          </figcaption>
        </figure>
        <figure className="overflow-hidden rounded-lg bg-cream shadow-soft">
          <img
            src={asset(warmth.src)}
            alt={warmth.alt}
            className="aspect-[4/3] w-full object-cover"
          />
          <figcaption className="px-4 py-3 text-sm text-muted">
            <span className="font-medium text-ink">{warmth.caption}.</span> {warmth.alt}
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

function AboutProvider() {
  return (
    <section className="border-y border-line bg-cream">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:py-20">
        <div>
          <p className="text-xs font-semibold tracking-[0.2em] text-terracotta uppercase">
            About / Provider
          </p>
          <h2 className="mt-3 font-display text-3xl text-ink sm:text-4xl">
            {site.providerName}
            <span className="mt-2 block text-2xl text-muted sm:text-3xl">
              {site.providerHonorific}
            </span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted">
            “{site.tagline}.” A Virginia-licensed family day home at {addressLine}, in business
            since 2000. Openings follow the current enrollment copy: infants from 2 months through
            age 5, and before- and after-school care.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Tuition is shared in person so it matches the actual schedule. Care.com also lists a
            5.0 rating from ten parent reviews — a visit is still the right next step.
          </p>
        </div>
        <ul className="grid gap-3 sm:grid-cols-2">
          {providerFacts.map((fact) => (
            <li
              key={fact}
              className="rounded-lg border border-line bg-surface px-4 py-3 text-sm leading-relaxed text-ink shadow-soft"
            >
              {fact}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function ParentVoices() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
      <p className="text-xs font-semibold tracking-[0.2em] text-terracotta uppercase">
        Parent voices
      </p>
      <h2 className="mt-3 max-w-xl font-display text-3xl text-ink sm:text-4xl">
        From families who already walked through the door.
      </h2>
      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {parentVoices.map((voice, i) => (
          <blockquote
            key={voice.name}
            className={cn(
              "rounded-lg border border-line bg-surface p-6 shadow-soft",
              i === 0 && "lg:col-span-2 lg:p-8",
            )}
          >
            <p className="font-display text-xl leading-relaxed text-ink sm:text-2xl">
              “{voice.quote}”
            </p>
            <footer className="mt-5 text-sm text-muted">
              <cite className="not-italic font-medium text-ink">{voice.name}</cite>
              {" · "}
              Parent review on Care.com
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}

function VisitSection() {
  const warmth = moodStills[2];

  return (
    <section id="visit" className="relative isolate scroll-mt-32 overflow-hidden border-y border-line bg-forest">
      <img
        src={asset(warmth.src)}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-[0.18]"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-forest/80"
        aria-hidden="true"
      />
      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:py-20">
        <div>
          <p className="text-xs font-semibold tracking-[0.2em] text-terracotta uppercase">
            Request a visit
          </p>
          <h2 className="mt-3 font-display text-3xl text-cream sm:text-4xl">
            Tell us a little, then come see the rooms.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-cream/80">
            We’ll follow up about a visit. Bring questions about ages, days you need, meals and
            allergies, and a start date. Tuition is shared in person.
          </p>
          <dl className="mt-8 space-y-4 text-sm">
            <div>
              <dt className="font-semibold text-cream">Call or email</dt>
              <dd className="mt-1 text-cream/80">
                <a href={site.phoneHref} className="underline decoration-cream/30 underline-offset-4">
                  {site.phone}
                </a>
                {" · "}
                <a href={site.emailHref} className="underline decoration-cream/30 underline-offset-4">
                  {site.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-cream">When we’re open</dt>
              <dd className="mt-1 text-cream/80">
                {site.hours.days}, {site.hours.time}.
              </dd>
            </div>
          </dl>
        </div>
        <InquiryForm />
      </div>
    </section>
  );
}

function FindTheDoor() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
      <p className="text-xs font-semibold tracking-[0.2em] text-terracotta uppercase">
        Find the door
      </p>
      <h2 className="mt-3 font-display text-3xl text-ink sm:text-4xl">{addressLine}</h2>
      <p className="mt-3 max-w-xl text-base text-muted">
        Street parking on Longhouse Place, in Potomac Station.
      </p>
      <div className="mt-8 grid gap-4 lg:grid-cols-2">
        <div className="rounded-lg border border-line bg-cream p-6 shadow-soft">
          <p className="text-sm font-semibold text-ink">Reach us</p>
          <ul className="mt-4 space-y-3 text-sm text-muted">
            <li>
              <a href={site.phoneHref} className="text-terracotta-deep hover:underline">
                {site.phone}
              </a>
            </li>
            <li>
              <a href={site.emailHref} className="text-terracotta-deep hover:underline">
                {site.email}
              </a>
            </li>
            <li>
              <a
                href={site.mapsUrl}
                className="text-terracotta-deep hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                Open in Google Maps
              </a>
            </li>
          </ul>
        </div>
        <iframe
          title={`Map of ${addressLine}`}
          src={site.mapsEmbedUrl}
          className="aspect-[16/9] w-full rounded-lg border-0 shadow-soft lg:aspect-auto lg:min-h-[16rem]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
    </section>
  );
}
