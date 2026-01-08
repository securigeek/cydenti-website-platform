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
    const resources = await sanityWriteClient.fetch(
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
      }`
    );
    return NextResponse.json(resources);
  } catch {
    return NextResponse.json({ error: 'Failed to fetch resources' }, { status: 500 });
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

    let candidate = base || `resource-${Date.now()}`;
    const exists = await sanityWriteClient.fetch(
      `*[_type=="resource" && slug.current==$slug][0]._id`,
      { slug: candidate }
    );
    if (exists) {
      let i = 2;
      while (true) {
        const next = `${candidate}-${i}`;
        const taken = await sanityWriteClient.fetch(
          `*[_type=="resource" && slug.current==$slug][0]._id`,
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
      _type: 'resource',
      ...data,
      slug: { _type: 'slug', current: candidate },
      publishedAt: data?.publishedAt || new Date().toISOString(),
    };
    const result = await sanityWriteClient.create(payload);
    return NextResponse.json(result);
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Failed to create resource';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function PATCH(req: NextRequest) {
  if (!authenticate(req)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const data = await req.json();
    const { _id, ...updates } = data;
    
    if (!_id) {
      return NextResponse.json({ error: 'Missing _id' }, { status: 400 });
    }

    if (updates.slug && updates.slug.current) {
      const current = await sanityWriteClient.fetch(`*[_type=="resource" && _id==$id][0].slug.current`, { id: _id });
      if (current !== updates.slug.current) {
        const existing = await sanityWriteClient.fetch(
          `*[_type=="resource" && slug.current==$slug && _id!=$id][0]._id`,
          { slug: updates.slug.current, id: _id }
        );
        if (existing) {
          return NextResponse.json({ error: 'Slug already exists' }, { status: 400 });
        }
      }
    }

    const result = await sanityWriteClient
      .patch(_id)
      .set(updates)
      .commit();

    return NextResponse.json(result);
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Failed to update resource';
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
      return NextResponse.json({ error: 'Missing id' }, { status: 400 });
    }

    await sanityWriteClient.delete(id);
    return NextResponse.json({ success: true });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Failed to delete resource';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
