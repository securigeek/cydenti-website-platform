"use client";

import React from "react";

export function NewsTicker() {
  const text = "New Update - Cydenti has recently launched Identity Access Graph. Existing User will get this feature in their included subscription. Get a Demo to know more about our feature in detail";

  return (
    <div className="w-full bg-[#1A1A1A] text-white py-2 overflow-hidden border-y border-gray-800 relative z-20 group">
      <div className="flex whitespace-nowrap">
        <div className="animate-marquee flex items-center group-hover:[animation-play-state:paused]">
          <span className="mx-4 text-sm font-medium tracking-wide">{text}</span>
          <span className="mx-4 text-sm font-medium tracking-wide">•</span>
          <span className="mx-4 text-sm font-medium tracking-wide">{text}</span>
          <span className="mx-4 text-sm font-medium tracking-wide">•</span>
          <span className="mx-4 text-sm font-medium tracking-wide">{text}</span>
          <span className="mx-4 text-sm font-medium tracking-wide">•</span>
        </div>
        <div className="animate-marquee flex items-center group-hover:[animation-play-state:paused]" aria-hidden="true">
          <span className="mx-4 text-sm font-medium tracking-wide">{text}</span>
          <span className="mx-4 text-sm font-medium tracking-wide">•</span>
          <span className="mx-4 text-sm font-medium tracking-wide">{text}</span>
          <span className="mx-4 text-sm font-medium tracking-wide">•</span>
          <span className="mx-4 text-sm font-medium tracking-wide">{text}</span>
          <span className="mx-4 text-sm font-medium tracking-wide">•</span>
        </div>
      </div>
    </div>
  );
}
