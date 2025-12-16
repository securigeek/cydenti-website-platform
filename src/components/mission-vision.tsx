"use client";

import React from "react";
import { Flag, Eye } from "lucide-react";
import { motion } from "framer-motion";

export function MissionVision() {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Vision Card */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="group relative bg-gradient-to-br from-white to-slate-50 rounded-[3rem] border border-slate-200 p-12 transition-all hover:shadow-xl hover:shadow-teal-900/5 hover:border-teal-200 overflow-hidden"
          >
             {/* Decorative Background */}
             <div className="absolute top-0 right-0 w-64 h-64 bg-teal-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
             
             {/* Icon */}
             <div className="absolute top-10 right-10 p-4 rounded-2xl bg-teal-50 text-teal-600 group-hover:scale-110 transition-transform duration-300">
                <Eye className="w-8 h-8" />
             </div>
             
             <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                    <h3 className="text-4xl font-bold tracking-tight text-slate-900 mb-6 flex items-center gap-3">
                      Vision
                    </h3>
                    <p className="text-lg leading-relaxed text-slate-600">
                    To become the European standard for SaaS identity security, defining the future of secure cloud environments. We envision a world where organizations can innovate in the cloud with complete confidence in their identity defense.
                    </p>
                </div>
                <div className="mt-12 flex items-center gap-3">
                    <div className="h-px flex-1 bg-slate-200 group-hover:bg-teal-200 transition-colors" />
                    <div className="w-2 h-2 rounded-full bg-teal-500" />
                </div>
             </div>
          </motion.div>

          {/* Mission Card */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="group relative bg-gradient-to-br from-white to-slate-50 rounded-[3rem] border border-slate-200 p-12 transition-all hover:shadow-xl hover:shadow-blue-900/5 hover:border-blue-200 overflow-hidden"
          >
             {/* Decorative Background */}
             <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
             
             {/* Icon */}
             <div className="absolute top-10 right-10 p-4 rounded-2xl bg-blue-50 text-blue-600 group-hover:scale-110 transition-transform duration-300">
                <Flag className="w-8 h-8" />
             </div>
             
             <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                    <h3 className="text-4xl font-bold tracking-tight text-slate-900 mb-6 flex items-center gap-3">
                      Mission
                    </h3>
                    <p className="text-lg leading-relaxed text-slate-600">
                    To empower enterprises with sovereign, intelligent identity security solutions that eliminate blind spots and ensure digital trust. We strive to bridge the gap between complex cloud environments and robust security posture.
                    </p>
                </div>
                <div className="mt-12 flex items-center gap-3">
                    <div className="h-px flex-1 bg-slate-200 group-hover:bg-blue-200 transition-colors" />
                    <div className="w-2 h-2 rounded-full bg-blue-500" />
                </div>
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
