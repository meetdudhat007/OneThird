import type { StaticImageData } from "next/image";

/**
 * Team shown on the About page. Null fields show a visible [NEEDS INPUT]
 * prompt, so never fill them with invented names, roles, or experience.
 * Photos go in public/images/team/.
 *
 * NEEDS INPUT: the team is 4-5 people; set one entry per real person.
 */
export type TeamMember = {
  name: string | null;
  role: string | null;
  bio: string | null;
  photo: StaticImageData | null;
  linkedin: string | null;
};

const empty: TeamMember = { name: null, role: null, bio: null, photo: null, linkedin: null };

export const team: TeamMember[] = [empty, empty, empty, empty];
