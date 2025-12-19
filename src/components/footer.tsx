"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-24 border-t border-slate-800 relative overflow-hidden w-full">
      {/* Background CYDENTI Text */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[20%] pointer-events-none select-none">
        <h1 className="text-[20vw] font-black tracking-tighter leading-none whitespace-nowrap bg-gradient-to-b from-transparent to-white/10 bg-clip-text" 
            style={{ 
              WebkitTextStroke: '2px rgba(30, 41, 59, 0.5)', 
              color: 'transparent' 
            }}>
          CYDENTI
        </h1>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Brand Column */}
          <div className="md:col-span-4 lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2 text-white font-bold text-xl tracking-tight">
              {/* White Logo */}
              <Image src="/cydenti-logo-white.svg" alt="Cydenti" width={120} height={32} />
            </div>
            <p className="text-sm leading-relaxed max-w-xs text-slate-500">
              The sovereign intelligence layer for identity security. Built for privacy, automation, and scale.
            </p>
            <div className="text-xs text-slate-600">
              &copy; {new Date().getFullYear()} Cydenti. All rights reserved.
            </div>
          </div>

          {/* Links Columns */}
          <div className="md:col-span-8 lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8">
            
            {/* Product */}
            <div className="space-y-4">
              <h3 className="text-white font-semibold text-sm tracking-wide">Product</h3>
              <ul className="space-y-3 text-sm">
                <li><Link href="#" className="hover:text-blue-400 transition-colors">Identity Threat Detection</Link></li>
                <li><Link href="#" className="hover:text-blue-400 transition-colors">SaaS Security Posture</Link></li>
                <li><Link href="#" className="hover:text-blue-400 transition-colors">Cloud Config Mgmt</Link></li>
                <li><Link href="#" className="hover:text-blue-400 transition-colors">Access Intelligence</Link></li>
                <li><Link href="#" className="hover:text-blue-400 transition-colors">Compliance & Reporting</Link></li>
              </ul>
            </div>

            {/* Company */}
            <div className="space-y-4">
              <h3 className="text-white font-semibold text-sm tracking-wide">Company</h3>
              <ul className="space-y-3 text-sm">
                <li><Link href="#" className="hover:text-blue-400 transition-colors">About Cydenti</Link></li>
                <li><Link href="#" className="hover:text-blue-400 transition-colors">Careers</Link></li>
                <li><Link href="#" className="hover:text-blue-400 transition-colors">Trust & Security</Link></li>
                <li><Link href="#" className="hover:text-blue-400 transition-colors">Contact</Link></li>
              </ul>
            </div>

            {/* Legal */}
            <div className="space-y-4">
              <h3 className="text-white font-semibold text-sm tracking-wide">Legal</h3>
              <ul className="space-y-3 text-sm">
                <li><Link href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</Link></li>
                <li><Link href="#" className="hover:text-blue-400 transition-colors">Terms of Use</Link></li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
}
