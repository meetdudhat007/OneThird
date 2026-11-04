import type { StaticImageData } from "next/image";
import codeOnScreen from "../../public/images/blog/code-on-screen.jpg";
import laptopAndMug from "../../public/images/blog/laptop-and-mug.jpg";
import planningStickyNotes from "../../public/images/blog/planning-sticky-notes.jpg";
import robotArmsLab from "../../public/images/blog/robot-arms-lab.jpg";
import writingInNotebook from "../../public/images/blog/writing-in-notebook.jpg";

/**
 * Blog posts shown on the home page and the Blog pages.
 *
 * Newest first; the home page shows the first two.
 *
 * DUMMY CONTENT: titles and dates are placeholders at the team's request,
 * to be replaced with real posts. Photos are free to use (Unsplash License,
 * CC0, or public domain); attribution isn't required but is recorded in
 * `credit`.
 */
export type Post = {
  slug: string;
  title: string;
  category: string;
  /** DUMMY until real posts exist. */
  date: string;
  /** Post text, one string per paragraph. Null shows a [NEEDS INPUT] prompt. */
  body: string[] | null;
  image: StaticImageData;
  imageAlt: string;
  credit: string;
};

export const posts: Post[] = [
  {
    slug: "when-spreadsheets-stop-scaling",
    title: "When spreadsheets stop scaling: signs it’s time for custom software",
    category: "Business Software",
    date: "Sep 2026",
    body: null,
    image: planningStickyNotes,
    imageAlt: "Two people arranging sticky notes on a glass wall while planning a project",
    credit: "Photo by airfocus on Unsplash (unsplash.com/photos/v89zhr0iBFY)",
  },
  {
    slug: "rules-or-models",
    title: "Rules or models? Deciding where AI actually helps",
    category: "AI/ML",
    date: "Aug 2026",
    body: null,
    image: codeOnScreen,
    imageAlt: "Close-up of source code on a dark computer screen",
    credit: "Photo by Chris Ried on Unsplash (unsplash.com/photos/ieic5Tq8YMk)",
  },
  {
    slug: "first-version-should-do-less",
    title: "Your first version should do less than you think",
    category: "Web & SaaS",
    date: "Jul 2026",
    body: null,
    image: laptopAndMug,
    imageAlt: "Laptop, keyboard, and a mug on a wooden desk",
    credit: "Photo by Ryan Riggins, CC0, via Wikimedia Commons",
  },
  {
    slug: "what-to-automate-first",
    title: "What to automate first, and what to leave alone",
    category: "Automation",
    date: "Jun 2026",
    body: null,
    image: robotArmsLab,
    imageAlt: "Yellow robot arms working in an automated laboratory",
    credit:
      "Photo by Maggie Bartlett, National Human Genome Research Institute, public domain, via Wikimedia Commons (cropped)",
  },
  {
    slug: "brief-a-software-team",
    title: "How to brief a software team when you’re not technical",
    category: "Business Software",
    date: "May 2026",
    body: null,
    image: writingInNotebook,
    imageAlt: "Person writing with a pen in an open notebook",
    credit: "Photo by Kristin Hardwick, CC0, via Wikimedia Commons",
  },
];
