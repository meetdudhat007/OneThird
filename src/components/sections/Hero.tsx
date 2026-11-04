import type { ReactNode } from "react";
import Button from "@/components/ui/Button";

function ArrowUpRight() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" className="size-4">
      <path d="M4.5 11.5 11.5 4.5M5.5 4.5h6v6" fill="none" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

// Each headline line sits in a clipping mask and slides up into view.
// overflow-y-clip (not overflow-hidden) keeps italic overhang visible sideways;
// the bottom padding stops descenders from being clipped.
function MaskedLine({ children, delay }: { children: ReactNode; delay: string }) {
  return (
    <span className="block overflow-x-visible overflow-y-clip pb-[0.08em]">
      <span
        className="block animate-line-up motion-reduce:animate-none"
        style={{ animationDelay: delay }}
      >
        {children}
      </span>
    </span>
  );
}

export default function Hero() {
  return (
    <section className="px-4 pb-16 pt-20 sm:px-6 lg:px-8 lg:pb-24 lg:pt-32">
      <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
        <h1 className="text-balance text-5xl leading-[1.02] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
          <MaskedLine delay="0ms">Software built around</MaskedLine>
          <MaskedLine delay="110ms">
            <em className="text-accent">how your business works.</em>
          </MaskedLine>
        </h1>

        <p
          className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-ink-soft animate-fade-up motion-reduce:animate-none"
          style={{ animationDelay: "280ms" }}
        >
          OneThird is a custom software and digital solutions partner. We design and build
          business software, web and SaaS products, AI/ML solutions, and automation, made
          for the way your team actually operates.
        </p>

        <div
          className="mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4 animate-fade-up motion-reduce:animate-none"
          style={{ animationDelay: "400ms" }}
        >
          <Button href="/work" size="lg">
            See our work <ArrowUpRight />
          </Button>
          <Button href="/contact" size="lg" variant="outline">
            Start a project
          </Button>
        </div>
      </div>
    </section>
  );
}
