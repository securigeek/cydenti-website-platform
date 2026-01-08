import { sanityClient } from '@/lib/sanity';
import { Footer } from '@/components/footer';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlayCircle, FileText, ArrowRight, Calendar, Linkedin, Quote } from 'lucide-react';
import { VideoGalleryCard } from '@/components/video-gallery-card';

type ResourceType = 'video' | 'whitepaper' | 'webinar';

interface Blog {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt: string;
  publishedAt: string;
  featuredImage?: unknown;
  category?: string;
}

interface Resource {
  _id: string;
  title: string;
  slug?: { current: string };
  type: ResourceType;
  description?: string;
  url?: string;
  file?: unknown;
  thumbnail?: unknown;
  publishedAt?: string;
  featured?: boolean;
}

interface ProductUpdate {
  _id: string;
  title: string;
  date: string;
  category?: string;
}

interface LinkedinPost {
  _id: string;
  authorName?: string;
  date?: string;
  content?: string;
  postUrl?: string;
}

interface LibraryData {
  blogs: Blog[];
  resources: Resource[];
  updates: ProductUpdate[];
  linkedinPosts: LinkedinPost[];
}

export const metadata = {
  title: 'Gallery - Cydenti',
  description:
    'Explore our library of blogs, whitepapers, webinars, and educational videos on identity security.',
};

async function getLibraryData(): Promise<LibraryData> {
  const blogs = await sanityClient.fetch<Blog[]>(
    `*[_type == "blog" && published == true] | order(publishedAt desc)[0...3] {
      _id,
      title,
      slug,
      excerpt,
      publishedAt,
      featuredImage,
      category
    }`,
  );

  const resources = await sanityClient.fetch<Resource[]>(
    `*[_type == "resource"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      type,
      description,
      url,
      file,
      thumbnail,
      publishedAt,
      featured
    }`,
  );

  const updates = await sanityClient.fetch<ProductUpdate[]>(
    `*[_type == "productUpdate"] | order(date desc)[0...3] {
      _id,
      title,
      date,
      category
    }`,
  );

  const linkedinPosts = await sanityClient.fetch<LinkedinPost[]>(
    `*[_type == "linkedinPost" && isActive == true] | order(date desc)[0...3]`,
  );

  return { blogs, resources, updates, linkedinPosts };
}

export default async function GalleryPage() {
  const { blogs, resources, updates, linkedinPosts } = await getLibraryData();

  const videos = resources.filter(
    (r): r is Resource & { url: string } =>
      r.type === 'video' && typeof r.url === 'string' && r.url.length > 0,
  );
  const whitepapers = resources.filter((r) => r.type === 'whitepaper');
  const webinars = resources.filter(
    (r): r is Resource & { url: string } =>
      r.type === 'webinar' && typeof r.url === 'string' && r.url.length > 0,
  );
  const featured = resources.find((r) => r.featured) || videos[0];

  return (
    <main className="min-h-screen bg-slate-50 pt-24">
      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a,#1e293b)]" />
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-500 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              Cydenti{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                Gallery
              </span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Master identity security with our expert guides, research, and educational content.
              Explore topics like OAuth risk, blast radius analysis, and zero-trust principles.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-12 space-y-20">
        {/* Featured Resource */}
        {featured && (
          <section>
            <div className="flex items-center gap-2 mb-6">
              <span className="h-px flex-1 bg-slate-200" />
              <span className="text-sm font-semibold text-slate-500 uppercase tracking-wider">
                Featured Content
              </span>
              <span className="h-px flex-1 bg-slate-200" />
            </div>
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100 flex flex-col md:flex-row">
              <div className="md:w-3/5 relative min-h-[300px] bg-slate-800 flex items-center justify-center">
                {featured.url && featured.url.includes('youtube') ? (
                  <iframe
                    src={`https://www.youtube.com/embed/${
                      featured.url.split('v=')[1]?.split('&')[0]
                    }`}
                    className="absolute inset-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-slate-900 flex items-center justify-center">
                    <PlayCircle className="w-20 h-20 text-white/50" />
                  </div>
                )}
              </div>
              <div className="md:w-2/5 p-8 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                    {featured.type}
                  </span>
                  <span className="text-slate-500 text-sm">
                    {featured.publishedAt
                      ? new Date(featured.publishedAt).toLocaleDateString()
                      : ''}
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">{featured.title}</h2>
                <p className="text-slate-600 mb-6 line-clamp-3">{featured.description}</p>
                <Button asChild className="self-start">
                  {featured.url ? (
                    <a href={featured.url} target="_blank" rel="noopener noreferrer">
                      Watch Now
                    </a>
                  ) : (
                    <span>Read More</span>
                  )}
                </Button>
              </div>
            </div>
          </section>
        )}

        {/* Join the Conversation (LinkedIn) */}
        {linkedinPosts && linkedinPosts.length > 0 && (
          <section className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-200/20 rounded-full blur-3xl" />

            <div className="relative z-10">
              <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6">
                <div>
                  <div className="inline-flex items-center gap-2 text-blue-600 font-bold tracking-widest text-xs uppercase bg-white px-3 py-1 rounded-full border border-blue-100 mb-4 shadow-sm">
                    <Linkedin size={12} className="fill-current" />
                    Social Insights
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                    Join the Conversation
                  </h2>
                  <p className="text-slate-600 mt-2 text-lg">
                    Insights and community discussions from our team.
                  </p>
                </div>
                <Button
                  asChild
                  className="rounded-full bg-[#0A66C2] hover:bg-[#004182] text-white"
                >
                  <a
                    href="https://www.linkedin.com/company/cydenti"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Follow on LinkedIn
                  </a>
                </Button>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {linkedinPosts.map((post) => (
                  <div
                    key={post._id}
                    className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:-translate-y-1 transition-transform duration-300 flex flex-col h-full"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-[#0A66C2] rounded-lg flex items-center justify-center text-white shrink-0">
                          <Linkedin size={20} fill="white" />
                        </div>
                        <div>
                          <p className="font-bold text-slate-900 text-sm">
                            {post.authorName || 'Cydenti'}
                          </p>
                          <p className="text-xs text-slate-400">{post.date}</p>
                        </div>
                      </div>
                      <Quote className="text-slate-100 fill-slate-50" size={24} />
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-4 flex-grow">
                      {post.content}
                    </p>
                    <a
                      href={post.postUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-[#0A66C2] hover:underline flex items-center gap-1 mt-auto"
                    >
                      Read full post <ArrowRight size={12} />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Educational Videos - Stylized Cinema Grid */}
        {videos.length > 0 && (
          <section>
            <h2 className="text-3xl font-bold text-slate-900 mb-2">Video Gallery</h2>
            <p className="text-slate-500 mb-8">
              Visual guides and deep dives into identity security.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {videos.map((video) => (
                <VideoGalleryCard key={video._id} video={video} />
              ))}
            </div>
          </section>
        )}

        {/* Latest Blogs */}
        <section>
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="text-3xl font-bold text-slate-900">Latest Articles</h2>
              <p className="text-slate-500 mt-2">
                Deep dives into identity security trends and techniques.
              </p>
            </div>
            <Button variant="ghost" asChild className="hidden md:inline-flex group">
              <Link href="/resources/blogs">
                View all articles{' '}
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <Link
                key={blog._id}
                href={`/resources/blogs/${blog.slug.current}`}
                className="group block h-full"
              >
                <article className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-all h-full flex flex-col">
                  <div className="h-48 bg-slate-100 relative overflow-hidden">
                    <div className="absolute inset-0 bg-slate-200 group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
                        {blog.category || 'Article'}
                      </span>
                      <span className="text-xs text-slate-400">
                        {new Date(blog.publishedAt).toLocaleDateString()}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                      {blog.title}
                    </h3>
                    <p className="text-slate-600 text-sm line-clamp-3 mb-4 flex-1">
                      {blog.excerpt}
                    </p>
                    <span className="text-sm font-medium text-blue-600 flex items-center mt-auto">
                      Read Article <ArrowRight className="ml-1 w-3 h-3" />
                    </span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </section>

        {/* Webinars */}
        {webinars.length > 0 && (
          <section>
            <h2 className="text-3xl font-bold text-slate-900 mb-2">Webinars</h2>
            <p className="text-slate-500 mb-8">Expert discussions and product walkthroughs.</p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {webinars.map((webinar) => (
                <VideoGalleryCard key={webinar._id} video={webinar} />
              ))}
            </div>
          </section>
        )}

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Whitepapers */}
          <section>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">
                <FileText className="w-5 h-5" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Whitepapers</h2>
            </div>

            <div className="space-y-4">
              {whitepapers.length === 0 ? (
                <p className="text-slate-500 italic">No whitepapers available yet.</p>
              ) : (
                whitepapers.slice(0, 5).map((item) => (
                  <a
                    key={item._id}
                    href={item.url || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block group p-6 bg-white border border-slate-200 rounded-2xl hover:border-blue-300 hover:shadow-lg transition-all duration-300 relative overflow-hidden"
                  >
                    <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity" />

                    <div className="flex justify-between items-start gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-md border bg-indigo-50 text-indigo-600 border-indigo-100">
                            {item.type}
                          </span>
                          <span className="text-xs font-medium text-slate-400">
                            {item.publishedAt
                              ? new Date(item.publishedAt).toLocaleDateString()
                              : ''}
                          </span>
                        </div>
                        <h4 className="font-bold text-slate-900 text-lg group-hover:text-blue-600 transition-colors leading-tight mb-2">
                          {item.title}
                        </h4>
                        {item.description && (
                          <p className="text-sm text-slate-500 line-clamp-2 leading-relaxed">
                            {item.description}
                          </p>
                        )}
                      </div>
                      <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-blue-50 transition-colors shrink-0">
                        <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-colors" />
                      </div>
                    </div>
                  </a>
                ))
              )}
            </div>
          </section>

          {/* Product Updates */}
          <section>
            <div className="flex justify-between items-center mb-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600">
                  <Calendar className="w-5 h-5" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">Recent Updates</h2>
              </div>
              <Link
                href="/company/updates"
                className="text-sm font-semibold text-blue-600 hover:text-blue-700 hover:underline"
              >
                View All
              </Link>
            </div>

            <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm">
              <div className="space-y-8 relative border-l-2 border-slate-100 ml-3.5 pl-8 py-2">
                {updates.length === 0 ? (
                  <p className="text-slate-500 italic">No updates available.</p>
                ) : (
                  updates.map((update) => (
                    <div key={update._id} className="relative group">
                      <span className="absolute -left-[41px] top-1.5 h-4 w-4 rounded-full border-[3px] border-white bg-slate-300 group-hover:bg-blue-500 group-hover:scale-110 shadow-sm transition-all duration-300 ring-1 ring-slate-100" />

                      <div className="flex flex-col gap-1">
                        <span className="text-xs font-semibold text-slate-400 uppercase tracking-wide">
                          {new Date(update.date).toLocaleDateString()}
                        </span>
                        <h4 className="font-bold text-slate-900 text-lg group-hover:text-blue-600 transition-colors">
                          {update.title}
                        </h4>
                        <Link
                          href="/company/updates"
                          className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-700 mt-1 group-hover:translate-x-1 transition-transform"
                        >
                          Read release notes <ArrowRight className="w-3 h-3" />
                        </Link>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </main>
  );
}

