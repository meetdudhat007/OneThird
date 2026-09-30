import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/motion/Reveal";
import { posts } from "@/content/posts";

export default function BlogPreview() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <Reveal className="flex items-end justify-between gap-6">
          <h2 className="text-4xl leading-[1.05] tracking-tight sm:text-5xl">
            From the <em>blog</em>
          </h2>
          <Link
            href="/blog"
            className="group mb-1 inline-flex shrink-0 items-center gap-2 text-sm text-ink-soft transition-colors hover:text-ink"
          >
            All posts
            <svg viewBox="0 0 16 16" aria-hidden="true" className="size-4 transition-transform duration-300 group-hover:translate-x-0.5">
              <path d="M3 8h10M9 4l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.25" />
            </svg>
          </Link>
        </Reveal>

        <ul className="mt-14 grid gap-12 md:grid-cols-2 md:gap-8 lg:mt-16">
          {posts.map((post, i) => (
            <li key={post.slug}>
              <Reveal delay={i * 0.12}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
                >
                  <div className="aspect-[16/10] overflow-hidden rounded-2xl bg-surface">
                    <Image
                      src={post.image}
                      alt={post.imageAlt}
                      placeholder="blur"
                      sizes="(min-width: 1280px) 624px, (min-width: 768px) 50vw, 100vw"
                      className="size-full object-cover grayscale transition-[filter,scale] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03] group-hover:grayscale-0 motion-reduce:transition-none"
                    />
                  </div>
                  <p className="mt-5 flex justify-between gap-4 text-sm text-muted">
                    <span>{post.category}</span>
                    <span>{post.date}</span>
                  </p>
                  <h3 className="mt-3 text-pretty text-xl leading-snug tracking-tight group-hover:underline group-hover:underline-offset-4">
                    {post.title}
                  </h3>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
