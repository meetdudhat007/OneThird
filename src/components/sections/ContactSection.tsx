import ContactForm from "@/components/ContactForm";
import MaskedLine from "@/components/motion/MaskedLine";

// CONFIRM BEFORE LAUNCH: these steps restate the drafted "How do we get
// started?" FAQ answer, so the team must agree they're accurate.
const nextSteps = [
  "We read what you’ve sent and get back to you.",
  "We ask how your business works today and what you want to change.",
  "We come back with a proposed approach and an estimate.",
];

export default function ContactSection() {
  return (
    <section className="px-4 pb-20 pt-20 sm:px-6 lg:px-8 lg:pb-28 lg:pt-32">
      {/* Grid placement keeps the form ahead of the panel when stacked on phones. */}
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[minmax(0,6fr)_minmax(0,5fr)] lg:grid-rows-[auto_1fr] lg:gap-x-20 lg:gap-y-14">
        <div>
          <h1 className="text-5xl leading-[1.02] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
            <MaskedLine delay="0ms">Tell us what you</MaskedLine>
            <MaskedLine delay="110ms">
              <em className="text-accent">want to change.</em>
            </MaskedLine>
          </h1>
          <p
            className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-ink-soft animate-fade-up motion-reduce:animate-none"
            style={{ animationDelay: "280ms" }}
          >
            It doesn’t need to be a finished brief. A few lines about what’s slowing your team
            down, or what you’d like to build, is enough to start.
          </p>
        </div>

        <ContactForm className="lg:col-start-2 lg:row-span-2 lg:row-start-1" />

        <div
          className="self-start animate-fade-up motion-reduce:animate-none"
          style={{ animationDelay: "400ms" }}
        >
          <div className="rounded-3xl bg-inverse p-6 text-on-inverse sm:p-8">
            <h2 className="text-2xl tracking-tight">What happens next</h2>
            <ol className="mt-6">
              {nextSteps.map((step) => (
                <li
                  key={step}
                  className="border-t border-on-inverse/30 py-4 text-pretty leading-relaxed text-on-inverse-soft last:pb-0"
                >
                  {step}
                </li>
              ))}
            </ol>
          </div>

          <div className="mt-8 grid gap-6 text-sm sm:grid-cols-2">
            <div>
              <h2 className="font-medium">Email</h2>
              <p className="mt-2 text-muted">[NEEDS INPUT]</p>
            </div>
            <div>
              <h2 className="font-medium">Where we work</h2>
              <p className="mt-2 text-pretty leading-relaxed text-ink-soft">
                Based in India, working remotely, with calls at times that suit your time zone.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
