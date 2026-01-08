"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-24 border-t border-slate-800 relative overflow-hidden w-full">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[20%] pointer-events-none select-none">
        <h1
          className="text-[20vw] font-black font-sans tracking-tighter leading-none whitespace-nowrap bg-gradient-to-b from-transparent to-white/10 bg-clip-text"
          style={{
            WebkitTextStroke: "2px rgba(30, 41, 59, 0.5)",
            color: "transparent",
          }}
        >
          CYDENTI
        </h1>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8">
          <div className="md:col-span-4 lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2 text-white font-bold text-xl tracking-tight">
              <Image
                src="/cydenti-logo-white.svg"
                alt="Cydenti"
                width={120}
                height={32}
              />
            </div>
            <p className="text-sm leading-relaxed max-w-xs text-slate-500">
              The sovereign intelligence layer for identity security. Built for
              privacy, automation, and scale.
            </p>
            <div className="text-sm text-slate-500">
              6 RUE D&apos;ARMAILLE, 75017 PARIS
            </div>
            <div className="text-xs text-slate-600">
              &copy; {new Date().getFullYear()} Cydenti. All rights reserved.
            </div>
          </div>

          <div className="md:col-span-8 lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h3 className="text-white font-semibold text-sm tracking-wide">
                Platform
              </h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link
                    href="/platform/itdr"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Identity Threat Detection
                  </Link>
                </li>
                <li>
                  <Link
                    href="/platform/ispm"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Identity Security Posture Management
                  </Link>
                </li>
                <li>
                  <Link
                    href="/platform/cloud-identity-exposure"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Cloud Identity Exposure
                  </Link>
                </li>
                <li>
                  <Link
                    href="/platform/oauth-risk-management"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Third-Party & OAuth Risk
                  </Link>
                </li>
                <li>
                  <Link
                    href="/platform/identity-risk-scoring"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Identity Risk Scoring
                  </Link>
                </li>
                <li>
                  <Link
                    href="/platform/compliance-reporting"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Compliance & Reporting
                  </Link>
                </li>
                <li>
                  <Link
                    href="/platform/identity-graph"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Identity Graph
                  </Link>
                </li>
                <li>
                  <Link
                    href="/platform/ai-risk-engine"
                    className="hover:text-blue-400 transition-colors"
                  >
                    AI Risk Engine
                  </Link>
                </li>
                <li>
                  <Link
                    href="/platform/integrations"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Integrations
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-white font-semibold text-sm tracking-wide">
                  Solution
                </h3>
                <ul className="space-y-3 text-sm">
                  <li>
                    <Link
                      href="/solution"
                      className="hover:text-blue-400 transition-colors"
                    >
                      Our Solution
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-white font-semibold text-sm tracking-wide">
                  Resources
                </h3>
                <ul className="space-y-3 text-sm">
                  <li>
                    <Link
                      href="/resources/documentation"
                      className="hover:text-blue-400 transition-colors"
                    >
                      Documentation
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/resources/blogs"
                      className="hover:text-blue-400 transition-colors"
                    >
                      Blogs
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-white font-semibold text-sm tracking-wide">
                  Company
                </h3>
                <ul className="space-y-3 text-sm">
                  <li>
                    <Link
                      href="/company/about"
                      className="hover:text-blue-400 transition-colors"
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/company/updates"
                      className="hover:text-blue-400 transition-colors"
                    >
                      New Feature/Update
                    </Link>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/company/cydenti/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-blue-400 transition-colors"
                    >
                      Get a Demo
                    </a>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-white font-semibold text-sm tracking-wide">
                  Legal
                </h3>
                <ul className="space-y-3 text-sm">
                  <li>
                    <Link
                      href="/legal/privacy-policy"
                      className="hover:text-blue-400 transition-colors"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/legal/terms-of-use"
                      className="hover:text-blue-400 transition-colors"
                    >
                      Terms of Use
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
