"use client";

import React from 'react';
import { motion } from "framer-motion";
import { Eye, Bot, ShieldCheck } from 'lucide-react';
import { cn } from "@/lib/utils";

const solutions = [
  {
    title: "Unified Visibility",
    description: "Get a single pane of glass for all your identities across SaaS and cloud. Identify vulnerabilities, track user behavior, and visualize access paths in one intuitive dashboard.",
    icon: Eye,
    color: "bg-cydenti-primary",
    illustration: (
      <svg className="w-full h-full rounded-xl" viewBox="0 0 500 300" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="500" height="300" fill="#F8FAFC" />
        
        {/* Soft Background Gradients */}
        <circle cx="450" cy="50" r="150" fill="var(--color-cydenti-secondary)" opacity="0.1" filter="url(#blur-soft)" />
        <circle cx="50" cy="250" r="120" fill="var(--color-cydenti-primary)" opacity="0.1" filter="url(#blur-soft)" />
        
        <defs>
          <filter id="blur-soft" x="-100" y="-100" width="1000" height="1000">
            <feGaussianBlur stdDeviation="50" />
          </filter>
          <filter id="drop-shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#64748B" floodOpacity="0.1" />
          </filter>
          <linearGradient id="glass-surface" x1="0" y1="0" x2="1" y2="1">
             <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.8" />
             <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.4" />
          </linearGradient>
        </defs>

        {/* Sidebar */}
        <rect x="20" y="20" width="60" height="260" rx="12" fill="white" fillOpacity="0.6" stroke="white" strokeWidth="1" filter="url(#drop-shadow)" />
        <circle cx="50" cy="50" r="12" fill="var(--color-cydenti-primary)" />
        <rect x="35" y="90" width="30" height="4" rx="2" fill="#CBD5E1" />
        <rect x="35" y="110" width="30" height="4" rx="2" fill="#E2E8F0" />
        <rect x="35" y="130" width="30" height="4" rx="2" fill="#E2E8F0" />

        {/* Top Navigation */}
        <rect x="100" y="20" width="380" height="50" rx="12" fill="white" fillOpacity="0.6" stroke="white" strokeWidth="1" filter="url(#drop-shadow)" />
        <rect x="120" y="40" width="100" height="10" rx="5" fill="#E2E8F0" />
        <circle cx="450" cy="45" r="10" fill="#CBD5E1" />

        {/* Dashboard Cards - Enhanced Glassmorphism */}
        {/* Card 1: Risk Score */}
        <g transform="translate(100, 90)">
            <rect width="120" height="100" rx="12" fill="url(#glass-surface)" stroke="white" strokeWidth="1" filter="url(#drop-shadow)" />
            <text x="15" y="25" fill="#64748B" fontSize="11" fontFamily="sans-serif" fontWeight="bold">RISK SCORE</text>
            <text x="15" y="65" fill="#1E293B" fontSize="32" fontFamily="sans-serif" fontWeight="bold">85</text>
            <text x="60" y="65" fill="#94A3B8" fontSize="14" fontFamily="sans-serif">/100</text>
            <rect x="15" y="80" width="90" height="4" rx="2" fill="#E2E8F0" />
            <rect x="15" y="80" width="70" height="4" rx="2" fill="var(--color-cydenti-primary)" />
        </g>
        
        {/* Card 2: Identities */}
        <g transform="translate(230, 90)">
            <rect width="120" height="100" rx="12" fill="url(#glass-surface)" stroke="white" strokeWidth="1" filter="url(#drop-shadow)" />
            <text x="15" y="25" fill="#64748B" fontSize="11" fontFamily="sans-serif" fontWeight="bold">IDENTITIES</text>
            <text x="15" y="65" fill="#1E293B" fontSize="32" fontFamily="sans-serif" fontWeight="bold">12k</text>
        </g>
        
        {/* Card 3: Apps */}
        <g transform="translate(360, 90)">
            <rect width="120" height="100" rx="12" fill="url(#glass-surface)" stroke="white" strokeWidth="1" filter="url(#drop-shadow)" />
            <text x="15" y="25" fill="#64748B" fontSize="11" fontFamily="sans-serif" fontWeight="bold">APPS</text>
            <text x="15" y="65" fill="#1E293B" fontSize="32" fontFamily="sans-serif" fontWeight="bold">142</text>
        </g>

        {/* List View Area (Replaced Sankey) */}
        <g transform="translate(100, 210)">
            <rect width="380" height="70" rx="12" fill="white" fillOpacity="0.4" stroke="white" strokeWidth="1" />
            
            {/* List Items */}
            <rect x="20" y="15" width="24" height="24" rx="6" fill="#F1F5F9" />
            <rect x="55" y="20" width="80" height="6" rx="3" fill="#CBD5E1" />
            <rect x="55" y="32" width="50" height="4" rx="2" fill="#E2E8F0" />
            <rect x="280" y="22" width="80" height="6" rx="3" fill="#E2E8F0" />
            
            <rect x="20" y="45" width="24" height="24" rx="6" fill="#F1F5F9" />
            <rect x="55" y="50" width="70" height="6" rx="3" fill="#CBD5E1" />
            <rect x="55" y="62" width="40" height="4" rx="2" fill="#E2E8F0" />
            <rect x="300" y="52" width="60" height="6" rx="3" fill="#E2E8F0" />
            
            <circle cx="200" cy="35" r="2" fill="#94A3B8" />
            <circle cx="200" cy="45" r="2" fill="#94A3B8" />
        </g>
      </svg>
    )
  },
  {
    title: "Automated Governance",
    description: "Automate access reviews and policy enforcement. Create custom workflows to certify access, revoke unused permissions, and ensure continuous compliance without the manual headache.",
    icon: Bot,
    color: "bg-cydenti-secondary",
    illustration: (
      <svg className="w-full h-full rounded-xl" viewBox="0 0 500 300" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="500" height="300" fill="#F8FAFC" />
        
        {/* Soft Background Gradients */}
        <circle cx="250" cy="150" r="180" fill="#E0F2FE" opacity="0.5" filter="url(#blur-soft)" />

        {/* Header - Policy Builder */}
        <rect x="20" y="20" width="460" height="60" rx="12" fill="white" fillOpacity="0.8" stroke="white" strokeWidth="1" filter="url(#drop-shadow)" />
        <text x="40" y="55" fill="#1E293B" fontSize="16" fontFamily="sans-serif" fontWeight="bold">Access Certification Policy</text>
        <rect x="400" y="38" width="60" height="24" rx="12" fill="#E0F2FE" />
        <text x="430" y="54" textAnchor="middle" fill="#0284C7" fontSize="11" fontFamily="sans-serif" fontWeight="bold">ACTIVE</text>

        {/* Logic Flow - Light Glass Cards */}
        <g transform="translate(50, 110)">
            {/* If Condition */}
            <rect x="0" y="0" width="120" height="90" rx="12" fill="url(#glass-surface)" stroke="white" strokeWidth="1" filter="url(#drop-shadow)" />
            <text x="15" y="30" fill="#64748B" fontSize="10" fontFamily="sans-serif" fontWeight="bold">IF CONDITION</text>
            <text x="15" y="55" fill="#1E293B" fontSize="13" fontFamily="sans-serif">Inactive for</text>
            <text x="15" y="75" fill="#0284C7" fontSize="14" fontFamily="sans-serif" fontWeight="bold">90 Days</text>
            
            {/* Connector */}
            <path d="M120 45 L160 45" stroke="#94A3B8" strokeWidth="2" strokeDasharray="4 4" />
        </g>

        <g transform="translate(210, 110)">
            {/* Then Action */}
            <rect x="0" y="0" width="120" height="90" rx="12" fill="url(#glass-surface)" stroke="white" strokeWidth="1" filter="url(#drop-shadow)" />
            <text x="15" y="30" fill="#64748B" fontSize="10" fontFamily="sans-serif" fontWeight="bold">THEN ACTION</text>
            <text x="15" y="55" fill="#1E293B" fontSize="13" fontFamily="sans-serif">Revoke Access</text>
            <text x="15" y="75" fill="#0284C7" fontSize="14" fontFamily="sans-serif" fontWeight="bold">Immediately</text>
            
            {/* Connector */}
            <path d="M120 45 L160 45" stroke="#94A3B8" strokeWidth="2" strokeDasharray="4 4" />
        </g>

        <g transform="translate(370, 110)">
            {/* Outcome */}
            <rect x="0" y="0" width="100" height="90" rx="12" fill="url(#glass-surface)" stroke="white" strokeWidth="1" filter="url(#drop-shadow)" />
            <text x="15" y="30" fill="#64748B" fontSize="10" fontFamily="sans-serif" fontWeight="bold">OUTCOME</text>
            <circle cx="50" cy="60" r="16" fill="#E0F2FE" />
            <path d="M42 60 L48 66 L58 54" stroke="#0284C7" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </g>

        {/* Status Bar */}
        <g transform="translate(20, 230)">
             <rect x="0" y="0" width="460" height="50" rx="12" fill="white" fillOpacity="0.6" stroke="white" strokeWidth="1" />
             <circle cx="25" cy="25" r="5" fill="#10B981" />
             <text x="45" y="30" fill="#475569" fontSize="13" fontFamily="sans-serif" fontWeight="medium">Auto-remediation completed: 15 accounts processed</text>
        </g>
      </svg>
    )
  },
  {
    title: "Threat Detection",
    description: "Detect and respond to identity threats in real-time. Our AI analyzes behavioral signals to flag suspicious logins, privilege escalation, and shadow admin creation before damage occurs.",
    icon: ShieldCheck,
    color: "bg-cydenti-primary",
    illustration: (
      <svg className="w-full h-full rounded-xl" viewBox="0 0 500 300" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="500" height="300" fill="#F8FAFC" />
        
        {/* Soft Background Gradients */}
        <circle cx="100" cy="200" r="150" fill="#E0F2FE" opacity="0.5" filter="url(#blur-soft)" />
        <circle cx="400" cy="100" r="120" fill="#DBEAFE" opacity="0.5" filter="url(#blur-soft)" />

        {/* Background Grid */}
        <path d="M0 50 H500 M0 100 H500 M0 150 H500 M0 200 H500 M0 250 H500" stroke="#E2E8F0" strokeWidth="1" />
        <path d="M50 0 V300 M100 0 V300 M150 0 V300 M200 0 V300 M250 0 V300 M300 0 V300 M350 0 V300 M400 0 V300 M450 0 V300" stroke="#E2E8F0" strokeWidth="1" />

        {/* Radar/Scan Effect - Subtle */}
        <circle cx="250" cy="150" r="100" stroke="#3B82F6" strokeWidth="1" strokeOpacity="0.1" fill="none" />
        <circle cx="250" cy="150" r="60" stroke="#3B82F6" strokeWidth="1" strokeOpacity="0.1" fill="none" />
        
        {/* Signal Stream Graph */}
        <path d="M0 180 Q 80 180, 120 150 T 250 140 T 380 160 T 500 150" stroke="#3B82F6" strokeWidth="3" fill="none" filter="url(#drop-shadow)" />
        <path d="M0 180 Q 80 180, 120 150 T 250 140 T 380 160 T 500 150 V 300 H 0 Z" fill="url(#gradient-blue-threat)" opacity="0.1" />
        
        <defs>
           <linearGradient id="gradient-blue-threat" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
           </linearGradient>
        </defs>

        {/* Glassmorphic Alert Cards */}
        <g transform="translate(300, 50)">
            <rect x="0" y="0" width="160" height="70" rx="12" fill="white" fillOpacity="0.9" stroke="white" strokeWidth="1" filter="url(#drop-shadow)" />
            <rect x="0" y="0" width="6" height="70" rx="3" fill="#0EA5E9" />
            <text x="20" y="25" fill="#0EA5E9" fontSize="10" fontFamily="sans-serif" fontWeight="bold" letterSpacing="1">ANOMALY DETECTED</text>
            <text x="20" y="50" fill="#1E293B" fontSize="13" fontFamily="sans-serif" fontWeight="bold">Privilege Escalation</text>
        </g>
        
        <g transform="translate(60, 200)">
             <rect x="0" y="0" width="140" height="50" rx="12" fill="white" fillOpacity="0.8" stroke="white" strokeWidth="1" filter="url(#drop-shadow)" />
             <circle cx="20" cy="25" r="4" fill="#3B82F6" />
             <text x="35" y="30" fill="#64748B" fontSize="12" fontFamily="sans-serif" fontWeight="medium">Signal Monitoring...</text>
        </g>

        {/* Data Points */}
        <circle cx="120" cy="150" r="5" fill="white" stroke="#3B82F6" strokeWidth="2" />
        <circle cx="250" cy="140" r="5" fill="white" stroke="#3B82F6" strokeWidth="2" />
        <circle cx="380" cy="160" r="6" fill="#0EA5E9" stroke="white" strokeWidth="2" />

      </svg>
    )
  }
];

export function SolutionCore() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-24 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            How Cydenti Solves It
          </h2>
          <p className="text-xl text-gray-600">
            A complete platform to secure your identity perimeter from end to end.
          </p>
        </div>

        <div className="flex flex-col gap-24 lg:gap-32">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className={cn(
                "flex flex-col gap-12 items-center",
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              )}
            >
              {/* Text Content */}
              <div className="flex-1 space-y-8">
                <div className={cn(
                  "w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-lg",
                  solution.color
                )}>
                  <solution.icon className="w-6 h-6" />
                </div>
                
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                    {solution.title}
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
                    {solution.description}
                  </p>
                </div>

                <div className="pt-4">
                  <div className="h-1 w-24 rounded-full bg-gradient-to-r from-gray-200 to-transparent" />
                </div>
              </div>

              {/* Illustration Card */}
              <div className="flex-1 w-full">
                <div className="relative rounded-3xl p-4 bg-gray-50/50 border border-gray-100 shadow-xl transform transition-transform hover:scale-[1.02] duration-500">
                    <div className="rounded-2xl overflow-hidden aspect-[5/3] bg-white relative shadow-sm">
                        {solution.illustration}
                    </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
