"use client";

import { useEffect, useRef, type ReactNode } from "react";
import gsap from "gsap";

/**
 * Fades its content up once, the first time it scrolls into view.
 *
 * Content that is already on screen when the page loads is left alone, so
 * nothing visible flickers during hydration, and users who prefer reduced
 * motion always get static content.
 */
export default function Reveal({
  children,
  className,
  y = 60,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  y?: number;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (el.getBoundingClientRect().top < window.innerHeight) return;

    const ctx = gsap.context(() => gsap.set(el, { autoAlpha: 0, y }));

    // Watches the element itself rather than a pre-measured scroll position.
    // The footer stays mounted between pages, so any measured position would
    // go stale when the page length changes, leaving it hidden for good.
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      ctx.add(() => gsap.to(el, { autoAlpha: 1, y: 0, duration: 1, delay, ease: "power3.out" }));
    });
    observer.observe(el);

    return () => {
      observer.disconnect();
      ctx.revert();
    };
  }, [y, delay]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
