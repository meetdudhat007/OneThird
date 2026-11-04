import MaskedLine from "@/components/motion/MaskedLine";

export default function WorkIntro() {
  return (
    <section className="px-4 pb-14 pt-20 sm:px-6 lg:px-8 lg:pb-20 lg:pt-32">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <h1 className="text-5xl leading-[1.02] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
          <MaskedLine delay="0ms">A look at</MaskedLine>
          <MaskedLine delay="110ms">
            <em className="text-accent">what we’ve built.</em>
          </MaskedLine>
        </h1>

        <p
          className="max-w-md text-pretty text-lg leading-relaxed text-ink-soft animate-fade-up motion-reduce:animate-none"
          style={{ animationDelay: "280ms" }}
        >
          Every project starts with how the people using it actually work. These are the ones
          we can show you in detail.
        </p>
      </div>
    </section>
  );
}
