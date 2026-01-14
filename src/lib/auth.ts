import crypto from 'crypto';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET!;

type AdminOtpRecord = {
  hash: string;
  expiresAt: number;
  attempts: number;
  maxAttempts: number;
};

const OTP_TTL_MS = 5 * 60 * 1000;
const OTP_MAX_ATTEMPTS = 5;

const adminOtpStore: Record<string, AdminOtpRecord> = {};

export function verifyAdmin(email: string, password: string): boolean {
  return (
    email === process.env.ADMIN_EMAIL &&
    password === process.env.ADMIN_PASSWORD
  );
}

export function generateToken(email: string): string {
  return jwt.sign({ email }, JWT_SECRET, { expiresIn: '7d' });
}

export function verifyToken(token: string): { email: string } | null {
  try {
    return jwt.verify(token, JWT_SECRET) as { email: string };
  } catch {
    return null;
  }
}

function hashOtp(otp: string): string {
  return crypto.createHash('sha256').update(otp).digest('hex');
}

export function generateAndStoreAdminOtp(email: string): string {
  const otp = String(crypto.randomInt(100000, 1000000));
  adminOtpStore[email] = {
    hash: hashOtp(otp),
    expiresAt: Date.now() + OTP_TTL_MS,
    attempts: 0,
    maxAttempts: OTP_MAX_ATTEMPTS,
  };
  return otp;
}

export function verifyAdminOtp(
  email: string,
  otp: string
): { ok: boolean; error?: string } {
  const record = adminOtpStore[email];

  if (!record) {
    return { ok: false, error: 'No OTP pending. Please request a new code.' };
  }

  if (Date.now() > record.expiresAt) {
    delete adminOtpStore[email];
    return { ok: false, error: 'OTP expired. Please request a new code.' };
  }

  if (record.attempts >= record.maxAttempts) {
    delete adminOtpStore[email];
    return {
      ok: false,
      error: 'Too many attempts. Please request a new OTP.',
    };
  }

  const isMatch = hashOtp(otp) === record.hash;

  if (!isMatch) {
    record.attempts += 1;
    if (record.attempts >= record.maxAttempts) {
      delete adminOtpStore[email];
      return {
        ok: false,
        error: 'Too many attempts. Please request a new OTP.',
      };
    }
    return { ok: false, error: 'Invalid OTP. Please try again.' };
  }

  delete adminOtpStore[email];
  return { ok: true };
}
