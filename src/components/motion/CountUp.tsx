"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const formatCount = (n: number, prefix: string, suffix: string) =>
  `${prefix}${Math.round(n).toLocaleString("en-US")}${suffix}`;

/**
 * Renders the final number on the server (so it is always correct without JS
 * and for search engines), then counts up from zero the first time it scrolls
 * into view. Skipped if already on screen at load or if reduced motion is set.
 */
export default function CountUp({
  value,
  prefix = "",
  suffix = "",
  className,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    // Update React's existing text node in place rather than replacing it.
    const text = ref.current?.firstChild;
    const el = ref.current;
    if (!el || !text) return;
    const final = formatCount(value, prefix, suffix);
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (el.getBoundingClientRect().top < window.innerHeight) return;

    gsap.registerPlugin(ScrollTrigger);
    const counter = { n: 0 };
    text.nodeValue = formatCount(0, prefix, suffix);
    const ctx = gsap.context(() => {
      gsap.to(counter, {
        n: value,
        duration: 1.6,
        ease: "power2.out",
        scrollTrigger: { trigger: el, start: "top 90%", once: true },
        onUpdate: () => {
          text.nodeValue = formatCount(counter.n, prefix, suffix);
        },
      });
    });
    return () => {
      ctx.revert();
      text.nodeValue = final;
    };
  }, [value, prefix, suffix]);

  return (
    <span ref={ref} className={className}>
      {formatCount(value, prefix, suffix)}
    </span>
  );
}
