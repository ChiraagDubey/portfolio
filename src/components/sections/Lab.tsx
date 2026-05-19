import { Container } from "@/components/common/Container";
import { GlowCard } from "@/components/common/GlowCard";
import { SectionHeading } from "@/components/common/SectionHeading";
import { SectionReveal } from "@/components/common/SectionReveal";
import type { LabItem } from "@/types/portfolio";

type LabProps = {
  items: LabItem[];
};

export function Lab({ items }: LabProps) {
  return (
    <section id="lab" className="py-20 sm:py-24">
      <Container>
        <SectionReveal>
          <SectionHeading
            eyebrow="Lab"
            title="A place for side experiments, interface ideas, and systems curiosity."
            description="These smaller explorations reflect how I think: iterate quickly, test unusual ideas, and stay close to useful real-world outcomes."
          />
        </SectionReveal>
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {items.map((item, index) => (
            <SectionReveal key={item.title} delay={index * 0.04}>
              <GlowCard className="h-full">
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/70">{item.description}</p>
              </GlowCard>
            </SectionReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
