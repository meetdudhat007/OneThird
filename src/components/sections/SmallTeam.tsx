import Reveal from "@/components/motion/Reveal";

// CONFIRM BEFORE LAUNCH: these describe how the team works, so the team must
// agree they're accurate.
const points = [
  {
    title: "Nothing gets lost in handover",
    body: "There are no layers between you and the code. What you tell us reaches the person building it, because that’s who you’re talking to.",
  },
  {
    title: "Decisions don’t wait in a queue",
    body: "When something needs answering, the people who can answer it are already on the call, so the work keeps moving.",
  },
  {
    title: "Your project isn’t a line on a list",
    body: "A small team only stays small by choosing its work carefully. The project we take on gets our full attention.",
  },
];

export default function SmallTeam() {
  return (
    <section className="px-2 sm:px-4">
      <div className="rounded-[2rem] bg-inverse px-4 py-20 text-on-inverse sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <h2 className="max-w-3xl text-balance text-4xl leading-[1.05] tracking-tight sm:text-5xl">
              Why a small team works <em>in your favour</em>
            </h2>
          </Reveal>

          <ul className="mt-14 grid gap-10 lg:mt-16 lg:grid-cols-3 lg:gap-8">
            {points.map(({ title, body }, i) => (
              <li key={title}>
                <Reveal delay={i * 0.1} className="h-full border-t border-on-inverse/30 pt-6">
                  <h3 className="text-xl tracking-tight">{title}</h3>
                  <p className="mt-4 text-pretty leading-relaxed text-on-inverse-soft">{body}</p>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
