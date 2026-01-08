"use client";

import React from "react";
import Link from "next/link";
import {
  BrainCircuit,
  CheckCircle2,
  Zap,
  Search,
  User,
  Users,
  Key,
  FileKey,
  Database,
  Activity,
  Shield,
  Eye,
  Globe,
  ArrowRight,
  ShieldAlert,
  AlertTriangle
} from "lucide-react";

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

export function AiAutomationSection() {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="py-32 bg-[#0B1120] relative overflow-hidden text-white rounded-[60px] mx-4 mb-4">
       <style jsx global>{circuitStyles}</style>
      
      {/* 
        Background Effects - Enhanced
        - Subtle animated gradient mesh
        - Tech grid overlay
        - Circuit/Data Stream Animation
      */}
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
             {mounted && Array.from({ length: 10 }).map((_, i) => {
                 const pr = (k: number) => {
                     const x = Math.sin((i + 1) * 12.9898 + k * 78.233) * 43758.5453;
                     return x - Math.floor(x);
                 };
                 const duration = 5 + 5 * pr(1);
                 const delay = 5 * pr(2);
                 const bits = Array.from({ length: 20 })
                     .map((_, j) => {
                         const x = Math.sin(((i + 1) * 100 + j) * 12.9898 + 3 * 78.233) * 43758.5453;
                         const v = x - Math.floor(x);
                         return v > 0.5 ? '1' : '0';
                     })
                     .join(' ');
                 return (
                     <div
                         key={i}
                         className="text-[10px] text-blue-500 font-mono animate-fall"
                         style={{
                             animationDuration: `${duration}s`,
                             animationDelay: `${delay}s`,
                             writingMode: 'vertical-rl',
                         }}
                     >
                         {bits}
                     </div>
                 );
             })}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center group/section">
          
          {/* Feature 1: AI & LLMs */}
          <div className="relative">
            
            <div className="relative space-y-8">
              <div className="inline-flex items-center gap-2 text-blue-400 font-bold tracking-widest text-xs uppercase bg-blue-900/30 px-3 py-1 rounded-full border border-blue-800/50 backdrop-blur-sm shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                <BrainCircuit className="w-3 h-3" />
                Sovereign Intelligence
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
                AI & LLMs That Actually<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 animate-gradient-x">Understand Identity.</span>
              </h2>
              
              <p className="text-slate-400 text-lg leading-relaxed">
                Cydenti uses in-house LLMs and AI agents to read identity behavior, SaaS posture, cloud permissions, and risky integrations — <span className="text-white font-medium">privately and securely.</span>
              </p>
              
              <ul className="space-y-4 pt-4">
                {[
                  "Spots configuration drift instantly",
                  "Flags anomalies in behavior",
                  "Reveals hidden access paths"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-300">
                    <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 shrink-0 border border-blue-500/30 shadow-[0_0_10px_rgba(59,130,246,0.2)]">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Visual 1: AI Analysis Card */}
          <div className="relative transition-all duration-500">
             {/* Hover Glow - Enhanced */}
             <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 rounded-2xl blur opacity-20 group-hover/section:opacity-50 transition-opacity duration-700 animate-tilt" />
             
             <div className="bg-[#0f172a]/90 border border-slate-700/50 rounded-2xl p-6 backdrop-blur-xl relative overflow-hidden transition-all duration-500 group-hover/section:border-blue-500/50 shadow-2xl group-hover/section:translate-y-[-5px]">
                {/* Code Editor Header */}
                <div className="flex items-center gap-2 border-b border-slate-800 pb-4 mb-6">
                    <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                        <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
                    </div>
                    <span className="ml-auto text-xs font-mono text-slate-500 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                        analysis_module.py
                    </span>
                </div>
                
                {/* Code Content */}
                <div className="space-y-1.5 font-mono text-sm leading-relaxed">
                  <div className="flex">
                    <span className="text-slate-600 w-8 text-right mr-4 select-none">1</span>
                    <span className="text-purple-400">def</span> <span className="text-blue-300">analyze_identity_risk</span><span className="text-slate-400">(user_context):</span>
                  </div>
                  <div className="flex">
                    <span className="text-slate-600 w-8 text-right mr-4 select-none">2</span>
                    <span className="pl-4 text-slate-300">risk_score = <span className="text-orange-300">0</span></span>
                  </div>
                  <div className="flex">
                    <span className="text-slate-600 w-8 text-right mr-4 select-none">3</span>
                    <span className="pl-4 text-slate-500"># Analyze permissions & behavior</span>
                  </div>
                  <div className="flex">
                    <span className="text-slate-600 w-8 text-right mr-4 select-none">4</span>
                    <span className="pl-4 text-slate-300">permissions = <span className="text-blue-300">scan_cloud_entitlements</span>()</span>
                  </div>
                  <div className="flex">
                    <span className="text-slate-600 w-8 text-right mr-4 select-none">5</span>
                    <span className="pl-4 text-purple-400">if</span> <span className="text-green-300">&quot;Shadow Admin&quot;</span> <span className="text-purple-400">in</span> permissions:
                  </div>
                  <div className="flex">
                    <span className="text-slate-600 w-8 text-right mr-4 select-none">6</span>
                    <span className="pl-8 text-blue-300">flag_anomaly</span><span className="text-slate-400">(</span><span className="text-green-300">&quot;Hidden Path Discovered&quot;</span><span className="text-slate-400">)</span>
                  </div>
                  <div className="flex relative group/line">
                     {/* Highlight line */}
                     <div className="absolute inset-0 bg-blue-500/10 -mx-6 border-l-2 border-blue-500 opacity-50 group-hover/line:opacity-100 transition-opacity" />
                    <span className="text-slate-600 w-8 text-right mr-4 select-none relative z-10">7</span>
                    <span className="pl-8 text-slate-300 relative z-10">risk_score += <span className="text-orange-300">95</span> <span className="text-slate-500"># Critical</span></span>
                  </div>
                  <div className="flex">
                    <span className="text-slate-600 w-8 text-right mr-4 select-none">8</span>
                    <span className="pl-4 text-purple-400">return</span> risk_score
                  </div>
                </div>

                {/* Decorative glowing cursor effect - Enhanced */}
                <div className="absolute bottom-6 right-6 w-32 h-32 bg-blue-500/20 blur-[60px] rounded-full pointer-events-none animate-pulse" />
             </div>
          </div>
        </div>

        {/* Spacer */}
        <div className="h-32 md:h-48" />

        {/* Feature 2: Automation */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Visual 2: Automation List */}
          <div className="relative order-2 lg:order-1">
             <div className="relative z-10 space-y-4">
                {/* Card 1 */}
                <div className="bg-slate-900/80 border border-slate-800 p-4 rounded-xl flex items-center justify-between backdrop-blur-md">
                  <span className="font-medium text-slate-300">Risk Scoring</span>
                  <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded">Complete</span>
                </div>
                
                {/* Card 2 */}
                <div className="bg-slate-900/80 border border-slate-800 p-4 rounded-xl flex items-center justify-between backdrop-blur-md">
                  <span className="font-medium text-slate-300">Configuration Checks</span>
                  <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded">Complete</span>
                </div>

                {/* Card 3 - Active */}
                <div className="bg-slate-800/90 border border-blue-500/30 p-4 rounded-xl flex items-center justify-between backdrop-blur-md relative shadow-lg shadow-blue-900/20">
                  <span className="font-medium text-white">Permission Mapping</span>
                  <span className="text-xs font-bold text-blue-400 bg-blue-500/10 px-2 py-1 rounded animate-pulse">Processing...</span>
                  
                  {/* Floating Badge 1 */}
                  <div className="absolute -right-12 -top-6 bg-[#0B1120] border border-emerald-500/30 p-3 rounded-lg shadow-xl flex items-center gap-3 animate-bounce-slow z-20">
                      <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                          <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <span className="text-sm font-bold text-emerald-400 whitespace-nowrap">Zero Data Egress</span>
                  </div>
                </div>

                {/* Card 4 */}
                <div className="bg-slate-900/80 border border-slate-800 p-4 rounded-xl flex items-center justify-between backdrop-blur-md relative">
                  <span className="font-medium text-slate-400">Alert Enrichment</span>
                  <span className="text-xs font-bold text-slate-500 bg-slate-800 px-2 py-1 rounded">Queued</span>

                   {/* Floating Badge 2 */}
                  <div className="absolute -left-8 top-8 bg-[#0B1120] border border-blue-500/30 p-3 rounded-lg shadow-xl flex items-center gap-3 animate-bounce-slow delay-700 z-20">
                      <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                          <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <span className="text-sm font-bold text-blue-400 whitespace-nowrap">Audit Report Ready</span>
                  </div>
                </div>

                {/* Card 5 */}
                <div className="bg-slate-900/80 border border-slate-800 p-4 rounded-xl flex items-center justify-between backdrop-blur-md">
                  <span className="font-medium text-slate-400">Audit Reporting</span>
                  <span className="text-xs font-bold text-slate-500 bg-slate-800 px-2 py-1 rounded">Queued</span>
                </div>
             </div>
             
             {/* Background decorative glow */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-500/5 blur-3xl rounded-full pointer-events-none" />
          </div>

          {/* Content 2: Automation Text */}
          <div className="relative order-1 lg:order-2 space-y-8">
            <div className="inline-flex items-center gap-2 text-emerald-400 font-bold tracking-widest text-xs uppercase bg-emerald-900/20 px-3 py-1 rounded-full border border-emerald-800/30 backdrop-blur-sm shadow-[0_0_15px_rgba(16,185,129,0.2)]">
              <Zap className="w-3 h-3" />
              Hyper-Automation
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
              Automation That<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">Removes Complexity.</span>
            </h2>
            
            <p className="text-slate-400 text-lg leading-relaxed">
              Risk scoring, configuration checks, permission mapping, alert enrichment, and audit reporting — <span className="text-white font-medium">all automated.</span>
            </p>

            <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="bg-slate-800/40 p-6 rounded-2xl border border-slate-700/50 hover:border-emerald-500/30 transition-colors">
                    <div className="text-3xl font-bold text-white mb-1">100%</div>
                    <div className="text-xs font-bold text-slate-500 tracking-wider uppercase">More Accuracy</div>
                </div>
                <div className="bg-slate-800/40 p-6 rounded-2xl border border-slate-700/50 hover:border-emerald-500/30 transition-colors">
                    <div className="text-3xl font-bold text-white mb-1">0%</div>
                    <div className="text-xs font-bold text-slate-500 tracking-wider uppercase">Noise</div>
                </div>
            </div>
          </div>
        </div>

        {/* Spacer */}
        <div className="h-32 md:h-48" />

        {/* Feature: Threat Detection & Response */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
             {/* Content */}
             <div className="space-y-8">
                  <div className="inline-flex items-center gap-2 text-rose-400 font-bold tracking-widest text-xs uppercase bg-rose-900/20 px-3 py-1 rounded-full border border-rose-800/30 backdrop-blur-sm shadow-[0_0_15px_rgba(244,63,94,0.2)]">
                      <ShieldAlert className="w-3 h-3" />
                      Identity Detection
                  </div>

                  <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
                    Stop Threats That<br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-orange-400">Others Miss.</span>
                  </h2>

                  <p className="text-slate-400 text-lg leading-relaxed">
                    Cydenti observes authentication events, applies behavioral analytics, and flags anomalies in real-time. From credential stuffing to MFA fatigue, stop attacks before they become incidents.
                  </p>
                  
                  <div className="space-y-4">
                      <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-rose-500/20 flex items-center justify-center text-rose-400 border border-rose-500/30">
                              <Activity className="w-4 h-4" />
                          </div>
                          <span className="text-slate-300 font-medium">Real-time Anomaly Detection</span>
                      </div>
                      <div className="flex items-center gap-3">
                           <div className="w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-400 border border-orange-500/30">
                              <Zap className="w-4 h-4" />
                          </div>
                          <span className="text-slate-300 font-medium">Automated Response (SIEM/SOAR)</span>
                      </div>
                  </div>

                  <div className="pt-4">
                       <Link href="/platform/itdr" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-rose-600 text-white font-semibold hover:bg-rose-500 transition-colors shadow-lg shadow-rose-900/20">
                           Learn more about Identity Detection
                           <ArrowRight className="w-4 h-4" />
                       </Link>
                  </div>
             </div>

             {/* Visual */}
             <div className="relative">
                  <div className="bg-slate-900/80 border border-slate-800 p-8 rounded-2xl backdrop-blur-md relative overflow-hidden group/threat transition-all duration-500 hover:border-rose-500/50 hover:shadow-[0_0_30px_rgba(244,63,94,0.1)]">
                      <div className="absolute inset-0 bg-rose-500/5 group-hover/threat:bg-rose-500/10 transition-colors" />
                      
                      {/* Fake Alert List */}
                      <div className="space-y-4">
                          <div className="bg-slate-800/50 p-4 rounded-xl border border-rose-500/30 flex items-start gap-4 shadow-lg">
                              <div className="w-10 h-10 rounded-full bg-rose-500/20 flex items-center justify-center shrink-0 animate-pulse">
                                  <AlertTriangle className="w-5 h-5 text-rose-500" />
                              </div>
                              <div className="flex-1">
                                  <div className="flex items-center justify-between mb-1">
                                      <span className="text-rose-400 font-bold text-sm">MFA Fatigue Detected</span>
                                      <span className="text-xs text-slate-500">Just now</span>
                                  </div>
                                  <p className="text-xs text-slate-400 mb-2">User &quot;jdoe&quot; denied 15 push notifications in 2 minutes.</p>
                                  <div className="flex items-center gap-2">
                                      <span className="text-[10px] px-2 py-0.5 rounded bg-slate-700 text-slate-300 border border-slate-600">Okta</span>
                                      <span className="text-[10px] px-2 py-0.5 rounded bg-rose-900/30 text-rose-300 border border-rose-800/30">High Severity</span>
                                  </div>
                              </div>
                          </div>

                           <div className="bg-slate-800/50 p-4 rounded-xl border border-orange-500/30 flex items-start gap-4 opacity-70">
                              <div className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center shrink-0">
                                  <Globe className="w-5 h-5 text-orange-500" />
                              </div>
                              <div className="flex-1">
                                  <div className="flex items-center justify-between mb-1">
                                      <span className="text-orange-400 font-bold text-sm">Impossible Travel</span>
                                      <span className="text-xs text-slate-500">5m ago</span>
                                  </div>
                                  <p className="text-xs text-slate-400 mb-2">Logins from NY and Tokyo within 1 hour.</p>
                                  <div className="flex items-center gap-2">
                                      <span className="text-[10px] px-2 py-0.5 rounded bg-slate-700 text-slate-300 border border-slate-600">Azure AD</span>
                                  </div>
                              </div>
                          </div>
                      </div>
                      
                      {/* Automated Response Badge */}
                      <div className="mt-6 flex items-center justify-between border-t border-slate-700/50 pt-4">
                          <span className="text-xs text-slate-400">Automated Action:</span>
                          <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold bg-emerald-900/20 px-2 py-1 rounded border border-emerald-800/30">
                              <CheckCircle2 className="w-3 h-3" />
                              Account Suspended
                          </div>
                      </div>
                  </div>
             </div>
        </div>

        {/* Spacer */}
        <div className="h-32 md:h-48" />
        
        {/* Feature 3: Access Explorer */}
        <div className="relative w-full">
          <div className="text-center mb-16">
               <div className="inline-flex items-center gap-2 text-indigo-400 font-bold tracking-widest text-xs uppercase bg-indigo-900/20 px-3 py-1 rounded-full border border-indigo-800/30 backdrop-blur-sm mb-6">
                  <Search className="w-3 h-3" />
                  Identity Graph
                </div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
                  Access Explorer
                </h2>
                <p className="text-slate-400 max-w-2xl mx-auto">
                  Visualize every connection, permission, and identity path in real-time.
                </p>
          </div>

          {/* Identity Lifecycle Wave Flow */}
          <div className="w-full max-w-5xl mx-auto mb-20 relative px-4">
            {/* Connecting Wave Line */}
            <div className="absolute top-[2rem] left-0 w-full h-24 -translate-y-1/2 pointer-events-none hidden md:block z-0">
              <svg className="w-full h-full overflow-visible" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="waveGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.1" />
                    <stop offset="20%" stopColor="#3b82f6" stopOpacity="0.5" />
                    <stop offset="50%" stopColor="#06b6d4" stopOpacity="1" />
                    <stop offset="80%" stopColor="#3b82f6" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.1" />
                  </linearGradient>
                </defs>
                {/* Sine Wave Path - Adjusted to align with icons */}
                <path 
                  d="M120,50 C250,50 250,20 370,20 S500,80 620,80 S750,50 880,50" 
                  fill="none" 
                  stroke="url(#waveGradient2)" 
                  strokeWidth="2" 
                  className="opacity-60"
                  vectorEffect="non-scaling-stroke"
                />
                {/* Animated Particles */}
                <circle r="3" fill="#06b6d4">
                  <animateMotion 
                    dur="4s" 
                    repeatCount="indefinite" 
                    path="M120,50 C250,50 250,20 370,20 S500,80 620,80 S750,50 880,50" 
                  />
                </circle>
                <circle r="3" fill="#3b82f6">
                  <animateMotion 
                    dur="4s" 
                    begin="2s"
                    repeatCount="indefinite" 
                    path="M120,50 C250,50 250,20 370,20 S500,80 620,80 S750,50 880,50" 
                  />
                </circle>
              </svg>
            </div>

            {/* Steps Container */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 relative z-10">
              
              {/* Step 1: Discover */}
              <div className="flex flex-col items-center text-center group">
                <div className="relative w-16 h-16 mb-4 flex items-center justify-center">
                   {/* Rotatable Container */}
                   <div className="absolute inset-0 rounded-2xl bg-slate-900 border border-slate-700 shadow-lg group-hover:rotate-45 group-hover:border-blue-500 group-hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] transition-all duration-500 ease-out z-0"></div>
                   {/* Icon - Stationary */}
                   <div className="relative z-10 text-blue-400 group-hover:text-blue-300 transition-colors duration-300">
                     <Globe className="w-7 h-7" />
                   </div>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Discover</h3>
                <p className="text-sm text-slate-400">Ingest identity signals & build the graph</p>
              </div>

              {/* Step 2: Assess */}
              <div className="flex flex-col items-center text-center group md:-translate-y-8">
                <div className="relative w-16 h-16 mb-4 flex items-center justify-center">
                   {/* Rotatable Container */}
                   <div className="absolute inset-0 rounded-2xl bg-slate-900 border border-slate-700 shadow-lg group-hover:rotate-45 group-hover:border-cyan-500 group-hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] transition-all duration-500 ease-out z-0"></div>
                   {/* Icon - Stationary */}
                   <div className="relative z-10 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300">
                     <Activity className="w-7 h-7" />
                   </div>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Assess</h3>
                <p className="text-sm text-slate-400">Score risk & map hidden paths</p>
              </div>

              {/* Step 3: Remediate */}
              <div className="flex flex-col items-center text-center group md:translate-y-8">
                <div className="relative w-16 h-16 mb-4 flex items-center justify-center">
                   {/* Rotatable Container */}
                   <div className="absolute inset-0 rounded-2xl bg-slate-900 border border-slate-700 shadow-lg group-hover:rotate-45 group-hover:border-indigo-500 group-hover:shadow-[0_0_30px_rgba(99,102,241,0.4)] transition-all duration-500 ease-out z-0"></div>
                   {/* Icon - Stationary */}
                   <div className="relative z-10 text-indigo-400 group-hover:text-indigo-300 transition-colors duration-300">
                     <Shield className="w-7 h-7" />
                   </div>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Remediate</h3>
                <p className="text-sm text-slate-400">Fix permissions & guide owners</p>
              </div>

              {/* Step 4: Monitor */}
              <div className="flex flex-col items-center text-center group">
                <div className="relative w-16 h-16 mb-4 flex items-center justify-center">
                   {/* Rotatable Container */}
                   <div className="absolute inset-0 rounded-2xl bg-slate-900 border border-slate-700 shadow-lg group-hover:rotate-45 group-hover:border-emerald-500 group-hover:shadow-[0_0_30px_rgba(16,185,129,0.4)] transition-all duration-500 ease-out z-0"></div>
                   {/* Icon - Stationary */}
                   <div className="relative z-10 text-emerald-400 group-hover:text-emerald-300 transition-colors duration-300">
                     <Eye className="w-7 h-7" />
                   </div>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Monitor</h3>
                <p className="text-sm text-slate-400">Continuous drift detection</p>
              </div>

            </div>
          </div>

          <div className="relative w-full h-[600px] bg-slate-950 rounded-3xl border border-slate-800 overflow-hidden group/explorer">
               {/* Grid Background */}
               <div className="absolute inset-0 bg-[linear-gradient(rgba(30,41,59,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(30,41,59,0.5)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />
               
               {/* Interactive Graph Container - Centered */}
               <div className="absolute inset-0 flex items-center justify-center">
                  
                  {/* SVG Connections Layer */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 1000 600" preserveAspectRatio="none">
                      <defs>
                          <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.2" />
                              <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.8" />
                              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.2" />
                          </linearGradient>
                      </defs>
                      
                      {/* L1 -> L2 */}
                      <path d="M 500,120 C 500,175 200,175 200,230" stroke="#334155" strokeWidth="2" fill="none" className="opacity-50" />
                      <path d="M 500,120 C 500,175 500,175 500,230" stroke="#334155" strokeWidth="2" fill="none" className="opacity-50" />
                      <path d="M 500,120 C 500,175 800,175 800,230" stroke="#334155" strokeWidth="2" fill="none" className="opacity-50" />

                      {/* L2 -> L3 */}
                      <path d="M 200,260 C 200,315 200,315 200,370" stroke="#334155" strokeWidth="2" fill="none" className="opacity-50" />
                      <path d="M 500,260 C 500,315 420,315 420,370" stroke="#334155" strokeWidth="2" fill="none" className="opacity-50" />
                      <path d="M 500,260 C 500,315 580,315 580,370" stroke="#334155" strokeWidth="2" fill="none" className="opacity-50" />
                      
                      {/* L3 -> L4 */}
                      <path d="M 580,400 C 580,455 500,455 500,510" stroke="#334155" strokeWidth="2" fill="none" className="opacity-50" />
                      <path d="M 580,400 C 580,455 660,455 660,510" stroke="#334155" strokeWidth="2" fill="none" className="opacity-50" />

                      {/* Active Threat Path Animation */}
                      {/* Root -> Interns */}
                      <path d="M 500,120 C 500,175 500,175 500,230" stroke="url(#pathGradient)" strokeWidth="2" fill="none" className="animate-pulse" />
                      {/* Interns -> Engineering */}
                      <path d="M 500,260 C 500,315 580,315 580,370" stroke="url(#pathGradient)" strokeWidth="2" fill="none" className="animate-pulse" />
                      {/* Engineering -> AWS Keys */}
                      <path d="M 580,400 C 580,455 500,455 500,510" stroke="url(#pathGradient)" strokeWidth="2" fill="none" className="animate-pulse" />
                      
                      {/* Particles */}
                      <circle r="3" fill="#60a5fa">
                          <animateMotion dur="2s" repeatCount="indefinite" path="M 500,120 C 500,175 500,175 500,230" />
                      </circle>
                      <circle r="3" fill="#60a5fa">
                          <animateMotion dur="2s" begin="0.5s" repeatCount="indefinite" path="M 500,260 C 500,315 580,315 580,370" />
                      </circle>
                      <circle r="3" fill="#60a5fa">
                          <animateMotion dur="2s" begin="1s" repeatCount="indefinite" path="M 580,400 C 580,455 500,455 500,510" />
                      </circle>
                  </svg>

                  {/* Nodes Layer */}
                  <div className="relative w-full h-full max-w-5xl mx-auto p-8 z-10">
                      
                      {/* Level 1: Root Node (Identity) */}
                      <div className="absolute top-[80px] left-1/2 -translate-x-1/2">
                          <div className="bg-slate-900/90 backdrop-blur-md border border-teal-500/50 rounded-full py-2 px-4 flex items-center gap-3 shadow-[0_0_20px_rgba(20,184,166,0.2)] animate-float">
                              <div className="w-8 h-8 rounded-full bg-teal-500/20 flex items-center justify-center">
                                  <User className="w-4 h-4 text-teal-400" />
                              </div>
                              <div className="text-left">
                                  <div className="text-sm font-bold text-white">Luka Horvat</div>
                                  <div className="text-[10px] text-teal-400 uppercase tracking-wider">Identity</div>
                              </div>
                          </div>
                      </div>

                      {/* Level 2 Nodes */}
                      {/* DevOps */}
                      <div className="absolute top-[220px] left-[20%] -translate-x-1/2">
                          <div className="bg-slate-900/80 backdrop-blur-md border border-slate-700 rounded-full py-2 px-4 flex items-center gap-3 opacity-50">
                              <div className="w-8 h-8 rounded-full bg-slate-700/50 flex items-center justify-center">
                                  <Users className="w-4 h-4 text-slate-400" />
                              </div>
                              <div className="text-left">
                                  <div className="text-sm font-bold text-slate-400">DevOps Team</div>
                                  <div className="text-[10px] text-slate-500 uppercase tracking-wider">Group</div>
                              </div>
                          </div>
                      </div>

                      {/* Interns (Middle - Active Path) */}
                      <div className="absolute top-[220px] left-1/2 -translate-x-1/2">
                          <div className="bg-slate-900/80 backdrop-blur-md border border-blue-500/50 rounded-full py-2 px-4 flex items-center gap-3 shadow-[0_0_15px_rgba(59,130,246,0.3)] hover:scale-105 transition-transform">
                              <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center relative">
                                  <Users className="w-4 h-4 text-blue-400" />
                                  <div className="absolute inset-0 bg-blue-500/20 rounded-full animate-ping" />
                              </div>
                              <div className="text-left">
                                  <div className="text-sm font-bold text-white">Interns</div>
                                  <div className="text-[10px] text-blue-400 uppercase tracking-wider">Group</div>
                              </div>
                          </div>
                      </div>

                      {/* Service Account */}
                      <div className="absolute top-[220px] left-[80%] -translate-x-1/2">
                          <div className="bg-slate-900/80 backdrop-blur-md border border-slate-700 rounded-full py-2 px-4 flex items-center gap-3 opacity-50">
                              <div className="w-8 h-8 rounded-full bg-slate-700/50 flex items-center justify-center">
                                  <User className="w-4 h-4 text-slate-400" />
                              </div>
                              <div className="text-left">
                                  <div className="text-sm font-bold text-slate-400">Service Account</div>
                                  <div className="text-[10px] text-slate-500 uppercase tracking-wider">User</div>
                              </div>
                          </div>
                      </div>

                      {/* Level 3 Nodes */}
                      {/* Admin (under DevOps) */}
                      <div className="absolute top-[360px] left-[20%] -translate-x-1/2">
                           <div className="bg-slate-900/80 backdrop-blur-md border border-slate-700 rounded-full py-2 px-4 flex items-center gap-3 opacity-40">
                              <div className="w-8 h-8 rounded-full bg-slate-700/50 flex items-center justify-center">
                                  <Users className="w-4 h-4 text-slate-500" />
                              </div>
                              <div className="text-left">
                                  <div className="text-sm font-bold text-slate-500">Admin</div>
                                  <div className="text-[10px] text-slate-600 uppercase tracking-wider">Role</div>
                              </div>
                          </div>
                      </div>

                      {/* Jira License (under Interns) */}
                      <div className="absolute top-[360px] left-[42%] -translate-x-1/2">
                           <div className="bg-slate-900/80 backdrop-blur-md border border-purple-500/50 rounded-full py-2 px-4 flex items-center gap-3 opacity-80">
                              <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center">
                                  <FileKey className="w-4 h-4 text-purple-400" />
                              </div>
                              <div className="text-left">
                                  <div className="text-sm font-bold text-slate-300">Jira License</div>
                                  <div className="text-[10px] text-purple-400 uppercase tracking-wider">License</div>
                              </div>
                          </div>
                      </div>

                      {/* Engineering (under Interns - Active Path) */}
                      <div className="absolute top-[360px] left-[58%] -translate-x-1/2">
                           <div className="bg-slate-900/80 backdrop-blur-md border border-blue-500/50 rounded-full py-2 px-4 flex items-center gap-3 shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                              <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center relative">
                                  <Users className="w-4 h-4 text-blue-400" />
                              </div>
                              <div className="text-left">
                                  <div className="text-sm font-bold text-white">Engineering</div>
                                  <div className="text-[10px] text-blue-400 uppercase tracking-wider">Group</div>
                              </div>
                          </div>
                      </div>

                      {/* Level 4 Nodes */}
                       {/* AWS Keys (under Engineering - Critical) */}
                       <div className="absolute top-[500px] left-[50%] -translate-x-1/2">
                           <div className="bg-slate-900/90 backdrop-blur-md border border-blue-500 rounded-full py-2 px-4 flex items-center gap-3 shadow-[0_0_30px_rgba(59,130,246,0.4)] animate-pulse-slow">
                              <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                                  <Key className="w-4 h-4 text-blue-400" />
                              </div>
                              <div className="text-left">
                                  <div className="text-sm font-bold text-white">AWS Keys</div>
                                  <div className="text-[10px] text-blue-400 uppercase tracking-wider font-bold">Critical Asset</div>
                              </div>
                              {/* Alert Badge */}
                              <div className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-[10px] font-bold text-white border border-slate-900 animate-pulse shadow-[0_0_15px_rgba(239,68,68,0.8)]">!</div>
                          </div>
                      </div>

                      {/* Prod DB (under Engineering) */}
                      <div className="absolute top-[500px] left-[66%] -translate-x-1/2">
                           <div className="bg-slate-900/80 backdrop-blur-md border border-slate-700 rounded-full py-2 px-4 flex items-center gap-3 opacity-40">
                              <div className="w-8 h-8 rounded-full bg-slate-700/50 flex items-center justify-center">
                                  <Database className="w-4 h-4 text-slate-500" />
                              </div>
                              <div className="text-left">
                                  <div className="text-sm font-bold text-slate-500">Prod DB</div>
                                  <div className="text-[10px] text-slate-600 uppercase tracking-wider">Resource</div>
                              </div>
                          </div>
                      </div>
                  </div>
               </div>
          </div>
        </div>
      </div>
    </section>
  );
}
