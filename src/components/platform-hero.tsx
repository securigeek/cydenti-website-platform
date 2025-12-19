"use client";

import React from 'react';
import { motion, type Variants } from "framer-motion";

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
      ease: [0.22, 1, 0.36, 1]
    }
  },
};

export function PlatformHero() {
  return (
    <section className="relative w-full overflow-hidden bg-white pt-24 pb-12 lg:pt-32 lg:pb-24">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-100/50 blur-3xl opacity-30" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-teal-100/50 blur-3xl opacity-30" />
      </div>
      
      <div className="container relative z-10 mx-auto px-4 md:px-6 flex flex-col items-center text-center">
        <motion.div 
          className="max-w-4xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-8 leading-[1.1]"
          >
            The <span className="text-transparent bg-clip-text bg-[linear-gradient(120deg,var(--color-cydenti-primary),var(--color-cydenti-secondary),var(--color-cydenti-primary))] animate-text-shimmer">Cydenti Identity Security</span> Platform
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="text-xl md:text-2xl text-slate-600 mb-8 leading-relaxed max-w-3xl mx-auto"
          >
            AI-powered visibility into identities, permissions, SaaS configurations, cloud exposures, and third-party integrations — all in one unified platform.
          </motion.p>

          <motion.p 
            variants={itemVariants}
            className="text-lg text-slate-500 max-w-2xl mx-auto"
          >
            Built to secure the identity attack surface of modern SaaS and cloud enterprises.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
