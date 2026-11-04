import Link from "next/link";
import MaskedLine from "@/components/motion/MaskedLine";
import RollingText from "@/components/ui/RollingText";
import Slash from "@/components/ui/Slash";
import { services } from "@/content/services";

export default function ServicesIntro() {
  return (
    <section className="px-4 pb-16 pt-20 sm:px-6 lg:px-8 lg:pb-24 lg:pt-32">
      <div className="mx-auto max-w-7xl">
        <h1 className="text-5xl leading-[1.02] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
          <MaskedLine delay="0ms">Software for the work</MaskedLine>
          <MaskedLine delay="110ms">
            <em className="text-accent">your business runs on.</em>
          </MaskedLine>
        </h1>

        <p
          className="mt-8 max-w-2xl text-pretty text-lg leading-relaxed text-ink-soft animate-fade-up motion-reduce:animate-none lg:ml-auto lg:mt-12"
          style={{ animationDelay: "280ms" }}
        >
          Some businesses need one system to replace a pile of spreadsheets. Others need a
          product for their customers, a model that solves one specific problem, or an
          automation that takes manual work off the team. We build all four, and every project
          starts the same way: by learning how your business actually works.
        </p>

        <nav
          aria-label="Services on this page"
          className="mt-14 border-t border-line animate-fade-up motion-reduce:animate-none lg:mt-20"
          style={{ animationDelay: "400ms" }}
        >
          <ul className="lg:flex lg:items-center lg:justify-between lg:pt-8">
            {services.map(({ id, title }, i) => (
              // lg:contents makes the links and slashes direct flex children of the
              // list, so justify-between centres each slash between its neighbours.
              <li key={id} className="border-b border-line lg:contents">
                <Link
                  href={`#${id}`}
                  className="group block w-full py-5 text-2xl tracking-tight transition-colors hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink lg:w-auto lg:py-0 lg:text-3xl"
                >
                  <RollingText>{title}</RollingText>
                </Link>
                {i < services.length - 1 && <Slash className="hidden size-7 shrink-0 lg:block" />}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  );
}
