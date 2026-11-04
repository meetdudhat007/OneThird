import MaskedLine from "@/components/motion/MaskedLine";
import Reveal from "@/components/motion/Reveal";

export default function AboutIntro() {
  return (
    <section className="pb-20 pt-20 lg:pb-28 lg:pt-32">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 sm:px-6 lg:flex-row lg:items-end lg:justify-between lg:px-8">
        <h1 className="text-5xl leading-[1.02] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
          <MaskedLine delay="0ms">The people you talk to</MaskedLine>
          <MaskedLine delay="110ms">
            <em className="text-accent">build your software.</em>
          </MaskedLine>
        </h1>

        <p
          className="max-w-md text-pretty text-lg leading-relaxed text-ink-soft animate-fade-up motion-reduce:animate-none"
          style={{ animationDelay: "280ms" }}
        >
          OneThird is a small custom software team based in India, working with businesses
          wherever they are.
        </p>
      </div>

      <Reveal className="mx-auto mt-14 w-full max-w-screen-2xl px-2 sm:px-4 lg:mt-20">
        <div
          className="flex aspect-[4/3] items-center justify-center rounded-3xl bg-inverse sm:aspect-[16/9] lg:aspect-[27/10]"
          style={{
            backgroundImage:
              "radial-gradient(60% 80% at 75% 25%, color-mix(in oklab, var(--color-on-inverse) 14%, transparent), transparent), radial-gradient(50% 70% at 15% 85%, color-mix(in oklab, var(--color-on-inverse) 8%, transparent), transparent)",
          }}
        >
          <p className="px-6 text-center text-sm text-on-inverse-soft">
            [NEEDS INPUT] Team group photo
          </p>
        </div>
      </Reveal>
    </section>
  );
}
