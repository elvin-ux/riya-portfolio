"use client";

import { motion } from "motion/react";

const logoItems = [
  { src: "/logos/Twenty_Four_News.webp", alt: "24 News", scale: 1 },
  { src: "/logos/Asianet_Plus_Logo.jpg", alt: "Asianet Plus", scale: 1 },
  { src: "/logos/ShalomTVlogo.png", alt: "Shalom TV", scale: 1.15 },
  { src: "/logos/images (1).jpg", alt: "Radio Lemon", scale: 2 },
  { src: "/logos/images (2).jpg", alt: "Plains FM", scale: 1 },
  { src: "/logos/indian-weekender-advertising.webp", alt: "India Weekender", scale: 1.15 },
  { src: "/logos/bnz-diwali.png", alt: "BNZ Diwali", scale: 1 },
];

export function HeroCopy() {
  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
@media (max-width: 767px) {
  .hero-copy-container {
    max-width: 365px !important;
    padding-left: 36px !important;
    padding-right: 20px !important;
    min-height: 100% !important;
    display: flex !important;
    flex-direction: column !important;
    justify-content: flex-start !important;
    box-sizing: border-box !important;
    padding-bottom: 24px !important;
  }

  .hero-hello {
    font-size: 15px !important;
    font-weight: 500 !important;
    letter-spacing: .08em !important;
    color: #c58a92 !important;
  }

  .hero-name {
    margin-top: 12px !important;
    font-size: 64px !important;
    line-height: .82 !important;
    font-weight: 600 !important;
    letter-spacing: -.055em !important;
  }

  .hero-quote {
    margin-top: 36px !important;
    font-size: 38px !important;
    line-height: .98 !important;
    letter-spacing: -.035em !important;
    text-indent: -.38em !important;
  }

  .hero-role {
    margin-top: 40px !important;
    font-size: 13px !important;
    letter-spacing: .42em !important;
  }

  .hero-featured-container {
    margin-top: 32px !important;
  }

  .hero-featured-label {
    font-size: 10px !important;
    letter-spacing: .42em !important;
  }

  .hero-logos-grid {
    display: grid !important;
    grid-template-columns: repeat(3, minmax(0,1fr)) !important;
    justify-items: center !important;
    align-items: center !important;
    column-gap: 20px !important;
    row-gap: 20px !important;
    max-width: 320px !important;
    width: 100% !important;
    margin-top: 18px !important;
  }

  .hero-logo-img {
    height: 40px !important;
    width: auto !important;
  }


  @media (max-height:700px) {

    .hero-name{
      font-size:56px !important;
    }

    .hero-quote{
      font-size:34px !important;
      margin-top:26px !important;
    }

    .hero-role{
      margin-top:18px !important;
      font-size:11px !important;
    }

    .hero-featured-container{
      margin-top:20px !important;
    }

    .hero-logos-grid{
      row-gap:12px !important;
      column-gap:14px !important;
      max-width:280px !important;
    }

    .hero-logo-img{
      height:34px !important;
    }

  }

  /* -------- Tall phones (iPhone 14/15, Samsung) -------- */

  @media (min-height:850px) {

    .hero-featured-container{
      margin-top:44px !important;
    }

    .hero-logos-grid{
      row-gap:24px !important;
      column-gap:22px !important;
      max-width:340px !important;
    }

    .hero-logo-img{
      height:46px !important;
    }

  }
}
      `}} />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-[560px] hero-copy-container"
      >
        <div className="hero-copy-top-group">
          <p className="pl-0.5 text-[clamp(0.85rem,2.5vw,0.98rem)] font-medium tracking-[0.08em] text-[#c58a92] hero-hello">
            Hello, I&apos;m
          </p>

          <h1 className="mt-[clamp(0.75rem,3vh,1.25rem)] font-[family-name:var(--font-serif)] text-[clamp(2.5rem,11.5vw,5.5rem)] leading-[0.88] font-semibold tracking-[-0.055em] text-[#171617] hero-name">
            <span className="block whitespace-nowrap">Riya</span>
            <span className="block whitespace-nowrap">Francis</span>
          </h1>

          <p className="mt-[clamp(1.5rem,5.5vh,3rem)] max-w-[520px] font-[family-name:var(--font-serif)] text-[clamp(1.5rem,6vw,2.78rem)] leading-[1.1] tracking-[-0.035em] text-[#1f1c1d] italic hero-quote">
            &ldquo;You plan the celebration.
            <br />
            I&rsquo;ll take care of the stage.&rdquo;
          </p>

          <p className="mt-[clamp(1.5rem,5.5vh,3rem)] pl-0.5 text-[clamp(0.62rem,2.2vw,0.74rem)] font-semibold uppercase tracking-[0.45em] text-[#5f5558] hero-role">
            ANCHOR {"\u2022"} MC {"\u2022"} EVENT HOST
          </p>
        </div>

        <div className="mt-[clamp(1.5rem,5vh,2.75rem)] max-w-[560px] hero-featured-container">
          <p className="text-[clamp(0.6rem,2vw,0.68rem)] font-semibold uppercase tracking-[0.42em] text-[#1A1A1A] hero-featured-label">
            Featured On
          </p>

          {/* Mobile View: Clean grid with 3 logos per row, left-aligned, equal spacing */}
          <div className="md:hidden grid grid-cols-3 gap-y-[clamp(1rem,4.5vh,1.5rem)] gap-x-[clamp(0.85rem,4vw,1.25rem)] items-center justify-items-center w-full max-w-[clamp(280px,85vw,340px)] mx-auto mt-[clamp(1rem,3vh,1.25rem)] hero-logos-grid">
            {logoItems.map((logo, idx) => (
              <div
                key={logo.alt}
                className={`flex items-center justify-center ${idx === 6 ? "col-span-3 flex justify-center w-full" : ""
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
                    objectFit: "contain",
                    mixBlendMode: "multiply",
                  }}
                  className="w-auto select-none pointer-events-none hero-logo-img"
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
    </>
  );
}
