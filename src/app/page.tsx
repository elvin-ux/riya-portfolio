import { HeroSection } from "@/components/hero/hero-section";
import { ExperienceSection } from "@/components/hero/experience-section";
import { EventsSection } from "@/components/hero/events-section";
import { HighlightsSection } from "@/components/hero/highlights-section";
import { MediaSection } from "@/components/hero/media-section";
import { BrandsSection } from "@/components/hero/brands-section";

export default function HomePage() {
  return (
    <main className="bg-[#FCFBFA]">
      <HeroSection />
      <ExperienceSection />
      <EventsSection />
      <MediaSection />
      <HighlightsSection />
      <BrandsSection />
    </main>
  );
}
