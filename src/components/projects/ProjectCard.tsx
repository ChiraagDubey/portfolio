import { ArrowUpRight, Github, Globe } from "lucide-react";
import Link from "next/link";

import { GlowCard } from "@/components/common/GlowCard";
import { Pill } from "@/components/common/Pill";
import type { Project } from "@/types/portfolio";

type ProjectCardProps = {
  project: Project;
  featured?: boolean;
};

const NotionIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <text x="50%" y="50%" dominantBaseline="central" textAnchor="middle" fontWeight="bold" fontSize="20" fontFamily="serif">N</text>
  </svg>
);


export function ProjectCard({ project, featured = false }: ProjectCardProps) {
  const links = [
    project.repoHref
      ? {
          href: project.repoHref,
          label: "GitHub",
          meta: "Review the source and structure",
          icon: Github
        }
      : null,
    project.liveHref
      ? {
          href: project.liveHref,
          label: project.liveHref.includes("notion") ? "Design Doc." : "Live Preview",
          meta: "Open the product experience",
          icon: project.liveHref.includes("notion") ? NotionIcon : Globe
        }
      : null
  ].filter(Boolean) as Array<{
    href: string;
    label: string;
    meta: string;
    icon: typeof Github;
  }>;

  if (project.title === "Coming Soon") {
    return (
      <div className={`flex h-full min-h-[300px] flex-col items-center justify-center rounded-3xl border border-dashed border-white/10 bg-white/[0.01] p-6 shadow-2xl backdrop-blur-2xl transition duration-300 hover:border-white/20 hover:bg-white/[0.03] ${featured ? "lg:col-span-2" : ""}`}>
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/[0.05] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <h3 className="text-xl font-semibold tracking-widest text-white/40 uppercase">{project.title}</h3>
        <p className="mt-3 text-sm font-medium tracking-wide text-white/30">{project.description}</p>
      </div>
    );
  }

  return (
    <GlowCard className={`h-full border-white/10 ${featured ? "lg:col-span-2" : ""}`}>
      <div className="flex h-full flex-col">
        <div className="flex items-center justify-between gap-4">
          <Pill>{project.tag}</Pill>
          {links.length ? (
            <div className="flex items-center justify-end gap-2">
              {links.map(({ href, label, icon: Icon }) => (
                <Link
                  key={`${project.title}-${label}`}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 whitespace-nowrap rounded-2xl border border-white/10 bg-white/[0.03] px-3 py-2 text-xs font-medium text-white/70 transition duration-200 hover:border-cyan/30 hover:bg-white/[0.05] hover:text-white"
                >
                  <Icon className="h-4 w-4 shrink-0" />
                  <span>{label}</span>
                  <ArrowUpRight className="h-3.5 w-3.5 shrink-0 text-white/50 transition group-hover:text-white" />
                </Link>
              ))}
            </div>
          ) : null}
        </div>

        <div className="mt-6">
          <h3 className="text-xl font-semibold tracking-tight text-white">{project.title}</h3>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-white/70">{project.description}</p>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.tech.map((item) => (
            <Pill key={item} tone="muted">
              {item}
            </Pill>
          ))}
        </div>

        {project.metrics.length > 0 && (
          <div className="mt-auto pt-8">
            <div className="flex flex-wrap gap-2">
              {project.metrics.map((metric, index) => (
                <span
                  key={`${project.title}-${index}`}
                  className="whitespace-nowrap rounded-full border border-white/[0.18] bg-white/[0.04] px-2.5 py-[7px] text-xs leading-none text-white/80"
                >
                  {metric}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </GlowCard>
  );
}
