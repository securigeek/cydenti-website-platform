"use client";

import React from "react";
import { Rocket, Code2, Globe2, Lightbulb } from "lucide-react";
import { motion } from "framer-motion";

const roadmapData = [
  {
    year: "2022",
    title: "The Genesis & Concept",
    icon: <Lightbulb className="w-6 h-6 text-white" />,
    color: "bg-gradient-to-br from-blue-600 to-cyan-500",
    events: [
      {
        date: "August 2022",
        title: "The concept was born",
        description: "During discussions at BNP Paribas between Addy Sharma (Cloud Security Expert) and Christophe Graignic (IAM Expert). While working on CASB and Shadow IT projects, they identified a significant gap in SaaS security and identity monitoring."
      },
      {
        date: "Late 2022",
        title: "Decision to develop software",
        description: "The decision was made to move beyond consulting services and develop a dedicated software solution. Initial R&D began to conceptualize a platform covering both configuration (SSPM) and identity threats (ITDR)."
      }
    ]
  },
  {
    year: "2023",
    title: "R&D and Technological Foundation",
    icon: <Code2 className="w-6 h-6 text-white" />,
    color: "bg-gradient-to-br from-blue-600 to-cyan-500",
    events: [
      {
        date: "Development Phase",
        title: "Core Development",
        description: "The team began core development of the platform, bootstrapped and funded by gains from Addy Sharma's previous service company."
      },
      {
        date: "Core Architecture",
        title: "Security by Design",
        description: "Built a flexible, microservices-based architecture capable of cloud or on-premise deployment, with a 'Security by Design' approach led by the founders' backgrounds in compliance and law."
      }
    ]
  },
  {
    year: "2024",
    title: "Market Visibility and Entity Creation",
    icon: <Rocket className="w-6 h-6 text-white" />,
    color: "bg-gradient-to-br from-blue-600 to-cyan-500",
    events: [
      {
        date: "Early 2024",
        title: "MVP Ready",
        description: "MVP was ready. The team began presenting at public forums including FIC (Forum International de la Cybersécurité), establishing connections with partners like Hexatrust."
      },
      {
        date: "Innovation Recognition",
        title: "Jeune Entreprise Innovante",
        description: "Received recognition as a 'Jeune Entreprise Innovante' (Young Innovative Company), acknowledging proprietary Machine Learning algorithms for detecting user behavior anomalies."
      },
      {
        date: "September 2024",
        title: "Official Creation",
        description: "Cydenti was officially created as a distinct software publisher, hosting the SSPM and ITDR platforms."
      }
    ]
  },
  {
    year: "2025",
    title: "Product Market Fit & Expansion",
    icon: <Globe2 className="w-6 h-6 text-white" />,
    color: "bg-gradient-to-br from-blue-600 to-cyan-500",
    events: [
      {
        date: "Strategic Focus",
        title: "Product Market Fit",
        description: "Entered 'Product Market Fit' phase, co-constructing the roadmap with early adopters and partners such as MSSPs and consulting firms like PwC."
      },
      {
        date: "Commercial Model",
        title: "Audit as a Service",
        description: "Refined go-to-market strategy with 'Audit as a Service' (One-Shot Audit), allowing clients to receive immediate risk reports without committing to long-term licenses."
      },
      {
        date: "Technological Advancement",
        title: "Generative AI Integration",
        description: "Integration of Generative AI (LLMs) to allow users to interact with security data via natural language chatbots and automate remediation guidance."
      }
    ]
  }
];

export function RoadmapTimeline() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 mb-6">
            <Rocket className="w-4 h-4 text-slate-600" />
            <span className="text-xs font-bold tracking-widest uppercase text-slate-700">Our Journey</span>
          </div>
          <h2 className="text-4xl font-bold tracking-tight text-slate-900 mb-6">From Vision to Reality</h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            From concept to market leader - follow our journey building the European standard for SaaS identity security.
          </p>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-slate-200 md:left-1/2 md:-ml-0.5" />

          <div className="space-y-12">
            {roadmapData.map((yearGroup, index) => (
              <motion.div 
                key={yearGroup.year} 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                
                {/* Timeline Dot/Icon */}
                <div className="absolute left-8 -translate-x-1/2 md:left-1/2 md:-translate-x-1/2 flex h-16 w-16 items-center justify-center rounded-full border-4 border-white shadow-lg z-10 bg-white">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-full ${yearGroup.color} shadow-lg shadow-blue-500/20`}>
                        {yearGroup.icon}
                    </div>
                </div>

                {/* Content Side */}
                <div className="ml-20 md:ml-0 md:w-1/2 p-4">
                  <div className={`bg-white p-8 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-300 ${index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'}`}>
                    <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-bold text-white mb-6 shadow-md ${yearGroup.color}`}>
                      {yearGroup.year}
                    </span>
                    <h3 className="text-2xl font-bold text-slate-900 mb-6">{yearGroup.title}</h3>
                    
                    <div className="space-y-8">
                      {yearGroup.events.map((event, i) => (
                        <div key={i} className="relative pl-6 border-l-2 border-slate-100 group">
                          <div className={`absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-slate-300 group-hover:bg-blue-500 transition-colors`} />
                          <span className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 block">
                            {event.date}
                          </span>
                          <h4 className="text-base font-bold text-slate-800 mb-2">
                            {event.title}
                          </h4>
                          <p className="text-sm text-slate-600 leading-relaxed">
                            {event.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Empty Side for balance */}
                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
