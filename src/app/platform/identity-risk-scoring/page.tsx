import { CtaSection } from "@/components/cta-section";
import { Footer } from "@/components/footer";
import { 
  BarChart3, 
  ShieldAlert, 
  User, 
  Bot, 
  Globe, 
  Zap, 
  ArrowRight, 
  CheckCircle2, 
  Activity, 
  Layers, 
  Target, 
  Lock, 
  BrainCircuit, 
  Sparkles,
  FileKey,
  Network,
  Database
} from 'lucide-react';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center w-full bg-slate-50">
      
      {/* Hero Section */}
      <section className="w-full bg-white pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f9ff_1px,transparent_1px),linear-gradient(to_bottom,#f0f9ff_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
        <div className="container mx-auto px-4 md:px-6 text-center max-w-4xl relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-sm font-medium text-blue-700 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
             <BarChart3 className="w-4 h-4" />
             Core Capabilities
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight animate-in fade-in slide-in-from-bottom-5 duration-700 delay-100">
            <span className="text-gradient-primary">
              Identity Risk Scoring & Prioritization
            </span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto mb-10 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-200">
            Prioritize remediation with unified identity risk scores. Turn noise into defensible action.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="w-full py-20 px-4 md:px-6 bg-white border-b border-slate-100">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
            Security teams don’t suffer from a lack of <span className="text-slate-400 decoration-2 decoration-red-400 line-through decoration-wavy">data</span>.
            <br />
            They suffer from a lack of <span className="text-blue-600">clarity</span>.
          </h2>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            Every identity, permission, integration, and configuration generates signals. On their own, they’re noisy. Together, they’re overwhelming.
          </p>
          <div className="p-6 bg-blue-50 rounded-2xl border border-blue-100 inline-block">
            <p className="text-lg font-medium text-blue-900">
              Cydenti brings these signals together — and turns them into clear, defensible priorities.
            </p>
          </div>
        </div>
      </section>

      {/* The Real Problem */}
      <section className="w-full py-24 px-4 md:px-6 bg-slate-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-sm font-bold tracking-wider text-red-500 uppercase bg-red-50 px-3 py-1 rounded-md">The Real Problem</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-6 mb-6">
                Not All Risks Are Equal
              </h2>
              <div className="space-y-4 mb-8">
                {[
                  "An over-permissioned identity isn’t always dangerous.",
                  "An unusual login isn’t always an attack.",
                  "A risky OAuth grant doesn’t always matter."
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-slate-600">
                    <div className="w-2 h-2 rounded-full bg-red-400" />
                    {item}
                  </div>
                ))}
              </div>
              <p className="text-lg font-medium text-slate-900 border-l-4 border-blue-500 pl-4 py-1">
                Risk only becomes real when exposure, behavior, and impact intersect.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 opacity-60">
                <div className="text-slate-400 font-bold mb-2 uppercase text-xs">Most Tools</div>
                <div className="text-xl font-semibold text-slate-700">Score Risk in Isolation</div>
                <div className="mt-4 flex gap-1">
                  <div className="w-full h-2 bg-red-200 rounded-full" />
                  <div className="w-full h-2 bg-red-200 rounded-full" />
                  <div className="w-full h-2 bg-red-200 rounded-full" />
                </div>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg border-2 border-blue-500 relative overflow-hidden">
                <div className="absolute inset-0 bg-blue-50/50" />
                <div className="relative z-10">
                  <div className="text-blue-600 font-bold mb-2 uppercase text-xs">Cydenti</div>
                  <div className="text-xl font-bold text-slate-900">Scores Risk in Context</div>
                  <div className="mt-4 flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white">
                      <BrainCircuit className="w-4 h-4" />
                    </div>
                    <div className="h-1 flex-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* A Different Risk Model */}
      <section className="w-full py-24 px-4 md:px-6 bg-white">
        <div className="container mx-auto max-w-5xl text-center">
          <span className="text-sm font-bold tracking-wider text-cyan-600 uppercase mb-4 block">A Different Risk Model</span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-12">
            Risk, Grounded in <span className="text-blue-600">Reality</span>
          </h2>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-16">
            <div className="bg-slate-50 px-8 py-6 rounded-xl border border-slate-200">
              <p className="text-slate-500 font-medium">Cydenti doesn’t ask:</p>
              <p className="text-xl font-bold text-slate-400 line-through decoration-red-400">“How bad does this look?”</p>
            </div>
            <ArrowRight className="w-8 h-8 text-blue-500 hidden md:block" />
            <ArrowRight className="w-8 h-8 text-blue-500 md:hidden transform rotate-90" />
            <div className="bg-blue-50 px-8 py-6 rounded-xl border border-blue-200 shadow-md">
              <p className="text-blue-600 font-medium">It asks:</p>
              <p className="text-2xl font-bold text-blue-900">“What could actually happen?”</p>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-4">
            {[
              { label: "Identity Behavior", icon: Activity, color: "text-purple-500" },
              { label: "Permission Scope", icon: Lock, color: "text-blue-500" },
              { label: "Access Paths", icon: Network, color: "text-cyan-500" },
              { label: "Downstream Resources", icon: Database, color: "text-green-500" },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center p-6 bg-white rounded-xl border border-slate-100 hover:border-blue-200 shadow-sm transition-all hover:-translate-y-1">
                <div className={`p-3 rounded-full bg-slate-50 mb-3 ${item.color}`}>
                  <item.icon className="w-6 h-6" />
                </div>
                <span className="font-semibold text-slate-700">{item.label}</span>
              </div>
            ))}
          </div>
          
          <div className="mt-12">
            <p className="text-xl text-slate-600">
              Cydenti calculates <span className="font-bold text-slate-900">who matters most</span>, right now.
            </p>
          </div>
        </div>
      </section>

      {/* What Gets Scored */}
      <section className="w-full py-24 px-4 md:px-6 bg-slate-900 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <span className="text-sm font-bold tracking-wider text-cyan-400 uppercase border border-cyan-500/30 px-3 py-1 rounded-md bg-cyan-500/10">What Gets Scored</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-6 mb-6">
                Every Identity Tells a <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Different Story</span>
              </h2>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                Some identities are quiet but powerful. Others are noisy but harmless. 
                Each identity is scored based on what it can reach, how it behaves, and how much damage it could cause.
              </p>
              
              <div className="grid gap-4">
                {[
                  { title: "Humans", desc: "with privileged or sensitive access", icon: User },
                  { title: "Service Accounts", desc: "with broad reach", icon: FileKey },
                  { title: "AI Agents", desc: "acting autonomously", icon: Bot },
                  { title: "Third-Party Apps", desc: "with expansive scopes", icon: Globe },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                    <div className="p-2 rounded-lg bg-blue-500/20 text-cyan-400">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-white block">{item.title}</span>
                      <span className="text-slate-400 text-sm">{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative flex items-center justify-center">
              <div className="absolute inset-0 bg-blue-500/20 blur-[100px] rounded-full" />
              <div className="relative z-10 w-full max-w-md space-y-4">
                {/* Simulated Risk Cards */}
                <div className="bg-slate-800 p-5 rounded-xl border border-red-500/50 shadow-lg shadow-red-900/20 transform translate-x-4">
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center gap-3">
                       <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center text-red-400">
                         <Bot className="w-6 h-6" />
                       </div>
                       <div>
                         <div className="font-bold text-white">CI/CD Deploy Bot</div>
                         <div className="text-xs text-red-400">Critical Risk • Score 98</div>
                       </div>
                    </div>
                    <div className="px-2 py-1 rounded bg-red-500/20 text-red-400 text-xs font-bold">CRITICAL</div>
                  </div>
                  <div className="w-full bg-slate-700 h-1.5 rounded-full mt-2 overflow-hidden">
                    <div className="bg-red-500 h-full w-[98%]" />
                  </div>
                  <p className="text-xs text-slate-400 mt-3">Admin access to production + Anomalous API usage detected</p>
                </div>

                <div className="bg-slate-800 p-5 rounded-xl border border-yellow-500/30 shadow-lg transform -translate-x-4 opacity-80">
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center gap-3">
                       <div className="w-10 h-10 rounded-full bg-yellow-500/20 flex items-center justify-center text-yellow-400">
                         <User className="w-6 h-6" />
                       </div>
                       <div>
                         <div className="font-bold text-white">Sarah (Marketing)</div>
                         <div className="text-xs text-yellow-400">High Risk • Score 75</div>
                       </div>
                    </div>
                    <div className="px-2 py-1 rounded bg-yellow-500/20 text-yellow-400 text-xs font-bold">HIGH</div>
                  </div>
                  <div className="w-full bg-slate-700 h-1.5 rounded-full mt-2 overflow-hidden">
                    <div className="bg-yellow-500 h-full w-[75%]" />
                  </div>
                </div>

                <div className="bg-slate-800 p-5 rounded-xl border border-blue-500/30 shadow-lg transform translate-x-2 opacity-60">
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center gap-3">
                       <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                         <Globe className="w-6 h-6" />
                       </div>
                       <div>
                         <div className="font-bold text-white">Zoom Integration</div>
                         <div className="text-xs text-blue-400">Medium Risk • Score 45</div>
                       </div>
                    </div>
                  </div>
                  <div className="w-full bg-slate-700 h-1.5 rounded-full mt-2 overflow-hidden">
                    <div className="bg-blue-500 h-full w-[45%]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Signature Experience: The Risk Leaderboard */}
      <section className="w-full py-24 px-4 md:px-6 bg-slate-50">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <span className="text-sm font-bold tracking-wider text-blue-600 uppercase bg-blue-50 px-3 py-1 rounded-md">Signature Experience</span>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-4 mb-6">The Risk <span className="text-blue-600">Leaderboard</span></h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Open Cydenti and you don’t see hundreds of alerts. You see a ranked list of identities and permissions — ordered by real-world risk.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
            <div className="bg-slate-50 border-b border-slate-200 p-4 flex items-center gap-4">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <div className="h-6 w-px bg-slate-300 mx-2" />
              <div className="text-sm font-semibold text-slate-600 flex items-center gap-2">
                <Layers className="w-4 h-4" /> Top Risky Identities
              </div>
            </div>
            
            <div className="p-0 md:p-8">
              <div className="flex flex-col gap-6">
                {[
                  { icon: Target, title: "Highest exposure at the top", desc: "Prioritized by impact, not just volume." },
                  { icon: FileKey, title: "Clear explanation of why", desc: "Context on behavior and permissions." },
                  { icon: Network, title: "Visual blast-radius context", desc: "See what resources are at stake." },
                  { icon: CheckCircle2, title: "Direct remediation paths", desc: "One-click actions to fix the root cause." },
                ].map((item, i) => (
                  <div key={i} className="flex items-start md:items-center gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
                    <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900">{item.title}</h3>
                      <p className="text-slate-500 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 pt-8 border-t border-slate-100 text-center">
                <p className="text-xl font-bold text-slate-800">
                  No guesswork. <span className="text-blue-600">No debate.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why This Changes How Teams Work */}
      <section className="w-full py-24 px-4 md:px-6 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="md:w-1/2">
               <span className="text-sm font-bold tracking-wider text-cyan-600 uppercase mb-4 block">Why This Changes How Teams Work</span>
               <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                 Confidence Replaces <span className="text-blue-600">Urgency</span>
               </h2>
               <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                 When teams know what matters most, what can wait, and what will break if removed, they move faster — and with confidence.
               </p>
               <div className="p-6 bg-blue-50 border-l-4 border-blue-600 rounded-r-xl">
                 <p className="font-medium text-blue-900">
                   Cydenti replaces reactive firefighting with intentional, risk-driven action.
                 </p>
               </div>
            </div>
            
            <div className="md:w-1/2 grid gap-4">
              {[
                { label: "What matters most", status: "Fix Now", color: "bg-red-100 text-red-700" },
                { label: "What can wait", status: "Monitor", color: "bg-yellow-100 text-yellow-700" },
                { label: "What will break if removed", status: "Caution", color: "bg-slate-100 text-slate-700" },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between p-5 rounded-xl border border-slate-100 shadow-sm bg-white">
                  <span className="font-semibold text-slate-700">{item.label}</span>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${item.color}`}>
                    {item.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Risk That Evolves With You */}
      <section className="w-full py-24 px-4 md:px-6 bg-gradient-to-br from-slate-900 to-blue-900 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <span className="text-sm font-bold tracking-wider text-cyan-400 uppercase mb-4 block">Risk That Evolves With You</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Always Current, <span className="text-cyan-400">Never Static</span>
          </h2>
          <p className="text-xl text-slate-300 mb-12">
            Risk isn’t a snapshot. Cydenti automatically recalculates risk — without manual tuning or thresholds.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {[
              { label: "Permissions change", icon: Lock },
              { label: "Integrations evolve", icon: Network },
              { label: "Behavior shifts", icon: Activity },
              { label: "New resources appear", icon: Layers },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center gap-3 p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10">
                <item.icon className="w-6 h-6 text-cyan-300" />
                <span className="text-sm font-medium">{item.label}</span>
              </div>
            ))}
          </div>
          
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 font-semibold">
            <Sparkles className="w-4 h-4" />
            Your priorities stay aligned with reality.
          </div>
        </div>
      </section>

      {/* How This Powers the Entire Platform */}
      <section className="w-full py-24 px-4 md:px-6 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <span className="text-sm font-bold tracking-wider text-blue-600 uppercase bg-blue-50 px-3 py-1 rounded-md">How This Powers the Entire Platform</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-4">The Decision Engine Behind Cydenti</h2>
            <p className="text-slate-600 mt-4">This is the engine that turns insight into action.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Identity Threat Detection", desc: "Drives focus on high-risk identities.", icon: ShieldAlert, color: "text-red-600 bg-red-50" },
              { title: "SaaS & OAuth Findings", desc: "Prioritizes findings by impact.", icon: Globe, color: "text-blue-600 bg-blue-50" },
              { title: "Cloud Exposure", desc: "Shapes remediation paths.", icon: Zap, color: "text-yellow-600 bg-yellow-50" },
              { title: "Compliance Reporting", desc: "Feeds evidence of governance.", icon: FileKey, color: "text-purple-600 bg-purple-50" },
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white border border-slate-200 hover:shadow-lg transition-all hover:-translate-y-1">
                <div className={`w-12 h-12 rounded-xl ${item.color} flex items-center justify-center mb-4`}>
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
      <Footer />
    </main>
  );
}
