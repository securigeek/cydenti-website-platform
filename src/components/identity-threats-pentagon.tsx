"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { 
  Activity, 
  KeyRound, 
  ShieldAlert, 
  Zap, 
  Lock,
  ArrowUpRight,
  LucideIcon
} from "lucide-react";

interface Threat {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
  angle: number;
  anchor: string;
}

const threats: Threat[] = [
  {
    id: 1,
    title: "Behavioral Anomalies",
    description: "Detects deviations from normal access patterns across users, service accounts, and applications.",
    icon: Activity,
    angle: -90, // Top
    anchor: "translate(-50%, -100%) translateY(-20px)"
  },
  {
    id: 2,
    title: "Credential Misuse",
    description: "Identifies abnormal login activity, suspicious session behavior, and misuse of valid credentials.",
    icon: KeyRound,
    angle: -18, // Top Right
    anchor: "translate(20px, -50%)"
  },
  {
    id: 3,
    title: "Privilege Escalation",
    description: "Flags attempts to gain higher privileges through role changes, permission abuse, or risky access paths.",
    icon: ArrowUpRight,
    angle: 54, // Bottom Right
    anchor: "translate(20px, -20px)"
  },
  {
    id: 4,
    title: "Machine Identity Abuse",
    description: "Monitors non-human identities for excessive access, unusual activity, and unauthorized usage.",
    icon: Zap,
    angle: 126, // Bottom Left
    anchor: "translate(calc(-100% - 20px), -20px)"
  },
  {
    id: 5,
    title: "Risky Authentication Flows",
    description: "Detects insecure or abnormal authentication methods across SaaS and cloud environments.",
    icon: Lock,
    angle: 198, // Top Left
    anchor: "translate(calc(-100% - 20px), -50%)"
  }
];

export function IdentityThreatsPentagon() {
  const radius = 300;
  const containerRef = useRef<HTMLDivElement>(null);
  const [dims, setDims] = useState({ w: 1200, h: 900 });
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const ro = new ResizeObserver(entries => {
      const rect = entries[0].contentRect;
      setDims({ w: Math.round(rect.width), h: Math.round(rect.height) });
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);
  const center = { x: dims.w / 2, y: dims.h / 2 };

  const getPos = (angle: number, r: number = radius) => {
    const rad = (angle * Math.PI) / 180;
    return {
      x: center.x + r * Math.cos(rad),
      y: center.y + r * Math.sin(rad)
    };
  };

  // Cards will sit directly on the pentagon vertices
  const CARD_W = 400;

  return (
    <div className="w-full min-h-[1000px] flex items-center justify-center py-20 overflow-hidden relative">
      {/* Background Gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-900/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-3xl" />
      </div>

      <div ref={containerRef} className="relative w-[1200px] h-[900px]">
        {/* SVG Layer */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
          <defs>
            <linearGradient id="pentagonGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#1d4ed8" stopOpacity="0.05" />
            </linearGradient>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.2" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="2" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          
          {/* Rotating Rings */}
          <g transform={`translate(${center.x}, ${center.y})`}>
            <motion.circle 
              r={radius * 0.7} 
              fill="none" 
              stroke="#3b82f6" 
              strokeWidth="1" 
              strokeOpacity="0.1"
              strokeDasharray="10 10"
              animate={{ rotate: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            />
            <motion.circle 
              r={radius * 1.2} 
              fill="none" 
              stroke="#3b82f6" 
              strokeWidth="1" 
              strokeOpacity="0.05"
              animate={{ rotate: -360 }}
              transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
            />
          </g>

          {/* Main Pentagon */}
          <motion.path
            d={`
              M ${getPos(threats[0].angle).x} ${getPos(threats[0].angle).y}
              L ${getPos(threats[1].angle).x} ${getPos(threats[1].angle).y}
              L ${getPos(threats[2].angle).x} ${getPos(threats[2].angle).y}
              L ${getPos(threats[3].angle).x} ${getPos(threats[3].angle).y}
              L ${getPos(threats[4].angle).x} ${getPos(threats[4].angle).y}
              Z
            `}
            fill="url(#pentagonGradient)"
            stroke="#3b82f6"
            strokeWidth="2"
            strokeOpacity="0.5"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            filter="url(#glow)"
          />

          {/* Inner Connecting Lines (Star) */}
          {threats.map((threat, i) => {
            const pos = getPos(threat.angle);
            return (
              <motion.line
                key={`inner-${i}`}
                x1={center.x}
                y1={center.y}
                x2={pos.x}
                y2={pos.y}
                stroke="#3b82f6"
                strokeWidth="1"
                strokeOpacity="0.3"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
              />
            );
          })}

          {/* Vertex Dots */}
          {threats.map((threat, i) => {
            const vertexPos = getPos(threat.angle);
            return (
              <circle key={`vertex-${i}`} cx={vertexPos.x} cy={vertexPos.y} r="4" fill="#60a5fa" />
            );
          })}
        </svg>

        {/* Central Icon */}
        <div 
          className="absolute w-24 h-24 bg-slate-900 border-2 border-blue-500 rounded-full flex items-center justify-center z-20 shadow-[0_0_50px_rgba(59,130,246,0.5)]"
          style={{ left: center.x - 48, top: center.y - 48 }}
        >
          <div className="absolute inset-0 rounded-full border border-blue-400/30 animate-ping opacity-20" />
          <ShieldAlert className="w-10 h-10 text-blue-400" />
        </div>

        {/* Threat Cards */}
        {threats.map((threat, i) => {
          const pos = getPos(threat.angle);
          
          return (
            <div
              key={threat.id}
              className="absolute z-30 flex items-center justify-center"
              style={{
                left: pos.x,
                top: pos.y,
                width: 0,
                height: 0
              }}
            >
              <motion.div
                style={{
                  width: `${CARD_W}px`,
                }}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.2 + i * 0.1 }}
                className="flex items-center justify-center"
              >
                <div className="relative w-full bg-slate-900/90 backdrop-blur-xl border border-blue-500/30 p-5 rounded-xl shadow-2xl hover:border-blue-400 transition-all group overflow-hidden flex flex-col">
                {/* Hover Glow */}
                <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="flex items-start gap-4 relative z-10 w-full">
                  <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center shrink-0 border border-blue-500/20 group-hover:scale-110 transition-transform">
                    <threat.icon className="w-5 h-5 text-blue-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-white font-bold text-base mb-1 truncate">{threat.title}</h3>
                    <p className="text-slate-400 text-xs leading-relaxed">{threat.description}</p>
                  </div>
                </div>
              </div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
