"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Tag from "@/components/ui/Tag";
import { workProjectDescription, type WorkProject } from "@/lib/data/workProjects";

export default function WorkProjectCard({ project }: { project: WorkProject }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      className="group cursor-pointer"
    >
      <div className="relative aspect-[504/378] w-full overflow-hidden rounded-[24px] md:rounded-[30px] border border-white/10 shadow-xl bg-neutral-900">
        <Image
          src={project.image}
          alt="Project Title"
          fill
          sizes="(min-width: 768px) 504px, 100vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
        />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>

      <h3 className="mt-6 font-heading text-2xl font-semibold tracking-[-0.01em] text-white md:text-3xl transition-colors group-hover:text-accent-from">
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
    </motion.div>
  );
}