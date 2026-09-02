import { createFileRoute } from "@tanstack/react-router";
import { EnrollmentPage } from "@/components/enrollment-page";
import { site } from "@/lib/site";

export const Route = createFileRoute("/")({
  component: EnrollmentPage,
  head: () => ({
    meta: [
      { title: `${site.name} · Leesburg, VA` },
      {
        name: "description",
        content:
          "Request a visit or ask about openings at Jolly Home Daycare, a licensed family day home in Leesburg, VA.",
      },
    ],
  }),
});
