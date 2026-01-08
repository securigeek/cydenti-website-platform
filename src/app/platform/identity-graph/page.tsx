import { CtaSection } from "@/components/cta-section";
import { Footer } from "@/components/footer";
import { SignatureExperienceTimeline } from "@/components/signature-experience-timeline";
import { IdentityGraphDiagram } from "@/components/identity-graph-diagram";
import { 
  Network, 
  RefreshCw, 
  ShieldAlert, 
  Users,
  Database,
  Lock,
  Share2,
  ArrowRight,
  Activity,
  FileCheck,
} from "lucide-react";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center w-full bg-slate-50">
      {/* Hero Section */}
      <section className="w-full bg-white pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="container mx-auto px-4 md:px-6 text-center max-w-4xl relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-sm font-medium text-blue-700 mb-8">
            <Network className="w-4 h-4" />
            Platform Foundations
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 tracking-tight leading-tight">
            The Core of <br/>
            <span className="text-gradient-primary">
              Modern Identity Security
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-2xl mx-auto mb-10">
            Continuously maps identities, resources, and permissions to reveal effective access.
          </p>
        </div>
      </section>

      {/* The Shift in Perspective */}
      <section className="w-full py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-[var(--color-cydenti-secondary)] tracking-widest uppercase mb-3">The Shift in Perspective</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-gray-900">From Lists to Relationships</h3>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 items-stretch max-w-7xl mx-auto">
            {/* Left: Lists (Traditional View) - 1/3 width on large screens */}
            <div className="w-full lg:w-1/3 bg-white p-8 rounded-2xl border border-slate-100 shadow-xl shadow-slate-200/50 relative overflow-hidden group flex flex-col">
              <div className="absolute top-0 left-0 w-1 h-full bg-slate-200 group-hover:bg-red-400 transition-colors duration-500"></div>
              <h4 className="text-xl font-bold mb-8 text-slate-800 flex items-center gap-2">
                Traditional View
                <span className="text-xs font-normal px-2 py-0.5 rounded-full bg-slate-100 text-slate-500">Siloed</span>
              </h4>
              <div className="space-y-4 flex-1">
                {['Users', 'Roles', 'Policies', 'Permissions'].map((item, i) => (
                  <div key={i} className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm flex items-center justify-between text-slate-600 hover:border-slate-300 hover:shadow-md transition-all">
                    <span className="font-medium">{item}</span>
                    <div className="flex gap-1">
                        <div className="h-1.5 w-8 bg-slate-100 rounded-full"></div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-5 bg-red-50/50 text-red-600 rounded-xl text-sm border border-red-100/50 font-medium flex items-start gap-3">
                <ShieldAlert className="w-5 h-5 shrink-0 mt-0.5" />
                <p>But attackers don’t think in lists. They think in paths.</p>
              </div>
            </div>

            {/* Right: Relationships (Cydenti View) - 2/3 width on large screens */}
            <div className="w-full lg:w-2/3 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl border border-blue-100 relative overflow-hidden shadow-2xl flex flex-col min-h-[600px]">
              <div className="absolute top-0 left-0 w-1 h-full bg-[var(--color-cydenti-primary)] z-10"></div>
              <div className="p-8 pb-0 relative z-10 flex justify-between items-start">
                <div>
                    <h4 className="text-xl font-bold mb-2 text-[var(--color-cydenti-primary)] flex items-center gap-2">
                        Cydenti View
                        <span className="text-xs font-normal px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 border border-blue-200">Connected</span>
                    </h4>
                    <p className="text-slate-600 text-sm">Relationships traversed, combined, and abused.</p>
                </div>
              </div>
              <div className="flex-1 w-full relative mt-4">
                 <IdentityGraphDiagram />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What the Identity Graph Connects */}
      <section className="w-full py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-sm font-bold text-[var(--color-cydenti-secondary)] tracking-widest uppercase mb-3">What the Identity Graph Connects</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">One Map, Every Identity</h3>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">Every connection answers a single question: <span className="text-white font-medium">Who can reach what — and how?</span></p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: Users,
                title: "Identities",
                desc: "Humans, service accounts, workloads, and AI agents"
              },
              {
                icon: Database,
                title: "Resources",
                desc: "SaaS applications, cloud resources, and data systems"
              },
              {
                icon: Lock,
                title: "Permissions",
                desc: "Roles, groups, policies, and OAuth grants"
              },
              {
                icon: Share2,
                title: "Relationships",
                desc: "Trust relationships and inheritance chains"
              }
            ].map((item, i) => (
              <div key={i} className="bg-slate-800/50 backdrop-blur border border-slate-700 p-6 rounded-xl hover:border-[var(--color-cydenti-secondary)] transition-colors duration-300">
                <div className="w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center mb-4 text-[var(--color-cydenti-secondary)]">
                  <item.icon className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold mb-2">{item.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Living, Not Static */}
      <section className="w-full py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16 max-w-6xl mx-auto">
            <div className="flex-1 order-2 lg:order-1">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full blur-2xl opacity-50 animate-pulse"></div>
                <div className="relative bg-white p-8 rounded-2xl shadow-xl border border-slate-100">
                  <div className="flex items-center gap-4 mb-6 pb-6 border-b border-slate-100">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
                    <span className="font-mono text-sm text-slate-500">LIVE MONITORING</span>
                  </div>
                  <ul className="space-y-6">
                    {[
                      "Relationships are recalculated",
                      "Access paths are updated",
                      "Exposure is re-evaluated"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-4">
                        <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-[var(--color-cydenti-primary)]">
                          <RefreshCw className="w-4 h-4" />
                        </div>
                        <span className="font-medium text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 pt-6 border-t border-slate-100 flex gap-4 text-sm font-semibold text-gray-400">
                    <span className="line-through decoration-red-400">No rescans</span>
                    <span className="line-through decoration-red-400">No stale snapshots</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 order-1 lg:order-2">
              <h2 className="text-sm font-bold text-[var(--color-cydenti-secondary)] tracking-widest uppercase mb-3">Living, Not Static</h2>
              <h3 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Always Current by Design</h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                The Identity Graph isn’t built once. It’s continuously updated. As identities change, permissions evolve, or integrations appear, the graph adapts instantly.
              </p>
              <div className="inline-flex items-center text-[var(--color-cydenti-primary)] font-semibold border-b-2 border-[var(--color-cydenti-primary)] pb-1">
                Real-time visibility
                <ArrowRight className="w-4 h-4 ml-2" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Signature Experience */}
      <SignatureExperienceTimeline />

      {/* Why Graph Changes Everything */}
      <section className="w-full py-24 bg-gradient-to-b from-slate-900 to-slate-800 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-sm font-bold text-[var(--color-cydenti-secondary)] tracking-widest uppercase mb-3">Why Graph Changes Everything</h2>
              <h3 className="text-3xl md:text-5xl font-bold text-white mb-8">Context Beats Configuration</h3>
              <div className="space-y-6 text-slate-300 text-lg">
                <p>A permission isn’t risky on its own.</p>
                <p>A role isn’t dangerous in isolation.</p>
                <p>An integration isn’t scary by default.</p>
                <p className="text-white text-xl font-semibold pl-4 border-l-4 border-[var(--color-cydenti-secondary)]">
                  Risk emerges when connections compound.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: "Accurate Threat Detection", icon: ShieldAlert },
                { title: "Meaningful Risk Scoring", icon: Activity },
                { title: "Practical Least Privilege", icon: Lock },
                { title: "Defensible Compliance", icon: FileCheck },
              ].map((card, i) => (
                <div key={i} className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:bg-slate-700/80 transition-all group">
                  <card.icon className="w-8 h-8 text-[var(--color-cydenti-secondary)] mb-4 group-hover:scale-110 transition-transform" />
                  <h4 className="font-semibold text-lg">{card.title}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Built for Scale and Reality */}
      <section className="w-full py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-sm font-bold text-[var(--color-cydenti-secondary)] tracking-widest uppercase mb-3">Built for Scale and Reality</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-gray-900 mb-16">Designed for Modern Complexity</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
            <div className="p-8 bg-white rounded-2xl shadow-sm border border-slate-100">
              <div className="text-4xl md:text-5xl font-bold text-[var(--color-cydenti-primary)] mb-2">Millions</div>
              <div className="text-gray-500 font-medium">of Identities</div>
            </div>
            <div className="p-8 bg-white rounded-2xl shadow-sm border border-slate-100">
              <div className="text-4xl md:text-5xl font-bold text-[var(--color-cydenti-secondary)] mb-2">Billions</div>
              <div className="text-gray-500 font-medium">of Relationships</div>
            </div>
            <div className="p-8 bg-white rounded-2xl shadow-sm border border-slate-100">
              <div className="text-4xl md:text-5xl font-bold text-purple-600 mb-2">Infinite</div>
              <div className="text-gray-500 font-medium">Changes</div>
            </div>
          </div>

          <p className="max-w-2xl mx-auto text-xl text-gray-600">
            This isn’t a visualization layer. <br/>
            <span className="font-bold text-gray-900">It’s a decision engine.</span>
          </p>
        </div>
      </section>

      {/* How It Powers the Platform */}
      <section className="w-full py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-[var(--color-cydenti-secondary)] tracking-widest uppercase mb-3">How It Powers the Platform</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">The Foundation Under Every Capability</h3>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid gap-4">
              {[
                { title: "Identity Threat Detection", sub: "Behavior + Access Context", color: "bg-red-50 border-red-100 text-red-700" },
                { title: "Cloud Exposure Monitoring", sub: "Blast Radius Mapping", color: "bg-orange-50 border-orange-100 text-orange-700" },
                { title: "OAuth Risk Management", sub: "Third-party Reach Analysis", color: "bg-yellow-50 border-yellow-100 text-yellow-700" },
                { title: "Risk Scoring", sub: "Exposure-aware Prioritization", color: "bg-green-50 border-green-100 text-green-700" },
                { title: "Compliance Reporting", sub: "Explainable Evidence", color: "bg-blue-50 border-blue-100 text-blue-700" }
              ].map((item, i) => (
                <div key={i} className={`flex items-center justify-between p-6 rounded-xl border ${item.color} transition-transform hover:-translate-y-1`}>
                  <h4 className="font-bold text-lg">{item.title}</h4>
                  <div className="flex items-center gap-2 opacity-80">
                    <ArrowRight className="w-4 h-4" />
                    <span className="font-mono text-sm uppercase">{item.sub}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-12 p-8 bg-slate-900 text-white rounded-2xl text-center shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-cydenti-primary)] to-[var(--color-cydenti-secondary)] opacity-20"></div>
              <h4 className="text-2xl font-bold relative z-10">Without the graph, these are guesses.</h4>
              <p className="text-xl text-[var(--color-cydenti-secondary)] font-bold mt-2 relative z-10">With it, they’re conclusions.</p>
            </div>
          </div>
        </div>
      </section>

      <CtaSection />
      <Footer />
    </main>
  );
}
