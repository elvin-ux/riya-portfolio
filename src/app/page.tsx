import { SiteNav } from "@/components/hero/site-nav";
import { HeroSection } from "@/components/hero/hero-section";
import { ExperienceSection } from "@/components/hero/experience-section";
import { EventsSection } from "@/components/hero/events-section";
import { HighlightsSection } from "@/components/hero/highlights-section";
import { BrandsSection } from "@/components/hero/brands-section";
import { Footer } from "@/components/hero/footer";

export default function HomePage() {
  return (
    <main className="bg-[#FCFBFA]">
      <SiteNav />
      <HeroSection />
      <ExperienceSection />
      <EventsSection />
      <HighlightsSection />
      <BrandsSection />
      <Footer />
    </main>
  );
}
