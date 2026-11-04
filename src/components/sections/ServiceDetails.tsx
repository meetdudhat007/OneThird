import Reveal from "@/components/motion/Reveal";
import Slash from "@/components/ui/Slash";
import { services } from "@/content/services";

export default function ServiceDetails() {
  return (
    <div className="px-4 pb-20 sm:px-6 lg:px-8 lg:pb-28">
      <div className="mx-auto max-w-7xl border-b border-line">
        {services.map(({ id, title, body, includes, fit }) => (
          // scroll-mt keeps the heading clear of the sticky site header when a
          // link jumps to this anchor.
          <section
            key={id}
            id={id}
            aria-labelledby={`${id}-title`}
            className="grid scroll-mt-20 gap-8 border-t border-line py-14 lg:scroll-mt-24 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16 lg:py-24"
          >
            <div className="lg:sticky lg:top-32 lg:self-start">
              <h2
                id={`${id}-title`}
                className="text-balance text-4xl leading-[1.05] tracking-tight sm:text-5xl"
              >
                {title}
              </h2>
            </div>

            <Reveal y={30}>
              <p className="text-pretty text-xl leading-snug sm:text-2xl">{body}</p>

              <div className="mt-10 grid gap-10 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] md:gap-12 lg:mt-14">
                <div>
                  <h3 className="text-sm font-medium">What this covers</h3>
                  <ul className="mt-4">
                    {includes.map((item) => (
                      <li
                        key={item}
                        className="flex gap-3 border-t border-line py-3 leading-relaxed text-ink-soft"
                      >
                        <Slash className="mt-1 size-4 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-sm font-medium">A good fit if</h3>
                  <p className="mt-4 text-pretty leading-relaxed text-ink-soft">{fit}</p>
                </div>
              </div>
            </Reveal>
          </section>
        ))}
      </div>
    </div>
  );
}
