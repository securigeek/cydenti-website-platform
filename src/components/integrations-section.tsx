"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function IntegrationsSection() {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const allIntegrations = [
    { alt: "CrowdStrike", src: "/CYDENTI DASHBOARD P 2/crowdstrike.png" },
    { alt: "GitLab", src: "/CYDENTI DASHBOARD P 2/gitlab.png" },
    { alt: "GitHub", src: "/CYDENTI DASHBOARD P 2/GitHub-Mark-ea2971cee799.png" },
    { alt: "Bitbucket", src: "/CYDENTI DASHBOARD P 2/bitbucket.svg.png" },
    { alt: "Zendesk", src: "/CYDENTI DASHBOARD P 2/zendesk.png" },
    { alt: "ServiceNow", src: "/CYDENTI DASHBOARD P 2/servicenow.svg" },
    { alt: "Slack", src: "/CYDENTI DASHBOARD P 2/Slack_icon_2019.svg" },
    { alt: "Salesforce", src: "/CYDENTI DASHBOARD P 2/salesforce.svg" },
    { alt: "Cydenti", src: "cydenti-brandmark.svg", isCenter: true },
    { alt: "Atlassian", src: "/CYDENTI DASHBOARD P 2/atlassian.svg" },
    { alt: "Microsoft 365", src: "/CYDENTI DASHBOARD P 2/M365.svg" },
    { alt: "Google Workspace", src: "/CYDENTI DASHBOARD P 2/Google__G__logo 2.svg" },
    { alt: "Okta", src: "/CYDENTI DASHBOARD P 2/okta-logo.png" },
    { alt: "Microsoft Entra ID", src: "/CYDENTI DASHBOARD P 2/Microsoft_Entra_ID_color_icon 1.svg" },
    { alt: "AWS", src: "/CYDENTI DASHBOARD P 2/aws.svg" },
    { alt: "Azure", src: "/CYDENTI DASHBOARD P 2/azure.svg" },
    { alt: "Google Cloud", src: "/CYDENTI DASHBOARD P 2/google_cloud-icon 1.svg" },
  ];

  // On mobile, show a focused subset (7 items centered around Cydenti) to prevent overcrowding
  // Indices 5 to 11: ServiceNow, Slack, Salesforce, Cydenti, Atlassian, M365, Google Workspace
  const integrations = isMobile 
    ? allIntegrations.slice(5, 12) 
    : allIntegrations;

  const getBezierPoint = (t: number) => {
    // P0=(0,70), P1=(30,20), P2=(70,20), P3=(100,70)
    const p0 = { x: 0, y: 70 };
    const p1 = { x: 30, y: 20 };
    const p2 = { x: 70, y: 20 };
    const p3 = { x: 100, y: 70 };

    const x = Math.pow(1 - t, 3) * p0.x +
              3 * Math.pow(1 - t, 2) * t * p1.x +
              3 * (1 - t) * Math.pow(t, 2) * p2.x +
              Math.pow(t, 3) * p3.x;

    const y = Math.pow(1 - t, 3) * p0.y +
              3 * Math.pow(1 - t, 2) * t * p1.y +
              3 * (1 - t) * Math.pow(t, 2) * p2.y +
              Math.pow(t, 3) * p3.y;
    return { x: x.toFixed(3), y: y.toFixed(3) };
  };

  return (
    <section className="py-28 relative overflow-visible w-full">
      {/* Soft background with higher z-index to overlay other sections */}
      <div className="absolute inset-0 pointer-events-none z-30">
        <div className="absolute -top-20 -right-20 w-[500px] h-[500px] bg-blue-100/40 blur-[100px] rounded-full" />
        <div className="absolute -bottom-20 -left-20 w-[500px] h-[500px] bg-teal-100/30 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 text-blue-600 font-bold tracking-widest text-xs uppercase bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
            Integrations
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mt-4">
            Integrates with your SaaS and cloud stack
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed mt-4">
            API-based integrations across Microsoft 365, Google Workspace, Salesforce, AWS IAM,
            Azure AD, GCP IAM, GitHub, Slack, and ServiceNow. Deployed in minutes.
          </p>
        </div>

        {/* Arc with logos */}
        <div className="relative w-full h-[320px] md:h-[420px]">
          <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 w-full h-full">
            <defs>
              <linearGradient id="arc-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#cbd5e1" stopOpacity="0" />
                <stop offset="15%" stopColor="#cbd5e1" stopOpacity="0.3" />
                <stop offset="50%" stopColor="#cbd5e1" stopOpacity="1" />
                <stop offset="85%" stopColor="#cbd5e1" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#cbd5e1" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path d="M0,70 C30,20 70,20 100,70" fill="none" stroke="url(#arc-gradient)" strokeWidth="0.5" />
          </svg>

          {integrations.map((item, i) => {
            // Distribute points closer to center: t from 0.05 to 0.95 to fit all items
            const t = 0.05 + (i / (integrations.length - 1)) * 0.9;
            const pos = getBezierPoint(t);
            
            if (item.isCenter) {
               return (
                <div
                  key={item.alt + i}
                  className="absolute -translate-x-1/2 -translate-y-1/2 z-20"
                  style={{ left: `${pos.x}%`, top: `${pos.y}%` }}
                >
                   <div className="relative">
                    <div className="absolute -inset-6 blur-2xl rounded-full bg-blue-200/60 w-32 h-32" />
                    <div className="h-24 w-24 rounded-full bg-white/40 backdrop-blur-xl border border-white/50 shadow-xl flex items-center justify-center relative">
                      <Image src={item.src} alt={item.alt} width={44} height={44} />
                    </div>
                  </div>
                </div>
               );
            }

            const mid = (integrations.length - 1) / 2;
            const dist = Math.abs(i - mid) / mid; 
            const size = Math.round(56 - 16 * dist); 
            const icon = Math.round(28 - 8 * dist); 

            return (
              <div
                key={item.alt + i}
                className="absolute -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${pos.x}%`, top: `${pos.y}%` }}
              >
                <div className="rounded-full bg-white/30 backdrop-blur-md border border-white/40 shadow-lg flex items-center justify-center"
                     style={{ width: `${size}px`, height: `${size}px` }}>
                  <Image src={item.src} alt={item.alt} width={icon} height={icon} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Subline chips & CTA */}
        <div className="flex flex-col items-center gap-8 -mt-24 md:-mt-32 relative z-20">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {[
              "API-first",
              "Zero Data Egress",
              "Deploys in minutes",
            ].map((chip) => (
              <span key={chip} className="text-xs font-medium text-slate-600 bg-slate-100 border border-slate-200 rounded-full px-3 py-1">
                {chip}
              </span>
            ))}
          </div>

          <Button asChild variant="outline" className="rounded-full border-blue-200 text-blue-700 hover:bg-blue-50 hover:text-blue-800 hover:border-blue-300 transition-all shadow-sm">
            <Link href="/platform/integrations">
              View All Integrations
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
