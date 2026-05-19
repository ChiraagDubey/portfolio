import { SocialLinks } from "@/components/contact/SocialLinks";
import { ButtonLink } from "@/components/common/ButtonLink";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { SectionReveal } from "@/components/common/SectionReveal";
import type { SocialLink } from "@/types/portfolio";

type ContactProps = {
  email: string;
  socialLinks: SocialLink[];
};

export function Contact({ email, socialLinks }: ContactProps) {
  return (
    <section id="contact" className="py-20 sm:py-24">
      <Container>
        <SectionReveal>
          <SectionHeading
            eyebrow="Contact"
            title="Let's build something useful."
            description="If you're hiring, collaborating, or just want to talk through product ideas, I'm happy to connect."
          />
        </SectionReveal>
        <SectionReveal delay={0.08} className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <ButtonLink href={`mailto:${email}`}>Get in touch</ButtonLink>
          <SocialLinks links={socialLinks} />
        </SectionReveal>
      </Container>
    </section>
  );
}
