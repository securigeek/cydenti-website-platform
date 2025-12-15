"use client";

import React from 'react';
import { motion } from "framer-motion";
import { 
  CheckCircle2, 
  Shield, 
  Search, 
  Settings, 
  Cloud, 
  Link as LinkIcon, 
  BarChart3, 
  FileText 
} from 'lucide-react';

const features = [
  { icon: Search, text: "Identity behavior analysis" },
  { icon: Shield, text: "Permissions & entitlement mapping" },
  { icon: Settings, text: "SaaS configuration posture monitoring" },
  { icon: Cloud, text: "Cloud identity & policy exposure detection" },
  { icon: LinkIcon, text: "OAuth and third-party integration security" },
  { icon: BarChart3, text: "AI-driven risk scoring" },
  { icon: FileText, text: "Automated posture & compliance reporting" },
];

export function PlatformOverview() {
  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left Side: Content */}
          <div className="flex-1 space-y-8 z-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-sm font-medium text-blue-700">
              What the platform is
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              One Platform for End-to-End <span className="text-transparent bg-clip-text bg-[linear-gradient(120deg,var(--color-cydenti-primary),var(--color-cydenti-secondary),var(--color-cydenti-primary))] animate-text-shimmer">Identity Security</span>
            </h2>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              Cydenti unifies identity threat detection, SaaS security posture management, and cloud identity exposure monitoring into a single system built for clarity and automation.
            </p>
          </div>

          {/* Right Side: Wave Features */}
          <div className="flex-1 w-full relative">
            {/* Background Circular Lines (Wave Effect) */}
            <div className="absolute inset-0 -mx-20 -my-10 pointer-events-none opacity-40">
               <svg className="w-full h-full" viewBox="0 0 400 600" fill="none" preserveAspectRatio="none">
                 {/* Line 1 - Blue (Aligned with left column) */}
                 <path 
                   d="M 100 0 Q 150 300 100 600" 
                   stroke="url(#blue-gradient)" 
                   strokeWidth="2" 
                   fill="none"
                   strokeDasharray="8 8"
                 />
                 {/* Line 2 - Cyan (Aligned with right column) */}
                 <path 
                   d="M 300 0 Q 300 300 300 600" 
                   stroke="url(#cyan-gradient)" 
                   strokeWidth="2" 
                   fill="none"
                 />
                 <defs>
                   <linearGradient id="blue-gradient" x1="100" y1="0" x2="100" y2="600" gradientUnits="userSpaceOnUse">
                     <stop stopColor="#3B82F6" stopOpacity="0.1" />
                     <stop offset="0.5" stopColor="#3B82F6" />
                     <stop offset="1" stopColor="#3B82F6" stopOpacity="0.1" />
                   </linearGradient>
                   <linearGradient id="cyan-gradient" x1="350" y1="0" x2="350" y2="600" gradientUnits="userSpaceOnUse">
                     <stop stopColor="#06B6D4" stopOpacity="0.1" />
                     <stop offset="0.5" stopColor="#06B6D4" />
                     <stop offset="1" stopColor="#06B6D4" stopOpacity="0.1" />
                   </linearGradient>
                 </defs>
               </svg>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
              {/* Left Column of Features (Blue Theme) */}
              <div className="space-y-6 flex flex-col items-center md:items-start pl-8"> {/* Added padding for alignment */}
                {features.filter((_, i) => i % 2 === 0).map((feature, index) => (
                  <motion.div
                    key={`col1-${index}`}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4 p-4 rounded-2xl bg-white/80 backdrop-blur-sm border border-white shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 w-full max-w-xs"
                  >
                    <div className="p-3 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 text-blue-600 group-hover:scale-110 transition-transform relative z-10">
                      <feature.icon className="w-5 h-5" />
                    </div>
                    <span className="font-semibold text-gray-700 text-sm">{feature.text}</span>
                  </motion.div>
                ))}
              </div>

              {/* Right Column of Features (Cyan Theme) */}
              <div className="space-y-6 pt-12 md:pt-16 flex flex-col items-center md:items-end pr-8"> {/* Added padding for alignment */}
                {features.filter((_, i) => i % 2 !== 0).map((feature, index) => (
                  <motion.div
                    key={`col2-${index}`}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: (index * 0.1) + 0.2 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4 p-4 rounded-2xl bg-white/80 backdrop-blur-sm border border-white shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 w-full max-w-xs"
                  >
                    <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-50 to-cyan-100 text-cyan-600 group-hover:scale-110 transition-transform relative z-10">
                      <feature.icon className="w-5 h-5" />
                    </div>
                    <span className="font-semibold text-gray-700 text-sm">{feature.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
