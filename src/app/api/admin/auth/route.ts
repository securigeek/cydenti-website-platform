import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import {
  verifyAdmin,
  generateToken,
  generateAndStoreAdminOtp,
  verifyAdminOtp,
} from '@/lib/auth';

function getAdminEmail(): string | null {
  const email = process.env.ADMIN_EMAIL;
  return typeof email === 'string' && email.trim() ? email.trim() : null;
}

async function sendAdminOtpEmail(otp: string): Promise<boolean> {
  const to = getAdminEmail();
  if (!to) {
    console.warn('ADMIN_EMAIL is not configured. OTP:', otp);
    return false;
  }

  const host = process.env.SMTP_HOST;
  const port = process.env.SMTP_PORT
    ? Number(process.env.SMTP_PORT)
    : undefined;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const from =
    process.env.SMTP_FROM ||
    process.env.SMTP_USER ||
    'no-reply@cydenti.com';

  if (!host || !port || !user || !pass) {
    console.warn(
      'SMTP is not fully configured. OTP email will not be sent. OTP:',
      otp
    );
    return false;
  }

  const secure = port === 465 || process.env.SMTP_SECURE === 'true';

  try {
    const transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: { user, pass },
    });

    await transporter.sendMail({
      from,
      to,
      subject: 'Your Cydenti Admin OTP Code',
      text: `Your one-time password (OTP) for Cydenti admin access is: ${otp}\n\nThis code is valid for 5 minutes. If you did not request this, you can ignore this email.`,
    });
    return true;
  } catch (error) {
    console.error('Failed to send admin OTP email via SMTP:', error);
    console.warn('Admin OTP (email not sent):', otp);
    return false;
  }
}

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();

    if (!verifyAdmin(email, password)) {
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 }
      );
    }

    const adminEmail = getAdminEmail();
    if (!adminEmail) {
      return NextResponse.json(
        { error: 'Admin email is not configured' },
        { status: 500 }
      );
    }

    const otp = generateAndStoreAdminOtp(adminEmail);
    const emailSent = await sendAdminOtpEmail(otp);

    const baseResponse: Record<string, unknown> = {
      success: true,
    };

    if (emailSent) {
      baseResponse.message =
        'OTP has been sent to the admin email address.';
    } else if (process.env.NODE_ENV !== 'production') {
      baseResponse.message =
        'OTP generated (SMTP not configured). Use the code shown here for development.';
      baseResponse.debugOtp = otp;
    } else {
      baseResponse.message =
        'OTP generated, but email delivery is not configured. Please contact the administrator.';
    }

    return NextResponse.json(baseResponse);
  } catch (error) {
    console.error('Error during admin auth OTP generation:', error);
    return NextResponse.json(
      { error: 'Authentication failed' },
      { status: 500 }
    );
  }
}

export async function PUT(req: NextRequest) {
  try {
    const { email, otp } = await req.json();

    const adminEmail = getAdminEmail();
    if (!adminEmail) {
      return NextResponse.json(
        { error: 'Admin email is not configured' },
        { status: 500 }
      );
    }

    if (email !== adminEmail) {
      return NextResponse.json({ error: 'Invalid OTP' }, { status: 401 });
    }

    const result = verifyAdminOtp(adminEmail, String(otp || '').trim());

    if (!result.ok) {
      return NextResponse.json(
        { error: result.error || 'Invalid OTP' },
        { status: 401 }
      );
    }

    const token = generateToken(adminEmail);
    return NextResponse.json({ token, success: true });
  } catch (error) {
    console.error('Error during admin OTP verification:', error);
    return NextResponse.json(
      { error: 'OTP verification failed' },
      { status: 500 }
    );
  }
}
