import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/motion/Reveal";
import { posts } from "@/content/posts";

export default function PostList() {
  return (
    <section className="px-4 pb-20 sm:px-6 lg:px-8 lg:pb-28">
      <ul className="mx-auto max-w-7xl border-b border-line">
        {posts.map((post, i) => (
          <li key={post.slug} className="border-t border-line">
            <Reveal y={30} delay={i * 0.08}>
              <Link
                href={`/blog/${post.slug}`}
                className="group grid gap-5 py-8 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink lg:grid-cols-[minmax(0,2fr)_minmax(0,6fr)_minmax(0,4fr)] lg:items-center lg:gap-10 lg:py-10"
              >
                <span className="text-sm text-muted">{post.category}</span>
                <h2 className="text-pretty text-2xl leading-snug tracking-tight transition-colors group-hover:text-brand sm:text-3xl lg:text-4xl lg:leading-[1.15]">
                  {post.title}
                </h2>
                <div className="order-first aspect-[16/10] overflow-hidden rounded-2xl bg-surface lg:order-none">
                  <Image
                    src={post.image}
                    alt={post.imageAlt}
                    placeholder="blur"
                    sizes="(min-width: 1024px) 400px, 100vw"
                    className="size-full object-cover grayscale transition-[filter,scale] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03] group-hover:grayscale-0 motion-reduce:transition-none"
                  />
                </div>
              </Link>
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  );
}
