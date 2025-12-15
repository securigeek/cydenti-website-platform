"use client";

import React from "react";
import Image from "next/image";
import { Sparkle, ShieldCheck, Trophy, Users, Globe2, Building2 } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  { 
    value: "10+", 
    label: "Global Clients", 
    sub: "Trusting Cydenti",
    icon: Users,
    color: "text-blue-600",
    bg: "bg-blue-50"
  },
  { 
    value: "2022", 
    label: "Founded", 
    sub: "Years of Innovation",
    icon: Building2,
    color: "text-purple-600",
    bg: "bg-purple-50"
  },
  { 
    value: "100%", 
    label: "SaaS Focus", 
    sub: "Dedicated Security",
    icon: ShieldCheck,
    color: "text-teal-600",
    bg: "bg-teal-50"
  }
];

export function AboutStorySection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50/50 -skew-x-12 z-0" />
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        
        {/* Split Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-24 items-center">
          
          {/* Left: Intro Text + Small Visual Slice */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-between"
          >
             <div className="relative mb-12">
                <span className="text-8xl text-slate-100 font-serif absolute -top-10 -left-6 -z-10">“</span>
                <h2 className="text-3xl md:text-4xl font-medium text-slate-900 leading-tight relative z-10">
                   Cydenti leads in France, innovating in <span className="text-blue-600">ITDR</span> and <span className="text-teal-600">SSPM</span>, defining tomorrow's secure cloud solutions for enterprises.
                </h2>
                <p className="mt-6 text-lg text-slate-600 leading-relaxed">
                   Our team of experts works tirelessly to bring your vision of a secure digital future to life. We combine deep technical expertise with a passion for user-centric security.
                </p>
             </div>
             
             {/* Visual Slice */}
             <div className="h-64 w-full rounded-[2rem] overflow-hidden relative group shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
                  alt="Cydenti Team"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors" />
             </div>
          </motion.div>

          {/* Right: Blue Card */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#0B1120] rounded-[3rem] p-10 md:p-14 text-white relative overflow-hidden flex flex-col justify-center min-h-[500px] shadow-2xl"
          >
             {/* Background Decoration */}
             <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
             <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-teal-600/10 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/3 pointer-events-none" />
             
             <div className="relative z-10">
                <div className="flex items-center justify-between mb-10">
                   <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm">
                     <Sparkle className="w-4 h-4 text-yellow-400" />
                     <span className="text-xs font-bold tracking-widest uppercase text-white/90">Our Mission</span>
                   </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-6 text-white">Sovereign Intelligence.<br/>Proactive Defense.</h3>
                
                <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
                  <p>
                     We believe in the power of sovereign intelligence. By partnering closely with our clients, we gain a deep understanding of their unique needs, allowing us to deliver customized ITDR and SSPM solutions that truly make a difference.
                  </p>
                  <p>
                     Our holistic approach integrates advanced AI, real-time monitoring, and compliance frameworks to create seamless and robust security postures that adapt to the evolving threat landscape.
                  </p>
                </div>

                <div className="mt-10 pt-8 border-t border-white/10 flex items-center gap-4">
                  <div className="flex -space-x-4">
                    {[1,2,3].map((i) => (
                      <div key={i} className="w-10 h-10 rounded-full border-2 border-[#0B1120] bg-slate-700 overflow-hidden relative">
                         {/* Placeholder avatars */}
                         <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-teal-400 opacity-80" />
                      </div>
                    ))}
                  </div>
                  <div className="text-sm text-slate-400">
                    <span className="text-white font-bold">Expert Team</span> based in Paris
                  </div>
                </div>
             </div>
          </motion.div>

        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
           {stats.map((stat, index) => (
             <motion.div 
               key={stat.label}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5, delay: index * 0.1 }}
               className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-300 group"
             >
                <div className={`w-12 h-12 rounded-2xl ${stat.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </div>
                <div className="flex items-baseline gap-2 mb-1">
                   <span className="text-4xl font-bold text-slate-900">{stat.value}</span>
                </div>
                <div className="text-lg font-semibold text-slate-700">{stat.label}</div>
                <div className="text-sm text-slate-500">{stat.sub}</div>
             </motion.div>
           ))}
        </div>

      </div>
    </section>
  );
}
