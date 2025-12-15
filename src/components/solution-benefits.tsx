"use client";

import React from 'react';
import { motion } from "framer-motion";
import { Eye, Zap, ShieldCheck, FileCheck, Check, AlertTriangle } from 'lucide-react';
import { cn } from "@/lib/utils";

const benefits = [
  {
    title: "360° Visibility",
    description: "Identity, SaaS, cloud, and integration risks in one place.",
    className: "md:col-span-2",
    illustration: (
      <div className="absolute inset-0 flex items-center justify-center opacity-40 pointer-events-none overflow-hidden">
        <div className="relative w-full h-full">
           {/* Positioned Radar - moved to right/bottom to avoid text overlap */}
           <div className="absolute -right-12 -bottom-24 w-96 h-96 scale-75 md:scale-100">
             <div className="absolute inset-0 rounded-full border border-blue-500/30" />
             <div className="absolute inset-24 rounded-full border border-blue-500/20" />
             <div className="absolute inset-48 rounded-full border border-blue-500/10" />
             <div className="absolute inset-0 rounded-full bg-[conic-gradient(from_0deg,transparent_0deg,transparent_90deg,#3b82f6_360deg)] opacity-20 animate-[spin_4s_linear_infinite]" />
             
             {/* Hub */}
             <div className="absolute inset-0 m-auto w-24 h-24 bg-slate-900/80 backdrop-blur-md rounded-full border border-blue-500/30 flex items-center justify-center shadow-xl">
                <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse shadow-[0_0_15px_#3b82f6]" />
             </div>
           </div>
        </div>
      </div>
    )
  },
  {
    title: "Reduced Risk",
    description: "Proactively identify and remediate vulnerabilities.",
    className: "md:col-span-1",
    illustration: (
      <div className="absolute bottom-6 right-6 w-32 h-32 opacity-90 pointer-events-none">
         <div className="relative w-full h-full">
            <div className="absolute inset-0 bg-gradient-to-br from-sky-500/20 to-transparent rounded-2xl border border-sky-500/30 backdrop-blur-sm flex flex-col items-center justify-center p-4">
               <ShieldCheck className="w-10 h-10 text-sky-400 mb-2" />
               <div className="text-xs font-bold text-sky-200">SECURE</div>
            </div>
         </div>
      </div>
    )
  },
  {
    title: "Audit Readiness",
    description: "Always-on compliance monitoring.",
    className: "md:col-span-1",
    illustration: (
      <div className="absolute bottom-6 right-6 w-32 h-32 opacity-90 pointer-events-none">
         <div className="relative w-full h-full">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-transparent rounded-2xl border border-cyan-500/30 backdrop-blur-sm flex flex-col items-center justify-center p-4 transform rotate-3">
               <div className="w-full space-y-2">
                  <div className="h-1.5 w-3/4 bg-cyan-500/40 rounded-full" />
                  <div className="h-1.5 w-full bg-cyan-500/40 rounded-full" />
                  <div className="h-1.5 w-1/2 bg-cyan-500/40 rounded-full" />
               </div>
               <div className="absolute bottom-3 right-3">
                  <div className="w-6 h-6 rounded-full bg-cyan-500 text-slate-900 flex items-center justify-center">
                    <Check className="w-3 h-3" />
                  </div>
               </div>
            </div>
         </div>
      </div>
    )
  },
  {
    title: "Faster Response",
    description: "Slash investigation time with context-rich alerts and automated workflows.",
    className: "md:col-span-2",
    illustration: (
      <div className="absolute inset-0 flex items-end justify-end p-8 opacity-90 pointer-events-none">
         <div className="relative w-full max-w-sm h-24 flex items-center gap-4">
            {/* Alert Node */}
            <div className="h-12 w-12 rounded-xl bg-red-500/20 border border-red-500/30 flex items-center justify-center shrink-0">
               <AlertTriangle className="w-5 h-5 text-red-400" />
            </div>
            
            {/* Connector */}
            <div className="flex-1 h-px bg-gradient-to-r from-red-500/30 to-blue-500/30 border-t border-dashed border-slate-600" />
            
            {/* Action Node */}
            <div className="h-12 px-4 rounded-xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center gap-2 shrink-0">
               <Zap className="w-4 h-4 text-blue-400" />
               <span className="text-xs font-medium text-blue-200">Auto-Fix</span>
            </div>
         </div>
      </div>
    )
  }
];

export function SolutionBenefits() {
  return (
    <section className="py-32 bg-[#0B1120] relative overflow-hidden text-white rounded-[60px] mx-4 mb-4">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-blue-500/10 blur-[100px]" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-purple-500/10 blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            The Cydenti Advantage
          </h2>
          <p className="text-lg text-slate-400">
            Drive security outcomes that matter to your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={cn(
                "relative group overflow-hidden bg-slate-800/50 backdrop-blur-sm p-8 rounded-3xl border border-slate-700 hover:border-slate-500 transition-all duration-300 hover:shadow-2xl hover:shadow-slate-900/50 flex flex-col",
                benefit.className
              )}
            >
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-3 text-slate-100 group-hover:text-white transition-colors">{benefit.title}</h3>
                <p className="text-slate-400 text-base leading-relaxed group-hover:text-slate-300 transition-colors max-w-[80%]">
                  {benefit.description}
                </p>
              </div>

              {/* Illustration Background */}
              {benefit.illustration}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
