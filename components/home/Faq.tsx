import FaqCard from "@/components/ui/FaqCard";
import { faqItems } from "@/lib/data/faq";

/**
 * 2-column masonry grid (CSS columns, since cards have different heights
 * once the first one is expanded) rather than a single stacked accordion.
 * Only the first card is open by default, matching the Figma screenshot.
 */
export default function Faq() {
  return (
    <section className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-[1024px] px-6 md:px-9">
        <h2 className="font-heading text-4xl font-semibold tracking-[-0.02em] text-white md:text-6xl">
          Frequently Asked{" "}
          <span className="font-accent italic">Questions</span>
        </h2>

        <div className="mt-12 columns-1 gap-4 md:mt-16 md:columns-2 [&>*]:mb-4">
          {faqItems.map((item, index) => (
            <FaqCard key={item.question} item={item} defaultOpen={index === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}