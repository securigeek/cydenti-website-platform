"use client";

import React from "react";
import { 
  FileX, 
  Activity, 
  CheckCircle2, 
  History, 
  Search, 
  Clock, 
  ShieldCheck, 
  Zap, 
  Users, 
  FileText, 
  Network,
  AlertTriangle,
  ArrowRight
} from "lucide-react";

export function ComplianceReportingContent() {
  return (
    <div className="w-full bg-white overflow-hidden">
      
      {/* SECTION 1: The Disconnect */}
      <section className="py-24 bg-slate-50 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-blue-600 font-bold tracking-widest text-xs uppercase bg-blue-50 px-3 py-1 rounded-full border border-blue-100 mb-4 inline-block">
              The Disconnect
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Static Evidence in a Dynamic World
            </h2>
            <p className="text-lg text-slate-600">
              Most compliance processes rely on point-in-time snapshots, manual screenshots, and spreadsheets updated after the fact.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-1 h-full bg-slate-200 group-hover:bg-red-400 transition-colors" />
              <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <FileX className="w-5 h-5 text-red-500" />
                The Old Way
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-slate-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-2 shrink-0" />
                  <span>Point-in-time snapshots that age instantly</span>
                </li>
                <li className="flex items-start gap-3 text-slate-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-2 shrink-0" />
                  <span>Manual screenshots scattered across folders</span>
                </li>
                <li className="flex items-start gap-3 text-slate-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-2 shrink-0" />
                  <span>Spreadsheets updated weeks after the fact</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-cyan-100 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-1 h-full bg-cyan-500" />
              <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-cyan-50 rounded-full blur-3xl opacity-50" />
              
              <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <Activity className="w-5 h-5 text-cyan-600" />
                The Reality
              </h3>
              <p className="text-slate-600 mb-6 font-medium">
                Identity risk is continuous. What was compliant last quarter may be risky today.
              </p>
              <div className="p-4 bg-cyan-50 rounded-xl border border-cyan-100 text-cyan-800 text-sm font-medium">
                Auditors increasingly know the difference between &quot;checked a box&quot; and &quot;actually secure.&quot;
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: A Different Philosophy */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-cyan-600 font-bold tracking-widest text-xs uppercase mb-4 block">
                A Different Philosophy
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Compliance as a Byproduct of Security
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Cydenti doesn’t bolt compliance onto security. It emerges naturally from how the platform operates. 
                Compliance evidence is always being generated — whether an audit is coming or not.
              </p>
              
              <div className="space-y-6">
                {[
                  "Maps identities and permissions",
                  "Tracks access changes",
                  "Detects drift and exposure",
                  "Scores risk in context"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-full bg-cyan-50 flex items-center justify-center text-cyan-600 group-hover:bg-cyan-600 group-hover:text-white transition-colors duration-300">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <span className="text-lg text-slate-700 font-medium group-hover:text-cyan-700 transition-colors">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-cyan-100 rounded-3xl transform rotate-3 scale-95 opacity-50" />
              <div className="bg-slate-900 rounded-2xl p-8 relative shadow-2xl transform -rotate-1 hover:rotate-0 transition-transform duration-500">
                <div className="flex items-center gap-2 mb-6 border-b border-slate-800 pb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <div className="ml-auto text-xs text-slate-500 font-mono">live-stream.log</div>
                </div>
                <div className="space-y-3 font-mono text-sm">
                  <div className="flex gap-4 text-emerald-400">
                    <span className="opacity-50">10:42:01</span>
                    <span>Identity mapped: user@company.com</span>
                  </div>
                  <div className="flex gap-4 text-blue-400">
                    <span className="opacity-50">10:42:05</span>
                    <span>New permission detected: AWSAdmin</span>
                  </div>
                  <div className="flex gap-4 text-yellow-400">
                    <span className="opacity-50">10:42:12</span>
                    <span>Drift alert: Policy violation found</span>
                  </div>
                  <div className="flex gap-4 text-purple-400">
                    <span className="opacity-50">10:42:15</span>
                    <span>Risk score updated: High (85)</span>
                  </div>
                  <div className="flex gap-4 text-slate-400 mt-4 pt-4 border-t border-slate-800">
                    <span className="opacity-50">Status</span>
                    <span>Evidence logged. Audit ready.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: What Compliance Looks Like */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] rounded-full bg-blue-600/20 blur-[100px]" />
          <div className="absolute -bottom-[20%] -left-[10%] w-[600px] h-[600px] rounded-full bg-cyan-600/20 blur-[100px]" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-cyan-400 font-bold tracking-widest text-xs uppercase mb-4 block">
              What Compliance Looks Like in Cydenti
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Evidence That Explains Itself
            </h2>
            <p className="text-slate-300 text-lg">
              Instead of static reports, Cydenti provides living proof of identity governance. Every finding is tied back to real access relationships.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Users,
                title: "Access History",
                desc: "Who had access — and exactly when they had it."
              },
              {
                icon: History,
                title: "Permission Timeline",
                desc: "How permissions changed over time, fully audit-trailed."
              },
              {
                icon: AlertTriangle,
                title: "Risk Evolution",
                desc: "Which identities became riskier — and the context why."
              },
              {
                icon: ShieldCheck,
                title: "Remediation",
                desc: "What actions were taken to fix the issues found."
              }
            ].map((card, i) => (
              <div key={i} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-6 rounded-xl hover:bg-slate-800 transition-colors group">
                <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 mb-4 group-hover:bg-blue-500 group-hover:text-white transition-all">
                  <card.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold mb-2">{card.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: Signature Experience */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-blue-600 font-bold tracking-widest text-xs uppercase bg-blue-50 px-3 py-1 rounded-full border border-blue-100 mb-4 inline-block">
                Signature Experience: The Audit Timeline
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                From “Prove It” to “Here It Is”
              </h2>
            </div>

            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-cyan-400 to-slate-200" />
              
              <div className="space-y-12">
                {[
                  {
                    step: "01",
                    title: "Select a Timeframe",
                    desc: "Choose any period. Cydenti's time-machine capability lets you look back instantly.",
                    icon: Clock
                  },
                  {
                    step: "02",
                    title: "Choose Identity or Resource",
                    desc: "Focus on a specific user, application, or sensitive resource.",
                    icon: Search
                  },
                  {
                    step: "03",
                    title: "Automated Reconstruction",
                    desc: "Cydenti reconstructs the full access history automatically. No manual correlation needed.",
                    icon: Zap
                  }
                ].map((item, i) => (
                  <div key={i} className="relative pl-24 group">
                    <div className="absolute left-0 w-16 h-16 rounded-2xl bg-white border-2 border-slate-100 flex items-center justify-center text-slate-400 font-bold text-xl shadow-sm z-10 group-hover:border-blue-500 group-hover:text-blue-600 transition-colors">
                      {item.step}
                    </div>
                    <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:shadow-lg transition-all hover:border-blue-100">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="p-2 bg-white rounded-lg shadow-sm text-blue-600">
                          <item.icon className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
                      </div>
                      <p className="text-slate-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 pl-24">
                <div className="p-6 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl text-white shadow-xl flex items-center justify-between gap-8">
                  <div>
                    <h4 className="text-xl font-bold mb-2">This is where audits stop being adversarial.</h4>
                    <p className="text-blue-100">No hunting. No manual correlation. No missing context.</p>
                  </div>
                  <div className="hidden md:block">
                    <CheckCircle2 className="w-12 h-12 text-white/20" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: Compliance Without Slowing Teams */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100">
                <div className="space-y-4">
                  {[
                    { label: "Blocking workflows", status: false },
                    { label: "Freezing permissions", status: false },
                    { label: "Adding approval bottlenecks", status: false },
                    { label: "Security teams stay agile", status: true },
                    { label: "Engineering teams stay productive", status: true },
                    { label: "Auditors get clarity", status: true },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-slate-50 border border-slate-100">
                      <span className="font-medium text-slate-700">{item.label}</span>
                      {item.status ? (
                        <span className="text-emerald-600 flex items-center gap-1 text-sm font-bold">
                          <CheckCircle2 className="w-4 h-4" /> YES
                        </span>
                      ) : (
                        <span className="text-slate-400 flex items-center gap-1 text-sm decoration-slate-300 line-through">
                          NO
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="order-1 md:order-2">
              <span className="text-blue-600 font-bold tracking-widest text-xs uppercase mb-4 block">
                Compliance Without Slowing Teams
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Governance Without Friction
              </h2>
              <p className="text-lg text-slate-600 mb-6">
                Cydenti supports compliance without blocking workflows, freezing permissions, or adding approval bottlenecks.
              </p>
              <p className="text-lg text-slate-600">
                We believe security should enable velocity, not kill it. Keep your engineering teams productive while giving auditors the clarity they demand.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: What It Supports */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <span className="text-cyan-600 font-bold tracking-widest text-xs uppercase mb-4 block">
            What It Supports
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12">
            Aligned to Real-World Requirements
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Access Governance", desc: "Expectations & Reviews" },
              { title: "Identity Monitoring", desc: "Continuous Surveillance" },
              { title: "Configuration Drift", desc: "Tracking & Alerts" },
              { title: "Audit Workflows", desc: "Streamlined Evidence" }
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-2xl bg-slate-50 hover:bg-white hover:shadow-xl hover:scale-105 transition-all duration-300 border border-slate-100 group">
                <div className="w-12 h-12 mx-auto bg-white rounded-full flex items-center justify-center text-cyan-600 mb-4 shadow-sm group-hover:bg-cyan-600 group-hover:text-white transition-colors">
                  <FileText className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
          
          <p className="mt-12 text-slate-500 italic">
            &quot;Without hardcoding compliance frameworks into brittle rules.&quot;
          </p>
        </div>
      </section>

      {/* SECTION 7: How This Connects */}
      <section className="py-24 bg-slate-900 text-white border-t border-slate-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <span className="text-blue-400 font-bold tracking-widest text-xs uppercase mb-4 block">
                How This Connects Across the Platform
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Compliance Is the Outcome, Not the Goal
              </h2>
              <p className="text-slate-400 text-lg mb-8">
                Compliance reporting isn&apos;t a standalone feature. It is powered by the core engines of the Cydenti platform. Everything reinforces everything else.
              </p>
            </div>
            
            <div className="md:w-1/2 w-full">
              <div className="grid gap-4">
                {[
                  { label: "Identity Graph", sub: "Accurate access mapping", icon: Network },
                  { label: "Risk Scoring", sub: "Prioritization rationale", icon: Activity },
                  { label: "Threat Detection", sub: "Investigation context", icon: AlertTriangle },
                  { label: "SaaS & Cloud Monitoring", sub: "Drift evidence", icon: ShieldCheck }
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between p-5 rounded-xl bg-slate-800/50 border border-slate-700 hover:border-blue-500/50 transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-slate-700 flex items-center justify-center text-blue-400">
                        <item.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="font-bold text-white">{item.label}</div>
                        <div className="text-xs text-slate-400 uppercase tracking-wide">{item.sub}</div>
                      </div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-slate-600" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
