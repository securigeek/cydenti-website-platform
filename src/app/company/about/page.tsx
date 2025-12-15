import { AboutHero } from "@/components/about-hero";
import { AboutStorySection } from "@/components/about-story-section";
import { MissionVision } from "@/components/mission-vision";
import { LeadershipTeam } from "@/components/leadership-team";
import { RoadmapTimeline } from "@/components/roadmap-timeline";
import { GlobalPresence } from "@/components/global-presence";
import { CtaSection } from "@/components/cta-section";
import { Footer } from "@/components/footer";

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col w-full bg-white">
      <AboutHero />
      <AboutStorySection />
      <MissionVision />
      <LeadershipTeam />
      <RoadmapTimeline />
      <GlobalPresence />
      <CtaSection />
      <Footer />
    </main>
  );
}
