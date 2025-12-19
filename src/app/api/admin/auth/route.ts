import { NextRequest, NextResponse } from 'next/server';
import { verifyAdmin, generateToken } from '@/lib/auth';

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();

    if (verifyAdmin(email, password)) {
      const token = generateToken(email);
      return NextResponse.json({ token, success: true });
    }

    return NextResponse.json(
      { error: 'Invalid credentials' },
      { status: 401 }
    );
  } catch {
    return NextResponse.json(
      { error: 'Authentication failed' },
      { status: 500 }
    );
  }
}
