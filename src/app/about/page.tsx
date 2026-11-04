import type { Metadata } from "next";
import AboutIntro from "@/components/sections/AboutIntro";
import CtaStrip from "@/components/sections/CtaStrip";
import OurStory from "@/components/sections/OurStory";
import SmallTeam from "@/components/sections/SmallTeam";
import TeamGrid from "@/components/sections/TeamGrid";

export const metadata: Metadata = {
  title: "About — OneThird",
  description:
    "OneThird is a small custom software team based in India. The people you talk to are the people who build your software.",
};

export default function AboutPage() {
  return (
    <main className="flex-1">
      <AboutIntro />
      <OurStory />
      <SmallTeam />
      <TeamGrid />
      <CtaStrip />
    </main>
  );
}
