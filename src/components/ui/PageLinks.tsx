import Link from "next/link";
import Reveal from "@/components/motion/Reveal";
import RollingText from "@/components/ui/RollingText";

function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" className={className}>
      <path d="M3 8h10M9 4l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.25" />
    </svg>
  );
}

/** Link from a detail page back to its list page. */
export function BackLink({ href, children }: { href: string; children: string }) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-2 text-sm text-ink-soft transition-colors hover:text-ink"
    >
      <Arrow className="size-4 rotate-180 transition-transform duration-300 group-hover:-translate-x-0.5" />
      {children}
    </Link>
  );
}

/** Large link to the next item, shown at the end of a detail page. */
export function NextLink({ href, label, title }: { href: string; label: string; title: string }) {
  return (
    <section className="px-4 pb-20 sm:px-6 lg:px-8 lg:pb-28">
      <Reveal className="mx-auto max-w-7xl">
        <Link
          href={href}
          className="group flex items-end justify-between gap-6 text-ink transition-colors hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
        >
          <span className="min-w-0">
            <span className="block text-sm text-muted">{label}</span>
            <span className="mt-3 block text-3xl leading-[1.1] tracking-tight sm:text-4xl lg:text-5xl">
              <RollingText>{title}</RollingText>
            </span>
          </span>
          <Arrow className="mb-2 size-7 shrink-0 transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none" />
        </Link>
      </Reveal>
    </section>
  );
}
