import { cn } from "@/lib/utils";

export function FactChips({
  items,
  className,
}: {
  items: readonly string[];
  className?: string;
}) {
  return (
    <ul className={cn("flex flex-wrap gap-2", className)}>
      {items.map((item) => (
        <li
          key={item}
          className="rounded-md border border-line bg-surface px-3.5 py-2 text-sm text-ink shadow-soft"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
