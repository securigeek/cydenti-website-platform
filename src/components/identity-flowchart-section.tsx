"use client";

import React from "react";
import { 
  User, 
  Bot, 
  Cpu, 
  Search, 
  ShieldCheck, 
  Zap, 
  AlertTriangle,
  Globe,
  ArrowRight
} from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

export function IdentityFlowchartSection() {
  return (
    <section className="py-32 bg-[#F8FAFC] relative overflow-hidden rounded-[60px] mx-4 my-4">
      
      {/* Premium Background - Subtle Mesh */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.015)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent pointer-events-none" />

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
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">Three Pillars of Defense.</span>
            </h2>
          </div>
          <p className="text-slate-500 text-lg leading-relaxed max-w-sm md:text-right font-medium">
            From raw identity signals to automated security outcomes in milliseconds.
          </p>
        </div>

        {/* Technical Architecture Diagram */}
        <div className="relative rounded-[40px] border border-slate-200 bg-white shadow-2xl overflow-hidden p-8 lg:p-12 w-full">
          
          {/* Background Grid for Diagram */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-0">
            
            {/* STAGE 1: INPUTS (The Attack Surface) */}
            <div className="flex flex-col justify-center gap-10 h-64 w-full lg:w-1/4 relative z-10">
               <div className="absolute -top-8 left-0 w-full text-[10px] font-bold text-slate-400 uppercase tracking-widest text-center lg:text-left">Attack Surface</div>
               
               <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex items-center gap-3 relative group">
                  <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600"><User className="w-4 h-4"/></div>
                  <span className="font-bold text-slate-700 text-sm">Human Identities</span>
                  {/* Connector Point */}
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-2 h-2 bg-slate-400 rounded-full border-2 border-white hidden lg:block" />
               </div>
               <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex items-center gap-3 relative group">
                  <div className="w-8 h-8 bg-teal-50 rounded-lg flex items-center justify-center text-teal-600"><Cpu className="w-4 h-4"/></div>
                  <span className="font-bold text-slate-700 text-sm">Machine Identities</span>
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-2 h-2 bg-slate-400 rounded-full border-2 border-white hidden lg:block" />
               </div>
            </div>

            {/* CONNECTION: Inputs -> Graph */}
            <div className="hidden lg:block w-1/4 h-64 relative">
               <svg className="absolute inset-0 w-full h-full text-slate-400" viewBox="0 0 100 100" preserveAspectRatio="none" style={{ overflow: 'visible' }}>
                  {/* Paths from Inputs to Center */}
                  <path d="M0,28 C50,28 50,50 100,50" fill="none" stroke="currentColor" strokeWidth="2" vectorEffect="non-scaling-stroke" />
                  <path d="M0,72 C50,72 50,50 100,50" fill="none" stroke="currentColor" strokeWidth="2" vectorEffect="non-scaling-stroke" />
                  
                  {/* Animated Particles */}
                  <circle r="1.5" fill="#3B82F6">
                    <animateMotion dur="3s" repeatCount="indefinite" path="M0,28 C50,28 50,50 100,50" />
                  </circle>
                  <circle r="1.5" fill="#14B8A6">
                    <animateMotion dur="3s" repeatCount="indefinite" begin="1.5s" path="M0,72 C50,72 50,50 100,50" />
                  </circle>
               </svg>
            </div>

            {/* STAGE 2: THE ENGINE (Central Node) */}
            <div className="flex flex-col items-center justify-center w-full lg:w-auto relative z-20">
               <div className="relative">
                  {/* Connector Points on Central Node */}
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-2 h-2 bg-slate-400 rounded-full border-2 border-white hidden lg:block z-20" />
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-2 h-2 bg-slate-400 rounded-full border-2 border-white hidden lg:block z-20" />

                  {/* Glow */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] bg-blue-100/50 blur-3xl rounded-full pointer-events-none" />
                  
                  <div className="bg-white border border-slate-200 rounded-full w-48 h-48 flex flex-col items-center justify-center shadow-xl relative z-10 p-6 text-center group hover:border-blue-300 transition-colors">
                     <div className="w-16 h-16 bg-gradient-to-tr from-blue-600 to-teal-500 rounded-xl flex items-center justify-center mb-3 shadow-lg shadow-blue-500/30 p-3">
                        <Image src="/cydenti-brandmark.svg" alt="Cydenti" width={40} height={40} className="brightness-0 invert" />
                     </div>
                     <h3 className="font-bold text-slate-900 text-sm leading-tight">Unified Identity Graph</h3>
                     <p className="text-[10px] text-slate-500 mt-1">Real-time Model</p>
                  </div>
               </div>
            </div>

            {/* CONNECTION: Graph -> Outputs */}
            <div className="hidden lg:block w-1/4 h-64 relative">
               <svg className="absolute inset-0 w-full h-full text-slate-400" viewBox="0 0 100 100" preserveAspectRatio="none" style={{ overflow: 'visible' }}>
                  {/* Paths from Center to Outputs */}
                  <path d="M0,50 C50,50 50,16 100,16" fill="none" stroke="currentColor" strokeWidth="2" vectorEffect="non-scaling-stroke" />
                  <path d="M0,50 C50,50 50,50 100,50" fill="none" stroke="currentColor" strokeWidth="2" vectorEffect="non-scaling-stroke" />
                  <path d="M0,50 C50,50 50,84 100,84" fill="none" stroke="currentColor" strokeWidth="2" vectorEffect="non-scaling-stroke" />

                  {/* Animated Particles Outward */}
                  <circle r="1.5" fill="#A855F7">
                    <animateMotion dur="3s" repeatCount="indefinite" path="M0,50 C50,50 50,16 100,16" />
                  </circle>
                  <circle r="1.5" fill="#3B82F6">
                    <animateMotion dur="3s" repeatCount="indefinite" begin="0.3s" path="M0,50 C50,50 50,50 100,50" />
                  </circle>
                  <circle r="1.5" fill="#22C55E">
                    <animateMotion dur="3s" repeatCount="indefinite" begin="0.6s" path="M0,50 C50,50 50,84 100,84" />
                  </circle>
               </svg>
            </div>

            {/* STAGE 3: OUTPUTS (The Pillars) */}
            <div className="flex flex-col justify-center h-64 w-full lg:w-1/4 relative z-10">
               <div className="absolute -top-8 right-0 w-full text-[10px] font-bold text-slate-400 uppercase tracking-widest text-center lg:text-right">Security Outcomes</div>
               
               <div className="space-y-4">
                  <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 shadow-lg flex items-center gap-3 relative group">
                     <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-2 h-2 bg-slate-400 rounded-full border-2 border-slate-900 hidden lg:block" />
                     <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center text-purple-400 border border-purple-500/30"><ShieldCheck className="w-4 h-4"/></div>
                     <div>
                        <span className="font-bold text-white text-sm block">ITDR</span>
                        <span className="text-[10px] text-slate-400">Threat Detection</span>
                     </div>
                  </div>
                  <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 shadow-lg flex items-center gap-3 relative group">
                     <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-2 h-2 bg-slate-400 rounded-full border-2 border-slate-900 hidden lg:block" />
                     <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center text-blue-400 border border-blue-500/30"><Globe className="w-4 h-4"/></div>
                     <div>
                        <span className="font-bold text-white text-sm block">SSPM</span>
                        <span className="text-[10px] text-slate-400">Posture Mgmt</span>
                     </div>
                  </div>
                  <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 shadow-lg flex items-center gap-3 relative group">
                     <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-2 h-2 bg-slate-400 rounded-full border-2 border-slate-900 hidden lg:block" />
                     <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center text-green-400 border border-green-500/30"><Zap className="w-4 h-4"/></div>
                     <div>
                        <span className="font-bold text-white text-sm block">Exposure</span>
                        <span className="text-[10px] text-slate-400">Risk Intelligence</span>
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
