import CapabilityBanner from "@/components/sections/CapabilityBanner";
import Hero from "@/components/sections/Hero";
import IntroBand from "@/components/sections/IntroBand";
import Principles from "@/components/sections/Principles";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <CapabilityBanner />
      <IntroBand />
      <Principles />
    </main>
  );
}
