"use client";

import Image from "next/image";
import { motion } from "motion/react";


export function HeroVisual() {
  return (
    <div className="relative flex h-full min-h-[100svh] w-full items-end justify-center md:h-[860px] md:min-h-0 lg:h-[94vh] mobile-visual-wrapper">
      {/* SEAMLESS ATMOSPHERIC GRADIENTS (Behind Subject) */}

      {/* 1. Main Luminous Halo (Centered behind head and shoulders) */}
      <div
        aria-hidden="true"
        className="absolute top-[8%] left-[50%] -translate-x-1/2 h-[500px] w-[500px] rounded-full opacity-90 blur-[75px] pointer-events-none select-none z-0 hero-halo-1"
        style={{
          background: "radial-gradient(circle, rgba(255,255,255,0.95) 0%, rgba(250,243,243,0.85) 30%, rgba(240,244,248,0.4) 65%, transparent 100%)"
        }}
      />

      {/* 2. Blue-Lavender Diffusion (Centered behind lower body) */}
      <div
        aria-hidden="true"
        className="absolute bottom-[12%] left-[50%] -translate-x-1/2 h-[600px] w-[700px] rounded-full opacity-85 blur-[95px] pointer-events-none select-none z-0 hero-halo-2"
        style={{
          background: "radial-gradient(circle, rgba(240,244,248,0.95) 0%, rgba(247,244,250,0.8) 35%, rgba(228,238,252,0.3) 70%, transparent 100%)"
        }}
      />

      {/* 3. Soft Layered Ambient Blends (Composite of target color palette) */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-90 blur-[50px] pointer-events-none select-none z-0 hero-halo-3"
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
        className="relative z-20 flex h-full w-full items-end justify-center mobile-image-container"
      >
        <Image
          src="/images/riya-francis-cutout.webp"
          alt="Riya Francis holding a microphone on stage"
          width={1257}
          height={2048}
          priority
          sizes="(max-width: 767px) 86vw, 56vw"
          style={{
            // CSS Drop shadow is GPU accelerated and much faster than SVG filters
            filter: "drop-shadow(0px 0px 20px rgba(244, 246, 251, 0.6)) drop-shadow(0px 0px 8px rgba(250, 243, 243, 0.8))",
          }}
          className="relative z-20 h-[clamp(620px,86svh,780px)] w-auto max-w-none translate-x-[22%] -translate-y-[clamp(86px,13svh,118px)] object-contain drop-shadow-[0_20px_50px_rgba(126,105,111,0.03)] [mask-image:linear-gradient(to_bottom,black_70%,transparent_100%)] md:h-[830px] md:translate-x-0 md:-translate-y-[64px] lg:h-[92vh] lg:-translate-y-[100px] mobile-hero-image"
        />
      </motion.div>

      <style dangerouslySetInnerHTML={{ __html: `
       @media (max-width: 767px) {
  .mobile-visual-wrapper {
    height: 100svh !important;
    min-height: 100svh !important;
    position: absolute !important;
    inset: 0 !important;
    width: 100% !important;
    overflow: hidden !important;
  }

  .mobile-image-container {
    display: block !important;
    position: absolute !important;
    inset: 0 !important;
    height: 100% !important;
    width: 100% !important;
    z-index: 20 !important;
  }

  .mobile-hero-image {
    height: 670px !important;
    width: auto !important;
    max-width: none !important;
    position: absolute !important;
    bottom: -10px !important;
    right: -25px !important;
    transform: none !important;
    object-fit: contain !important;
  }

  .hero-halo-1 {
    top: 5% !important;
    right: -25px !important;
    left: auto !important;
    transform: none !important;
    width: 350px !important;
    height: 350px !important;
  }

  .hero-halo-2 {
    bottom: 5% !important;
    right: -45px !important;
    left: auto !important;
    transform: none !important;
    width: 450px !important;
    height: 450px !important;
  }

  .hero-halo-3 {
    display: none !important;
  }
}

/* Very narrow phones */
@media (max-width: 340px) {
  .mobile-hero-image {
    right: -45px !important;
    height: 580px !important;
  }
}

/* Short-height phones like iPhone SE */
@media (max-width: 767px) and (max-height: 700px) {
  .mobile-hero-image {
    height: 610px !important;
    right: -18px !important;
    bottom: -4px !important;
  }

  .hero-halo-1 {
    width: 320px !important;
    height: 320px !important;
  }

  .hero-halo-2 {
    width: 420px !important;
    height: 420px !important;
  }
}
      `}} />
    </div>
  );
}
