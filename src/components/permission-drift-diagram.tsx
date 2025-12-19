"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  ShieldAlert, 
  Layers, 
  FileCheck, 
  Unplug,
  Circle
} from "lucide-react";

export function PermissionDriftDiagram() {
  const points = [
    {
      label: "Initial Access",
      icon: Circle,
      x: "10%",
      y: "85%",
      delay: 0.2,
      color: "text-blue-400",
      bg: "bg-white"
    },
    {
      label: "Role Added",
      icon: Layers,
      x: "30%",
      y: "65%",
      delay: 0.8,
      color: "text-blue-500",
      bg: "bg-blue-50"
    },
    {
      label: "Temporary Permission",
      icon: FileCheck,
      x: "50%",
      y: "45%",
      delay: 1.4,
      color: "text-blue-600",
      bg: "bg-blue-50"
    },
    {
      label: "Integration Enabled",
      icon: Unplug,
      x: "70%",
      y: "25%",
      delay: 2.0,
      color: "text-indigo-600",
      bg: "bg-indigo-50"
    },
    {
      label: "Unintended Privilege",
      icon: ShieldAlert,
      x: "90%",
      y: "10%",
      delay: 2.6,
      color: "text-red-500",
      bg: "bg-red-50",
      isAlert: true
    }
  ];

  const [particles, setParticles] = useState<Array<{x: string; y: string; animateY: number; duration: number; delay: number}>>([]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setParticles([...Array(12)].map(() => ({
      x: Math.random() * 100 + "%",
      y: Math.random() * 100 + "%",
      animateY: Math.random() * -20 - 10,
      duration: 2 + Math.random() * 2,
      delay: Math.random() * 2
    })));
  }, []);

  return (
    <div className="w-full max-w-5xl mx-auto py-12 relative">
      {/* Chart Container */}
      <div className="relative w-full aspect-[2/1] md:aspect-[2.5/1]">
        
        {/* SVG Line */}
        <svg className="absolute inset-0 w-full h-full overflow-visible">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#EF4444" stopOpacity="1" />
            </linearGradient>
            <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          {/* Area under curve */}
          <motion.path
            d="M 100 340 C 300 320, 500 240, 900 40 L 900 400 L 100 400 Z"
            fill="url(#areaGradient)"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            className="hidden md:block" // Use percentage based coords for responsiveness if needed, but strict SVG coords are easier with viewbox
          />
        </svg>

        {/* Responsive SVG Line - using percentages for points is tricky in SVG path d attribute. 
            Better to use a viewBox and let SVG scale. 
            Let's assume viewBox 0 0 1000 400 
        */}
        <svg 
          viewBox="0 0 1000 400" 
          preserveAspectRatio="none"
          className="absolute inset-0 w-full h-full overflow-visible"
        >
           {/* The Curve */}
           <motion.path
            d="M 100 340 C 350 320, 600 200, 900 40"
            fill="none"
            stroke="url(#lineGradient)"
            strokeWidth="6"
            strokeLinecap="round"
            filter="url(#glow)"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 2.5, ease: "easeOut" }}
            viewport={{ once: true }}
          />
        </svg>

        {/* Points */}
        {points.map((point, index) => (
          <motion.div
            key={index}
            className="absolute flex flex-col items-center transform -translate-x-1/2 -translate-y-1/2"
            style={{ left: point.x, top: point.y }}
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: point.delay, duration: 0.5 }}
            viewport={{ once: true }}
          >
            {/* Icon Circle */}
            <div className={`
              relative z-10 w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg border-2 border-white
              ${point.bg} ${point.isAlert ? 'shadow-red-200' : 'shadow-blue-100'}
            `}>
              <point.icon className={`w-6 h-6 ${point.color}`} />
              
              {/* Pulse effect for alert */}
              {point.isAlert && (
                <div className="absolute inset-0 rounded-2xl bg-red-500 animate-ping opacity-20" />
              )}
            </div>

            {/* Label */}
            <div className={`
              mt-4 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-lg shadow-sm border border-slate-100
              text-sm font-semibold whitespace-nowrap
              ${point.isAlert ? 'text-red-600 border-red-100' : 'text-slate-600'}
            `}>
              {point.label}
            </div>
            
            {/* Connecting Dot on Line */}
            <div className={`
              absolute top-1/2 left-1/2 w-4 h-4 bg-white border-4 rounded-full -z-10
              ${point.isAlert ? 'border-red-500' : 'border-blue-400'}
            `} />
          </motion.div>
        ))}

        {/* Particles / Dust */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {particles.map((p, i) => (
             <motion.div
               key={i}
               className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-30"
               initial={{ 
                 x: p.x, 
                 y: p.y,
                 scale: 0
               }}
               animate={{ 
                 y: [null, p.animateY],
                 opacity: [0, 0.5, 0]
               }}
               transition={{ 
                 duration: p.duration,
                 repeat: Infinity,
                 delay: p.delay
               }}
             />
          ))}
        </div>

      </div>
    </div>
  );
}
