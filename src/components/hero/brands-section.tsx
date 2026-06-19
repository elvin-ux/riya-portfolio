"use client";

import Image from "next/image";

const row1Brands = [
  { src: "/brands/atmosphere.jpeg", alt: "Atmosphere" },
  { src: "/brands/clickspice.jpeg", alt: "Click Spice" },
  { src: "/brands/dilmah.jpeg", alt: "Dilmah" },
  { src: "/brands/diya.jpeg", alt: "Diya" },
  { src: "/brands/fourthree.jpeg", alt: "Four Three" },
  { src: "/brands/hanabotanicals.jpeg", alt: "Hana Botanicals" },
  { src: "/brands/naturkidz.jpeg", alt: "NaturKidz" },
];

const row2Brands = [
  { src: "/brands/peternatural.jpeg", alt: "Peter Natural" },
  { src: "/brands/sebamed.jpeg", alt: "Sebamed" },
  { src: "/brands/solidtooth.jpeg", alt: "Solid Tooth" },
  { src: "/brands/starbucks.jpeg", alt: "Starbucks" },
  { src: "/brands/sugarhigh.jpeg", alt: "Sugar High" },
  { src: "/brands/whiskedcreations.jpeg", alt: "Whisked Creations" },
  { src: "/brands/whatsapp-brand.jpeg", alt: "Event Brand" },
];

const allBrands = [...row1Brands, ...row2Brands];

const decorativeAccents = [
  { type: "sparkle", top: "15%", left: "8%", size: 14 },
  { type: "heart", top: "25%", right: "6%", size: 12 },
  { type: "star", bottom: "20%", left: "5%", size: 10 },
  { type: "sparkle", bottom: "15%", right: "8%", size: 15 },
];

export function BrandsSection() {
  return (
    <section
      id="brands"
      className="relative w-full py-10 overflow-hidden z-10 flex flex-col items-center border-t border-[#D98C9A]/5"
      style={{
        background: "linear-gradient(135deg, rgba(253,248,249,0.85) 0%, rgba(247,246,251,0.85) 45%, rgba(244,248,2fd,0.85) 100%)",
      }}
    >
      {/* CSS Styles injection for smooth 60fps marquee scroll & hover pause */}
      <style jsx global>{`
        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .marquee-scroll-left {
          animation: marquee-left 45s linear infinite;
        }
        .marquee-scroll-right {
          animation: marquee-right 45s linear infinite;
        }
        .marquee-scroll-mobile {
          animation: marquee-left 55s linear infinite;
        }
        .marquee-wrapper:hover .marquee-scroll-left,
        .marquee-wrapper:hover .marquee-scroll-right,
        .marquee-wrapper:hover .marquee-scroll-mobile {
          animation-play-state: paused;
        }
      `}</style>

      {/* ATMOSPHERIC DEPT LIGHT BLENDS */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-[5%] -translate-y-1/2 h-[220px] w-[220px] rounded-full bg-[#FAE5E8] opacity-[0.05] blur-[80px] pointer-events-none select-none z-0"
      />
      <div
        aria-hidden="true"
        className="absolute top-1/2 right-[5%] -translate-y-1/2 h-[220px] w-[220px] rounded-full bg-[#E4EEFC] opacity-[0.05] blur-[80px] pointer-events-none select-none z-0"
      />

      {/* CUTE DECORATIVE ACCENTS (Opacity below 5%) */}
      {decorativeAccents.map((accent, idx) => (
        <span
          key={idx}
          className="absolute text-[#D98C9A]/3 pointer-events-none select-none z-0"
          style={{
            top: accent.top,
            bottom: accent.bottom,
            left: accent.left,
            right: accent.right,
          }}
        >
          {accent.type === "sparkle" && (
            <svg
              viewBox="0 0 24 24"
              className="fill-current"
              style={{ width: accent.size, height: accent.size }}
            >
              <path d="M12 0L14.6 9.4L24 12L14.6 14.6L12 24L9.4 14.6L0 12L9.4 9.4L12 0Z" />
            </svg>
          )}
          {accent.type === "heart" && (
            <svg
              viewBox="0 0 24 24"
              className="fill-current"
              style={{ width: accent.size, height: accent.size }}
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          )}
          {accent.type === "star" && (
            <svg
              viewBox="0 0 24 24"
              className="fill-current"
              style={{ width: accent.size, height: accent.size }}
            >
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
          )}
        </span>
      ))}

      <div className="relative mx-auto max-w-[1240px] w-full z-10 flex flex-col items-center">
        {/* Compact Title block */}
        <div className="text-center mb-6 flex flex-col items-center px-6">
          <span className="block text-center font-sans text-[11px] font-semibold tracking-[0.35em] uppercase text-[#D98C9A] mb-2.5">
            ✦ BRANDS & PARTNERS ✦
          </span>
          <h2
            className="font-[family-name:var(--font-serif)] font-semibold text-[#2D2730] leading-tight text-center max-w-[800px]"
            style={{ fontSize: "clamp(1.6rem, 3vw, 2.3rem)" }}
          >
            {"Brands I've Had The Pleasure To Work With"}
          </h2>
          <p className="mt-2 max-w-[500px] text-center font-sans text-[13px] md:text-[14px] leading-[1.6] text-[#6D6670]">
            {"Trusted by leading brands, organizations, and event partners across diverse industries."}
          </p>
        </div>

        {/* MARQUEE WRAPPER */}
        <div className="marquee-wrapper flex flex-col gap-4 w-full overflow-hidden select-none">
          {/* DESKTOP VIEW: Double Row Marquee */}
          <div className="hidden md:flex flex-col gap-4 w-full">
            {/* Top Row: Scroll Left */}
            <div className="flex w-max gap-4 marquee-scroll-left">
              {[...row1Brands, ...row1Brands].map((brand, idx) => (
                <div
                  key={`r1-${idx}`}
                  style={{
                    background: "rgba(255, 255, 255, 0.7)",
                    backdropFilter: "blur(12px)",
                    WebkitBackdropFilter: "blur(12px)",
                    borderColor: "rgba(255, 255, 255, 0.6)",
                  }}
                  className="flex items-center justify-center w-[210px] h-[88px] rounded-[24px] px-6 py-4 border shadow-[0_4px_15px_rgba(80,80,120,0.02)] transition-all duration-300 hover:translate-y-[-6px] hover:scale-[1.03] hover:shadow-[0_8px_25px_rgba(217,140,154,0.15)] hover:border-[#D98C9A]/30 cursor-pointer"
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={brand.src}
                      alt={brand.alt}
                      fill
                      sizes="210px"
                      className="object-contain mix-blend-mode-multiply opacity-90"
                    />
                  </div>
                </div>
              ))}
            </div>
 
            {/* Bottom Row: Scroll Right */}
            <div className="flex w-max gap-4 marquee-scroll-right">
              {[...row2Brands, ...row2Brands].map((brand, idx) => (
                <div
                  key={`r2-${idx}`}
                  style={{
                    background: "rgba(255, 255, 255, 0.7)",
                    backdropFilter: "blur(12px)",
                    WebkitBackdropFilter: "blur(12px)",
                    borderColor: "rgba(255, 255, 255, 0.6)",
                  }}
                  className="flex items-center justify-center w-[210px] h-[88px] rounded-[24px] px-6 py-4 border shadow-[0_4px_15px_rgba(80,80,120,0.02)] transition-all duration-300 hover:translate-y-[-6px] hover:scale-[1.03] hover:shadow-[0_8px_25px_rgba(217,140,154,0.15)] hover:border-[#D98C9A]/30 cursor-pointer"
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={brand.src}
                      alt={brand.alt}
                      fill
                      sizes="210px"
                      className="object-contain mix-blend-mode-multiply opacity-90"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
 
          {/* MOBILE VIEW: Single Row Marquee (Larger Logos, slower speed) */}
          <div className="flex md:hidden w-full overflow-x-auto scrollbar-none">
            <div className="flex w-max gap-3.5 marquee-scroll-mobile px-4">
              {[...allBrands, ...allBrands].map((brand, idx) => (
                <div
                  key={`mob-${idx}`}
                  style={{
                    background: "rgba(255, 255, 255, 0.7)",
                    backdropFilter: "blur(12px)",
                    WebkitBackdropFilter: "blur(12px)",
                    borderColor: "rgba(255, 255, 255, 0.6)",
                  }}
                  className="flex items-center justify-center w-[180px] h-[80px] rounded-[20px] px-5 py-3 border shadow-[0_4px_15px_rgba(80,80,120,0.02)] transition-all duration-300 hover:translate-y-[-3px] active:scale-[0.98] cursor-pointer"
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={brand.src}
                      alt={brand.alt}
                      fill
                      sizes="180px"
                      className="object-contain mix-blend-mode-multiply opacity-90"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
