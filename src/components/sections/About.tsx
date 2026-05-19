import { Container } from "@/components/common/Container";
import { GlowCard } from "@/components/common/GlowCard";
import { Pill } from "@/components/common/Pill";
import { SectionHeading } from "@/components/common/SectionHeading";
import { SectionReveal } from "@/components/common/SectionReveal";

const highlights = [
  "AI-powered tools",
  "Full-stack systems",
  "Product thinking",
  "Clean interfaces",
  "Beginner-friendly software"
];

const focusAreas = [
  {
    title: "What I build",
    description: "AI-assisted products, full-stack tools, and web experiences built around clear user problems."
  },
  {
    title: "How I work",
    description: "I prefer focused interfaces, fast iteration, and practical product decisions. I use AI tools heavily, but I care about understanding, debugging, and improving what I build."
  },
  {
    title: "What I care about",
    description: "Useful software, strong UX judgment, and products that help users save time, understand faster, and take action with less friction."
  }
];

export function About() {
  return (
    <section id="about" className="py-16 sm:py-20">
      <Container>
        <SectionReveal>
          <SectionHeading
            eyebrow="About Me"
            title="I build software that feels useful, fast, and easy to trust."
            description={
              <>
                I’m a product-minded builder working across AI tools, full-stack systems, and clean web experiences. I like turning rough ideas into simple, usable products that solve real friction.
                <br />
                Right now, I’m building tools like Level 0, ResumAI, and privacy-first AI utilities focused on clarity, speed, and better user experiences.
              </>
            }
          />
        </SectionReveal>
        <SectionReveal delay={0.08}>
          <div className="mt-10 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
            <GlowCard className="rounded-[2rem] p-7 sm:p-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan/78">Profile</p>
                  <h3 className="mt-4 max-w-md text-xl font-semibold tracking-tight text-white sm:text-2xl">
                    I build products that reduce friction and make decisions easier.
                  </h3>
                </div>
                <div className="hidden h-12 w-12 items-center justify-center -translate-y-5 lg:flex">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#f2cf66]/35 opacity-60" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#f2cf66]/80 shadow-[0_0_14px_rgba(242,207,102,0.35)]" />
                  </span>
                </div>
              </div>
              <p className="mt-6 max-w-2xl text-sm leading-7 text-white/70">
                I’m drawn to tools that remove busywork, simplify complex tasks, and feel polished without being overdesigned. I like working on products where AI, design, and engineering come together to create something practical, fast, and genuinely useful.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                {highlights.map((highlight, index) => (
                  <Pill key={highlight} tone={index === 2 ? "warm" : "default"}>
                    {highlight}
                  </Pill>
                ))}
              </div>
            </GlowCard>

            <div className="grid gap-4">
              {focusAreas.map((area, index) => (
                <GlowCard key={area.title} className="rounded-[1.75rem] p-6">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-xs font-semibold text-white/70">
                      0{index + 1}
                    </span>
                    <h3 className="text-sm font-semibold text-white">{area.title}</h3>
                  </div>
                  <p className="mt-3 text-xs leading-6 text-white/70">{area.description}</p>
                </GlowCard>
              ))}
            </div>
          </div>
        </SectionReveal>
      </Container>
    </section>
  );
}
