import { NextRequest, NextResponse } from 'next/server';
import { verifyToken } from '@/lib/auth';

function authenticate(req: NextRequest) {
  const token = req.headers.get('authorization')?.replace('Bearer ', '');
  if (!token || !verifyToken(token)) {
    return false;
  }
  return true;
}

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

export async function POST(req: NextRequest) {
  if (!authenticate(req)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const body = await req.json();
    const { action, title, focusKeyword, content } = body || {};

    let prompt = '';
    let result = '';

    if (action === 'generate_blog') {
        const topic = title || focusKeyword || 'Cloud Security';
        prompt = `Write a comprehensive, SEO-optimized blog post about "${topic}".
        Focus Keyword: "${focusKeyword || topic}".
        Include:
        - Engaging Title
        - Introduction
        - Key Takeaways
        - Detailed Sections with H2/H3
        - Conclusion
        - FAQ Section
        Return the response in valid JSON format with the following structure:
        {
          "title": "SEO Optimized Title",
          "content": "Full blog content in Markdown format (use ## for H2, ### for H3, **bold** for emphasis, - for lists)",
          "excerpt": "A compelling 2-3 sentence summary (max 160 chars)",
          "seoTitle": "SEO Title (50-60 chars, include keyword at start)",
          "seoDescription": "Meta Description (140-160 chars, include keyword)",
          "canonicalUrl": "Suggested canonical URL slug (e.g., /resources/blogs/your-slug)"
        }
        Ensure the content is professional, informative, and at least 800 words.`;
        
        const rawResponse = await callYouAI(prompt);
        const cleanedResponse = rawResponse.replace(/```json\n?|\n?```/g, '').trim();

        try {
          const parsed = JSON.parse(cleanedResponse);
          return NextResponse.json(parsed);
        } catch {
          const jsonMatch = cleanedResponse.match(/{[\s\S]*}/);
          if (jsonMatch) {
            try {
              const parsedInner = JSON.parse(jsonMatch[0]);
              return NextResponse.json(parsedInner);
            } catch {
            }
          }

          const fallback = {
            title: title || topic,
            content: cleanedResponse,
            excerpt: '',
            seoTitle: title || topic,
            seoDescription: '',
            canonicalUrl: '',
          };
          return NextResponse.json(fallback);
        }
    }

    if (action === 'meta') {
      prompt = `Generate an SEO-optimized meta description for a blog post.
      Title: "${title}"
      Focus Keyword: "${focusKeyword}"
      Content Summary: "${(content || '').slice(0, 500)}..."
      
      Requirements:
      - Length: 140-160 characters.
      - Include the focus keyword naturally.
      - Make it actionable and click-worthy.
      - Return ONLY the description text.`;
      
      result = await callYouAI(prompt);
      return NextResponse.json({ suggestion: result.trim() });
    }

    if (action === 'title') {
      prompt = `Generate ONE single high-converting, SEO-optimized blog title for the topic: "${title}".
      Focus Keyword: "${focusKeyword}".
      Requirements:
      - Length: 50-60 characters.
      - Include focus keyword near the beginning.
      - Use power words (e.g., Ultimate, Guide, Proven).
      - Return ONLY the raw title text. No numbering, no quotes, no intro text like "Here is the title".`;
      
      result = await callYouAI(prompt);
      // Extra cleanup just in case
      const cleanTitle = result.replace(/^["']|["']$/g, '').replace(/^(Here is|Title:|Suggestion:)\s*/i, '').trim();
      return NextResponse.json({ suggestion: cleanTitle });
    }
    
    if (action === 'excerpt') {
        prompt = `Write a compelling excerpt for this blog post:
        Title: "${title}"
        Content: "${(content || '').slice(0, 1000)}..."
        
        Requirements:
        - 2-3 sentences.
        - Focus on value proposition.
        - Include the keyword "${focusKeyword}".
        - Return ONLY the excerpt text.`;
        
        result = await callYouAI(prompt);
        return NextResponse.json({ suggestion: result.trim() });
    }

    if (action === 'rewrite_text') {
        const { text, instruction } = body;
        prompt = `Rewrite the following text according to these instructions:
        
        Original Text: "${text}"
        
        Instruction: ${instruction}
        
        Requirements:
        - Return ONLY the rewritten text.
        - Maintain the original meaning/tone unless asked to change.
        - Do not add quotes or prefixes.`;
        
        result = await callYouAI(prompt);
        return NextResponse.json({ suggestion: result.trim() });
    }

    if (action === 'generate_alt') {
        const { context, keyword } = body;
        prompt = `Generate a descriptive SEO-optimized Alt Text for an image.
        
        Context (Surrounding text): "${context}"
        Focus Keyword: "${keyword}"
        
        Requirements:
        - Concise (under 125 chars).
        - Descriptive but includes keyword naturally if relevant.
        - Return ONLY the alt text.`;
        
        result = await callYouAI(prompt);
        return NextResponse.json({ suggestion: result.trim() });
    }

    if (action === 'fix_internal_links') {
        const { posts, keyword } = body;
        prompt = `You are an SEO expert. Given the topic "${keyword}" and this list of available blog posts:
        ${JSON.stringify(posts)}
        
        Select 2-3 most relevant posts to recommend for further reading.
        Format the output as a Markdown list of links.
        Example:
        ### Read More
        - [Title 1](/resources/blogs/slug-1)
        - [Title 2](/resources/blogs/slug-2)
        
        Return ONLY the markdown block.`;
        
        result = await callYouAI(prompt);
        return NextResponse.json({ suggestion: result.trim() });
    }

    if (action === 'fix_external_links') {
        const { keyword } = body;
        prompt = `You are an SEO expert. Provide 2 authoritative external reference links (e.g. NIST, Gartner, Microsoft, AWS, OWASP, etc.) relevant to the topic "${keyword}".
        Format the output as a Markdown list of links with descriptive titles.
        Example:
        ### References
        - [NIST Cybersecurity Framework](https://www.nist.gov/cyberframework)
        - [Another Source](https://example.com)
        
        Return ONLY the markdown block.`;
        
        result = await callYouAI(prompt);
        return NextResponse.json({ suggestion: result.trim() });
    }

    return NextResponse.json({ error: 'Invalid action' }, { status: 400 });

  } catch (error) {
    console.error('AI Error:', error);
    return NextResponse.json({ error: 'AI assistance failed' }, { status: 500 });
  }
}

export const dynamic = 'force-dynamic';
export const revalidate = 0;
