import CapabilityBanner from "@/components/sections/CapabilityBanner";
import Hero from "@/components/sections/Hero";
import IntroBand from "@/components/sections/IntroBand";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <CapabilityBanner />
      <IntroBand />
    </main>
  );
}
