import type { Metadata } from "next";
import CtaStrip from "@/components/sections/CtaStrip";
import ProjectList from "@/components/sections/ProjectList";
import WorkIntro from "@/components/sections/WorkIntro";

export const metadata: Metadata = {
  title: "Work — OneThird",
  description:
    "Custom software built by OneThird, including Madhav Pharma Industries and DeepShield.",
};

export default function WorkPage() {
  return (
    <main className="flex-1">
      <WorkIntro />
      <ProjectList />
      <CtaStrip />
    </main>
  );
}
