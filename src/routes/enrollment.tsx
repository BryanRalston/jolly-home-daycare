import { createFileRoute } from "@tanstack/react-router";
import { EnrollmentPage } from "@/components/enrollment-page";
import { site } from "@/lib/site";

export const Route = createFileRoute("/enrollment")({
  component: EnrollmentPage,
  head: () => ({
    meta: [
      { title: `Enrollment · ${site.name} · Leesburg, VA` },
      {
        name: "description",
        content:
          "Request a visit or ask about openings at Jolly Home Daycare, a licensed family day home in Potomac Station, Leesburg, VA.",
      },
    ],
    links: [{ rel: "canonical", href: `${site.publicUrl}/enrollment` }],
  }),
});
