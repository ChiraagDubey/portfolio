import Link from "next/link";

import { Container } from "@/components/common/Container";
import type { SocialLink } from "@/types/portfolio";

type FooterProps = {
  name: string;
  role: string;
  socialLinks: SocialLink[];
};

export function Footer({ name, role, socialLinks }: FooterProps) {
  return (
    <footer className="border-t border-white/8 py-8">
      <Container className="flex flex-col gap-4 text-sm text-white/56 sm:flex-row sm:items-center sm:justify-between">
        <div>
          {name} / {role}
        </div>
        <div className="flex flex-wrap gap-4">
          {socialLinks.map((link) => (
            <Link
              key={link.label}
              href={link.icon === "mail" && !link.href.startsWith("mailto:") ? `mailto:${link.href}` : link.href}
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </Container>
    </footer>
  );
}
