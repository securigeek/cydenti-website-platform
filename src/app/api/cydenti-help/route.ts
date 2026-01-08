import { NextRequest, NextResponse } from 'next/server';

const YOU_AI_API_KEY = process.env.YOU_AI_API_KEY;
const YOU_AI_API_URL = process.env.YOU_AI_API_URL || 'https://api.you.com/v1/agents/runs';

function extractYouText(data: unknown): string {
  if (typeof data === 'string') return data;
  if (!data || typeof data !== 'object') return '';

  const record = data as Record<string, unknown>;
  const directKeys = ['output_text', 'answer', 'text', 'content'];
  for (const key of directKeys) {
    const value = record[key];
    if (typeof value === 'string' && value.trim()) return value;
  }

  const response = record.response;
  if (response && typeof response === 'object') {
    const responseRecord = response as Record<string, unknown>;
    const responseText =
      (typeof responseRecord.output_text === 'string' && responseRecord.output_text) ||
      (typeof responseRecord.text === 'string' && responseRecord.text);
    if (responseText && responseText.trim()) return responseText;

    const output = responseRecord.output;
    if (Array.isArray(output)) {
      for (const item of output) {
        const extracted = extractYouText(item);
        if (extracted.trim()) return extracted;
      }
    }
  }

  const output = record.output;
  if (Array.isArray(output)) {
    for (const item of output) {
      const extracted = extractYouText(item);
      if (extracted.trim()) return extracted;
    }
  }

  return '';
}

async function callYouAI(prompt: string) {
  if (!YOU_AI_API_KEY) {
    throw new Error('YOU_AI_API_KEY is not configured');
  }

  const response = await fetch(YOU_AI_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${YOU_AI_API_KEY}`,
    },
    body: JSON.stringify({
      agent: 'advanced',
      input: prompt,
      stream: false,
    }),
  });

  if (!response.ok) {
    const errorBody = await response.text().catch(() => '');
    throw new Error(
      `You AI API Error: ${response.status} ${response.statusText}${errorBody ? ` - ${errorBody}` : ''}`
    );
  }

  const data = (await response.json().catch(() => null)) as unknown;
  return extractYouText(data) || '';
}

function generateFallbackAnswer(query: string) {
  const topic = (query || 'your environment').trim();
  return (
    `Cydenti maps identities, permissions and SaaS access around ${topic}, ` +
    `detects risky paths attackers could exploit, and continuously scores exposure. ` +
    `Security and IAM teams get prioritized alerts, guided remediation, and audit-ready evidence in one place.`
  );
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { query } = body;
    
    if (!query || typeof query !== 'string') {
      return NextResponse.json({ error: 'Query required' }, { status: 400 });
    }

    const prompt = `
      User question: "How would Cydenti help for ${query}?"
      
      Context: Cydenti is an Identity Threat Detection and Response (ITDR) platform. It provides unified visibility into identities, permissions, SaaS configurations, and cloud exposures. It helps Security Engineering, IAM Teams, Cloud Security Architects, and GRC Leaders.
      
      Task: Provide a dedicated response explaining how Cydenti helps with "${query}".
      
      Constraints:
      - Length: 30-50 words.
      - Tone: Professional, confident, solution-oriented.
      - Focus: Specific security value, visibility, or risk reduction related to the user's query.
      - Do not start with "Cydenti helps by..." just go straight to the answer if possible or make it natural.
    `;

    try {
      const answer = await callYouAI(prompt);
      const trimmed = (answer || '').trim();
      if (trimmed) {
        return NextResponse.json({ answer: trimmed });
      }
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error || '');
      if (!message.includes('402 Payment Required')) {
        console.error('AI Help Error:', error);
      }
    }

    const fallback = generateFallbackAnswer(query);
    return NextResponse.json({ answer: fallback });
  } catch (error) {
    console.error('AI Help Error:', error);
    return NextResponse.json({ error: 'Failed to generate response' }, { status: 500 });
  }
}
