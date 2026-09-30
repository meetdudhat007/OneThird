// Layout and interaction adapted from FAQ 5 by Hirael <https://hirael.com/blocks/faqs/faq-05>
// MIT · Mohammad Shehadeh · https://github.com/MohammadShehadeh/hirael
// Restyled with this site's typography and colour tokens.

import Link from "next/link";
import Reveal from "@/components/motion/Reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// CONFIRM BEFORE LAUNCH: drafted answers. Each describes how the team works,
// so the team must agree it's accurate. The code-ownership answer in
// particular is a contractual commitment.
const FAQS: readonly { id: string; q: string; a: string }[] = [
  {
    id: "cost",
    q: "How much does a custom software project cost?",
    a: "It depends on scope, so we don’t quote a number before we understand the work. After an initial conversation, we send a written estimate broken down by what’s being built, so you can see where the cost goes and adjust scope if you need to.",
  },
  {
    id: "timeline",
    q: "How long will my project take?",
    a: "That depends on scope too. We split the work into milestones and agree on dates for each one up front, and you see working software along the way, not only at the end.",
  },
  {
    id: "remote",
    q: "We’re not based in India. Can we still work together?",
    a: "Yes. We’re based in India and work fully remotely, with regular updates as the project moves and calls scheduled at times that suit your time zone.",
  },
  {
    id: "ownership",
    q: "Who owns the code when the project is done?",
    a: "You do. Once the project is paid for, the source code and everything we built for you is yours. This is written into our agreement before any work starts.",
  },
  {
    id: "after-launch",
    q: "What happens after launch?",
    a: "We don’t disappear at launch. We can stay on to fix issues, make improvements, and keep the system running as your business changes. We agree on how that works before handover.",
  },
  {
    id: "start",
    q: "How do we get started?",
    a: "Tell us about your project through the contact page. We’ll ask how your business works today and what you want to change, then come back with a proposed approach and an estimate.",
  },
];

// Closed accordion answers aren't in the server HTML, so expose every Q&A to
// search engines as structured data (pattern from the Next.js JSON-LD guide).
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

export default function Faq() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c") }}
      />
      <Reveal className="mx-auto grid w-full max-w-6xl grid-cols-1 border-y border-line md:grid-cols-2 md:border-x">
        <div className="flex flex-col gap-5 border-b border-line px-6 pb-8 pt-12 md:border-b-0 md:border-e md:px-10 md:py-16">
          <h2 className="text-balance text-4xl leading-[1.05] tracking-tight sm:text-5xl">
            Questions, <em>answered.</em>
          </h2>
          <p className="max-w-sm text-pretty leading-relaxed text-ink-soft">
            The things clients ask us most before a project starts. Still unsure about
            something?{" "}
            <Link href="/contact" className="text-ink underline underline-offset-4 hover:no-underline">
              Ask us directly
            </Link>
            .
          </p>
        </div>

        <div className="flex flex-col justify-center px-6 py-4 md:px-8">
          <Accordion type="single" collapsible defaultValue={FAQS[0].id} className="w-full">
            {FAQS.map((item) => (
              <AccordionItem key={item.id} value={item.id} className="last:border-b-0">
                <AccordionTrigger className="py-5 text-lg font-normal tracking-tight underline-offset-4">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-base leading-relaxed text-ink-soft">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Reveal>
    </section>
  );
}
