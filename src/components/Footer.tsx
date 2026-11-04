import Link from "next/link";
import Logo from "@/components/Logo";
import Reveal from "@/components/motion/Reveal";

const columns = [
  {
    title: "Company",
    links: [
      { href: "/work", label: "Work" },
      { href: "/services", label: "Services" },
      { href: "/about", label: "About" },
      { href: "/blog", label: "Blog" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { href: "/services#business-software", label: "Business Software" },
      { href: "/services#web-saas", label: "Web & SaaS" },
      { href: "/services#ai-ml", label: "AI/ML" },
      { href: "/services#automation", label: "Automation" },
    ],
  },
];

const linkClass = "text-on-inverse-soft transition-colors hover:text-on-inverse";

export default function Footer() {
  return (
    <footer className="bg-inverse px-4 pb-8 pt-20 text-on-inverse sm:px-6 lg:px-8 lg:pt-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <Logo variant="white" />
            <p className="mt-5 max-w-xs text-pretty leading-relaxed text-on-inverse-soft">
              Custom Software &amp; Digital Solutions Partner. Based in India.
            </p>
          </div>

          {columns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h2 className="text-sm font-medium">{col.title}</h2>
              <ul className="mt-5 space-y-3">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className={linkClass}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div>
            <h2 className="text-sm font-medium">Get in touch</h2>
            <ul className="mt-5 space-y-3">
              <li>
                <Link href="/contact" className={linkClass}>
                  Start a project
                </Link>
              </li>
              {/* NEEDS INPUT: real email and social profile URLs from the team. */}
              <li className="text-on-inverse-soft">Email: [NEEDS INPUT]</li>
              <li className="text-on-inverse-soft">Social links: [NEEDS INPUT]</li>
            </ul>
          </div>
        </div>

        {/* Oversized wordmark echoing the logo: white letters, red slash. Font
            size is a fraction of the container width, so it spans edge to edge
            at every screen size. Decorative: the Logo carries the name. */}
        <Reveal y={40} className="mt-20 [container-type:inline-size] lg:mt-24">
          <p
            aria-hidden="true"
            className="flex select-none items-center justify-between whitespace-nowrap text-[21cqw] leading-[0.9] tracking-[-0.04em] text-on-inverse"
          >
            <span>One</span>
            <svg viewBox="0 0 54 100" className="h-[0.95em] w-auto shrink-0 translate-x-[0.04em] text-accent">
              <line x1="47" y1="7" x2="7" y2="93" stroke="currentColor" strokeWidth="14" strokeLinecap="round" />
            </svg>
            <span className="italic">Third</span>
          </p>
        </Reveal>

        <div className="mt-10 flex flex-col gap-3 border-t border-on-inverse/10 pt-8 text-sm text-on-inverse-soft sm:flex-row sm:justify-between">
          <p>&copy; {new Date().getFullYear()} OneThird. All rights reserved.</p>
          <p>Custom software, built around how you work.</p>
        </div>
      </div>
    </footer>
  );
}
