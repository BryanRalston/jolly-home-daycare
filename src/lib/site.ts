export const site = {
  name: "Jolly Home Daycare",
  shortName: "Jolly Home",
  tagline: "A smaller, warmer start — right here in Leesburg.",
  description:
    "Licensed family day home in Potomac Station, Leesburg, Virginia. Infants from 2 months through age 5, plus before- and after-school care. Meals included.",
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
  },
  phone: "703-728-1326",
  phoneHref: "tel:+17037281326",
  email: "farhana.abid@gmail.com",
  emailHref: "mailto:farhana.abid@gmail.com",
  facebook: "https://www.facebook.com/p/Jolly-Home-Daycare-100040377866729/",
  ages: "Infants (2 months) through age 5, plus school-age before & after care",
  mapsQuery: "18945 Longhouse Place, Leesburg, VA 20176",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=18945+Longhouse+Place,+Leesburg,+VA+20176",
  mapsEmbedUrl:
    "https://maps.google.com/maps?q=18945+Longhouse+Place,+Leesburg,+VA+20176&z=16&output=embed",
  publicUrl: "https://www.jollyhomedaycare.com",
} as const;

export const addressLine = `${site.address.street}, ${site.address.city}, ${site.address.state} ${site.address.zip}`;

export const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/programs", label: "Programs" },
  { to: "/enrollment", label: "Enrollment" },
] as const;
