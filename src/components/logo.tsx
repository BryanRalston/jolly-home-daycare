import { Link } from "@tanstack/react-router";
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
      className={cn("flex items-center gap-2.5 no-underline", onDark ? "text-cream" : "text-ink", className)}
      aria-label="Jolly Home Daycare, home"
    >
      <svg
        viewBox="0 0 40 40"
        className="size-10 shrink-0"
        aria-hidden="true"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="20" cy="20" r="20" className="fill-sunflower" />
        <circle cx="20" cy="20" r="13.5" className="fill-cream" />
        <path d="M12.5 21.2 20 14.4l7.5 6.8v6.4H12.5z" className="fill-leaf" />
        <rect x="18" y="22.6" width="4" height="5" className="fill-terracotta" />
        <circle cx="31.5" cy="8.5" r="3.2" className="fill-aqua" />
      </svg>
      <span className="flex flex-col leading-none">
        <span className="font-display text-[1.05rem] font-semibold tracking-tight">Jolly Home</span>
        <span
          className={cn(
            "mt-1 text-[0.68rem] font-medium uppercase tracking-[0.18em]",
            onDark ? "text-cream/70" : "text-muted",
          )}
        >
          Daycare
        </span>
      </span>
    </Link>
  );
}

export function PlayDots({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-1.5", className)} aria-hidden="true">
      <span className="size-2 rounded-full bg-terracotta" />
      <span className="size-2 rounded-full bg-sunflower" />
      <span className="size-2 rounded-full bg-aqua" />
      <span className="size-2 rounded-full bg-leaf" />
    </span>
  );
}
