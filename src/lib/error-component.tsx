import type { ErrorComponentProps } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { TriangleAlert } from "lucide-react";
import { site } from "@/lib/site";

export function AppErrorComponent({ error }: ErrorComponentProps) {
  return (
    <main
      className={
        "flex min-h-screen flex-col items-center justify-center gap-3 px-6 text-center " +
        "bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50"
      }
    >
      <span className="text-red-500" aria-hidden="true">
        <TriangleAlert className="size-10" strokeWidth={2} />
      </span>
      <h1 className="text-lg font-semibold">Something went wrong</h1>
      <p className="max-w-md text-sm break-words text-zinc-500 dark:text-zinc-400">
        {error.message || "An unexpected error occurred. Try reloading the page."}
      </p>
    </main>
  );
}

export function NotFoundComponent() {
  return (
    <main className="mx-auto max-w-xl px-4 py-20 text-center sm:px-6">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-terracotta">404</p>
      <h1 className="mt-3 font-display text-3xl font-semibold text-ink">That page isn’t here.</h1>
      <p className="mt-3 text-sm text-muted">
        Try the{" "}
        <Link to="/" className="text-terracotta hover:underline">
          home page
        </Link>
        , or call{" "}
        <a href={site.phoneHref} className="text-terracotta hover:underline">
          {site.phone}
        </a>
        .
      </p>
    </main>
  );
}
