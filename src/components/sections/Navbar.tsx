"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { ButtonLink } from "@/components/common/ButtonLink";
import { Container } from "@/components/common/Container";
import type { NavItem } from "@/types/portfolio";

type NavbarProps = {
  items: NavItem[];
  resumeHref: string;
};

export function Navbar({ items, resumeHref }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/8 bg-ink/80 backdrop-blur-md">
      <Container className="flex min-h-[72px] items-center justify-between gap-4">
        <Link href="#home" className="text-sm font-semibold uppercase tracking-[0.3em] text-white">
          Chiraag Dubey
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {items.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm text-white/70 transition hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <ButtonLink href={resumeHref} external>Resume</ButtonLink>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white md:hidden"
          onClick={() => setIsOpen((current) => !current)}
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </Container>

      {isOpen ? (
        <div className="border-t border-white/8 md:hidden">
          <Container className="flex flex-col gap-5 py-5">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-white/70"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <ButtonLink href={resumeHref} external>Resume</ButtonLink>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
