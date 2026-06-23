"use client";

import { motion } from "motion/react";

const logoItems = [
  { src: "/logos/Twenty_Four_News.webp", alt: "24 News", scale: 1 },
  { src: "/logos/Asianet_Plus_Logo.jpg", alt: "Asianet Plus", scale: 1 },
  { src: "/logos/ShalomTVlogo.png", alt: "Shalom TV", scale: 1.15 },
  { src: "/logos/images (1).jpg", alt: "Radio Lemon", scale: 1 },
  { src: "/logos/images (2).jpg", alt: "Plains FM", scale: 1 },
  { src: "/logos/indian-weekender-advertising.webp", alt: "India Weekender", scale: 1.15 },
  { src: "/logos/bnz-diwali.png", alt: "BNZ Diwali", scale: 1 },
];

export function MediaSection() {
  return (
    <section
      id="media"
      className="relative px-6 md:px-14 lg:px-24 pt-10 pb-[48px] z-10 flex flex-col items-center mt-0 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, rgba(255,247,250,0.8) 0%, rgba(245,248,255,0.8) 100%)",
      }}
    >
      {/* 
        Subtle Ambient Glow: Very soft and blurred rounded blooms.
        Left: pink, Right: blue. Opacity 18%.
      */}
      <div
        aria-hidden="true"
        className="absolute left-[10%] top-[20%] h-[250px] w-[250px] rounded-full bg-[radial-gradient(circle,rgba(255,208,223,0.18)_0%,rgba(255,208,223,0)_70%)] pointer-events-none select-none z-0"
      />
      <div
        aria-hidden="true"
        className="absolute right-[10%] bottom-[20%] h-[250px] w-[250px] rounded-full bg-[radial-gradient(circle,rgba(215,228,255,0.18)_0%,rgba(215,228,255,0)_70%)] pointer-events-none select-none z-0"
      />
 
      <div className="relative mx-auto max-w-[1200px] w-full z-10">
        {/* Compressed Header Area */}
        <div className="text-center mb-8 flex flex-col items-center">
          {/* Eyebrow */}
          <span className="block text-center font-sans text-[12px] font-medium tracking-[0.35em] uppercase text-[#D98C9A] mb-3">
            Hosted programs accross
          </span>
 
          {/* Main Heading */}
          <h2
            className="font-[family-name:var(--font-serif)] font-semibold text-[#2F2A30] leading-tight text-center"
            style={{ fontSize: "clamp(1.8rem, 3.2vw, 2.5rem)" }}
          >
            Trusted By Leading Media Platforms
          </h2>
        </div>
 
        {/* Single Premium Logo Showcase Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          style={{
            background: "rgba(255, 255, 255, 0.55)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            borderColor: "rgba(255, 255, 255, 0.8)",
          }}
          className="group w-full rounded-[36px] px-8 py-8 md:px-12 border transition-all duration-250 ease-out hover:translate-y-[-4px] hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)] flex flex-col items-center"
        >
          {/* Horizontal Logo Strip */}
          <div className="flex flex-wrap md:flex-nowrap justify-center items-center gap-8 md:gap-[56px] w-full">
            {logoItems.map((logo) => (
              <div
                key={logo.alt}
                className="flex items-center justify-center transition-all duration-300 hover:scale-[1.03]"
                style={{
                  transform: logo.scale !== 1 ? `scale(${logo.scale})` : undefined,
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={logo.src}
                  alt={logo.alt}
                  style={{
                    height: "95px",
                    objectFit: "contain",
                    mixBlendMode: "multiply",
                    filter: "opacity(95%)",
                  }}
                  className="w-auto select-none pointer-events-none"
                />
              </div>
            ))}
          </div>

          {/* Tiny Premium Detail Statistic Row */}
          <span className="block mt-6 font-sans text-[12px] font-medium tracking-[0.3em] uppercase text-[#D98C9A] select-none text-center">
            Featured Across Television • Radio • Digital Media
          </span>
        </motion.div>
      </div>
    </section>
  );
}
