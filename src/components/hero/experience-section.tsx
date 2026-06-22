"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";

const stats = [
  { value: 10, suffix: "+", label: "Years Experience" },
  { value: 200, suffix: "+", label: "Events Hosted" },
  { value: 1000, suffix: "+", label: "Hours On Stage" },
];

export function ExperienceSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-60px" });

  return (
    <section
      ref={sectionRef}
      className="relative pt-4 pb-6 px-8 md:px-24 overflow-hidden z-10 bg-transparent mt-[-16px] md:mt-[-28px]"
    >
      {/* 
        SEAMLESS FLOWING PASTEL ATMOSPHERE BACKGROUND GLOWS 
      */}
      {/* Left side: soft blush pink glow */}
      <div
        aria-hidden="true"
        className="absolute left-[-10%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[#FAE5E8] opacity-[0.35] blur-[100px] pointer-events-none select-none z-0"
      />

      {/* Center: warm ivory / pearl white glow */}
      <div
        aria-hidden="true"
        className="absolute left-[25%] top-[-15%] h-[600px] w-[600px] rounded-full bg-[#FCFBFA] opacity-[0.70] blur-[110px] pointer-events-none select-none z-0"
      />

      {/* Right side: soft powder blue glow */}
      <div
        aria-hidden="true"
        className="absolute right-[-10%] bottom-[-10%] h-[500px] w-[500px] rounded-full bg-[#E4EEFC] opacity-[0.30] blur-[100px] pointer-events-none select-none z-0"
      />

      {/* 
        SUBTLE FLOATING ACCENTS (Opacity 3-5% for magical, almost invisible details)
      */}
      {/* Sparkle */}
      <span className="absolute left-[18%] top-[25%] text-[#D98C9A] opacity-[0.04] pointer-events-none select-none">
        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current">
          <path d="M12 0L14.6 9.4L24 12L14.6 14.6L12 24L9.4 14.6L0 12L9.4 9.4L12 0Z" />
        </svg>
      </span>
      {/* Heart Outline */}
      <span className="absolute right-[20%] top-[20%] text-[#D98C9A] opacity-[0.03] pointer-events-none select-none">
        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current" strokeWidth={1.5}>
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
      </span>
      {/* Star */}
      <span className="absolute left-[45%] bottom-[20%] text-[#D98C9A] opacity-[0.035] pointer-events-none select-none">
        <svg viewBox="0 0 24 24" className="w-3 h-3 fill-current">
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      </span>
      {/* Heart Outline */}
      <span className="absolute right-[32%] bottom-[25%] text-[#D98C9A] opacity-[0.03] pointer-events-none select-none">
        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-none stroke-current" strokeWidth={1.5}>
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
      </span>

      <div className="relative mx-auto max-w-[1100px] z-10">
        {/* Header Block */}
        <div className="text-center mb-6 md:mb-8">
          {/* Eyebrow Label: Fades in */}
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="block text-center font-sans text-[11px] font-semibold tracking-[0.35em] uppercase text-[#D98C9A] mb-[10px]"
          >
            Proven Stage Presence
          </motion.span>

          {/* Main Heading: Muted Plum/Charcoal Gradient, Fades upward */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="font-[family-name:var(--font-serif)] font-medium leading-tight text-center bg-clip-text text-transparent"
            style={{
              fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
              backgroundImage: "linear-gradient(135deg, #3F3640, #635166)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Experience That Speaks
          </motion.h2>
        </div>

        {/* Statistics Layout */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10">
          {stats.map((stat, i) => (
            <div key={stat.label} className="contents">
              {/* Stat Item: Fades upward, staggered */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{
                  duration: 0.6,
                  delay: 0.2 + i * 0.08,
                  ease: "easeOut",
                }}
                className="text-center flex flex-col items-center"
              >
                {/* Elegant Cormorant Garamond Number with Soft Luxury Option B Gradient */}
                <span
                  className="block font-[family-name:var(--font-cormorant)] font-medium leading-none select-none bg-clip-text text-transparent lining-nums"
                  style={{
                    fontSize: "clamp(52px, 5.5vw, 60px)",
                    backgroundImage: "linear-gradient(135deg, #D7A4B0, #A8C6E8)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    fontVariantNumeric: "lining-nums",
                    fontFeatureSettings: '"lnum"',
                  }}
                >
                  {stat.value}
                  {stat.suffix}
                </span>
                
                {/* Years Experience Label */}
                <span className="mt-2.5 block font-sans text-[12px] md:text-[13px] font-normal text-[#7A6F78] tracking-[0.12em] uppercase">
                  {stat.label}
                </span>
              </motion.div>

              {/* Soft Divider */}
              {i < stats.length - 1 && (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                  aria-hidden="true"
                  className="w-[40px] h-px md:w-px md:h-[36px] block"
                  style={{ backgroundColor: "rgba(217,140,154,0.12)" }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
