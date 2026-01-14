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

export async function POST(req: NextRequest) {
  if (!authenticate(req)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const formData = await req.formData();
    const file = formData.get('file') as File;
    
    if (!file) {
      return NextResponse.json({ error: 'No file provided' }, { status: 400 });
    }

    const buffer = await file.arrayBuffer();
    const isImage = file.type.startsWith('image/');
    
    if (isImage) {
      let uploadBuffer = Buffer.from(buffer) as Buffer<ArrayBufferLike>;
      let uploadType = file.type;
      let uploadName = file.name;
      try {
        const sharpImport: unknown = await import('sharp');
        const sharp = (sharpImport as { default?: (input: Uint8Array) => { webp: (opts: { quality: number }) => { toBuffer: () => Promise<Buffer> } } }).default;
        if (sharp) {
          const img = sharp(uploadBuffer);
          const webp = await img.webp({ quality: 82 }).toBuffer();
          uploadBuffer = webp as Buffer<ArrayBufferLike>;
          uploadType = 'image/webp';
          uploadName = file.name.replace(/\.[a-zA-Z0-9]+$/, '.webp');
        }
      } catch {}
      
      const asset = await sanityWriteClient.assets.upload('image', uploadBuffer, {
        filename: uploadName,
        contentType: uploadType,
      });
      return NextResponse.json(asset);
    } else {
      // Handle non-image files (e.g. PDF)
      const asset = await sanityWriteClient.assets.upload('file', Buffer.from(buffer), {
        filename: file.name,
        contentType: file.type,
      });
      return NextResponse.json(asset);
    }
  } catch (error: unknown) {
    console.error('Upload error:', error);
    const message = error instanceof Error ? error.message : 'Failed to upload image';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
