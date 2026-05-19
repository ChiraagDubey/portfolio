import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

type ButtonLinkProps = {
  href: string;
  children: string;
  variant?: "primary" | "secondary" | "ghost";
  external?: boolean;
};

export function ButtonLink({ href, children, variant = "primary", external = false }: ButtonLinkProps) {
  const classes =
    variant === "primary"
      ? "border-cyan/40 bg-cyan/14 text-white hover:border-cyan/60 hover:bg-cyan/18"
      : variant === "secondary"
        ? "border-white/12 bg-white/6 text-white hover:border-white/25 hover:bg-white/10"
        : "border-transparent bg-transparent text-white/70 hover:text-white";

  const sharedProps = external
    ? { target: "_blank", rel: "noreferrer" }
    : {};

  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-2 rounded-full border px-5 py-3 text-sm font-medium transition duration-200 hover:-translate-y-0.5 ${classes}`}
      {...sharedProps}
    >
      <span>{children}</span>
      {external ? <ArrowUpRight className="h-4 w-4" /> : null}
    </Link>
  );
}
