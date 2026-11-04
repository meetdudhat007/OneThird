import Image from "next/image";
import MaskedLine from "@/components/motion/MaskedLine";
import { BackLink } from "@/components/ui/PageLinks";
import type { Post } from "@/content/posts";

export default function BlogPost({ post }: { post: Post }) {
  return (
    <article className="px-4 pb-20 pt-16 sm:px-6 lg:px-8 lg:pb-28 lg:pt-24">
      <div className="mx-auto max-w-7xl">
        <BackLink href="/blog">All posts</BackLink>

        <header className="mt-10 max-w-4xl">
          <p className="text-sm text-muted">{post.category}</p>
          <h1 className="mt-4 text-balance text-4xl leading-[1.05] tracking-[-0.03em] sm:text-5xl lg:text-6xl">
            <MaskedLine delay="0ms">{post.title}</MaskedLine>
          </h1>
        </header>

        <div
          className="mt-10 aspect-[16/9] overflow-hidden rounded-3xl bg-surface animate-fade-up motion-reduce:animate-none lg:mt-14"
          style={{ animationDelay: "200ms" }}
        >
          <Image
            src={post.image}
            alt={post.imageAlt}
            placeholder="blur"
            loading="eager"
            sizes="(min-width: 1344px) 1280px, 100vw"
            className="size-full object-cover grayscale"
          />
        </div>

        <div className="mx-auto mt-12 max-w-2xl lg:mt-16">
          {post.body ? (
            post.body.map((paragraph) => (
              <p
                key={paragraph}
                className="mt-6 text-pretty text-lg leading-relaxed text-ink-soft first:mt-0"
              >
                {paragraph}
              </p>
            ))
          ) : (
            <p className="text-pretty text-lg leading-relaxed text-muted">
              [NEEDS INPUT] Post text. The title above is a placeholder until the team writes
              this post.
            </p>
          )}
        </div>
      </div>
    </article>
  );
}
