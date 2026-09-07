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
 */

export const trustItems = [
  { label: "VA licensed family day home", detail: "License 1106308" },
  { label: "Capacity 12", detail: "Teacher/student ratio 1:5" },
  {
    label: "Ages",
    detail: "Infants from 2 months through age 5, plus before- and after-school",
  },
  { label: "Monday–Friday", detail: "7:30 AM–5:30 PM" },
  { label: "Potomac Station", detail: "Leesburg, VA" },
] as const;

/** Clearly stated on the Care.com about-text / listing fields. */
export const providerFacts = [
  "Adult and Child CPR, First-Aid, and MAT certified",
  "Breakfast, lunch, snacks, and dinner included",
  "Meals follow CNI (Child Nutrition Inc) components: protein, carbs, vegetables, and fruit",
  "More than 10 years of home daycare experience",
  "Teaching experience — poems, rhymes, alphabet, phonics, numbers, shapes, colors, and puzzles",
  "Colors and numbers in English and Spanish",
  "Preschool curriculum for ages 2 and up",
  "Criminal and Child Protective Agency background checked",
  "In business since 2000",
  "Program capacity 12 · teacher/student ratio 1:5",
] as const;

/** Decorative panels only — no photographs of children. */

/**
 * Short excerpts from public Care.com reviews (all shown as 5-star on that listing).
 * Attributed as first name + last initial. Wording is the reviewer’s.
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
