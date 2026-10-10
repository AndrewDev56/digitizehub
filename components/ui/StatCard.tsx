import Image from "next/image";
import type { Stat } from "@/lib/data/stats";

export default function StatCard({ stat }: { stat: Stat }) {
  return (
    <div className="flex flex-col items-center text-center">
      {stat.graphic ? (
        <Image
          src={stat.graphic}
          alt={stat.title}
          width={stat.graphicWidth || 400}
          height={stat.graphicHeight || 140}
          className="h-[100px] w-auto md:h-[140px]"
        />
      ) : (
        <span className="font-heading text-7xl font-bold tracking-tight text-[#9A9A9A] md:text-8xl lg:text-[130px]">
          {stat.value}
        </span>
      )}

      <h3 className="mt-8 font-heading text-xl font-semibold tracking-[-0.01em] text-white md:mt-10 md:text-2xl">
        {stat.title}
      </h3>

      <p className="mt-3 max-w-[471px] font-body text-base leading-[1.3] tracking-[-0.01em] text-white/80 md:mt-[44px] md:text-xl">
        {stat.description}
      </p>
    </div>
  );
}