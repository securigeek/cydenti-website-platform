"use client";

import React from 'react';
import { motion } from "framer-motion";
import { 
  User, 
  Server, 
  Bot, 
  ShieldAlert, 
  Briefcase, 
  FileCheck, 
  Key, 
  Cloud, 
  Database, 
  LayoutGrid,
  Share2,
  Fingerprint
} from "lucide-react";

export function IdentityAttackSurfaceMap() {
  // Dimensions
  const width = 1000;
  const height = 550;
  const cx = width / 2;
  const cy = 520; // Bottom center
  
  // Radii for the layers (expanding outwards)
  const r1 = 140; // Core
  const r2 = 240; // Identities
  const r3 = 360; // Access
  const r4 = 480; // Systems

  // Colors based on theme
  const colors = {
    core: { start: "#0A4CFF", end: "#001F60" }, // Deep Blue
    layer1: { start: "#0CB7B8", end: "#065F60" }, // Cyan
    layer2: { start: "#E0F2FE", end: "#BAE6FD" }, // Light Blue
    layer3: { start: "#F8FAFC", end: "#E2E8F0" }, // Very Light / White
    textDark: "#1e293b",
    textLight: "#ffffff",
    accent: "#0A4CFF"
  };

  return (
    <section className="w-full bg-white py-24 flex flex-col items-center justify-center overflow-hidden">
      <div className="relative w-full max-w-[1000px] aspect-[16/10] flex items-end justify-center">
        <motion.svg
          viewBox={`0 0 ${width} ${height}`}
          className="w-full h-full max-w-[900px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <defs>
            {/* 3D Gradients to match the reference image style */}
            
            {/* Core Gradient (Dark Blue Sphere) */}
            <radialGradient id="gradCore" cx="0.5" cy="0.2" r="0.8">
              <stop offset="0%" stopColor="#2563EB" />
              <stop offset="100%" stopColor="#001540" />
            </radialGradient>

            {/* Layer 1 Gradient (Cyan Ring) */}
            <linearGradient id="gradLayer1" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#22D3EE" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#0891B2" stopOpacity="0.8" />
            </linearGradient>
            
             {/* Layer 2 Gradient (Light Blue Ring) */}
             <linearGradient id="gradLayer2" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#EFF6FF" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#DBEAFE" stopOpacity="1" />
            </linearGradient>

             {/* Layer 3 Gradient (Outer Fade) */}
             <linearGradient id="gradLayer3" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#F8FAFC" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#F1F5F9" stopOpacity="0.8" />
            </linearGradient>

            {/* Shadows */}
            <filter id="dropShadow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur in="SourceAlpha" stdDeviation="4" />
              <feOffset dx="0" dy="4" result="offsetblur" />
              <feComponentTransfer>
                <feFuncA type="linear" slope="0.3" />
              </feComponentTransfer>
              <feMerge>
                <feMergeNode />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            
            {/* Outer Text Path */}
             <path id="textArc" d={`M ${cx - r4 - 20}, ${cy} A ${r4 + 20},${r4 + 20} 0 0,1 ${cx + r4 + 20},${cy}`} />
          </defs>

          {/* --- LAYERS (Back to Front) --- */}

          {/* Layer 3: Systems (Outer) */}
          <LayerArc 
            cx={cx} cy={cy} rInner={r3} rOuter={r4} 
            fill="url(#gradLayer3)" 
            delay={0.2} 
            stroke="#cbd5e1"
          />
          {/* Layer 3 Dividers */}
          <Divider cx={cx} cy={cy} rInner={r3} rOuter={r4} angle={-135} />
          <Divider cx={cx} cy={cy} rInner={r3} rOuter={r4} angle={-90} />
          <Divider cx={cx} cy={cy} rInner={r3} rOuter={r4} angle={-45} />

          {/* Layer 2: Access (Middle) */}
          <LayerArc 
            cx={cx} cy={cy} rInner={r2} rOuter={r3} 
            fill="url(#gradLayer2)" 
            delay={0.4} 
            stroke="#93c5fd"
            filter="url(#dropShadow)"
          />
          {/* Layer 2 Dividers */}
          <Divider cx={cx} cy={cy} rInner={r2} rOuter={r3} angle={-150} />
          <Divider cx={cx} cy={cy} rInner={r2} rOuter={r3} angle={-110} />
          <Divider cx={cx} cy={cy} rInner={r2} rOuter={r3} angle={-70} />
          <Divider cx={cx} cy={cy} rInner={r2} rOuter={r3} angle={-30} />

          {/* Layer 1: Identities (Inner) */}
          <LayerArc 
            cx={cx} cy={cy} rInner={r1} rOuter={r2} 
            fill="url(#gradLayer1)" 
            delay={0.6} 
            stroke="#0891b2"
            filter="url(#dropShadow)"
          />
           {/* Layer 1 Dividers */}
           <Divider cx={cx} cy={cy} rInner={r1} rOuter={r2} angle={-120} />
           <Divider cx={cx} cy={cy} rInner={r1} rOuter={r2} angle={-60} />

          {/* Core: Identity Graph */}
          <motion.path
            d={`M ${cx - r1}, ${cy} A ${r1},${r1} 0 0,1 ${cx + r1},${cy} Z`}
            fill="url(#gradCore)"
            filter="url(#dropShadow)"
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            style={{ transformOrigin: `${cx}px ${cy}px` }}
            transition={{ duration: 0.8, ease: "backOut" }}
          />
          
          {/* Core Icon & Label */}
          <foreignObject x={cx - 60} y={cy - 80} width="120" height="80">
            <motion.div 
              className="flex flex-col items-center justify-center h-full text-white"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <Fingerprint className="w-10 h-10 mb-2 opacity-90" strokeWidth={1.5} />
              <div className="text-sm font-bold uppercase tracking-wider text-center leading-tight">Cydenti Core<br/>Platform</div>
            </motion.div>
          </foreignObject>

          {/* --- CONTENT (Icons & Labels) --- */}

          {/* Ring 1 Content: Identities */}
          <ContentItem cx={cx} cy={cy} r={(r1+r2)/2} angle={-150} label="Human" icon={User} color="white" delay={0.9} />
          <ContentItem cx={cx} cy={cy} r={(r1+r2)/2} angle={-90} label="Machine" icon={Server} color="white" delay={1.0} />
          <ContentItem cx={cx} cy={cy} r={(r1+r2)/2} angle={-30} label="AI Agents" icon={Bot} color="white" delay={1.1} />

          {/* Ring 2 Content: Access */}
          <ContentItem cx={cx} cy={cy} r={(r2+r3)/2} angle={-165} label="Permissions" icon={Key} color={colors.textDark} delay={1.2} />
          <ContentItem cx={cx} cy={cy} r={(r2+r3)/2} angle={-130} label="Roles" icon={Briefcase} color={colors.textDark} delay={1.3} />
          <ContentItem cx={cx} cy={cy} r={(r2+r3)/2} angle={-90} label="Policies" icon={FileCheck} color={colors.textDark} delay={1.4} />
          <ContentItem cx={cx} cy={cy} r={(r2+r3)/2} angle={-50} label="OAuth" icon={ShieldAlert} color={colors.textDark} delay={1.5} />
          <ContentItem cx={cx} cy={cy} r={(r2+r3)/2} angle={-15} label="Grants" icon={Share2} color={colors.textDark} delay={1.6} />

          {/* Ring 3 Content: Systems */}
          <ContentItem cx={cx} cy={cy} r={(r3+r4)/2} angle={-160} label="SaaS" icon={LayoutGrid} color={colors.textDark} delay={1.7} />
          <ContentItem cx={cx} cy={cy} r={(r3+r4)/2} angle={-120} label="Cloud" icon={Cloud} color={colors.textDark} delay={1.8} />
          <ContentItem cx={cx} cy={cy} r={(r3+r4)/2} angle={-60} label="Data" icon={Database} color={colors.textDark} delay={1.9} />
          <ContentItem cx={cx} cy={cy} r={(r3+r4)/2} angle={-20} label="Apps" icon={Share2} color={colors.textDark} delay={2.0} />

          {/* Outer Title */}
          <motion.text
            dy="-20"
            fill={colors.accent}
            className="text-lg font-bold tracking-[0.2em] uppercase"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 2.2, duration: 1 }}
          >
            <textPath href="#textArc" startOffset="50%" textAnchor="middle">
              Identity Attack Surface
            </textPath>
          </motion.text>

        </motion.svg>
      </div>
      <motion.p 
        className="text-center text-slate-500 mt-0 max-w-xl px-4 italic text-lg font-light"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 2.5, duration: 0.8 }}
      >
        “Identity risk isn’t inside one system — it grows as access expands outward.”
      </motion.p>
    </section>
  );
}

// Helper for drawing an annular sector path
function getSectorPath(cx: number, cy: number, rInner: number, rOuter: number, startAngle: number, endAngle: number) {
  // SVG angle conversion (degrees to radians)
  const start = (startAngle * Math.PI) / 180;
  const end = (endAngle * Math.PI) / 180;

  // Calculate points
  // Note: cy - r * sin(a) because y axis is inverted in SVG relative to standard cartesian, 
  // but we want -90 to be top. 
  // Standard Math: x = r*cos(a), y = r*sin(a).
  // If we use standard angles: -180 (left), -90 (top), 0 (right).
  
  const x1 = cx + rOuter * Math.cos(start);
  const y1 = cy + rOuter * Math.sin(start);
  
  const x2 = cx + rOuter * Math.cos(end);
  const y2 = cy + rOuter * Math.sin(end);
  
  const x3 = cx + rInner * Math.cos(end);
  const y3 = cy + rInner * Math.sin(end);
  
  const x4 = cx + rInner * Math.cos(start);
  const y4 = cy + rInner * Math.sin(start);

  // Large arc flag
  const largeArc = Math.abs(end - start) > Math.PI ? 1 : 0;

  return `
    M ${x1} ${y1}
    A ${rOuter} ${rOuter} 0 ${largeArc} 1 ${x2} ${y2}
    L ${x3} ${y3}
    A ${rInner} ${rInner} 0 ${largeArc} 0 ${x4} ${y4}
    Z
  `;
}

// Component for a layer arc
function LayerArc({
  cx,
  cy,
  rInner,
  rOuter,
  fill,
  delay,
  stroke,
  filter,
}: {
  cx: number
  cy: number
  rInner: number
  rOuter: number
  fill: string
  delay: number
  stroke?: string
  filter?: string
}) {
  return (
    <motion.path
      d={getSectorPath(cx, cy, rInner, rOuter, -180, 0)}
      fill={fill}
      stroke={stroke}
      strokeWidth="1"
      filter={filter}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      style={{ transformOrigin: `${cx}px ${cy}px` }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
    />
  );
}

// Component for dividers
function Divider({
  cx,
  cy,
  rInner,
  rOuter,
  angle,
}: {
  cx: number
  cy: number
  rInner: number
  rOuter: number
  angle: number
}) {
  const rad = (angle * Math.PI) / 180;
  const x1 = cx + rInner * Math.cos(rad);
  const y1 = cy + rInner * Math.sin(rad);
  const x2 = cx + rOuter * Math.cos(rad);
  const y2 = cy + rOuter * Math.sin(rad);
  
  return (
    <motion.line
      x1={x1} y1={y1} x2={x2} y2={y2}
      stroke="white"
      strokeWidth="2"
      strokeOpacity="0.5"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
    />
  );
}

// Component for Content (Icon + Label)
function ContentItem({
  cx,
  cy,
  r,
  angle,
  label,
  icon: Icon,
  color,
  delay,
}: {
  cx: number
  cy: number
  r: number
  angle: number
  label: string
  icon: React.ElementType
  color: string
  delay: number
}) {
  const rad = (angle * Math.PI) / 180;
  const x = cx + r * Math.cos(rad);
  const y = cy + r * Math.sin(rad);
  
  return (
    <foreignObject x={x - 30} y={y - 30} width="60" height="60">
      <motion.div 
        className="flex flex-col items-center justify-center h-full"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay, type: "spring" }}
      >
        <div 
          className="p-2 rounded-xl mb-1 shadow-sm backdrop-blur-sm"
          style={{ 
            backgroundColor: color === 'white' ? 'rgba(255,255,255,0.2)' : 'white',
            color: color === 'white' ? 'white' : '#0A4CFF'
          }}
        >
          <Icon size={20} strokeWidth={2} />
        </div>
        <span 
          className="text-[10px] font-bold uppercase tracking-wider text-center leading-tight"
          style={{ color: color }}
        >
          {label}
        </span>
      </motion.div>
    </foreignObject>
  );
}
