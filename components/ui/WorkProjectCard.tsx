import Image from "next/image";
import Tag from "@/components/ui/Tag";
import { workProjectDescription, type WorkProject } from "@/lib/data/workProjects";

export default function WorkProjectCard({ project }: { project: WorkProject }) {
  return (
    <div>
      <div className="relative aspect-[504/378] w-full overflow-hidden rounded-[24px] md:rounded-[30px]">
        <Image
          src={project.image}
          alt="Project Title"
          fill
          sizes="(min-width: 768px) 504px, 100vw"
          className="object-cover"
        />
      </div>

      <h3 className="mt-6 font-heading text-2xl font-semibold tracking-[-0.01em] text-white md:text-3xl">
        Project Title
      </h3>

      <p className="mt-2 max-w-[390px] font-body text-base text-white/80 md:text-xl">
        {workProjectDescription}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>
    </div>
  );
}