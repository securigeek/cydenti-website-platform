import { CtaSection } from "@/components/cta-section";
import { Footer } from "@/components/footer";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center w-full">
      <section className="w-full bg-white py-24">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-sm font-medium text-blue-700 mb-6">Platform Foundations</div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            <span className="text-transparent bg-clip-text bg-[linear-gradient(120deg,var(--color-cydenti-primary),var(--color-cydenti-secondary),var(--color-cydenti-primary))] animate-text-shimmer">APIs & Automation</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">REST APIs and workflow automation for security operations.</p>
        </div>
      </section>
      <CtaSection />
      <Footer />
    </main>
  );
}
