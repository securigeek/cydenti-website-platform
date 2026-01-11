"use client";

import React from 'react';
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  PlayCircle
} from 'lucide-react';
import { LivingIntelligenceCore } from "@/components/living-intelligence-core";

export function Hero() {

  return (
    <section className="relative w-full overflow-hidden bg-white pt-28 pb-12 md:pt-36 md:pb-20 lg:pt-40 lg:pb-24">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        
        <div className="hidden sm:block absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-100/50 blur-3xl animate-pulse opacity-30" />
        <div className="hidden sm:block absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-teal-100/50 blur-3xl animate-pulse delay-1000 opacity-30" />
        <div className="hidden sm:block absolute top-[20%] right-[10%] w-[30%] h-[30%] rounded-full bg-indigo-50/50 blur-3xl opacity-20" />
        
        {/* Haze & Light Rays */}
        <div className="absolute inset-0 z-0">
          <div className="hidden md:block absolute top-[-30%] left-1/2 -translate-x-1/2 w-[1200px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.8)_0%,rgba(255,255,255,0)_70%)] blur-[60px] opacity-60" />
          <div className="hidden md:block absolute top-[-50%] left-1/2 -translate-x-1/2 w-[150%] h-[150%] bg-[conic-gradient(from_180deg_at_50%_0%,transparent_0deg,rgba(255,255,255,0.1)_20deg,transparent_40deg,rgba(255,255,255,0.1)_60deg,transparent_80deg)] blur-3xl opacity-50" />
        </div>
      </div>
      
      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text Content */}
          <div className="flex flex-col items-start text-left max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/80 backdrop-blur-sm px-4 py-1.5 shadow-sm mb-8 transition-all hover:border-gray-300 hover:shadow-md">
              <span className="flex h-2 w-2 rounded-full bg-cydenti-secondary animate-pulse"></span>
              <span className="text-sm font-medium text-gray-600">Adversaries don&apos;t hack their way in—they log in.</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-6 leading-[1.1] md:leading-[1.05]">
              Secure Your SaaS Stack in <span className="text-gradient-primary">30 Minutes</span>.
            </h1>

            <p className="text-base text-slate-600 md:text-lg lg:text-l mb-10 leading-relaxed font-normal">
              Eliminate the critical blind spots of <strong className="font-semibold text-slate-900">Non-Human Identities</strong> and complex permissions with the first European-sovereign platform for <strong className="font-semibold text-slate-900">SaaS Authorization Management</strong> and <strong className="font-semibold text-slate-900">Identity Threat Detection</strong>. Stop guessing who can access your most sensitive data and start seeing the full picture.
            </p>

            <div className="relative z-20 hidden md:flex flex-col sm:flex-row gap-4 w-full sm:w-auto items-center sm:items-start">
              <div className="relative group p-[2px] rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 bg-[length:200%_auto] animate-gradient-x shadow-[0_0_20px_-5px_rgba(6,182,212,0.3)] transition-all duration-300 group-hover:shadow-[0_0_30px_-5px_rgba(6,182,212,0.6)] group-hover:-translate-y-0.5 w-full sm:w-auto">
                <Button 
                  asChild
                  size="lg" 
                  className="relative rounded-full bg-slate-950 hover:bg-slate-900 text-white font-semibold px-8 h-[52px] w-full text-lg transition-colors duration-300 border-none"
                >
                  <Link href="/demo">
                    <span className="relative z-10 flex items-center justify-center">
                      Book a Demo
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform text-cyan-400" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] z-0" />
                  </Link>
                </Button>
              </div>

              <Button 
                asChild
                variant="outline"
                size="lg" 
                className="rounded-full border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-slate-900 font-semibold px-8 h-14 text-lg transition-all duration-300 w-full sm:w-auto"
              >
                <Link href="/resources/gallery">
                  <PlayCircle className="mr-2 h-4 w-4" />
                  See a 5-Minute Product Walkthrough
                </Link>
              </Button>
            </div>

            {/* Mobile Fixed Bottom Buttons */}
            <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-white/80 backdrop-blur-lg border-t border-slate-200 md:hidden flex flex-col gap-3 shadow-lg safe-area-bottom">
              <div className="relative group p-[1px] rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 bg-[length:200%_auto] animate-gradient-x w-full">
                <Button 
                  asChild
                  size="sm"
                  className="relative rounded-full bg-slate-950 hover:bg-slate-900 text-white font-semibold w-full h-10 text-sm transition-colors duration-300 border-none"
                >
                  <Link href="/demo">
                    <span className="relative z-10 flex items-center justify-center">
                      Book a Demo
                      <ArrowRight className="ml-2 h-3.5 w-3.5 text-cyan-400" />
                    </span>
                  </Link>
                </Button>
              </div>

              <Button 
                asChild
                variant="outline"
                size="sm"
                className="rounded-full border-slate-200 text-slate-600 hover:bg-slate-50 font-semibold w-full h-10 text-sm"
              >
                <Link href="/resources/gallery">
                  <PlayCircle className="mr-2 h-3.5 w-3.5" />
                  Product Walkthrough
                </Link>
              </Button>
            </div>

            <p className="text-xs md:text-sm text-slate-500 font-mono mt-8 tracking-wide font-medium">
              Start with a comprehensive, privacy-preserving audit — deployed in minutes.
            </p>
          </div>

          {/* Right Column: Living Intelligence Core Illustration */}
          <div className="relative w-full h-full min-h-[320px] sm:min-h-[420px] lg:min-h-[500px] flex items-center justify-center lg:justify-end lg:translate-x-12">
            <LivingIntelligenceCore />
          </div>
        </div>
      </div>
    </section>
  );
}
