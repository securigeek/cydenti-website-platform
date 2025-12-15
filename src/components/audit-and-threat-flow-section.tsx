"use client";

import React from "react";
import { 
  Link, 
  Search, 
  Shield, 
  ShieldCheck, 
  FileText,
  Database,
  BrainCircuit,
  Share2,
  BellRing,
  ArrowRight,
  ArrowDown,
  RefreshCw,
  Globe,
  Activity
} from "lucide-react";
import { cn } from "@/lib/utils";

export function AuditAndThreatFlowSection() {
  return (
    <section className="py-24 bg-transparent relative overflow-visible z-0">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
          
          {/* --- LEFT COLUMN: AUDIT PROCESS --- */}
          <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-8 lg:p-10 h-full flex flex-col relative overflow-hidden group hover:shadow-2xl transition-all duration-500">
            {/* Top Gradient Line */}
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-blue-500 via-cyan-400 to-teal-400" />
            
            <div className="mb-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="inline-flex items-center gap-2 text-blue-600 font-bold tracking-widest text-[10px] uppercase mb-3 bg-blue-50 px-3 py-1.5 rounded-full border border-blue-100">
                  <Globe className="w-3 h-3" />
                  Discovery Phase
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-1">
                  "One-Click" Audit
                </h2>
                <p className="text-sm text-slate-500 font-medium">Discovery & Posture Management</p>
              </div>
              {/* Optional: Add a visual indicator or status */}
              <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-slate-50 rounded-lg border border-slate-100">
                 <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                 <span className="text-xs font-semibold text-slate-600">System Ready</span>
              </div>
            </div>

            <div className="relative flex-1 flex items-center justify-center py-6">
              {/* Connected Path Background */}
              <div className="absolute inset-0 pointer-events-none hidden md:block opacity-30">
                 <svg className="w-full h-full" style={{ overflow: 'visible' }}>
                    <path 
                      d="M20%,25% L80%,25% L80%,75% L20%,75%" 
                      fill="none" 
                      stroke="url(#audit-gradient)" 
                      strokeWidth="4" 
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="drop-shadow-sm"
                    />
                    <defs>
                      <linearGradient id="audit-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#3b82f6" />
                        <stop offset="100%" stopColor="#14b8a6" />
                      </linearGradient>
                    </defs>
                 </svg>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 w-full relative z-10">
                
                {/* Step 1: Connect */}
                <div className="flex flex-col items-center text-center relative group/item">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 flex items-center justify-center text-blue-600 mb-4 shadow-md group-hover/item:scale-110 transition-transform duration-300 relative z-10">
                    <Link className="w-7 h-7" />
                    <div className="absolute -top-3 -left-3 w-7 h-7 rounded-full bg-blue-600 text-white text-xs flex items-center justify-center font-bold border-2 border-white shadow-md">1</div>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1">Connect</h3>
                  <p className="text-xs text-slate-500 font-medium bg-slate-50 px-2 py-1 rounded-md border border-slate-100">Secure API (Read-Only)</p>
                </div>

                {/* Step 2: Scan */}
                <div className="flex flex-col items-center text-center relative group/item">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-50 to-cyan-100 border border-cyan-200 flex items-center justify-center text-cyan-600 mb-4 shadow-md group-hover/item:scale-110 transition-transform duration-300 relative z-10">
                    <Search className="w-7 h-7" />
                    <div className="absolute -top-3 -right-3 w-7 h-7 rounded-full bg-cyan-600 text-white text-xs flex items-center justify-center font-bold border-2 border-white shadow-md">2</div>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1">Scan & Map</h3>
                  <p className="text-xs text-slate-500 font-medium bg-slate-50 px-2 py-1 rounded-md border border-slate-100">Automated Discovery</p>
                </div>

                 {/* Step 4: Report */}
                 <div className="flex flex-col items-center text-center relative group/item md:order-last">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-50 to-teal-100 border border-teal-200 flex items-center justify-center text-teal-600 mb-4 shadow-md group-hover/item:scale-110 transition-transform duration-300 relative z-10">
                    <FileText className="w-7 h-7" />
                    <div className="absolute -top-3 -left-3 w-7 h-7 rounded-full bg-teal-600 text-white text-xs flex items-center justify-center font-bold border-2 border-white shadow-md">4</div>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1">Report</h3>
                  <p className="text-xs text-slate-500 font-medium bg-slate-50 px-2 py-1 rounded-md border border-slate-100">Remediation Plan</p>
                </div>

                {/* Step 3: Analyze */}
                <div className="flex flex-col items-center text-center relative group/item">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-50 to-indigo-100 border border-indigo-200 flex items-center justify-center text-indigo-600 mb-4 shadow-md group-hover/item:scale-110 transition-transform duration-300 relative z-10">
                    <ShieldCheck className="w-7 h-7" />
                    <div className="absolute -top-3 -right-3 w-7 h-7 rounded-full bg-indigo-600 text-white text-xs flex items-center justify-center font-bold border-2 border-white shadow-md">3</div>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1">Analyze</h3>
                  <p className="text-xs text-slate-500 font-medium bg-slate-50 px-2 py-1 rounded-md border border-slate-100">Configuration Check</p>
                </div>

              </div>
            </div>
          </div>


          {/* --- RIGHT COLUMN: THREAT DETECTION --- */}
          <div className="bg-slate-900 rounded-3xl shadow-xl border border-slate-800 p-8 lg:p-10 h-full flex flex-col relative overflow-hidden group hover:shadow-2xl transition-all duration-500">
             {/* Dark Mode Background Effects */}
             <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-violet-600/20 rounded-full blur-[100px] -mr-20 -mt-20 pointer-events-none" />
             <div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-fuchsia-600/10 rounded-full blur-[80px] -ml-10 -mb-10 pointer-events-none" />

            <div className="mb-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 relative z-10">
              <div>
                <div className="inline-flex items-center gap-2 text-violet-300 font-bold tracking-widest text-[10px] uppercase mb-3 bg-violet-900/50 px-3 py-1.5 rounded-full border border-violet-700/50">
                  <Activity className="w-3 h-3" />
                  Response Phase
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-1">
                  Continuous Threat Detection
                </h2>
                <p className="text-sm text-slate-400 font-medium">Identity Threat Detection (ITDR)</p>
              </div>
               <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-slate-800/50 rounded-lg border border-slate-700/50">
                 <RefreshCw className="w-3 h-3 text-violet-400 animate-spin" />
                 <span className="text-xs font-semibold text-slate-300">Active Monitoring</span>
              </div>
            </div>

            <div className="relative flex-1 flex items-center justify-center min-h-[350px] z-10">
              
              {/* Glowing Central Core */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full border border-slate-700/50 flex items-center justify-center z-0 animate-[spin_20s_linear_infinite]">
                 <div className="absolute inset-0 rounded-full border border-violet-500/20 border-dashed" />
              </div>
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 rounded-full bg-slate-800/80 backdrop-blur-sm border border-slate-700 flex items-center justify-center z-10 shadow-xl">
                 <div className="text-center">
                   <Shield className="w-8 h-8 text-violet-400 mx-auto mb-1" />
                   <span className="text-[10px] font-bold text-violet-200 uppercase tracking-widest">Guard</span>
                 </div>
              </div>

              {/* Circular Positioning Container */}
              <div className="relative w-full max-w-[340px] aspect-square">
                
                {/* Step 1: Ingest (Top) */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 flex flex-col items-center group/item w-32 transition-transform hover:-translate-y-1">
                  <div className="w-14 h-14 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center text-violet-400 mb-3 group-hover/item:border-violet-500 group-hover/item:shadow-[0_0_15px_rgba(139,92,246,0.3)] transition-all shadow-lg">
                    <Database className="w-6 h-6" />
                  </div>
                  <div className="text-center bg-slate-900/80 px-2 py-1 rounded-lg border border-slate-800 backdrop-blur-sm">
                    <h3 className="text-xs font-bold text-white mb-0.5">Ingest</h3>
                    <p className="text-[10px] text-slate-400">Logs & Signals</p>
                  </div>
                </div>

                {/* Step 2: Detect (Right) */}
                <div className="absolute top-1/2 right-0 translate-x-4 -translate-y-1/2 flex flex-col items-center group/item w-32 transition-transform hover:translate-x-1">
                   <div className="w-14 h-14 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center text-fuchsia-400 mb-3 group-hover/item:border-fuchsia-500 group-hover/item:shadow-[0_0_15px_rgba(217,70,239,0.3)] transition-all shadow-lg">
                    <BrainCircuit className="w-6 h-6" />
                  </div>
                  <div className="text-center bg-slate-900/80 px-2 py-1 rounded-lg border border-slate-800 backdrop-blur-sm">
                    <h3 className="text-xs font-bold text-white mb-0.5">Detect</h3>
                    <p className="text-[10px] text-slate-400">AI Analysis</p>
                  </div>
                </div>

                {/* Step 3: Correlate (Bottom) */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center group/item w-32 transition-transform hover:translate-y-1">
                   <div className="w-14 h-14 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center text-pink-400 mb-3 group-hover/item:border-pink-500 group-hover/item:shadow-[0_0_15px_rgba(236,72,153,0.3)] transition-all shadow-lg">
                    <Share2 className="w-6 h-6" />
                  </div>
                  <div className="text-center bg-slate-900/80 px-2 py-1 rounded-lg border border-slate-800 backdrop-blur-sm">
                    <h3 className="text-xs font-bold text-white mb-0.5">Correlate</h3>
                    <p className="text-[10px] text-slate-400">Cross-App</p>
                  </div>
                </div>

                {/* Step 4: Respond (Left) */}
                <div className="absolute top-1/2 left-0 -translate-x-4 -translate-y-1/2 flex flex-col items-center group/item w-32 transition-transform hover:-translate-x-1">
                   <div className="w-14 h-14 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center text-cyan-400 mb-3 group-hover/item:border-cyan-500 group-hover/item:shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-all shadow-lg">
                    <BellRing className="w-6 h-6" />
                  </div>
                  <div className="text-center bg-slate-900/80 px-2 py-1 rounded-lg border border-slate-800 backdrop-blur-sm">
                    <h3 className="text-xs font-bold text-white mb-0.5">Respond</h3>
                    <p className="text-[10px] text-slate-400">Smart Alerts</p>
                  </div>
                </div>

                {/* Connecting Ring */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none z-[-1]" style={{ overflow: 'visible' }}>
                  <circle cx="50%" cy="50%" r="45%" fill="none" stroke="url(#threat-gradient)" strokeWidth="2" strokeDasharray="4 4" className="animate-[spin_40s_linear_infinite_reverse] opacity-50" />
                  <defs>
                    <linearGradient id="threat-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#8b5cf6" />
                      <stop offset="100%" stopColor="#ec4899" />
                    </linearGradient>
                  </defs>
                </svg>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
