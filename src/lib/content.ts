/**
 * Facts and excerpts copied from public sources. Do not invent hours, rates,
 * quotes, credentials, or photos.
 *
 * Sources:
 * - Care.com listing: https://www.care.com/b/l/jolly-home-daycare/leesburg-va
 * - VA licensing directories (e.g. childcarecenter.us listing for Farhana Abid,
 *   license 1106308, Longhouse Place, Leesburg)
 *
 * Care.com Costimate ($264/week) is an area estimate, not this home's tuition.
 * Tuition is shared in person. No public Facebook URL is published here.
 *
 * Serving / in business since 2000 — do not say “more than 10 years.”
 */

export const trustBar = [
  "Serving families since 2000",
  "VA licensed (#1106308)",
  "Capacity 12",
  "Ratio 1:5",
  "CPR / First Aid / MAT",
  "Background checked",
] as const;

export const whyJolly = [
  {
    title: "Safe & licensed home",
    body: "A Virginia-licensed family day home (license 1106308) in Potomac Station, Leesburg.",
  },
  {
    title: "Small group, individual attention",
    body: "Capacity is 12 children with a 1:5 teacher-to-student ratio, so each child can be known.",
  },
  {
    title: "Learning through play",
    body: "Poems, rhymes, alphabet, phonics, numbers, shapes, colors, and puzzles — plus preschool curriculum for ages 2 and up.",
  },
  {
    title: "Nutritious meals included",
    body: "Breakfast, lunch, snacks, and dinner are part of the day, with protein, carbs, vegetables, and fruit.",
  },
  {
    title: "A warm home setting",
    body: "Care happens in Ms. Jolly’s house — a smaller, familiar place rather than a large center.",
  },
] as const;

export const programs = [
  {
    title: "Infant care",
    ages: "From 2 months",
    body: "Infants are welcome from 2 months. Meals are included, and the group stays small.",
  },
  {
    title: "Toddlers & preschool",
    ages: "Through age 5 · preschool curriculum ages 2+",
    body: "Everyday early learning and a preschool curriculum for ages 2 and up, in a home setting.",
  },
  {
    title: "Before & after school",
    ages: "School-age",
    body: "Before- and after-school care during weekday hours, Monday–Friday, 7:30 AM–5:30 PM.",
  },
] as const;

export const earlyLearning = [
  "Poems and rhymes",
  "Alphabet and phonics",
  "Numbers, shapes, and colors",
  "Puzzles",
  "Colors and numbers in English and Spanish",
] as const;

/** Compact chips for Meet Ms. Jolly — spell out MAT once in nearby prose. */
export const credentialChips = [
  "Adult & Child CPR",
  "First-Aid",
  "MAT",
  "Background checked",
] as const;

/** Licensing / program facts — keep separate from credentials; do not title “the day.” */
export const licensingFacts = [
  "VA licensed #1106308",
  "Capacity 12",
  "Ratio 1:5",
  "Serving families since 2000",
] as const;

export const safetyItems = [
  {
    title: "Virginia licensed",
    body: "Licensed family day home, license 1106308.",
  },
  {
    title: "CPR, First-Aid, and MAT",
    body: "Certified in Adult and Child CPR, First-Aid, and Medication Administration Training (MAT).",
  },
  {
    title: "Background checked",
    body: "Criminal and Child Protective Agency background checked.",
  },
  {
    title: "Small group in a home",
    body: "Capacity 12 and a 1:5 ratio, in a family home rather than a large facility.",
  },
] as const;

export const faqs = [
  {
    q: "What ages do you care for?",
    a: "Infants from 2 months through age 5, plus before- and after-school care.",
  },
  {
    q: "What are your hours?",
    a: "Monday–Friday, 7:30 AM–5:30 PM.",
  },
  {
    q: "Are meals included?",
    a: "Yes. Breakfast, lunch, snacks, and dinner are included. Meals follow CNI (Child Nutrition Inc) components: protein, carbs, vegetables, and fruit. We can talk through allergies and dietary needs on a visit.",
  },
  {
    q: "What do children learn?",
    a: "Poems, rhymes, alphabet, phonics, numbers, shapes, colors, and puzzles, including colors and numbers in English and Spanish. There is a preschool curriculum for ages 2 and up.",
  },
  {
    q: "Are you licensed?",
    a: "Yes. Jolly Home Daycare is a Virginia-licensed family day home, license 1106308. Capacity is 12, with a 1:5 teacher-to-student ratio.",
  },
  {
    q: "Do you take infants?",
    a: "Yes. Infant care starts at 2 months.",
  },
  {
    q: "How do I schedule a visit?",
    a: "Use the form on this page, call 703-728-1326, or email farhana.abid@gmail.com. We’ll follow up to set a time.",
  },
  {
    q: "How much is tuition?",
    a: "Tuition is shared in person. It varies by age and schedule — contact us for current rates and to ask about openings.",
  },
  {
    q: "Do you have openings?",
    a: "Contact us to ask about current openings. Availability changes, and we’ll talk through it when you get in touch.",
  },
] as const;

export const houseFacade = {
  src: "images/house-facade.jpg",
  alt: "A two-story brick family home at sunset.",
} as const;

/**
 * Generated mood stills — not photographs of the Leesburg house, playroom, or yard.
 * Never caption these as “our” rooms or grounds.
 */
export const moodStills = [
  {
    id: "learning",
    src: "images/still-books-blocks.png",
    alt: "Still life of picture books, wooden alphabet blocks, and crayons.",
  },
  {
    id: "meals",
    src: "images/still-snack.png",
    alt: "Still life of apple slices and carrot sticks on a plate.",
  },
  {
    id: "warmth",
    src: "images/still-abstract.png",
    alt: "Still life of cream linen, an olive branch, and a terracotta vase.",
  },
] as const;

/**
 * Short excerpts from public Care.com reviews (all shown as 5-star on that listing).
 * Attributed as first name + last initial. Wording is the reviewer’s — do not “fix” grammar.
 */
export const parentVoices = [
  {
    name: "Steph H.",
    quote:
      "Miss Jolly has been watching our son since he was 6 weeks old and we feel blessed to have found her. She is like a second parent to him and provides him with the love and attention he needs.",
  },
  {
    name: "Nesha M.",
    quote:
      "It has been my pleasure to have Mrs. Jolly take care of my 1.5 year old twins. When they started, they had never been to a daycare and I was very apprehensive about the transition, but she made the adjustment easy for all of us. She is extremely organized and I am enjoy the fact that that my twins always are clean, fed, and happy when I pick up at the end of the day.",
  },
  {
    name: "Lesley L.",
    quote:
      "Our daughter has learned so much since she’s been with Ms. Jolly, we are constantly amazed. They are always singing songs, doing art projects, learning colors, letters, & numbers. It’s very much a full preschool experience just in the comfort of Ms. Jolly’s home.",
  },
  {
    name: "Jen L.",
    quote:
      "Jolly takes the emotional, developmental and academic growth of the children under her care very seriously. The environment is very positive and I am most often greeted by the sound of children laughing and playing…the only fussing is when we have to leave!",
  },
  {
    name: "Jessica M.",
    quote:
      "Our son was previously at a large chain daycare for almost eight months and never fully adjusted. It took about a week and a half with Ms. Jolly for his behavior to turn around. She is so loving with him, and he actually enjoys going there!",
  },
] as const;

/** Exact substrings of the Care.com quotes above — for pull-quotes only. */
export const pullQuotes = [
  {
    name: "Steph H.",
    quote: "She is like a second parent to him and provides him with the love and attention he needs.",
  },
  {
    name: "Lesley L.",
    quote: "It’s very much a full preschool experience just in the comfort of Ms. Jolly’s home.",
  },
] as const;
