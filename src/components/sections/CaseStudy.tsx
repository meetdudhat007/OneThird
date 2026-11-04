import Link from "next/link";
import ProjectVisual from "@/components/ProjectVisual";
import MaskedLine from "@/components/motion/MaskedLine";
import Reveal from "@/components/motion/Reveal";
import RollingText from "@/components/ui/RollingText";
import type { Project } from "@/content/projects";

function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" className={className}>
      <path d="M3 8h10M9 4l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.25" />
    </svg>
  );
}

function CaseStudyHeader({ project }: { project: Project }) {
  return (
    <section className="px-4 pb-14 pt-16 sm:px-6 lg:px-8 lg:pb-20 lg:pt-24">
      <div className="mx-auto max-w-7xl">
        <Link
          href="/work"
          className="group inline-flex items-center gap-2 text-sm text-ink-soft transition-colors hover:text-ink"
        >
          <Arrow className="size-4 rotate-180 transition-transform duration-300 group-hover:-translate-x-0.5" />
          All work
        </Link>

        <h1 className="mt-10 max-w-5xl text-5xl leading-[1.02] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
          <MaskedLine delay="0ms">{project.name}</MaskedLine>
        </h1>

        <div
          className="mt-8 grid gap-8 animate-fade-up motion-reduce:animate-none lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:gap-16"
          style={{ animationDelay: "200ms" }}
        >
          <p className="max-w-2xl text-pretty text-xl leading-snug text-ink-soft sm:text-2xl">
            {project.summary}
          </p>

          <dl className="grid grid-cols-2 gap-6 border-t border-line pt-5 text-sm lg:self-start">
            <div>
              <dt className="text-muted">Type</dt>
              <dd className="mt-2">{project.category}</dd>
            </div>
            <div>
              <dt className="text-muted">Live site</dt>
              <dd className="mt-2">
                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="underline underline-offset-4 hover:no-underline"
                  >
                    Visit site
                  </a>
                ) : (
                  <span className="text-muted">[NEEDS INPUT]</span>
                )}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}

function CaseStudyVisual({ project }: { project: Project }) {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal y={40} className="aspect-[16/10] overflow-hidden rounded-3xl bg-inverse">
          <ProjectVisual project={project} />
        </Reveal>
        <p className="mt-4 text-sm text-muted">
          Illustration only. [NEEDS INPUT] Real project screenshots.
        </p>
      </div>
    </div>
  );
}

function CaseStudyStory({ project }: { project: Project }) {
  const parts = [
    {
      title: "The challenge",
      text: project.challenge,
      prompt: "What problem did this project need to solve?",
    },
    {
      title: "What we built",
      text: project.built,
      prompt: "What was built, and who uses it?",
    },
    {
      title: "The result",
      text: project.result,
      prompt: "What changed after launch? Confirmed results only.",
    },
  ];

  return (
    <div className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl border-b border-line">
        {parts.map(({ title, text, prompt }) => (
          <section
            key={title}
            className="grid gap-4 border-t border-line py-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16 lg:py-14"
          >
            <Reveal y={30}>
              <h2 className="text-3xl leading-[1.05] tracking-tight sm:text-4xl">{title}</h2>
            </Reveal>
            <Reveal y={30}>
              {text ? (
                <p className="text-pretty text-lg leading-relaxed text-ink-soft">{text}</p>
              ) : (
                <p className="text-pretty text-lg leading-relaxed text-muted">
                  [NEEDS INPUT] {prompt}
                </p>
              )}
            </Reveal>
          </section>
        ))}
      </div>
    </div>
  );
}

function NextProject({ project }: { project: Project }) {
  return (
    <section className="px-4 pb-20 sm:px-6 lg:px-8 lg:pb-28">
      <Reveal className="mx-auto max-w-7xl">
        <Link
          href={`/work/${project.slug}`}
          className="group flex items-end justify-between gap-6 text-ink transition-colors hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
        >
          <span>
            <span className="block text-sm text-muted">Next project</span>
            <span className="mt-3 block text-4xl leading-[1.05] tracking-tight sm:text-5xl">
              <RollingText>{project.name}</RollingText>
            </span>
          </span>
          <Arrow className="mb-2 size-7 shrink-0 transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none" />
        </Link>
      </Reveal>
    </section>
  );
}

export default function CaseStudy({ project, next }: { project: Project; next: Project }) {
  return (
    <>
      <CaseStudyHeader project={project} />
      <CaseStudyVisual project={project} />
      <CaseStudyStory project={project} />
      <NextProject project={next} />
    </>
  );
}
