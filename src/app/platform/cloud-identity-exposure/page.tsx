"use client";

import { CtaSection } from "@/components/cta-section";
import { Footer } from "@/components/footer";
import { motion } from "framer-motion";
import { 
  ShieldAlert, 
  Eye, 
  Network, 
  Layers, 
  Zap, 
  CheckCircle2, 
  ArrowRight, 
  Users, 
  Server, 
  Lock,
  Cloud,
  AlertTriangle,
  History,
  GitBranch,
  Globe
} from 'lucide-react';
import { cn } from "@/lib/utils";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

// CSS for the circuit animation
const circuitStyles = `
  @keyframes dash {
    to {
      stroke-dashoffset: 0;
    }
  }
  .circuit-path {
    stroke-dasharray: 1000;
    stroke-dashoffset: 1000;
    animation: dash 5s linear infinite;
  }
`;

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center w-full overflow-hidden bg-slate-50/50">
      <style jsx global>{circuitStyles}</style>
      
      {/* Hero Section */}
      <section className="w-full bg-white pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-50 via-white to-white opacity-70" />
        
        <div className="container mx-auto px-4 md:px-6 text-center max-w-4xl relative z-10">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50/50 backdrop-blur-sm px-4 py-1.5 text-sm font-medium text-blue-700 mb-8 shadow-sm"
          >
            <Cloud className="w-4 h-4" />
            <span>Platform</span>
            <ArrowRight className="w-3 h-3 text-blue-400" />
            <span>Core Capabilities</span>
          </motion.div>
          
          <motion.h1 
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-5xl md:text-7xl font-bold text-slate-900 mb-8 tracking-tight leading-tight"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 animate-gradient-x">Cloud Identity Exposure Monitoring</span>
          </motion.h1>
          
          <motion.p 
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-2xl mx-auto"
          >
            See What Your Cloud Identities Can Really Do
          </motion.p>
        </div>
      </section>

      {/* Opening Narrative Section */}
      <section className="w-full py-24 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-100/40 via-transparent to-transparent opacity-50" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-8 mx-auto shadow-sm">
              <Eye className="w-8 h-8" />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 leading-tight">
              Cloud breaches rarely start with exploitation. <br/>
              <span className="text-blue-600">They start with excessive access.</span>
            </h2>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl border border-blue-100">
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-8">
                In modern cloud environments, identities accumulate permissions faster than teams can track them. Roles stack. Policies overlap. Trust relationships expand. What looks harmless in isolation becomes dangerous in combination.
              </p>
              
              <div className="h-px w-full bg-gradient-to-r from-transparent via-blue-200 to-transparent mb-8" />
              
              <p className="text-xl md:text-2xl font-semibold text-slate-900">
                Cydenti reveals the true exposure created by cloud identities — <span className="text-blue-600">before attackers discover it for you.</span>
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Invisible Problem Section */}
      <section className="w-full py-24 bg-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <div className="inline-flex items-center gap-2 text-rose-600 font-semibold mb-4 bg-rose-50 px-3 py-1 rounded-full border border-rose-100">
                <AlertTriangle className="w-4 h-4" />
                The Invisible Problem
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Permissions Lie. <br/>
                <span className="text-blue-600">Access Tells the Truth.</span>
              </h3>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                IAM policies describe what should be allowed. Cydenti shows what&apos;s actually possible.
              </p>
              
              <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm mb-8">
                <p className="text-slate-900 mb-4 font-medium">A single identity can:</p>
                <div className="space-y-3">
                  {[
                    "Assume multiple roles",
                    "Inherit permissions through groups",
                    "Traverse trust relationships",
                    "Access sensitive resources indirectly"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-rose-100 flex items-center justify-center flex-shrink-0">
                        <ArrowRight className="w-3 h-3 text-rose-600" />
                      </div>
                      <span className="text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-xl text-slate-700 font-medium">
                Most teams never see the full picture — because it doesn&apos;t exist in one place.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="bg-white rounded-2xl p-8 border border-slate-200 shadow-xl"
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <span className="text-slate-500 font-mono text-sm">Identity Analysis</span>
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500" />
                    <div className="w-3 h-3 rounded-full bg-amber-500" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500" />
                  </div>
                </div>
                <div className="space-y-4 font-mono text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500">Policy Permission:</span>
                    <span className="text-emerald-600 font-medium">ReadS3Bucket</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500">Group Inheritance:</span>
                    <span className="text-amber-600 font-medium">AdminAccess</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500">Role Assumption:</span>
                    <span className="text-rose-600 font-medium">CrossAccountProd</span>
                  </div>
                  <div className="h-px bg-slate-100 my-2" />
                  <div className="flex justify-between items-center font-bold">
                    <span className="text-slate-900">Effective Access:</span>
                    <span className="text-rose-600 animate-pulse">Full Admin (Production)</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Cydenti Reveal Section */}
      <section className="w-full py-24 bg-white relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <motion.h2 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-4"
            >
              The Cydenti Reveal
            </motion.h2>
            <motion.h3 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold text-slate-900 mb-8"
            >
              From Policies to Exposure Paths
            </motion.h3>
            
            <motion.p 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-lg text-slate-600 leading-relaxed mb-12"
            >
              Cydenti shifts cloud security from policy review to exposure analysis.
            </motion.p>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="relative bg-gradient-to-br from-slate-50 to-white rounded-2xl p-8 md:p-12 border border-slate-200 shadow-xl overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-slate-200 via-blue-500 to-slate-200" />
              
              <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 relative z-10">
                <div className="flex-1 text-center md:text-right space-y-3">
                  <span className="inline-block px-3 py-1 rounded-full bg-slate-100 text-slate-500 text-sm font-semibold mb-2">
                    Traditional Approach
                  </span>
                  <p className="text-slate-500 font-medium text-lg">Instead of asking:</p>
                  <p className="text-2xl font-bold text-slate-400 italic">&ldquo;Is this role too permissive?&rdquo;</p>
                </div>
                
                <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-blue-50 text-blue-600 shadow-sm border border-blue-100 transform rotate-90 md:rotate-0">
                  <ArrowRight className="w-6 h-6" />
                </div>
                
                <div className="flex-1 text-center md:text-left space-y-3">
                  <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-2">
                    Cydenti Approach
                  </span>
                  <p className="text-blue-600 font-medium text-lg">Cydenti answers:</p>
                  <p className="text-2xl font-bold text-slate-900">&ldquo;What can this identity reach, how far, and with what impact?&rdquo;</p>
                </div>
              </div>
            </motion.div>

            <motion.p 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="mt-12 text-xl font-medium text-slate-900"
            >
              By mapping identities to resources through real trust relationships, Cydenti exposes blast radius, not just misconfiguration.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <Card 
              icon={Network}
              title="Graph-Based Mapping"
              description="Maps identities to resources through real trust relationships, exposing blast radius, not just misconfiguration."
            />
            <Card 
              icon={Eye}
              title="Effective Permissions"
              description="Calculates the net result of policies, roles, groups, and SCPs to show true access levels."
            />
            <Card 
              icon={Zap}
              title="Impact Analysis"
              description="Identifies critical paths that could lead to data exfiltration or service disruption."
            />
          </div>
        </div>
      </section>

      {/* What Cydenti Surfaces Section */}
      <section className="w-full py-24 bg-slate-50 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              What You Discover When You Look at <br/>
              <span className="text-blue-600">Cloud Access Differently</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard 
              icon={Users}
              title="Over-Permissioned Identities"
              description="Users and service accounts with access far beyond operational needs."
            />
            <FeatureCard 
              icon={AlertTriangle}
              title="Risky Trust Relationships"
              description="Cross-account and cross-environment trust that silently expands access."
            />
            <FeatureCard 
              icon={History}
              title="Privilege Accumulation"
              description="Identities that were safe once — but dangerous now due to role stacking."
            />
            <FeatureCard 
              icon={GitBranch}
              title="Hidden Access Paths"
              description="Indirect routes from low-privilege access to high-impact resources."
            />
            <FeatureCard 
              icon={Globe}
              title="Drift Across Environments"
              description="Inconsistent permissions across AWS, Azure, and GCP."
            />
            <FeatureCard 
              icon={ShieldAlert}
              title="Critical Impact Zones"
              description="Each finding is connected to real identity behavior and downstream impact."
              highlight
            />
          </div>
        </div>
      </section>

      {/* Visual Moment - Blast Radius View */}
      <section className="py-32 bg-[#0B1120] relative overflow-hidden text-white rounded-[60px] mx-4 mb-4 w-[calc(100%-2rem)] max-w-7xl">
        
        {/* Background Effects - Enhanced */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
           {/* Deep dark blue base */}
          <div className="absolute inset-0 bg-[#0B1120]" />
          
          {/* Animated Gradient Orbs */}
          <div className="absolute top-[-30%] right-[-10%] w-[800px] h-[800px] rounded-full bg-blue-600/10 blur-[120px] animate-pulse-slow" />
          <div className="absolute bottom-[-30%] left-[-10%] w-[800px] h-[800px] rounded-full bg-indigo-600/10 blur-[120px] animate-pulse-slow delay-1000" />
          
          {/* Tech Grid Pattern */}
          <div 
              className="absolute inset-0 opacity-[0.05]" 
              style={{
                  backgroundImage: `linear-gradient(#4f46e5 1px, transparent 1px), linear-gradient(to right, #4f46e5 1px, transparent 1px)`,
                  backgroundSize: '60px 60px'
              }}
          />

          {/* Animated Circuit Board SVG Overlay */}
          <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
              <defs>
                  <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" style={{stopColor:'transparent', stopOpacity:0}} />
                      <stop offset="50%" style={{stopColor:'#60a5fa', stopOpacity:1}} />
                      <stop offset="100%" style={{stopColor:'transparent', stopOpacity:0}} />
                  </linearGradient>
              </defs>
              {/* Random "Data Lines" moving horizontally */}
              <path className="circuit-path" d="M0 100 H 10000" stroke="url(#grad1)" strokeWidth="1" fill="none" style={{animationDuration: '7s'}} />
              <path className="circuit-path" d="M0 300 H 10000" stroke="url(#grad1)" strokeWidth="1" fill="none" style={{animationDuration: '12s', animationDelay: '1s'}} />
              <path className="circuit-path" d="M0 600 H 10000" stroke="url(#grad1)" strokeWidth="1" fill="none" style={{animationDuration: '9s', animationDelay: '2s'}} />
              <path className="circuit-path" d="M0 800 H 10000" stroke="url(#grad1)" strokeWidth="1" fill="none" style={{animationDuration: '15s', animationDelay: '0.5s'}} />
              
               {/* Random "Data Lines" moving vertically */}
               <path className="circuit-path" d="M200 0 V 10000" stroke="url(#grad1)" strokeWidth="1" fill="none" style={{animationDuration: '10s'}} />
               <path className="circuit-path" d="M800 0 V 10000" stroke="url(#grad1)" strokeWidth="1" fill="none" style={{animationDuration: '8s', animationDelay: '3s'}} />
               <path className="circuit-path" d="M1200 0 V 10000" stroke="url(#grad1)" strokeWidth="1" fill="none" style={{animationDuration: '14s', animationDelay: '1.5s'}} />
          </svg>

          {/* Binary Rain Effect (Subtle) */}
          <div className="absolute inset-0 opacity-10 flex justify-between px-10 pointer-events-none select-none overflow-hidden">
               {Array.from({ length: 10 }).map((_, i) => (
                   <div key={i} className="text-[10px] text-blue-500 font-mono animate-fall" style={{
                       animationDuration: `${(i * 0.5) + 5}s`,
                       animationDelay: `${(i * 0.3) % 5}s`,
                       writingMode: 'vertical-rl'
                   }}>
                       {Array.from({ length: 20 }).map((_, j) => (i + j) % 3 === 0 ? '1' : '0').join(' ')}
                   </div>
               ))}
          </div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center text-center mb-16">
            <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center border border-blue-500/50 mb-6 animate-pulse">
              <Layers className="w-8 h-8 text-blue-400" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight leading-tight">
              The Blast Radius View
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl">
              This is not a list. It’s a map of risk.
            </p>
          </div>

          <div className="relative w-full max-w-5xl mx-auto aspect-video bg-[#0f172a]/90 backdrop-blur-xl rounded-xl border border-slate-700/50 shadow-2xl overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5" />
            
            {/* Mock UI for Blast Radius */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-full h-full p-8">
                {/* Center Node */}
                <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(37,99,235,0.5)] z-20 cursor-pointer transition-transform hover:scale-110">
                  <Users className="w-8 h-8 text-white" />
                  <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs font-mono text-blue-300">Compromised User</div>
                </div>

                {/* Connecting Lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none">
                  <path d="M25% 50% Q 50% 20% 75% 30%" fill="none" stroke="url(#gradient1)" strokeWidth="2" strokeDasharray="5,5" className="animate-[dash_20s_linear_infinite]" />
                  <path d="M25% 50% Q 50% 80% 75% 70%" fill="none" stroke="url(#gradient2)" strokeWidth="2" strokeDasharray="5,5" className="animate-[dash_15s_linear_infinite]" />
                  <defs>
                    <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.5" />
                      <stop offset="100%" stopColor="#ef4444" stopOpacity="0.8" />
                    </linearGradient>
                    <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.5" />
                      <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.8" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Target Nodes */}
                <div className="absolute top-[30%] right-[25%] w-12 h-12 bg-red-500/20 border border-red-500 rounded-lg flex items-center justify-center backdrop-blur-sm z-10 group-hover:bg-red-500/30 transition-colors">
                  <Server className="w-6 h-6 text-red-400" />
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs font-mono text-red-300 bg-slate-900/80 px-2 py-1 rounded">Prod Database</div>
                </div>

                <div className="absolute top-[70%] right-[25%] w-12 h-12 bg-yellow-500/20 border border-yellow-500 rounded-lg flex items-center justify-center backdrop-blur-sm z-10 group-hover:bg-yellow-500/30 transition-colors">
                  <Cloud className="w-6 h-6 text-yellow-400" />
                  <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs font-mono text-yellow-300 bg-slate-900/80 px-2 py-1 rounded">S3 Backup</div>
                </div>
              </div>
            </div>

            {/* UI Overlay */}
            <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end pointer-events-none">
              <div className="bg-slate-900/90 backdrop-blur border border-slate-700 p-4 rounded-lg text-xs font-mono text-slate-300">
                <div>Escalation Path: Indirect via Role Assumption</div>
                <div className="text-red-400 mt-1">Critical Impact: Data Exfiltration</div>
              </div>
              <div className="flex gap-2">
                 <div className="bg-blue-600/20 border border-blue-500/50 text-blue-300 px-3 py-1 rounded-full text-xs">Visualize</div>
                 <div className="bg-slate-800 border border-slate-700 text-slate-400 px-3 py-1 rounded-full text-xs">Remediate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why This Changes Everything */}
      <section className="w-full py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Least Privilege Becomes <span className="text-cyan-600">Practical</span>
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Least privilege fails when teams don’t understand what to remove, what will break, and what actually matters. Cydenti makes least privilege safe and actionable.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg">What access is unused</h4>
                    <p className="text-slate-600">Identify permissions that haven&apos;t been touched in 90+ days.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-cyan-50 flex items-center justify-center shrink-0">
                    <AlertTriangle className="w-6 h-6 text-cyan-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg">What access is dangerous</h4>
                    <p className="text-slate-600">Pinpoint permissions that allow destructive actions or data leaks.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center shrink-0">
                    <Lock className="w-6 h-6 text-slate-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg">What access is essential</h4>
                    <p className="text-slate-600">Preserve business-critical access while trimming the fat.</p>
                  </div>
                </div>
              </div>

              <div className="mt-10 p-4 bg-slate-50 border border-slate-200 rounded-lg">
                <p className="font-medium text-slate-700 text-center">
                  &quot;Security teams stop guessing. Engineering teams stop resisting.&quot;
                </p>
              </div>
            </div>
            
            <div className="order-1 md:order-2 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-100 relative">
               <div className="space-y-4">
                 <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-100 flex justify-between items-center">
                   <div className="flex items-center gap-3">
                     <div className="w-8 h-8 rounded bg-slate-100 flex items-center justify-center"><Users className="w-4 h-4 text-slate-500"/></div>
                     <div className="text-sm">
                       <div className="font-medium text-slate-900">Developer Role</div>
                       <div className="text-slate-500 text-xs">95% permissions unused</div>
                     </div>
                   </div>
                   <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded">High Risk</span>
                 </div>
                 <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-100 flex justify-between items-center opacity-50">
                   <div className="flex items-center gap-3">
                     <div className="w-8 h-8 rounded bg-slate-100 flex items-center justify-center"><Server className="w-4 h-4 text-slate-500"/></div>
                     <div className="text-sm">
                       <div className="font-medium text-slate-900">EC2 ReadOnly</div>
                       <div className="text-slate-500 text-xs">Optimized</div>
                     </div>
                   </div>
                   <span className="text-xs font-bold text-cyan-600 bg-cyan-50 px-2 py-1 rounded">Safe</span>
                 </div>
                 <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white p-3 rounded-full shadow-lg">
                   <ArrowRight className="w-6 h-6" />
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Connection Across Platform */}
      <section className="w-full py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Cloud Exposure Is Never Isolated</h2>
            <p className="text-slate-400 text-lg">Cloud risk stops being a standalone problem — it becomes contextual intelligence.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <ConnectionCard 
              title="Identity Threat Detection"
              description="High-exposure identities become high-priority detections."
              icon={ShieldAlert}
              color="text-blue-400"
            />
            <ConnectionCard 
              title="Risk Scoring & Prioritization"
              description="Exposure amplifies behavioral risk."
              icon={Zap}
              color="text-cyan-400"
            />
            <ConnectionCard 
              title="Compliance & Reporting"
              description="Evidence of access drift over time."
              icon={CheckCircle2}
              color="text-slate-300"
            />
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="w-full py-24 bg-blue-50">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12">Built for Cloud-First Reality</h2>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {[
              "Cloud Security Architects",
              "Platform & Infrastructure Teams",
              "Identity & IAM Owners",
              "Security Engineering"
            ].map((role, i) => (
              <div key={i} className="bg-white px-6 py-3 rounded-full shadow-sm border border-blue-100 text-slate-700 font-medium">
                {role}
              </div>
            ))}
          </div>
          
          <p className="text-xl text-blue-800 font-medium">
            If you manage cloud access at scale, this is your missing visibility layer.
          </p>
        </div>
      </section>

      <CtaSection />
      <Footer />
    </main>
  );
}

function Card({ icon: Icon, title, description }: { icon: React.ElementType, title: string, description: string }) {
  return (
    <motion.div 
      variants={fadeInUp}
      className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-6 text-blue-600">
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
      <p className="text-slate-600 leading-relaxed">{description}</p>
    </motion.div>
  );
}

function FeatureCard({ icon: Icon, title, description, highlight = false }: { icon: React.ElementType, title: string, description: string, highlight?: boolean }) {
  return (
    <motion.div 
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={cn(
        "p-6 rounded-xl border transition-all duration-300",
        highlight 
          ? "bg-blue-600 text-white border-blue-500 shadow-lg scale-105" 
          : "bg-white border-slate-200 hover:border-blue-300 hover:shadow-md"
      )}
    >
      <div className={cn(
        "w-10 h-10 rounded-lg flex items-center justify-center mb-4",
        highlight ? "bg-white/20 text-white" : "bg-slate-100 text-slate-600"
      )}>
        <Icon className="w-5 h-5" />
      </div>
      <h3 className={cn("text-lg font-bold mb-2", highlight ? "text-white" : "text-slate-900")}>{title}</h3>
      <p className={cn("text-sm leading-relaxed", highlight ? "text-blue-100" : "text-slate-600")}>{description}</p>
    </motion.div>
  );
}

function ConnectionCard({ title, description, icon: Icon, color }: { title: string, description: string, icon: React.ElementType, color: string }) {
  return (
    <motion.div 
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="bg-slate-800 p-8 rounded-2xl border border-slate-700 flex flex-col items-center text-center hover:bg-slate-750 transition-colors"
    >
      <Icon className={cn("w-10 h-10 mb-4", color)} />
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <ArrowRight className="w-4 h-4 text-slate-500 my-2 rotate-90" />
      <p className="text-slate-300">{description}</p>
    </motion.div>
  );
}
