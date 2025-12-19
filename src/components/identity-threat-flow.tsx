"use client";

import React from 'react';
import { motion } from "framer-motion";
import { 
  Users, 
  Lock, 
  FileSearch, 
  Share2, 
  ShieldAlert
} from "lucide-react";

export function IdentityThreatFlow() {
  // Dimensions
  const width = 1000;
  const height = 400;
  
  // Node positions
  const nodes = [
    { id: "identity", label: "Identity", icon: Users, x: 100, y: 200, color: "#3b82f6" },
    { id: "context", label: "Access Context", icon: Lock, x: 300, y: 120, color: "#0ea5e9" },
    { id: "behavior", label: "Behavior", icon: FileSearch, x: 500, y: 280, color: "#6366f1" },
    { id: "exposure", label: "Exposure", icon: Share2, x: 700, y: 120, color: "#8b5cf6" },
    { id: "impact", label: "Impact", icon: ShieldAlert, x: 900, y: 200, color: "#ec4899" }
  ];

  // Path definition - smooth curve connecting the nodes
  const pathData = `
    M ${nodes[0].x} ${nodes[0].y}
    C ${nodes[0].x + 100} ${nodes[0].y}, ${nodes[1].x - 100} ${nodes[1].y}, ${nodes[1].x} ${nodes[1].y}
    C ${nodes[1].x + 100} ${nodes[1].y}, ${nodes[2].x - 100} ${nodes[2].y}, ${nodes[2].x} ${nodes[2].y}
    C ${nodes[2].x + 100} ${nodes[2].y}, ${nodes[3].x - 100} ${nodes[3].y}, ${nodes[3].x} ${nodes[3].y}
    C ${nodes[3].x + 100} ${nodes[3].y}, ${nodes[4].x - 100} ${nodes[4].y}, ${nodes[4].x} ${nodes[4].y}
  `;

  return (
    <div className="w-full flex items-center justify-center py-12 overflow-hidden">
      <div className="relative w-full max-w-[1000px] aspect-[1000/400]">
        <motion.svg
          viewBox={`0 0 ${width} ${height}`}
          className="w-full h-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="50%" stopColor="#06B6D4" />
              <stop offset="100%" stopColor="#2563EB" />
            </linearGradient>
            
            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Connecting Line */}
          <motion.path
            d={pathData}
            fill="none"
            stroke="url(#lineGradient)"
            strokeWidth="6"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            filter="url(#glow)"
          />

          {/* Nodes */}
          {nodes.map((node, index) => (
            <Node 
              key={node.id} 
              node={node} 
              index={index} 
            />
          ))}
        </motion.svg>
      </div>
    </div>
  );
}

type NodeDef = {
  id: string
  label: string
  icon: React.ElementType
  x: number
  y: number
  color: string
}

function Node({ node, index }: { node: NodeDef, index: number }) {
  return (
    <g>
      {/* Outer Circle/Glow */}
      <motion.circle
        cx={node.x}
        cy={node.y}
        r="40"
        fill="white"
        fillOpacity="0.1"
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2 + index * 0.2, type: "spring" }}
      />
      
      {/* Icon Background */}
      <motion.circle
        cx={node.x}
        cy={node.y}
        r="24"
        fill="white"
        filter="url(#glow)"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ delay: 0.3 + index * 0.2, type: "spring", stiffness: 200 }}
      />

      {/* Icon */}
      <foreignObject x={node.x - 24} y={node.y - 24} width="48" height="48">
        <motion.div
          className="flex items-center justify-center w-full h-full text-slate-700"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 + index * 0.2 }}
        >
          <node.icon size={24} color={node.color} />
        </motion.div>
      </foreignObject>

      {/* Label */}
      <motion.text
        x={node.x}
        y={node.y + 60}
        textAnchor="middle"
        className="text-sm font-bold fill-slate-700 uppercase tracking-wide"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 + index * 0.2 }}
      >
        {node.label}
      </motion.text>
    </g>
  );
}
