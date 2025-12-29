"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { cn } from "@/lib/utils";

interface TextRevealProps {
  className?: string;
}

// Define the sentence structure with highlights
const sentence = [
  { text: "In", highlight: false },
  { text: "SaaS", highlight: true },
  { text: "environments,", highlight: true },
  { text: "breaches", highlight: false },
  { text: "start", highlight: false },
  { text: "with", highlight: false },
  { text: "identity.", highlight: true },
  { text: "Hidden", highlight: false },
  { text: "permissions,", highlight: true },
  { text: "service", highlight: true },
  { text: "accounts,", highlight: true },
  { text: "and", highlight: false },
  { text: "AI", highlight: true },
  { text: "workflows", highlight: true },
  { text: "silently", highlight: false },
  { text: "expand", highlight: false },
  { text: "risk", highlight: false },
  { text: "across", highlight: false },
  { text: "your", highlight: false },
  { text: "stack.", highlight: true },
];

function TextReveal({ className }: TextRevealProps) {
  const container = useRef<HTMLDivElement>(null);
  
  // Adjusted reveal speed to match shorter scroll distance
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"], 
  });

  return (
    <div ref={container} className={cn("h-[200vh] relative", className)}>
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden z-10">
        <div className="max-w-5xl px-4 md:px-8 flex flex-wrap justify-center gap-x-3 gap-y-2 md:gap-x-4 md:gap-y-3 leading-relaxed">
          {sentence.map((wordObj, i) => {
            // Keep the animation active throughout the scroll
            const step = 0.9 / sentence.length; 
            const start = i * step;
            const end = start + step;
            
            return (
              <Word 
                key={i} 
                progress={scrollYProgress} 
                range={[start, end]}
                highlight={wordObj.highlight}
              >
                {wordObj.text}
              </Word>
            );
          })}
        </div>
      </div>
    </div>
  );
}

const Word = ({ 
    children, 
    progress, 
    range, 
    highlight 
}: { 
    children: string; 
    progress: MotionValue<number>; 
    range: [number, number];
    highlight: boolean;
}) => {
  const opacity = useTransform(progress, range, [0, 1]);
  const y = useTransform(progress, range, [20, 0]);
  const filter = useTransform(progress, range, ["blur(10px)", "blur(0px)"]);
  
  return (
    <span className="relative inline-block">
      {/* Reveal Layer */}
      <motion.span 
        style={{ opacity, y, filter }} 
        className={cn(
            "relative inline-block font-bold tracking-tight transition-colors duration-500",
            "text-2xl md:text-4xl lg:text-5xl", 
            highlight 
                ? "text-transparent bg-clip-text bg-gradient-to-r from-cydenti-primary via-cydenti-secondary to-purple-500" 
                : "text-slate-900 dark:text-white"
        )}
      >
        {children}
      </motion.span>
    </span>
  );
};

export function TextRevealSection() {
  return (
    <section className="bg-white dark:bg-black w-full">
      <TextReveal />
    </section>
  );
}