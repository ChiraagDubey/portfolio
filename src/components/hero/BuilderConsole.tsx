"use client";

import { motion } from "framer-motion";

import { GlowCard } from "@/components/common/GlowCard";

type BuilderConsoleProps = {
  items: Array<{
    label: string;
    value: string;
  }>;
};

export function BuilderConsole({ items }: BuilderConsoleProps) {
  return (
    <GlowCard className="min-h-[300px] rounded-[2rem] border-white/12 bg-black/30 p-0">
      <div className="border-b border-white/10 px-5 py-4">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-rose-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-300/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-300/80" />
        </div>
      </div>
      <div className="space-y-4 px-5 py-6 font-mono text-sm text-white/80">
        {items.map((item, index) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, x: 12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: 0.08 * index }}
            className="grid grid-cols-[auto,1fr] gap-3"
          >
            <span className="text-cyan-200">{item.label}:</span>
            <span className="text-white/88">{item.value}</span>
          </motion.div>
        ))}
        <motion.div
          className="mt-5 inline-flex items-center gap-2 rounded-full border border-cyan/20 bg-cyan/10 px-3 py-1.5 text-xs text-cyan-100"
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="h-2 w-2 rounded-full bg-cyan-300" />
          builder console active
        </motion.div>
      </div>
    </GlowCard>
  );
}
