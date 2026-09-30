/**
 * Project data shared by the home showcase and (later) the Work pages.
 *
 * CONFIRM BEFORE LAUNCH: `summary` and `date` are drafts/dummy values written
 * at the team's request. Replace them with confirmed facts before going live.
 * Only projects confirmed in CLAUDE.md may be listed here. Order matters:
 * Madhav Pharma (flagship) first.
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
  },
  {
    slug: "deepshield",
    name: "DeepShield",
    category: "Web App",
    date: "Jul 2026",
    summary:
      "An AI-powered web app that analyses uploaded media and flags signs of deepfake manipulation.",
    visual: "detection",
  },
];
