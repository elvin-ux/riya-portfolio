"use client";

import { useRef, useState, useEffect, memo } from "react";
import Image from "next/image";
import { motion, useInView, AnimatePresence } from "motion/react";

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

type HighlightItem = {
  src: string;
  alt: string;
  tag: string;
  rowSpan: string;
  colSpan: string;
  objectPos: string;
};

const desktopHighlights: HighlightItem[] = [
  {
    src: "/events/Award function.jpeg",
    alt: "Award Function",
    tag: "Award Function",
    rowSpan: "h-[250px]",
    colSpan: "md:col-span-1",
    objectPos: "object-[center_20%]",
  },
  {
    src: "/events/Birthday Party.jpeg",
    alt: "Birthday Party",
    tag: "Birthday Party",
    rowSpan: "h-[250px]",
    colSpan: "md:col-span-2",
    objectPos: "object-[center_15%]",
  },
  {
    src: "/events/Christmas celebration.jpeg",
    alt: "Christmas Celebration",
    tag: "Christmas Celebration",
    rowSpan: "h-[250px]",
    colSpan: "md:col-span-1",
    objectPos: "object-[center_25%]",
  },
  {
    src: "/events/music event.jpeg",
    alt: "Music Event",
    tag: "Music Event",
    rowSpan: "h-[250px]",
    colSpan: "md:col-span-2",
    objectPos: "object-[center_20%]",
  },
  {
    src: "/events/onam celebration.jpeg",
    alt: "Onam Celebration",
    tag: "Onam Celebration",
    rowSpan: "h-[250px]",
    colSpan: "md:col-span-1",
    objectPos: "object-[center_20%]",
  },
  {
    src: "/events/Corporate event.jpeg",
    alt: "Corporate Event",
    tag: "Corporate Event",
    rowSpan: "h-[250px]",
    colSpan: "md:col-span-1",
    objectPos: "object-[center_20%]",
  },
];

const allImages = [
  { src: "/events/Award function.jpeg", alt: "Award Function", tag: "Award Function" },
  { src: "/events/Birthday Party.jpeg", alt: "Birthday Party", tag: "Birthday Party" },
  { src: "/events/Christmas celebration.jpeg", alt: "Christmas Celebration", tag: "Christmas Celebration" },
  { src: "/events/music event.jpeg", alt: "Music Event", tag: "Music Event" },
  { src: "/events/onam celebration.jpeg", alt: "Onam Celebration", tag: "Onam Celebration" },
  { src: "/events/Corporate event.jpeg", alt: "Corporate Event", tag: "Corporate Event" },
  { src: "/events/Anniversary event.jpeg", alt: "Anniversary Event", tag: "Anniversary Event" },
  { src: "/events/Wedding.jpeg", alt: "Wedding", tag: "Wedding" },
  { src: "/events/Bnz Diwali festival.jpeg", alt: "BNZ Diwali Festival", tag: "BNZ Diwali Festival" },
  { src: "/events/Diwali Mela.jpeg", alt: "Diwali Mela", tag: "Diwali Mela" },
  { src: "/events/Sports tournament.jpeg", alt: "Sports Tournament", tag: "Sports Tournament" },
  { src: "/events/Holy communion.jpeg", alt: "Holy Communion", tag: "Holy Communion" },
  {
    src: "/events/Miss India newzealand 2023 finalist.jpeg",
    alt: "Miss India New Zealand 2023 Finalist",
    tag: "Miss India New Zealand 2023 Finalist",
  },
  { src: "/events/Birthday.jpeg", alt: "Birthday", tag: "Birthday" },
];

const cuteAccentsData = [
  { type: "sparkle", top: "15%", left: "10%", size: 16 },
  { type: "heart", top: "25%", right: "8%", size: 14 },
  { type: "star", bottom: "35%", left: "6%", size: 12 },
  { type: "dot", bottom: "18%", right: "12%", size: 8 },
  { type: "sparkle", top: "50%", left: "48%", size: 18 },
  { type: "heart", bottom: "10%", left: "20%", size: 12 },
];

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

const HeartIcon = ({ filled = true }: { filled?: boolean }) => (
  <svg
    viewBox="0 0 24 24"
    className={`w-3.5 h-3.5 ${filled ? "fill-[#D98C9A]" : "stroke-[#D98C9A] fill-none"}`}
    strokeWidth={2}
  >
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
  </svg>
);

// Memoized static decorations — never re-renders due to parent state changes
const StaticDecorations = memo(function StaticDecorations() {
  return (
    <>
      {/* ATMOSPHERIC GLOWS */}
      <div
        aria-hidden="true"
        className="absolute top-[10%] left-[5%] h-[350px] w-[350px] rounded-full pointer-events-none select-none z-0 transform-gpu"
        style={{ background: "radial-gradient(circle, rgba(250, 229, 232, 0.06) 0%, transparent 60%)" }}
      />
      <div
        aria-hidden="true"
        className="absolute bottom-[20%] right-[10%] h-[400px] w-[400px] rounded-full pointer-events-none select-none z-0 transform-gpu"
        style={{ background: "radial-gradient(circle, rgba(228, 238, 252, 0.07) 0%, transparent 60%)" }}
      />
      <div
        aria-hidden="true"
        className="absolute top-[40%] right-[20%] h-[300px] w-[300px] rounded-full pointer-events-none select-none z-0 transform-gpu"
        style={{ background: "radial-gradient(circle, rgba(255, 255, 255, 0.08) 0%, transparent 60%)" }}
      />

      {/* CUTE DECORATIVE ACCENTS */}
      {cuteAccentsData.map((accent, idx) => (
        <span
          key={idx}
          className="absolute text-[#D98C9A]/20 pointer-events-none select-none z-0"
          style={{
            top: accent.top,
            bottom: accent.bottom,
            left: accent.left,
            right: accent.right,
          }}
        >
          {accent.type === "sparkle" && (
            <svg viewBox="0 0 24 24" className="fill-current" style={{ width: accent.size, height: accent.size }}>
              <path d="M12 0L14.6 9.4L24 12L14.6 14.6L12 24L9.4 14.6L0 12L9.4 9.4L12 0Z" />
            </svg>
          )}
          {accent.type === "heart" && (
            <svg viewBox="0 0 24 24" className="fill-current" style={{ width: accent.size, height: accent.size }}>
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          )}
          {accent.type === "star" && (
            <svg viewBox="0 0 24 24" className="fill-current" style={{ width: accent.size, height: accent.size }}>
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
          )}
          {accent.type === "dot" && (
            <span className="block rounded-full bg-[#D98C9A]" style={{ width: accent.size, height: accent.size }} />
          )}
        </span>
      ))}
    </>
  );
});

// ---------------------------------------------------------------------------
// IntersectionObserver hook — no onScroll, no main-thread thrashing
// ---------------------------------------------------------------------------

function useMobileScrollIndex(
  scrollRef: React.RefObject<HTMLDivElement | null>,
  count: number
) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const cards = Array.from(container.children) as HTMLElement[];
    if (cards.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        let best = { ratio: -1, index: 0 };
        entries.forEach((entry) => {
          const idx = cards.indexOf(entry.target as HTMLElement);
          if (idx !== -1 && entry.intersectionRatio > best.ratio) {
            best = { ratio: entry.intersectionRatio, index: idx };
          }
        });
        if (best.ratio > 0) {
          setActiveIndex(best.index);
        }
      },
      { root: container, threshold: [0.5, 0.75, 1.0] }
    );

    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, [scrollRef, count]);

  return activeIndex;
}

// ---------------------------------------------------------------------------
// MobileCarousel — isolated component so its state never re-renders the parent
// ---------------------------------------------------------------------------

function MobileCarousel({ images }: { images: HighlightItem[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const activeIndex = useMobileScrollIndex(scrollRef, images.length);

  return (
    <div className="md:hidden flex flex-col items-center w-full">
      {/* Scroll container — no onScroll handler, IntersectionObserver does the work */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto gap-5 pb-6 pt-2 w-screen scrollbar-none snap-x snap-mandatory overflow-y-visible transform-gpu"
        style={{
          paddingLeft: "calc(50vw - 140px)",
          paddingRight: "calc(50vw - 140px)",
        }}
      >
        {images.map((image, i) => (
          <div
            key={`mobile-${image.src}`}
            className="snap-center flex-shrink-0 w-[280px] aspect-[4/5] relative rounded-[24px] overflow-hidden border border-white/50 shadow-lg cursor-pointer"
          >
            {/* Event tag — solid bg, no backdrop-blur */}
            <div className="absolute top-4 left-4 z-20 flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[12px] font-medium bg-white/95 border border-white/60 shadow-sm text-[#2D2730] pointer-events-none select-none">
              <span className="flex items-center justify-center">
                <HeartIcon filled={true} />
              </span>
              <span>{image.tag}</span>
            </div>

            {/* Image wrapper — GPU-accelerated layer */}
            <div className="relative w-full h-full transform-gpu will-change-transform">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="280px"
                className={`object-cover ${image.objectPos}`}
                priority={i < 2}
                quality={75}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent z-10" />
            </div>
          </div>
        ))}
      </div>

      {/* Indicator dots */}
      <div className="flex items-center gap-2.5 mt-5 text-[#D98C9A] select-none text-[15px]">
        {images.map((_, i) => (
          <span key={`indicator-${i}`} className="transition-all duration-300 transform">
            {i === activeIndex ? (
              <span className="text-[17px] font-bold inline-block scale-110 drop-shadow-sm">♥</span>
            ) : (
              <span className="opacity-40 inline-block">○</span>
            )}
          </span>
        ))}
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Main export
// ---------------------------------------------------------------------------

export function HighlightsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Lock body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = isModalOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isModalOpen]);

  return (
    <section
      id="gallery"
      ref={containerRef}
      className={`relative px-6 md:px-14 lg:px-24 pt-12 pb-20 overflow-hidden flex flex-col items-center ${
        isModalOpen ? "z-50" : "z-10"
      }`}
      style={{
        background: "linear-gradient(135deg, #FDF8F9 0%, #F7F6FB 45%, #F4F8FD 100%)",
      }}
    >
      {/* Memoized decorations — immune to isModalOpen re-renders */}
      <StaticDecorations />

      <div className="relative mx-auto max-w-[1240px] w-full z-10">
        {/* Section Header */}
        <div className="text-center mb-6 md:mb-8 flex flex-col items-center">
          <span className="block text-center font-sans text-[12px] font-semibold tracking-[0.35em] uppercase text-[#D98C9A] mb-3">
            ✦ EVENT HIGHLIGHTS ✦
          </span>
          <h2
            className="font-[family-name:var(--font-serif)] font-semibold text-[#2D2730] leading-tight text-center max-w-[900px]"
            style={{ fontSize: "clamp(2rem, 3.8vw, 3rem)" }}
          >
            Moments From The Spotlight
          </h2>
          <p className="mt-2.5 max-w-[550px] text-center font-sans text-[14px] leading-[1.6] text-[#6D6670]">
            {"A collection of unforgettable moments from weddings, celebrity interviews, cultural festivals, sports events, corporate stages, and live performances."}
          </p>
        </div>

        {/* DESKTOP VIEW: Bento Grid */}
        <div className="hidden md:grid grid-cols-4 gap-4 w-full items-start justify-items-stretch">
          {desktopHighlights.map((image, i) => (
            <motion.div
              key={image.src}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: i * 0.05, ease: "easeOut" }}
              style={{ boxShadow: "0 10px 30px rgba(80, 80, 120, 0.04)" }}
              className={`${image.colSpan} ${image.rowSpan} group relative rounded-[24px] overflow-hidden border border-white/40 cursor-pointer`}
            >
              {/* Event tag — solid bg, no backdrop-blur */}
              <div className="absolute top-4 left-4 z-20 flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[12px] font-medium bg-white/95 border border-white/60 shadow-sm text-[#2D2730] pointer-events-none select-none">
                <span className="flex items-center justify-center">
                  <HeartIcon filled={true} />
                </span>
                <span>{image.tag}</span>
              </div>

              {/* Image wrapper — GPU-composited layer for smooth hover scale */}
              <div className="relative w-full h-full overflow-hidden transform-gpu will-change-transform">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes={image.colSpan.includes("col-span-2") ? "50vw" : "25vw"}
                  className={`object-cover ${image.objectPos} transition-transform duration-300 ease-out group-hover:scale-[1.03]`}
                  priority={i < 3}
                  quality={75}
                />
                {/* Lightweight hover overlay — solid color, no blur */}
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* MOBILE VIEW — isolated component, state changes never reach the parent */}
        <MobileCarousel images={desktopHighlights} />

        {/* View Gallery CTA */}
        <div className="mt-8 flex justify-center">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setIsModalOpen(true)}
            className="group flex items-center gap-2 rounded-full px-8 py-3.5 bg-white/60 border border-[#D98C9A]/30 text-[#2D2730] font-sans font-medium text-[14px] md:text-[15px] tracking-wide shadow-[0_8px_25px_rgba(217,140,154,0.08)] cursor-pointer hover:bg-white/80 hover:border-[#D98C9A] hover:shadow-[0_12px_30px_rgba(217,140,154,0.18)] transition-all duration-250 ease-out"
          >
            <span>View Full Gallery</span>
            <span className="transform transition-transform duration-250 ease-out group-hover:translate-x-1">→</span>
          </motion.button>
        </div>
      </div>

      {/* FULLSCREEN MODAL GALLERY */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-50 bg-[#FCFBFA] overflow-y-auto flex flex-col items-center py-10 px-6 md:px-14"
          >
            {/* Modal Header */}
            <div className="w-full max-w-[1200px] flex justify-between items-center mb-10 border-b border-[#D98C9A]/15 pb-4">
              <div className="flex flex-col">
                <span className="font-sans text-[11px] font-semibold tracking-[0.3em] uppercase text-[#D98C9A]">
                  The Full Spotlight
                </span>
                <h3 className="font-[family-name:var(--font-serif)] font-semibold text-[24px] md:text-[28px] text-[#2D2730] mt-1">
                  Spotlight Gallery
                </h3>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="group flex items-center justify-center w-11 h-11 rounded-full border border-[#D98C9A]/30 text-[#D98C9A] hover:bg-[#D98C9A]/10 hover:border-[#D98C9A] transition-all duration-300 cursor-pointer"
                aria-label="Close Gallery"
              >
                <span className="text-[16px] group-hover:scale-90 transition-transform duration-300">✕</span>
              </button>
            </div>

            {/* Scrollable Gallery Grid */}
            <motion.div
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.15, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-[1200px] pb-16"
            >
              {allImages.map((image, idx) => (
                <div
                  key={idx}
                  className="group relative rounded-[24px] overflow-hidden border border-white/50 shadow-[0_8px_25px_rgba(0,0,0,0.03)] h-[280px] cursor-default"
                >
                  {/* Event tag — solid bg, no backdrop-blur */}
                  <div className="absolute top-4 left-4 z-20 flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[11px] font-medium bg-white/95 border border-white/60 text-[#2D2730] shadow-sm pointer-events-none select-none">
                    <span>♥</span>
                    <span>{image.tag}</span>
                  </div>

                  {/* Image wrapper — GPU-composited for smooth hover */}
                  <div className="relative w-full h-full overflow-hidden transform-gpu will-change-transform">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      className="object-cover object-[center_20%] transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-[1.03]"
                      quality={75}
                      priority={idx < 4}
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
