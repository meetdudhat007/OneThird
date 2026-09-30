import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "solid" | "outline" | "inverse";
type Size = "md" | "lg";

const variants: Record<Variant, string> = {
  solid: "bg-ink text-canvas hover:bg-ink-soft",
  outline: "border border-ink text-ink hover:bg-ink hover:text-canvas",
  inverse: "bg-canvas text-ink hover:bg-surface",
};

const sizes: Record<Size, string> = {
  md: "h-12 px-7",
  lg: "h-14 px-8",
};

/**
 * Pill link-button. On hover the label rolls up and an identical copy rolls in
 * from below (the copy is aria-hidden so screen readers hear the label once).
 */
export default function Button({
  href,
  children,
  variant = "solid",
  size = "md",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center justify-center rounded-full text-sm font-medium transition-colors duration-300 ${sizes[size]} ${variants[variant]} ${className}`}
    >
      <span className="relative block overflow-hidden">
        <span className="flex items-center gap-2 transition-transform duration-300 ease-out group-hover:-translate-y-full motion-reduce:transition-none">
          {children}
        </span>
        <span
          aria-hidden="true"
          className="absolute inset-0 flex items-center gap-2 translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0 motion-reduce:transition-none"
        >
          {children}
        </span>
      </span>
    </Link>
  );
}
