"use client";

import React from "react";
import { 
  ShieldAlert, 
  LayoutDashboard, 
  CloudLightning, 
  BarChart3, 
  Ghost, 
  GitCompare, 
  Fingerprint, 
  FileCheck,
  ArrowRight,
  Check
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function UseCasesSection() {
  const useCases = [
    {
      title: "Identity Threat Detection (ITDR)",
      description: "Detect active threats and anomalies in real-time.",
      icon: ShieldAlert,
      color: "text-indigo-600",
      bg: "bg-indigo-50",
      border: "group-hover:border-indigo-200",
      gradient: "from-indigo-500/10 to-indigo-500/5",
    },
    {
      title: "SaaS Security Posture",
      description: "Automated configuration checks for M365, Salesforce & more.",
      icon: LayoutDashboard,
      color: "text-blue-600",
      bg: "bg-blue-50",
      border: "group-hover:border-blue-200",
      gradient: "from-blue-500/10 to-blue-500/5",
    },
    {
      title: "Cloud Identity Exposure",
      description: "Visualize and reduce blast radius across multi-cloud.",
      icon: CloudLightning,
      color: "text-sky-600",
      bg: "bg-sky-50",
      border: "group-hover:border-sky-200",
      gradient: "from-sky-500/10 to-sky-500/5",
    },
    {
      title: "Identity Risk Scoring",
      description: "Quantify risk for every human and machine identity.",
      icon: BarChart3,
      color: "text-violet-600",
      bg: "bg-violet-50",
      border: "group-hover:border-violet-200",
      gradient: "from-violet-500/10 to-violet-500/5",
    },
    {
      title: "Shadow SaaS Discovery",
      description: "Uncover hidden apps and risky 3rd-party integrations.",
      icon: Ghost,
      color: "text-slate-600",
      bg: "bg-slate-50",
      border: "group-hover:border-slate-200",
      gradient: "from-slate-500/10 to-slate-500/5",
    },
    {
      title: "Drift Detection",
      description: "Alert on unauthorized permission or config changes.",
      icon: GitCompare,
      color: "text-cyan-600",
      bg: "bg-cyan-50",
      border: "group-hover:border-cyan-200",
      gradient: "from-cyan-500/10 to-cyan-500/5",
    },
    {
      title: "Zero Trust Visibility",
      description: "Complete inventory of who has access to what.",
      icon: Fingerprint,
      color: "text-teal-600",
      bg: "bg-teal-50",
      border: "group-hover:border-teal-200",
      gradient: "from-teal-500/10 to-teal-500/5",
    },
    {
      title: "Audit Readiness",
      description: "One-click reports for SOC2, ISO27001, and GDPR.",
      icon: FileCheck,
      color: "text-emerald-600",
      bg: "bg-emerald-50",
      border: "group-hover:border-emerald-200",
      gradient: "from-emerald-500/10 to-emerald-500/5",
    }
  ];

  return (
    <section className="py-32 bg-slate-50 relative w-full overflow-hidden">
      
      {/* Background Mesh */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100/40 via-transparent to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Left Column: Sticky Header */}
          <div className="lg:w-1/3">
            <div className="lg:sticky lg:top-32 space-y-8">
              <div className="inline-flex items-center gap-2 text-blue-600 font-bold tracking-widest text-[10px] uppercase bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                Use Cases
              </div>
              
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 leading-[1.1]">
                Solved.<br/>
                <span className="text-slate-400">Across your entire stack.</span>
              </h2>
              
              <p className="text-lg text-slate-600 leading-relaxed">
                From detection to compliance, Cydenti unifies your identity security workflow into a single, intelligent platform.
              </p>

              <div className="pt-4">
                <Button className="bg-slate-900 text-white hover:bg-slate-800 rounded-full px-8 py-6 text-lg font-semibold transition-all hover:scale-105 shadow-lg shadow-slate-900/20">
                  Explore Platform <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>

              {/* Stats/Trust Indicators */}
              <div className="pt-12 border-t border-slate-200">
                <div className="flex items-center gap-8">
                  <div>
                    <div className="text-3xl font-bold text-slate-900 mb-1">5min</div>
                    <div className="text-xs text-slate-500 uppercase tracking-widest">Setup Time</div>
                  </div>
                  <div className="w-px h-12 bg-slate-200" />
                  <div>
                    <div className="text-3xl font-bold text-slate-900 mb-1">100+</div>
                    <div className="text-xs text-slate-500 uppercase tracking-widest">Integrations</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Grid */}
          <div className="lg:w-2/3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {useCases.map((item, index) => (
                <div 
                  key={index} 
                  className="group relative p-1 rounded-3xl bg-gradient-to-b from-white to-slate-50 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
                >
                  <div className="relative h-full bg-white rounded-[22px] p-8 overflow-hidden">
                    {/* Background Gradient inside card */}
                    <div className={cn("absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500", item.gradient)} />
                    
                    <div className="relative z-10 flex flex-col gap-4">
                      <div className="flex justify-between items-start">
                        <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center border transition-colors", item.bg, item.color, "border-slate-100", item.border)}>
                          <item.icon className="w-6 h-6" />
                        </div>
                        <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                           <Check className="w-4 h-4 text-slate-900" />
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-slate-500 text-sm leading-relaxed group-hover:text-slate-600 transition-colors">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
