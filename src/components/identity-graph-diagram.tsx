"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { User, Users, Key, Database, FileKey } from "lucide-react";

export function IdentityGraphDiagram() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // SVG dimensions
  const width = isMobile ? 400 : 800;
  const height = isMobile ? 800 : 500;

  // Node data with positions - Complex relationship flow
  const desktopNodes = [
    // Level 1 (Root) - Centered
    { id: "root", label: "Luka Horvat", sub: "IDENTITY", type: "identity", x: 400, y: 50 },
    
    // Level 2 - Primary Groups/Roles
    { id: "l2_1", label: "DevOps Team", sub: "GROUP", type: "group", x: 150, y: 180 },
    { id: "l2_2", label: "Interns", sub: "GROUP", type: "group", x: 400, y: 180 },
    { id: "l2_3", label: "Service Account", sub: "USER", type: "user", x: 650, y: 180 },

    // Level 3 - Licenses & Nested Groups
    { id: "l3_1", label: "Admin", sub: "ROLE", type: "group", x: 150, y: 310 },
    { id: "l3_2", label: "Jira License", sub: "LICENSE", type: "license", x: 300, y: 310 },
    { id: "l3_3", label: "Engineering", sub: "GROUP", type: "group", x: 500, y: 310 },

    // Level 4 - Critical Access & Resources
    { id: "l4_1", label: "AWS Keys", sub: "CRITICAL ASSET", type: "critical", x: 400, y: 440, alert: true },
    { id: "l4_2", label: "Prod DB", sub: "RESOURCE", type: "resource", x: 600, y: 440 },
  ];

  const mobileNodes = [
    // Level 1 (Root) - Centered
    { id: "root", label: "Luka Horvat", sub: "IDENTITY", type: "identity", x: 200, y: 50 },
    
    // Level 2 - Primary Groups/Roles
    { id: "l2_1", label: "DevOps Team", sub: "GROUP", type: "group", x: 100, y: 160 },
    { id: "l2_2", label: "Interns", sub: "GROUP", type: "group", x: 300, y: 160 },
    { id: "l2_3", label: "Service Account", sub: "USER", type: "user", x: 200, y: 260 },

    // Level 3 - Licenses & Nested Groups
    { id: "l3_1", label: "Admin", sub: "ROLE", type: "group", x: 100, y: 360 },
    { id: "l3_2", label: "Jira License", sub: "LICENSE", type: "license", x: 300, y: 360 },
    { id: "l3_3", label: "Engineering", sub: "GROUP", type: "group", x: 300, y: 460 },

    // Level 4 - Critical Access & Resources
    { id: "l4_1", label: "AWS Keys", sub: "CRITICAL ASSET", type: "critical", x: 200, y: 580, alert: true },
    { id: "l4_2", label: "Prod DB", sub: "RESOURCE", type: "resource", x: 200, y: 680 },
  ];

  const nodes = isMobile ? mobileNodes : desktopNodes;

  // Connections (source -> target)
  const connections = [
    // Root connections
    { from: "root", to: "l2_1" },
    { from: "root", to: "l2_2" },
    { from: "root", to: "l2_3" },
    
    // DevOps flow
    { from: "l2_1", to: "l3_1" },
    
    // Intern flow (Complex)
    { from: "l2_2", to: "l3_2" }, // Intern -> License
    { from: "l2_2", to: "l3_3" }, // Intern -> Engineering Group (Nesting)
    
    // Engineering flow to Critical Assets
    { from: "l3_3", to: "l4_1", highlight: true }, // Engineering -> AWS Keys (Critical)
    { from: "l3_3", to: "l4_2" }, // Engineering -> Prod DB
  ];

  return (
    <div className="w-full h-full relative overflow-hidden flex items-center justify-center p-4">
      {/* Background Grid - Subtle on light theme */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] bg-[size:32px_32px] opacity-30"></div>

      <div className="relative w-full max-w-[800px] aspect-[16/10]">
        <svg
          viewBox={`0 0 ${width} ${height}`}
          className="w-full h-full overflow-visible"
        >
          <defs>
            <linearGradient id="gradient-alert" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ef4444" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#ef4444" stopOpacity="0.4" />
            </linearGradient>
          </defs>

          {/* Connections */}
          {connections.map((conn, i) => {
            const start = nodes.find(n => n.id === conn.from)!;
            const end = nodes.find(n => n.id === conn.to)!;
            
            // Bezier Curve Logic
            // Start point: bottom center of source node
            const startX = start.x;
            const startY = start.y + 30; // Bottom of node card
            
            // End point: top center of target node
            const endX = end.x;
            const endY = end.y - 30; // Top of node card

            // Control points for smooth vertical hierarchy curve
            const midY = (startY + endY) / 2;
            
            const path = `M ${startX} ${startY} C ${startX} ${midY}, ${endX} ${midY}, ${endX} ${endY}`;

            return (
              <motion.path
                key={i}
                d={path}
                fill="none"
                stroke={conn.highlight ? "#ef4444" : "#94a3b8"}
                strokeWidth={conn.highlight ? 2 : 1.5}
                strokeDasharray={conn.highlight ? "0" : "4 4"} // Dashed lines for standard connections
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.2, delay: i * 0.1 }}
              />
            );
          })}

          {/* Nodes (rendered via foreignObject for perfect scaling sync) */}
          {nodes.map((node, i) => (
            <foreignObject
              key={node.id}
              x={node.x - 100}
              y={node.y - 50}
              width={200}
              height={100}
              className="overflow-visible"
            >
              <div className="w-full h-full flex items-center justify-center">
                <motion.div
                  className={`flex flex-col items-center justify-center p-2 rounded-xl border backdrop-blur-sm shadow-lg w-[160px] h-[60px] relative
                    ${node.type === 'identity' ? 'bg-white border-teal-200 shadow-teal-100' : ''}
                    ${node.type === 'compromised' ? 'bg-white border-blue-200 shadow-blue-100' : ''}
                    ${node.type === 'critical' ? 'bg-white border-red-200 shadow-red-100' : ''}
                    ${node.type === 'license' ? 'bg-white border-purple-200 shadow-purple-100' : ''}
                    ${['group', 'user', 'resource'].includes(node.type) ? 'bg-white border-slate-200 shadow-slate-100' : ''}
                  `}
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.4, delay: i * 0.1 + 0.5 }}
                >
                  {/* Alert Badge */}
                  {node.alert && (
                    <div className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center animate-pulse shadow-md shadow-red-200 z-20">
                      <span className="text-white text-xs font-bold">!</span>
                    </div>
                  )}
                  
                  {/* Content */}
                  <div className="flex items-center gap-3 w-full px-2">
                    <div className={`
                      w-9 h-9 rounded-lg flex items-center justify-center shrink-0 border
                      ${node.type === 'identity' ? 'bg-teal-50 text-teal-600 border-teal-100' : ''}
                      ${node.type === 'compromised' ? 'bg-blue-50 text-blue-600 border-blue-100' : ''}
                      ${node.type === 'critical' ? 'bg-red-50 text-red-600 border-red-100' : ''}
                      ${node.type === 'license' ? 'bg-purple-50 text-purple-600 border-purple-100' : ''}
                      ${['group', 'user', 'resource'].includes(node.type) ? 'bg-slate-50 text-slate-500 border-slate-100' : ''}
                    `}>
                      {node.type === 'identity' && <User size={18} />}
                      {node.type === 'compromised' && <User size={18} />}
                      {node.type === 'group' && <Users size={18} />}
                      {node.type === 'user' && <User size={18} />}
                      {node.type === 'critical' && <Key size={18} />}
                      {node.type === 'resource' && <Database size={18} />}
                      {node.type === 'license' && <FileKey size={18} />}
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className={`text-xs font-bold truncate leading-tight mb-0.5
                        ${node.type === 'identity' ? 'text-teal-900' : ''}
                        ${node.type === 'compromised' ? 'text-blue-900' : ''}
                        ${node.type === 'critical' ? 'text-red-900' : ''}
                        ${node.type === 'license' ? 'text-purple-900' : ''}
                        ${['group', 'user', 'resource'].includes(node.type) ? 'text-slate-700' : ''}
                      `}>{node.label}</span>
                      <span className={`text-[9px] font-bold tracking-wider uppercase truncate
                        ${node.type === 'identity' ? 'text-teal-500' : ''}
                        ${node.type === 'compromised' ? 'text-blue-500' : ''}
                        ${node.type === 'critical' ? 'text-red-500' : ''}
                        ${node.type === 'license' ? 'text-purple-500' : ''}
                        ${['group', 'user', 'resource'].includes(node.type) ? 'text-slate-400' : ''}
                      `}>{node.sub}</span>
                    </div>
                  </div>
                  
                  {/* Node Connector Dot - Top */}
                  {node.id !== 'root' && (
                      <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-slate-400 border border-white"></div>
                  )}
                  
                  {/* Node Connector Dot - Bottom */}
                  {connections.some(c => c.from === node.id) && (
                      <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-slate-400 border border-white"></div>
                  )}

                </motion.div>
              </div>
            </foreignObject>
          ))}
        </svg>
      </div>
    </div>
  );
}
