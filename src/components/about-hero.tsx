"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function AboutHero() {
  return (
    <section className="relative w-full overflow-hidden bg-white pt-32 pb-20">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-100/50 blur-3xl animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-teal-100/50 blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] rounded-full bg-indigo-50/50 blur-3xl opacity-20" />
      </div>

      <div className="container relative z-10 mx-auto px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center mb-16 gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50/50 px-3 py-1 mb-6">
              <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse"></span>
              <span className="text-xs font-medium text-blue-700 uppercase tracking-wide">About Cydenti</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 leading-[1.1] mb-6">
              Pioneering <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">SaaS Security</span> & Identity Defense
            </h1>
            
            <p className="text-lg text-slate-600 leading-relaxed font-medium mb-8 max-w-xl">
              We are a team of security experts, engineers, and innovators dedicated to securing the identity fabric of the modern enterprise.
            </p>

            <div className="flex gap-4">
                <Button asChild size="lg" className="rounded-full bg-slate-900 text-white hover:bg-slate-800 px-8">
                    <Link href="/contact">
                      Contact Us
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full px-8">
                    <Link href="/solution">Our Solution</Link>
                </Button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:w-1/2 relative"
          >
             <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border border-slate-200 aspect-[4/3] group">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
                  alt="Cydenti Team Collaboration"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                
                {/* Overlay Card */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-6 rounded-2xl border border-white/50 shadow-lg">
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-1">Established</p>
                      <p className="text-2xl font-bold text-slate-900">2022</p>
                    </div>
                    <div className="text-right">
                       <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-1">Headquarters</p>
                       <p className="text-xl font-bold text-slate-900">Paris, France</p>
                    </div>
                  </div>
                </div>
             </div>
             
             {/* Decorative Element behind image */}
             <div className="absolute -z-10 top-10 -right-10 w-full h-full rounded-[2rem] border-2 border-slate-200/50 bg-slate-50/50" />
          </motion.div>
        </div>

      </div>
    </section>
  );
}
