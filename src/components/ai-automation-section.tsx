"use client";

import React from "react";
import { 
  BrainCircuit, 
  CheckCircle2,
  Zap,
  Search,
  User,
  Users,
  Key,
  Globe
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
        
        {/* Feature 3: Access Explorer */}
        <div className="relative w-full">
          <div className="text-center mb-16">
               <div className="inline-flex items-center gap-2 text-indigo-400 font-bold tracking-widest text-xs uppercase bg-indigo-900/20 px-3 py-1 rounded-full border border-indigo-800/30 backdrop-blur-sm mb-6">
                  <Search className="w-3 h-3" />
                  Deep Visibility
                </div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
                  Access Explorer
                </h2>
                <p className="text-slate-400 max-w-2xl mx-auto">
                  Visualize every connection, permission, and identity path in real-time.
                </p>
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
                      
                      {/* Connections from Root to Level 2 */}
                      <path d="M 500,100 C 500,180 200,180 200,250" stroke="#334155" strokeWidth="2" fill="none" className="opacity-50" />
                      <path d="M 500,100 C 500,180 500,180 500,250" stroke="#334155" strokeWidth="2" fill="none" className="opacity-50" />
                      <path d="M 500,100 C 500,180 800,180 800,250" stroke="#334155" strokeWidth="2" fill="none" className="opacity-50" />

                      {/* Connections from Level 2 to Level 3 */}
                      <path d="M 200,310 C 200,360 100,360 100,420" stroke="#334155" strokeWidth="2" fill="none" className="opacity-50" />
                      <path d="M 500,310 C 500,360 350,360 350,420" stroke="#334155" strokeWidth="2" fill="none" className="opacity-50" />
                      <path d="M 500,310 C 500,360 650,360 650,420" stroke="#334155" strokeWidth="2" fill="none" className="opacity-50" />
                      <path d="M 800,310 C 800,360 900,360 900,420" stroke="#334155" strokeWidth="2" fill="none" className="opacity-50" />
                      
                      {/* Active Threat Path Animation (Root -> User -> AWS Keys) */}
                      {/* Segment 1: Root to User (Middle) */}
                      <path d="M 500,100 C 500,180 500,180 500,250" stroke="url(#pathGradient)" strokeWidth="2" fill="none" className="animate-pulse" />
                      
                      {/* Segment 2: User to AWS Keys (Left-Middle) */}
                      <path d="M 500,310 C 500,360 350,360 350,420" stroke="url(#pathGradient)" strokeWidth="2" fill="none" className="animate-pulse" />
                      
                      {/* Animated Particles moving along the threat path */}
                      <circle r="3" fill="#60a5fa">
                          <animateMotion dur="2s" repeatCount="indefinite" path="M 500,100 C 500,180 500,180 500,250" />
                      </circle>
                      <circle r="3" fill="#60a5fa">
                          <animateMotion dur="2s" begin="1s" repeatCount="indefinite" path="M 500,310 C 500,360 350,360 350,420" />
                      </circle>
                  </svg>

                  {/* Nodes Layer */}
                  <div className="relative w-full h-full max-w-5xl mx-auto p-8 z-10">
                      
                      {/* Level 1: Root Node (Identity) */}
                      <div className="absolute top-[60px] left-1/2 -translate-x-1/2">
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
                      <div className="absolute top-[250px] left-[20%] -translate-x-1/2">
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

                      {/* Compromised User Node (Middle) */}
                      <div className="absolute top-[250px] left-1/2 -translate-x-1/2">
                          <div className="bg-slate-900/80 backdrop-blur-md border border-blue-500/50 rounded-full py-2 px-4 flex items-center gap-3 shadow-[0_0_15px_rgba(59,130,246,0.3)] hover:scale-105 transition-transform">
                              <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center relative">
                                  <User className="w-4 h-4 text-blue-400" />
                                  <div className="absolute inset-0 bg-blue-500/20 rounded-full animate-ping" />
                              </div>
                              <div className="text-left">
                                  <div className="text-sm font-bold text-white">Luka Horvat</div>
                                  <div className="text-[10px] text-blue-400 uppercase tracking-wider">Compromised</div>
                              </div>
                          </div>
                      </div>

                      <div className="absolute top-[250px] left-[80%] -translate-x-1/2">
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
                      <div className="absolute top-[420px] left-[10%] -translate-x-1/2">
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

                       {/* High Threat Node (AWS Keys) */}
                       <div className="absolute top-[420px] left-[35%] -translate-x-1/2">
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

                      <div className="absolute top-[420px] left-[65%] -translate-x-1/2">
                           <div className="bg-slate-900/80 backdrop-blur-md border border-slate-700 rounded-full py-2 px-4 flex items-center gap-3 opacity-40">
                              <div className="w-8 h-8 rounded-full bg-slate-700/50 flex items-center justify-center">
                                  <Globe className="w-4 h-4 text-slate-500" />
                              </div>
                              <div className="text-left">
                                  <div className="text-sm font-bold text-slate-500">Prod DB</div>
                                  <div className="text-[10px] text-slate-600 uppercase tracking-wider">Resource</div>
                              </div>
                          </div>
                      </div>

                       <div className="absolute top-[420px] left-[90%] -translate-x-1/2">
                           <div className="bg-slate-900/80 backdrop-blur-md border border-slate-700 rounded-full py-2 px-4 flex items-center gap-3 opacity-40">
                              <div className="w-8 h-8 rounded-full bg-slate-700/50 flex items-center justify-center">
                                  <User className="w-4 h-4 text-slate-500" />
                              </div>
                              <div className="text-left">
                                  <div className="text-sm font-bold text-slate-500">Contractor</div>
                                  <div className="text-[10px] text-slate-600 uppercase tracking-wider">User</div>
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
