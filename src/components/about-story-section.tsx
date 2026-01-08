"use client";

import React from "react";
import { Sparkle, ShieldCheck, Users, Building2 } from "lucide-react";
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
    <section className="pt-12 pb-12 bg-slate-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-100/40 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-teal-100/40 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />
      </div>
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        
        {/* Intro Statement - Centered & Clean */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24 text-center max-w-4xl mx-auto"
        >
           <h2 className="text-3xl md:text-5xl font-medium text-slate-900 leading-tight tracking-tight mb-8">
              Cydenti leads in France, innovating in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 font-bold">ITDR</span> and <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-emerald-500 font-bold">ISPM</span>, defining tomorrow&apos;s secure cloud solutions.
           </h2>
           <p className="text-xl text-slate-600 leading-relaxed font-light">
              Our team of experts works tirelessly to bring your vision of a secure digital future to life. We combine deep technical expertise with a passion for user-centric security.
           </p>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 mb-24">
           
           {/* Card 1: Core Mission (Dark) - spans 7 cols */}
           <motion.div 
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
             className="lg:col-span-7 bg-[#0B1120] rounded-[2rem] p-10 relative overflow-hidden flex flex-col justify-between min-h-[400px]"
           >
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-600/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
              
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-6">
                  <Sparkle className="w-4 h-4 text-yellow-400" />
                  <span className="text-xs font-bold tracking-widest uppercase text-white/90">Our Mission</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-6">
                  Total SaaS Visibility.<br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">Sovereign Identity Control.</span>
                </h3>
                <p className="text-lg text-slate-300 leading-relaxed">
                   Our mission is to empower organizations to reclaim mastery over their digital perimeter by solving the most complex challenge in modern cloud environments: Authorization.
                </p>
              </div>
              
              <div className="relative z-10 mt-8 pt-8 border-t border-white/10 flex items-center gap-4">
                 <div className="h-px w-12 bg-blue-500/50" />
                 <span className="text-sm text-slate-400 uppercase tracking-widest font-medium">Paris, France</span>
              </div>
           </motion.div>

           {/* Card 2: NHIs (Gradient Light) - spans 5 cols */}
           <motion.div 
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6, delay: 0.1 }}
             className="lg:col-span-5 bg-gradient-to-br from-white to-blue-50 rounded-[2rem] p-10 border border-blue-100 flex flex-col justify-center relative overflow-hidden"
           >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-200/30 rounded-full blur-2xl" />
              <ShieldCheck className="w-10 h-10 text-blue-600 mb-6" />
              <h4 className="text-2xl font-bold text-slate-900 mb-4">Securing Non-Human Identities</h4>
              <p className="text-slate-600 leading-relaxed">
                 We specialize in securing the explosion of Non-Human Identities (NHIs)—such as service accounts and API keys—that now outnumber human users and create massive, hidden attack surfaces.
              </p>
           </motion.div>

           {/* Card 3: AI & Analysis (White) - spans 5 cols */}
           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6, delay: 0.2 }}
             className="lg:col-span-5 bg-white rounded-[2rem] p-10 border border-slate-200 flex flex-col justify-center shadow-sm"
           >
              <Building2 className="w-10 h-10 text-teal-600 mb-6" />
              <h4 className="text-2xl font-bold text-slate-900 mb-4">AI-Native Behavioral Analysis</h4>
              <p className="text-slate-600 leading-relaxed">
                 By integrating AI-native behavioral analysis with deep authorization mapping, we answer the one question that keeps CISOs up at night: &quot;Who can access what data, and how?&quot;
              </p>
           </motion.div>

           {/* Card 4: Sovereignty (Dark Blue/Teal) - spans 7 cols */}
           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6, delay: 0.3 }}
             className="lg:col-span-7 bg-slate-900 rounded-[2rem] p-10 relative overflow-hidden text-white flex flex-col justify-center"
           >
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-slate-800" />
              <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-teal-500/10 rounded-full blur-[80px]" />
              
              <div className="relative z-10">
                <h4 className="text-2xl font-bold mb-4">European Digital Sovereignty</h4>
                <p className="text-slate-300 leading-relaxed text-lg">
                   While traditional tools focus on infrastructure, Cydenti provides a European-sovereign platform that explicitly maps the web of permissions and access rights within your SaaS applications. We bridge the gap between technical configurations and strategic risk management.
                </p>
              </div>
           </motion.div>

        </div>

        {/* Stats Bar - Refined */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {stats.map((stat, index) => (
             <motion.div 
               key={stat.label}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5, delay: index * 0.1 }}
               className="bg-white rounded-3xl p-8 border border-slate-100 shadow-lg shadow-slate-200/30 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 group text-center"
             >
                <div className={`w-12 h-12 rounded-2xl ${stat.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform mx-auto`}>
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </div>
                <div className="flex items-center justify-center gap-2 mb-1">
                   <span className="text-4xl font-bold text-slate-900 tracking-tight">{stat.value}</span>
                </div>
                <div className="text-base font-bold text-slate-700">{stat.label}</div>
                <div className="text-xs text-slate-500 font-medium mt-1">{stat.sub}</div>
             </motion.div>
           ))}
        </div>

      </div>
    </section>
  );
}
