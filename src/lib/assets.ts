/** Prefix a public-file path with Vite's base (needed on GitHub Pages). */
export function asset(path: string): string {
  const base = import.meta.env.BASE_URL || "/";
  const clean = path.replace(/^\//, "");
  return `${base}${clean}`;
}

export function routerBasepath(): string | undefined {
  const base = (import.meta.env.BASE_URL || "/").replace(/\/$/, "");
  return base || undefined;
}
