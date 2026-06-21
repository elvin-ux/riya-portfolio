"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#events", label: "Events" },
  { href: "#gallery", label: "Gallery" },
  { href: "#brands", label: "Brands" },
  { href: "#contact", label: "Contact" },
];

export function SiteNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ["home", "events", "gallery", "brands", "contact"];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Set initial state
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "absolute top-0 left-0 w-full z-30",
        "md:fixed md:top-0 md:left-0 md:w-full md:z-40 md:transition-all md:duration-500",
        isScrolled
          ? "md:bg-[#FCFBFA]/85 md:backdrop-blur-md md:shadow-[0_4px_30px_rgba(190,112,122,0.03)] md:border-b md:border-[#be707a]/5"
          : "md:bg-transparent"
      )}
    >
      {/* Desktop Header */}
      <div
        className={cn(
          "mx-auto flex max-w-[1440px] items-center justify-between gap-8 px-6 md:px-10 transition-all duration-500",
          isScrolled ? "pt-4 pb-4" : "pt-8 pb-0"
        )}
      >
        {/* Logo Block */}
        <div className="min-w-[250px] z-30">
          <Link href="#home" className="block group">
            <p className="font-[family-name:var(--font-signature)] text-[2.8rem] leading-none text-[#be707a] transition-colors duration-300 group-hover:text-[#d97a87]">
              Riya Francis
            </p>
          </Link>
        </div>

        {/* Desktop Navigation Links - Aligned to the right side */}
        <nav className="hidden md:flex items-center justify-end gap-8 text-[0.95rem] flex-1">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.replace("#", "");
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "transition-all duration-300 hover:text-[#d97a87] font-medium tracking-wide",
                  isActive
                    ? "relative text-[#a96b74] after:absolute after:-bottom-2 after:left-0 after:h-px after:w-full after:bg-[#d5a0a7] after:content-['']"
                    : "text-[#2f2a2b]"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Mobile Hamburger Pill Button (Floating) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          borderColor: "rgba(217, 140, 154, 0.25)",
        }}
        className="md:hidden fixed top-6 right-6 z-50 flex items-center justify-center w-12 h-12 rounded-full bg-white/75 backdrop-blur-md shadow-[0_8px_25px_rgba(217,140,154,0.12)] text-[#2f2a2b] transition-all duration-300 hover:bg-white/90 hover:border-[#D98C9A]/50 active:scale-95 cursor-pointer border"
        aria-label="Toggle Menu"
      >
        <div className="relative w-5.5 h-4 flex flex-col justify-between items-center">
          <span
            className={cn(
              "block h-[1.8px] w-5.5 bg-[#2f2a2b] rounded transition-all duration-300 origin-center",
              isOpen && "transform rotate-45 translate-y-[7.1px]"
            )}
          />
          <span
            className={cn(
              "block h-[1.8px] w-4 bg-[#2f2a2b] rounded transition-all duration-300",
              isOpen && "opacity-0 w-0"
            )}
          />
          <span
            className={cn(
              "block h-[1.8px] w-5.5 bg-[#2f2a2b] rounded transition-all duration-300 origin-center",
              isOpen && "transform -rotate-45 -translate-y-[7.1px]"
            )}
          />
        </div>
      </button>

      {/* Mobile Floating Card Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            style={{
              borderColor: "rgba(217, 140, 154, 0.2)",
            }}
            className="md:hidden fixed top-20 right-6 z-40 w-[240px] rounded-3xl border bg-white/85 backdrop-blur-xl p-5 shadow-[0_15px_35px_rgba(217,140,154,0.12)] flex flex-col gap-3"
          >
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace("#", "");
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "block py-2.5 px-4 rounded-2xl text-[0.98rem] font-medium transition-all duration-200",
                    isActive
                      ? "text-[#a96b74] bg-[#D98C9A]/8 font-semibold"
                      : "text-[#2f2a2b] hover:text-[#d97a87] hover:bg-[#D98C9A]/5"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
