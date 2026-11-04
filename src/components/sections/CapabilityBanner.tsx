import Reveal from "@/components/motion/Reveal";

// Service areas exactly as defined in CLAUDE.md. Swap for client logos only
// once publication permission is confirmed for each one.
const capabilities = [
  "Business Software",
  "ERP",
  "CRM",
  "Workflow",
  "Operations",
  "Procurement",
  "Web & SaaS",
  "AI/ML",
  "Automation",
];

function CapabilityList({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul aria-hidden={hidden || undefined} className="flex shrink-0 items-center">
      {capabilities.map((item) => (
        <li
          key={item}
          className="flex items-center whitespace-nowrap text-2xl tracking-tight text-muted sm:text-3xl"
        >
          <span className="px-6 sm:px-8">{item}</span>
          {/* The slash from the logo. */}
          <svg viewBox="0 0 24 24" aria-hidden="true" className="size-5 text-accent">
            <line x1="16" y1="3" x2="8" y2="21" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
          </svg>
        </li>
      ))}
    </ul>
  );
}

export default function CapabilityBanner() {
  return (
    <section aria-label="What we build">
      <div className="overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_8rem,black_calc(100%-8rem),transparent)]">
        <div className="flex w-max animate-marquee motion-reduce:animate-none">
          <CapabilityList />
          <CapabilityList hidden />
        </div>
      </div>

      <Reveal className="mx-auto mt-14 w-full max-w-screen-2xl px-4 sm:px-6 lg:mt-18">
        <div
          className="relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-3xl bg-inverse sm:aspect-[16/9] lg:aspect-[27/10]"
          style={{
            backgroundImage:
              "radial-gradient(60% 80% at 20% 30%, color-mix(in oklab, var(--color-on-inverse) 14%, transparent), transparent), radial-gradient(50% 70% at 85% 80%, color-mix(in oklab, var(--color-on-inverse) 8%, transparent), transparent)",
          }}
        >
          <p className="px-6 text-center text-sm text-on-inverse-soft">
            [NEEDS INPUT] Banner image: e.g. a team photo or product screenshots
          </p>
        </div>
      </Reveal>
    </section>
  );
}
