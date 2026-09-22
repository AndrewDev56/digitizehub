import BlogPostCard from "@/components/ui/BlogPostCard";
import { blogPosts } from "@/lib/data/blogPosts";

export default function BlogsSection() {
  return (
    <section className="relative isolate overflow-hidden bg-background pb-24 md:pb-32">
      <div
        aria-hidden
        className="pointer-events-none absolute left-[-300px] top-[300px] size-[600px] rounded-full bg-accent-to/15 blur-[120px]"
      />

      <div className="relative mx-auto max-w-[1632px] px-6 md:px-9">
        <div className="grid grid-cols-1 gap-x-6 gap-y-16 md:grid-cols-3">
          {blogPosts.map((post) => (
            <BlogPostCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}