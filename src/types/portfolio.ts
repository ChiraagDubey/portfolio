export type NavItem = {
  label: string;
  href: string;
};

export type SocialLink = {
  label: string;
  href: string;
  icon: "linkedin" | "github" | "mail" | "twitter" | "peerlist";
};

export type SiteConfig = {
  name: string;
  role: string;
  location: string;
  badge: string;
  headline: string;
  subtext: string;
  email: string;
  resumeHref: string;
  profileImageSrc?: string;
  profileImageAlt: string;
  socialLinks: SocialLink[];
  navItems: NavItem[];
  heroConsole: Array<{
    label: string;
    value: string;
  }>;
};

export type Project = {
  title: string;
  tag: string;
  description: string;
  tech: string[];
  metrics: string[];
  repoHref?: string;
  liveHref?: string;
};

export type SkillGroup = {
  title: string;
  items: string[];
};

export type ExperienceItem = {
  company: string;
  role: string;
  location: string;
  period: string;
  description: string;
  bullets: string[];
};

export type LabItem = {
  title: string;
  description: string;
};
