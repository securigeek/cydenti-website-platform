"use client";

import React from "react";
import { motion } from "framer-motion";
import { Zap, CheckCircle2, AlertCircle, Megaphone, Calendar, Tag } from "lucide-react";
import { cn } from "@/lib/utils";

export type UpdateCategory = "Feature" | "Improvement" | "Fix" | "Announcement" | "Product";

export interface UpdateItem {
  id: string;
  date: string;
  title: string;
  description: string;
  category: UpdateCategory;
  version?: string;
  image?: string;
}

const getCategoryIcon = (category: UpdateCategory) => {
  switch (category) {
    case "Feature":
      return <Zap className="w-4 h-4" />;
    case "Improvement":
      return <CheckCircle2 className="w-4 h-4" />;
    case "Fix":
      return <AlertCircle className="w-4 h-4" />;
    case "Announcement":
      return <Megaphone className="w-4 h-4" />;
    case "Product":
      return <Tag className="w-4 h-4" />;
    default:
      return <Zap className="w-4 h-4" />;
  }
};

const getCategoryColor = (category: UpdateCategory) => {
  // Monochromatic muted palette with subtle variations
  switch (category) {
    case "Feature":
      return "text-zinc-900 border-zinc-200 bg-zinc-50";
    case "Improvement":
      return "text-zinc-600 border-zinc-200 bg-white";
    case "Fix":
      return "text-zinc-500 border-zinc-200 bg-white";
    case "Announcement":
      return "text-zinc-900 border-zinc-900 bg-white";
    case "Product":
      return "text-zinc-800 border-zinc-300 bg-zinc-100";
    default:
      return "text-zinc-500 border-zinc-200 bg-white";
  }
};

interface FeatureUpdatesTimelineProps {
  items?: UpdateItem[];
}

export function FeatureUpdatesTimeline({ items = [] }: FeatureUpdatesTimelineProps) {
  if (items.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="text-zinc-500 font-light">No updates found.</p>
      </div>
    );
  }

  return (
    <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Vertical Line */}
      <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-zinc-100 -translate-x-1/2 hidden md:block" />
      <div className="absolute left-8 top-0 bottom-0 w-px bg-zinc-100 -translate-x-1/2 md:hidden" />

      <div className="space-y-16">
        {items.map((update, index) => (
          <motion.div
            key={update.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={cn(
              "relative flex flex-col md:flex-row gap-8 md:gap-0",
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            )}
          >
            {/* Timeline Dot */}
            <div className="absolute left-8 md:left-1/2 top-0 w-3 h-3 rounded-full bg-white border border-zinc-300 shadow-[0_0_0_4px_rgba(255,255,255,1)] z-10 -translate-x-1/2 mt-6">
              <div className="w-full h-full rounded-full bg-zinc-900 scale-0 group-hover:scale-100 transition-transform duration-300" />
            </div>

            {/* Content Card */}
            <div className="flex-1 md:w-1/2 pl-16 md:pl-0 group">
              <div className={cn(
                "relative",
                index % 2 === 0 ? "md:pl-16" : "md:pr-16 md:text-right"
              )}>
                {/* Date Mobile (above card) */}
                <div className="md:hidden mb-3 flex items-center gap-2 text-xs font-mono text-zinc-400 uppercase tracking-wider">
                  {update.date}
                </div>

                <div className="bg-white rounded-none transition-all duration-300 group-hover:translate-x-1">
                  <div className={cn(
                    "flex flex-col gap-3",
                    index % 2 !== 0 ? "md:items-end" : "md:items-start"
                  )}>
                    
                    {/* Header: Date (Desktop) & Badges */}
                    <div className={cn(
                      "flex items-center gap-3 flex-wrap mb-1",
                      index % 2 !== 0 ? "md:flex-row-reverse" : ""
                    )}>
                      <span className="hidden md:inline-flex items-center text-xs font-mono text-zinc-400 uppercase tracking-wider">
                        {update.date}
                      </span>

                      <div className="w-px h-3 bg-zinc-200 hidden md:block" />

                      <span className={cn(
                        "inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium border transition-colors",
                        getCategoryColor(update.category)
                      )}>
                        {getCategoryIcon(update.category)}
                        {update.category}
                      </span>
                      
                      {update.version && (
                        <span className="inline-flex items-center gap-1 px-2 py-1 text-zinc-400 text-xs font-mono">
                          <span className="opacity-50">#</span>
                          {update.version}
                        </span>
                      )}
                    </div>

                    {/* Title & Description */}
                    <div>
                      <h3 className="text-xl font-medium text-zinc-900 mb-3 group-hover:text-zinc-600 transition-colors tracking-tight">
                        {update.title}
                      </h3>
                      <p className="text-zinc-500 leading-relaxed text-sm font-light">
                        {update.description}
                      </p>
                    </div>

                    {/* Image (Optional) */}
                    {update.image && (
                      <div className="w-full mt-4 overflow-hidden border border-zinc-100 bg-zinc-50 p-2">
                        <img 
                          src={update.image} 
                          alt={update.title} 
                          className="w-full h-auto object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Empty space for the other side of the timeline */}
            <div className="flex-1 md:w-1/2 hidden md:block" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
