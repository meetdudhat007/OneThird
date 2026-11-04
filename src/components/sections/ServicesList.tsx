import Link from "next/link";
import Reveal from "@/components/motion/Reveal";

// The four service areas defined in CLAUDE.md. Descriptions state what each
// area covers, not claims about past results.
const services = [
  {
    id: "business-software",
    title: "Business Software",
    body: "ERP, CRM, workflow, operations, and procurement systems shaped around how your team already works, replacing the spreadsheets and workarounds holding things together.",
  },
  {
    id: "web-saas",
    title: "Web & SaaS",
    body: "Web applications and SaaS products, from a focused first version to a platform your customers rely on every day.",
  },
  {
    id: "ai-ml",
    title: "AI/ML",
    body: "Machine learning and AI features aimed at one specific problem in your product or operations, such as detecting, predicting, or classifying.",
  },
  {
    id: "automation",
    title: "Automation",
    body: "Automations that take repetitive, manual work off your team’s plate and connect the tools you already use, so data moves without copy-paste.",
  },
];

function Arrow() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" className="size-5">
      <path d="M4.5 11.5 11.5 4.5M5.5 4.5h6v6" fill="none" stroke="currentColor" strokeWidth="1.25" />
    </svg>
  );
}

export default function ServicesList() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <Reveal className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="text-4xl leading-[1.05] tracking-tight sm:text-5xl">
            What we <em>build</em>
          </h2>
          <p className="max-w-md text-pretty leading-relaxed text-ink-soft">
            Four areas, one approach: understand the work first, then write the software
            that fits it.
          </p>
        </Reveal>

        <ul className="mt-14 border-b border-line lg:mt-16">
          {services.map(({ id, title, body }, i) => (
            <li key={id} className="border-t border-line">
              <Reveal delay={i * 0.08} y={30}>
                <Link
                  href={`/services#${id}`}
                  className="group relative block overflow-hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
                >
                  {/* Hover fill: rises from the bottom edge. */}
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 origin-bottom scale-y-0 bg-brand transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-y-100 motion-reduce:transition-none"
                  />
                  <span className="relative grid gap-3 px-2 py-8 transition-[color,padding] duration-500 group-hover:text-on-inverse sm:px-4 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)_auto] lg:items-center lg:gap-10 lg:py-10 lg:group-hover:px-8 motion-reduce:transition-none">
                    <span className="text-2xl tracking-tight sm:text-3xl">{title}</span>
                    <span className="max-w-xl text-pretty leading-relaxed text-ink-soft transition-colors duration-500 group-hover:text-on-inverse-soft">
                      {body}
                    </span>
                    <span className="hidden transition-transform duration-500 group-hover:rotate-45 lg:block">
                      <Arrow />
                    </span>
                  </span>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
