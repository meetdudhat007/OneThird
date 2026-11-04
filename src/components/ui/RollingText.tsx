import type { ReactNode } from "react";

/**
 * On hover the label rolls up and an identical copy rolls in from below (the
 * copy is aria-hidden so screen readers hear the label once). The parent link
 * must have the `group` class.
 */
export default function RollingText({ children }: { children: ReactNode }) {
  return (
    <span className="relative block overflow-hidden">
      <span className="flex items-center gap-2 transition-transform duration-300 ease-out group-hover:-translate-y-full motion-reduce:transition-none">
        {children}
      </span>
      <span
        aria-hidden="true"
        className="absolute inset-0 flex items-center gap-2 translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0 motion-reduce:transition-none"
      >
        {children}
      </span>
    </span>
  );
}
