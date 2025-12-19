"use client";

import React from 'react';
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion, type Variants } from "framer-motion";
import { ArrowRight } from 'lucide-react';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number]
    }
  },
};

export function SolutionHero() {
  return (
    <section className="relative w-full overflow-hidden bg-white pt-24 pb-12 lg:pt-32 lg:pb-24">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-100/50 blur-3xl" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-teal-100/50 blur-3xl" />
        <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] rounded-full bg-indigo-50/50 blur-3xl opacity-20" />
      </div>
      
      <div className="container relative z-10 mx-auto px-4 md:px-6 flex flex-col items-center">
        
        <motion.div 
          className="max-w-4xl text-center mb-20"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 
            variants={itemVariants}
            className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 mb-8 leading-[1.1]"
          >
            Identity Security Solutions for <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cydenti-primary to-cydenti-secondary">
              SaaS & Cloud
            </span>
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="max-w-3xl mx-auto text-lg text-slate-600 md:text-xl lg:text-2xl mb-12 leading-relaxed font-normal"
          >
            AI-powered visibility and automation to stop identity threats, secure SaaS configurations, and control cloud exposure — all in one platform.
          </motion.p>

          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button asChild size="lg" className="h-12 px-8 text-base rounded-full bg-cydenti-primary hover:bg-blue-700 shadow-lg shadow-blue-600/20 border border-transparent">
              <Link href="/platform">
                Explore Platform
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-12 px-8 text-base rounded-full border-slate-200 hover:bg-slate-50 hover:text-cydenti-primary">
              <Link href="/demo">
                Get a Demo
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>

        {/* Dashboard Image with Perspective Tilt */}
        <div className="w-full max-w-6xl mx-auto -mb-32 md:-mb-48 relative z-20" style={{ perspective: "2500px" }}>
          <motion.div
            initial={{ opacity: 0, rotateX: 25, y: 100 }}
            animate={{ opacity: 1, rotateX: 25, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
            className="relative transform-style-3d will-change-transform"
          >
             <div className="relative rounded-xl overflow-hidden shadow-2xl border border-slate-200/50 bg-white">
                <Image
                  src="/dashboard.png"
                  alt="Cydenti Dashboard Interface"
                  width={1400}
                  height={900}
                  priority
                  className="w-full h-auto object-cover"
                />
                
                {/* Overlay Gradient for Fade Effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/90 pointer-events-none h-full w-full bottom-0" />
             </div>
             
             {/* Glow Effect behind the dashboard */}
             <div className="absolute -inset-4 bg-blue-500/20 blur-3xl -z-10 rounded-[3rem]" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
