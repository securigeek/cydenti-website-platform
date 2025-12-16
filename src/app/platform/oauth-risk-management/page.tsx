import { CtaSection } from "@/components/cta-section";
import { Footer } from "@/components/footer";
import { 
  ShieldAlert, 
  Unplug, 
  Eye, 
  Lock, 
  Network, 
  Link2,
  Zap, 
  CheckCircle2, 
  AlertTriangle,
  Database,
  UserCheck,
  ArrowRight,
  ShieldCheck,
  Activity,
  FileSearch,
  Users,
  Key,
  RefreshCw
} from 'lucide-react';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center w-full bg-slate-50">
      
      {/* Hero Section */}
      <section className="w-full bg-white pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f9ff_1px,transparent_1px),linear-gradient(to_bottom,#f0f9ff_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
        <div className="container mx-auto px-4 md:px-6 text-center max-w-4xl relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-sm font-medium text-blue-700 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
             <ShieldAlert className="w-4 h-4" />
             Core Capabilities
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight animate-in fade-in slide-in-from-bottom-5 duration-700 delay-100">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 animate-gradient-x">
              Third-Party & OAuth Risk Management
            </span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto mb-10 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-200">
            Monitor and secure OAuth grants and third-party integrations. Turn your biggest blind spot into a managed asset.
          </p>
        </div>
      </section>

      {/* 1. The Quiet Risk */}
      <section className="w-full py-24 px-4 md:px-6 bg-white border-b border-slate-100">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div className="inline-block">
                <span className="text-sm font-bold tracking-wider text-blue-600 uppercase bg-blue-50 px-3 py-1 rounded-md">The Quiet Risk</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                OAuth Was Built for <span className="text-blue-600">Speed</span>,<br />Not <span className="text-red-500">Security</span>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                OAuth makes it easy to connect applications. It also makes it easy to over-grant access.
                Once approved, third-party applications can create a silent, persistent attack surface outside traditional IAM controls.
              </p>
              
              <div className="grid gap-4 mt-8">
                {[
                  { icon: Database, text: "Access sensitive data continuously", color: "text-blue-600" },
                  { icon: UserCheck, text: "Act on behalf of users", color: "text-cyan-600" },
                  { icon: RefreshCw, text: "Persist indefinitely without review", color: "text-indigo-600" },
                  { icon: Unplug, text: "Expand scope as environments evolve", color: "text-violet-600" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-blue-200 transition-colors">
                    <div className={`p-2 rounded-lg bg-white shadow-sm ${item.color}`}>
                      <item.icon className="w-5 h-5" />
                    </div>
                    <span className="font-medium text-slate-700">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full opacity-30 blur-3xl" />
              <div className="relative bg-white rounded-2xl shadow-xl border border-slate-200 p-8">
                <div className="space-y-6">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-indigo-100 flex items-center justify-center text-indigo-600">
                        <Zap className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="font-semibold text-slate-900">Sketchy App Integration</div>
                        <div className="text-xs text-slate-500">Authorized 2 years ago</div>
                      </div>
                    </div>
                    <div className="px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full">Active</div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="text-sm font-semibold text-slate-900">Access Scope:</div>
                    <div className="flex flex-wrap gap-2">
                      {["Read All Files", "Send Email", "Manage Contacts", "Admin Access"].map((scope, i) => (
                        <span key={i} className="px-2 py-1 bg-red-50 text-red-600 text-xs rounded border border-red-100 flex items-center gap-1">
                          <AlertTriangle className="w-3 h-3" /> {scope}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-slate-50 rounded-lg p-4 text-sm text-slate-600 border border-slate-100">
                    <p className="flex items-start gap-2">
                      <Lock className="w-4 h-4 text-slate-400 mt-0.5 shrink-0" />
                      This integration has admin-level privileges and hasn&apos;t been used in 18 months.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. A Different Way to Look at Integrations */}
      <section className="w-full py-24 px-4 md:px-6 bg-slate-50">
        <div className="container mx-auto max-w-5xl text-center">
          <span className="text-sm font-bold tracking-wider text-cyan-600 uppercase mb-4 block">A Different Way to Look at Integrations</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12">
            From “Approved Apps” to <span className="text-blue-600">Living Access Relationships</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Old Way */}
              <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm opacity-70 hover:opacity-100 transition-opacity">
                <div className="text-slate-400 font-semibold mb-6 uppercase tracking-widest text-sm">The Old Way</div>
                <div className="text-2xl font-medium text-slate-600 mb-4">&quot;Is this app approved?&quot;</div>
                <div className="w-12 h-1 bg-slate-200 mx-auto rounded-full mb-6" />
                <p className="text-slate-500">Treats OAuth grants as static approvals. Once clicked, it&apos;s forgotten.</p>
              </div>

              {/* Cydenti Way */}
              <div className="bg-white p-8 rounded-2xl border-2 border-blue-500 shadow-xl relative overflow-hidden group">
                <div className="absolute inset-0 bg-blue-50/50 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10">
                  <div className="text-blue-600 font-bold mb-6 uppercase tracking-widest text-sm">The Cydenti Way</div>
                  <div className="text-2xl font-bold text-slate-900 mb-4">
                  &quot;What can this app do <span className="text-blue-600">right now</span>?&quot;
                  </div>
                  <div className="w-12 h-1 bg-blue-500 mx-auto rounded-full mb-6" />
                  <p className="text-slate-600">
                    Treats them as active identity relationships — continuously evaluated for risk, scope, and relevance.
                    <br/>
                    <span className="text-sm text-blue-600 font-medium mt-2 block">...and what could it reach if abused?</span>
                  </p>
                </div>
              </div>
          </div>
        </div>
      </section>

      {/* 3. What Emerges When You Map OAuth Access */}
      <section className="w-full py-24 px-4 md:px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <span className="text-sm font-bold tracking-wider text-blue-600 uppercase bg-blue-50 px-3 py-1 rounded-md">What Emerges When You Map OAuth Access</span>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-4">The Integrations You <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Finally See</span></h2>
            <p className="text-lg text-slate-600 mt-4">These aren’t theoretical risks — they’re live access paths.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { 
                title: "Over-Scoped OAuth Grants", 
                desc: "Applications with permissions far beyond operational needs.",
                icon: ShieldAlert,
                color: "text-red-500",
                bg: "bg-red-50"
              },
              { 
                title: "Abandoned Integrations", 
                desc: "Apps that still have access — even though no one uses them.",
                icon: Unplug,
                color: "text-orange-500",
                bg: "bg-orange-50"
              },
              { 
                title: "Excessive Privileges", 
                desc: "Third-party tools with admin-level or data-wide access.",
                icon: Key,
                color: "text-yellow-600",
                bg: "bg-yellow-50"
              },
              { 
                title: "Weak Connectors", 
                desc: "Integrations that bypass modern security controls.",
                icon: Link2,
                color: "text-slate-600",
                bg: "bg-slate-100"
              },
              { 
                title: "Cross-App Exposure", 
                desc: "One integration opening access to multiple systems.",
                icon: Network,
                color: "text-purple-600",
                bg: "bg-purple-50"
              },
            ].map((card, i) => (
              <div key={i} className="group p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-200 hover:shadow-lg transition-all duration-300">
                <div className={`w-12 h-12 rounded-xl ${card.bg} ${card.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <card.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{card.title}</h3>
                <p className="text-slate-600">{card.desc}</p>
              </div>
            ))}
            
            {/* Last card as a summary/CTA */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-600 text-white flex flex-col justify-center items-center text-center">
              <Eye className="w-10 h-10 mb-4 opacity-80" />
              <h3 className="text-xl font-bold mb-2">See Your Map</h3>
              <p className="text-blue-100 text-sm">Discover your hidden integration risks today.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Signature Experience: The OAuth Access Map */}
      <section className="w-full py-24 px-4 md:px-6 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-20">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500 rounded-full blur-[120px]" />
        </div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 space-y-8">
              <div className="inline-block">
                <span className="text-sm font-bold tracking-wider text-cyan-400 uppercase border border-cyan-500/30 px-3 py-1 rounded-md bg-cyan-500/10">Signature Experience</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                Visualizing <br/><span className="text-cyan-400">Third-Party Reach</span>
              </h2>
              <p className="text-slate-300 text-lg leading-relaxed">
                This is where teams say: <span className="text-white font-semibold italic">“We didn’t realize it could do that.”</span>
              </p>
              
              <ul className="space-y-4">
                {[
                  "Select a third-party application",
                  "See every user, SaaS app, and dataset it can access",
                  "Understand scope breadth at a glance",
                  "Identify escalation paths through connected systems"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-200">
                    <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-cyan-400 shrink-0">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="md:w-1/2">
              <div className="relative bg-slate-800 rounded-xl border border-slate-700 p-6 shadow-2xl">
                {/* Abstract UI representation of the map */}
                <div className="flex justify-between items-center mb-6 border-b border-slate-700 pb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <div className="text-xs text-slate-400 font-mono">OAuth Access Map</div>
                </div>
                
                <div className="relative h-64 w-full flex items-center justify-center">
                  {/* Central Node */}
                  <div className="absolute z-20 flex flex-col items-center">
                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg border-2 border-blue-500">
                      <Zap className="w-8 h-8 text-blue-600" />
                    </div>
                    <div className="mt-2 text-xs font-bold bg-slate-700 px-2 py-1 rounded text-white">Target App</div>
                  </div>
                  
                  {/* Connected Nodes */}
                  {[0, 72, 144, 216, 288].map((deg, i) => (
                    <div key={i} className="absolute w-full h-full flex items-center justify-center animate-spin-slow" style={{ transform: `rotate(${deg}deg)` }}>
                      <div className="w-[120px] h-[1px] bg-gradient-to-r from-blue-500/50 to-transparent origin-left absolute left-1/2 top-1/2" />
                      <div className="absolute left-[calc(50%+120px)] top-1/2 -translate-y-1/2">
                        <div className="w-10 h-10 bg-slate-700 rounded-xl border border-slate-600 flex items-center justify-center shadow-lg" style={{ transform: `rotate(-${deg}deg)` }}>
                          {i % 2 === 0 ? <Database className="w-5 h-5 text-cyan-400" /> : <Users className="w-5 h-5 text-purple-400" />}
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  {/* Pulse Effect */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-blue-500/30 rounded-full animate-ping" />
                </div>
                
                <div className="mt-4 bg-slate-900/50 p-3 rounded border border-slate-700/50">
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span>Total Reach:</span>
                    <span className="text-white font-mono">14 Datasets, 5 Admin Users</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Control Without Chaos */}
      <section className="w-full py-24 px-4 md:px-6 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2 order-2 md:order-1">
               <div className="grid grid-cols-2 gap-4">
                 {[
                   { label: "Scope Reduction", icon: ShieldCheck, color: "text-green-600 bg-green-50" },
                   { label: "Ownership Assignment", icon: UserCheck, color: "text-blue-600 bg-blue-50" },
                   { label: "Change Monitoring", icon: Activity, color: "text-purple-600 bg-purple-50" },
                   { label: "Controlled Offboarding", icon: Unplug, color: "text-red-600 bg-red-50" },
                 ].map((item, i) => (
                   <div key={i} className="flex flex-col items-center justify-center p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow text-center h-40">
                     <div className={`w-12 h-12 rounded-full ${item.color} flex items-center justify-center mb-3`}>
                       <item.icon className="w-6 h-6" />
                     </div>
                     <span className="font-semibold text-slate-800">{item.label}</span>
                   </div>
                 ))}
               </div>
            </div>
            
            <div className="md:w-1/2 order-1 md:order-2">
              <span className="text-sm font-bold tracking-wider text-blue-600 uppercase mb-2 block">Control Without Chaos</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Security Without <br/>Breaking the Business
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Security teams gain control. Business teams keep their workflows. Cydenti enables safe scope reduction and controlled offboarding of unused apps without disrupting productivity.
              </p>
              
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg border-l-4 border-green-500">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  <span className="text-slate-700 font-medium">Identify unused permissions</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg border-l-4 border-blue-500">
                  <CheckCircle2 className="w-5 h-5 text-blue-600" />
                  <span className="text-slate-700 font-medium">Assign business owners to apps</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg border-l-4 border-purple-500">
                  <CheckCircle2 className="w-5 h-5 text-purple-600" />
                  <span className="text-slate-700 font-medium">Automate risk reviews</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Why This Matters Now */}
      <section className="w-full py-24 px-4 md:px-6 bg-gradient-to-b from-slate-900 to-blue-900 text-white text-center">
        <div className="container mx-auto max-w-4xl">
          <span className="text-sm font-bold tracking-wider text-cyan-400 uppercase mb-6 block">Why This Matters Now</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Supply Chain Risk Has <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Moved Up the Stack</span>
          </h2>
          <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
            Third-party risk is no longer just about vendors. It’s about software acting inside your environment.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 text-left">
            {[
              { title: "A Primary Breach Vector", desc: "Attackers bypass firewalls by riding on approved integrations.", icon: AlertTriangle },
              { title: "A Persistence Mechanism", desc: "OAuth tokens allow access long after passwords are changed.", icon: RefreshCw },
              { title: "A Compliance Blind Spot", desc: "Auditors are asking: &apos;Who has access to this data?&apos;", icon: FileSearch },
            ].map((item, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:bg-white/20 transition-colors">
                <item.icon className="w-8 h-8 text-cyan-400 mb-4" />
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-slate-300 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 p-6 bg-blue-600/20 rounded-2xl border border-blue-400/30 inline-block">
            <p className="text-lg font-medium">
              Cydenti closes this gap by treating third-party access as <span className="text-cyan-300 font-bold">first-class identity risk</span>.
            </p>
          </div>
        </div>
      </section>

      {/* 7. How It Connects Across Cydenti */}
      <section className="w-full py-24 px-4 md:px-6 bg-slate-50">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <span className="text-sm font-bold tracking-wider text-blue-600 uppercase bg-blue-50 px-3 py-1 rounded-md">How It Connects Across Cydenti</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-4">Third-Party Risk Is <span className="text-blue-600">Identity Risk</span></h2>
            <p className="text-slate-600 mt-4">OAuth insights don&apos;t live in a silo. They feed directly into the bigger picture.</p>
          </div>
          
          <div className="relative">
            {/* Connecting Line */}
            <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-200 to-transparent hidden md:block -translate-y-1/2 z-0" />
            
            <div className="grid md:grid-cols-3 gap-8 relative z-10">
              {[
                { 
                  title: "Identity Risk Scoring", 
                  desc: "Over-scoped apps amplify risk scores.", 
                  icon: Activity,
                  color: "bg-blue-600"
                },
                { 
                  title: "Identity Threat Detection", 
                  desc: "Abuse patterns trigger real-time detection.", 
                  icon: ShieldAlert,
                  color: "bg-cyan-600"
                },
                { 
                  title: "Compliance Reporting", 
                  desc: "Automated evidence of access governance.", 
                  icon: FileSearch,
                  color: "bg-indigo-600"
                },
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center text-center bg-white p-8 rounded-2xl shadow-sm border border-slate-200 group hover:-translate-y-2 transition-transform duration-300">
                  <div className={`w-16 h-16 rounded-full ${item.color} flex items-center justify-center text-white mb-6 shadow-lg group-hover:shadow-xl transition-shadow`}>
                    <item.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-600">{item.desc}</p>
                  <ArrowRight className="w-5 h-5 text-slate-300 mt-4 group-hover:text-blue-500 transition-colors" />
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-16 text-center">
             <p className="text-xl font-medium text-slate-800">
               Third-party access becomes <span className="text-blue-600">visible</span>, <span className="text-cyan-600">measurable</span>, and <span className="text-indigo-600">governable</span>.
             </p>
          </div>
        </div>
      </section>

      <CtaSection />
      <Footer />
    </main>
  );
}
