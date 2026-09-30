import Link from "next/link";

// Placeholder mark until the team finalises a real logo.
function BoltMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <path d="M13.5 2 4 13.5h6.5L9 22l11-12.5h-6.8L13.5 2Z" fill="currentColor" />
    </svg>
  );
}

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="ZapStack home"
      className={`inline-flex items-center gap-2 text-xl tracking-tight ${className}`}
    >
      <BoltMark className="size-6" />
      <span>
        Zap<span className="italic">STACK</span>
      </span>
    </Link>
  );
}
