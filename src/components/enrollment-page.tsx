import { FactChips } from "@/components/fact-chips";
import { InquiryForm } from "@/components/inquiry-form";
import { VisitCtas } from "@/components/visit-ctas";
import {
  earlyLearning,
  faqs,
  houseFacade,
  moodStills,
  parentVoices,
  programs,
  credentialChips,
  pullQuotes,
  safetyItems,
  trustBar,
  whyJolly,
} from "@/lib/content";
import { asset } from "@/lib/assets";
import { addressLine, site } from "@/lib/site";
import { cn } from "@/lib/utils";

/** Public enrollment / visit request — served at both `/` and `/enrollment`. */
export function EnrollmentPage() {
  return (
    <main className="pb-24 md:pb-0">
      <Hero />
      <TrustBar />
      <WhyJolly />
      <Programs />
      <Learning />
      <Meals />
      <Safety />
      <MeetMsJolly />
      <ParentReviews />
      <OurHome />
      <Faq />
      <Location />
      <VisitSection />
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
            width={280}
            height={100}
            className="reveal mb-6 h-16 w-[11.4rem] rounded-md bg-cream object-cover object-center shadow-soft ring-1 ring-cream/15 sm:h-20 sm:w-[14.2rem]"
          />
          <p className="reveal text-xs font-semibold tracking-[0.22em] text-cream/80 uppercase">
            {site.address.neighborhood} · Leesburg, VA
          </p>
          <h1 className="reveal mt-4 font-display text-5xl leading-[1.05] text-cream sm:text-6xl lg:text-7xl">
            A Loving Home Away From Home for Your Child
          </h1>
          <p className="reveal mt-5 text-base leading-relaxed text-cream/85 sm:text-lg">
            Licensed family daycare in Potomac Station, Leesburg — nurturing care, early learning,
            nutritious meals, and individual attention for infants through preschoolers.
          </p>
          <p className="reveal mt-4 text-sm font-medium tracking-wide text-cream/80">
            Infants from 2 months · Preschool · Before &amp; after school care
          </p>
          <p className="reveal mt-2 text-sm text-cream/70">Serving families since {site.since}</p>
          <VisitCtas tone="onDark" className="reveal mt-8" />
        </div>
      </div>
    </section>
  );
}

function TrustBar() {
  return (
    <section className="border-b border-line bg-cream" aria-label="At a glance">
      <ul className="mx-auto flex max-w-6xl gap-x-8 gap-y-3 overflow-x-auto px-4 py-5 sm:flex-wrap sm:justify-between sm:overflow-visible sm:px-6 sm:py-6">
        {trustBar.map((item) => (
          <li key={item} className="shrink-0 text-sm font-medium whitespace-nowrap text-ink">
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}

function WhyJolly() {
  return (
    <section id="why" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-16 sm:px-6 lg:py-20">
      <p className="text-xs font-semibold tracking-[0.2em] text-terracotta uppercase">Why Jolly</p>
      <h2 className="mt-3 max-w-xl font-display text-3xl text-ink sm:text-4xl">
        A licensed family day home, not a large center
      </h2>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
        Small-group care in Potomac Station — licensed, familiar, and built around one caregiver who
        has been doing this since 2000.
      </p>
      <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {whyJolly.map((card) => (
          <li key={card.title} className="rounded-lg border border-line bg-surface p-6 shadow-soft">
            <h3 className="font-display text-xl text-ink">{card.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{card.body}</p>
          </li>
        ))}
      </ul>
      <VisitCtas className="mt-10" />
    </section>
  );
}

function Programs() {
  return (
    <section id="programs" className="scroll-mt-24 border-y border-line bg-cream">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
        <p className="text-xs font-semibold tracking-[0.2em] text-terracotta uppercase">Programs</p>
        <h2 className="mt-3 max-w-xl font-display text-3xl text-ink sm:text-4xl">
          Infants, preschool, and school-age care
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
          Care for infants from 2 months through age 5, plus before- and after-school care — all in
          one Leesburg family day home.
        </p>
        <ul className="mt-10 grid gap-4 md:grid-cols-3">
          {programs.map((program) => (
            <li
              key={program.title}
              className="rounded-lg border border-line bg-surface p-6 shadow-soft"
            >
              <p className="text-xs font-semibold tracking-[0.16em] text-terracotta uppercase">
                {program.ages}
              </p>
              <h3 className="mt-2 font-display text-2xl text-ink">{program.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{program.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Learning() {
  const books = moodStills[0];

  return (
    <section id="learning" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-16 sm:px-6 lg:py-20">
      <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
        <div>
          <p className="text-xs font-semibold tracking-[0.2em] text-terracotta uppercase">
            Learning through play
          </p>
          <h2 className="mt-3 font-display text-3xl text-ink sm:text-4xl">
            Early learning, and preschool for ages 2+
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Days mix free play with the early-learning work listed on the program: language, letters,
            numbers, and hands-on puzzles. Parents often mention friendship, familiar routines, and
            growing confidence alongside that learning.
          </p>
          <h3 className="mt-8 font-display text-xl text-ink">Early learning</h3>
          <ul className="mt-3 grid gap-2 sm:grid-cols-2">
            {earlyLearning.map((item) => (
              <li
                key={item}
                className="rounded-md border border-line bg-surface px-4 py-2.5 text-sm text-ink"
              >
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm leading-relaxed text-muted">
            Children ages 2 and up also follow a preschool curriculum — songs, art, colors, letters,
            and numbers in the comfort of the home.
          </p>
        </div>
        <img
          src={asset(books.src)}
          alt={books.alt}
          className="aspect-[4/3] w-full rounded-lg object-cover shadow-soft"
        />
      </div>
    </section>
  );
}

function Meals() {
  const snack = moodStills[1];

  return (
    <section id="meals" className="scroll-mt-24 border-y border-line bg-cream">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-20">
        <img
          src={asset(snack.src)}
          alt={snack.alt}
          className="aspect-[4/3] w-full rounded-lg object-cover shadow-soft lg:order-2"
        />
        <div>
          <p className="text-xs font-semibold tracking-[0.2em] text-terracotta uppercase">Meals</p>
          <h2 className="mt-3 font-display text-3xl text-ink sm:text-4xl">
            Nutritious meals included
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Breakfast, lunch, snacks, and dinner are included. Meals follow CNI (Child Nutrition Inc)
            components: protein, carbs, vegetables, and fruit.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted">
            We can talk through allergies and dietary needs on a visit.
          </p>
        </div>
      </div>
    </section>
  );
}

function Safety() {
  return (
    <section id="safety" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-16 sm:px-6 lg:py-20">
      <p className="text-xs font-semibold tracking-[0.2em] text-terracotta uppercase">
        Safety &amp; trust
      </p>
      <h2 className="mt-3 max-w-xl font-display text-3xl text-ink sm:text-4xl">
        Licensed care you can look up
      </h2>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
        A Virginia family day home with published credentials, a small group, and background checks
        on file.
      </p>
      <ul className="mt-10 grid gap-4 sm:grid-cols-2">
        {safetyItems.map((item) => (
          <li key={item.title} className="rounded-lg border border-line bg-surface p-6 shadow-soft">
            <h3 className="font-display text-xl text-ink">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{item.body}</p>
          </li>
        ))}
      </ul>
      <VisitCtas className="mt-10" />
    </section>
  );
}

function MeetMsJolly() {
  return (
    <section id="ms-jolly" className="scroll-mt-24 border-y border-line bg-cream">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:max-w-3xl lg:py-20">
        <p className="text-xs font-semibold tracking-[0.2em] text-terracotta uppercase">
          Meet Ms. Jolly
        </p>
        <h2 className="mt-3 font-display text-3xl text-ink sm:text-4xl">
          {site.providerName} · {site.providerHonorific}
        </h2>
        <p className="mt-5 text-base leading-relaxed text-muted">
          Farhana Abid — families know her as Ms. Jolly — has cared for children in her Potomac
          Station home since {site.since}. She calls it a home away from home: a licensed family
          day home where infants from 2 months through age 5, and before- and after-schoolers,
          spend the day with one familiar caregiver.
        </p>
        <p className="mt-4 text-base leading-relaxed text-muted">
          She is certified in Adult and Child CPR and First-Aid, and is criminal and Child
          Protective Agency background checked.
        </p>
        <FactChips items={credentialChips} className="mt-6" />
        <p className="mt-6 text-sm text-muted">
          Parents on Care.com rate the program 5.0 from ten reviews.{" "}
          <a href="#reviews" className="text-terracotta-deep hover:underline">
            Read what families say
          </a>
          .
        </p>
      </div>
    </section>
  );
}

function ParentReviews() {
  return (
    <section id="reviews" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-16 sm:px-6 lg:py-20">
      <p className="text-xs font-semibold tracking-[0.2em] text-terracotta uppercase">
        Care.com · 5.0 from 10 reviews
      </p>
      <h2 className="mt-3 max-w-xl font-display text-3xl text-ink sm:text-4xl">
        Loved by local families
      </h2>
      <div className="mt-10 grid gap-4 lg:grid-cols-2">
        {pullQuotes.map((voice) => (
          <blockquote
            key={voice.name}
            className="rounded-lg border border-terracotta/25 bg-cream p-6 shadow-soft lg:p-8"
          >
            <p className="font-display text-2xl leading-snug text-ink">“{voice.quote}”</p>
            <footer className="mt-4 text-sm text-muted">
              <cite className="not-italic font-medium text-ink">{voice.name}</cite>
              {" · "}
              Care.com
            </footer>
          </blockquote>
        ))}
      </div>
      <ul className="mt-8 grid gap-4 lg:grid-cols-2">
        {parentVoices.map((voice, i) => (
          <li key={voice.name} className={cn(i === 0 && "lg:col-span-2")}>
            <blockquote className="h-full rounded-lg border border-line bg-surface p-6 shadow-soft">
              <p className="text-base leading-relaxed text-ink">“{voice.quote}”</p>
              <footer className="mt-4 text-sm text-muted">
                <cite className="not-italic font-medium text-ink">{voice.name}</cite>
                {" · "}
                Parent review on Care.com
              </footer>
            </blockquote>
          </li>
        ))}
      </ul>
    </section>
  );
}

function OurHome() {
  const [learning, meals, warmth] = moodStills;

  return (
    <section id="home" className="scroll-mt-24 border-y border-line bg-cream">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
        <p className="text-xs font-semibold tracking-[0.2em] text-terracotta uppercase">Our home</p>
        <h2 className="mt-3 font-display text-3xl text-ink sm:text-4xl">
          A family day home in Potomac Station
        </h2>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted">
          The house on Longhouse Place where children spend their days — a quiet Leesburg
          neighborhood, close to everyday family life.
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
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section id="faq" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-16 sm:px-6 lg:py-20">
      <p className="text-xs font-semibold tracking-[0.2em] text-terracotta uppercase">FAQ</p>
      <h2 className="mt-3 max-w-xl font-display text-3xl text-ink sm:text-4xl">
        Questions families usually ask
      </h2>
      <dl className="mt-10 divide-y divide-line border-y border-line">
        {faqs.map((item) => (
          <div key={item.q} className="grid gap-2 py-6 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
            <dt className="font-display text-xl text-ink">{item.q}</dt>
            <dd className="text-base leading-relaxed text-muted">{item.a}</dd>
          </div>
        ))}
      </dl>
      <VisitCtas className="mt-10" />
    </section>
  );
}

function Location() {
  return (
    <section id="location" className="scroll-mt-24 border-y border-line bg-cream">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
        <p className="text-xs font-semibold tracking-[0.2em] text-terracotta uppercase">Location</p>
        <h2 className="mt-3 font-display text-3xl text-ink sm:text-4xl">
          Conveniently located in Potomac Station
        </h2>
        <p className="mt-3 max-w-xl text-base text-muted">
          {addressLine}. Street parking on Longhouse Place.
        </p>
        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          <div className="rounded-lg border border-line bg-surface p-6 shadow-soft">
            <p className="text-sm font-semibold text-ink">Hours &amp; contact</p>
            <ul className="mt-4 space-y-3 text-sm text-muted">
              <li>
                {site.hours.days}, {site.hours.time}
              </li>
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
      </div>
    </section>
  );
}

function VisitSection() {
  const warmth = moodStills[2];

  return (
    <section id="visit" className="relative isolate scroll-mt-32 overflow-hidden bg-forest">
      <img
        src={asset(warmth.src)}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-[0.18]"
      />
      <div className="pointer-events-none absolute inset-0 bg-forest/80" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:py-20">
        <div>
          <p className="text-xs font-semibold tracking-[0.2em] text-terracotta uppercase">
            Schedule a Visit
          </p>
          <h2 className="mt-3 font-display text-3xl text-cream sm:text-4xl">Schedule a Visit</h2>
          <p className="mt-5 text-base leading-relaxed text-cream/80">
            Come see the home and meet Ms. Jolly before you decide. Tuition is shared in person — it
            varies by age and schedule. Contact us for current rates and to ask about openings.
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
