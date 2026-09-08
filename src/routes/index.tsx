import { createFileRoute } from "@tanstack/react-router";
import { EnrollmentPage } from "@/components/enrollment-page";
import { site } from "@/lib/site";

export const Route = createFileRoute("/")({
  component: EnrollmentPage,
  head: () => ({
    meta: [
      { title: "Jolly Home Daycare · Licensed Family Day Home in Potomac Station, Leesburg, VA" },
      {
        name: "description",
        content:
          "Licensed family day home and home daycare in Potomac Station, Leesburg. Infants from 2 months through preschool, plus before- and after-school care. Schedule a visit with Ms. Jolly.",
      },
    ],
    links: [{ rel: "canonical", href: site.publicUrl }],
  }),
});
