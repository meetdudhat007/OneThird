import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "solid" | "outline" | "inverse";

const variants: Record<Variant, string> = {
  solid: "bg-ink text-canvas hover:bg-ink-soft",
  outline: "border border-ink text-ink hover:bg-ink hover:text-canvas",
  inverse: "bg-canvas text-ink hover:bg-surface",
};

/**
 * Pill link-button. On hover the label rolls up and an identical copy rolls in
 * from below (the copy is aria-hidden so screen readers hear the label once).
 */
export default function Button({
  href,
  children,
  variant = "solid",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`group inline-flex h-12 items-center justify-center rounded-full px-7 text-sm font-medium transition-colors duration-300 ${variants[variant]} ${className}`}
    >
      <span className="relative block overflow-hidden">
        <span className="block transition-transform duration-300 ease-out group-hover:-translate-y-full motion-reduce:transition-none">
          {children}
        </span>
        <span
          aria-hidden="true"
          className="absolute inset-0 block translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0 motion-reduce:transition-none"
        >
          {children}
        </span>
      </span>
    </Link>
  );
}
