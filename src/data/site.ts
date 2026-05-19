import type { SiteConfig } from "@/types/portfolio";

export const siteConfig: SiteConfig = {
  name: "Chiraag Dubey",
  role: "Product-minded CSE Student",
  location: "India",
  badge: "Open to work / Building AI-first products",
  headline: "I build products that turn rough ideas into polished digital experiences.",
  subtext:
    "I’m Chiraag Dubey, a product-minded builder from India creating AI-powered tools, full-stack systems, and web products that solve real user friction. I like taking messy ideas, giving them structure, and turning them into useful products — including Level 0, built for early builders who want to ship and show their work better.",
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
