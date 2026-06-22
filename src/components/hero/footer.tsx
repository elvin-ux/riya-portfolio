"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { 
  Phone as PhoneIcon, 
  Instagram as InstagramIcon, 
  Facebook as FacebookIcon, 
  Mail as MailIcon 
} from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="contact"
      className="relative w-full overflow-hidden border-t border-[#D98C9A]/10 bg-[#FCFBFA]"
      style={{
        background: "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(253, 248, 249, 0.4) 30%, rgba(247, 246, 251, 0.8) 100%)",
      }}
    >
      {/* Subtle Background Glows */}
      <div
        aria-hidden="true"
        className="absolute bottom-[-10%] left-1/4 h-[350px] w-[500px] rounded-full bg-[#FAE5E8] opacity-[0.2] blur-[90px] pointer-events-none select-none z-0"
      />
      <div
        aria-hidden="true"
        className="absolute top-[10%] right-1/4 h-[300px] w-[450px] rounded-full bg-[#E4EEFC] opacity-[0.15] blur-[80px] pointer-events-none select-none z-0"
      />

      <div className="relative mx-auto max-w-[1240px] w-full z-10 px-6 md:px-14 lg:px-24 pt-16 md:pt-24 pb-12 flex flex-col items-center">
        
        {/* 1. Large Wide Sunflower Portrait Image - Visual Anchor */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative w-full max-w-[380px] md:max-w-[760px] h-[280px] md:h-auto md:aspect-[16/10] rounded-[28px] md:rounded-[36px] group mb-12 shadow-[0_15px_40px_rgba(217,140,154,0.1)] z-10"
        >
          {/* Offset Background Plate */}
          <div 
            className="absolute -inset-2.5 bg-[#FAE5E8]/80 rounded-[32px] md:rounded-[40px] transform translate-x-2.5 translate-y-2.5 shadow-sm -z-10 transition-transform duration-500 group-hover:translate-x-1.5 group-hover:translate-y-1.5"
          />
          
          {/* Image Frame */}
          <div className="relative w-full h-full rounded-[28px] md:rounded-[36px] overflow-hidden border border-white/60 shadow-[0_15px_40px_rgba(217,140,154,0.08)] bg-white/20">
            <Image
              src="/images/sunflower-portrait.jpg"
              alt="Riya Francis in a sunflower field"
              fill
              sizes="(max-width: 768px) 100vw, 80vw"
              className="object-cover transition-transform duration-300 ease-out group-hover:scale-[1.02]"
              priority
            />
            {/* Very soft gradient shadow at the bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-50 z-10 pointer-events-none" />
          </div>
        </motion.div>

        {/* 2. GET IN TOUCH eyebrow */}
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="block font-sans text-[12px] font-semibold tracking-[0.35em] uppercase text-[#D98C9A] mb-4 text-center"
        >
          ✦ GET IN TOUCH ✦
        </motion.span>

        {/* 3. Main heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="font-[family-name:var(--font-serif)] text-[32px] sm:text-[42px] lg:text-[48px] font-semibold text-[#2D2730] leading-[1.2] mb-5 tracking-tight max-w-[720px] text-center"
        >
          Let&apos;s Create Something Memorable Together
        </motion.h2>

        {/* 4. Supporting copy */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.18, ease: "easeOut" }}
          className="font-sans text-[14px] sm:text-[15px] leading-relaxed text-[#6D6670] mb-8 max-w-[620px] text-center"
        >
          Whether it&apos;s a corporate gala, cultural festival, community celebration, conference, or live stage event, I&apos;d love to bring warmth, energy, and connection to your audience.
        </motion.p>

        {/* 5. Contact Details (Phone & Email stacked) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
          className="flex flex-col items-center gap-3.5 mb-8 w-full"
        >
          {/* Phone Link */}
          <a
            href="tel:+64223019841"
            className="inline-flex items-center gap-3 group font-sans font-semibold text-[#2D2730] hover:text-[#d97a87] transition-colors duration-300 py-1.5"
          >
            <span className="flex items-center justify-center w-8 h-8 rounded-full border border-[#D98C9A]/30 bg-white/50 text-[#D98C9A] group-hover:bg-[#D98C9A] group-hover:text-white transition-all duration-250 ease-out">
              <PhoneIcon size={14} className="stroke-[2]" />
            </span>
            <span className="text-[15px] sm:text-[16px] tracking-wide">+64 22 301 9841</span>
          </a>

          {/* Email Link */}
          <a
            href="mailto:Riyafrancis693@gmail.com"
            className="inline-flex items-center gap-3 group font-sans font-semibold text-[#2D2730] hover:text-[#d97a87] transition-colors duration-300 py-1.5"
          >
            <span className="flex items-center justify-center w-8 h-8 rounded-full border border-[#D98C9A]/30 bg-white/50 text-[#D98C9A] group-hover:bg-[#D98C9A] group-hover:text-white transition-all duration-250 ease-out">
              <MailIcon size={14} className="stroke-[2]" />
            </span>
            <span className="text-[15px] sm:text-[16px] tracking-wide">Riyafrancis693@gmail.com</span>
          </a>
        </motion.div>

        {/* 6. Social Buttons Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.32, ease: "easeOut" }}
          className="flex flex-col sm:flex-row sm:items-center justify-center gap-3.5 w-full mb-8 max-w-[500px] sm:max-w-none"
        >
          {/* Instagram Button */}
          <a
            href="https://www.instagram.com/coffeebean_with_a_mic"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-full border border-[#D98C9A]/25 px-6 py-3.5 bg-white/40 text-[#6D6670] hover:bg-white/80 hover:border-[#D98C9A] hover:text-[#d97a87] hover:scale-[1.02] active:scale-[0.98] transition-all duration-250 ease-out font-sans font-medium text-[14px] w-full sm:w-auto"
          >
            <InstagramIcon size={15} className="text-[#be707a]" />
            <span>Instagram</span>
          </a>

          {/* Facebook Button */}
          <a
            href="https://www.facebook.com/share/1ES1MBpTXZ"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-full border border-[#D98C9A]/25 px-6 py-3.5 bg-white/40 text-[#6D6670] hover:bg-white/80 hover:border-[#D98C9A] hover:text-[#d97a87] hover:scale-[1.02] active:scale-[0.98] transition-all duration-250 ease-out font-sans font-medium text-[14px] w-full sm:w-auto"
          >
            <FacebookIcon size={15} className="text-[#3b75c4]" />
            <span>Facebook</span>
          </a>
        </motion.div>

        {/* 8. Location & Availability Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col sm:flex-row sm:items-center justify-center gap-3 w-full"
        >
          {/* Based in New Zealand */}
          <div className="flex items-center justify-center gap-2.5 px-4.5 py-2.5 rounded-full bg-[#E4EEFC]/60 border border-[#E4EEFC]/80 text-[#2D2730] shadow-[0_4px_12px_rgba(80,80,120,0.02)] w-full sm:w-auto">
            <span className="flex items-center justify-center w-5.5 h-5.5 rounded-full bg-white/70 shadow-sm shrink-0 text-[12px]">
              🇳🇿
            </span>
            <span className="font-sans text-[12px] font-semibold tracking-wide text-[#3F3640]">
              Based in New Zealand
            </span>
          </div>

          {/* Available for Events & Hosting */}
          <div className="flex items-center justify-center gap-2.5 px-4.5 py-2.5 rounded-full bg-[#FAE5E8]/60 border border-[#FAE5E8]/80 text-[#2D2730] shadow-[0_4px_12px_rgba(80,80,120,0.02)] w-full sm:w-auto">
            <span className="flex items-center justify-center w-5.5 h-5.5 rounded-full bg-white/70 shadow-sm shrink-0 text-[10px] text-[#be707a]">
              ✦
            </span>
            <span className="font-sans text-[12px] font-semibold tracking-wide text-[#3F3640]">
              Available for Events & Hosting
            </span>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="w-full h-px bg-[#D98C9A]/10 mt-16 md:mt-24 mb-8" />

        {/* Footer Bottom Row */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 w-full text-center md:text-left">
          {/* Logo / Branding */}
          <div className="flex flex-col items-center md:items-start">
            <p className="font-[family-name:var(--font-signature)] text-[2.4rem] leading-none text-[#be707a] select-none">
              Riya Francis
            </p>
            <p className="mt-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.45em] text-[#6e6164]">
              ANCHOR {"\u2022"} MC {"\u2022"} EVENT HOST
            </p>
          </div>

          {/* Copyright Notice */}
          <p className="font-sans text-[11px] tracking-widest uppercase text-[#918589]/80 select-none">
            &copy; {currentYear} Riya Francis &bull; All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
