"use client";

import { useState, useRef, type SVGProps } from "react";
import { cn } from "@/lib/utils";
import { Network, BrainCircuit, Blocks, CheckCircle2, Globe, Lock, Database } from "lucide-react";
import { IdentityGraphDiagram } from "@/components/identity-graph-diagram";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import Image from "next/image";

// --- Data ---

const foundations = [
  {
    id: "identity-graph",
    title: "Identity Graph",
    subtitle: "The Single Source of Truth",
    description: "Cydenti’s Identity Graph continuously maps humans, machines, and resources to reveal effective access paths that lists can't show.",
    points: [
      "Maps human, machine, and AI agent identities",
      "Correlates SaaS apps, cloud resources, and data systems",
      "Traces permissions, roles, policies, and OAuth grants",
      "Reveals toxic combinations and hidden paths"
    ],
    footer: "This graph reveals effective access, not just assigned permissions — showing how identities can actually reach sensitive resources.",
    icon: Network,
    color: "text-purple-600",
    bg: "bg-purple-50",
    border: "border-purple-200",
    gradient: "from-purple-500/10 via-fuchsia-500/5 to-transparent"
  },
  {
    id: "ai-risk-engine",
    title: "AI Risk Engine",
    subtitle: "Context-Aware Intelligence",
    description: "Cydenti applies AI to establish behavioral baselines, detect anomalies, and score risk based on real-world context, not just static rules.",
    points: [
      "Establishes behavioral baselines for every identity",
      "Detects anomalies and abuse patterns in real-time",
      "Scores identity and permission risk dynamically",
      "Recommends prioritized remediation actions"
    ],
    footer: "All decisions are transparent, explainable, and grounded in real access relationships.",
    icon: BrainCircuit,
    color: "text-amber-600",
    bg: "bg-amber-50",
    border: "border-amber-200",
    gradient: "from-amber-500/10 via-orange-500/5 to-transparent"
  },
  {
    id: "integrations",
    title: "Integrations",
    subtitle: "Fast, Agentless, Enterprise-Ready",
    description: "Connects with your existing ecosystem in minutes. Agentless, read-only by default, and designed for zero operational impact.",
    points: [
      "Agentless and read-only by default",
      "Rapid onboarding without operational risk",
      "Broad support for SaaS, IaaS, and IdP platforms",
      "Seamless API-first architecture"
    ],
    footer: "Cydenti integrates where identity lives — without disrupting production systems.",
    icon: Blocks,
    color: "text-emerald-600",
    bg: "bg-emerald-50",
    border: "border-emerald-200",
    gradient: "from-emerald-500/10 via-teal-500/5 to-transparent"
  }
];

const integrationLogos = [
  { name: "Google Cloud", src: "/CYDENTI DASHBOARD P 2/google_cloud-icon 1.svg" },
  { name: "Azure", src: "/CYDENTI DASHBOARD P 2/azure.svg" },
  { name: "AWS", src: "/CYDENTI DASHBOARD P 2/aws.svg" },
  { name: "Microsoft Entra ID", src: "/CYDENTI DASHBOARD P 2/Microsoft_Entra_ID_color_icon 1.svg" },
  { name: "Google Workspace", src: "/CYDENTI DASHBOARD P 2/Google__G__logo 2.svg" },
  { name: "Okta", src: "/CYDENTI DASHBOARD P 2/okta-logo.png" },
  { name: "Salesforce", src: "/CYDENTI DASHBOARD P 2/salesforce.svg" },
  { name: "Slack", src: "/CYDENTI DASHBOARD P 2/Slack_icon_2019.svg" },
  { name: "GitHub", src: "/CYDENTI DASHBOARD P 2/GitHub-Mark-ea2971cee799.png" }
];

// --- Sub-Components ---

function AIRiskEngineVisual() {
  return (
    <div className="w-full h-full min-h-[400px] flex items-center justify-center relative overflow-hidden bg-slate-900/5 rounded-xl border border-slate-200/50 p-8">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      <div className="relative z-10 flex flex-col items-center">
        {/* Central Brain */}
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <div className="absolute -inset-4 bg-amber-500/20 rounded-full blur-xl animate-pulse"></div>
          <div className="w-24 h-24 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl shadow-2xl flex items-center justify-center relative z-10 border border-white/20">
            <BrainCircuit className="w-12 h-12 text-white" />
          </div>
        </motion.div>

        {/* Orbiting Context Nodes */}
        <div className="grid grid-cols-2 gap-x-20 gap-y-8 mt-12">
          {[
            { label: "Behavior", icon: ActivityIcon, color: "text-blue-500", bg: "bg-blue-50" },
            { label: "Context", icon: Globe, color: "text-purple-500", bg: "bg-purple-50" },
            { label: "Privilege", icon: Lock, color: "text-red-500", bg: "bg-red-50" },
            { label: "Resources", icon: Database, color: "text-emerald-500", bg: "bg-emerald-50" }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + (i * 0.1) }}
              className="flex items-center gap-3 bg-white p-3 rounded-xl shadow-sm border border-slate-100"
            >
              <div className={cn("p-2 rounded-lg", item.bg)}>
                <item.icon className={cn("w-5 h-5", item.color)} />
              </div>
              <span className="font-semibold text-slate-700">{item.label}</span>
            </motion.div>
          ))}
        </div>
        
        {/* Connecting Lines (Simplified SVG) */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible" style={{ zIndex: 0 }}>
             <defs>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                   <stop offset="0%" stopColor="#f59e0b" stopOpacity="0" />
                   <stop offset="50%" stopColor="#f59e0b" stopOpacity="0.5" />
                   <stop offset="100%" stopColor="#f59e0b" stopOpacity="0" />
                </linearGradient>
             </defs>
             {/* Lines from center to nodes would go here, but positioning is dynamic. Skipping for simplicity or using absolute positioning above. */}
        </svg>
      </div>
    </div>
  );
}

function ActivityIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
          {...props}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
        </svg>
    )
}

function IntegrationsVisual() {
  return (
    <div className="w-full h-full min-h-[400px] bg-slate-50 rounded-xl border border-slate-200 p-8 flex flex-col items-center justify-center overflow-hidden">
      <div className="grid grid-cols-3 gap-6 md:gap-8">
        {integrationLogos.map((logo, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.05 }}
            className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center hover:shadow-md hover:scale-105 transition-all w-24 h-24 md:w-28 md:h-28"
          >
            <Image 
              src={logo.src} 
              alt={logo.name} 
              width={48} 
              height={48} 
              className="object-contain w-12 h-12"
            />
          </motion.div>
        ))}
      </div>
      <div className="mt-8 text-center">
        <p className="text-sm text-slate-500 font-medium">+ 50 more integrations available</p>
      </div>
    </div>
  );
}

export function PlatformFoundations() {
  const [activeTab, setActiveTab] = useState(0);
  const containerRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // Only apply on desktop where the sticky behavior exists
    if (typeof window !== 'undefined' && window.innerWidth >= 1024) {
      if (latest < 0.33) {
        setActiveTab(0);
      } else if (latest < 0.66) {
        setActiveTab(1);
      } else {
        setActiveTab(2);
      }
    }
  });

  const scrollToTab = (index: number) => {
    setActiveTab(index);
    if (typeof window !== 'undefined' && window.innerWidth >= 1024 && containerRef.current) {
      const containerTop = containerRef.current.offsetTop;
      const containerHeight = containerRef.current.offsetHeight;
      const scrollableDistance = containerHeight - window.innerHeight;
      // Map index to scroll position
      const targetScroll = containerTop + (scrollableDistance * (index / 2));
      window.scrollTo({ top: targetScroll, behavior: 'smooth' });
    }
  };

  return (
    <section ref={containerRef} className="relative bg-white lg:h-[300vh]">
      <div className="lg:sticky lg:top-24 lg:h-[calc(100vh-6rem)] lg:flex lg:flex-col lg:overflow-y-auto no-scrollbar overflow-visible py-24">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-purple-200 bg-purple-50 px-4 py-1.5 text-sm font-medium text-purple-700 mb-6">
            Platform Foundations
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            The Intelligence Behind the Platform
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed">
            Every Cydenti capability is powered by shared platform foundations that deliver scale, accuracy, and automation.
          </p>
        </div>

        {/* Tabs Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {foundations.map((item, index) => {
            const isActive = activeTab === index;
            const Icon = item.icon;
            return (
              <button
                key={index}
                onClick={() => scrollToTab(index)}
                className={cn(
                  "flex items-center gap-3 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 border",
                  isActive 
                    ? cn("bg-slate-900 text-white border-slate-900 shadow-lg scale-105") 
                    : "bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                )}
              >
                <Icon className={cn("w-4 h-4", isActive ? "text-white" : item.color)} />
                {item.title}
              </button>
            );
          })}
        </div>

        {/* Tab Content Area */}
        <div className="max-w-7xl mx-auto bg-slate-50/50 rounded-3xl border border-slate-200/60 p-2 md:p-4 shadow-sm">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden"
            >
              <div className="grid lg:grid-cols-2 gap-0 lg:gap-8">
                {/* Content Side */}
                <div className="p-8 md:p-12 flex flex-col justify-center order-2 lg:order-1">
                  <div className="flex items-center gap-3 mb-6">
                    <div className={cn("p-3 rounded-xl inline-flex", foundations[activeTab].bg)}>
                      {(() => {
                        const Icon = foundations[activeTab].icon;
                        return <Icon className={cn("w-6 h-6", foundations[activeTab].color)} />;
                      })()}
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900">
                      {foundations[activeTab].title}
                    </h3>
                  </div>
                  
                  <h4 className="text-xl font-medium text-slate-700 mb-6">
                    {foundations[activeTab].subtitle}
                  </h4>
                  
                  <p className="text-lg text-slate-600 leading-relaxed mb-8">
                    {foundations[activeTab].description}
                  </p>

                  <ul className="space-y-4 mb-10">
                    {foundations[activeTab].points.map((point, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className={cn("w-5 h-5 mt-0.5 flex-shrink-0", foundations[activeTab].color)} />
                        <span className="text-slate-600">{point}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-8 border-t border-slate-100">
                    <p className="text-sm text-slate-500 italic">
                      {foundations[activeTab].footer}
                    </p>
                  </div>
                </div>

                {/* Visual Side */}
                <div className={cn(
                  "relative min-h-[400px] lg:min-h-auto flex items-center justify-center p-8 lg:p-12 order-1 lg:order-2",
                  "bg-slate-50/50 border-b lg:border-b-0 lg:border-l border-slate-100"
                )}>
                  {activeTab === 0 && (
                     // Identity Graph Visual - scaled to fit container
                     <div className="w-full h-full flex items-center justify-center relative">
                        <div className="w-full origin-center">
                            <IdentityGraphDiagram />
                        </div>
                     </div>
                  )}
                  {activeTab === 1 && <AIRiskEngineVisual />}
                  {activeTab === 2 && <IntegrationsVisual />}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      </div>
    </section>
  );
}
