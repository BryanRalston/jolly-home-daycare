import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

type Tone = "onLight" | "onDark";

export function VisitCtas({
  tone = "onLight",
  className,
}: {
  tone?: Tone;
  className?: string;
}) {
  const secondary = tone === "onDark" ? "cream" : "outline";

  return (
    <div className={cn("flex flex-col gap-3 sm:flex-row", className)}>
      <Button asChild size="lg">
        <a href="#visit">Schedule a Visit</a>
      </Button>
      <Button asChild size="lg" variant={secondary}>
        <a href={site.phoneHref}>Call {site.phone}</a>
      </Button>
    </div>
  );
}
