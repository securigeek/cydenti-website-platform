import { SolutionHero } from "@/components/solution-hero";
import { SolutionChallenges } from "@/components/solution-challenges";
import { SolutionCore } from "@/components/solution-core";
import { SolutionTeams } from "@/components/solution-teams";
import { SolutionBenefits } from "@/components/solution-benefits";
import { SolutionCta } from "@/components/solution-cta";
import { Footer } from "@/components/footer";

export default function SolutionPage() {
  return (
    <main className="flex min-h-screen flex-col items-center w-full">
      <SolutionHero />
      <SolutionChallenges />
      <SolutionCore />
      <SolutionBenefits />
      <SolutionTeams />
      <SolutionCta />
      <Footer />
    </main>
  );
}
