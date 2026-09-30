import BlogPreview from "@/components/sections/BlogPreview";
import CapabilityBanner from "@/components/sections/CapabilityBanner";
import CtaStrip from "@/components/sections/CtaStrip";
import Faq from "@/components/sections/Faq";
import Hero from "@/components/sections/Hero";
import IntroBand from "@/components/sections/IntroBand";
import Principles from "@/components/sections/Principles";
import ServicesList from "@/components/sections/ServicesList";
import WorkShowcase from "@/components/sections/WorkShowcase";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <CapabilityBanner />
      <IntroBand />
      <Principles />
      <ServicesList />
      <WorkShowcase />
      <Faq />
      <BlogPreview />
      <CtaStrip />
    </main>
  );
}
