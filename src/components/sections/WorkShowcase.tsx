import Link from "next/link";
import ProjectVisual from "@/components/ProjectVisual";
import Reveal from "@/components/motion/Reveal";
import Button from "@/components/ui/Button";
import { projects } from "@/content/projects";

export default function WorkShowcase() {
  return (
    <section className="px-2 sm:px-4">
      <div className="rounded-[2rem] bg-inverse px-4 py-20 text-on-inverse sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <h2 className="text-4xl leading-[1.05] tracking-tight sm:text-5xl">
              Selected <em>work</em>
            </h2>
          </Reveal>

          <ul className="mt-14 grid gap-6 lg:mt-16 lg:grid-cols-2 lg:gap-8">
            {projects.map((project, i) => (
              <li key={project.slug}>
                <Reveal delay={i * 0.12} className="h-full">
                  <Link
                    href={`/work/${project.slug}`}
                    className="group flex h-full flex-col rounded-3xl border border-on-inverse/10 bg-on-inverse/[0.03] p-5 transition-colors duration-300 hover:border-on-inverse/25 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-on-inverse sm:p-7"
                  >
                    <div className="flex items-start justify-between gap-6">
                      <h3 className="text-2xl tracking-tight">{project.name}</h3>
                      <svg viewBox="0 0 16 16" aria-hidden="true" className="mt-1.5 size-5 shrink-0 transition-transform duration-300 group-hover:rotate-45">
                        <path d="M4.5 11.5 11.5 4.5M5.5 4.5h6v6" fill="none" stroke="currentColor" strokeWidth="1.25" />
                      </svg>
                    </div>
                    <p className="mt-3 max-w-lg flex-1 text-pretty leading-relaxed text-on-inverse-soft">
                      {project.summary}
                    </p>
                    <p className="mt-5 flex justify-between text-sm text-on-inverse-soft">
                      <span>{project.category}</span>
                      <span>{project.date}</span>
                    </p>
                    <div className="mt-5 aspect-[16/10] overflow-hidden rounded-2xl">
                      <div className="size-full transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03] motion-reduce:transition-none">
                        <ProjectVisual project={project} />
                      </div>
                    </div>
                  </Link>
                </Reveal>
              </li>
            ))}
          </ul>

          <Reveal className="mt-12">
            <Button href="/work" variant="inverse" size="lg">
              See all work
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
