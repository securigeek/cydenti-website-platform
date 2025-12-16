"use client";

import { ShieldCheck, Users, Cloud, FileCheck } from "lucide-react";
import { cn } from "@/lib/utils";

const audiences = [
  {
    title: "Security & Detection Engineering",
    icon: ShieldCheck,
    color: "text-red-600",
    bg: "bg-red-50",
    border: "border-red-100"
  },
  {
    title: "Identity & IAM Teams",
    icon: Users,
    color: "text-blue-600",
    bg: "bg-blue-50",
    border: "border-blue-100"
  },
  {
    title: "Cloud Security Architects",
    icon: Cloud,
    color: "text-sky-600",
    bg: "bg-sky-50",
    border: "border-sky-100"
  },
  {
    title: "GRC & Compliance Leaders",
    icon: FileCheck,
    color: "text-emerald-600",
    bg: "bg-emerald-50",
    border: "border-emerald-100"
  }
];

export function PlatformAudience() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-sm font-medium text-blue-700 mb-6">
            Who It’s Built For
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 tracking-tight">
            Built for Modern Security Teams
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
          {audiences.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index}
                className={cn(
                  "group flex flex-col items-center text-center p-8 rounded-2xl border bg-gray-50/50 hover:bg-white transition-all duration-300 hover:shadow-lg",
                  item.border
                )}
              >
                <div className={cn(
                  "p-4 rounded-full mb-6 transition-transform group-hover:scale-110 duration-300", 
                  item.bg, 
                  item.color
                )}>
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
              </div>
            );
          })}
        </div>

        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xl text-gray-600 font-medium">
            Cydenti bridges identity, security, and cloud teams with a shared language of risk.
          </p>
        </div>
      </div>
    </section>
  );
}
