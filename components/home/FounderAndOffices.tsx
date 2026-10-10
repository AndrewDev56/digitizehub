"use client";

import { offices } from "@/lib/data/offices";
import OfficeCard from "@/components/ui/OfficeCard";
import FadeIn from "@/components/animation/FadeIn";
import StaggerContainer, { StaggerItem } from "@/components/animation/StaggerContainer";

export default function FounderAndOffices() {
  return (
    <section className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-[1632px] px-6 md:px-9">
        <FadeIn direction="up">
          <h2 className="font-heading text-4xl font-semibold tracking-[-0.02em] text-white sm:text-5xl md:text-6xl">
            Offices
          </h2>
        </FadeIn>

        <StaggerContainer
          staggerChildren={0.15}
          className="mt-10 grid grid-cols-1 gap-6 md:mt-14 md:grid-cols-2 md:gap-8"
        >
          {offices.map((office) => (
            <StaggerItem key={office.city}>
              <OfficeCard office={office} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

