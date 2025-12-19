import { sanityClient } from '@/lib/sanity';
import { Footer } from '@/components/footer';
import { BlogList } from '@/components/blog-list';

interface Blog {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt: string;
  featuredImage?: { asset?: { _ref?: string } | unknown; alt?: string };
  publishedAt: string;
  category?: string;
}

async function getBlogs(): Promise<Blog[]> {
  const staticMode = process.env.PAGES_STATIC === '1';
  if (staticMode || !process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
    return [];
  }
  try {
    const blogs = await sanityClient.fetch(
      `*[_type == "blog" && published == true] | order(publishedAt desc) {
        _id,
        title,
        slug,
        excerpt,
        featuredImage,
        publishedAt,
        category
      }`
    );
    return blogs;
  } catch {
    return [];
  }
}

export const metadata = {
  title: 'Blog - Cydenti',
  description: 'Insights and updates from Cydenti on identity security, ITDR, and more.',
};

export const revalidate = 60;

export default async function BlogsPage() {
  const blogs = await getBlogs();

  return (
    <>
      <main className="min-h-screen bg-gradient-to-b from-blue-50/50 to-white">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="text-center mb-16">
            <h2 className="text-cydenti-primary font-semibold mb-4 uppercase tracking-wider text-sm">Blog</h2>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">Explore Our Blogs</h1>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Keep up to date with Cydenti&apos;s expert insights on cloud security, recommended practices, and the latest in industry advancements. Our blog is your go-to source for strengthening your organization&apos;s security stance.
            </p>
          </div>

          <BlogList blogs={blogs} />
        </div>
      </main>
      <Footer />
    </>
  );
}
