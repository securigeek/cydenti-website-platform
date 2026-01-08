import { CtaSection } from "@/components/cta-section";
import { Footer } from "@/components/footer";
import { PermissionDriftDiagram } from "@/components/permission-drift-diagram";
import { 
  GitMerge, 
  ShieldAlert, 
  Users, 
  Activity, 
  Layers, 
  Unplug, 
  Fingerprint, 
  TrendingUp, 
  CheckCircle2, 
  Search,
  Lock,
  Zap,
  Network
} from "lucide-react";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center w-full bg-white overflow-hidden">
      {/* Hero Section */}
      <section className="w-full bg-white pt-32 pb-20 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-50 via-white to-white opacity-70" />
        <div className="container mx-auto px-4 md:px-6 text-center max-w-4xl relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50/50 backdrop-blur-sm px-4 py-1.5 text-sm font-medium text-blue-700 mb-8 shadow-sm">
            <ShieldAlert className="w-4 h-4" />
            <span>Core Capabilities</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-8 tracking-tight leading-tight">
            <span className="text-gradient-primary">Identity Security Posture Management</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Continuously analyze SaaS configurations and permissions for security posture.
          </p>
        </div>
      </section>

      {/* Drift Section */}
      <section className="w-full py-24 bg-slate-50 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col gap-20">
            {/* Top Section: Narrative + Data Card */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                  Your SaaS Stack Didn’t Break. <br />
                  <span className="text-blue-600">It Drifted.</span>
                </h2>
                <div className="space-y-6 text-lg text-slate-600">
                  <p>
                    SaaS risk rarely comes from a single bad decision. It comes from hundreds of reasonable ones — made over time, by different teams, under different pressures.
                  </p>
                  <ul className="space-y-4">
                    {[
                      "A new role added to unblock work.",
                      "An integration enabled to move faster.",
                      "A permission kept “just in case.”"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                          <Activity className="w-3.5 h-3.5 text-blue-600" />
                        </div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4 border-l-4 border-blue-600 pl-6 my-6">
                    <p className="font-medium text-slate-900 italic">
                      &quot;None of these feel dangerous in isolation. Together, they quietly reshape your security posture.&quot;
                    </p>
                  </div>
                  <p className="font-semibold text-slate-900">
                    Cydenti exists to make that drift visible.
                  </p>
                </div>
              </div>

              {/* Right Column: Risk Accumulation Card (Restored) */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 to-cyan-500/10 rounded-3xl transform rotate-3" />
                <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100 relative">
                  <div className="flex items-center gap-4 mb-8 border-b border-slate-100 pb-4">
                    <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-red-600" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-900">Risk Accumulation</div>
                      <div className="text-sm text-slate-500">Over last 12 months</div>
                    </div>
                  </div>
                  {/* Visual representation of drift */}
                  <div className="space-y-4">
                     <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-500">Day 1</span>
                        <span className="text-emerald-600 font-medium">Secure</span>
                     </div>
                     <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                        <div className="h-full w-full bg-emerald-500" />
                     </div>
                     
                     <div className="flex items-center justify-between text-sm mt-6">
                        <span className="text-slate-500">Day 90</span>
                        <span className="text-yellow-600 font-medium">Minor Drift</span>
                     </div>
                     <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                        <div className="h-full w-3/4 bg-yellow-500" />
                     </div>

                     <div className="flex items-center justify-between text-sm mt-6">
                        <span className="text-slate-500">Day 180</span>
                        <span className="text-red-600 font-medium">Critical Exposure</span>
                     </div>
                     <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                        <div className="h-full w-1/2 bg-red-500" />
                     </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Section: Full Width Diagram */}
            <div className="flex flex-col items-center w-full">
              <div className="text-center mb-8">
                 <p className="text-xl text-slate-900 font-medium">
                   This is what that drift looks like over time.
                 </p>
              </div>

              <div className="w-full mb-8">
                 <PermissionDriftDiagram />
              </div>

              <div className="text-center mt-4">
                <p className="text-slate-500 italic">
                   Access rarely becomes dangerous in a single moment. <br/>
                   It accumulates — quietly, reasonably, and over time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Illusion of Control */}
      <section className="w-full py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">The Illusion of Control</h2>
            <p className="text-lg text-slate-600">
              Most organizations believe their SaaS environment is under control because access was approved, configurations were reviewed, and integrations were intentional.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
              <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-slate-400" />
                The Static View
              </h3>
              <ul className="space-y-4">
                {["Access was approved at some point", "Configurations were reviewed once", "Integrations were intentionally enabled"].map((item, i) => (
                   <li key={i} className="flex items-start gap-3 text-slate-600">
                      <CheckCircle2 className="w-5 h-5 text-slate-400 mt-0.5" />
                      <span>{item}</span>
                   </li>
                ))}
              </ul>
            </div>

            <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100 relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100/50 rounded-full -mr-16 -mt-16" />
              <h3 className="text-xl font-bold text-blue-900 mb-6 flex items-center gap-2 relative z-10">
                <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                The Reality: Constant Change
              </h3>
              <ul className="space-y-4 relative z-10">
                {[
                   { text: "Roles evolve", icon: Users },
                   { text: "Vendors add features", icon: Zap },
                   { text: "Apps connect to other apps", icon: Unplug },
                   { text: "People move teams", icon: GitMerge }
                ].map((item, i) => (
                   <li key={i} className="flex items-center gap-3 text-blue-800">
                      <item.icon className="w-5 h-5 text-blue-600" />
                      <span className="font-medium">{item.text}</span>
                   </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-xl font-medium text-slate-900">
              The posture you approved is not the posture you’re running.
            </p>
          </div>
        </div>
      </section>

      {/* Identity System */}
      <section className="w-full py-24 bg-slate-900 text-white relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
           <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl" />
           <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
             <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                   Seeing SaaS as an <span className="text-cyan-400">Identity System</span>
                </h2>
                <div className="space-y-6 text-slate-300 text-lg">
                   <p>
                      Cydenti approaches SaaS security differently. Instead of treating SaaS apps as isolated tools, Cydenti treats them as identity systems.
                   </p>
                   <p>
                      By anchoring SaaS security to identity, Cydenti reveals how access actually behaves across your environment.
                   </p>
                   <div className="pl-6 border-l-2 border-cyan-500">
                      <p className="text-white text-xl font-light">
                         &quot;Not what was configured — but what is now possible.&quot;
                      </p>
                   </div>
                </div>
             </div>
             <div className="grid gap-4">
                {[
                   { title: "Permission Models", desc: "Complex, app-specific access controls", icon: Lock },
                   { title: "Configuration Risks", desc: "Settings that drift from best practices", icon: ShieldAlert },
                   { title: "Integration Surfaces", desc: "Hidden connections between applications", icon: Network }
                ].map((card, i) => (
                   <div key={i} className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-colors">
                      <div className="flex items-start gap-4">
                         <div className="p-3 bg-cyan-500/20 rounded-lg text-cyan-400">
                            <card.icon className="w-6 h-6" />
                         </div>
                         <div>
                            <h3 className="font-bold text-lg mb-1">{card.title}</h3>
                            <p className="text-slate-400 text-sm">{card.desc}</p>
                         </div>
                      </div>
                   </div>
                ))}
             </div>
          </div>
        </div>
      </section>

      {/* What Emerges */}
      <section className="w-full py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">What Emerges When You Look This Way</h2>
            <p className="text-lg text-slate-600">
               When SaaS posture is viewed through identity, hidden patterns appear.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
             {[
                { 
                   title: "Permission Accumulation", 
                   desc: "Some users quietly accumulate permissions across multiple apps.",
                   icon: Layers
                },
                { 
                   title: "Role Expansion", 
                   desc: "Some roles expand far beyond their original intent.",
                   icon: Users
                },
                { 
                   title: "Integration Sprawl", 
                   desc: "Some integrations touch more systems than anyone realized.",
                   icon: Network
                },
                { 
                   title: "Silent Drift", 
                   desc: "Some configurations drift away from security best practices — without triggering alerts.",
                   icon: Activity
                }
             ].map((item, i) => (
                <div key={i} className="group p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-200 hover:shadow-lg transition-all">
                   <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <item.icon className="w-6 h-6 text-blue-600" />
                   </div>
                   <h3 className="font-bold text-slate-900 mb-3">{item.title}</h3>
                   <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
             ))}
          </div>
          
          <div className="mt-12 text-center">
             <p className="text-slate-500 mb-2">These aren’t missteps. They’re side effects of growth.</p>
             <p className="text-xl font-bold text-blue-600">Cydenti brings them into focus.</p>
          </div>
        </div>
      </section>

      {/* Drift Is the Risk */}
      <section className="w-full py-24 bg-slate-50">
         <div className="container mx-auto px-4 md:px-6">
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-200 overflow-hidden relative">
               <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
                  <div>
                     <h2 className="text-3xl font-bold text-slate-900 mb-6">Drift Is the Risk</h2>
                     <p className="text-lg text-slate-600 mb-8">
                        The most dangerous SaaS risks are rarely misconfigurations you just created. They are:
                     </p>
                     <ul className="space-y-4">
                        {[
                           "Access that made sense six months ago",
                           "Integrations no one owns anymore",
                           "Permissions that survived team changes",
                           "Settings that were secure before the product evolved"
                        ].map((item, i) => (
                           <li key={i} className="flex items-center gap-3">
                              <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                              <span className="text-slate-700 font-medium">{item}</span>
                           </li>
                        ))}
                     </ul>
                     <div className="mt-8 pt-8 border-t border-slate-100">
                        <p className="text-slate-600">
                           Cydenti continuously tracks how SaaS posture moves over time, so risk is understood as a <span className="font-bold text-slate-900">trend</span> — not a snapshot.
                        </p>
                     </div>
                  </div>
                  <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                     {/* Abstract Chart visualization */}
                     <div className="h-64 flex items-end justify-between gap-2 px-4 pb-4 border-b border-slate-200">
                        {[40, 45, 35, 50, 65, 80, 95].map((h, i) => (
                           <div key={i} className="w-full h-full bg-blue-50/50 rounded-t-sm relative group">
                              <div 
                                 className={`absolute bottom-0 left-0 w-full rounded-t-sm transition-all duration-500 ${i > 4 ? 'bg-red-400' : 'bg-blue-500'}`} 
                                 style={{ height: `${h}%` }} 
                              />
                           </div>
                        ))}
                     </div>
                     <div className="flex justify-between text-xs text-slate-400 mt-2">
                        <span>Jan</span>
                        <span>Today</span>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Integrations */}
      <section className="w-full py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
           <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                 <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Integrations Change the Equation</h2>
                 <p className="text-xl text-slate-600">SaaS rarely stands alone.</p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8 text-center">
                 <div className="p-6">
                    <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600">
                       <Unplug className="w-8 h-8" />
                    </div>
                    <h3 className="font-bold text-lg mb-2">Applications Connect</h3>
                    <p className="text-sm text-slate-500">Applications connect to each other.</p>
                 </div>
                 <div className="p-6">
                    <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600">
                       <GitMerge className="w-8 h-8" />
                    </div>
                    <h3 className="font-bold text-lg mb-2">Permissions Propagate</h3>
                    <p className="text-sm text-slate-500">Access is delegated across systems.</p>
                 </div>
                 <div className="p-6">
                    <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600">
                       <ShieldAlert className="w-8 h-8" />
                    </div>
                    <h3 className="font-bold text-lg mb-2">Risk Amplifies</h3>
                    <p className="text-sm text-slate-500">Safe configs become dangerous when connected.</p>
                 </div>
              </div>

              <div className="bg-blue-600 text-white rounded-2xl p-8 mt-12 text-center shadow-lg shadow-blue-200">
                 <p className="text-lg font-medium">
                    Cydenti maps these relationships so posture is evaluated in <span className="font-bold text-cyan-300">context</span>, not in isolation.
                 </p>
              </div>
           </div>
        </div>
      </section>

      {/* Control Without Disruption */}
      <section className="w-full py-24 bg-slate-50">
         <div className="container mx-auto px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
               <div className="order-2 lg:order-1">
                  <div className="grid gap-4">
                     {[
                        { title: "Highlight Drift", desc: "Where posture no longer matches intent", icon: Search },
                        { title: "Prioritize Access", desc: "Show which access matters and which does not", icon: Fingerprint },
                        { title: "Empower Teams", desc: "Give teams confidence to remove what’s unnecessary", icon: CheckCircle2 }
                     ].map((card, i) => (
                        <div key={i} className="bg-white p-6 rounded-xl border border-slate-200 flex items-center gap-4 shadow-sm">
                           <div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-600 flex-shrink-0">
                              <card.icon className="w-6 h-6" />
                           </div>
                           <div>
                              <h3 className="font-bold text-slate-900">{card.title}</h3>
                              <p className="text-sm text-slate-600">{card.desc}</p>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
               <div className="order-1 lg:order-2">
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Control Without Disruption</h2>
                  <p className="text-lg text-slate-600 mb-6">
                     Cydenti is not built to lock down SaaS environments or slow teams. It’s built to provide clarity.
                  </p>
                  <p className="text-xl font-medium text-slate-900 border-l-4 border-emerald-500 pl-6 py-2">
                     Security improves not because teams are blocked — but because they finally understand what to change.
                  </p>
               </div>
            </div>
         </div>
      </section>

      {/* Where ISPM Fits */}
      <section className="w-full py-24 bg-white border-t border-slate-100">
         <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-16">Where ISPM Fits in the Platform</h2>
            
            <div className="grid md:grid-cols-3 gap-8 relative">
               {/* Connecting lines for desktop */}
               <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-300 to-transparent -translate-y-1/2 z-0" />
               
               <div className="bg-white p-8 rounded-2xl border border-blue-100 shadow-lg relative z-10 group hover:-translate-y-1 transition-transform duration-300">
                  <div className="w-16 h-16 bg-blue-50 rounded-2xl mx-auto mb-6 flex items-center justify-center text-blue-600">
                     <Activity className="w-8 h-8" />
                  </div>
                  <h3 className="font-bold text-lg mb-3 text-slate-900">Identity Risk Scoring</h3>
                  <p className="text-sm text-slate-600">So SaaS access is prioritized correctly.</p>
               </div>

               <div className="bg-white p-8 rounded-2xl border border-cyan-200 shadow-xl shadow-cyan-100/50 relative z-10 scale-105">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md shadow-blue-200">Core</div>
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl mx-auto mb-6 flex items-center justify-center text-white shadow-lg shadow-blue-300">
                     <ShieldAlert className="w-8 h-8" />
                  </div>
                  <h3 className="font-bold text-lg mb-3 text-slate-900">ISPM</h3>
                  <p className="text-sm text-slate-600">Feeds context to the entire platform.</p>
               </div>

               <div className="bg-white p-8 rounded-2xl border border-blue-100 shadow-lg relative z-10 group hover:-translate-y-1 transition-transform duration-300">
                  <div className="w-16 h-16 bg-blue-50 rounded-2xl mx-auto mb-6 flex items-center justify-center text-blue-600">
                     <Zap className="w-8 h-8" />
                  </div>
                  <h3 className="font-bold text-lg mb-3 text-slate-900">Threat Detection</h3>
                  <p className="text-sm text-slate-600">Where risky posture magnifies behavior.</p>
               </div>
            </div>

            <div className="mt-16 max-w-2xl mx-auto">
               <p className="text-lg text-slate-600">
                  This ensures SaaS security is not a checklist — it’s part of a <span className="font-bold text-slate-900">living identity model</span>.
               </p>
            </div>
         </div>
      </section>

      <CtaSection />
      <Footer />
    </main>
  );
}
