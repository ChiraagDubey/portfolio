import type { SiteConfig } from "@/types/portfolio";

export const siteConfig: SiteConfig = {
  name: "Chiraag Dubey",
  role: "Product-minded CSE Student",
  location: "India",
  badge: "Open to work / Building AI-first products",
  headline: "I build products that turn rough ideas into polished digital experiences.",
  subtext:
    "I’m Chiraag Dubey, a builder from India who enjoys turning messy ideas into useful digital products. I work on AI tools, full-stack apps, and simple web experiences that solve real problems. Right now, I’m building Level 0, a portfolio builder for early builders who want to put their work online without getting stuck on design or setup.",
  email: "chiraagdubey72004@gmail.com",
  resumeHref: "https://drive.google.com/file/d/1GIYtQmUzf_60vzTrwSgagsSR3JoRvtzb/view?usp=drive_link",
  profileImageSrc: "/images/profile/chiraag-hero.jpg.png",
  profileImageAlt: "Portrait of Chiraag Dubey",
  socialLinks: [
    {
      label: "GitHub",
      href: "https://github.com/ChiraagDubey",
      icon: "github"
    },
    {
      label: "Twitter",
      href: "https://x.com/chiraagdubey",
      icon: "twitter"
    },
    {
      label: "Peerlist",
      href: "https://peerlist.io/chiraagdubey",
      icon: "peerlist"
    },
    {
      label: "Email",
      href: "mailto:chiraagdubey72004@gmail.com",
      icon: "mail"
    }
  ],
  navItems: [
    { label: "Work", href: "#projects" },
    { label: "About", href: "#about" },
    { label: "Stack", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Lab", href: "#lab" },
    { label: "Contact", href: "#contact" }
  ],
  heroConsole: [
    { label: "current_focus", value: "AI products + beginner-friendly portfolio tools" },
    { label: "stack", value: "Next.js / TypeScript / Java / Go / Supabase" },
    { label: "building", value: "Level 0 + intelligent product tools + privacy-first systems" },
    { label: "status", value: "open_to_work" },
    { label: "builder_console", value: "shipping fast, learning faster" }
  ]
};
