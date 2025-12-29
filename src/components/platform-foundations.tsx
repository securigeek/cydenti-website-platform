"use client";

import { cn } from "@/lib/utils";
import { Network, BrainCircuit, Blocks } from "lucide-react";

const foundations = [
  {
    title: "Identity Graph",
    subtitle: "The Single Source of Truth for Identity Access",
    description: "Cydenti’s Identity Graph continuously maps:",
    points: [
      "Humans, machines, and AI agents",
      "SaaS apps, cloud resources, and data systems",
      "Permissions, roles, policies, and OAuth grants"
    ],
    footer: "This graph reveals effective access, not just assigned permissions — showing how identities can actually reach sensitive resources.",
    icon: Network,
    color: "text-purple-600",
    bg: "bg-purple-50",
    border: "border-purple-100",
    gradient: "from-purple-500/10 via-fuchsia-500/5 to-transparent"
  },
  {
    title: "AI Risk Engine",
    subtitle: "Context-Aware Identity Intelligence",
    description: "Cydenti applies AI to:",
    points: [
      "Establish behavioral baselines",
      "Detect anomalies and abuse patterns",
      "Score identity and permission risk",
      "Recommend prioritized remediation"
    ],
    footer: "All decisions are transparent, explainable, and grounded in real access relationships.",
    icon: BrainCircuit,
    color: "text-amber-600",
    bg: "bg-amber-50",
    border: "border-amber-100",
    gradient: "from-amber-500/10 via-orange-500/5 to-transparent"
  },
  {
    title: "Integrations",
    subtitle: "Fast, Agentless, Enterprise-Ready",
    description: "Broad SaaS, cloud, and IAM coverage",
    points: [
      "Agentless and read-only by default",
      "Rapid onboarding without operational risk"
    ],
    footer: "Cydenti integrates where identity lives — without disrupting production systems.",
    icon: Blocks,
    color: "text-emerald-600",
    bg: "bg-emerald-50",
    border: "border-emerald-100",
    gradient: "from-emerald-500/10 via-teal-500/5 to-transparent"
  }
];

export function PlatformFoundations() {
  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-purple-200 bg-purple-50 px-4 py-1.5 text-sm font-medium text-purple-700 mb-6">
            Platform Foundations
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 tracking-tight">
            The Intelligence Behind the Platform
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Every Cydenti capability is powered by shared platform foundations that deliver scale, accuracy, and automation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {foundations.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index}
                className={cn(
                  "group relative overflow-hidden rounded-2xl bg-white p-8 shadow-sm transition-all hover:shadow-md border",
                  item.border
                )}
              >
                {/* Gradient Background on Hover */}
                <div className={cn(
                  "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br",
                  item.gradient
                )} />

                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-start justify-between mb-6">
                    <div className={cn("p-3 rounded-xl", item.bg, item.color)}>
                      <Icon className="w-8 h-8" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className={cn("text-sm font-medium mb-6", item.color)}>
                    {item.subtitle}
                  </p>

                  <div className="space-y-4 flex-grow">
                    <p className="text-gray-600 font-medium">
                      {item.description}
                    </p>
                    <ul className="space-y-2">
                      {item.points.map((point, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-600">
                          <span className={cn("mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0", item.color.replace('text-', 'bg-'))} />
                          <span className="leading-relaxed">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8 pt-6 border-t border-gray-100">
                    <p className="text-gray-600 text-sm leading-relaxed italic">
                      {item.footer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
