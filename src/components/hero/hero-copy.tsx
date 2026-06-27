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

export function HeroCopy() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="max-w-[560px]"
    >
      <p className="pl-0.5 text-[0.98rem] font-medium tracking-[0.08em] text-[#c58a92]">
        Hello, I&apos;m
      </p>

      <h1 className="mt-5 font-[family-name:var(--font-serif)] text-[88px] leading-[0.88] font-semibold tracking-[-0.055em] text-[#171617]">
        Riya Francis
      </h1>

      <p className="mt-12 max-w-[520px] font-[family-name:var(--font-serif)] text-[2.78rem] leading-[1.1] tracking-[-0.035em] text-[#1f1c1d] italic">
        &ldquo;You plan the celebration.
        <br />
        I&rsquo;ll take care of the stage.&rdquo;
      </p>

      <p className="mt-12 pl-0.5 text-[0.74rem] font-semibold uppercase tracking-[0.45em] text-[#5f5558]">
        ANCHOR {"\u2022"} MC {"\u2022"} EVENT HOST
      </p>

      <div className="mt-11 max-w-[560px]">
        <p className="text-[0.68rem] font-semibold uppercase tracking-[0.42em] text-[#1A1A1A]">
          Featured On
        </p>

        {/* Mobile View: Clean grid with 3 logos per row, centered, equal spacing */}
        <div className="md:hidden grid grid-cols-3 gap-y-6 gap-x-5 items-center justify-items-center w-full max-w-[340px] mx-auto mt-5">
          {logoItems.map((logo, idx) => (
            <div
              key={logo.alt}
              className={`flex items-center justify-center ${
                idx === 6 ? "col-span-3" : ""
              }`}
              style={{
                transform: logo.scale !== 1 ? `scale(${logo.scale})` : undefined,
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={logo.src}
                alt={logo.alt}
                style={{
                  height: "36px",
                  objectFit: "contain",
                  mixBlendMode: "multiply",
                }}
                className="w-auto select-none pointer-events-none"
              />
            </div>
          ))}
        </div>

        {/* Desktop View: Single horizontal row, responsive, no wrap */}
        <div className="hidden md:flex flex-row flex-nowrap items-center justify-between gap-x-3 w-full mt-5">
          {logoItems.map((logo) => (
            <div
              key={logo.alt}
              className="flex items-center justify-center shrink-0"
              style={{
                transform: logo.scale !== 1 ? `scale(${logo.scale})` : undefined,
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={logo.src}
                alt={logo.alt}
                style={{
                  height: "32px",
                  objectFit: "contain",
                  mixBlendMode: "multiply",
                }}
                className="w-auto select-none pointer-events-none"
              />
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
