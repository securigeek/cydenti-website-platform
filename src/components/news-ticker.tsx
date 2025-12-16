"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { sanityClient } from "@/lib/sanity";

interface Announcement {
  message: string;
  linkText?: string;
  linkUrl?: string;
  isActive: boolean;
  backgroundColor: string;
  textColor: string;
}

const FALLBACK_ANNOUNCEMENT: Announcement = {
  message:
    'New Update — The Cydenti now features AI/LLM and seamless automation with in‑built AI agents',
  linkText: 'Learn more',
  linkUrl: '/company/updates',
  isActive: true,
  backgroundColor: '#000000',
  textColor: '#FFFFFF',
};

export function NewsTicker() {
  const [announcement, setAnnouncement] = useState<Announcement | null>(null);

  useEffect(() => {
    sanityClient
      .fetch(`*[_type == "announcement" && isActive == true][0]`)
      .then((doc) => setAnnouncement(doc || FALLBACK_ANNOUNCEMENT))
      .catch(() => setAnnouncement(FALLBACK_ANNOUNCEMENT));
  }, []);

  if (!announcement?.isActive) return null;

  const content = (
    <>
      <span className="mx-4 text-sm font-medium tracking-wide">{announcement.message}</span>
      {announcement.linkText && announcement.linkUrl && (
        <Link href={announcement.linkUrl} className="mx-2 underline hover:opacity-80">
          {announcement.linkText}
        </Link>
      )}
      <span className="mx-4 text-sm font-medium tracking-wide">•</span>
    </>
  );

  return (
    <div 
      className="w-full py-2 overflow-hidden border-y relative z-20 group"
      style={{
        backgroundColor: announcement.backgroundColor,
        color: announcement.textColor,
        borderColor: announcement.textColor + '20'
      }}
    >
      <div className="flex whitespace-nowrap">
        <div className="animate-marquee flex items-center group-hover:[animation-play-state:paused]">
          {content}
          {content}
          {content}
        </div>
        <div className="animate-marquee flex items-center group-hover:[animation-play-state:paused]" aria-hidden="true">
          {content}
          {content}
          {content}
        </div>
      </div>
    </div>
  );
}
