"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";

const stats = [
  { value: "10+", label: "Years Experience" },
  { value: "200+", label: "Events Hosted" },
  { value: "1000+", label: "Hours On Stage" },
];

export function ExperienceSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#FCFBFA] pt-20 pb-10 px-8 md:px-24 overflow-hidden z-10"
    >
      {/* 
        ATMOSPHERIC LIGHTING: Extremely soft pastel haze / diffused light blooms (< 8% opacity).
        Looks like light passing through silk fabric. No visible shapes, circles, or blobs.
      */}
      {/* Powder Blue Atmosphere (15%) */}
      <div
        aria-hidden="true"
        className="absolute left-[-10%] top-[-20%] h-[600px] w-[600px] rounded-full bg-[#F0F4F8] opacity-[0.07] blur-[120px] pointer-events-none select-none z-0"
      />
      <div
        aria-hidden="true"
        className="absolute right-[5%] bottom-[-15%] h-[500px] w-[500px] rounded-full bg-[#F0F4F8] opacity-[0.06] blur-[110px] pointer-events-none select-none z-0"
      />
      {/* Blush Atmosphere (10%) */}
      <div
        aria-hidden="true"
        className="absolute right-[20%] top-[-10%] h-[550px] w-[550px] rounded-full bg-[#F6E8EC] opacity-[0.05] blur-[100px] pointer-events-none select-none z-0"
      />
      {/* Lavender Atmosphere (5%) */}
      <div
        aria-hidden="true"
        className="absolute left-[30%] bottom-[-10%] h-[400px] w-[400px] rounded-full bg-[#F7F4FA] opacity-[0.04] blur-[90px] pointer-events-none select-none z-0"
      />

      {/* 
        SUBTLE FEMININE ACCENTS: Tiny rose-colored sparkles (✦) and dots (•).
        These are extremely minimal, low opacity, and designed to feel discovered rather than obvious.
      */}
      <span
        aria-hidden="true"
        className="absolute left-[15%] top-[25%] text-[#D98C9A] opacity-25 text-[10px] select-none pointer-events-none"
      >
        ✦
      </span>
      <span
        aria-hidden="true"
        className="absolute right-[18%] top-[15%] text-[#D98C9A] opacity-20 text-[12px] select-none pointer-events-none"
      >
        ✦
      </span>
      <span
        aria-hidden="true"
        className="absolute left-[48%] bottom-[20%] text-[#D98C9A] opacity-[0.18] text-[9px] select-none pointer-events-none"
      >
        •
      </span>
      <span
        aria-hidden="true"
        className="absolute right-[30%] bottom-[35%] text-[#D98C9A] opacity-15 text-[11px] select-none pointer-events-none"
      >
        ✦
      </span>

      <div className="relative mx-auto max-w-[1100px] z-10">
        {/* Header Block */}
        <div className="text-center mb-12 md:mb-16">
          {/* Eyebrow Label: Fades in */}
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="block text-center font-sans text-[12px] font-medium tracking-[0.35em] uppercase text-[#D98C9A] mb-[18px]"
          >
            Proven Stage Presence
          </motion.span>

          {/* Main Heading: Fades upward */}
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            className="font-[family-name:var(--font-serif)] font-medium text-[#2F2A30] leading-tight text-center"
            style={{ fontSize: "clamp(2.3rem, 3.8vw, 3.8rem)" }}
          >
            Experience That Speaks
          </motion.h2>
        </div>

        {/* Statistics Layout */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-14">
          {stats.map((stat, i) => (
            <div key={stat.label} className="contents">
              {/* Stat Item: Fades upward, staggered by 0.12s */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
                transition={{
                  duration: 0.8,
                  delay: 0.2 + i * 0.12,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                className="text-center flex flex-col items-center"
              >
                {/* Elegant Cormorant Garamond Number */}
                <span
                  className="block font-[family-name:var(--font-cormorant)] font-medium text-[#6E5D67] leading-none select-none"
                  style={{ fontSize: "clamp(56px, 6vw, 64px)" }}
                >
                  {stat.value}
                </span>
                {/* Personal, Warm Label in Sentence Case */}
                <span className="mt-3 block font-sans text-[15px] font-normal text-[#8A7B83] tracking-wide">
                  {stat.label}
                </span>
              </motion.div>

              {/* Softer Divider: Fades in softly */}
              {i < stats.length - 1 && (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                  aria-hidden="true"
                  className="w-[70px] h-px md:w-px md:h-[60px] block"
                  style={{ backgroundColor: "rgba(217,140,154,0.15)" }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
