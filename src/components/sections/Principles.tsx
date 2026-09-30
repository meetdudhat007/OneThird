import type { ReactNode } from "react";
import Reveal from "@/components/motion/Reveal";

// Simple original marks. Primary shape uses the ink colour, the secondary
// shape a lighter tone, so each reads as a two-part idea.
const icons = {
  fit: (
    <svg viewBox="0 0 48 48" aria-hidden="true" className="size-12">
      <path d="M4 4h40v18H22v22H4z" className="fill-ink" />
      <rect x="26" y="26" width="18" height="18" rx="2" className="fill-muted/40" />
    </svg>
  ),
  progress: (
    <svg viewBox="0 0 48 48" aria-hidden="true" className="size-12">
      <rect x="4" y="30" width="11" height="14" rx="2" className="fill-muted/40" />
      <rect x="18.5" y="18" width="11" height="26" rx="2" className="fill-muted/70" />
      <rect x="33" y="4" width="11" height="40" rx="2" className="fill-ink" />
    </svg>
  ),
  judgement: (
    <svg viewBox="0 0 48 48" aria-hidden="true" className="size-12">
      {[8, 24, 40].flatMap((cy) =>
        [8, 24, 40].map((cx) =>
          cx === 24 && cy === 24 ? null : (
            <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="4" className="fill-muted/40" />
          ),
        ),
      )}
      <circle cx="24" cy="24" r="8" className="fill-ink" />
    </svg>
  ),
  candour: (
    <svg viewBox="0 0 48 48" aria-hidden="true" className="size-12">
      <rect x="4" y="10" width="40" height="9" rx="2" className="fill-ink" />
      <rect x="4" y="29" width="24" height="9" rx="2" className="fill-muted/40" />
    </svg>
  ),
} satisfies Record<string, ReactNode>;

// These are commitments the team must be willing to keep; confirm before launch.
const principles = [
  {
    icon: icons.fit,
    title: "Your process, not a template’s",
    body: "Off-the-shelf tools make your team work their way. We study how you actually operate and build around it, down to the approval step nobody else thought to ask about.",
  },
  {
    icon: icons.progress,
    title: "Working software, early and often",
    body: "No months-long wait for a big reveal. You see real, clickable progress as we build, so your feedback lands while it’s still cheap to act on.",
  },
  {
    icon: icons.judgement,
    title: "AI where it earns its place",
    body: "We’ll tell you when a simple rule beats a model. When AI is the right tool, we build it into your workflow, not onto a slide.",
  },
  {
    icon: icons.candour,
    title: "Straight answers, no fog",
    body: "No jargon, and no guesses dressed up as certainty. If something is risky, costly, or unnecessary, you’ll hear it from us before it becomes your problem.",
  },
];

export default function Principles() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <h2 className="text-balance text-4xl leading-[1.05] tracking-tight sm:text-5xl">
            Four things we <em>won’t compromise on.</em>
          </h2>
        </Reveal>

        <ul className="mt-14 grid gap-12 sm:grid-cols-2 sm:gap-x-10 lg:mt-16 lg:grid-cols-4">
          {principles.map(({ icon, title, body }, i) => (
            <li key={title}>
              <Reveal delay={i * 0.1}>
                {icon}
                <h3 className="mt-8 text-xl tracking-tight">{title}</h3>
                <p className="mt-4 text-pretty leading-relaxed text-ink-soft">{body}</p>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
