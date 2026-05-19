import { ButtonLink } from "@/components/common/ButtonLink";
import { Container } from "@/components/common/Container";
import { GlowCard } from "@/components/common/GlowCard";
import { SectionReveal } from "@/components/common/SectionReveal";

type ResumeCTAProps = {
  resumeHref: string;
  linkedInHref?: string;
};

export function ResumeCTA({ resumeHref, linkedInHref }: ResumeCTAProps) {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <SectionReveal>
          <GlowCard className="rounded-[2rem] border-cyan/18 px-6 py-10 sm:px-8 sm:py-12">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div className="max-w-2xl">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan/78">Resume CTA</p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  Looking for someone who thinks in products and builds with execution discipline.
                </h2>
                <p className="mt-4 text-base leading-7 text-white/70">
                  I’m actively building AI-first tools, portfolio systems, and full-stack products, and I’m open to internships where I can contribute across product thinking, implementation, experimentation, and iteration.
                  <br />
                  <br />
                  I enjoy working on products where I can combine engineering, UX thinking, AI workflows, and fast execution to create something people can actually use.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 lg:justify-end">
                <ButtonLink href={resumeHref} external>Download Resume</ButtonLink>
                {linkedInHref ? (
                  <ButtonLink href={linkedInHref} variant="secondary" external>
                    Connect on LinkedIn
                  </ButtonLink>
                ) : null}
              </div>
            </div>
          </GlowCard>
        </SectionReveal>
      </Container>
    </section>
  );
}
