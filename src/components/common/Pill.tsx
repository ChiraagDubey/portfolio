type PillProps = {
  children: string;
  tone?: "default" | "muted" | "warm";
};

export function Pill({ children, tone = "default" }: PillProps) {
  const toneClass =
    tone === "warm"
      ? "border-ember/30 bg-ember/10 text-white"
      : tone === "muted"
        ? "border-white/10 bg-white/5 text-white"
        : "border-cyan/25 bg-cyan/10 text-white";

  return <span className={`inline-flex items-center whitespace-nowrap rounded-full border px-3 py-1 text-xs font-medium ${toneClass}`}>{children}</span>;
}
