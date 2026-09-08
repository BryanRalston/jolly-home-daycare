import { InquiryForm } from "@/components/inquiry-form";
import { Button } from "@/components/ui/button";
import { houseFacade, moodStills, parentVoices, providerFacts, trustItems } from "@/lib/content";
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
      <FindUs />
    </main>
  );
}

function Hero() {
  return (
    <section className="relative isolate min-h-[78vh] overflow-hidden bg-forest">
      <img
        src={asset(houseFacade.src)}
        alt={houseFacade.alt}
        className="absolute inset-0 h-full w-full object-cover object-[center_70%]"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-forest via-forest/80 to-forest/20"
        aria-hidden="true"
      />
      <div className="relative mx-auto flex min-h-[78vh] max-w-6xl items-end px-4 py-16 sm:items-center sm:px-6 lg:py-24">
        <div className="max-w-xl">
          <img
            src={asset("images/logo.png")}
            alt={`${site.name}. ${site.tagline}.`}
            width={96}
            height={96}
            className="reveal mb-6 h-16 w-16 rounded-md shadow-soft ring-1 ring-cream/15 sm:h-20 sm:w-20"
          />
          <p className="reveal text-xs font-semibold tracking-[0.22em] text-cream/80 uppercase">
            {site.address.neighborhood} · Leesburg, VA
          </p>
          <h1 className="reveal mt-4 font-display text-5xl leading-[1.05] text-cream sm:text-6xl lg:text-7xl">
            Licensed family daycare in Leesburg
          </h1>
          <p className="reveal mt-5 text-base leading-relaxed text-cream/85 sm:text-lg">
            Infants from 2 months through age 5, plus before- and after-school care. Meals included.
            Come visit the home before you enroll.
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
      <h2 className="max-w-xl font-display text-3xl text-ink sm:text-4xl">Our home</h2>
      <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted">
        A family day home in Potomac Station — quiet rooms, meals, and everyday preschool learning.
      </p>
      <div className="mt-8 grid gap-3 sm:grid-cols-2">
        <img
          src={asset(houseFacade.src)}
          alt={houseFacade.alt}
          className="aspect-[16/9] w-full rounded-lg object-cover object-[center_70%] shadow-soft sm:col-span-2"
        />
        <img
          src={asset(learning.src)}
          alt={learning.alt}
          className="aspect-[16/9] w-full rounded-lg object-cover shadow-soft sm:col-span-2"
        />
        <img
          src={asset(meals.src)}
          alt={meals.alt}
          className="aspect-[4/3] w-full rounded-lg object-cover shadow-soft"
        />
        <img
          src={asset(warmth.src)}
          alt={warmth.alt}
          className="aspect-[4/3] w-full rounded-lg object-cover shadow-soft"
        />
      </div>
    </section>
  );
}

function AboutProvider() {
  return (
    <section className="border-y border-line bg-cream">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:py-20">
        <div>
          <p className="text-xs font-semibold tracking-[0.2em] text-terracotta uppercase">About</p>
          <h2 className="mt-3 font-display text-3xl text-ink sm:text-4xl">
            {site.providerName} · {site.providerHonorific}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted">
            A Virginia-licensed family day home at {addressLine}. In business since 2000. Openings
            for infants from 2 months through age 5, and before- and after-school care. Tuition is
            shared in person.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Parents on Care.com rate the program 5.0 from ten reviews.
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
        Parent reviews
      </p>
      <h2 className="mt-3 max-w-xl font-display text-3xl text-ink sm:text-4xl">What parents say</h2>
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
          <h2 className="mt-3 font-display text-3xl text-cream sm:text-4xl">Request a visit</h2>
          <p className="mt-5 text-base leading-relaxed text-cream/80">
            Tell us a few details and we’ll follow up. Bring questions about ages, schedule, meals
            and allergies, and a start date. Tuition is shared in person.
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

function FindUs() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
      <p className="text-xs font-semibold tracking-[0.2em] text-terracotta uppercase">Find us</p>
      <h2 className="mt-3 font-display text-3xl text-ink sm:text-4xl">{addressLine}</h2>
      <p className="mt-3 max-w-xl text-base text-muted">
        Street parking on Longhouse Place in Potomac Station.
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
