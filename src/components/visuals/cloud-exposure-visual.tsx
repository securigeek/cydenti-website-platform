"use client";

import React from "react";
import { Activity, Users, Globe, Lock } from "lucide-react";

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
  @keyframes pulse-slow {
    0%, 100% { opacity: 0.4; }
    50% { opacity: 0.7; }
  }
  .animate-pulse-slow {
    animation: pulse-slow 4s ease-in-out infinite;
  }
`;

export function CloudExposureVisual() {
  return (
    <div className="relative w-full h-[400px] bg-[#0B1120] rounded-2xl overflow-hidden text-white border border-slate-800 shadow-2xl">
      <style jsx>{circuitStyles}</style>
      
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
         {/* Deep dark blue base */}
        <div className="absolute inset-0 bg-[#0B1120]" />
        
        {/* Animated Gradient Orbs */}
        <div className="absolute top-[-30%] right-[-10%] w-[400px] h-[400px] rounded-full bg-blue-600/10 blur-[80px] animate-pulse-slow" />
        <div className="absolute bottom-[-30%] left-[-10%] w-[400px] h-[400px] rounded-full bg-indigo-600/10 blur-[80px] animate-pulse-slow delay-1000" />
        
        {/* Tech Grid Pattern */}
        <div 
            className="absolute inset-0 opacity-[0.05]" 
            style={{
                backgroundImage: `linear-gradient(#4f46e5 1px, transparent 1px), linear-gradient(to right, #4f46e5 1px, transparent 1px)`,
                backgroundSize: '40px 40px'
            }}
        />

        {/* Animated Circuit Board SVG Overlay */}
        <svg className="absolute inset-0 w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{stopColor:'transparent', stopOpacity:0}} />
                    <stop offset="50%" style={{stopColor:'#60a5fa', stopOpacity:1}} />
                    <stop offset="100%" style={{stopColor:'transparent', stopOpacity:0}} />
                </linearGradient>
            </defs>
            {/* Random "Data Lines" */}
            <path className="circuit-path" d="M0 100 H 1000" stroke="url(#grad1)" strokeWidth="1" fill="none" style={{animationDuration: '7s'}} />
            <path className="circuit-path" d="M0 300 H 1000" stroke="url(#grad1)" strokeWidth="1" fill="none" style={{animationDuration: '12s', animationDelay: '1s'}} />
            
             {/* Vertical Lines */}
             <path className="circuit-path" d="M200 0 V 1000" stroke="url(#grad1)" strokeWidth="1" fill="none" style={{animationDuration: '10s'}} />
             <path className="circuit-path" d="M400 0 V 1000" stroke="url(#grad1)" strokeWidth="1" fill="none" style={{animationDuration: '8s', animationDelay: '3s'}} />
        </svg>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center p-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-medium mb-6 animate-pulse">
            <Activity className="w-4 h-4" />
            <span>Critical Exposure Path Detected</span>
        </div>
        
        <div className="flex items-center gap-4 md:gap-8 opacity-90">
            {/* Node 1: Identity */}
            <div className="flex flex-col items-center gap-2">
                <div className="w-16 h-16 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center shadow-lg relative">
                    <Users className="w-8 h-8 text-blue-400" />
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-500 rounded-full animate-ping" />
                </div>
                <span className="text-sm font-mono text-slate-400">Compromised User</span>
            </div>

            {/* Connection 1 */}
            <div className="flex flex-col items-center">
                <div className="h-px w-12 md:w-24 bg-gradient-to-r from-blue-500/50 to-purple-500/50 relative">
                    <div className="absolute top-1/2 left-0 w-full h-1 bg-blue-500/20 -translate-y-1/2 blur-sm" />
                </div>
                <span className="text-[10px] text-slate-500 mt-1 uppercase tracking-wider">Assumes Role</span>
            </div>

            {/* Node 2: Role */}
            <div className="flex flex-col items-center gap-2">
                <div className="w-14 h-14 rounded-full bg-purple-900/20 border border-purple-500/30 flex items-center justify-center">
                    <Lock className="w-6 h-6 text-purple-400" />
                </div>
                <span className="text-sm font-mono text-slate-400">Admin Role</span>
            </div>

             {/* Connection 2 */}
             <div className="flex flex-col items-center">
                <div className="h-px w-12 md:w-24 bg-gradient-to-r from-purple-500/50 to-red-500/50 relative">
                    <div className="absolute top-1/2 left-0 w-full h-1 bg-red-500/20 -translate-y-1/2 blur-sm" />
                </div>
                <span className="text-[10px] text-slate-500 mt-1 uppercase tracking-wider">Accesses</span>
            </div>

            {/* Node 3: Asset */}
            <div className="flex flex-col items-center gap-2">
                <div className="w-16 h-16 rounded-xl bg-red-950/30 border border-red-500/30 flex items-center justify-center shadow-[0_0_30px_rgba(239,68,68,0.2)]">
                    <Globe className="w-8 h-8 text-red-400" />
                </div>
                <span className="text-sm font-mono text-slate-400">Production DB</span>
            </div>
        </div>

        <div className="mt-8 p-4 rounded-lg bg-slate-900/80 border border-slate-800 backdrop-blur-sm max-w-sm w-full">
            <div className="flex justify-between text-xs text-slate-500 mb-2">
                <span>Blast Radius Analysis</span>
                <span className="text-red-400">High Risk</span>
            </div>
            <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 w-[85%]" />
            </div>
        </div>
      </div>
    </div>
  );
}
