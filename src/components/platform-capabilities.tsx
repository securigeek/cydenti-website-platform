"use client";

import React from 'react';
import { cn } from "@/lib/utils";
import { 
  ShieldAlert, 
  CloudFog, 
  Settings2, 
  Link2, 
  LineChart, 
  FileCheck2,
  CheckCircle2
} from 'lucide-react';

const cards = [
  {
    title: "Identity Threat Detection (ITDR)",
    theme: "Continuous Identity Monitoring",
    narrative: "Continuously monitors identity activity to detect threats caused by compromised or misused credentials.",
    signals: [
      "Behavioral anomalies across users and service accounts",
      "Credential misuse and abnormal access patterns",
      "Privilege escalation attempts and risky authentication flows",
      "Machine identity abuse and non-human access risks"
    ],
    anchor: "Outcome: Early detection of identity-based attacks before impact.",
    icon: ShieldAlert,
    color: "bg-blue-50 text-blue-600",
    gradient: "from-blue-500/10 via-cyan-500/5 to-transparent",
    border: "border-blue-100 group-hover:border-blue-200",
    action: "Cydenti Analyzes",
    dotColor: "bg-blue-500"
  },
  {
    title: "SaaS Security Posture Management (SSPM)",
    theme: "SaaS Configuration & Visibility",
    narrative: "Provides visibility into SaaS configurations, permissions, and integrations to reduce SaaS-related risk.",
    signals: [
      "SaaS misconfigurations and insecure settings",
      "Permission drift across users and apps",
      "SaaS-to-SaaS integrations and unmanaged connections",
      "Shadow SaaS usage and sensitive data exposure"
    ],
    anchor: "Outcome: Controlled and secure SaaS environments.",
    icon: Settings2,
    color: "bg-cyan-50 text-cyan-600",
    gradient: "from-cyan-500/10 via-blue-500/5 to-transparent",
    border: "border-cyan-100 group-hover:border-cyan-200",
    action: "Cydenti Identifies",
    dotColor: "bg-cyan-500"
  },
  {
    title: "Cloud Identity Exposure Monitoring",
    theme: "Cloud Access Analysis",
    narrative: "Analyzes cloud identity and access relationships to uncover excessive permissions and exposure paths.",
    signals: [
      "Over-permissioned users, roles, and service accounts",
      "IAM misconfigurations and trust relationship risks",
      "Identity-to-resource access paths",
      "Identity drift across cloud environments"
    ],
    anchor: "Outcome: Reduced blast radius and least-privilege enforcement.",
    icon: CloudFog,
    color: "bg-blue-50 text-blue-600",
    gradient: "from-blue-500/10 via-indigo-500/5 to-transparent",
    border: "border-blue-100 group-hover:border-blue-200",
    action: "Cydenti Detects",
    dotColor: "bg-blue-500"
  },
  {
    title: "Third-Party Integration & OAuth Security",
    theme: "Integration Risk Management",
    narrative: "Monitors and secures third-party access granted through OAuth and SaaS integrations.",
    signals: [
      "High-risk and over-scoped OAuth grants",
      "Abandoned or inactive integrations",
      "Excessive application permissions",
      "Weak or misconfigured SaaS connectors"
    ],
    anchor: "Outcome: Safer third-party access and reduced supply-chain risk.",
    icon: Link2,
    color: "bg-cyan-50 text-cyan-600",
    gradient: "from-cyan-500/10 via-sky-500/5 to-transparent",
    border: "border-cyan-100 group-hover:border-cyan-200",
    action: "Cydenti Monitors",
    dotColor: "bg-cyan-500"
  },
  {
    title: "Identity & Permission Risk Scoring",
    theme: "Unified Risk Prioritization",
    narrative: "Aggregates identity risks into a unified, prioritized risk view.",
    signals: [
      "Unified risk scores for identities and permissions",
      "Exposure-based prioritization",
      "Identity impact and blast-radius mapping",
      "Actionable remediation recommendations"
    ],
    anchor: "Outcome: Faster, more confident security decisions.",
    icon: LineChart,
    color: "bg-blue-50 text-blue-600",
    gradient: "from-blue-500/10 via-blue-400/5 to-transparent",
    border: "border-blue-100 group-hover:border-blue-200",
    action: "Cydenti Provides",
    dotColor: "bg-blue-500"
  },
  {
    title: "Continuous Compliance Reporting",
    theme: "Automated Compliance",
    narrative: "Continuously collects identity and access posture data for compliance and audit readiness.",
    signals: [
      "Identity posture evidence across cloud and SaaS",
      "Configuration and access drift logs",
      "Security and exposure reports",
      "Audit-ready exports aligned to compliance needs"
    ],
    anchor: "Outcome: Ongoing compliance without manual effort.",
    icon: FileCheck2,
    color: "bg-cyan-50 text-cyan-600",
    gradient: "from-cyan-500/10 via-teal-500/5 to-transparent",
    border: "border-cyan-100 group-hover:border-cyan-200",
    action: "Cydenti Delivers",
    dotColor: "bg-cyan-500"
  }
];

export function PlatformCapabilities() {
  return (
    <section className="bg-white py-24 relative">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="mb-24 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-sm font-medium text-blue-700 mb-6">
            Core Capabilities
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            <span className="text-transparent bg-clip-text bg-[linear-gradient(120deg,var(--color-cydenti-primary),var(--color-cydenti-secondary),var(--color-cydenti-primary))] animate-text-shimmer">
              Comprehensive
            </span> Identity Security
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Everything you need to secure identities across your entire digital estate.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {cards.map((card, index) => (
            <div 
              key={index} 
              className="sticky top-32 min-h-screen flex items-start justify-center pt-8"
            >
              <div
                className={cn(
                  "relative w-full overflow-hidden rounded-3xl bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] border group transition-all hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] h-[600px]",
                  card.border
                )}
              >
                {/* Gradient Background Overlay */}
                <div className={cn("absolute inset-0 bg-gradient-to-br opacity-50 pointer-events-none", card.gradient)} />
                
                <div className="relative z-10 p-8 md:p-16 h-full flex flex-col justify-center">
                  <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
                    
                    {/* Left Column: Narrative & Theme */}
                    <div className="flex-1 space-y-8">
                      <div className="flex items-center gap-3 mb-2">
                        <div className={cn("p-3 rounded-xl", card.color)}>
                          <card.icon className="w-8 h-8" />
                        </div>
                        <span className="text-base font-bold uppercase tracking-wider text-gray-500">
                          {card.theme}
                        </span>
                      </div>
                      
                      <h3 className="text-4xl md:text-5xl font-bold text-gray-900 leading-[1.1]">
                        {card.title}
                      </h3>
                      
                      <p className="text-xl text-gray-600 leading-relaxed font-medium max-w-2xl">
                        {card.narrative}
                      </p>

                      <div className="pt-6">
                         <div className="inline-flex items-center gap-2 text-lg text-cydenti-primary font-semibold">
                           <CheckCircle2 className="w-5 h-5 text-cydenti-primary" />
                           {card.anchor}
                         </div>
                      </div>
                    </div>

                    {/* Right Column: Key Signals */}
                    <div className="w-full md:w-[450px]">
                      <h4 className="text-base font-bold text-gray-900 mb-6 flex items-center gap-3">
                        <span className="relative flex h-3 w-3">
                          <span className={cn("animate-ping absolute inline-flex h-full w-full rounded-full opacity-75", card.dotColor.replace('bg-', 'bg-').replace('500', '400'))}></span>
                          <span className={cn("relative inline-flex rounded-full h-3 w-3", card.dotColor)}></span>
                        </span>
                        {card.action}
                      </h4>
                      <ul className="space-y-6">
                        {card.signals.map((signal, sIndex) => (
                          <li key={sIndex} className="flex items-start gap-4 text-base text-gray-600">
                             <div className="mt-2 w-1.5 h-1.5 rounded-full bg-gray-400 shrink-0" />
                             {signal}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
