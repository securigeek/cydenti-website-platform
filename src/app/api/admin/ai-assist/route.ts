import { NextRequest, NextResponse } from 'next/server';
import { verifyToken } from '@/lib/auth';

function authenticate(req: NextRequest) {
  const token = req.headers.get('authorization')?.replace('Bearer ', '');
  if (!token || !verifyToken(token)) {
    return false;
  }
  return true;
}

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const GEMINI_API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`;

async function callGemini(prompt: string) {
  if (!GEMINI_API_KEY) {
    throw new Error('GEMINI_API_KEY is not configured');
  }

  const response = await fetch(GEMINI_API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      contents: [{ parts: [{ text: prompt }] }],
    }),
  });

  if (!response.ok) {
    throw new Error(`Gemini API Error: ${response.statusText}`);
  }

  const data = await response.json();
  return data.candidates?.[0]?.content?.parts?.[0]?.text || '';
}

export async function POST(req: NextRequest) {
  if (!authenticate(req)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const body = await req.json();
    const { action, title, description, focusKeyword, content } = body || {};

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
        
        const rawResponse = await callGemini(prompt);
        // Clean markdown code blocks if present
        const cleanedResponse = rawResponse.replace(/```json\n?|\n?```/g, '').trim();
        return NextResponse.json(JSON.parse(cleanedResponse));
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
      
      result = await callGemini(prompt);
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
      
      result = await callGemini(prompt);
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
        
        result = await callGemini(prompt);
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
        
        result = await callGemini(prompt);
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
        
        result = await callGemini(prompt);
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
        
        result = await callGemini(prompt);
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
        
        result = await callGemini(prompt);
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
