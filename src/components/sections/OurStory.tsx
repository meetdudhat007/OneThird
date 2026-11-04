import Reveal from "@/components/motion/Reveal";

// PLACEHOLDER: a stand-in written at the team's request, to be replaced with
// the real story before launch. It deliberately states beliefs only, with no
// invented dates, clients, or numbers. Keep it that way if it's edited.
const story = [
  "Every business runs on work nobody outside it ever sees: the approval waiting in someone’s inbox, the spreadsheet only one person fully understands, the copy-paste that quietly fills an afternoon.",
  "We started OneThird because we believe that work deserves better software. Not bigger software, and not another tool that asks a team to change how it operates, but software that begins with how people really work and makes their day a little lighter.",
  "So that’s how we build. We listen first, we stay close to the people who will use what we make, and we only call something finished when it makes their work easier. Every project is a chance to prove that a small team paying close attention can build things that last.",
];

export default function OurStory() {
  return (
    <section className="px-4 pb-20 sm:px-6 lg:px-8 lg:pb-28">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
        <Reveal>
          <h2 className="text-4xl leading-[1.05] tracking-tight sm:text-5xl">
            Why we <em>build</em>
          </h2>
        </Reveal>

        <Reveal y={30}>
          {story.map((paragraph, i) => (
            <p
              key={paragraph}
              className={
                i === 0
                  ? "text-pretty text-xl leading-snug sm:text-2xl"
                  : "mt-6 text-pretty text-lg leading-relaxed text-ink-soft"
              }
            >
              {paragraph}
            </p>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
