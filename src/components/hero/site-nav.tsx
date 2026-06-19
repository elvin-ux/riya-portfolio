import Link from "next/link";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#events", label: "Events" },
  { href: "#gallery", label: "Gallery" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

export function SiteNav() {
  return (
    <header className="relative z-30">
      <div className="mx-auto flex max-w-[1400px] items-start justify-between gap-8 px-10 pt-8">
        <div className="min-w-[250px]">
          <p className="font-[family-name:var(--font-signature)] text-[2.8rem] leading-none text-[#be707a]">
            Riya Francis
          </p>
          <p className="mt-2 pl-1 text-[0.68rem] font-semibold uppercase tracking-[0.42em] text-[#6e6164]">
            ANCHOR {"\u2022"} MC {"\u2022"} EVENT HOST
          </p>
        </div>

        <nav className="flex items-center gap-8 pt-4 text-[0.95rem] text-[#2f2a2b]">
          {navItems.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "transition-colors duration-300 hover:text-[#d97a87]",
                index === 0 &&
                  "relative text-[#a96b74] after:absolute after:-bottom-2 after:left-0 after:h-px after:w-full after:bg-[#d5a0a7] after:content-['']",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="min-w-[220px] pt-1 text-right">
          <Button className="px-5 py-3 text-[0.82rem] tracking-[0.08em]">
            Book An Event
          </Button>
        </div>
      </div>
    </header>
  );
}
