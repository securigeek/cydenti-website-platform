"use client";

import React from "react";
import Image from "next/image";
import { Globe2 } from "lucide-react";
import { motion } from "framer-motion";

export function GlobalPresence() {
  return (
    <section className="py-24 bg-[#0B1120] text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
        <div className="absolute right-0 top-0 w-[600px] h-[600px] bg-blue-600 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute left-0 bottom-0 w-[600px] h-[600px] bg-teal-600 rounded-full blur-[120px] animate-pulse delay-1000" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/30 border border-blue-800 mb-6">
            <Globe2 className="w-4 h-4 text-blue-400" />
            <span className="text-xs font-bold tracking-widest uppercase text-blue-300">Global Reach</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Our Global Presence</h2>
          <p className="mt-4 text-lg leading-8 text-gray-400">
            Cydenti, headquartered in France, collaborates with an international portfolio of more than 10 client companies.
          </p>
        </div>

        {/* World Map Container */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative w-full aspect-[2/1] max-w-5xl mx-auto bg-slate-900/50 rounded-[3rem] border border-slate-800 shadow-2xl backdrop-blur-sm p-8 overflow-hidden group"
        >
          {/* Grid Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
          
          {/* Detailed World Map SVG */}
          <div className="absolute inset-0 p-8 flex items-center justify-center opacity-40 group-hover:opacity-60 transition-opacity duration-700">
            <Image 
              src="/worldmap.svg" 
              alt="World Map" 
              width={1560} 
              height={1011}
              className="w-full h-full object-contain"
            />
          </div>

          {/* Highlights */}
          {/* France */}
          <div className="absolute top-[28%] left-[49%] group/pin">
            <div className="relative flex items-center justify-center">
               <span className="animate-ping absolute inline-flex h-6 w-6 rounded-full bg-blue-400 opacity-75"></span>
               <span className="relative inline-flex rounded-full h-4 w-4 bg-blue-500 border-2 border-white shadow-[0_0_15px_rgba(59,130,246,0.5)]"></span>
            </div>
            <div className="absolute top-8 left-1/2 -translate-x-1/2 bg-white text-slate-900 text-xs font-bold px-3 py-1.5 rounded-lg shadow-xl opacity-0 group-hover/pin:opacity-100 transition-all duration-300 whitespace-nowrap -translate-y-2 group-hover/pin:translate-y-0 z-20">
              Headquarters (France)
              <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-white rotate-45" />
            </div>
          </div>

          {/* Other presence dots */}
          {[
            { top: '35%', left: '22%', label: 'North America' }, 
            { top: '30%', left: '52%', label: 'Europe' },        
            { top: '55%', left: '52%', label: 'Africa' },        
            { top: '35%', left: '72%', label: 'Asia' },          
          ].map((loc, i) => (
             <motion.div 
               key={i} 
               initial={{ scale: 0, opacity: 0 }}
               whileInView={{ scale: 1, opacity: 1 }}
               viewport={{ once: true }}
               transition={{ delay: 0.5 + (i * 0.1) }}
               className="absolute group/pin" 
               style={{ top: loc.top, left: loc.left }}
             >
                <div className="relative flex items-center justify-center">
                   <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-400/80 shadow-[0_0_10px_rgba(45,212,191,0.5)]"></span>
                </div>
                 <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] px-2 py-1 rounded border border-slate-700 opacity-0 group-hover/pin:opacity-100 transition-all duration-300 whitespace-nowrap -translate-y-1 group-hover/pin:translate-y-0 z-20">
                  {loc.label}
                </div>
             </motion.div>
          ))}

        </motion.div>
      </div>
    </section>
  );
}
