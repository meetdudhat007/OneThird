import type { ReactNode } from "react";

// A headline line sits in a clipping mask and slides up into view.
// overflow-y-clip (not overflow-hidden) keeps italic overhang visible sideways;
// the bottom padding stops descenders from being clipped.
export default function MaskedLine({ children, delay }: { children: ReactNode; delay: string }) {
  return (
    <span className="block overflow-x-visible overflow-y-clip pb-[0.08em]">
      <span
        className="block animate-line-up motion-reduce:animate-none"
        style={{ animationDelay: delay }}
      >
        {children}
      </span>
    </span>
  );
}
