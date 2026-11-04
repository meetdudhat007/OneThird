/**
 * Project data shared by the home showcase and the Work pages.
 *
 * CONFIRM BEFORE LAUNCH: `summary` and `date` are drafts/dummy values written
 * at the team's request. Replace them with confirmed facts before going live.
 * Only projects confirmed in CLAUDE.md may be listed here. Order matters:
 * Madhav Pharma (flagship) first.
 *
 * Case study fields are null until the team confirms them, and the page then
 * shows a visible [NEEDS INPUT] prompt. Never fill them with invented results.
 */
export type Project = {
  slug: string;
  name: string;
  category: string;
  /** DUMMY until confirmed. */
  date: string;
  /** DRAFT until confirmed. */
  summary: string;
  /** Illustration shown until real screenshots are provided. */
  visual: "operations" | "detection";
  /** Public URL of the live project. */
  liveUrl: string | null;
  challenge: string | null;
  built: string | null;
  result: string | null;
};

export const projects: Project[] = [
  {
    slug: "madhav-pharma",
    name: "Madhav Pharma Industries",
    category: "Web App",
    date: "Mar 2026",
    summary:
      "A custom web app for a pharmaceutical business, bringing its day-to-day operations into one system the team works from.",
    visual: "operations",
    liveUrl: null,
    challenge: null,
    built: null,
    result: null,
  },
  {
    slug: "deepshield",
    name: "DeepShield",
    category: "Web App",
    date: "Jul 2026",
    summary:
      "An AI-powered web app that analyses uploaded media and flags signs of deepfake manipulation.",
    visual: "detection",
    liveUrl: null,
    challenge: null,
    built: null,
    result: null,
  },
];
