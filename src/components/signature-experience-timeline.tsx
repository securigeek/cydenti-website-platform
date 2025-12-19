"use client";

import React from "react";
import { Users, GitMerge, Lock, Database } from "lucide-react";
import { motion } from "framer-motion";

const stepsData = [
  {
    step: "1",
    title: "Select an identity",
    description: "Start with any user, service account, or machine identity.",
    icon: <Users className="w-6 h-6 text-white" />,
    color: "bg-gradient-to-br from-blue-600 to-cyan-500",
  },
  {
    step: "2",
    title: "Trace every role",
    description: "Visualize role assumptions and group memberships.",
    icon: <GitMerge className="w-6 h-6 text-white" />,
    color: "bg-gradient-to-br from-purple-600 to-blue-500",
  },
  {
    step: "3",
    title: "See inherited permissions",
    description: "Understand exactly what rights are granted down the chain.",
    icon: <Lock className="w-6 h-6 text-white" />,
    color: "bg-gradient-to-br from-cyan-600 to-teal-500",
  },
  {
    step: "4",
    title: "Follow the path to resources",
    description: "Pinpoint exactly which sensitive assets are exposed.",
    icon: <Database className="w-6 h-6 text-white" />,
    color: "bg-gradient-to-br from-indigo-600 to-purple-500",
  }
];

export function SignatureExperienceTimeline() {
  return (
    <section className="w-full py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-[var(--color-cydenti-secondary)] tracking-widest uppercase mb-3">Signature Experience</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Follow the Path, Not the Assumption</h3>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            What was previously invisible becomes obvious — and explainable.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-slate-200 md:left-1/2 md:-ml-0.5" />

          <div className="space-y-12">
            {stepsData.map((item, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                
                {/* Timeline Dot/Icon */}
                <div className="absolute left-8 -translate-x-1/2 md:left-1/2 md:-translate-x-1/2 flex h-16 w-16 items-center justify-center rounded-full border-4 border-white shadow-lg z-10 bg-white">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-full ${item.color} shadow-lg shadow-blue-500/20`}>
                        {item.icon}
                    </div>
                </div>

                {/* Content Side */}
                <div className="ml-20 md:ml-0 md:w-1/2 p-4">
                  <div className={`bg-white p-8 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-300 ${index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'}`}>
                    <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-bold text-white mb-6 shadow-md ${item.color}`}>
                      Step {item.step}
                    </span>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">{item.title}</h3>
                    <p className="text-lg text-slate-600 leading-relaxed">
                        {item.description}
                    </p>
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
