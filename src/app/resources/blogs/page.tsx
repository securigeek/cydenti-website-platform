import { sanityClient, urlFor } from '@/lib/sanity';
import Link from 'next/link';
import Image from 'next/image';
import { Footer } from '@/components/footer';

interface Blog {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt: string;
  featuredImage?: { asset?: { _ref?: string } | unknown; alt?: string };
  publishedAt: string;
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
        publishedAt
      }`
    );
    return blogs;
  } catch (error) {
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
      <main className="mx-auto max-w-7xl px-6 py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog</h1>
          <p className="text-lg text-muted-foreground">Insights and updates on identity security</p>
        </div>

        {blogs.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No blog posts yet. Check back soon!</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => {
              const hasFeaturedImage = Boolean(
                blog.featuredImage && (blog.featuredImage as { asset?: unknown }).asset
              );
              return (
              <Link
                key={blog._id}
                href={`/resources/blogs/${blog.slug.current}`}
                className="group block rounded-lg border bg-card overflow-hidden hover:shadow-lg transition-shadow"
              >
                {hasFeaturedImage && (
                  <div className="relative aspect-video overflow-hidden bg-muted">
                    <Image
                      src={urlFor(blog.featuredImage).width(600).height(400).url()}
                      alt={(blog.featuredImage as { alt?: string })?.alt || blog.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                <div className="p-6">
                  <time className="text-sm text-muted-foreground">
                    {new Date(blog.publishedAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </time>
                  <h2 className="text-xl font-semibold mt-2 mb-3 group-hover:text-cydenti-primary transition-colors">
                    {blog.title}
                  </h2>
                  {blog.excerpt && (
                    <p className="text-muted-foreground line-clamp-3">{blog.excerpt}</p>
                  )}
                </div>
              </Link>
            )})}
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
