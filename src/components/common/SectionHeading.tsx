type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: React.ReactNode | string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left"
}: SectionHeadingProps) {
  const alignment = align === "center" ? "mx-auto text-center" : "";

  return (
    <div className={`max-w-2xl ${alignment}`}>
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-cyan/80">{eyebrow}</p>
      <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">{title}</h2>
      <p className="mt-4 text-sm leading-6 text-white/70 sm:text-base">{description}</p>
    </div>
  );
}
