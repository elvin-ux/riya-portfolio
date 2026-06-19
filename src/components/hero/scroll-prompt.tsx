"use client";

import { motion } from "motion/react";

import { cn } from "@/lib/utils";

type ScrollPromptProps = {
  className?: string;
};

export function ScrollPrompt({ className }: ScrollPromptProps) {
  return (
    <div className={cn("flex flex-col items-start gap-4", className)}>
      <span className="text-[0.78rem] font-medium tracking-[0.1em] text-[#7d6f73]">
        Discover Her Journey
      </span>

      <motion.span
        aria-hidden="true"
        className="block h-16 w-px origin-top bg-[linear-gradient(180deg,rgba(197,138,146,0.2)_0%,rgba(197,138,146,0.92)_100%)]"
        animate={{ scaleY: [0.72, 1, 0.72], opacity: [0.45, 1, 0.45] }}
        transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
