"use client";

import { motion } from "motion/react";

const featuredOn = [
  "24 News",
  "Asianet Plus",
  "Radio Lemon NZ",
  "Shalom TV",
];

export function HeroCopy() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className="max-w-[560px]"
    >
      <p className="pl-0.5 text-[0.98rem] font-medium tracking-[0.08em] text-[#c58a92]">
        Hello, I&apos;m
      </p>

      <h1 className="mt-5 font-[family-name:var(--font-serif)] text-[88px] leading-[0.88] font-semibold tracking-[-0.055em] text-[#171617]">
        Riya Francis
      </h1>

      <p className="mt-12 max-w-[520px] font-[family-name:var(--font-serif)] text-[2.78rem] leading-[1.1] tracking-[-0.035em] text-[#1f1c1d]">
        You plan the celebration.
        <br />
        I&apos;ll take care of the stage.
      </p>

      <p className="mt-12 pl-0.5 text-[0.74rem] font-semibold uppercase tracking-[0.45em] text-[#5f5558]">
        ANCHOR {"\u2022"} MC {"\u2022"} EVENT HOST
      </p>

      <div className="mt-11 max-w-[560px]">
        <p className="text-[0.68rem] font-semibold uppercase tracking-[0.42em] text-[#918589]">
          Featured On
        </p>

        <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-3 text-[0.94rem] text-[#514c4d]">
          {featuredOn.map((item, index) => (
            <div key={item} className="flex items-center gap-5">
              <span className="font-medium">{item}</span>
              {index < featuredOn.length - 1 ? (
                <span
                  aria-hidden="true"
                  className="h-4 w-px bg-[#ece4e7]"
                />
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
