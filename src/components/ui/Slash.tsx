/** The slash from the logo, used as a separator. Decorative. */
export default function Slash({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={`text-accent ${className}`}>
      <line x1="16" y1="3" x2="8" y2="21" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
    </svg>
  );
}
