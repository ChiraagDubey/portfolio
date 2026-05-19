import Image from "next/image";

import { GlowCard } from "@/components/common/GlowCard";

type HeroPortraitProps = {
  src?: string;
  alt: string;
  name: string;
  role: string;
};

export function HeroPortrait({ src, alt, name, role }: HeroPortraitProps) {
  return (
    <GlowCard className="overflow-hidden rounded-[2rem] border-white/12 bg-white/[0.03] p-0">
      <div className="relative aspect-[4/5]">
        {src ? (
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(max-width: 768px) 100vw, 420px"
            className="object-cover contrast-[1.05] saturate-[1.05]"
            style={{ transform: "translateZ(0)", backfaceVisibility: "hidden" }}
            priority
            quality={100}
            unoptimized
          />
        ) : (
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.18),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(249,115,22,0.2),transparent_34%),linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))]" />
        )}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,10,16,0.08),rgba(8,10,16,0.64))]" />
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <div className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3 backdrop-blur-sm">
            <p className="text-sm font-medium text-white">{name}</p>
            <p className="mt-1 text-xs uppercase tracking-[0.24em] text-white/60">{role}</p>
          </div>
        </div>
      </div>
    </GlowCard>
  );
}
