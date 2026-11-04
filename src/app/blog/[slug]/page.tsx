import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogPost from "@/components/sections/BlogPost";
import CtaStrip from "@/components/sections/CtaStrip";
import { NextLink } from "@/components/ui/PageLinks";
import { posts } from "@/content/posts";

// Only the posts listed in src/content/posts.ts exist; anything else 404s.
export const dynamicParams = false;

export function generateStaticParams() {
  return posts.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};

  return {
    title: `${post.title} — OneThird`,
    description: `${post.title}. From the OneThird blog.`,
  };
}

export default async function BlogPostPage({ params }: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const index = posts.findIndex((p) => p.slug === slug);
  if (index === -1) notFound();

  const next = posts[(index + 1) % posts.length];

  return (
    <main className="flex-1">
      <BlogPost post={posts[index]} />
      <NextLink href={`/blog/${next.slug}`} label="Next post" title={next.title} />
      <CtaStrip />
    </main>
  );
}
