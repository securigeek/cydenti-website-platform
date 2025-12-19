import { CtaSection } from "@/components/cta-section";
import { Footer } from "@/components/footer";
import { IdentityThreatFlow } from "@/components/identity-threat-flow";
import { IdentityThreatsPentagon } from "@/components/identity-threats-pentagon";
import Image from "next/image";
import { 
  ShieldAlert, 
  UserX, 
  GitMerge, 
  Activity, 
  Search, 
  AlertTriangle, 
  Zap, 
  CheckCircle2,
  Users,
} from "lucide-react";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center w-full bg-white">
      {/* Hero Section */}
      <section className="w-full bg-white pt-24 pb-12 flex flex-col items-center">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl mb-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-sm font-medium text-blue-700 mb-6">Core Capabilities</div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            <span className="text-transparent bg-clip-text bg-[linear-gradient(120deg,var(--color-cydenti-primary),var(--color-cydenti-secondary),var(--color-cydenti-primary))] animate-text-shimmer">Identity Threat Detection (ITDR)</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">Detect identity-based threats and anomalies across SaaS and cloud.</p>
        </div>
        
        <IdentityThreatFlow />
      </section>

      {/* The Problem Section */}
      <section className="w-full py-24 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <div className="inline-flex items-center gap-2 text-rose-600 font-semibold mb-4 bg-rose-50 px-3 py-1 rounded-full border border-rose-100">
                <ShieldAlert className="w-4 h-4" />
                The Problem
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Modern Attacks Don’t Look Like Attacks
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Today’s attackers rarely rely on malware or exploits. They use valid credentials, legitimate access paths, and trusted integrations to move silently through environments.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Without identity context, these attacks remain invisible until damage is done.
              </p>
            </div>
            <div className="md:w-1/2 bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
              <h3 className="font-semibold text-slate-900 mb-6">Traditional security tools struggle to detect:</h3>
              <ul className="space-y-4">
                {[
                  "Credential misuse that looks “normal”",
                  "Privilege escalation using legitimate permissions",
                  "Abuse of service accounts and machine identities",
                  "SaaS and cloud access outside of expected behavior"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <UserX className="w-5 h-5 text-rose-500 mt-0.5 shrink-0" />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* The Cydenti Approach */}
      <section className="w-full py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 text-blue-600 font-semibold mb-4 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
            <Activity className="w-4 h-4" />
            The Cydenti Approach
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
            Identity-First Threat Detection
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed mb-12">
            Cydenti takes a fundamentally different approach to threat detection by focusing on identity behavior and access relationships — not just events or alerts.
          </p>
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-2xl text-white shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none" />
            <p className="text-xl md:text-2xl font-medium leading-relaxed relative z-10">
              &quot;By correlating activity across identities, permissions, resources, and integrations, Cydenti reveals how access is being used, not just that it occurred.&quot;
            </p>
          </div>
        </div>
      </section>

      {/* What Cydenti Analyzes */}
      <section className="w-full py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20" />
        <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-cyan-400 font-semibold mb-4 bg-cyan-950/30 px-3 py-1 rounded-full border border-cyan-800">
              <Search className="w-4 h-4" />
              What Cydenti Analyzes
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Continuous Identity Behavior Analysis
            </h2>
          </div>

          <div className="w-full">
            <IdentityThreatsPentagon />
          </div>
        </div>
      </section>

      {/* How It Works (Process Flow) */}
      <section className="w-full py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              How Cydenti Detects Identity Threats
            </h2>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-blue-200 to-transparent -translate-x-1/2" />

            <div className="space-y-12 relative">
              {[
                {
                  step: "Step 1",
                  title: "Build Identity Context",
                  desc: "Cydenti continuously maps identities, permissions, roles, and access paths using the Identity Graph.",
                  side: "left"
                },
                {
                  step: "Step 2",
                  title: "Establish Behavioral Baselines",
                  desc: "AI models learn normal behavior across identities and environments.",
                  side: "right"
                },
                {
                  step: "Step 3",
                  title: "Detect Anomalies & Abuse",
                  desc: "Cydenti identifies deviations that indicate compromise, misuse, or escalation.",
                  side: "left"
                },
                {
                  step: "Step 4",
                  title: "Prioritize by Risk & Impact",
                  desc: "Threats are scored based on exposure, blast radius, and downstream access.",
                  side: "right"
                },
                {
                  step: "Step 5",
                  title: "Recommend Action",
                  desc: "Cydenti provides clear remediation guidance aligned to security workflows.",
                  side: "left"
                }
              ].map((item, i) => (
                <div key={i} className={`flex flex-col md:flex-row items-center gap-8 ${item.side === 'right' ? 'md:flex-row-reverse' : ''}`}>
                  <div className={`flex-1 text-center ${item.side === 'right' ? 'md:text-left' : 'md:text-right'}`}>
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:border-blue-200 transition-colors">
                      <span className="text-sm font-bold text-blue-600 uppercase tracking-wider mb-2 block">{item.step}</span>
                      <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                      <p className="text-slate-600">{item.desc}</p>
                    </div>
                  </div>
                  
                  <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white font-bold shadow-lg shadow-blue-200 ring-4 ring-white">
                    {i + 1}
                  </div>
                  
                  <div className="flex-1" />
                </div>
              ))}
            </div>

            {/* Visual Flowchart Summary */}
            <div className="mt-20 pt-12 border-t border-slate-100">
              <div className="flex flex-col md:flex-row items-center justify-center gap-8 relative">
                {/* Connecting Line (Desktop) */}
                <div className="hidden md:block absolute top-[26px] left-[10%] right-[10%] h-0.5 bg-slate-100 z-0" />

                {[
                  { label: "Normal Behavior", icon: Users, color: "text-slate-500", bg: "bg-slate-100", border: "border-slate-200" },
                  { label: "Anomaly Detected", icon: AlertTriangle, color: "text-amber-600", bg: "bg-amber-50", border: "border-amber-200" },
                  { label: "Risk Scored", icon: ShieldAlert, color: "text-rose-600", bg: "bg-rose-50", border: "border-rose-200" },
                  { label: "Auto-Remediation", icon: Zap, color: "text-blue-600", bg: "bg-blue-50", border: "border-blue-200" },
                ].map((item, i) => (
                  <div key={i} className="relative z-10 flex flex-col items-center gap-4 bg-white px-4">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${item.bg} ${item.color} border ${item.border} shadow-sm transition-transform hover:scale-110 duration-300`}>
                      <item.icon className="w-6 h-6" />
                    </div>
                    <span className="text-sm font-bold text-slate-700">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You See */}
      <section className="w-full py-24 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Clear, Actionable Detection — Not Alert Noise
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                In the Cydenti Platform, You See:
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Identity-centric threat timelines",
                  "High-risk identity and account rankings",
                  "Contextual access paths showing impact",
                  "Machine identity and service account risk views",
                  "Recommended remediation actions"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-teal-500" />
                    <span className="text-slate-800 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="bg-white p-4 rounded-lg border border-slate-200 inline-block text-slate-600 text-sm font-medium">
                No raw log dumps. No guessing. Just identity-driven clarity.
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="relative rounded-xl overflow-hidden shadow-2xl border border-slate-200/50 bg-slate-50">
                 <Image 
                    src="/human-identities-detailes.png"
                    alt="Cydenti Identity Threat Detection Dashboard"
                    width={800}
                    height={600}
                    className="w-full h-auto"
                 />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="w-full py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Security Outcomes That Matter
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Early Threat Detection",
                desc: "Detect identity-based attacks before data exfiltration or system compromise.",
                icon: ShieldAlert,
                color: "text-blue-600",
                bg: "bg-blue-50"
              },
              {
                title: "Reduced MTTR",
                desc: "Understand who is impacted, what is exposed, and how to fix it — instantly.",
                icon: Activity,
                color: "text-green-600",
                bg: "bg-green-50"
              },
              {
                title: "Full Protection",
                desc: "Secure humans, machines, and AI agents with the same detection logic.",
                icon: Users,
                color: "text-purple-600",
                bg: "bg-purple-50"
              },
              {
                title: "Fewer False Positives",
                desc: "Contextual analysis dramatically reduces alert fatigue.",
                icon: CheckCircle2,
                color: "text-teal-600",
                bg: "bg-teal-50"
              }
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <div className={`w-12 h-12 ${item.bg} ${item.color} rounded-xl flex items-center justify-center mb-4`}>
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Fit */}
      <section className="w-full py-24 bg-gradient-to-br from-slate-900 to-blue-900 text-white">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl text-center">
          <div className="inline-flex items-center gap-2 text-blue-300 font-semibold mb-4 bg-blue-900/30 px-3 py-1 rounded-full border border-blue-700/50">
            <GitMerge className="w-4 h-4" />
            Stronger Together
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Identity Threat Detection is powered by:
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[
              { label: "Identity Graph", desc: "for access context" },
              { label: "AI Risk Engine", desc: "for anomaly detection" },
              { label: "Risk Scoring", desc: "for prioritization" },
              { label: "Compliance Reporting", desc: "for investigation" }
            ].map((item, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm border border-white/10 p-6 rounded-xl">
                <div className="font-bold text-lg mb-1">{item.label}</div>
                <div className="text-blue-200 text-sm">{item.desc}</div>
              </div>
            ))}
          </div>
          
          <p className="text-xl text-blue-100 font-medium">
            This ensures detection is not isolated — it drives real security outcomes.
          </p>
        </div>
      </section>

      {/* Who It&apos;s For */}
      <section className="w-full py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12">
            Built for Identity-Centric Security Teams
          </h2>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {[
              "Security Operations (SOC)",
              "Detection & Response Engineering",
              "Cloud Security Teams",
              "Identity & IAM Owners"
            ].map((item, i) => (
              <div key={i} className="px-6 py-3 bg-slate-50 rounded-full border border-slate-200 text-slate-700 font-semibold shadow-sm">
                {item}
              </div>
            ))}
          </div>
          
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Cydenti helps teams detect identity threats without rebuilding their entire security stack.
          </p>
        </div>
      </section>

      <CtaSection />
      <Footer />
    </main>
  );
}
