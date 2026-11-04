import Reveal from "@/components/motion/Reveal";

// CONFIRM BEFORE LAUNCH: these steps restate the drafted FAQ answers, so the
// team must agree they're accurate. Source code ownership is a contractual
// commitment.
const steps = [
  {
    when: "First",
    title: "We learn how you work",
    body: "You tell us what you want to change. We ask how the business runs today, then come back with a proposed approach.",
  },
  {
    when: "Then",
    title: "You get a written estimate",
    body: "It’s broken down by what’s being built, so you can see where the cost goes and adjust the scope. We agree milestones and dates up front.",
  },
  {
    when: "Next",
    title: "We build in milestones",
    body: "You see working software along the way, with regular updates and calls at times that suit your time zone.",
  },
  {
    when: "Finally",
    title: "We launch and hand over",
    body: "Once the project is paid for, the source code is yours. If you want us to stay on, we agree how that works before handover.",
  },
];

export default function ProcessSteps() {
  return (
    <section className="px-2 sm:px-4">
      <div className="rounded-[2rem] bg-inverse px-4 py-20 text-on-inverse sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <Reveal className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <h2 className="text-4xl leading-[1.05] tracking-tight sm:text-5xl">
              How a project <em>runs</em>
            </h2>
            <p className="max-w-md text-pretty leading-relaxed text-on-inverse-soft">
              The same steps for all four services, so you always know what’s happening and
              what comes next.
            </p>
          </Reveal>

          <ol className="mt-14 grid gap-10 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-8">
            {steps.map(({ when, title, body }, i) => (
              <li key={title}>
                <Reveal delay={i * 0.1} className="h-full border-t border-on-inverse/30 pt-5">
                  <p className="text-sm text-on-inverse-soft">{when}</p>
                  <h3 className="mt-8 text-xl tracking-tight lg:mt-12">{title}</h3>
                  <p className="mt-4 text-pretty leading-relaxed text-on-inverse-soft">{body}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
