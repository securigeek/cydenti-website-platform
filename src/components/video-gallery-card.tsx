"use client";

import { useState } from "react";
import Image from "next/image";
import { PlayCircle } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { getYoutubeEmbedUrl, getYoutubeThumbnailUrl } from "@/lib/video-utils";

interface VideoGalleryCardProps {
  video: {
    _id: string;
    title: string;
    description?: string;
    url: string;
  };
}

export function VideoGalleryCard({ video }: VideoGalleryCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const embedUrl = getYoutubeEmbedUrl(video.url);
  const thumbnailUrl = getYoutubeThumbnailUrl(video.url);

  return (
    <>
      <div 
        onClick={() => setIsOpen(true)}
        className="group relative bg-black rounded-xl overflow-hidden aspect-video shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
      >
        {/* Background Image/Thumbnail */}
        {thumbnailUrl ? (
          <Image
            src={thumbnailUrl}
            alt={video.title}
            fill
            className="object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500 scale-100 group-hover:scale-110"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-black opacity-80" />
        )}
        
        {/* Overlay Content */}
        <div className="absolute inset-0 p-6 flex flex-col justify-end z-10 bg-gradient-to-t from-black/90 via-black/40 to-transparent">
          <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <span className="inline-block px-2 py-0.5 rounded bg-red-600 text-white text-[10px] font-bold uppercase tracking-wider mb-2">
              Video
            </span>
            <h3 className="text-white font-bold text-lg leading-tight mb-2 drop-shadow-md">
              {video.title}
            </h3>
            {video.description && (
              <p className="text-slate-300 text-xs line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                {video.description}
              </p>
            )}
          </div>
        </div>

        {/* Play Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <PlayCircle className="w-8 h-8 text-white fill-white/20" />
          </div>
        </div>
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-screen-sm sm:max-w-screen-md p-0 bg-black border-slate-800 overflow-hidden">
          <DialogHeader className="sr-only">
            <DialogTitle>{video.title}</DialogTitle>
          </DialogHeader>
          <div className="relative aspect-video w-full">
            {isOpen && embedUrl && (
              <iframe
                src={embedUrl}
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
