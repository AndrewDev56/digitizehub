import Image from "next/image";
import type { LifecycleStep } from "@/lib/data/lifecycleSteps";

export default function LifecycleStepCard({
  step,
  isLast,
}: {
  step: LifecycleStep;
  isLast: boolean;
}) {
  return (
    <div className=" p-6">
      <h3 className="font-accent text-3xl text-white italic md:text-5xl">
        {step.title}
      </h3>
      <p className="mt-2 max-w-xs font-body text-sm text-white/60 italic md:text-base">
        {step.description}
      </p>

      {!isLast && (
        <Image
          src="/images/lifecycle-arrow.png"
          alt=""
          width={35}
          height={35}
          className="mt-3 ml-2 opacity-70 h-[100px] w-[100px]"
        />
      )}
    </div>
  );
}