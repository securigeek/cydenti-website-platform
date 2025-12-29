import { sanityClient, sanityWriteClient } from '@/lib/sanity'

export default async function sitemap() {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://cydenti.com'
  const query = `*[_type=="blog" && published==true]{ "slug": slug.current, publishedAt }`
  let posts: { slug?: string; publishedAt?: string }[] = []
  try {
    posts = await sanityWriteClient.fetch(query)
    if (!posts || posts.length === 0) posts = await sanityClient.fetch(query)
  } catch {
    posts = []
  }
  const blogUrls = (posts || [])
    .filter(p => p.slug)
    .map(p => ({
      url: `${base}/resources/blogs/${encodeURIComponent(p.slug!)}/`,
      lastModified: p.publishedAt ? new Date(p.publishedAt) : new Date(),
      changeFrequency: 'weekly',
      priority: 0.6,
    }))
  return [
    {
      url: `${base}/`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${base}/resources/blogs/`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
    ...blogUrls,
  ]
}
