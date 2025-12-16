import { PlatformHero } from "@/components/platform-hero";
import { IdentityAttackSurfaceMap } from "@/components/identity-attack-surface-map";
import { PlatformOverview } from "@/components/platform-overview";
import { PlatformCapabilities } from "@/components/platform-capabilities";
import { PlatformFoundations } from "@/components/platform-foundations";
import { PlatformAudience } from "@/components/platform-audience";
import { CtaSection } from "@/components/cta-section";
import { Footer } from "@/components/footer";

export default function PlatformPage() {
  return (
    <main className="flex min-h-screen flex-col items-center w-full">
      <PlatformHero />
      <IdentityAttackSurfaceMap />
      <PlatformOverview />
      <PlatformCapabilities />
      <PlatformFoundations />
      <PlatformAudience />
      <CtaSection />
      <Footer />
    </main>
  );
}
