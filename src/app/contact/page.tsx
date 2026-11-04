import type { Metadata } from "next";
import ContactSection from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Contact — OneThird",
  description:
    "Tell OneThird about your project. We'll ask how your business works, then come back with a proposed approach and an estimate.",
};

export default function ContactPage() {
  return (
    <main className="flex-1">
      <ContactSection />
    </main>
  );
}
