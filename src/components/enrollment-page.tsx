import { InquiryForm } from "@/components/inquiry-form";
import { PlayDots } from "@/components/logo";
import { asset } from "@/lib/assets";
import { addressLine, site } from "@/lib/site";

/** Public enrollment / visit request — served at both `/` and `/enrollment`. */
export function EnrollmentPage() {
  return (
    <main>
      <section className="mx-auto grid max-w-6xl gap-12 px-4 py-12 sm:px-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:py-16">
        <div>
          <div className="flex items-center gap-3">
            <PlayDots />
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-terracotta">
              Enrollment
            </p>
          </div>
          <h1 className="mt-3 font-display text-4xl font-semibold leading-tight text-ink sm:text-5xl">
            Come see the house.
          </h1>
          <p className="mt-5 text-base leading-relaxed text-muted">
            Openings are available for infants (from 2 months) through age 5, and for before- and
            after-school care. The best next step is a short visit so you can walk the rooms, meet
            the provider, and decide if the fit is right.
          </p>
          <dl className="mt-8 space-y-4 text-sm">
            <div>
              <dt className="font-semibold text-ink">Where</dt>
              <dd className="mt-1 text-muted">{addressLine}</dd>
            </div>
            <div>
              <dt className="font-semibold text-ink">Call</dt>
              <dd className="mt-1 text-muted">
                <a href={site.phoneHref} className="text-terracotta hover:underline">
                  {site.phone}
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-ink">Email</dt>
              <dd className="mt-1 text-muted">
                <a href={site.emailHref} className="text-terracotta hover:underline">
                  {site.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-ink">When we’re open</dt>
              <dd className="mt-1 text-muted">
                {site.hours.days}, {site.hours.time}. {site.hours.note}
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-ink">What to expect</dt>
              <dd className="mt-1 text-muted">
                We’ll talk ages, days you need, meals and allergies, and a start date. Tuition is
                shared in person so it matches the actual schedule.
              </dd>
            </div>
          </dl>
        </div>
        <InquiryForm />
      </section>

      <section className="border-t border-line bg-paper/50">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-ink">Find the door</h2>
          <p className="mt-2 text-sm text-muted">
            Potomac Station, Leesburg. Street parking on Longhouse Place.
          </p>
          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            <img
              src={asset("images/backyard.jpg")}
              alt="The backyard play area at Jolly Home Daycare."
              className="aspect-[16/9] w-full rounded-xl object-cover ring-4 ring-aqua/60"
            />
            <iframe
              title={`Map of ${addressLine}`}
              src={site.mapsEmbedUrl}
              className="aspect-[16/9] w-full rounded-xl border-0 ring-4 ring-sunflower"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
          <p className="mt-3 text-sm text-muted">
            Street parking on Longhouse Place.{" "}
            <a
              href={site.mapsUrl}
              className="font-medium text-terracotta underline decoration-terracotta/30 underline-offset-2 hover:decoration-terracotta"
              target="_blank"
              rel="noreferrer"
            >
              Open in Google Maps
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}
