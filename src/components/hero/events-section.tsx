"use client";

import { motion } from "motion/react";

const categories = [
  { name: "Celebrity Interviews", isPrimary: true },
  { name: "Sports Tournaments", isPrimary: false },
  { name: "Baptism Ceremonies", isPrimary: false },
  { name: "Birthday Celebrations", isPrimary: false },
  { name: "Corporate Seminars", isPrimary: true },
  { name: "Award Functions", isPrimary: true },
  { name: "Cultural Festivals", isPrimary: false },
  { name: "Music Shows", isPrimary: false },
  { name: "Media Events", isPrimary: false },
  { name: "Conferences & Expos", isPrimary: true },
];

export function EventsSection() {
  return (
    <section
      id="events"
      className="relative bg-[#FCFBFA] pt-10 pb-20 px-6 md:px-14 lg:px-24 overflow-hidden z-10 flex flex-col justify-center"
      style={{
        background: `
          radial-gradient(circle at 20% 30%, rgba(248, 225, 232, 0.45) 0%, transparent 35%),
          radial-gradient(circle at 80% 20%, rgba(225, 235, 250, 0.40) 0%, transparent 40%),
          radial-gradient(circle at 50% 80%, rgba(239, 230, 250, 0.30) 0%, transparent 45%),
          linear-gradient(180deg, #FBFAF8 0%, #F6F7FB 100%)
        `,
      }}
    >
      <div className="relative mx-auto max-w-[1280px] w-full z-10">
        {/* Header Block */}
        <div className="text-center mb-8 md:mb-10 flex flex-col items-center">
          {/* Eyebrow Label */}
          <span className="block text-center font-sans text-[12px] font-medium tracking-[0.35em] uppercase text-[#D98C9A] mb-2.5">
            Moments I Bring To Life
          </span>

          {/* Main Heading */}
          <h2
            className="font-[family-name:var(--font-serif)] font-semibold text-[#2F2A30] leading-tight text-center max-w-[900px]"
            style={{ fontSize: "clamp(1.8rem, 3.4vw, 2.5rem)" }}
          >
            Every Stage Has A Story
          </h2>

          {/* Supporting Text */}
          <p className="mt-3.5 max-w-[600px] text-center font-sans text-[14px] md:text-[15px] leading-[1.6] text-[#6D6670]">
            {"A glimpse into the diverse stages, celebrations, and formats I bring to life with warmth and energy."}
          </p>
        </div>

        {/* Categories Capsule Grid (5 Cols, 2 Rows on Desktop) */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-5 lg:gap-6 w-full max-w-[1240px] mx-auto items-center justify-items-center">
          {categories.map((category, i) => {
            const isPrimary = category.isPrimary;
            return (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.8,
                  delay: i * 0.08,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                style={{
                  background: "rgba(255, 255, 255, 0.72)",
                  backdropFilter: "blur(18px)",
                  WebkitBackdropFilter: "blur(18px)",
                  borderColor: "rgba(255, 255, 255, 0.9)",
                  boxShadow: "0 10px 30px rgba(80, 80, 120, 0.06)",
                }}
                className={`group flex items-center justify-center gap-2 rounded-full border transition-all duration-300 hover:translate-y-[-4px] hover:bg-white/85 hover:shadow-[0_12px_35px_rgba(217,140,154,0.06)] cursor-pointer text-center w-full max-w-[280px] md:max-w-none ${
                  isPrimary
                    ? "px-5 py-4 md:px-[28px] md:py-[18px]"
                    : "px-4 py-3.5 md:px-[22px] md:py-[14px] opacity-90 hover:opacity-100"
                }`}
              >
                {/* Accent Symbol */}
                <span className="text-[#D98C9A] text-[14px] select-none transition-transform duration-300 group-hover:scale-125">
                  ✦
                </span>
                
                {/* Category Text */}
                <span
                  className="font-[family-name:var(--font-serif)] font-semibold text-[#3B343A] tracking-wide"
                  style={{
                    fontSize: isPrimary
                      ? "clamp(15px, 1.6vw, 21px)"
                      : "clamp(13px, 1.4vw, 18px)",
                  }}
                >
                  {category.name}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
