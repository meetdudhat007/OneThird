import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CaseStudy from "@/components/sections/CaseStudy";
import CtaStrip from "@/components/sections/CtaStrip";
import { projects } from "@/content/projects";

// Only the projects listed in src/content/projects.ts exist; anything else 404s.
export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps<"/work/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};

  return {
    title: `${project.name} — OneThird`,
    description: project.summary,
  };
}

export default async function CaseStudyPage({ params }: PageProps<"/work/[slug]">) {
  const { slug } = await params;
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) notFound();

  return (
    <main className="flex-1">
      <CaseStudy project={projects[index]} next={projects[(index + 1) % projects.length]} />
      <CtaStrip />
    </main>
  );
}
