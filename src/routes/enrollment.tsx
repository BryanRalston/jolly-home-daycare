import { createFileRoute } from "@tanstack/react-router";
import { EnrollmentPage } from "@/components/enrollment-page";
import { site } from "@/lib/site";

export const Route = createFileRoute("/enrollment")({
  component: EnrollmentPage,
  head: () => ({
    meta: [
      { title: `Enrollment · ${site.name}` },
      {
        name: "description",
        content:
          "Request a visit or ask about openings at Jolly Home Daycare, a licensed family day home in Leesburg, VA.",
      },
    ],
  }),
});
