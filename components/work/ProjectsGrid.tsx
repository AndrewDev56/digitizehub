import FiltersSidebar from "@/components/work/FiltersSidebar";
import WorkProjectCard from "@/components/ui/WorkProjectCard";
import { workProjects } from "@/lib/data/workProjects";

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
        <div className="md:sticky md:top-24">
          <FiltersSidebar />
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2">
          {workProjects.map((project, index) => (
            <WorkProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}