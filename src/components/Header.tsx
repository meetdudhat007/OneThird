"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "@/components/Logo";
import Button from "@/components/ui/Button";

const navLinks = [
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-canvas/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-24 lg:px-8">
        <Logo />

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-10">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  aria-current={isActive(href) ? "page" : undefined}
                  className={`text-sm transition-colors hover:text-ink ${
                    isActive(href) ? "text-ink" : "text-muted"
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden sm:block">
            <Button href="/contact">Start a project</Button>
          </div>

          <button
            type="button"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((o) => !o)}
            className="relative flex size-12 items-center justify-center rounded-full border border-line lg:hidden"
          >
            <span
              className={`absolute h-px w-5 bg-ink transition-transform duration-300 ${
                open ? "rotate-45" : "-translate-y-1"
              }`}
            />
            <span
              className={`absolute h-px w-5 bg-ink transition-transform duration-300 ${
                open ? "-rotate-45" : "translate-y-1"
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu: grid-rows trick animates height without measuring it. */}
      <div
        id="mobile-menu"
        className={`grid transition-[grid-template-rows] duration-300 ease-out lg:hidden ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden" inert={!open}>
          <nav
            aria-label="Mobile"
            onClick={(e) => (e.target as HTMLElement).closest("a") && setOpen(false)}
            className="border-t border-line px-4 pb-6 pt-2 sm:px-6"
          >
            <ul>
              {navLinks.map(({ href, label }) => (
                <li key={href} className="border-b border-line">
                  <Link
                    href={href}
                    aria-current={isActive(href) ? "page" : undefined}
                    className="block py-4 text-2xl tracking-tight"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
            <Button href="/contact" className="mt-6 w-full sm:hidden">
              Start a project
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
