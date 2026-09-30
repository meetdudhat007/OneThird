import Reveal from "@/components/motion/Reveal";
import Button from "@/components/ui/Button";

// Closing call to action, shared by every page except Contact.
export default function CtaStrip() {
  return (
    <section className="bg-surface px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <Reveal className="mx-auto flex max-w-7xl flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-balance text-3xl leading-[1.1] tracking-tight sm:text-4xl">
          Have a project in mind?
          <em className="block">Let&rsquo;s talk it through.</em>
        </h2>
        <Button href="/contact" size="lg" className="shrink-0 self-start sm:self-auto">
          Start a project
        </Button>
      </Reveal>
    </section>
  );
}
