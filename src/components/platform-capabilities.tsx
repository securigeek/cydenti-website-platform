"use client";

import React, { useState } from 'react';
import { cn } from "@/lib/utils";
import { 
  ShieldAlert, 
  CloudFog, 
  Settings2, 
  Link2, 
  LineChart, 
  FileCheck2,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import { IdentityThreatFlow } from "@/components/identity-threat-flow";
import { PermissionDriftDiagram } from "@/components/permission-drift-diagram";
import { CloudExposureVisual } from "@/components/visuals/cloud-exposure-visual";
import { OAuthRiskVisual } from "@/components/visuals/oauth-risk-visual";
import { RiskScoringVisual } from "@/components/visuals/risk-scoring-visual";
import { ComplianceVisual } from "@/components/visuals/compliance-visual";

const capabilities = [
  {
    id: "itdr",
    title: "Identity Threat Detection",
    icon: ShieldAlert,
    color: "text-blue-600",
    bg: "bg-blue-50",
    description: "Continuously monitors identity activity to detect threats caused by compromised or misused credentials.",
    visual: <IdentityThreatFlow />,
    outcome: "Early detection of identity-based attacks before impact.",
    signals: [
      "Behavioral anomalies across users and service accounts",
      "Credential misuse and abnormal access patterns",
      "Privilege escalation attempts",
      "Machine identity abuse"
    ]
  },
  {
    id: "ispm",
    title: "Identity Security Posture Management",
    icon: Settings2,
    color: "text-cyan-600",
    bg: "bg-cyan-50",
    description: "Provides visibility into SaaS configurations, permissions, and integrations to reduce SaaS-related risk.",
    visual: <PermissionDriftDiagram />,
    outcome: "Controlled and secure SaaS environments.",
    signals: [
      "SaaS misconfigurations and insecure settings",
      "Permission drift across users and apps",
      "Shadow SaaS usage",
      "Sensitive data exposure"
    ]
  },
  {
    id: "cloud",
    title: "Cloud Identity Exposure",
    icon: CloudFog,
    color: "text-indigo-600",
    bg: "bg-indigo-50",
    description: "Analyzes cloud identity and access relationships to uncover excessive permissions and exposure paths.",
    visual: <CloudExposureVisual />,
    outcome: "Reduced blast radius and least-privilege enforcement.",
    signals: [
      "Over-permissioned users and roles",
      "IAM misconfigurations",
      "Identity-to-resource access paths",
      "Identity drift across cloud"
    ]
  },
  {
    id: "oauth",
    title: "Third-Party & OAuth Risk",
    icon: Link2,
    color: "text-violet-600",
    bg: "bg-violet-50",
    description: "Monitors and secures third-party access granted through OAuth and SaaS integrations.",
    visual: <OAuthRiskVisual />,
    outcome: "Safer third-party access and reduced supply-chain risk.",
    signals: [
      "High-risk and over-scoped OAuth grants",
      "Abandoned or inactive integrations",
      "Excessive application permissions",
      "Weak SaaS connectors"
    ]
  },
  {
    id: "risk",
    title: "Risk Scoring",
    icon: LineChart,
    color: "text-rose-600",
    bg: "bg-rose-50",
    description: "Aggregates identity risks into a unified, prioritized risk view based on blast radius and impact.",
    visual: <RiskScoringVisual />,
    outcome: "Faster, more confident security decisions.",
    signals: [
      "Unified risk scores",
      "Exposure-based prioritization",
      "Identity impact mapping",
      "Actionable remediation"
    ]
  },
  {
    id: "compliance",
    title: "Compliance Reporting",
    icon: FileCheck2,
    color: "text-emerald-600",
    bg: "bg-emerald-50",
    description: "Continuously collects identity and access posture data for compliance and audit readiness.",
    visual: <ComplianceVisual />,
    outcome: "Ongoing compliance without manual effort.",
    signals: [
      "Identity posture evidence",
      "Configuration drift logs",
      "Security and exposure reports",
      "Audit-ready exports"
    ]
  }
];

export function PlatformCapabilities() {
  const [activeSection, setActiveSection] = useState(capabilities[0].id);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 120; // Adjust based on your header height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(id);
    }
  };

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0px -50% 0px", // Trigger when element is near the top of viewport
        threshold: 0.1
      }
    );

    capabilities.forEach((cap) => {
      const element = document.getElementById(cap.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-white py-24 relative">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="mb-16 text-center max-w-3xl mx-auto">
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

        {/* Desktop Layout */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 max-w-7xl mx-auto relative">
          
          {/* Sidebar Navigation - Sticky */}
          <div className="lg:w-1/3 lg:sticky lg:top-32 lg:self-start lg:h-auto pb-4 lg:pb-0">
            <div className="flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-visible p-1 lg:p-4 -m-1 lg:-m-4 no-scrollbar">
              {capabilities.map((cap) => (
                <button
                  key={cap.id}
                  onClick={() => scrollToSection(cap.id)}
                  className={cn(
                    "flex items-center gap-4 p-4 rounded-xl text-left transition-all duration-300 min-w-[280px] lg:min-w-0 border group w-full",
                    activeSection === cap.id 
                      ? "bg-white border-blue-200 shadow-md scale-[1.02]" 
                      : "bg-slate-50 border-transparent hover:bg-slate-100 text-slate-500"
                  )}
                >
                  <div className={cn(
                    "p-2.5 rounded-lg shrink-0 transition-colors",
                    activeSection === cap.id ? cap.bg : "bg-slate-200 group-hover:bg-slate-300"
                  )}>
                    <cap.icon className={cn(
                      "w-5 h-5", 
                      activeSection === cap.id ? cap.color : "text-slate-500"
                    )} />
                  </div>
                  <div className="flex-1">
                    <h3 className={cn(
                      "font-bold text-sm",
                      activeSection === cap.id ? "text-slate-900" : "text-slate-600"
                    )}>
                      {cap.title}
                    </h3>
                  </div>
                  {activeSection === cap.id && (
                    <ArrowRight className="w-4 h-4 text-blue-500 ml-auto hidden lg:block" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Content Area - Scrollable List */}
          <div className="lg:w-2/3 space-y-24">
            {capabilities.map((cap) => {
              const ActiveIcon = cap.icon;
              return (
                <div key={cap.id} id={cap.id} className="scroll-mt-32">
                   <div className="bg-slate-50 rounded-3xl p-1 border border-slate-100 shadow-sm">
                      <div className="bg-white rounded-[20px] p-6 md:p-8 flex flex-col">
                        {/* Header */}
                        <div className="mb-8">
                          <div className="flex items-center gap-3 mb-4">
                            <div className={cn("p-2 rounded-lg", cap.bg)}>
                              <ActiveIcon className={cn("w-6 h-6", cap.color)} />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900">
                              {cap.title}
                            </h3>
                          </div>
                          <p className="text-lg text-slate-600 leading-relaxed mb-6">
                            {cap.description}
                          </p>
                          
                          {/* Signals Grid */}
                          <div className="grid sm:grid-cols-2 gap-3 mb-8">
                            {cap.signals.map((signal, idx) => (
                              <div key={idx} className="flex items-start gap-2 text-sm text-slate-600">
                                <div className={cn("mt-1.5 w-1.5 h-1.5 rounded-full shrink-0", cap.color.replace("text-", "bg-"))} />
                                {signal}
                              </div>
                            ))}
                          </div>

                          <div className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 bg-slate-50 px-4 py-2 rounded-lg border border-slate-100">
                            <CheckCircle2 className="w-4 h-4 text-green-500" />
                            {cap.outcome}
                          </div>
                        </div>

                        {/* Visual Container */}
                        <div className="mt-auto rounded-xl overflow-hidden border border-slate-100 shadow-inner bg-slate-50/50 flex items-center justify-center min-h-[350px]">
                          <div className="w-full h-full p-2 md:p-4 flex items-center justify-center">
                            {cap.visual}
                          </div>
                        </div>
                     </div>
                   </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
