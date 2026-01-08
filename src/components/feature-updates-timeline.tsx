"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Zap, CheckCircle2, AlertCircle, Megaphone, Tag } from "lucide-react";
import { cn } from "@/lib/utils";

export type UpdateCategory = "Feature" | "Improvement" | "Fix" | "Announcement" | "Product";

export interface UpdateItem {
  id: string;
  date: string;
  rawDate?: string; // ISO date string for sorting/grouping
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
  const [selectedYear, setSelectedYear] = React.useState<string | null>(null);
  const [selectedMonth, setSelectedMonth] = React.useState<string | null>(null);

  // Group items by Year -> Month
  const groupedItems = React.useMemo(() => {
    const groups: Record<string, Record<string, UpdateItem[]>> = {};
    
    items.forEach(item => {
        // Prefer rawDate if available for parsing, otherwise fall back to formatted date string
        // Note: 'December 27, 2025' is parseable by new Date()
        const d = item.rawDate ? new Date(item.rawDate) : new Date(item.date);
        if (isNaN(d.getTime())) return; 
        
        const year = d.getFullYear().toString();
        const month = d.toLocaleString('en-US', { month: 'long' });
        
        if (!groups[year]) groups[year] = {};
        if (!groups[year][month]) groups[year][month] = [];
        
        groups[year][month].push(item);
    });
    
    return groups;
  }, [items]);

  const years = React.useMemo(() => {
    const dataYears = Object.keys(groupedItems);
    const allYears = Array.from(new Set([...dataYears, '2025', '2024', '2023', '2022']));
    return allYears.sort((a, b) => Number(b) - Number(a));
  }, [groupedItems]);
  
  // Initialize selection
  React.useEffect(() => {
      if (years.length > 0 && !selectedYear) {
          setSelectedYear(years[0]);
      }
  }, [years, selectedYear]);

  // Update month when year changes
  React.useEffect(() => {
      if (selectedYear && groupedItems[selectedYear]) {
          const monthsInYear = Object.keys(groupedItems[selectedYear]).sort((a, b) => new Date(`${b} 1, 2000`).getTime() - new Date(`${a} 1, 2000`).getTime());
          if (monthsInYear.length > 0 && (!selectedMonth || !monthsInYear.includes(selectedMonth))) {
              setSelectedMonth(monthsInYear[0]);
          }
      }
  }, [selectedYear, groupedItems, selectedMonth]);

  const months = React.useMemo(() => {
      if (!selectedYear || !groupedItems[selectedYear]) return [];
      return Object.keys(groupedItems[selectedYear]).sort((a, b) => new Date(`${b} 1, 2000`).getTime() - new Date(`${a} 1, 2000`).getTime());
  }, [selectedYear, groupedItems]);

  const displayedItems = React.useMemo(() => {
      if (!selectedYear || !selectedMonth || !groupedItems[selectedYear] || !groupedItems[selectedYear][selectedMonth]) return [];
      return groupedItems[selectedYear][selectedMonth];
  }, [selectedYear, selectedMonth, groupedItems]);

  if (items.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="text-zinc-500 font-light">No updates found.</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 pt-0">
        {/* Year Tabs */}
        <div className="flex justify-center gap-4 mb-8">
            {years.map(year => (
                <button
                    key={year}
                    onClick={() => { setSelectedYear(year); setSelectedMonth(null); }} 
                    className={cn(
                        "px-6 py-2 rounded-full text-sm font-medium transition-all duration-300",
                        selectedYear === year 
                            ? "bg-zinc-900 text-white shadow-lg transform scale-105" 
                            : "bg-white text-zinc-500 hover:bg-zinc-50 border border-zinc-200 hover:border-zinc-300"
                    )}
                >
                    {year}
                </button>
            ))}
        </div>

        {/* Month Tabs */}
        {selectedYear && months.length > 0 && (
            <div className="flex justify-center gap-3 mb-16 flex-wrap">
                {months.map(month => (
                    <button
                        key={month}
                        onClick={() => setSelectedMonth(month)}
                        className={cn(
                            "px-4 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 uppercase tracking-wide",
                            selectedMonth === month
                                ? "bg-zinc-100 text-zinc-900 border-zinc-300 border font-bold"
                                : "text-zinc-400 hover:text-zinc-600 hover:bg-zinc-50 border border-transparent"
                        )}
                    >
                        {month}
                    </button>
                ))}
            </div>
        )}

      <div className="relative">
        {(!groupedItems[selectedYear || ""] || displayedItems.length === 0) && (
          <div className="text-center py-12 text-zinc-400 font-light">
            No updates found for {selectedYear}.
          </div>
        )}

        {displayedItems.length > 0 && (
          <>
            {/* Vertical Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-zinc-100 -translate-x-1/2 hidden md:block" />
            <div className="absolute left-8 top-0 bottom-0 w-px bg-zinc-100 -translate-x-1/2 md:hidden" />

            <div className="space-y-16">
              {displayedItems.map((update, index) => (
                <motion.div
                  key={update.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }} // Changed from whileInView for smoother tab transitions
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
                    <div
                      className={cn(
                        "relative",
                        index % 2 === 0 ? "md:pl-16" : "md:pr-16 md:text-right"
                      )}
                    >
                      {/* Date Mobile (above card) */}
                      <div className="md:hidden mb-3 flex items-center gap-2 text-xs font-mono text-zinc-400 uppercase tracking-wider">
                        {update.date}
                      </div>

                      <div className="bg-white rounded-none transition-all duration-300 group-hover:translate-x-1">
                        <div
                          className={cn(
                            "flex flex-col gap-3",
                            index % 2 !== 0 ? "md:items-end" : "md:items-start"
                          )}
                        >
                          {/* Header: Date (Desktop) & Badges */}
                          <div
                            className={cn(
                              "flex items-center gap-3 flex-wrap mb-1",
                              index % 2 !== 0 ? "md:flex-row-reverse" : ""
                            )}
                          >
                            <span className="hidden md:inline-flex items-center text-xs font-mono text-zinc-400 uppercase tracking-wider">
                              {update.date}
                            </span>

                            <div className="w-px h-3 bg-zinc-200 hidden md:block" />

                            <span
                              className={cn(
                                "inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium border transition-colors",
                                getCategoryColor(update.category)
                              )}
                            >
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
                              <div className="relative w-full h-56">
                                <Image
                                  src={update.image}
                                  alt={update.title}
                                  fill
                                  className="object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                                />
                              </div>
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
          </>
        )}
      </div>
    </div>
  );
}
