import type { Metadata } from "next";
import BlogIntro from "@/components/sections/BlogIntro";
import CtaStrip from "@/components/sections/CtaStrip";
import PostList from "@/components/sections/PostList";

export const metadata: Metadata = {
  title: "Blog — OneThird",
  description:
    "Practical writing on custom software, AI, and automation from the OneThird team.",
};

export default function BlogPage() {
  return (
    <main className="flex-1">
      <BlogIntro />
      <PostList />
      <CtaStrip />
    </main>
  );
}
