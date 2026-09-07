import { Link } from "@tanstack/react-router";
import { asset } from "@/lib/assets";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Logo({
  className,
  onNavigate,
  onDark = false,
}: {
  className?: string;
  onNavigate?: () => void;
  onDark?: boolean;
}) {
  return (
    <Link
      to="/"
      onClick={onNavigate}
      className={cn("flex items-center gap-3 no-underline", className)}
      aria-label={`${site.name}, home`}
    >
      <img
        src={asset("images/logo.png")}
        alt=""
        width={56}
        height={56}
        className="size-12 rounded-md object-cover shadow-soft ring-1 ring-forest/15 sm:size-14"
      />
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display text-[1.15rem] tracking-tight",
            onDark ? "text-cream" : "text-ink",
          )}
        >
          {site.shortName}
        </span>
        <span
          className={cn(
            "mt-1 text-[0.7rem] font-medium tracking-[0.16em] uppercase",
            onDark ? "text-cream/70" : "text-muted",
          )}
        >
          Daycare
        </span>
      </span>
    </Link>
  );
}
