import { Hero } from "@/components/hero";
import { NewsTicker } from "@/components/news-ticker";
import { FeatureCardsSection } from "@/components/feature-cards-section";
import { IdentityFlowchartSection } from "@/components/identity-flowchart-section";
import { SystemArchitectureSection } from "@/components/system-architecture-section";
import { AiAutomationSection } from "@/components/ai-automation-section";
import { IntegrationsSection } from "@/components/integrations-section";
import { FaqSection } from "@/components/faq-section";
import { WhyCydentiSection } from "@/components/why-cydenti-section";
import { AuditAndThreatFlowSection } from "@/components/audit-and-threat-flow-section";
import { UseCasesSection } from "@/components/use-cases-section";

import { CtaSection } from "@/components/cta-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between overflow-x-hidden w-full">
      <Hero />
      <NewsTicker />
      <FeatureCardsSection />
      <IdentityFlowchartSection />
      <SystemArchitectureSection />
      <AiAutomationSection />
      
      <WhyCydentiSection />
      <UseCasesSection />

      <IntegrationsSection />
      <FaqSection />
      <CtaSection />
      <Footer />
    </main>
  );
}
