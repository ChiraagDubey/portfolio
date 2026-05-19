import { Container } from "@/components/common/Container";
import { GlowCard } from "@/components/common/GlowCard";
import { SectionHeading } from "@/components/common/SectionHeading";
import { SectionReveal } from "@/components/common/SectionReveal";
import type { ExperienceItem } from "@/types/portfolio";

type ExperienceProps = {
  items: ExperienceItem[];
};

export function Experience({ items }: ExperienceProps) {
  const entry = items[0];

  return (
    <section id="experience" className="py-16 sm:py-20">
      <Container>
        <SectionReveal>
          <SectionHeading
            eyebrow="Experience"
            title="Cross-functional work that sharpened communication, content strategy, and execution."
            description="Alongside engineering, I've worked in roles that strengthened my understanding of messaging, audience fit, campaign planning, and performance-driven iteration."
          />
        </SectionReveal>
        {entry ? (
          <SectionReveal delay={0.08}>
            <GlowCard className="mt-10">
              <div className="flex flex-col gap-3 border-b border-white/8 pb-6 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.25em] text-cyan/70">{entry.company}</p>
                  <h3 className="mt-3 text-xl font-semibold text-white">{entry.role}</h3>
                  <p className="mt-2 text-sm text-white/60">
                    {entry.location} / {entry.period}
                  </p>
                </div>
                <p className="max-w-md text-sm leading-7 text-white/70">{entry.description}</p>
              </div>
              <ul className="mt-6 grid gap-4 sm:grid-cols-2">
                {entry.bullets.map((bullet) => (
                  <li key={bullet} className="rounded-2xl border border-white/8 bg-black/15 px-4 py-4 text-sm text-white/70">
                    {bullet}
                  </li>
                ))}
              </ul>
            </GlowCard>
          </SectionReveal>
        ) : null}
      </Container>
    </section>
  );
}
