"use client";

import { useState, useEffect } from "react";
import { ShieldCheck, Users, Cloud, FileCheck, Check, Sparkles, Loader2, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const audiences = [
  {
    title: "Security & Detection Engineering",
    shortDescription: "Identify and neutralize identity-based attacks before they cause damage.",
    description: [
      "Detect identity threats with precision",
      "AI-driven behavioral analysis",
      "Unified visibility across environments"
    ],
    icon: ShieldCheck,
    color: "text-rose-600",
    bg: "bg-rose-50",
    border: "border-rose-100",
    hoverBorder: "group-hover:border-rose-200",
    gradient: "from-rose-50/50 to-transparent"
  },
  {
    title: "Identity & IAM Teams",
    shortDescription: "Automate lifecycle management and enforce least privilege at scale.",
    description: [
      "Full visibility into access patterns",
      "Automate identity lifecycle management",
      "Enforce least privilege everywhere"
    ],
    icon: Users,
    color: "text-blue-600",
    bg: "bg-blue-50",
    border: "border-blue-100",
    hoverBorder: "group-hover:border-blue-200",
    gradient: "from-blue-50/50 to-transparent"
  },
  {
    title: "Cloud Security Architects",
    shortDescription: "Integrate identity security directly into your cloud infrastructure.",
    description: [
      "Identity-aware posture management",
      "Automated cloud access reviews",
      "Secure infrastructure at scale"
    ],
    icon: Cloud,
    color: "text-sky-600",
    bg: "bg-sky-50",
    border: "border-sky-100",
    hoverBorder: "group-hover:border-sky-200",
    gradient: "from-sky-50/50 to-transparent"
  },
  {
    title: "GRC & Compliance Leaders",
    shortDescription: "Simplify audits with automated evidence collection and continuous monitoring.",
    description: [
      "Streamline audit evidence collection",
      "Continuous compliance monitoring",
      "Automated reporting for ISO & SOC2"
    ],
    icon: FileCheck,
    color: "text-emerald-600",
    bg: "bg-emerald-50",
    border: "border-emerald-100",
    hoverBorder: "group-hover:border-emerald-200",
    gradient: "from-emerald-50/50 to-transparent"
  }
];

export function PlatformAudience() {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [placeholder, setPlaceholder] = useState("e.g. offboarding, shadow IT...");

  useEffect(() => {
    const updatePlaceholder = () => {
      if (typeof window !== "undefined" && window.innerWidth < 640) {
        setPlaceholder("How would Cydenti help for...");
      } else {
        setPlaceholder("e.g. offboarding, shadow IT...");
      }
    };

    updatePlaceholder();

    if (typeof window !== "undefined") {
      window.addEventListener("resize", updatePlaceholder);
      return () => window.removeEventListener("resize", updatePlaceholder);
    }
  }, []);

  const handleAskAi = async () => {
    if (!query.trim()) return;
    setLoading(true);
    setResponse("");
    try {
      const res = await fetch("/api/cydenti-help", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query })
      });
      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        const message =
          typeof err?.error === "string" && err.error.trim()
            ? err.error
            : "AI failed to generate a response.";
        setResponse(message);
        return;
      }
      const data = await res.json().catch(() => ({}));
      const text =
        (typeof data?.answer === "string" && data.answer.trim()) ||
        (typeof data?.suggestion === "string" && data.suggestion.trim()) ||
        "";
      setResponse(text || "No response generated. Please try a different query.");
    } catch {
      setResponse("Network error. Please check your connection or API configuration.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-indigo-100/40 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 backdrop-blur-sm px-4 py-1.5 text-sm font-medium text-blue-700 mb-6 shadow-sm"
          >
            Who It’s Built For
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight"
          >
            Built for Modern Security Teams
          </motion.h2>
          <motion.p
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="text-lg text-slate-600 mb-8"
          >
            See how Cydenti empowers your specific role.
          </motion.p>
        </div>

        {/* AI Interaction Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="max-w-2xl mx-auto mb-20 relative"
        >
          <div className="bg-white/80 backdrop-blur-md p-2 pl-6 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/20 ring-1 ring-slate-200/50 flex items-center gap-3 relative z-20 transition-all focus-within:shadow-[0_20px_40px_rgba(59,130,246,0.1)] focus-within:ring-blue-200">
             <div className="text-slate-500 font-medium whitespace-nowrap hidden sm:flex items-center gap-2 select-none">
               <Sparkles className="w-4 h-4 text-blue-500" />
               <span className="text-sm">How would Cydenti help for</span>
             </div>
             <input
               type="text"
               value={query}
               onChange={(e) => setQuery(e.target.value)}
               placeholder={placeholder}
               className="flex-1 border-none outline-none text-slate-900 placeholder:text-slate-400 font-medium bg-transparent h-14 min-w-0"
               onKeyDown={(e) => e.key === "Enter" && handleAskAi()}
             />
             <button 
               onClick={handleAskAi}
               disabled={loading || !query.trim()}
               className="h-12 w-12 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/30 hover:shadow-blue-500/40 hover:scale-105 active:scale-95 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:shadow-none"
             >
               {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <ArrowRight className="w-5 h-5" />}
             </button>
          </div>
          
          {/* AI Response Card */}
          <AnimatePresence>
            {response && (
              <motion.div 
                initial={{ opacity: 0, y: -20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                className="absolute top-full left-0 right-0 mt-6 bg-white/95 backdrop-blur-xl border border-blue-100/50 p-8 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] z-30 ring-1 ring-blue-50"
              >
                 <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-indigo-50/30 rounded-3xl pointer-events-none" />
                 
                 <div className="relative flex items-start gap-5">
                   <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shrink-0 shadow-lg shadow-blue-500/20 ring-4 ring-blue-50">
                     <Sparkles className="w-6 h-6 text-white" />
                   </div>
                   <div className="flex-1 pt-1">
                     <div className="flex items-center justify-between mb-3">
                       <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-blue-50 text-blue-600 border border-blue-100">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                          <span className="text-[11px] font-bold uppercase tracking-wider">AI Insight</span>
                       </div>
                       <button 
                          onClick={() => setResponse("")} 
                          className="w-8 h-8 flex items-center justify-center rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
                       >
                          <span className="sr-only">Close</span>
                          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                       </button>
                     </div>
                     <p className="text-slate-700 leading-relaxed text-[15px] font-medium">
                       {response}
                     </p>
                   </div>
                 </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-16">
          {audiences.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="group relative h-[400px]"
              >
                <div
                  className={cn(
                    "relative flex flex-col h-full p-8 rounded-3xl border bg-white/90 backdrop-blur-sm shadow-[0_18px_45px_rgba(15,23,42,0.06)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_26px_70px_rgba(15,23,42,0.12)] overflow-hidden",
                    item.border,
                    item.hoverBorder
                  )}
                >
                <div className={cn(
                  "absolute inset-0 bg-gradient-to-b opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none",
                  item.gradient
                )} />
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex flex-col items-center text-center transition-all duration-500 group-hover:-translate-y-1">
                    <div className={cn(
                      "w-16 h-16 rounded-2xl mb-6 flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg",
                      item.bg, 
                      item.color
                    )}>
                      <Icon className="w-8 h-8" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-slate-900 mb-2 px-2 group-hover:text-slate-800">
                      {item.title}
                    </h3>
                  </div>
                  
                  <div className="mt-6 flex-grow flex flex-col justify-center">
                    {/* Short Description - Visible by default */}
                    <p className="text-center text-slate-600 text-lg leading-relaxed px-2 group-hover:hidden transition-all duration-300">
                      {item.shortDescription}
                    </p>

                    {/* Bullet Points - Visible on hover */}
                    <ul className="space-y-4 hidden group-hover:block animate-in fade-in slide-in-from-bottom-4 duration-500">
                      {item.description.map((point, i) => (
                        <li 
                          key={i}
                          className="flex items-start gap-3 text-sm text-slate-600"
                        >
                          <div className={cn(
                            "mt-0.5 w-5 h-5 rounded-full flex items-center justify-center shrink-0 transition-colors duration-300", 
                            item.bg, 
                            item.color
                          )}>
                            <Check className="w-3 h-3" />
                          </div>
                          <span className="font-medium">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center max-w-2xl mx-auto"
        >
          <p className="text-xl text-slate-600 font-medium">
            Cydenti bridges identity, security, and cloud teams with a shared language of risk.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
