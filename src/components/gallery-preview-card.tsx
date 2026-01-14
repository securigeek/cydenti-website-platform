"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, PlayCircle, FileText } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { getYoutubeEmbedUrl, getYoutubeThumbnailUrl } from "@/lib/video-utils";

interface GalleryPreviewCardProps {
  item: {
    _id: string;
    _type: string;
    title: string;
    slug?: { current: string };
    excerpt?: string;
    description?: string;
    publishedAt: string;
    type?: string;
    url?: string;
    file?: { asset: { url: string } };
    category?: string;
  };
}

interface GalleryCardContentProps {
  item: GalleryPreviewCardProps["item"];
  isVideo: boolean;
  thumbnailUrl: string | null;
}

function GalleryCardContent({ item, isVideo, thumbnailUrl }: GalleryCardContentProps) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col cursor-pointer">
      <div className="h-48 bg-slate-100 relative overflow-hidden">
        {isVideo ? (
          <div className="absolute inset-0 bg-slate-900 flex items-center justify-center group-hover:bg-slate-800 transition-colors">
            {thumbnailUrl && (
              <Image
                src={thumbnailUrl}
                alt={item.title}
                fill
                className="object-cover opacity-60"
              />
            )}
            <PlayCircle className="w-12 h-12 text-white relative z-10" />
          </div>
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center group-hover:scale-105 transition-transform">
            <FileText className="w-16 h-16 text-blue-200" />
          </div>
        )}
        <div className="absolute top-4 left-4">
          <span
            className={`text-[10px] font-bold uppercase px-2 py-1 rounded-full shadow-sm ${
              isVideo ? "bg-red-500 text-white" : "bg-white text-blue-600"
            }`}
          >
            {item._type === "blog" ? "Article" : item.type}
          </span>
        </div>
      </div>

      <div className="p-6 flex-1 flex flex-col">
        <div className="text-xs text-slate-400 mb-3">
          {new Date(item.publishedAt).toLocaleDateString()}
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
          {item.title}
        </h3>
        <p className="text-slate-600 text-sm line-clamp-3 mb-4 flex-1">
          {item.excerpt || item.description}
        </p>
        <span className="text-sm font-medium text-blue-600 flex items-center mt-auto group-hover:translate-x-1 transition-transform">
          {isVideo ? "Watch Video" : "Read More"}{" "}
          <ArrowRight className="ml-1 w-3 h-3" />
        </span>
      </div>
    </div>
  );
}

export function GalleryPreviewCard({ item }: GalleryPreviewCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  const isVideo = item._type === "resource" && item.type === "video";
  const embedUrl = isVideo && item.url ? getYoutubeEmbedUrl(item.url) : null;
  const thumbnailUrl = isVideo && item.url ? getYoutubeThumbnailUrl(item.url) : null;

  const link =
    item._type === "blog" && item.slug
      ? `/resources/blogs/${item.slug.current}`
      : item.file?.asset?.url || item.url || "/resources/gallery";

  if (isVideo) {
    return (
      <>
        <div onClick={() => setIsOpen(true)} className="block h-full group">
          <GalleryCardContent item={item} isVideo={isVideo} thumbnailUrl={thumbnailUrl} />
        </div>

        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogContent className="sm:max-w-[800px] p-0 bg-black border-slate-800 overflow-hidden">
            <DialogHeader className="sr-only">
              <DialogTitle>{item.title}</DialogTitle>
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

  return (
    <Link href={link} className="group block h-full">
      <GalleryCardContent item={item} isVideo={isVideo} thumbnailUrl={thumbnailUrl} />
    </Link>
  );
}
