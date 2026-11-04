import Link from "next/link";
import ProjectVisual from "@/components/ProjectVisual";
import Reveal from "@/components/motion/Reveal";
import RollingText from "@/components/ui/RollingText";
import { projects, type Project } from "@/content/projects";

function ProjectCard({ project, flagship }: { project: Project; flagship: boolean }) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className={`group grid gap-8 rounded-[2rem] p-5 sm:p-8 lg:items-center lg:gap-12 lg:p-10 ${
        flagship
          ? "bg-inverse text-on-inverse focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]"
          : "border border-line transition-colors duration-300 hover:border-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)]"
      }`}
    >
      <div>
        <p className={`text-sm ${flagship ? "text-on-inverse-soft" : "text-muted"}`}>
          {project.category}
        </p>
        <h2
          className={`mt-4 text-balance leading-[1.05] tracking-tight ${
            flagship ? "text-4xl sm:text-5xl" : "text-3xl sm:text-4xl"
          }`}
        >
          {project.name}
        </h2>
        <p
          className={`mt-5 max-w-lg text-pretty leading-relaxed ${
            flagship ? "text-on-inverse-soft" : "text-ink-soft"
          }`}
        >
          {project.summary}
        </p>
        <p className="mt-8 inline-block text-sm font-medium">
          <RollingText>View case study</RollingText>
        </p>
      </div>

      <div
        className={`aspect-[16/10] overflow-hidden rounded-2xl ${flagship ? "" : "bg-inverse"}`}
      >
        <div className="size-full transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03] motion-reduce:transition-none">
          <ProjectVisual project={project} />
        </div>
      </div>
    </Link>
  );
}

export default function ProjectList() {
  return (
    <section className="px-2 pb-20 sm:px-4 lg:pb-28">
      <ul className="mx-auto grid max-w-screen-2xl gap-6">
        {projects.map((project, i) => (
          <li key={project.slug}>
            <Reveal delay={i * 0.12}>
              <ProjectCard project={project} flagship={i === 0} />
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  );
}
