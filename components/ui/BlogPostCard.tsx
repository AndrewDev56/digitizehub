import Image from "next/image";
import type { BlogPost } from "@/lib/data/blogPosts";

export default function BlogPostCard({ post }: { post: BlogPost }) {
  return (
    <article>
      <div className="relative h-[378px] w-full overflow-hidden rounded-[24px] bg-white/[0.03]">
        <Image
          src={post.image}
          alt=""
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 33vw, 100vw"
        />
      </div>

      <div className="mt-6 flex items-center gap-3">
        <span className="size-[6px] shrink-0 rounded-full bg-accent-to" />
        <span className="font-body text-lg font-light text-white/60">
          {post.date}
        </span>
      </div>

      <h3 className="mt-4 font-heading text-[40px] leading-[1.1] text-white">
        {post.title}
      </h3>

      <p className="mt-4 font-body text-xl leading-[1.4] text-white/80">
        {post.excerpt}
      </p>

      <div className="mt-8 flex flex-wrap items-center gap-2">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-[30px] bg-white/10 px-[18px] py-3 font-body text-sm font-medium text-white/80 shadow-[0px_6px_16px_0px_rgba(0,0,0,0.08)]"
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}