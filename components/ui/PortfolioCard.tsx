import Image from "next/image";
import Tag from "@/components/ui/Tag";
import type { PortfolioItem } from "@/lib/data/portfolio";

export default function PortfolioCard({
  item,
  className = "",
}: {
  item: PortfolioItem;
  className?: string;
}) {
  return (
    <div
      className={`group relative w-full overflow-hidden rounded-[30px] md:rounded-[60px] ${className}`}
      style={{ aspectRatio: `${item.imageWidth} / ${item.imageHeight}` }}
    >
      <Image
        src={item.image}
        alt={item.title}
        fill
        sizes="(min-width: 768px) 50vw, 100vw"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />

      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent"
      />

      <div className="absolute top-5 right-5 flex flex-wrap justify-end gap-2 md:top-8 md:right-8">
        {item.tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>

      <h3 className="absolute bottom-5 left-5 font-heading text-xl font-semibold text-white md:bottom-8 md:left-8 md:text-3xl">
        {item.title}
      </h3>
    </div>
  );
}