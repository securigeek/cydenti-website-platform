"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Calendar, MapPin, BrainCircuit } from "lucide-react";
import { motion } from "framer-motion";

export function AboutHero() {
  return (
    <section className="relative w-full overflow-hidden bg-white pt-32 pb-16 lg:pt-48 lg:pb-20">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Refined Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_0%,#000_70%,transparent_100%)]" />
        
        {/* Premium Aurora Effects */}
        <div className="absolute top-[-20%] left-[20%] w-[60%] h-[60%] rounded-full bg-blue-100/40 blur-[100px] animate-pulse" />
        <div className="absolute top-[-10%] right-[10%] w-[40%] h-[40%] rounded-full bg-teal-100/30 blur-[100px] animate-pulse delay-1000" />
        <div className="absolute bottom-0 left-0 w-full h-[300px] bg-gradient-to-t from-white via-white/80 to-transparent z-10" />
      </div>

      <div className="container relative z-10 mx-auto px-6 lg:px-8">
        
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-7xl mx-auto"
        >
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/50 backdrop-blur-sm px-4 py-1.5 mb-12 shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse"></span>
              <span className="text-xs font-semibold text-slate-700 uppercase tracking-wider">About Cydenti</span>
            </div>

            {/* Split Layout: Headline Left, Content Right */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-end">
                
                {/* Left Column: Massive Headline */}
                <div className="lg:col-span-7">
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 leading-[1.1] lg:leading-[1.05]">
                      Pioneering <br />
                      <span className="text-gradient-primary">SaaS Security</span>
                      <br /> & Identity Defense
                    </h1>
                </div>

                {/* Right Column: Description & Actions */}
                <div className="lg:col-span-5 lg:pb-4">
                    <div className="space-y-8">
                        <p className="text-xl text-slate-600 leading-relaxed font-medium">
                          We are a team of security experts, engineers, and innovators dedicated to securing the identity fabric of the modern enterprise.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button asChild size="lg" className="h-14 rounded-full bg-slate-900 text-white hover:bg-slate-800 px-8 text-lg shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto">
                                <Link href="/contact">
                                  Contact Us
                                  <ArrowRight className="ml-2 h-5 w-5" />
                                </Link>
                            </Button>
                            <Button asChild variant="outline" size="lg" className="h-14 rounded-full px-8 text-lg border-slate-200 hover:bg-slate-50 hover:text-slate-900 w-full sm:w-auto">
                                <Link href="/solution">Our Solution</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Structure Line */}
            <div className="mt-20 h-px w-full bg-gradient-to-r from-slate-200 via-slate-300 to-slate-200" />
            
            {/* Enhanced Ticker/Info */}
            <div className="mt-8 flex flex-wrap gap-6 md:gap-12">
                <div className="flex items-center gap-4 group cursor-default">
                    <div className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-blue-100">
                        <Calendar className="w-5 h-5" />
                    </div>
                    <div>
                        <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-0.5">Established</div>
                        <div className="text-sm font-bold text-slate-900">2022</div>
                    </div>
                </div>

                <div className="w-px h-10 bg-slate-200 hidden md:block" />

                <div className="flex items-center gap-4 group cursor-default">
                    <div className="w-10 h-10 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-teal-100">
                        <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                        <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-0.5">Headquarters</div>
                        <div className="text-sm font-bold text-slate-900">Paris, France</div>
                    </div>
                </div>

                <div className="w-px h-10 bg-slate-200 hidden md:block" />

                <div className="flex items-center gap-4 group cursor-default">
                    <div className="w-10 h-10 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-indigo-100">
                        <BrainCircuit className="w-5 h-5" />
                    </div>
                    <div>
                        <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-0.5">Technology</div>
                        <div className="text-sm font-bold text-slate-900">AI-Native Core</div>
                    </div>
                </div>
            </div>

        </motion.div>
      </div>
      
      {/* Bottom Fade Gradient for Seamless Blend */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-slate-50 to-transparent z-20 pointer-events-none" />
    </section>
  );
}
