import { site } from "@/lib/site";

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ChildCare"],
    name: site.name,
    description: site.description,
    url: site.publicUrl,
    image: [`${site.publicUrl}/og.jpg`, `${site.publicUrl}/images/logo.png`],
    telephone: site.phoneHref.replace("tel:", ""),
    email: site.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.state,
      postalCode: site.address.zip,
      addressCountry: "US",
    },
    openingHoursSpecification: site.hours.schemaDays.map((dayOfWeek) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek,
      opens: site.hours.opens,
      closes: site.hours.closes,
    })),
    areaServed: {
      "@type": "Place",
      name: `${site.address.neighborhood}, ${site.address.city}, ${site.address.state}`,
    },
    identifier: site.license.number,
    slogan: site.tagline,
  };
}

export function jsonLdText(): string {
  return JSON.stringify(localBusinessJsonLd());
}
