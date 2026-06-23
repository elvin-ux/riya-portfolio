"use client";

import Image from "next/image";
import { motion } from "motion/react";


export function HeroVisual() {
  return (
    <div className="relative flex h-[94vh] w-full items-end justify-center">
      {/* SEAMLESS ATMOSPHERIC GRADIENTS (Behind Subject) */}

      {/* 1. Main Luminous Halo (Centered behind head and shoulders) */}
      <div
        aria-hidden="true"
        className="absolute top-[8%] left-[50%] -translate-x-1/2 h-[500px] w-[500px] rounded-full opacity-90 blur-[75px] pointer-events-none select-none z-0"
        style={{
          background: "radial-gradient(circle, rgba(255,255,255,0.95) 0%, rgba(250,243,243,0.85) 30%, rgba(240,244,248,0.4) 65%, transparent 100%)"
        }}
      />

      {/* 2. Blue-Lavender Diffusion (Centered behind lower body) */}
      <div
        aria-hidden="true"
        className="absolute bottom-[12%] left-[50%] -translate-x-1/2 h-[600px] w-[700px] rounded-full opacity-85 blur-[95px] pointer-events-none select-none z-0"
        style={{
          background: "radial-gradient(circle, rgba(240,244,248,0.95) 0%, rgba(247,244,250,0.8) 35%, rgba(228,238,252,0.3) 70%, transparent 100%)"
        }}
      />

      {/* 3. Soft Layered Ambient Blends (Composite of target color palette) */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-90 blur-[50px] pointer-events-none select-none z-0"
        style={{
          background: `
            radial-gradient(circle at 50% 35%, rgba(255,255,255,0.95) 0%, rgba(245,247,255,0.75) 35%, rgba(240,244,248,0.35) 65%, transparent 100%),
            radial-gradient(circle at 65% 55%, rgba(240,244,248,0.9) 0%, rgba(247,244,250,0.7) 45%, transparent 80%),
            radial-gradient(circle at 35% 65%, rgba(250,243,243,0.95) 0%, rgba(252,251,250,0.5) 50%, transparent 85%)
          `
        }}
      />

      {/* 4. Faint bokeh highlights (completely static for performance) */}
      <div
        aria-hidden="true"
        className="absolute right-[25%] top-[25%] h-[140px] w-[140px] rounded-full bg-[#FFFFFF] opacity-35 blur-[35px] pointer-events-none select-none z-0"
      />
      <div
        aria-hidden="true"
        className="absolute right-[8%] top-[40%] h-[180px] w-[180px] rounded-full bg-[#F4F6FB] opacity-30 blur-[45px] pointer-events-none select-none z-0"
      />

      {/* CUTOUT INTEGRATION: Faint light wrap in front of the subject to embed it */}
      <div
        aria-hidden="true"
        className="absolute bottom-[20%] right-[12%] z-25 w-[380px] h-[380px] rounded-full bg-[#FAF3F3] opacity-[0.08] blur-[70px] pointer-events-none select-none"
      />

      {/* Riya Cutout Image */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-20 flex h-full w-full items-end justify-center"
      >
        <Image
          src="/images/riya-francis-cutout.webp"
          alt="Riya Francis holding a microphone on stage"
          width={1257}
          height={2048}
          priority
          sizes="56vw"
          style={{
            // CSS Drop shadow is GPU accelerated and much faster than SVG filters
            filter: "drop-shadow(0px 0px 20px rgba(244, 246, 251, 0.6)) drop-shadow(0px 0px 8px rgba(250, 243, 243, 0.8))",
          }}
          className="relative z-20 h-[92vh] w-auto max-w-none object-contain drop-shadow-[0_20px_50px_rgba(126,105,111,0.03)] -translate-y-[100px] [mask-image:linear-gradient(to_bottom,black_70%,transparent_100%)]"
        />
      </motion.div>

    </div>
  );
}
