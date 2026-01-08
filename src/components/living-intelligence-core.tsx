"use client";

import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { 
  User, 
  Bot, 
  ShieldAlert, 
  Globe, 
  Database, 
  LayoutGrid,
  Key,
  Briefcase,
  FileCheck,
  Cloud,
  Server,
  Fingerprint
} from "lucide-react";

// --- HELPERS ---

// Draw an annular sector (ring segment)
function getSectorPath(cx: number, cy: number, rInner: number, rOuter: number, startAngle: number, endAngle: number) {
  const start = (startAngle * Math.PI) / 180;
  const end = (endAngle * Math.PI) / 180;

  // In SVG, y is down. -90deg is top.
  
  const x1 = cx + rOuter * Math.cos(start);
  const y1 = cy + rOuter * Math.sin(start);
  const x2 = cx + rOuter * Math.cos(end);
  const y2 = cy + rOuter * Math.sin(end);
  const x3 = cx + rInner * Math.cos(end);
  const y3 = cy + rInner * Math.sin(end);
  const x4 = cx + rInner * Math.cos(start);
  const y4 = cy + rInner * Math.sin(start);

  const largeArc = Math.abs(end - start) > Math.PI ? 1 : 0;

  return `
    M ${x1} ${y1}
    A ${rOuter} ${rOuter} 0 ${largeArc} 1 ${x2} ${y2}
    L ${x3} ${y3}
    A ${rInner} ${rInner} 0 ${largeArc} 0 ${x4} ${y4}
    Z
  `;
}

// Get center point of a sector (for icon placement)
function getSectorCenter(cx: number, cy: number, rInner: number, rOuter: number, startAngle: number, endAngle: number) {
  const midAngle = (startAngle + endAngle) / 2;
  const rad = (midAngle * Math.PI) / 180;
  const rMid = (rInner + rOuter) / 2;
  return {
    x: cx + rMid * Math.cos(rad),
    y: cy + rMid * Math.sin(rad)
  };
}

// --- COMPONENTS ---
//
type GlassIconProps = {
  Icon: React.ElementType;
  isActive: boolean;
};

const GlassIcon = ({ Icon, isActive }: GlassIconProps) => (
  <div className={`
    relative flex items-center justify-center w-10 h-10 rounded-xl
    bg-gradient-to-b from-white/95 to-cyan-50/50
    border border-white/80
    shadow-[0_4px_10px_rgba(0,0,0,0.05),inset_0_1px_0_rgba(255,255,255,0.8)]
    backdrop-blur-sm
    transition-all duration-300 ease-out
    ${isActive ? 'scale-110 shadow-[0_0_20px_rgba(34,211,238,0.4)] border-cyan-200' : 'scale-100'}
  `}>
    <Icon 
      size={20} 
      strokeWidth={1.8}
      className={`
        transition-colors duration-300
        ${isActive ? 'text-cyan-600' : 'text-blue-900/40'}
      `}
    />
  </div>
);

type SectorProps = {
  cx: number;
  cy: number;
  rInner: number;
  rOuter: number;
  startAngle: number;
  endAngle: number;
  fill: string;
  stroke: string;
  label?: string;
  icon?: React.ElementType;
  isActive: boolean;
};

const Sector = ({
  cx,
  cy,
  rInner,
  rOuter,
  startAngle,
  endAngle,
  fill,
  stroke,
  label,
  icon: Icon,
  isActive,
}: SectorProps) => {
  const center = getSectorCenter(cx, cy, rInner, rOuter, startAngle, endAngle);
  
  return (
    <g>
      <motion.path
        d={getSectorPath(cx, cy, rInner, rOuter, startAngle, endAngle)}
        fill={fill}
        stroke={stroke}
        strokeWidth="1"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ 
          opacity: isActive ? 1 : 0.8, 
          scale: isActive ? 1.02 : 1,
          filter: isActive ? "url(#glow)" : "none"
        }}
        transition={{ duration: 0.4 }}
        style={{ transformOrigin: `${cx}px ${cy}px` }}
      />
      
      {/* Icon & Label */}
      {Icon && (
        <foreignObject x={center.x - 20} y={center.y - 25} width="40" height="40" className="pointer-events-none">
           <div className="flex items-center justify-center w-full h-full">
              <GlassIcon Icon={Icon} isActive={isActive} />
           </div>
        </foreignObject>
      )}
      
      {label && (
         <foreignObject x={center.x - 40} y={center.y + 18} width="80" height="20" className="pointer-events-none">
            <div className={`text-[9px] font-bold uppercase tracking-wider text-center transition-all duration-300 ${isActive ? 'text-cyan-700' : 'text-blue-400/70'}`}>
              {label}
            </div>
         </foreignObject>
      )}
    </g>
  );
};


export function LivingIntelligenceCore() {
  const width = 600;
  const height = 600;
  const cx = width / 2;
  const cy = height / 2;

  // Radii
  const rCore = 80;
  const r1 = 160; // Identities
  const r2 = 230; // Access
  const r3 = 300; // Systems

  // Animation State for "Radar Scan"
  const [scanAngle, setScanAngle] = useState(0);

  useEffect(() => {
    // 360 degrees in ~8 seconds
    const interval = setInterval(() => {
      setScanAngle(prev => (prev + 1.5) % 360);
    }, 30);
    return () => clearInterval(interval);
  }, []);

  // Helper to check if a sector is currently "scanned"
  const isSectorActive = (start: number, end: number) => {
    // Normalize angles to 0-360
    const s = (start + 360) % 360;
    const e = (end + 360) % 360;
    const current = (scanAngle - 90 + 360) % 360; // Adjust for SVG rotation offset if needed

    // Check overlap
    if (s < e) return current >= s && current <= e;
    return current >= s || current <= e;
  };

  return (
    <div className="relative w-full h-full min-h-[600px] flex items-center justify-center overflow-visible">
      
      {/* 3D Perspective Container */}
      <div 
        className="relative w-[600px] h-[600px]" 
        style={{ 
          transform: "rotateX(25deg) rotateY(-10deg) scale(0.9)", 
          transformStyle: "preserve-3d" 
        }}
      >
        
        <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-full overflow-visible">
          <defs>
            {/* Gradients matching Platform Page */}
            <radialGradient id="coreGrad" cx="0.5" cy="0.5" r="0.5">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#172554" />
            </radialGradient>
            
            <linearGradient id="layer1Grad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#22D3EE" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#0891B2" stopOpacity="0.6" />
            </linearGradient>

            <linearGradient id="layer2Grad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#DBEAFE" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#60A5FA" stopOpacity="0.7" />
            </linearGradient>

            <linearGradient id="layer3Grad" x1="0" y1="0" x2="1" y2="1">
               <stop offset="0%" stopColor="#CFFAFE" stopOpacity="0.3" />
               <stop offset="100%" stopColor="#BAE6FD" stopOpacity="0.6" />
            </linearGradient>

            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
               <feGaussianBlur stdDeviation="3" result="blur" />
               <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
            
            <filter id="dropShadow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur in="SourceAlpha" stdDeviation="4" />
              <feOffset dx="0" dy="4" result="offsetblur" />
              <feComponentTransfer>
                <feFuncA type="linear" slope="0.2" />
              </feComponentTransfer>
              <feMerge>
                <feMergeNode />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* --- LAYER 3: SYSTEMS (Outer) --- */}
          <Sector cx={cx} cy={cy} rInner={r2 + 10} rOuter={r3} startAngle={-160} endAngle={-100} 
            fill="url(#layer3Grad)" stroke="#bae6fd" label="SaaS" icon={LayoutGrid}
            isActive={isSectorActive(-160, -100)} />
          <Sector cx={cx} cy={cy} rInner={r2 + 10} rOuter={r3} startAngle={-90} endAngle={-30} 
            fill="url(#layer3Grad)" stroke="#bae6fd" label="Cloud" icon={Cloud}
            isActive={isSectorActive(-90, -30)} />
          <Sector cx={cx} cy={cy} rInner={r2 + 10} rOuter={r3} startAngle={-20} endAngle={40} 
            fill="url(#layer3Grad)" stroke="#bae6fd" label="Data" icon={Database}
            isActive={isSectorActive(-20, 40)} />
          <Sector cx={cx} cy={cy} rInner={r2 + 10} rOuter={r3} startAngle={50} endAngle={110} 
            fill="url(#layer3Grad)" stroke="#bae6fd" label="Apps" icon={Globe}
            isActive={isSectorActive(50, 110)} />


          {/* --- LAYER 2: ACCESS (Middle) --- */}
          <Sector cx={cx} cy={cy} rInner={r1 + 10} rOuter={r2} startAngle={-170} endAngle={-120} 
            fill="url(#layer2Grad)" stroke="#60a5fa" label="Roles" icon={Briefcase}
            isActive={isSectorActive(-170, -120)} />
          <Sector cx={cx} cy={cy} rInner={r1 + 10} rOuter={r2} startAngle={-110} endAngle={-50} 
            fill="url(#layer2Grad)" stroke="#60a5fa" label="Policies" icon={FileCheck}
            isActive={isSectorActive(-110, -50)} />
          <Sector cx={cx} cy={cy} rInner={r1 + 10} rOuter={r2} startAngle={-40} endAngle={10} 
            fill="url(#layer2Grad)" stroke="#60a5fa" label="OAuth" icon={ShieldAlert}
            isActive={isSectorActive(-40, 10)} />
          <Sector cx={cx} cy={cy} rInner={r1 + 10} rOuter={r2} startAngle={20} endAngle={80} 
            fill="url(#layer2Grad)" stroke="#60a5fa" label="Keys" icon={Key}
            isActive={isSectorActive(20, 80)} />


          {/* --- LAYER 1: IDENTITIES (Inner) --- */}
          <Sector cx={cx} cy={cy} rInner={rCore + 15} rOuter={r1} startAngle={-150} endAngle={-30} 
            fill="url(#layer1Grad)" stroke="#06b6d4" label="Human" icon={User}
            isActive={isSectorActive(-150, -30)} />
          <Sector cx={cx} cy={cy} rInner={rCore + 15} rOuter={r1} startAngle={-20} endAngle={60} 
            fill="url(#layer1Grad)" stroke="#06b6d4" label="Machine" icon={Server}
            isActive={isSectorActive(-20, 60)} />
          <Sector cx={cx} cy={cy} rInner={rCore + 15} rOuter={r1} startAngle={70} endAngle={130} 
            fill="url(#layer1Grad)" stroke="#06b6d4" label="AI Agents" icon={Bot}
            isActive={isSectorActive(70, 130)} />


          {/* --- CORE --- */}
          <g filter="url(#dropShadow)">
             <circle cx={cx} cy={cy} r={rCore} fill="url(#coreGrad)" stroke="#2563EB" strokeWidth="2" />
             {/* Core Pulse Ring */}
             <circle cx={cx} cy={cy} r={rCore - 5} fill="none" stroke="white" strokeOpacity="0.2" strokeWidth="1">
               <animate attributeName="r" values={`${rCore-5};${rCore+10};${rCore-5}`} dur="3s" repeatCount="indefinite" />
               <animate attributeName="opacity" values="0.5;0;0.5" dur="3s" repeatCount="indefinite" />
             </circle>
             
             {/* Core Icon */}
             <foreignObject x={cx - 30} y={cy - 30} width="60" height="60" className="pointer-events-none">
                <div className="flex flex-col items-center justify-center w-full h-full text-white">
                   <Fingerprint size={32} strokeWidth={1.5} className="mb-1" />
                </div>
             </foreignObject>
          </g>

          {/* --- RADAR SWEEP (Overlay) --- */}
          <g style={{ transformOrigin: `${cx}px ${cy}px`, transform: `rotate(${scanAngle}deg)` }}>
             {/* The Beam */}
             <path 
               d={`M ${cx} ${cy} L ${cx + r3} ${cy} A ${r3} ${r3} 0 0 1 ${cx + r3 * Math.cos(45 * Math.PI/180)} ${cy + r3 * Math.sin(45 * Math.PI/180)} Z`}
               fill="url(#sweepGrad)"
               opacity="0.3"
             />
             {/* Leading Edge */}
             <line x1={cx} y1={cy} x2={cx + r3} y2={cy} stroke="white" strokeWidth="1" strokeOpacity="0.5" />
          </g>
          
          <defs>
             <linearGradient id="sweepGrad" x1="0" y1="1" x2="0" y2="0">
               <stop offset="0%" stopColor="#22D3EE" stopOpacity="0" />
               <stop offset="100%" stopColor="#22D3EE" stopOpacity="0.5" />
             </linearGradient>
          </defs>

        </svg>

        {/* Floating "Risk Detected" Toast - Appears occasionally */}
        <motion.div
           className="absolute top-[20%] right-[10%] bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-lg shadow-lg border border-red-100 flex items-center gap-2 z-20"
           initial={{ opacity: 0, y: 10, scale: 0.9 }}
           animate={{ 
             opacity: [0, 1, 1, 0], 
             y: [10, 0, 0, -10],
             scale: [0.9, 1, 1, 0.9] 
           }}
           transition={{ duration: 4, repeat: Infinity, repeatDelay: 5 }}
        >
           <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
           <span className="text-xs font-bold text-slate-700">Risk Detected</span>
        </motion.div>

      </div>
    </div>
  );
}
