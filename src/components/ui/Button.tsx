import Link from "next/link";
import type { ReactNode } from "react";
import RollingText from "@/components/ui/RollingText";

type Variant = "solid" | "outline" | "inverse";
type Size = "md" | "lg";

const variants: Record<Variant, string> = {
  solid: "bg-brand text-on-inverse hover:bg-ink",
  outline: "border border-brand text-brand hover:bg-brand hover:text-on-inverse",
  inverse: "bg-canvas text-brand hover:bg-surface",
};

const sizes: Record<Size, string> = {
  md: "h-12 px-7",
  lg: "h-14 px-8",
};

/**
 * Pill button with a rolling label on hover. Renders a link when given an
 * `href`, otherwise a form submit button.
 */
export default function Button({
  href,
  children,
  variant = "solid",
  size = "md",
  className = "",
}: {
  href?: string;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
}) {
  const classes = `group inline-flex items-center justify-center rounded-full text-sm font-medium transition-colors duration-300 ${sizes[size]} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        <RollingText>{children}</RollingText>
      </Link>
    );
  }

  return (
    <button type="submit" className={`cursor-pointer ${classes}`}>
      <RollingText>{children}</RollingText>
    </button>
  );
}
