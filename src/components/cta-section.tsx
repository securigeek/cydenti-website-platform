"use client";

import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CtaSection() {
  return (
    <section className="py-24 px-4 bg-white relative w-full">
      <div className="max-w-7xl mx-auto w-full">
        <div className="relative overflow-hidden rounded-[60px] bg-gradient-to-r from-cydenti-primary to-cydenti-secondary p-12 lg:p-24 text-center w-full">
          
          {/* Animated Background Shapes */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-white/10 blur-[80px] animate-pulse" />
            <div className="absolute bottom-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-black/10 blur-[80px]" />
            
            {/* Mesh Pattern Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:32px_32px] opacity-20" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto space-y-6 md:space-y-8">
            <div className="inline-flex items-center gap-2 text-white/90 font-bold tracking-widest text-[10px] uppercase bg-white/20 px-4 py-1.5 rounded-full border border-white/30 backdrop-blur-sm">
              <Sparkles className="w-3 h-3" />
              Ready to secure your future?
            </div>

            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              See your identity attack surface with <br className="hidden md:block"/>
              <span className="text-white/90">AI-powered clarity.</span>
            </h2>

            <p className="text-base md:text-xl text-blue-50 leading-relaxed max-w-2xl mx-auto font-medium">
              Across humans, machines, and AI agents. Cydenti delivers the visibility, intelligence, and automation needed to secure SaaS- and cloud-driven enterprises.
            </p>

            <div className="pt-4 md:pt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                asChild
                size="lg" 
                className="rounded-full bg-white/20 backdrop-blur-lg border border-white/50 text-white hover:bg-white/40 px-8 py-6 md:px-10 md:py-7 text-base md:text-lg font-bold shadow-xl transition-all hover:scale-105 hover:border-white/60"
              >
                <a href="https://www.linkedin.com/company/cydenti/" target="_blank" rel="noopener noreferrer">
                  Get a Demo
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
