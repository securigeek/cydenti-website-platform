import { sanityClient } from '@/lib/sanity';
import Link from 'next/link';
import { ArrowRight, Linkedin, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { GalleryPreviewCard } from '@/components/gallery-preview-card';

type ResourceType = 'video' | 'whitepaper' | 'webinar';

interface GalleryItem {
  _id: string;
  _type: 'blog' | 'resource';
  title: string;
  slug?: { current: string };
  excerpt?: string;
  description?: string;
  publishedAt: string;
  type?: ResourceType;
  url?: string;
  file?: { asset: { url: string } };
  category?: string;
}

interface LinkedinPost {
  _id: string;
  authorName?: string;
  date?: string;
  content?: string;
  postUrl?: string;
}

export async function GalleryPreviewSection() {
  const items = await sanityClient.fetch<GalleryItem[]>(
    `*[_type in ["blog", "resource"]] | order(publishedAt desc)[0...3] {
      _id,
      _type,
      title,
      slug,
      excerpt,
      description,
      publishedAt,
      type,
      url,
      file {
        asset-> {
          url
        }
      },
      category
    }`
  );

  const linkedinPosts = await sanityClient.fetch<LinkedinPost[]>(
    `*[_type == "linkedinPost" && isActive == true] | order(date desc)[0...3]`
  );

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="hidden sm:block absolute -top-[20%] -right-[10%] w-[600px] h-[600px] bg-blue-100/50 rounded-full blur-3xl mix-blend-multiply opacity-70" />
        <div className="hidden sm:block absolute -bottom-[20%] -left-[10%] w-[600px] h-[600px] bg-indigo-100/50 rounded-full blur-3xl mix-blend-multiply opacity-70" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Community & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">Gallery</span>
            </h2>
            <p className="text-lg text-slate-600">
              Stay connected with our latest research, insights, and community discussions.
            </p>
          </div>
          <div className="hidden md:flex gap-4">
             <Button variant="outline" asChild className="rounded-full">
                <a href="https://www.linkedin.com/company/cydenti" target="_blank" rel="noopener noreferrer">
                   Join Conversation
                </a>
             </Button>
             <Button asChild className="rounded-full px-6">
                <Link href="/resources/gallery">
                View Full Gallery <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
            </Button>
          </div>
        </div>

        <Tabs defaultValue="insights" className="w-full">
            <TabsList className="grid w-full sm:max-w-sm grid-cols-2 mb-8 bg-slate-100 p-1 rounded-full">
                <TabsTrigger value="insights" className="rounded-full data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:shadow-sm">Latest Insights</TabsTrigger>
                <TabsTrigger value="community" className="rounded-full data-[state=active]:bg-white data-[state=active]:text-[#0A66C2] data-[state=active]:shadow-sm">Community Pulse</TabsTrigger>
            </TabsList>
            
            <TabsContent value="insights" className="mt-0 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="grid md:grid-cols-3 gap-8">
                  {items.map((item) => (
                    <GalleryPreviewCard key={item._id} item={item} />
                  ))}
                </div>
            </TabsContent>

            <TabsContent value="community" className="mt-0 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="grid md:grid-cols-3 gap-8">
                    {(linkedinPosts && linkedinPosts.length > 0) ? linkedinPosts.map((post) => (
                         <div key={post._id} className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:-translate-y-1 transition-transform duration-300 flex flex-col h-full relative overflow-hidden group">
                             <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <Linkedin size={80} />
                             </div>
                            <div className="flex items-start justify-between mb-6 relative z-10">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-[#0A66C2] rounded-lg flex items-center justify-center text-white shrink-0 shadow-md">
                                        <Linkedin size={20} fill="white" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-slate-900 text-sm">{post.authorName || "Cydenti"}</p>
                                        <p className="text-xs text-slate-400">{post.date}</p>
                                    </div>
                                </div>
                                <Quote className="text-slate-200 fill-slate-50" size={24} />
                            </div>
                            <div className="flex-grow relative z-10">
                                <p className="text-slate-600 leading-relaxed text-[15px] mb-6 line-clamp-4">
                                    {post.content}
                                </p>
                            </div>
                            <div className="pt-6 border-t border-slate-50 mt-auto relative z-10">
                                <a
                                href={post.postUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-sm font-bold text-[#0A66C2] hover:text-[#004182] transition-colors"
                                >
                                Read on LinkedIn
                                <ArrowRight size={16} />
                                </a>
                            </div>
                        </div>
                    )) : (
                        <div className="col-span-3 text-center py-12 text-slate-500">
                            No community posts available at the moment.
                        </div>
                    )}
                </div>
            </TabsContent>
        </Tabs>

        <div className="mt-8 text-center md:hidden flex flex-col gap-4">
            <Button asChild className="rounded-full px-6 w-full">
                <Link href="/resources/gallery">
                View Full Gallery <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
            </Button>
            <Button variant="outline" asChild className="rounded-full w-full">
                <a href="https://www.linkedin.com/company/cydenti" target="_blank" rel="noopener noreferrer">
                   Join Conversation
                </a>
             </Button>
        </div>
      </div>
    </section>
  );
}
