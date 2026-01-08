import { PlatformHero } from "@/components/platform-hero";
import { PlatformOverview } from "@/components/platform-overview";
import { PlatformCapabilities } from "@/components/platform-capabilities";
import { PlatformAudience } from "@/components/platform-audience";
import { CtaSection } from "@/components/cta-section";
import { Footer } from "@/components/footer";

export default function PlatformPage() {
  return (
    <main className="flex min-h-screen flex-col items-center w-full">
      <PlatformHero />
      <PlatformOverview />
      <PlatformCapabilities />
      <PlatformAudience />
      <CtaSection />
      <Footer />
    </main>
  );
}
