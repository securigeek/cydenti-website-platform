import { sanityClient, sanityWriteClient, urlFor } from '@/lib/sanity';
import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Footer } from '@/components/footer';

interface Blog {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt: string;
  content: any;
  featuredImage?: any;
  seoTitle?: string;
  seoDescription?: string;
  publishedAt: string;
}

async function getBlog(slug: string): Promise<Blog | null> {
  try {
    const publishedQuery = `*[_type == "blog" && slug.current == $slug && published == true][0] {
      _id,
      title,
      slug,
      excerpt,
      content,
      featuredImage,
      seoTitle,
      seoDescription,
      publishedAt
    }`;
    const anyQuery = `*[_type == "blog" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      excerpt,
      content,
      featuredImage,
      seoTitle,
      seoDescription,
      publishedAt
    }`;

    let result = await sanityWriteClient.fetch(publishedQuery, { slug });
    if (!result) result = await sanityClient.fetch(publishedQuery, { slug });
    if (!result) result = await sanityWriteClient.fetch(anyQuery, { slug });
    if (!result) result = await sanityClient.fetch(anyQuery, { slug });

    if (!result) {
      const all = await sanityWriteClient.fetch(
        `*[_type == "blog"] | order(publishedAt desc) {
          _id,
          title,
          slug,
          excerpt,
          content,
          featuredImage,
          seoTitle,
          seoDescription,
          publishedAt,
          published
        }`
      );
      result = (all || []).find((b: any) => b?.slug?.current?.toLowerCase() === slug) || null;
    }

    console.log('Fetched blog for slug:', slug, result);
    return result;
  } catch (error) {
    console.error('Error fetching blog:', error);
    return null;
  }
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const normalizedSlug = decodeURIComponent(params.slug).replace(/\/+$/, "").toLowerCase();
  const blog = await getBlog(normalizedSlug);
  
  if (!blog) return {};

  const ogImage = blog.featuredImage
    ? urlFor(blog.featuredImage).width(1200).height(630).url()
    : undefined;

  return {
    title: blog.seoTitle || blog.title,
    description: blog.seoDescription || blog.excerpt,
    openGraph: {
      title: blog.seoTitle || blog.title,
      description: blog.seoDescription || blog.excerpt,
      type: 'article',
      publishedTime: blog.publishedAt,
      images: ogImage ? [{ url: ogImage }] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: blog.seoTitle || blog.title,
      description: blog.seoDescription || blog.excerpt,
      images: ogImage ? [ogImage] : [],
    },
  };
}

export const revalidate = 0;
export const dynamic = 'force-dynamic';
export const dynamicParams = true;


const portableTextComponents = {
  types: {
    image: ({ value }: any) => (
      <div className="relative w-full aspect-video my-8 rounded-lg overflow-hidden">
        <Image
          src={urlFor(value).width(1200).url()}
          alt={value.alt || ''}
          fill
          className="object-cover"
        />
      </div>
    ),
  },
  block: {
    h1: ({ children }: any) => <h1 className="text-4xl font-bold mt-8 mb-4">{children}</h1>,
    h2: ({ children }: any) => <h2 className="text-3xl font-bold mt-8 mb-4">{children}</h2>,
    h3: ({ children }: any) => <h3 className="text-2xl font-bold mt-6 mb-3">{children}</h3>,
    normal: ({ children }: any) => <p className="mb-4 leading-7">{children}</p>,
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-cydenti-primary pl-4 italic my-6">{children}</blockquote>
    ),
  },
  marks: {
    link: ({ children, value }: any) => (
      <a href={value.href} className="text-cydenti-primary hover:underline" target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    ),
    strong: ({ children }: any) => <strong className="font-bold">{children}</strong>,
    em: ({ children }: any) => <em className="italic">{children}</em>,
    code: ({ children }: any) => (
      <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono">{children}</code>
    ),
  },
};

export default async function BlogDetailPage({ params }: { params: { slug: string } }) {
  const normalizedSlug = decodeURIComponent(params.slug).replace(/\/+$/, "").toLowerCase();
  const blog = await getBlog(normalizedSlug);

  if (!blog) {
    notFound();
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: blog.title,
    description: blog.excerpt,
    image: blog.featuredImage ? urlFor(blog.featuredImage).width(1200).url() : undefined,
    datePublished: blog.publishedAt,
    author: {
      '@type': 'Organization',
      name: 'Cydenti',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article className="mx-auto max-w-4xl px-6 py-24">
        <header className="mb-12">
          <time className="text-sm text-muted-foreground">
            {new Date(blog.publishedAt).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>
          <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6">{blog.title}</h1>
          {blog.excerpt && (
            <p className="text-xl text-muted-foreground">{blog.excerpt}</p>
          )}
        </header>

        {blog.featuredImage && blog.featuredImage.asset && (
          <div className="relative w-full aspect-video mb-12 rounded-lg overflow-hidden">
            <Image
              src={urlFor(blog.featuredImage).width(1200).url()}
              alt={blog.featuredImage.alt || blog.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        <div className="prose prose-lg max-w-none">
          <PortableText value={blog.content} components={portableTextComponents} />
        </div>
      </article>
      <Footer />
    </>
  );
}
