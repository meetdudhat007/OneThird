"use client";

import { useEffect, useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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

    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.from(el, {
        autoAlpha: 0,
        y,
        duration: 1,
        delay,
        ease: "power3.out",
        // The element is measured while already offset by `y`, so shift the
        // trigger line by the same amount; clamp() keeps elements near the
        // bottom of the page triggerable.
        scrollTrigger: { trigger: el, start: `clamp(top 88%+=${y})`, once: true },
      });
    });
    return () => ctx.revert();
  }, [y, delay]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
