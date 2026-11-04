import type { Metadata } from "next";
import CtaStrip from "@/components/sections/CtaStrip";
import ServicesIntro from "@/components/sections/ServicesIntro";

export const metadata: Metadata = {
  title: "Services — OneThird",
  description:
    "Custom business software, web and SaaS products, AI/ML features, and automation, built around how your business actually works.",
};

export default function ServicesPage() {
  return (
    <main className="flex-1">
      <ServicesIntro />
      <CtaStrip />
    </main>
  );
}
