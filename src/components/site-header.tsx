"use client";

import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { forwardRef, useEffect, useState, type MouseEventHandler } from "react";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { nav } from "@/lib/site";
import { cn } from "@/lib/utils";

const VisitLink = forwardRef<
  HTMLAnchorElement,
  { className?: string; onClick?: MouseEventHandler<HTMLAnchorElement> }
>(function VisitLink({ className, onClick }, ref) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const onEnrollment = pathname === "/" || pathname === "/enrollment";

  if (onEnrollment) {
    return (
      <a href="#visit" ref={ref} className={className} onClick={onClick}>
        Schedule a Visit
      </a>
    );
  }

  return (
    <Link to="/enrollment" hash="visit" ref={ref} className={className} onClick={onClick}>
      Schedule a Visit
    </Link>
  );
});

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-line/80 bg-paper/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:h-[4.5rem] sm:px-6">
          <Logo />
          <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
            {nav.map((item) => {
              const active =
                pathname === item.to ||
                (item.to === "/" && (pathname === "/" || pathname === "/enrollment"));
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={cn(
                    "rounded-md px-3.5 py-2 text-sm font-medium text-muted transition-colors hover:text-ink",
                    active && "bg-forest/10 text-forest",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <div className="hidden md:block">
            <Button asChild>
              <VisitLink />
            </Button>
          </div>
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-md text-ink md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </header>

      {open ? (
        <div
          id="mobile-nav"
          className="fixed inset-x-0 top-16 bottom-0 z-40 overflow-y-auto bg-paper px-4 py-6 sm:top-[4.5rem] md:hidden"
        >
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            {nav.map((item) => {
              const active =
                pathname === item.to ||
                (item.to === "/" && (pathname === "/" || pathname === "/enrollment"));
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={cn(
                    "rounded-md px-3 py-3.5 text-lg font-medium text-ink",
                    active && "bg-cream",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
            <Button asChild className="mt-4 h-12 w-full" size="lg">
              <VisitLink onClick={() => setOpen(false)} />
            </Button>
          </nav>
        </div>
      ) : null}
    </>
  );
}
