import { Container } from "@/components/common/Container";
import { GlowCard } from "@/components/common/GlowCard";
import { Pill } from "@/components/common/Pill";
import { SectionHeading } from "@/components/common/SectionHeading";
import { SectionReveal } from "@/components/common/SectionReveal";
import type { SkillGroup } from "@/types/portfolio";

type SkillsProps = {
  groups: SkillGroup[];
};

export function Skills({ groups }: SkillsProps) {
  return (
    <section id="skills" className="py-20 sm:py-24">
      <Container>
        <SectionReveal>
          <SectionHeading
            eyebrow="Stack & Strengths"
            title="A practical stack shaped around shipping products and iterating fast."
            description="These are the tools, languages, and systems I use most when building AI-first products, web applications, backend workflows, and portfolio automation systems."
          />
        </SectionReveal>
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {groups.map((group, index) => (
            <SectionReveal key={group.title} delay={index * 0.04}>
              <GlowCard className="h-full">
                <h3 className="text-lg font-semibold text-white">{group.title}</h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <Pill key={item} tone="muted">
                      {item}
                    </Pill>
                  ))}
                </div>
              </GlowCard>
            </SectionReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
