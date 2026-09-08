import { createFileRoute } from "@tanstack/react-router";
import { EnrollmentPage } from "@/components/enrollment-page";
import { site } from "@/lib/site";

export const Route = createFileRoute("/enrollment")({
  component: EnrollmentPage,
  head: () => ({
    meta: [
      { title: `Schedule a Visit · ${site.name} · Leesburg Family Day Home` },
      {
        name: "description",
        content:
          "Schedule a visit at Jolly Home Daycare, a licensed family day home in Potomac Station, Leesburg, VA. Ask about current openings, ages, meals, and tuition in person.",
      },
    ],
    links: [{ rel: "canonical", href: `${site.publicUrl}/enrollment` }],
  }),
});
