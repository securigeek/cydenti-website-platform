import { CtaSection } from "@/components/cta-section";
import { Footer } from "@/components/footer";
import { 
  Network, 
  AlertTriangle, 
  Brain, 
  Activity, 
  GitBranch, 
  ShieldCheck, 
  Users, 
  Zap, 
  Layers, 
  CheckCircle2,
  Globe,
  Lock,
  FileSearch
} from "lucide-react";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center w-full bg-white">
      {/* Hero Section */}
      <section className="w-full bg-white pt-32 pb-24 md:pt-40 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100/40 via-transparent to-transparent" />
        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-sm font-medium text-blue-700 mb-6">
            Platform Foundations
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight leading-tight">
            <span className="text-gradient-primary">
              AI Risk Engine
            </span>
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed mb-8">
            Context-aware analysis to baseline, detect anomalies, and recommend remediation.
          </p>
        </div>
      </section>

      {/* Intro Block: Context */}
      <section className="w-full py-20 bg-slate-50 border-y border-slate-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
              AI only works when it <span className="text-blue-600">understands context</span>.
            </h2>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-12">
              In identity security, context isn&apos;t just activity — it&apos;s who acted, what they could reach, how access was granted, and what changed as a result.
            </p>
            
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-blue-100 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-500" />
              <p className="text-2xl font-medium text-slate-800 italic">
                &quot;Cydenti&apos;s AI Risk Engine applies intelligence where it matters most: turning identity complexity into clear, defensible decisions.&quot;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem: Pattern Matching vs Understanding */}
      <section className="w-full py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-blue-600 font-semibold tracking-wide uppercase text-sm mb-3">The Problem With &quot;AI&quot; in Security</div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Pattern Matching Isn’t Understanding
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                Many tools apply AI to isolated data points, creating noisy detections and fragile scores.
              </p>
              
              <div className="space-y-6">
                {[
                  { title: "Logs without access context", icon: FileSearch },
                  { title: "Events without relationships", icon: GitBranch },
                  { title: "Alerts without impact", icon: AlertTriangle },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-red-200 transition-colors">
                    <div className="p-2 bg-white rounded-lg shadow-sm text-red-500">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 text-lg">{item.title}</h3>
                      <p className="text-slate-500 text-sm mt-1">Lacks the full picture needed for accurate risk assessment.</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full opacity-50 blur-3xl" />
              <div className="bg-slate-900 text-white p-8 rounded-2xl shadow-2xl relative z-10">
                <div className="flex items-center gap-3 mb-6 border-b border-slate-700 pb-4">
                  <Brain className="w-8 h-8 text-cyan-400" />
                  <span className="font-bold text-xl">Cydenti Difference</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-cyan-50">Starts from a different foundation</h3>
                <p className="text-slate-300 text-lg mb-8">
                  A complete, continuously updated <span className="text-white font-semibold">Identity Graph</span>.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-800 p-4 rounded-lg border border-slate-700">
                    <div className="text-cyan-400 font-bold text-lg mb-1">Context</div>
                    <div className="text-sm text-slate-400">Deep relationship mapping</div>
                  </div>
                  <div className="bg-slate-800 p-4 rounded-lg border border-slate-700">
                    <div className="text-blue-400 font-bold text-lg mb-1">Clarity</div>
                    <div className="text-sm text-slate-400">Noise reduction</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Foundation: Intelligence Built on Relationships */}
      <section className="w-full py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="text-cyan-400 font-semibold tracking-wide uppercase text-sm mb-3">Intelligence Built on Relationships</div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">AI That Sees the Whole Picture</h2>
            <p className="text-xl text-slate-300">
              Because Cydenti understands how identities, permissions, and resources connect, the AI Risk Engine works smarter.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                title: "Behavioral Baselines", 
                desc: "Establishes normal activity patterns per identity.",
                icon: Activity 
              },
              { 
                title: "Contextual Norms", 
                desc: "Understands what 'normal' means for that specific access level.",
                icon: CheckCircle2 
              },
              { 
                title: "Meaningful Anomalies", 
                desc: "Detects deviations that actually indicate threat.",
                icon: AlertTriangle 
              },
              { 
                title: "Exposure Weighted", 
                desc: "Weighs risk based on potential blast radius, not just activity.",
                icon: Lock 
              },
            ].map((card, i) => (
              <div key={i} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-6 rounded-xl hover:bg-slate-800 transition-colors group">
                <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4 group-hover:bg-blue-500/20 transition-colors">
                  <card.icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{card.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="inline-block px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600/20 to-cyan-500/20 border border-blue-500/30">
              <span className="text-2xl md:text-3xl font-bold text-white">AI doesn’t guess. <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">It reasons.</span></span>
            </div>
          </div>
        </div>
      </section>

      {/* Narrative Flow: What the AI Actually Does */}
      <section className="w-full py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/3">
              <div className="text-blue-600 font-semibold tracking-wide uppercase text-sm mb-3">What the AI Actually Does</div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                How Intelligence Is Applied Across the Platform
              </h2>
              <p className="text-lg text-slate-600">
                From learning behavior to recalculating risk, the engine is always active.
              </p>
            </div>
            
            <div className="md:w-2/3 space-y-8">
              {[
                {
                  title: "Behavioral Learning",
                  desc: "Cydenti learns how identities normally interact with systems, applications, and data.",
                  step: "01"
                },
                {
                  title: "Anomaly Detection",
                  desc: "Deviations are evaluated in the context of permission scope and downstream access.",
                  step: "02"
                },
                {
                  title: "Risk Amplification",
                  desc: "Identities with broader reach or sensitive access raise the significance of smaller anomalies.",
                  step: "03"
                },
                {
                  title: "Continuous Recalculation",
                  desc: "Risk evolves automatically as access, behavior, or environment changes.",
                  step: "04"
                }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 relative group">
                  <div className="flex-none w-16 pt-2 text-right font-mono text-sm text-slate-400 group-hover:text-blue-600 transition-colors">
                    {item.step}
                  </div>
                  <div className="flex-none flex flex-col items-center">
                    <div className="w-4 h-4 rounded-full bg-blue-100 border-2 border-blue-600 z-10 group-hover:scale-125 transition-transform" />
                    {i !== 3 && <div className="w-0.5 h-full bg-slate-100 -mt-2 absolute top-6" />}
                  </div>
                  <div className="pb-8">
                    <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors">{item.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Signature Experience: Explainable Risk */}
      <section className="w-full py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-8 transform rotate-1 hover:rotate-0 transition-transform duration-500">
                <div className="flex items-center justify-between mb-8 border-b border-slate-100 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center text-red-600 font-bold">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm text-slate-500">Risk Score</div>
                      <div className="text-xl font-bold text-slate-900">Critical (85/100)</div>
                    </div>
                  </div>
                  <div className="px-3 py-1 bg-red-100 text-red-700 text-xs font-bold uppercase rounded-full">High Priority</div>
                </div>
                
                <div className="space-y-4">
                  <div className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-2">Contributing Factors</div>
                  {[
                    { label: "Access Breadth", value: "High (Admin Level)", color: "bg-red-500" },
                    { label: "Privilege Level", value: "Sensitive", color: "bg-orange-500" },
                    { label: "Behavioral Deviation", value: "Anomalous Login", color: "bg-red-500" },
                    { label: "Connected Resources", value: "Production DB", color: "bg-blue-500" }
                  ].map((factor, i) => (
                    <div key={i} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                      <span className="text-slate-600 font-medium">{factor.label}</span>
                      <div className="flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full ${factor.color}`} />
                        <span className="text-slate-900 font-semibold text-sm">{factor.value}</span>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 pt-6 border-t border-slate-100 text-center">
                  <p className="text-blue-600 font-medium flex items-center justify-center gap-2">
                    <CheckCircle2 className="w-5 h-5" />
                    Fully Explainable Analysis
                  </p>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="text-blue-600 font-semibold tracking-wide uppercase text-sm mb-3">Signature Experience: Explainable Risk</div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Every Decision Has a Reason
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                Click a risk score. See the contributing factors. Nothing is hidden. Nothing is abstract.
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                <p className="text-slate-800 font-medium italic">
                  &quot;This builds trust — with security teams, auditors, and leadership.&quot;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why This Is Not Black Box AI */}
      <section className="w-full py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-4xl">
          <div className="text-blue-600 font-semibold tracking-wide uppercase text-sm mb-3">Why This Is Not &quot;Black Box AI&quot;</div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12">
            Designed for Human Decisions
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Users, title: "Support Analysts", text: "Empowers humans, doesn't replace them." },
              { icon: FileSearch, title: "Explain Outcomes", text: "Clear reasoning for every flag." },
              { icon: Activity, title: "Adaptive", text: "Learns without manual tuning." },
              { icon: GitBranch, title: "No Brittle Thresholds", text: "Dynamic baselines over static rules." },
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white border border-slate-100 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-14 h-14 mx-auto rounded-full bg-cyan-50 flex items-center justify-center mb-4 text-cyan-600">
                  <item.icon className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-500 text-sm">{item.text}</p>
              </div>
            ))}
          </div>
          
          <p className="mt-12 text-xl font-medium text-slate-800">
            You always know <span className="text-blue-600 border-b-2 border-blue-200">why</span> something is flagged — and <span className="text-blue-600 border-b-2 border-blue-200">what to do next</span>.
          </p>
        </div>
      </section>

      {/* Scale: Intelligence at Enterprise Scale */}
      <section className="w-full py-24 bg-slate-900 text-white relative">
        <div className="absolute inset-0 bg-blue-900/10" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-cyan-400 font-semibold tracking-wide uppercase text-sm mb-3">Intelligence at Enterprise Scale</div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Built for Complexity and Change
              </h2>
              <div className="space-y-6 text-lg text-slate-300 mb-8">
                <p>Identity environments are <span className="text-white font-semibold">High-volume, High-change, High-stakes</span>.</p>
                <p>Cydenti&apos;s AI Risk Engine scales across:</p>
              </div>
              
              <ul className="space-y-4">
                {[
                  "Humans, machines, and AI agents",
                  "SaaS and cloud environments",
                  "Millions of access relationships"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <span className="text-white font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8 text-cyan-400 font-semibold flex items-center gap-2">
                <Zap className="w-5 h-5" />
                Without slowing down — or dumbing things down.
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-800/80 p-6 rounded-2xl border border-slate-700 flex flex-col items-center justify-center text-center h-48">
                <Users className="w-10 h-10 text-blue-400 mb-4" />
                <div className="text-3xl font-bold text-white mb-1">10k+</div>
                <div className="text-sm text-slate-400">Identities Analyzed</div>
              </div>
              <div className="bg-slate-800/80 p-6 rounded-2xl border border-slate-700 flex flex-col items-center justify-center text-center h-48 mt-8">
                <Globe className="w-10 h-10 text-cyan-400 mb-4" />
                <div className="text-3xl font-bold text-white mb-1">100+</div>
                <div className="text-sm text-slate-400">SaaS Apps</div>
              </div>
              <div className="bg-slate-800/80 p-6 rounded-2xl border border-slate-700 flex flex-col items-center justify-center text-center h-48 -mt-8">
                <Network className="w-10 h-10 text-purple-400 mb-4" />
                <div className="text-3xl font-bold text-white mb-1">1M+</div>
                <div className="text-sm text-slate-400">Relationships</div>
              </div>
              <div className="bg-slate-800/80 p-6 rounded-2xl border border-slate-700 flex flex-col items-center justify-center text-center h-48">
                <Activity className="w-10 h-10 text-green-400 mb-4" />
                <div className="text-3xl font-bold text-white mb-1">Real-time</div>
                <div className="text-sm text-slate-400">Risk Assessment</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration: How It Powers Cydenti */}
      <section className="w-full py-24 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="text-blue-600 font-semibold tracking-wide uppercase text-sm mb-3">How It Powers Cydenti</div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12">
            The Intelligence Layer Across Every Capability
          </h2>
          
          <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
            {[
              "Identity Threat Detection",
              "Risk Scoring & Prioritization",
              "Cloud Exposure Analysis",
              "OAuth & Integration Risk",
              "Compliance Evidence Context"
            ].map((capability, i) => (
              <div key={i} className="bg-white px-6 py-4 rounded-xl shadow-md border border-slate-100 flex items-center gap-3 hover:border-blue-300 hover:shadow-lg transition-all">
                <Layers className="w-5 h-5 text-blue-500" />
                <span className="font-semibold text-slate-800">{capability}</span>
              </div>
            ))}
          </div>
          
          <p className="mt-16 text-2xl font-bold text-slate-900">
            The result is not more alerts — <span className="text-blue-600">it’s better decisions.</span>
          </p>
        </div>
      </section>

      <CtaSection />
      <Footer />
    </main>
  );
}

