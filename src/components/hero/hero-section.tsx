import { HeroCopy } from "./hero-copy";
import { HeroVisual } from "./hero-visual";

export function HeroSection() {
  return (
    <section
      id="home"
      className="editorial-hero-bg relative isolate min-h-screen overflow-hidden bg-[#FCFBFA]"
    >
      {/* PAGE-WIDE ATMOSPHERIC BACKGROUND GRADIENTS */}
      
      {/* 1. Large soft powder blue gradient cloud (top right) */}
      <div
        aria-hidden="true"
        className="absolute right-[-8%] top-[2%] h-[800px] w-[800px] rounded-full bg-[#E4EEFC] opacity-85 blur-[110px] pointer-events-none select-none z-0"
      />

      {/* 2. Soft lavender gradient cloud (bottom right/center) */}
      <div
        aria-hidden="true"
        className="absolute right-[8%] bottom-[5%] h-[700px] w-[700px] rounded-full bg-[#F0E5F7] opacity-80 blur-[100px] pointer-events-none select-none z-0"
      />

      {/* 3. Subtle blush tint gradient cloud (left under typography) */}
      <div
        aria-hidden="true"
        className="absolute left-[-5%] top-[20%] h-[600px] w-[600px] rounded-full bg-[#FAE5E8] opacity-80 blur-[95px] pointer-events-none select-none z-0"
      />
      {/* Removed SiteNav to render at global page level */}

      <div className="mx-auto flex min-h-screen max-w-[1440px] flex-col px-14 pb-4 pt-2">
        <div className="grid flex-1 grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] gap-0">
          <div className="relative z-30 flex items-start pt-[14vh]">
            <HeroCopy />
          </div>

          <div className="relative z-10 flex items-end justify-end pb-0 pl-0">
            <HeroVisual />
          </div>
        </div>
      </div>

      {/* 
        ADDITIONAL ATMOSPHERIC LIGHT (Behind the wave, overlaying the cutout dress area) 
        Soft powder blue, blush pink, and warm white light blooms to add depth.
      */}
      <div
        aria-hidden="true"
        className="absolute bottom-[8%] left-[30%] h-[350px] w-[500px] rounded-full bg-[#F0F4F8] opacity-8 blur-[100px] pointer-events-none select-none z-15"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-[4%] left-[55%] h-[300px] w-[450px] rounded-full bg-[#F6E8EC] opacity-8 blur-[90px] pointer-events-none select-none z-15"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-[1%] left-[45%] h-[250px] w-[400px] rounded-full bg-white opacity-7 blur-[80px] pointer-events-none select-none z-15"
      />

      {/* 
        HERO FOREGROUND ATMOSPHERIC WAVE OVERLAY (Large Flowing Organic Ribbon)
        Sits above the cutout image but below the text content. Spans full width.
        Height: 350px. Position: bottom: -40px.
        Fades the bottom 35% of the cutout to merge into the Experience section background.
      */}
      <div 
        aria-hidden="true"
        className="absolute left-0 right-0 w-full z-20 pointer-events-none select-none overflow-visible"
        style={{ height: "350px", bottom: "-40px" }}
      >
        <svg
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          className="w-full h-full overflow-visible"
        >
          <defs>
            {/* User's exact requested linear-gradient */}
            <linearGradient id="ribbon-linear" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FCFBFA" stopOpacity="0" />
              <stop offset="35%" stopColor="#FCFBFA" stopOpacity="0.75" />
              <stop offset="65%" stopColor="#FCFBFA" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#FCFBFA" stopOpacity="1" />
            </linearGradient>

            {/* Additional pastel blue and blush radial gradients */}
            <radialGradient id="ribbon-blue" cx="35%" cy="85%" r="65%">
              <stop offset="0%" stopColor="#F0F4F8" stopOpacity="0.75" />
              <stop offset="100%" stopColor="#F0F4F8" stopOpacity="0" />
            </radialGradient>

            <radialGradient id="ribbon-blush" cx="65%" cy="75%" r="60%">
              <stop offset="0%" stopColor="#F6E8EC" stopOpacity="0.65" />
              <stop offset="100%" stopColor="#F6E8EC" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Accent Wave (Blush) */}
          <path
            d="M0,250 C360,170 720,110 1080,210 L1440,270 L1440,320 L0,320 Z"
            fill="url(#ribbon-blush)"
            style={{ filter: "blur(18px)" }}
            className="opacity-75"
          />

          {/* Highlight Wave (Powder Blue) */}
          <path
            d="M0,210 C360,120 720,70 1080,230 L1440,290 L1440,320 L0,320 Z"
            fill="url(#ribbon-blue)"
            style={{ filter: "blur(14px)" }}
            className="opacity-80"
          />

          {/* Primary Wave (White/Off-white Linear Gradient) */}
          <path
            d="M0,230 C360,140 720,90 1080,190 L1440,250 L1440,320 L0,320 Z"
            fill="url(#ribbon-linear)"
            style={{ filter: "blur(10px)" }}
            className="opacity-95"
          />
        </svg>
      </div>
    </section>
  );
}
