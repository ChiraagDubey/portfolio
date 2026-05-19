"use client";

import { motion } from "framer-motion";

import { SocialLinks } from "@/components/contact/SocialLinks";
import { ButtonLink } from "@/components/common/ButtonLink";
import { Container } from "@/components/common/Container";
import { Pill } from "@/components/common/Pill";
import { BuilderConsole } from "@/components/hero/BuilderConsole";
import { HeroPortrait } from "@/components/hero/HeroPortrait";
import type { SiteConfig } from "@/types/portfolio";

type HeroProps = {
  siteConfig: SiteConfig;
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export function Hero({ siteConfig }: HeroProps) {
  const linkedInLink = siteConfig.socialLinks.find((link) => link.label === "LinkedIn");
  const secondarySocialLinks = siteConfig.socialLinks.filter((link) => link.label !== "LinkedIn");

  return (
    <section id="home" className="relative overflow-hidden py-20 sm:py-24 lg:py-28">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
          <motion.div
            initial="hidden"
            animate="show"
            transition={{ staggerChildren: 0.1, duration: 0.45 }}
            className="max-w-2xl"
          >
            <motion.div variants={itemVariants}>
              <Pill>{siteConfig.badge}</Pill>
            </motion.div>
            <motion.p variants={itemVariants} className="mt-6 text-sm uppercase tracking-[0.28em] text-white/52">
              {siteConfig.name} / {siteConfig.location}
            </motion.p>
            <motion.h1
              variants={itemVariants}
              className="mt-6 text-5xl font-semibold tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl"
            >
              {siteConfig.headline}
            </motion.h1>
            <motion.p variants={itemVariants} className="mt-6 max-w-xl text-lg leading-8 text-white/70">
              {siteConfig.subtext}
            </motion.p>
            <motion.div variants={itemVariants} className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="#projects">View Projects</ButtonLink>
              <ButtonLink href={siteConfig.resumeHref} variant="secondary" external>
                Download Resume
              </ButtonLink>
              {linkedInLink ? (
                <ButtonLink href={linkedInLink.href} variant="secondary" external>
                  Connect on LinkedIn
                </ButtonLink>
              ) : null}
            </motion.div>
            <motion.div variants={itemVariants}>
              <SocialLinks
                links={secondarySocialLinks}
                className="mt-8"
                tooltips={{ Twitter: "X? Never heard of her. It’s Twitter." }}
              />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 }}
            className="grid gap-5"
          >
            <HeroPortrait
              src={siteConfig.profileImageSrc}
              alt={siteConfig.profileImageAlt}
              name={siteConfig.name}
              role={siteConfig.role}
            />
            <BuilderConsole items={siteConfig.heroConsole} />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
