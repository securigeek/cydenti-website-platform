import { NextRequest, NextResponse } from 'next/server';
import { verifyToken } from '@/lib/auth';
import { sanityWriteClient } from '@/lib/sanity';

function authenticate(req: NextRequest) {
  const token = req.headers.get('authorization')?.replace('Bearer ', '');
  if (!token || !verifyToken(token)) {
    return false;
  }
  return true;
}

export async function GET(req: NextRequest) {
  if (!authenticate(req)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const blogs = await sanityWriteClient.fetch(
      `*[_type == "blog"] | order(publishedAt desc) {
        _id,
        title,
        slug,
        excerpt,
        content,
        published,
        publishedAt,
        featuredImage,
        seoTitle,
        seoDescription
      }`
    );
    return NextResponse.json(blogs);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch blogs' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  if (!authenticate(req)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const data = await req.json();
    const title: string | undefined = data?.title;
    const incomingSlug: string | undefined = data?.slug?.current;
    const base = (incomingSlug || title || '')
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');

    let candidate = base || `post-${Date.now()}`;
    const exists = await sanityWriteClient.fetch(
      `*[_type=="blog" && slug.current==$slug][0]._id`,
      { slug: candidate }
    );
    if (exists) {
      let i = 2;
      while (true) {
        const next = `${candidate}-${i}`;
        const taken = await sanityWriteClient.fetch(
          `*[_type=="blog" && slug.current==$slug][0]._id`,
          { slug: next }
        );
        if (!taken) {
          candidate = next;
          break;
        }
        i += 1;
      }
    }

    const payload = {
      _type: 'blog',
      ...data,
      slug: { _type: 'slug', current: candidate },
      publishedAt: data?.publishedAt || new Date().toISOString(),
    };
    const result = await sanityWriteClient.create(payload);
    return NextResponse.json(result);
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Failed to create blog';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function PATCH(req: NextRequest) {
  if (!authenticate(req)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { _id, ...data } = await req.json();
    let nextSlug: string | undefined = data?.slug?.current;
    if (nextSlug) {
      nextSlug = nextSlug
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');
      const conflict = await sanityWriteClient.fetch(
        `*[_type=="blog" && slug.current==$slug && _id!=$id][0]._id`,
        { slug: nextSlug, id: _id }
      );
      if (conflict) {
        let i = 2;
        const candidate = nextSlug;
        while (true) {
          const test = `${candidate}-${i}`;
          const taken = await sanityWriteClient.fetch(
            `*[_type=="blog" && slug.current==$slug && _id!=$id][0]._id`,
            { slug: test, id: _id }
          );
          if (!taken) {
            nextSlug = test;
            break;
          }
          i += 1;
        }
      }
      data.slug = { _type: 'slug', current: nextSlug };
    }
    if (!data.publishedAt) {
      data.publishedAt = new Date().toISOString();
    }
    const result = await sanityWriteClient.patch(_id).set(data).commit();
    return NextResponse.json(result);
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Failed to update blog';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  if (!authenticate(req)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');
    if (!id) {
      return NextResponse.json({ error: 'ID required' }, { status: 400 });
    }
    await sanityWriteClient.delete(id);
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete blog' }, { status: 500 });
  }
}
export const dynamic = 'force-dynamic';
export const revalidate = 0;
