"use client";

import Image from "next/image";
import Link from "next/link";
import type { Office } from "@/lib/data/offices";

export default function OfficeCard({ office }: { office: Office }) {
  return (
    <div className="group relative flex flex-col justify-between rounded-[24px] border border-white/[0.08] bg-[#111113]/90 p-7 sm:p-8 md:rounded-[28px] md:p-9 shadow-xl backdrop-blur-md transition-all duration-300 hover:border-white/20">
      <div>
        {/* City Title */}
        <h3 className="font-heading text-xl sm:text-2xl font-semibold text-white tracking-tight pb-6 border-b border-white/[0.08]">
          {office.city} Office
        </h3>

        <div className="mt-6 flex flex-col gap-5 md:gap-6">
          {/* Phone Row */}
          <div className="flex items-center gap-4">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-white/[0.05] border border-white/[0.08]">
              <Image
                src="/icons/telephone.png"
                alt=""
                width={16}
                height={16}
                className="size-4 opacity-80"
              />
            </span>
            <a
              href={`tel:${office.phone.replace(/[^0-9+]/g, "")}`}
              className="font-body text-xs sm:text-sm font-normal text-white/80 transition-colors hover:text-white"
            >
              {office.phone}
            </a>
          </div>

          {/* Address Row */}
          <div className="flex items-start gap-4">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-white/[0.05] border border-white/[0.08]">
              <Image
                src="/icons/message.png"
                alt=""
                width={16}
                height={16}
                className="size-4 opacity-80"
              />
            </span>
            <span className="font-body text-xs sm:text-sm font-normal leading-relaxed text-white/70 max-w-xs">
              {office.address}
            </span>
          </div>
        </div>
      </div>

      {/* View on Map Link */}
      <div className="mt-8 flex justify-end">
        <Link
          href={office.mapUrl || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 font-heading text-xs font-semibold text-brand-red transition-all duration-300 hover:text-red-400 group-hover:translate-x-0.5"
        >
          <span>View on map</span>
          <span aria-hidden="true">&rarr;</span>
        </Link>
      </div>
    </div>
  );
}