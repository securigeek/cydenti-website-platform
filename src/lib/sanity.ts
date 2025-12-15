import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'projectid';
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01';

export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
  useCdn: true,
});

export const sanityWriteClient = createClient({
  projectId,
  dataset,
  apiVersion,
  token: process.env.SANITY_WRITE_TOKEN || process.env.NEXT_PUBLIC_SANITY_TOKEN,
  useCdn: false,
});

export function urlFor(source: any) {
  return imageUrlBuilder({ projectId, dataset }).image(source);
}
