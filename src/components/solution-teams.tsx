"use client";

import { cn } from "@/lib/utils";
import { 
  Shield, 
  Users, 
  Siren, 
  Terminal, 
  CheckCircle2 
} from 'lucide-react';

const teams = [
  {
    title: "CISO / Security Leaders",
    theme: "Executive Visibility & Risk",
    narrative: "Gain executive-level visibility across your entire identity attack surface. Prove security ROI with quantifiable risk reduction metrics and ensure organizational resilience against identity-based attacks.",
    signals: [
      "Unified visibility across SaaS, Cloud, and Identity",
      "Automated compliance reporting (ISO, SOC2, NIS2)",
      "Strategic risk prioritization based on business context"
    ],
    anchor: "Outcome: Proven ROI and reduced organizational risk.",
    icon: Shield,
    color: "bg-blue-50 text-blue-600",
    gradient: "from-blue-500/10 via-cyan-500/5 to-transparent",
    border: "border-blue-100 group-hover:border-blue-200",
    action: "Strategic Value",
    dotColor: "bg-blue-500"
  },
  {
    title: "IAM & GRC Teams",
    theme: "Governance & Compliance",
    narrative: "Move beyond manual audits and spreadsheet tracking. Automate user access reviews, enforce least privilege, and maintain continuous compliance with evolving regulations.",
    signals: [
      "Streamlined access certification campaigns",
      "Continuous monitoring for configuration drift",
      "Automated evidence collection for audits"
    ],
    anchor: "Outcome: Audit-ready posture without manual toil.",
    icon: Users,
    color: "bg-cyan-50 text-cyan-600",
    gradient: "from-cyan-500/10 via-blue-500/5 to-transparent",
    border: "border-cyan-100 group-hover:border-cyan-200",
    action: "Operational Efficiency",
    dotColor: "bg-cyan-500"
  },
  {
    title: "SOC / Incident Response",
    theme: "Detection & Response",
    narrative: "Eliminate alert fatigue with identity-centric context. Quickly correlate disparate signals to identify compromised accounts, insider threats, and lateral movement before damage occurs.",
    signals: [
      "Rich identity context for every alert",
      "Faster mean-time-to-resolution (MTTR)",
      "Detection of anomalous behavior and impossible travel"
    ],
    anchor: "Outcome: Rapid response with full context.",
    icon: Siren,
    color: "bg-sky-50 text-sky-600",
    gradient: "from-sky-500/10 via-blue-500/5 to-transparent",
    border: "border-sky-100 group-hover:border-sky-200",
    action: "Threat Context",
    dotColor: "bg-sky-500"
  },
  {
    title: "IT & DevOps",
    theme: "Speed & Security",
    narrative: "Empower engineering teams to move fast without breaking security. Integrate identity security into CI/CD pipelines and automate routine access requests to reduce helpdesk friction.",
    signals: [
      "Self-service access with automated guardrails",
      "Visibility into machine identities and service accounts",
      "Seamless integration with existing workflows"
    ],
    anchor: "Outcome: Secure innovation at speed.",
    icon: Terminal,
    color: "bg-slate-100 text-slate-700",
    gradient: "from-slate-500/10 via-gray-500/5 to-transparent",
    border: "border-slate-200 group-hover:border-slate-300",
    action: "Frictionless Security",
    dotColor: "bg-slate-500"
  }
];

export function SolutionTeams() {
  return (
    <section className="bg-white py-24 relative">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="mb-24 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-sm font-medium text-blue-700 mb-6">
            Built for Modern Teams
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            Empowering Every
            <span className="ml-2 text-transparent bg-clip-text bg-[linear-gradient(120deg,var(--color-cydenti-primary),var(--color-cydenti-secondary),var(--color-cydenti-primary))] animate-text-shimmer">
              Stakeholder
            </span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Identity security is a team sport. Cydenti gives everyone the tools they need to succeed.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {teams.map((team, index) => (
            <div 
              key={index} 
              className="sticky top-32 min-h-screen flex items-start justify-center pt-8"
            >
              <div
                className={cn(
                  "relative w-full overflow-hidden rounded-3xl bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] border group transition-all hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] h-[600px]",
                  team.border
                )}
              >
                {/* Gradient Background Overlay */}
                <div className={cn("absolute inset-0 bg-gradient-to-br opacity-50 pointer-events-none", team.gradient)} />
                
                <div className="relative z-10 p-8 md:p-16 h-full flex flex-col justify-center">
                  <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
                    
                    {/* Left Column: Narrative & Theme */}
                    <div className="flex-1 space-y-8">
                      <div className="flex items-center gap-3 mb-2">
                        <div className={cn("p-3 rounded-xl", team.color)}>
                          <team.icon className="w-8 h-8" />
                        </div>
                        <span className="text-base font-bold uppercase tracking-wider text-gray-500">
                          {team.theme}
                        </span>
                      </div>
                      
                      <h3 className="text-4xl md:text-5xl font-bold text-gray-900 leading-[1.1]">
                        {team.title}
                      </h3>
                      
                      <p className="text-xl text-gray-600 leading-relaxed font-medium max-w-2xl">
                        {team.narrative}
                      </p>

                      <div className="pt-6">
                         <div className="inline-flex items-center gap-2 text-lg text-cydenti-primary font-semibold">
                           <CheckCircle2 className="w-5 h-5 text-cydenti-primary" />
                           {team.anchor}
                         </div>
                      </div>
                    </div>

                    {/* Right Column: Key Signals/Benefits */}
                    <div className="w-full md:w-[450px]">
                      <h4 className="text-base font-bold text-gray-900 mb-6 flex items-center gap-3">
                        <span className="relative flex h-3 w-3">
                          <span className={cn("animate-ping absolute inline-flex h-full w-full rounded-full opacity-75", team.dotColor.replace('bg-', 'bg-').replace('500', '400'))}></span>
                          <span className={cn("relative inline-flex rounded-full h-3 w-3", team.dotColor)}></span>
                        </span>
                        {team.action}
                      </h4>
                      <ul className="space-y-6">
                        {team.signals.map((signal, sIndex) => (
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
