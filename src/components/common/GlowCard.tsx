import { ReactNode } from "react";

type GlowCardProps = {
  children: ReactNode;
  className?: string;
};

export function GlowCard({ children, className = "" }: GlowCardProps) {
  return (
    <div
      className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-card backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-cyan/30 ${className}`}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.14),transparent_32%),radial-gradient(circle_at_bottom_left,rgba(249,115,22,0.12),transparent_28%)] opacity-70" />
      <div className="relative">{children}</div>
    </div>
  );
}
