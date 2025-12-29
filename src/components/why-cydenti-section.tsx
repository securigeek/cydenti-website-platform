"use client";

import React from "react";
import { 
  Sparkles, 
  Rocket, 
  TrendingUp, 
  Globe
} from "lucide-react";

export function WhyCydentiSection() {
  const features = [
    {
      icon: Sparkles,
      title: "AI-powered clarity, not noise",
      description: "Every alert is enriched with context, impact, and recommended next steps."
    },
    {
      icon: Rocket,
      title: "Fast deployment, instant value",
      description: "Connect your SaaS and cloud platforms in minutes."
    },
    {
      icon: TrendingUp,
      title: "Scales with your growth",
      description: "Supports thousands of identities over complex cloud environments and models."
    },
    {
      icon: Globe,
      title: "Designed for global security teams",
      description: "Developed in France, built for worldwide deployment — with privacy, transparency, and security by design."
    }
  ];

  return (
    <section className="py-24 bg-white relative rounded-[60px] mx-4 my-4 border border-slate-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 text-cydenti-primary font-bold tracking-widest text-[10px] uppercase mb-6 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
            Why Cydenti
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6 leading-tight">
            Identity Security Purpose-Built for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">SaaS</span>
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Most tools focus on logs, infrastructure, or governance workflows. 
            Cydenti focuses on the root problem: <span className="font-semibold text-slate-900">identity risk</span>, where modern breaches begin.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {features.map((feature, index) => {
            const isFrench = feature.title.includes("global security teams");

            if (isFrench) {
              return (
                <div key={index} className="relative group rounded-[2rem] p-[3px] overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  {/* French Flag Gradient Border */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0055A4] via-white to-[#EF4135] opacity-90" />
                  
                  {/* Content Container */}
                  <div className="relative h-full bg-white rounded-[calc(2rem-3px)] p-6 flex gap-5 items-start">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-500/20">
                      <feature.icon className="w-7 h-7" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-slate-500 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <div key={index} className="flex gap-5 items-start group p-6">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-500/20">
                  <feature.icon className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-slate-500 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
