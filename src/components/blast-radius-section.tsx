"use client";

import React from "react";
import Link from "next/link";
import {
  AlertTriangle,
  ShieldCheck,
  ArrowRight,
  User,
  Users,
  Database,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export function BlastRadiusSection() {
  return (
    <section className="py-16 md:py-24 bg-[#0B1120] relative overflow-hidden text-white rounded-none md:rounded-[60px] mx-0 md:mx-4 mb-0 md:mb-4 border-y md:border border-slate-800">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-rose-900/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[100px]" />
        <div 
            className="absolute inset-0 opacity-[0.03]" 
            style={{
                backgroundImage: `radial-gradient(#94a3b8 1px, transparent 1px)`,
                backgroundSize: '40px 40px'
            }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 text-rose-400 font-bold tracking-widest text-xs uppercase bg-rose-900/20 px-3 py-1 rounded-full border border-rose-800/30 backdrop-blur-sm">
              <AlertTriangle className="w-3 h-3" />
              Risk Visualization
            </div>

            <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
              Understanding <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-orange-400">Blast Radius.</span>
            </h2>

            <div className="space-y-6 text-lg text-slate-400">
              <p className="leading-relaxed">
                <strong className="text-white">Blast radius</strong> is the total potential damage a compromised identity can cause. It&apos;s not just about what they <em>should</em> access, but everything they <em>can</em> access through hidden paths, group inheritance, and role assumption.
              </p>
              
              <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6">
                <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                  Mini Case Study: The &quot;Luca&quot; Scenario
                </h3>
                <p className="text-sm leading-relaxed mb-4">
                  Luca is a summer intern. He needs access to Jira and Slack. But because he was added to the <span className="text-blue-400 font-mono">DevOps</span> group for a quick fix, he inherited:
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2 text-rose-300">
                    <AlertTriangle className="w-4 h-4 shrink-0" />
                    <span>Shadow Admin rights on AWS Production</span>
                  </li>
                  <li className="flex items-center gap-2 text-rose-300">
                    <AlertTriangle className="w-4 h-4 shrink-0" />
                    <span>Write access to Customer Database</span>
                  </li>
                </ul>
                <p className="text-sm mt-4 pt-4 border-t border-slate-800">
                  <strong className="text-emerald-400">The Fix:</strong> Cydenti detects this toxic combination immediately. We visualize the path, quantify the impact, and recommend removing the redundant group membership while keeping his necessary app access.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <Button asChild size="lg" className="rounded-full bg-gradient-to-r from-rose-600 to-orange-600 hover:from-rose-700 hover:to-orange-700 text-white shadow-lg shadow-rose-900/20 border-0">
                <Link href="/platform/blast-radius-analysis" className="flex items-center gap-2">
                  Understand Blast Radius in depth
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Visual Content */}
          <div className="relative">
            {/* Card Container */}
            <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-8 backdrop-blur-xl relative overflow-hidden shadow-2xl">
              
              {/* Before State */}
              <div className="mb-8 relative">
                <div className="flex justify-between items-center mb-6">
                  <div className="text-xs font-bold text-rose-400 uppercase tracking-wider">Before: Unchecked Radius</div>
                  <div className="text-xs font-mono text-rose-500">Risk Score: 98/100</div>
                </div>
                
                <div className="flex items-center justify-between relative">
                  {/* Connection Line */}
                  <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-800 -translate-y-1/2 z-0" />
                  <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-rose-500/50 to-rose-500/10 -translate-y-1/2 z-0 animate-pulse" />

                  {/* Luca */}
                  <div className="relative z-10 flex flex-col items-center gap-2">
                    <div className="w-12 h-12 rounded-full bg-slate-800 border border-rose-500/50 flex items-center justify-center text-white shadow-[0_0_15px_rgba(244,63,94,0.2)]">
                      <User className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-medium text-slate-300">Luca (Intern)</span>
                  </div>

                  {/* Group */}
                  <div className="relative z-10 flex flex-col items-center gap-2">
                    <div className="w-10 h-10 rounded-lg bg-slate-800 border border-rose-500/30 flex items-center justify-center text-slate-400">
                      <Users className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] text-slate-500">DevOps Group</span>
                  </div>

                  {/* Critical Asset */}
                  <div className="relative z-10 flex flex-col items-center gap-2">
                    <div className="w-12 h-12 rounded-xl bg-rose-900/20 border border-rose-500 flex items-center justify-center text-rose-500 shadow-[0_0_20px_rgba(244,63,94,0.3)] animate-pulse">
                      <Database className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold text-rose-400">Prod DB</span>
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="h-px bg-slate-800 my-8 flex items-center justify-center">
                <div className="bg-[#0B1120] px-4 text-xs text-slate-500 font-medium">Cydenti Remediation</div>
              </div>

              {/* After State */}
              <div className="relative">
                <div className="flex justify-between items-center mb-6">
                  <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider">After: Least Privilege</div>
                  <div className="text-xs font-mono text-emerald-500">Risk Score: 12/100</div>
                </div>
                
                <div className="flex items-center justify-between relative">
                  {/* Connection Line */}
                  <div className="absolute top-1/2 left-0 w-1/2 h-0.5 bg-slate-800 -translate-y-1/2 z-0" />
                  <div className="absolute top-1/2 left-0 w-1/2 h-0.5 bg-gradient-to-r from-emerald-500/50 to-emerald-500/10 -translate-y-1/2 z-0" />

                  {/* Luca */}
                  <div className="relative z-10 flex flex-col items-center gap-2">
                    <div className="w-12 h-12 rounded-full bg-slate-800 border border-emerald-500/50 flex items-center justify-center text-white shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                      <User className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-medium text-slate-300">Luca (Intern)</span>
                  </div>

                  {/* Access - Blocked */}
                  <div className="relative z-10 flex flex-col items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-600">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    </div>
                    <span className="text-[10px] text-slate-500">Jira Only</span>
                  </div>

                  {/* Critical Asset - Safe */}
                  <div className="relative z-10 flex flex-col items-center gap-2 opacity-50 grayscale">
                    <div className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-500">
                      <Database className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-medium text-slate-500">Prod DB</span>
                    
                    {/* Lock Overlay */}
                    <div className="absolute -top-1 -right-1 w-5 h-5 bg-emerald-500 rounded-full flex items-center justify-center border border-slate-900 z-20">
                        <ShieldCheck className="w-3 h-3 text-white" />
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-rose-500 to-orange-500 rounded-full blur-[80px] opacity-20" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full blur-[80px] opacity-20" />
          </div>

        </div>
      </div>
    </section>
  );
}
