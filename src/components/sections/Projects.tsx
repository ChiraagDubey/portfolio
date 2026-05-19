"use client";

import { useState } from "react";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { SectionReveal } from "@/components/common/SectionReveal";
import { ProjectCard } from "@/components/projects/ProjectCard";
import type { Project } from "@/types/portfolio";

type ProjectsProps = {
  projects: Project[];
};

export function Projects({ projects }: ProjectsProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const visibleProjects = isExpanded ? projects : projects.slice(0, 4);

  return (
    <section id="projects" className="py-20 sm:py-24">
      <Container>
        <SectionReveal>
          <SectionHeading
            eyebrow="Selected Work"
            title="Built around useful AI, clear interfaces, and product-level thinking."
            description="A snapshot of the systems, tools, and interfaces I've been shaping across AI, full-stack development, and developer workflows."
          />
        </SectionReveal>
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {visibleProjects.map((project, index) => (
            <SectionReveal key={project.title} delay={index * 0.05}>
              <ProjectCard project={project} featured={index === 0} />
            </SectionReveal>
          ))}
        </div>
        
        {projects.length > 4 && (
          <SectionReveal delay={0.2} className="mt-12 flex justify-center">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-6 py-2.5 text-sm font-medium text-white/70 transition-all hover:border-cyan/30 hover:bg-white/[0.05] hover:text-white"
            >
              {isExpanded ? "View Less ↑" : "View More ↓"}
            </button>
          </SectionReveal>
        )}
      </Container>
    </section>
  );
}
