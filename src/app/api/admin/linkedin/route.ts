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
    const posts = await sanityWriteClient.fetch(
      `*[_type == "linkedinPost"] | order(date desc)`
    );
    return NextResponse.json(posts);
  } catch {
    return NextResponse.json({ error: 'Failed to fetch linkedin posts' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  if (!authenticate(req)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const data = await req.json();
    const payload = {
      _type: 'linkedinPost',
      ...data,
      date: data?.date || new Date().toISOString().split('T')[0],
    };
    const result = await sanityWriteClient.create(payload);
    return NextResponse.json(result);
  } catch {
    return NextResponse.json({ error: 'Failed to create linkedin post' }, { status: 500 });
  }
}

export async function PATCH(req: NextRequest) {
  if (!authenticate(req)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { _id, ...data } = await req.json();
    const result = await sanityWriteClient.patch(_id).set(data).commit();
    return NextResponse.json(result);
  } catch {
    return NextResponse.json({ error: 'Failed to update linkedin post' }, { status: 500 });
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
  } catch {
    return NextResponse.json({ error: 'Failed to delete linkedin post' }, { status: 500 });
  }
}

export const dynamic = 'force-dynamic';
export const revalidate = 0;
