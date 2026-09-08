"use client";

import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export function StickyVisitCta() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const onEnrollment = pathname === "/" || pathname === "/enrollment";
  const [formVisible, setFormVisible] = useState(false);

  useEffect(() => {
    const form = document.getElementById("visit");
    if (!form) {
      setFormVisible(false);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => setFormVisible(Boolean(entry?.isIntersecting)),
      { threshold: 0.2 },
    );
    observer.observe(form);
    return () => observer.disconnect();
  }, [pathname]);

  if (formVisible) return null;

  const className =
    "fixed inset-x-0 bottom-0 z-40 border-t border-forest/10 bg-forest/95 px-4 py-3 backdrop-blur-md md:hidden";
  const inner =
    "flex h-12 w-full items-center justify-center rounded-md bg-terracotta text-base font-semibold text-cream active:scale-[0.98]";

  if (onEnrollment) {
    return (
      <div className={className}>
        <a href="#visit" className={inner}>
          Schedule a Visit
        </a>
      </div>
    );
  }

  return (
    <div className={className}>
      <Link to="/enrollment" hash="visit" className={inner}>
        Schedule a Visit
      </Link>
    </div>
  );
}
