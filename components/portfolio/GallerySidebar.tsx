import Button from "@/components/ui/Button";
import {
  portfolioCategories,
  portfolioCategoryCounts,
  type PortfolioCategory,
} from "@/lib/data/portfolioGallery";

export default function GallerySidebar({
  active,
  onChange,
}: {
  active: "all" | PortfolioCategory;
  onChange: (id: "all" | PortfolioCategory) => void;
}) {
  return (
    <div
      className="rounded-[20px] border border-white/20 p-5 sm:p-6"
      style={{
        backgroundImage:
          "linear-gradient(146deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 100%)",
      }}
    >
      <h3 className="font-heading text-xl font-semibold text-white sm:text-2xl">
        Categories
      </h3>

      <div className="mt-5 flex flex-col gap-2">
        {portfolioCategories.map((category) => {
          const isActive = category.id === active;
          const count = portfolioCategoryCounts[category.id] ?? 0;

          return (
            <button
              key={category.id}
              type="button"
              aria-pressed={isActive}
              onClick={() => onChange(category.id)}
              className={`flex w-full items-center justify-between rounded-[30px] px-5 py-3.5 text-left font-body text-base shadow-[0_6px_16px_0_rgba(0,0,0,0.08)] transition-colors ${
                isActive
                  ? "font-semibold text-[#111]"
                  : "font-medium text-white/80 hover:bg-white/10 hover:text-white"
              }`}
              style={{
                backgroundColor: isActive
                  ? "#ffffff"
                  : "rgba(255,255,255,0.08)",
                letterSpacing: isActive ? "-0.16px" : undefined,
              }}
            >
              <span>{category.label}</span>
              <span className={isActive ? "text-black/50" : "text-white/40"}>
                {count}
              </span>
            </button>
          );
        })}
      </div>

      <div className="mt-8 flex justify-center">
        <Button
          href="/contact"
          size="md"
          className="w-full !h-[50px] !pl-4 !pr-2 !gap-2 !text-[13px] sm:!text-[14px] !justify-between shadow-lg"
        >
          Let&apos;s Discuss Your Project
        </Button>
      </div>
    </div>
  );
}
