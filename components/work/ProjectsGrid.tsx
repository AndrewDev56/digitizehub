"use client";

import FiltersSidebar from "@/components/work/FiltersSidebar";
import WorkProjectCard from "@/components/ui/WorkProjectCard";
import { workProjects } from "@/lib/data/workProjects";
import StaggerContainer, { StaggerItem } from "@/components/animation/StaggerContainer";
import FadeIn from "@/components/animation/FadeIn";

export default function ProjectsGrid() {
  return (
    <section className="relative isolate overflow-hidden bg-background pb-24 md:pb-32">
      <div
        aria-hidden
        className="pointer-events-none absolute top-[40%] -left-40 size-[500px] rounded-full bg-accent-to/15 blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 -right-40 size-[500px] rounded-full bg-accent-to/15 blur-[120px]"
      />

      <div className="relative mx-auto grid max-w-[1632px] grid-cols-1 gap-10 px-6 md:grid-cols-[280px_1fr] md:items-start md:gap-16 md:px-9">
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