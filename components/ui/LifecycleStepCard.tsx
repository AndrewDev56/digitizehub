import Image from "next/image";
import type { LifecycleStep } from "@/lib/data/lifecycleSteps";

export default function LifecycleStepCard({
  step,
  isFirst,
  isLast,
}: {
  step: LifecycleStep;
  isFirst: boolean;
  isLast: boolean;
}) {
  return (
    <div className="flex items-start">
      {!isFirst && (
        <div className="flex w-[190px] shrink-0 justify-start pt-1">
          <Image
            src="/icons/lifecycle-arrow.svg"
            alt=""
            width={90}
            height={90}
            className="size-[70px] rotate-2 opacity-80 md:size-[90px]"
          />
        </div>
      )}

      <div className="max-w-[390px]">
        <h3 className="font-accent text-4xl text-white italic md:text-6xl">
          {step.title}
        </h3>
        <p className="mt-2 font-body text-lg leading-[1.3] text-white/80 italic">
          {step.description}
        </p>

        {!isLast && (
          <div aria-hidden className="mt-6 h-px w-full bg-[#222]" />
        )}
      </div>
    </div>
  );
}