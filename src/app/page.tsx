import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Experience } from "@/components/sections/Experience";
import { Footer } from "@/components/sections/Footer";
import { Hero } from "@/components/sections/Hero";
import { Lab } from "@/components/sections/Lab";
import { Navbar } from "@/components/sections/Navbar";
import { Projects } from "@/components/sections/Projects";
import { ResumeCTA } from "@/components/sections/ResumeCTA";
import { Skills } from "@/components/sections/Skills";
import { experience } from "@/data/experience";
import { labItems } from "@/data/lab";
import { projects } from "@/data/projects";
import { siteConfig } from "@/data/site";
import { skillGroups } from "@/data/skills";

export default function Home() {
  const linkedInHref = "https://www.linkedin.com/in/Chiraag-Dubey";

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-ink text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.08),transparent_32%),radial-gradient(circle_at_top_right,rgba(168,85,247,0.08),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(249,115,22,0.07),transparent_28%)]" />
      <div className="pointer-events-none absolute inset-0 bg-grid bg-[size:56px_56px] opacity-[0.18]" />
      <Navbar items={siteConfig.navItems} resumeHref={siteConfig.resumeHref} />
      <Hero siteConfig={siteConfig} />
      <Projects projects={projects} />
      <About />
      <Skills groups={skillGroups} />
      <Experience items={experience} />
      <Lab items={labItems} />
      <ResumeCTA resumeHref={siteConfig.resumeHref} linkedInHref={linkedInHref} />
      <Contact email={siteConfig.email} socialLinks={siteConfig.socialLinks} />
      <Footer name={siteConfig.name} role={siteConfig.role} socialLinks={siteConfig.socialLinks} />
    </main>
  );
}
