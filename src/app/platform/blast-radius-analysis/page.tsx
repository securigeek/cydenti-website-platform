import { CtaSection } from "@/components/cta-section";
import { Footer } from "@/components/footer";
import { 
  AlertTriangle, 
  ShieldCheck, 
  User, 
  Users, 
  Database,
  CheckCircle2,
  XCircle,
  Activity
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function BlastRadiusPage() {
  return (
    <main className="flex min-h-screen flex-col items-center w-full bg-slate-50">
      {/* Hero Section */}
      <section className="w-full bg-[#0B1120] text-white pt-32 pb-20 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-rose-900/20 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-900/20 rounded-full blur-[120px]" />
            <div 
                className="absolute inset-0 opacity-[0.05]" 
                style={{
                    backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`,
                    backgroundSize: '30px 30px'
                }}
            />
        </div>

        <div className="container mx-auto px-4 md:px-6 text-center max-w-4xl relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-rose-500/30 bg-rose-500/10 px-4 py-1.5 text-sm font-medium text-rose-400 mb-8 backdrop-blur-sm">
            <AlertTriangle className="w-4 h-4" />
            Identity Threat Defense
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight leading-tight">
            Minimize Your <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-orange-400">
              Blast Radius
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 leading-relaxed max-w-2xl mx-auto mb-10">
            Identify, visualize, and reduce the potential damage of any compromised identity before an attack happens.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" className="rounded-full bg-white text-slate-900 hover:bg-slate-200 font-semibold px-8">
              Start Analysis
            </Button>
            <Button variant="outline" size="lg" className="rounded-full bg-transparent border-slate-700 text-white hover:bg-slate-800 px-8">
              Read Documentation
            </Button>
          </div>
        </div>
      </section>

      {/* Definition Section */}
      <section className="w-full py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1">
              <h2 className="text-sm font-bold text-rose-600 tracking-widest uppercase mb-3">The Concept</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">What is Blast Radius?</h3>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                In identity security, <strong>Blast Radius</strong> refers to the total scope of resources (data, applications, infrastructure) that an identity can access—whether directly, through group membership, or via role assumption.
              </p>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                A large blast radius means a single compromised credential can lead to a catastrophic breach. Reducing it means containing the threat.
              </p>
            </div>
            <div className="flex-1 bg-rose-50 rounded-2xl p-8 border border-rose-100 relative">
               <div className="absolute top-4 right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-rose-500">
                 <Activity className="w-6 h-6" />
               </div>
               <h4 className="font-bold text-slate-900 mb-4 text-xl">Why It Matters</h4>
               <ul className="space-y-4">
                 {[
                   "Lateral Movement prevention",
                   "Ransomware containment",
                   "Data exfiltration limits",
                   "Compliance (Least Privilege)"
                 ].map((item, i) => (
                   <li key={i} className="flex items-center gap-3">
                     <CheckCircle2 className="w-5 h-5 text-rose-500" />
                     <span className="text-slate-700 font-medium">{item}</span>
                   </li>
                 ))}
               </ul>
            </div>
          </div>
        </div>
      </section>

      {/* The Case Study */}
      <section className="w-full py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
           <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Case Study: The &quot;Luca&quot; Scenario</h2>
              <p className="text-slate-400">How a harmless intern account became a critical threat vector.</p>
           </div>

           <div className="grid md:grid-cols-3 gap-8 relative">
              {/* Connector Line */}
              <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-slate-700 -z-10" />

              {/* Step 1 */}
              <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 relative">
                 <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 mb-4 border border-blue-500/50 mx-auto bg-slate-900">
                    <User className="w-6 h-6" />
                 </div>
                 <h3 className="text-xl font-bold text-center mb-2">The Identity</h3>
                 <p className="text-center text-slate-400 text-sm">
                   Luca, a summer intern, joins the company. He needs access to Slack and Jira for his project.
                 </p>
              </div>

              {/* Step 2 */}
              <div className="bg-slate-800 p-6 rounded-xl border border-rose-500/50 relative shadow-[0_0_20px_rgba(244,63,94,0.1)]">
                 <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-rose-500 text-white text-xs font-bold px-3 py-1 rounded-full">The Mistake</div>
                 <div className="w-12 h-12 rounded-full bg-rose-500/20 flex items-center justify-center text-rose-400 mb-4 border border-rose-500/50 mx-auto bg-slate-900">
                    <Users className="w-6 h-6" />
                 </div>
                 <h3 className="text-xl font-bold text-center mb-2">The Group</h3>
                 <p className="text-center text-slate-400 text-sm">
                   To fix a permission issue quickly, an admin adds Luca to the <strong>&quot;DevOps&quot;</strong> group instead of creating a specific role.
                 </p>
              </div>

              {/* Step 3 */}
              <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 relative">
                 <div className="w-12 h-12 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-400 mb-4 border border-orange-500/50 mx-auto bg-slate-900">
                    <Database className="w-6 h-6" />
                 </div>
                 <h3 className="text-xl font-bold text-center mb-2">The Impact</h3>
                 <p className="text-center text-slate-400 text-sm">
                   The DevOps group has inherited rights to <strong>Production Databases</strong>. Luca now has full write access to critical customer data.
                 </p>
              </div>
           </div>

           <div className="mt-16 bg-slate-800/50 border border-slate-700 rounded-2xl p-8 flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <h4 className="text-2xl font-bold text-white mb-4">How Cydenti Solves This</h4>
                <p className="text-slate-400 mb-6">
                  Cydenti&apos;s Identity Graph automatically maps this path. It sees that Luca (Intern) -&gt; DevOps (Group) -&gt; Prod DB (Resource) exists, but Luca <strong>never actually uses</strong> the database.
                </p>
                <div className="flex gap-4">
                  <div className="flex items-center gap-2 text-emerald-400">
                     <CheckCircle2 className="w-5 h-5" />
                     <span>Detects Toxic Combination</span>
                  </div>
                  <div className="flex items-center gap-2 text-emerald-400">
                     <CheckCircle2 className="w-5 h-5" />
                     <span>Recommends Safe Removal</span>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/3 bg-slate-950 rounded-xl p-6 border border-slate-800">
                 <div className="flex justify-between items-center mb-4 border-b border-slate-800 pb-2">
                    <span className="text-sm font-mono text-slate-500">remediation.json</span>
                    <span className="text-xs text-emerald-500 font-bold">Auto-Fix Ready</span>
                 </div>
                 <div className="space-y-2 font-mono text-xs">
                    <div className="text-purple-400">action: <span className="text-green-300">&quot;remove_member&quot;</span></div>
                    <div className="text-blue-400">group: <span className="text-white">&quot;DevOps&quot;</span></div>
                    <div className="text-blue-400">user: <span className="text-white">&quot;luka.h@company.com&quot;</span></div>
                    <div className="text-slate-500"># Reasoning: Unused high-risk access</div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Case Study 2: The Zombie Service Account */}
      <section className="w-full py-24 bg-[#0B1120] border-t border-slate-800 text-white">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
           <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Case Study: The &quot;Zombie&quot; Service Account</h2>
              <p className="text-slate-400">Non-human identities are often the biggest silent risk.</p>
           </div>

           <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Visual Story */}
              <div className="relative">
                 {/* Card */}
                 <div className="bg-slate-900/80 backdrop-blur-xl rounded-2xl shadow-2xl border border-slate-800 p-8 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-2 h-full bg-orange-500" />
                    
                    <div className="space-y-8">
                       {/* The Setup */}
                       <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-lg bg-slate-800 flex items-center justify-center shrink-0 border border-slate-700 text-slate-400">
                             <ShieldCheck className="w-6 h-6" />
                          </div>
                          <div>
                             <h4 className="font-bold text-white text-lg">Build-Bot-2022</h4>
                             <p className="text-sm text-slate-400">Created 2 years ago for a migration project.</p>
                          </div>
                       </div>

                       {/* The Problem */}
                       <div className="pl-6 border-l-2 border-dashed border-slate-800 ml-6 py-2 space-y-6">
                          <div className="bg-orange-950/30 p-4 rounded-lg border border-orange-500/30 flex items-start gap-3">
                             <AlertTriangle className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                             <div>
                                <div className="font-bold text-orange-400 text-sm">Permissions Granted</div>
                                <div className="text-orange-300/80 text-sm font-mono mt-1">Role: Editor (Full Project Access)</div>
                             </div>
                          </div>
                          
                          <div className="bg-blue-950/30 p-4 rounded-lg border border-blue-500/30 flex items-start gap-3">
                             <Activity className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                             <div>
                                <div className="font-bold text-blue-400 text-sm">Actual Usage (Last 90 Days)</div>
                                <div className="text-blue-300/80 text-sm font-mono mt-1">S3: PutObject (logs-bucket only)</div>
                             </div>
                          </div>
                       </div>

                       {/* The Gap */}
                       <div className="flex items-center gap-2 text-rose-400 font-bold bg-rose-950/30 px-4 py-2 rounded-lg border border-rose-500/30 w-fit">
                          <XCircle className="w-5 h-5" />
                          <span>99% Over-Privileged</span>
                       </div>
                    </div>
                 </div>
              </div>

              {/* The Fix */}
              <div className="space-y-6">
                 <h3 className="text-2xl font-bold text-white">How Cydenti Rightsizes It</h3>
                 <p className="text-slate-400 leading-relaxed text-lg">
                    Service accounts don&apos;t complain when you reduce their access. Cydenti analyzes the <strong>actual API calls</strong> made by the bot over time and compares them to its assigned permissions.
                 </p>
                 
                 <div className="space-y-4 pt-4">
                    <div className="flex items-start gap-3">
                       <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 mt-1 shrink-0">
                          <span className="font-bold text-xs">1</span>
                       </div>
                       <div>
                          <h4 className="font-bold text-white">Drift Detection</h4>
                          <p className="text-slate-400 text-sm">Flags account as &quot;Dormant Admin&quot; due to lack of admin activity.</p>
                       </div>
                    </div>
                    <div className="flex items-start gap-3">
                       <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 mt-1 shrink-0">
                          <span className="font-bold text-xs">2</span>
                       </div>
                       <div>
                          <h4 className="font-bold text-white">Least Privilege Policy Gen</h4>
                          <p className="text-slate-400 text-sm">Auto-generates a Terraform/IAM policy allowing <em>only</em> <code>s3:PutObject</code> on <code>logs-bucket</code>.</p>
                       </div>
                    </div>
                    <div className="flex items-start gap-3">
                       <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 mt-1 shrink-0">
                          <span className="font-bold text-xs">3</span>
                       </div>
                       <div>
                          <h4 className="font-bold text-white">Automated Cleanup</h4>
                          <p className="text-slate-400 text-sm">Removes the &quot;Editor&quot; role binding entirely.</p>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      <CtaSection />
      <Footer />
    </main>
  );
}
