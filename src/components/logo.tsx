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
      className={cn("flex items-center no-underline", className)}
      aria-label={`${site.name}, home`}
    >
      <img
        src={asset("images/logo.png")}
        alt=""
        width={228}
        height={80}
        className={cn(
          "h-10 w-[7.1rem] object-cover object-center sm:h-12 sm:w-[8.5rem]",
          onDark && "rounded-md ring-1 ring-cream/20",
        )}
      />
    </Link>
  );
}
