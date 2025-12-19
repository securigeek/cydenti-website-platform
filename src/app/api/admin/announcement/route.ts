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
    const announcements = await sanityWriteClient.fetch(
      `*[_type == "announcement"] | order(_createdAt desc)`
    );
    return NextResponse.json(announcements[0] || null);
  } catch {
    return NextResponse.json({ error: 'Failed to fetch announcement' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  if (!authenticate(req)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const data = await req.json();
    
    // Get existing announcement
    const existing = await sanityWriteClient.fetch(
      `*[_type == "announcement"][0]`
    );

    let result;
    if (existing) {
      result = await sanityWriteClient.patch(existing._id).set(data).commit();
    } else {
      result = await sanityWriteClient.create({
        _type: 'announcement',
        ...data,
      });
    }
    
    return NextResponse.json(result);
  } catch {
    return NextResponse.json({ error: 'Failed to save announcement' }, { status: 500 });
  }
}
