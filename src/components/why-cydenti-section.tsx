"use client";

import React from "react";
import { 
  ShieldAlert, 
  LayoutDashboard, 
  CloudLightning, 
  BarChart3, 
  Check
} from "lucide-react";
import { cn } from "@/lib/utils";

export function WhyCydentiSection() {
  const features = [
    {
      title: "Identity Security Posture Management",
      description: "Automated configuration checks for M365, Salesforce & more.",
      icon: LayoutDashboard,
      color: "text-blue-600",
      bg: "bg-blue-50",
      border: "group-hover:border-blue-200",
      gradient: "from-blue-500/10 to-blue-500/5",
    },
    {
      title: "Identity Threat Detection and Response",
      description: "Detect active threats and anomalies in real-time.",
      icon: ShieldAlert,
      color: "text-indigo-600",
      bg: "bg-indigo-50",
      border: "group-hover:border-indigo-200",
      gradient: "from-indigo-500/10 to-indigo-500/5",
    },
    {
      title: "Blast Radius",
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
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white relative rounded-none md:rounded-[60px] mx-0 md:mx-4 my-0 md:my-4 border-y md:border border-slate-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 text-cydenti-primary font-bold tracking-widest text-[10px] uppercase mb-6 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
            Why Cydenti
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6 leading-tight">
            Identity Security Posture-Built for <span className="text-gradient-primary">SaaS and Cloud</span>
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Most tools focus on logs, infrastructure, or governance workflows. 
            Cydenti focuses on the root problem: <span className="font-semibold text-slate-900">identity risk</span>, where modern breaches begin.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {features.map((item, index) => (
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
                    <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors">
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

        {/* Footer Text */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 text-slate-500 font-medium bg-slate-50 px-5 py-2.5 rounded-full border border-slate-100">
            <span>Developed in France</span>
            <div className="relative w-5 h-3.5 flex rounded-sm overflow-hidden shadow-sm">
              <div className="w-1/3 h-full bg-[#0055A4]"></div>
              <div className="w-1/3 h-full bg-white"></div>
              <div className="w-1/3 h-full bg-[#EF4135]"></div>
            </div>
            <span>for the world</span>
          </div>
        </div>

      </div>
    </section>
  );
}
