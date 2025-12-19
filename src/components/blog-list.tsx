"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search } from "lucide-react";
import { urlFor } from "@/lib/sanity";
import { Input } from "@/components/ui/input";

interface Blog {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt: string;
  featuredImage?: { asset?: { _ref?: string } | unknown; alt?: string };
  publishedAt: string;
  category?: string;
}

const CATEGORIES = ["All", "Trending", "CASB", "Cloud Technologies", "Threats", "Azure"];

export function BlogList({ blogs }: { blogs: Blog[] }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredBlogs = useMemo(() => {
    return blogs.filter((blog) => {
      const matchesSearch = blog.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            blog.excerpt?.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === "All" || blog.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [blogs, searchQuery, selectedCategory]);

  return (
    <div className="space-y-12">
      {/* Search and Filter Section */}
      <div className="flex flex-col items-center space-y-8">
        <div className="relative w-full max-w-xl">
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
            <Search className="h-5 w-5" />
          </div>
          <Input
            placeholder="Search Blogs"
            className="pl-10 h-12 rounded-full bg-white shadow-sm border-gray-200"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category
                  ? "bg-cydenti-primary text-white"
                  : "bg-transparent text-slate-600 hover:bg-slate-50 hover:text-cydenti-primary"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Blog Grid */}
      {filteredBlogs.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No blogs found matching your criteria.</p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBlogs.map((blog) => {
            const hasFeaturedImage = Boolean(
              blog.featuredImage && (blog.featuredImage as { asset?: unknown }).asset
            );
            return (
              <Link
                key={blog._id}
                href={`/resources/blogs/${blog.slug.current}`}
                className="group block rounded-2xl bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100"
              >
                <div className="relative aspect-video overflow-hidden bg-slate-100">
                  {hasFeaturedImage ? (
                    <Image
                      src={urlFor(blog.featuredImage).width(600).height(400).url()}
                      alt={(blog.featuredImage as { alt?: string })?.alt || blog.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-full bg-slate-100 flex items-center justify-center text-slate-400">
                      No Image
                    </div>
                  )}
                </div>
                <div className="p-6">
                  {blog.category && (
                    <span className="text-xs font-medium text-cydenti-primary mb-2 block">
                      {blog.category}
                    </span>
                  )}
                  <h2 className="text-xl font-bold mt-2 mb-3 text-slate-900 group-hover:text-cydenti-primary transition-colors line-clamp-2">
                    {blog.title}
                  </h2>
                  {blog.excerpt && (
                    <p className="text-slate-600 line-clamp-3 text-sm mb-4">{blog.excerpt}</p>
                  )}
                  <time className="text-xs text-slate-400">
                    {new Date(blog.publishedAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
