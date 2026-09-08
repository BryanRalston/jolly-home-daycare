/** Public facts only: Care.com listing + VA licensing directories + this site. */

export const site = {
  name: "Jolly Home Daycare",
  shortName: "Jolly Home",
  providerName: "Farhana Abid",
  providerHonorific: "Ms. Jolly",
  tagline: "Home away from home",
  since: 2000,
  description:
    "Licensed family day home and home daycare in Potomac Station, Leesburg, Virginia. Infants from 2 months through preschool, plus before- and after-school care. Serving families since 2000.",
  address: {
    street: "18945 Longhouse Place",
    city: "Leesburg",
    state: "VA",
    zip: "20176",
    neighborhood: "Potomac Station",
  },
  hours: {
    days: "Monday–Friday",
    time: "7:30 AM – 5:30 PM",
    note: "Full-day and before- & after-school care.",
    schemaDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"] as const,
    opens: "07:30",
    closes: "17:30",
  },
  phone: "703-728-1326",
  phoneHref: "tel:+17037281326",
  email: "farhana.abid@gmail.com",
  emailHref: "mailto:farhana.abid@gmail.com",
  ages: "Infants from 2 months through age 5, plus before- and after-school care",
  license: {
    number: "1106308",
    type: "Virginia licensed family day home",
    capacity: 12,
    ratio: "1:5",
  },
  mapsQuery: "18945 Longhouse Place, Leesburg, VA 20176",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=18945+Longhouse+Place,+Leesburg,+VA+20176",
  mapsEmbedUrl:
    "https://maps.google.com/maps?q=18945+Longhouse+Place,+Leesburg,+VA+20176&z=16&output=embed",
  publicUrl: "https://www.jollyhomedaycare.com",
  careUrl: "https://www.care.com/b/l/jolly-home-daycare/leesburg-va",
} as const;

export const addressLine = `${site.address.street}, ${site.address.city}, ${site.address.state} ${site.address.zip}`;

export const nav = [
  { to: "/", label: "Enrollment" },
  { to: "/about", label: "About" },
  { to: "/programs", label: "Programs" },
] as const;
