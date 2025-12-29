'use client';

import { useEffect, useState, useCallback, startTransition } from 'react';
import { AdminLayout } from '@/components/admin-layout';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Check, X } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

/* eslint-disable @typescript-eslint/no-explicit-any */
interface Blog {
  _id: string;
  title: string;
  slug: { current: string };
  published: boolean;
  publishedAt: string;
  content?: any[];
  seoTitle?: string;
  seoDescription?: string;
  focusKeyword?: string;
  schemaArticle?: boolean;
  schemaFAQ?: boolean;
  schemaHowTo?: boolean;
  schemaAuthor?: boolean;
  featuredImage?: any;
}
/* eslint-enable @typescript-eslint/no-explicit-any */

// SEO Helper Functions
const normalize = (s: string) => (s || '').toLowerCase().trim();

/* eslint-disable @typescript-eslint/no-explicit-any */
const getPlainText = (blocks: any[] = []) => {
  return blocks
    .filter((b) => b._type === 'block')
    .map((b) => (b.children || []).map((c: any) => c.text).join(' '))
    .join(' ');
};

const countInternalLinks = (blocks: any[] = []) => {
  let count = 0;
  blocks.forEach((b) => {
    const marks = b.markDefs || [];
    marks.forEach((m: any) => {
      if (m?._type === 'link' && (m.href?.startsWith('/') || m.href?.includes('cydenti'))) {
        count++;
      }
    });
  });
  return count;
};
/* eslint-enable @typescript-eslint/no-explicit-any */

const calculateSeoScore = (blog: Blog) => {
  let score = 0;
  const keyword = normalize(blog.focusKeyword || '');
  const contentText = getPlainText(blog.content);
  const internalLinks = countInternalLinks(blog.content);
  
  // 1. Keyword in Title (20)
  if (keyword && normalize(blog.title).includes(keyword)) score += 20;
  
  // 2. Keyword in Slug (15)
  if (keyword && normalize(blog.slug?.current).includes(keyword.replace(/\s+/g, '-'))) score += 15;
  
  // 3. Meta Description (15)
  if (blog.seoDescription && blog.seoDescription.length >= 120 && blog.seoDescription.length <= 160) {
    score += 15;
  } else if (blog.seoDescription) {
    score += 8;
  }
  
  // 4. Internal Links (15)
  if (internalLinks > 0) score += 15;
  
  // 5. Content Length (15)
  const wordCount = contentText.split(/\s+/).filter(Boolean).length;
  if (wordCount >= 800) score += 15;
  else if (wordCount >= 300) score += 8;
  
  // 6. Schema (10)
  if (blog.schemaArticle || blog.schemaFAQ || blog.schemaHowTo) score += 10;
  
  // 7. Featured Image (10)
  if (blog.featuredImage?.asset) score += 10;
  
  return Math.min(100, score);
};

const SeoStatusIcon = ({ condition }: { condition: boolean }) => {
  return condition ? (
    <Check className="h-4 w-4 text-green-600" />
  ) : (
    <X className="h-4 w-4 text-red-500" />
  );
};

export default function AdminBlogsPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [seoScores, setSeoScores] = useState<Record<string, number>>({});

  const fetchBlogs = useCallback(async () => {
    const token = localStorage.getItem('adminToken');
    const res = await fetch('/api/admin/blog', {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (res.ok) {
      const data = await res.json();
      startTransition(() => {
        setBlogs(data);
        // Calculate scores
        const scores: Record<string, number> = {};
        data.forEach((b: Blog) => {
          scores[b._id] = calculateSeoScore(b);
        });
        setSeoScores(scores);
      });
    }
  }, []);

  useEffect(() => {
    fetchBlogs();
  }, [fetchBlogs]);

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this blog?')) return;

    const token = localStorage.getItem('adminToken');
    const res = await fetch(`/api/admin/blog?id=${id}`, {
      method: 'DELETE',
      headers: { Authorization: `Bearer ${token}` },
    });

    if (res.ok) {
      fetchBlogs();
    }
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Blog Posts</h1>
          <Button asChild>
            <Link href="/admin/blogs/new">Create New Post</Link>
          </Button>
        </div>

        <div className="bg-white rounded-lg border">
          {blogs.length === 0 ? (
            <div className="p-8 text-center text-muted-foreground">
              No blog posts yet. Create your first one!
            </div>
          ) : (
            <div className="divide-y">
              {blogs.map((blog) => (
                <div key={blog._id} className="p-4 flex items-center justify-between">
                  <div className="flex-1 mr-8">
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="font-semibold text-lg">{blog.title}</h3>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <button 
                            className={`text-[10px] font-bold px-2 py-0.5 rounded border transition-colors outline-none focus:ring-1 focus:ring-offset-1 cursor-pointer ${
                              (seoScores[blog._id] || 0) >= 80 ? 'border-green-500 text-green-700 hover:bg-green-50' :
                              (seoScores[blog._id] || 0) >= 50 ? 'border-yellow-500 text-yellow-700 hover:bg-yellow-50' :
                              'border-red-500 text-red-700 hover:bg-red-50'
                            }`}
                          >
                            SEO
                          </button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="start" className="w-64 p-3 bg-white border shadow-md rounded-md z-50">
                          <div className="font-semibold text-xs mb-3 text-slate-500 uppercase tracking-wider border-b pb-2">SEO Summary</div>
                          <div className="space-y-3 text-sm">
                            <div className="flex items-center justify-between">
                              <span className="text-slate-700">Focus keyword set</span>
                              <SeoStatusIcon condition={Boolean(blog.focusKeyword)} />
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-slate-700">Meta title optimized</span>
                              <SeoStatusIcon condition={Boolean(blog.seoTitle)} />
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-slate-700">Meta description added</span>
                              <SeoStatusIcon condition={Boolean(blog.seoDescription)} />
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-slate-700">Internal links: {countInternalLinks(blog.content)}</span>
                              <SeoStatusIcon condition={countInternalLinks(blog.content) > 0} />
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-slate-700">Schema</span>
                                <span className="text-xs text-slate-500">
                                  {[
                                    blog.schemaArticle && 'Article',
                                    blog.schemaFAQ && 'FAQ',
                                    blog.schemaHowTo && 'HowTo'
                                  ].filter(Boolean).join(', ') || 'None'}
                                </span>
                            </div>
                          </div>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>

                    <div className="w-full max-w-sm h-1 bg-slate-100 rounded-full overflow-hidden mb-2">
                      <div 
                        className={`h-full rounded-full transition-all duration-500 ${
                          (seoScores[blog._id] || 0) >= 80 ? 'bg-green-500' :
                          (seoScores[blog._id] || 0) >= 50 ? 'bg-yellow-500' :
                          'bg-red-500'
                        }`}
                        style={{ width: `${seoScores[blog._id] || 0}%` }}
                      />
                    </div>

                    <p className="text-sm text-muted-foreground flex items-center gap-2">
                      <span>{blog.published ? 'Published' : 'Draft'}</span>
                      <span>•</span>
                      <span>{new Date(blog.publishedAt).toLocaleDateString()}</span>
                      <span>•</span>
                      <span className={`font-medium ${(seoScores[blog._id] || 0) >= 80 ? 'text-green-600' : (seoScores[blog._id] || 0) >= 50 ? 'text-yellow-600' : 'text-red-600'}`}>
                        SEO: {seoScores[blog._id] || 0}%
                      </span>
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Button asChild variant="outline" size="sm">
                      <Link href={`/admin/blogs/edit/${blog._id}`}>Edit</Link>
                    </Button>
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => handleDelete(blog._id)}
                    >
                      Delete
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </AdminLayout>
  );
}
