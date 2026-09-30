import type { StaticImageData } from "next/image";
import codeOnScreen from "../../public/images/blog/code-on-screen.jpg";
import planningStickyNotes from "../../public/images/blog/planning-sticky-notes.jpg";

/**
 * Blog posts shown on the home page (and later the Blog pages).
 *
 * DUMMY CONTENT: titles and dates are placeholders at the team's request,
 * to be replaced with real posts. Images are free Unsplash photos
 * (Unsplash License, attribution not required but recorded in `credit`).
 */
export type Post = {
  slug: string;
  title: string;
  category: string;
  /** DUMMY until real posts exist. */
  date: string;
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
    image: planningStickyNotes,
    imageAlt: "Two people arranging sticky notes on a glass wall while planning a project",
    credit: "Photo by airfocus on Unsplash (unsplash.com/photos/v89zhr0iBFY)",
  },
  {
    slug: "rules-or-models",
    title: "Rules or models? Deciding where AI actually helps",
    category: "AI/ML",
    date: "Aug 2026",
    image: codeOnScreen,
    imageAlt: "Close-up of source code on a dark computer screen",
    credit: "Photo by Chris Ried on Unsplash (unsplash.com/photos/ieic5Tq8YMk)",
  },
];
