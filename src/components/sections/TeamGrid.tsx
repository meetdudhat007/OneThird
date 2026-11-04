import Image from "next/image";
import Reveal from "@/components/motion/Reveal";
import { team, type TeamMember } from "@/content/team";

function Portrait({ member }: { member: TeamMember }) {
  if (member.photo) {
    return (
      <Image
        src={member.photo}
        alt={member.name ?? ""}
        placeholder="blur"
        sizes="(min-width: 1024px) 300px, 50vw"
        className="size-full object-cover"
      />
    );
  }

  // Neutral stand-in. Never swap in a stranger's photo here.
  return (
    <div className="relative size-full">
      <svg
        viewBox="0 0 240 300"
        preserveAspectRatio="xMidYMax slice"
        aria-hidden="true"
        className="size-full"
      >
        <circle cx="120" cy="118" r="52" className="fill-muted/25" />
        <path d="M28 300c6-76 44-122 92-122s86 46 92 122z" className="fill-muted/25" />
      </svg>
      <p className="absolute inset-x-0 top-4 text-center text-sm text-muted">
        [NEEDS INPUT] Photo
      </p>
    </div>
  );
}

export default function TeamGrid() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <h2 className="text-4xl leading-[1.05] tracking-tight sm:text-5xl">
            Meet the <em>team</em>
          </h2>
        </Reveal>

        <ul className="mt-14 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 lg:mt-16 lg:grid-cols-4">
          {team.map((member, i) => (
            <li key={i}>
              <Reveal delay={i * 0.08}>
                <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-surface">
                  <Portrait member={member} />
                </div>
                <h3 className={`mt-5 text-xl tracking-tight ${member.name ? "" : "text-muted"}`}>
                  {member.name ?? "[NEEDS INPUT] Name"}
                </h3>
                <p className="mt-1 text-sm text-muted">{member.role ?? "[NEEDS INPUT] Role"}</p>
                <p
                  className={`mt-3 text-pretty leading-relaxed ${
                    member.bio ? "text-ink-soft" : "text-muted"
                  }`}
                >
                  {member.bio ?? "[NEEDS INPUT] Short bio"}
                </p>
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-block text-sm underline underline-offset-4 hover:no-underline"
                  >
                    LinkedIn
                  </a>
                )}
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
