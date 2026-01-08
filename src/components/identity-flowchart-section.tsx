"use client";

import React from "react";
import { 
  User, 
  Cpu, 
  ShieldCheck, 
  Zap, 
  Globe
} from "lucide-react";
import Image from "next/image";

export function IdentityFlowchartSection() {
  return (
    <section className="pt-0 pb-32 relative overflow-visible">
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Content - Left Aligned */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-24">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-cydenti-primary font-bold tracking-widest text-[10px] uppercase mb-6 bg-blue-50/50 px-3 py-1 rounded-full border border-blue-100/50 backdrop-blur-sm">
              <Globe className="w-3 h-3" />
              The Platform
            </div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 leading-[1.1]">
              One Intelligence Layer.<br/>
              <span className="text-gradient-primary">Three Pillars of Defense.</span>
            </h2>
          </div>
          <p className="text-slate-500 text-lg leading-relaxed max-w-sm md:text-right font-medium">
            From raw identity signals to automated security outcomes in milliseconds.
          </p>
        </div>

        {/* Technical Architecture Diagram */}
        <div className="relative rounded-[40px] border border-slate-200 bg-white overflow-hidden p-8 lg:p-12 w-full">
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-0">
            
            {/* STAGE 1: INPUTS (The Attack Surface) */}
            <div className="flex flex-col justify-center gap-6 h-full w-full lg:w-1/4 relative z-10 py-10">
               <div className="absolute top-0 left-0 w-full text-[10px] font-bold text-slate-400 uppercase tracking-widest text-center lg:text-left mb-4">Attack Surface</div>
               
               <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm flex items-center gap-3 relative group hover:border-cyan-400 transition-all z-20">
                  <div className="w-10 h-10 bg-cyan-50 rounded-md flex items-center justify-center text-cyan-600 border border-cyan-100"><User className="w-5 h-5"/></div>
                  <span className="font-bold text-slate-700 text-sm">Human Identities</span>
               </div>
               
               <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm flex items-center gap-3 relative group hover:border-cyan-400 transition-all z-20">
                  <div className="w-10 h-10 bg-cyan-50 rounded-md flex items-center justify-center text-cyan-600 border border-cyan-100"><Cpu className="w-5 h-5"/></div>
                  <span className="font-bold text-slate-700 text-sm">Machine Identities</span>
               </div>
            </div>

            {/* CONNECTION: Inputs -> Graph */}
            <div className="hidden lg:block flex-1 h-80 relative">
               <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none" style={{ overflow: 'visible' }}>
                  <defs>
                    <linearGradient id="gradLeft" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#22d3ee" />
                      <stop offset="100%" stopColor="#06b6d4" />
                    </linearGradient>
                  </defs>
                  {/* Top Input to Hub Top-Side (Closer Gap) */}
                  <path d="M0,35 L40,35 L60,48 L100,48" fill="none" stroke="url(#gradLeft)" strokeWidth="0.5" />
                  
                  {/* Bottom Input to Hub Bottom-Side (Closer Gap) */}
                  <path d="M0,65 L40,65 L60,52 L100,52" fill="none" stroke="url(#gradLeft)" strokeWidth="0.5" />
                  
                  {/* Animated Particles - Cyan Only, Smaller */}
                  <circle r="1" fill="#06b6d4">
                    <animateMotion dur="3s" repeatCount="indefinite" path="M0,35 L40,35 L60,48 L100,48" />
                  </circle>
                  <circle r="1" fill="#22d3ee">
                    <animateMotion dur="3s" repeatCount="indefinite" begin="1.5s" path="M0,65 L40,65 L60,52 L100,52" />
                  </circle>
               </svg>
            </div>

            {/* STAGE 2: THE ENGINE (Central Node) */}
            <div className="flex flex-col items-center justify-center w-full lg:w-auto relative z-20">
               <div className="relative flex items-center justify-center">
                  {/* Glow */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-blue-100/80 blur-3xl rounded-full pointer-events-none" />
                  
                  {/* Outer Glass Box (Background) */}
                  <div className="absolute w-36 h-36  border border-slate-200/60 bg-white/20 backdrop-blur-md rounded-[20px] z-0 flex items-center justify-center">
                     {/* Outer Corner Accents */}
                     
                  </div>

                  {/* Central Box - Small Gradient Brandmark Only */}
                  <div className="bg-gradient-to-tr from-blue-600 to-cyan-500 rounded-xl w-28 h-28 flex items-center justify-center relative z-10 shadow-[0_0_30px_rgba(6,182,212,0.3)] group hover:scale-110 transition-transform duration-300">
                     {/* Nails (Corner Accents) - White for contrast */}
                     <div className="absolute top-2 left-2 w-1.5 h-1.5 bg-white/40 rounded-[10px]"></div>
                     <div className="absolute top-2 right-2 w-1.5 h-1.5 bg-white/40 rounded-[10px]"></div>
                     <div className="absolute bottom-2 left-2 w-1.5 h-1.5 bg-white/40 rounded-[10px]"></div>
                     <div className="absolute bottom-2 right-2 w-1.5 h-1.5 bg-white/40 rounded-[10px]"></div>

                     <div className="flex items-center justify-center">
                        <Image src="/cydenti-brandmark.svg" alt="Cydenti" width={48} height={48} className="brightness-0 invert drop-shadow-md" />
                     </div>
                  </div>
               </div>
            </div>

            {/* CONNECTION: Graph -> Outputs */}
            <div className="hidden lg:block flex-1 h-80 relative">
               <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none" style={{ overflow: 'visible' }}>
                  <defs>
                    <linearGradient id="gradRight" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#2563eb" />
                      <stop offset="100%" stopColor="#3b82f6" />
                    </linearGradient>
                  </defs>

                  
                  
                  {/* Hub Top to Output 1 (Closer Gap) */}
                  <path d="M0,48 L40,48 L60,20 L100,20" fill="none" stroke="url(#gradRight)" strokeWidth="0.5" />
                  
                  {/* Hub Center to Output 2 (Straight) - Solid Color & Thicker for Visibility */}
                  <path d="M0,50 L100,50" fill="none" stroke="#3b82f6" strokeWidth="0.5" />
                  
                  {/* Hub Bottom to Output 3 (Closer Gap) */}
                  <path d="M0,52 L40,52 L60,80 L100,80" fill="none" stroke="url(#gradRight)" strokeWidth="0.5" />

                  {/* Animated Particles - Blue Only, Smaller */}
                  <circle r="1" fill="#3b82f6">
                    <animateMotion dur="3s" repeatCount="indefinite" path="M0,48 L40,48 L60,20 L100,20" />
                  </circle>
                  <circle r="1" fill="#60a5fa">
                    <animateMotion dur="3s" repeatCount="indefinite" begin="0.3s" path="M0,50 L100,50" />
                  </circle>
                  <circle r="1" fill="#2563eb">
                    <animateMotion dur="3s" repeatCount="indefinite" begin="0.6s" path="M0,52 L40,52 L60,80 L100,80" />
                  </circle>
               </svg>
            </div>

            {/* STAGE 3: OUTPUTS (The Pillars) - Dark Mode */}
            <div className="flex flex-col justify-center gap-4 h-full w-full lg:w-1/4 relative z-10 py-4">
               <div className="absolute top-0 right-0 w-full text-[10px] font-bold text-slate-400 uppercase tracking-widest text-center lg:text-right mb-4">Security Outcomes</div>
               
               <div className="bg-slate-900 p-3.5 rounded-lg border border-slate-700 shadow-sm flex items-center gap-3 relative group hover:border-blue-500 transition-all z-20">
                  <div className="w-9 h-9 bg-slate-800 rounded-md flex items-center justify-center text-blue-400 border border-slate-700"><ShieldCheck className="w-4 h-4"/></div>
                  <div>
                     <span className="font-bold text-white text-sm block">ITDR</span>
                     <span className="text-[10px] text-slate-400">Identity Threat Detection</span>
                  </div>
               </div>
               
               <div className="bg-slate-900 p-3.5 rounded-lg border border-slate-700 shadow-sm flex items-center gap-3 relative group hover:border-blue-500 transition-all z-20">
                  <div className="w-9 h-9 bg-slate-800 rounded-md flex items-center justify-center text-blue-400 border border-slate-700"><Globe className="w-4 h-4"/></div>
                  <div>
                     <span className="font-bold text-white text-sm block">ISPM</span>
                     <span className="text-[10px] text-slate-400">Identity Security Posture Mgmt</span>
                  </div>
               </div>
               
               <div className="bg-slate-900 p-3.5 rounded-lg border border-slate-700 shadow-sm flex items-center gap-3 relative group hover:border-blue-500 transition-all z-20">
                  <div className="w-9 h-9 bg-slate-800 rounded-md flex items-center justify-center text-blue-400 border border-slate-700"><Zap className="w-4 h-4"/></div>
                  <div>
                     <span className="font-bold text-white text-sm block">Blast Radius</span>
                     <span className="text-[10px] text-slate-400">Risk Intelligence</span>
                  </div>
               </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
