import { CtaSection } from "@/components/cta-section";
import { Footer } from "@/components/footer";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center w-full">
      <section className="w-full bg-white py-24">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-4 py-1.5 text-sm font-medium text-amber-700 mb-6">Platform Foundations</div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            <span className="text-transparent bg-clip-text bg-[linear-gradient(120deg,var(--color-cydenti-primary),var(--color-cydenti-secondary),var(--color-cydenti-primary))] animate-text-shimmer">AI Risk Engine</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">Context-aware analysis to baseline, detect anomalies, and recommend remediation.</p>
        </div>
      </section>
      <CtaSection />
      <Footer />
    </main>
  );
}
