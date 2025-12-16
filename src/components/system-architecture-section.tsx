"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Cloud, 
  Key, 
  Shield, 
  Share2, 
  FileSearch, 
  Network, 
  Siren, 
  AlertOctagon,
  LayoutDashboard,
  ArrowRight
} from "lucide-react";
import Image from "next/image";

type PatternType = 'grid' | 'dots' | 'circuit' | 'hex' | 'waves';

const GlassCard = ({ 
  children, 
  className = "", 
  title, 
  icon: Icon, 
  glowColor = "blue",
  pattern = "grid"
}: { 
  children?: React.ReactNode, 
  className?: string, 
  title?: string, 
  icon?: React.ElementType, 
  glowColor?: string,
  pattern?: PatternType
}) => {
  
  // Map color names to specific tailwind classes for gradients
  const gradients: Record<string, string> = {
    blue: "from-blue-500 to-blue-600",
    purple: "from-purple-500 to-purple-600",
    teal: "from-teal-500 to-teal-600",
    red: "from-red-500 to-red-600",
    orange: "from-orange-500 to-orange-600",
    indigo: "from-indigo-500 to-indigo-600",
  };

  const shadowColors: Record<string, string> = {
    blue: "shadow-blue-500/30",
    purple: "shadow-purple-500/30",
    teal: "shadow-teal-500/30",
    red: "shadow-red-500/30",
    orange: "shadow-orange-500/30",
    indigo: "shadow-indigo-500/30",
  };

  return (
    <div className={`relative group backdrop-blur-xl bg-white/40 border border-white/60 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all duration-300 rounded-2xl overflow-visible ${className}`}>
      {/* Top Fading Glow */}
      <div className={`absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-${glowColor}-500/10 to-transparent rounded-t-2xl pointer-events-none opacity-50`} />

      {/* Technical Background Pattern */}
      <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none opacity-10">
         <div className={`absolute top-0 left-0 w-full h-full bg-[mask-image:linear-gradient(to_bottom,black,transparent)]`}>
            {pattern === 'grid' && (
               <svg className="w-full h-full" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                     <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                        <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5" className={`text-${glowColor}-600`} />
                     </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />
               </svg>
            )}
            {pattern === 'dots' && (
               <svg className="w-full h-full" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                     <pattern id="dots" width="16" height="16" patternUnits="userSpaceOnUse">
                        <circle cx="2" cy="2" r="1" className={`fill-${glowColor}-600`} />
                     </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#dots)" />
               </svg>
            )}
            {pattern === 'hex' && (
               <svg className="w-full h-full" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                     <pattern id="hex" width="24" height="40" patternUnits="userSpaceOnUse">
                        <path d="M12 0L24 7V21L12 28L0 21V7L12 0Z" fill="none" stroke="currentColor" strokeWidth="0.5" className={`text-${glowColor}-600`} transform="scale(0.5)" />
                     </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#hex)" />
               </svg>
            )}
            {pattern === 'circuit' && (
                <svg className="w-full h-full" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                   <path d="M10,10 L30,10 L30,30" fill="none" stroke="currentColor" strokeWidth="1" className={`text-${glowColor}-600`} opacity="0.5" />
                   <circle cx="10" cy="10" r="2" className={`fill-${glowColor}-600`} />
                   <path d="M60,20 L80,20 L80,40" fill="none" stroke="currentColor" strokeWidth="1" className={`text-${glowColor}-600`} opacity="0.5" />
                   <circle cx="80" cy="40" r="2" className={`fill-${glowColor}-600`} />
                   <path d="M20,60 L20,80 L40,80" fill="none" stroke="currentColor" strokeWidth="1" className={`text-${glowColor}-600`} opacity="0.5" />
                </svg>
            )}
            {pattern === 'waves' && (
                <svg className="w-full h-full" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                   <path d="M0,10 Q25,20 50,10 T100,10" fill="none" stroke="currentColor" strokeWidth="1" className={`text-${glowColor}-600`} opacity="0.5" />
                   <path d="M0,20 Q25,30 50,20 T100,20" fill="none" stroke="currentColor" strokeWidth="1" className={`text-${glowColor}-600`} opacity="0.5" />
                   <path d="M0,30 Q25,40 50,30 T100,30" fill="none" stroke="currentColor" strokeWidth="1" className={`text-${glowColor}-600`} opacity="0.5" />
                </svg>
            )}
         </div>
      </div>

      <div className="p-5 flex flex-col items-center text-center h-full justify-center relative z-10">
        {Icon && (
          <div className="mb-4 relative group-hover:scale-110 transition-transform duration-300">
             {/* Icon Back Glow */}
             <div className={`absolute inset-0 bg-${glowColor}-500/20 blur-xl rounded-full scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
             
             {/* 3D Icon Container */}
             <div className={`relative w-12 h-12 rounded-xl bg-gradient-to-br ${gradients[glowColor] || gradients.blue} shadow-lg ${shadowColors[glowColor] || shadowColors.blue} flex items-center justify-center border-t border-white/20`}>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-white/20 to-transparent opacity-50" />
                <Icon className="w-6 h-6 text-white drop-shadow-md relative z-10" />
             </div>
          </div>
        )}
        {title && <h3 className="font-semibold text-slate-800 tracking-tight text-sm mb-1">{title}</h3>}
        {children}
      </div>
    </div>
  );
};

export function SystemArchitectureSection() {
  return (
    <section className="py-20 w-full bg-slate-50/50 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-200/20 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-teal-200/20 blur-[100px] rounded-full pointer-events-none" />

      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[10px] font-bold uppercase tracking-widest mb-4">
            <Shield className="w-3 h-3" />
            Security Architecture
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
            How Cydenti Works
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            From raw signals to actionable intelligence in milliseconds.
          </p>
        </div>

        <div className="relative w-full max-w-7xl mx-auto">
          
          {/* Top Row: Input Sources */}
          <div className="grid grid-cols-3 gap-8 mb-0 relative z-20 max-w-4xl mx-auto">
            <GlassCard title="SaaS Apps" icon={Cloud} glowColor="blue" className="h-24" pattern="grid" />
            <GlassCard title="OAuth Apps" icon={Key} glowColor="purple" className="h-24" pattern="hex" />
            <GlassCard title="IdP" icon={Shield} glowColor="teal" className="h-24" pattern="circuit" />
          </div>

          {/* Connection Lines: Inputs to Platform */}
          <div className="relative h-40 w-full max-w-4xl mx-auto overflow-visible -mt-1 -mb-1 z-0">
            <svg className="absolute inset-0 w-full h-full overflow-visible" preserveAspectRatio="none">
                 <defs>
                   <linearGradient id="lineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                     <stop offset="0%" stopColor="#CBD5E1" stopOpacity="0.4" />
                     <stop offset="50%" stopColor="#94A3B8" stopOpacity="1" />
                     <stop offset="100%" stopColor="#CBD5E1" stopOpacity="0.4" />
                   </linearGradient>
                 </defs>
                 
                 {/* Left Path Base Line */}
                 <path d="M16.5%,0 L16.5%,50% L50%,50% L50%,100%" fill="none" stroke="#E2E8F0" strokeWidth="2" vectorEffect="non-scaling-stroke" />
                 {/* Center Path Base Line */}
                 <path d="M50%,0 L50%,100%" fill="none" stroke="#E2E8F0" strokeWidth="2" vectorEffect="non-scaling-stroke" />
                 {/* Right Path Base Line */}
                 <path d="M83.5%,0 L83.5%,50% L50%,50% L50%,100%" fill="none" stroke="#E2E8F0" strokeWidth="2" vectorEffect="non-scaling-stroke" />
            </svg>
            
            {/* Overlaying robust particles that don't distort */}
             {/* Re-implementing particles with absolute positioning to guarantee no distortion */}
             <div className="absolute inset-0">
                {/* Left Particle */}
                <motion.div
                  className="absolute w-2 h-2 bg-blue-500 rounded-full shadow-[0_0_8px_rgba(59,130,246,0.8)]"
                  animate={{ 
                    top: ["0%", "50%", "50%", "100%"],
                    left: ["16.5%", "16.5%", "50%", "50%"],
                    opacity: [0, 1, 1, 0]
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                />
                
                {/* Center Particles - Flowing more frequently */}
                <motion.div
                  className="absolute w-2 h-2 bg-purple-500 rounded-full shadow-[0_0_8px_rgba(168,85,247,0.8)]"
                  animate={{ 
                    top: ["0%", "100%"],
                    left: ["50%", "50%"],
                    opacity: [0, 1, 1, 0]
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: 0 }}
                />
                <motion.div
                  className="absolute w-2 h-2 bg-blue-400 rounded-full shadow-[0_0_8px_rgba(96,165,250,0.8)]"
                  animate={{ 
                    top: ["0%", "100%"],
                    left: ["50%", "50%"],
                    opacity: [0, 1, 1, 0]
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: 1.5 }}
                />

                {/* Right Particle */}
                <motion.div
                  className="absolute w-2 h-2 bg-teal-500 rounded-full shadow-[0_0_8px_rgba(20,184,166,0.8)]"
                  animate={{ 
                    top: ["0%", "50%", "50%", "100%"],
                    left: ["83.5%", "83.5%", "50%", "50%"],
                    opacity: [0, 1, 1, 0]
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear", delay: 2 }}
                />
             </div>

          </div>
          
          {/* Main Platform Box */}
          <div className="relative">
            {/* Glow under the platform */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-100 via-purple-100 to-teal-100 blur-3xl opacity-50 -z-10" />
            
            <div className="backdrop-blur-2xl bg-white/60 border border-white/60 rounded-[2.5rem] p-8 lg:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.05)] ring-1 ring-slate-900/5 relative z-10">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white px-6 py-1.5 rounded-full border border-slate-100 text-slate-800 font-bold tracking-wider text-xs shadow-lg uppercase z-30 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                Cydenti Platform
              </div>

              {/* Platform Internals - Horizontal Flow */}
              <div className="flex flex-col lg:flex-row items-stretch justify-between gap-6 relative mt-4">
                  
                  {/* Step 1: Ingestion */}
                  <div className="flex flex-col justify-center gap-4 w-full lg:w-1/5">
                      <GlassCard title="Normalization" icon={Share2} glowColor="blue" className="py-1" pattern="dots" />
                      <GlassCard title="Posture Analysis" icon={FileSearch} glowColor="blue" className="py-1" pattern="grid" />
                  </div>

                  {/* Arrow */}
                  <div className="hidden lg:flex items-center justify-center text-slate-300">
                    <ArrowRight className="w-6 h-6 text-slate-400" />
                  </div>

                  {/* Step 2: Graph */}
                  <div className="w-full lg:w-1/4 flex flex-col justify-center">
                      <div className="h-full relative group">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-teal-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <GlassCard title="Identity Graph" icon={Network} glowColor="indigo" className="h-full border-indigo-100 bg-indigo-50/30" pattern="circuit">
                            <div className="text-xs text-slate-500 mt-2 leading-relaxed">Unified Data Model<br/>Real-time Context</div>
                        </GlassCard>
                      </div>
                  </div>

                  {/* Arrow */}
                  <div className="hidden lg:flex items-center justify-center text-slate-300">
                    <ArrowRight className="w-6 h-6 text-slate-400" />
                  </div>

                  {/* Step 3: Detection */}
                  <div className="w-full lg:w-1/4 flex flex-col justify-center">
                      <GlassCard title="Detection Logic" icon={Siren} glowColor="red" className="h-full border-red-100 bg-red-50/30" pattern="waves">
                          <div className="text-xs text-slate-500 mt-2">ITDR & Threat Analysis</div>
                      </GlassCard>
                  </div>

                  {/* Arrow */}
                  <div className="hidden lg:flex items-center justify-center text-slate-300">
                    <ArrowRight className="w-6 h-6 text-slate-400" />
                  </div>

                  {/* Step 4: Risk */}
                  <div className="w-full lg:w-1/5 flex flex-col justify-center">
                      <GlassCard title="Risk Engine" icon={AlertOctagon} glowColor="orange" className="h-full border-orange-100 bg-orange-50/30" pattern="hex">
                          <div className="text-xs text-slate-500 mt-2">Scoring & Prioritization</div>
                      </GlassCard>
                  </div>

              </div>
            </div>
          </div>

          {/* Connection Platform -> Dashboard */}
          <div className="h-12 w-full flex justify-center relative overflow-visible opacity-60">
            <div className="h-full w-px bg-gradient-to-b from-slate-300 to-transparent" />
             <motion.div 
                className="absolute top-0 w-2.5 h-2.5 bg-emerald-500 rounded-full shadow-[0_0_10px_#10B981]"
                animate={{ top: ["0%", "100%"], opacity: [1, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
             />
          </div>

          {/* Dashboard Image - Larger View */}
          <div className="relative mx-auto max-w-5xl z-20 group perspective-1000 mt-12">
                
                <div 
                  className="bg-white border-x border-t border-slate-200/60 rounded-t-2xl overflow-hidden shadow-[0_-20px_60px_rgba(0,0,0,0.1)] ring-1 ring-slate-900/5 transform transition-transform duration-700 hover:-translate-y-2"
                  style={{
                    maskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)',
                    WebkitMaskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)'
                  }}
                >
                   {/* Browser Chrome */}
                   <div className="h-10 bg-slate-50/80 backdrop-blur-md border-b border-slate-100 flex items-center px-6 gap-2 justify-between">
                      <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-400/80" />
                        <div className="w-3 h-3 rounded-full bg-amber-400/80" />
                        <div className="w-3 h-3 rounded-full bg-emerald-400/80" />
                      </div>
                      <div className="bg-white/50 px-4 py-1 rounded-md text-[10px] text-slate-400 font-mono hidden sm:block border border-slate-200/50">
                        cydenti.com/dashboard
                      </div>
                   </div>
                   
                   {/* Image Container - Taller */}
                   <div className="relative h-[600px] w-full bg-slate-50 flex items-start justify-center overflow-hidden group-hover:shadow-inner transition-shadow duration-500">
                      <Image 
                        src="/dashboard.png" 
                        alt="Cydenti Dashboard" 
                        fill
                        className="object-cover object-top transition-transform duration-1000 hover:scale-[1.01]"
                      />
                      
                      {/* Floating Badge */}
                       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40">
                           <motion.div 
                             initial={{ y: 20, opacity: 0 }}
                             whileInView={{ y: 0, opacity: 1 }}
                             className="flex items-center gap-3 bg-white/90 backdrop-blur-xl pl-4 pr-6 py-3 rounded-full shadow-[0_10px_40px_rgba(0,0,0,0.1)] border border-white/50"
                           >
                             <div className="bg-blue-100 p-2 rounded-full text-blue-600">
                               <LayoutDashboard className="w-5 h-5" />
                             </div>
                             <div className="flex flex-col text-left">
                               <span className="text-xs font-bold text-slate-800 uppercase tracking-wider">Dashboard</span>
                               <span className="text-[10px] text-slate-500">Real-time Security Posture</span>
                             </div>
                           </motion.div>
                       </div>
                   </div>
                </div>
          </div>

        </div>
      </div>
    </section>
  );
}
