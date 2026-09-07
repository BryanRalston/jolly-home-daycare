import { createFileRoute } from "@tanstack/react-router";
import { EnrollmentPage } from "@/components/enrollment-page";
import { site } from "@/lib/site";

export const Route = createFileRoute("/")({
  component: EnrollmentPage,
  head: () => ({
    meta: [
      { title: "Jolly Home Daycare · Family Daycare in Leesburg, VA" },
      {
        name: "description",
        content:
          "Request a visit at Jolly Home Daycare, a licensed family day home in Potomac Station, Leesburg, VA. Infants from 2 months through age 5, plus before- and after-school care.",
      },
    ],
    links: [{ rel: "canonical", href: site.publicUrl }],
  }),
});
