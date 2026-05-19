import Link from "next/link";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

import type { SocialLink } from "@/types/portfolio";

type SocialLinksProps = {
  links: SocialLink[];
  className?: string;
  tooltips?: Record<string, string>;
};

export function SocialLinks({ links, className = "", tooltips }: SocialLinksProps) {
  const iconMap = {
    linkedin: Linkedin,
    github: Github,
    mail: Mail,
    twitter: Twitter
  } as const;

  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      {links.map(({ label, href, icon }) => {
        const resolvedHref = icon === "mail" && !href.startsWith("mailto:") ? `mailto:${href}` : href;
        const Icon = icon === "peerlist" ? null : iconMap[icon];
        const tooltip = tooltips?.[label];

        return (
          <div key={label} className="group relative">
            {tooltip ? (
              <div className="pointer-events-none absolute bottom-[calc(100%+0.7rem)] left-1/2 z-10 w-max max-w-[240px] -translate-x-1/2 rounded-2xl border border-white/12 bg-[#12151d]/95 px-3 py-2 text-xs text-white opacity-0 shadow-[0_18px_40px_rgba(0,0,0,0.28)] backdrop-blur-md transition duration-200 group-hover:opacity-100 group-focus-within:opacity-100">
                {tooltip}
              </div>
            ) : null}
            <Link
              href={resolvedHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/78 transition duration-200 hover:border-cyan/35 hover:text-white"
            >
              {Icon ? (
                <Icon className="h-4 w-4" />
              ) : (
                <span className="inline-flex h-4 w-4 items-center justify-center text-[0.7rem] font-semibold leading-none">P</span>
              )}
              <span>{label}</span>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
