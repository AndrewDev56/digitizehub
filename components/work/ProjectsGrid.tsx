"use client";

import Image from "next/image";
import FiltersSidebar from "@/components/work/FiltersSidebar";
import WorkProjectCard from "@/components/ui/WorkProjectCard";
import { workProjects } from "@/lib/data/workProjects";
import StaggerContainer, { StaggerItem } from "@/components/animation/StaggerContainer";
import FadeIn from "@/components/animation/FadeIn";

export default function ProjectsGrid() {
  return (
    <section className="relative isolate overflow-visible pb-24 md:pb-32">
      {/* Ambient Eclipse Glow - Left */}
      <div
        aria-hidden="true"
        data-gsap-ambient
        data-gsap-scale="1.1"
        data-gsap-opacity="0.8"
        data-gsap-duration="10"
        className="pointer-events-none absolute top-[30%] -left-[100px] sm:-left-[160px] md:-left-[200px] z-0 w-[420px] sm:w-[600px] md:w-[780px] lg:w-[950px] select-none opacity-75"
      >
        <Image
          src="/images/ellipse-left.png"
          alt=""
          width={950}
          height={950}
          className="h-auto w-full object-contain pointer-events-none"
        />
      </div>

      <div className="relative mx-auto grid max-w-[1632px] grid-cols-1 gap-10 px-6 md:grid-cols-[300px_1fr] lg:grid-cols-[330px_1fr] md:items-start md:gap-12 lg:gap-16 md:px-9">
        <FadeIn direction="right" className="md:sticky md:top-24">
          <FiltersSidebar />
        </FadeIn>

        <StaggerContainer staggerChildren={0.15} className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2">
          {workProjects.map((project, index) => (
            <StaggerItem key={index}>
              <WorkProjectCard project={project} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}