import type { ReactNode } from "react";
import type { Project } from "@/content/projects";

/*
 * Abstract, original illustrations used until real project screenshots exist.
 * Deliberately schematic (grey blocks, no fake data) so they read as
 * illustrations rather than as screenshots of the actual product.
 * Drawn in currentColor at varying opacity so they follow the colour tokens.
 */

function BrowserFrame({ children }: { children: ReactNode }) {
  return (
    <>
      <rect x="0" y="0" width="640" height="400" fill="currentColor" fillOpacity="0.04" />
      <rect x="0" y="0" width="640" height="36" fill="currentColor" fillOpacity="0.06" />
      <rect x="220" y="11" width="200" height="14" rx="7" fill="currentColor" fillOpacity="0.1" />
      {children}
    </>
  );
}

function Operations() {
  const rows = [0, 1, 2, 3, 4];
  return (
    <BrowserFrame>
      {/* Sidebar */}
      <rect x="0" y="36" width="132" height="364" fill="currentColor" fillOpacity="0.04" />
      {[64, 92, 120, 148, 176].map((y, i) => (
        <rect key={y} x="20" y={y} width={i === 0 ? 84 : 64} height="10" rx="5" fill="currentColor" fillOpacity={i === 0 ? 0.45 : 0.14} />
      ))}
      {/* Summary tiles */}
      {[156, 312, 468].map((x) => (
        <g key={x}>
          <rect x={x} y="60" width="140" height="76" rx="10" fill="currentColor" fillOpacity="0.07" />
          <rect x={x + 16} y="78" width="56" height="8" rx="4" fill="currentColor" fillOpacity="0.2" />
          <rect x={x + 16} y="100" width="88" height="18" rx="5" fill="currentColor" fillOpacity="0.4" />
        </g>
      ))}
      {/* Table */}
      <rect x="156" y="156" width="452" height="220" rx="10" fill="currentColor" fillOpacity="0.05" />
      {rows.map((i) => (
        <g key={i}>
          <rect x="176" y={182 + i * 38} width="120" height="9" rx="4.5" fill="currentColor" fillOpacity={i === 0 ? 0.3 : 0.16} />
          <rect x="336" y={182 + i * 38} width="80" height="9" rx="4.5" fill="currentColor" fillOpacity="0.12" />
          <rect x="520" y={179 + i * 38} width="68" height="15" rx="7.5" fill="currentColor" fillOpacity={i % 2 ? 0.1 : 0.22} />
        </g>
      ))}
    </BrowserFrame>
  );
}

function Detection() {
  return (
    <BrowserFrame>
      {/* Media frame with an abstract portrait */}
      <rect x="60" y="64" width="300" height="300" rx="14" fill="currentColor" fillOpacity="0.07" />
      <circle cx="210" cy="178" r="52" fill="currentColor" fillOpacity="0.16" />
      <path d="M118 364c6-64 44-104 92-104s86 40 92 104z" fill="currentColor" fillOpacity="0.16" />
      {/* Scan line sweeping over the media */}
      <g className="animate-scan motion-reduce:animate-none">
        <rect x="60" y="72" width="300" height="2" fill="currentColor" fillOpacity="0.7" />
        <rect x="60" y="74" width="300" height="24" fill="currentColor" fillOpacity="0.05" />
      </g>
      {/* Analysis panel */}
      <rect x="392" y="64" width="188" height="12" rx="6" fill="currentColor" fillOpacity="0.3" />
      <rect x="392" y="88" width="132" height="9" rx="4.5" fill="currentColor" fillOpacity="0.14" />
      {[128, 176, 224].map((y, i) => (
        <g key={y}>
          <rect x="392" y={y} width="188" height="8" rx="4" fill="currentColor" fillOpacity="0.1" />
          <rect x="392" y={y} width={[150, 96, 124][i]} height="8" rx="4" fill="currentColor" fillOpacity="0.4" />
        </g>
      ))}
      <rect x="392" y="312" width="120" height="32" rx="16" fill="currentColor" fillOpacity="0.22" />
    </BrowserFrame>
  );
}

export default function ProjectVisual({ project }: { project: Project }) {
  return (
    <svg
      viewBox="0 0 640 400"
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-label={`Illustration representing the ${project.name} project`}
      className="size-full text-on-inverse"
    >
      {project.visual === "operations" ? <Operations /> : <Detection />}
    </svg>
  );
}
