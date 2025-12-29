import { NextRequest, NextResponse } from 'next/server'
import { verifyToken } from '@/lib/auth'
import { sanityWriteClient } from '@/lib/sanity'

function authenticate(req: NextRequest) {
  const token = req.headers.get('authorization')?.replace('Bearer ', '')
  if (!token || !verifyToken(token)) {
    return false
  }
  return true
}

function normalizeForMatch(s: string) {
  return (s || '')
    .toLowerCase()
    .replace(/[’‘]/g, "'")
    .replace(/[^a-z0-9]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

function parseFocusKeywords(raw: string) {
  return (raw || '')
    .split(/[,;\n]+/g)
    .map(s => s.trim())
    .filter(Boolean)
}

function keywordInText(text: string, keyword: string) {
  const hay = normalizeForMatch(text)
  const needle = normalizeForMatch(keyword)
  if (!needle) return false
  return hay.includes(needle)
}

function keywordInSlug(slug: string, keyword: string) {
  const hay = (slug || '').toLowerCase()
  const needle = normalizeForMatch(keyword).replace(/\s+/g, '-')
  if (!needle) return false
  return hay.includes(needle)
}

type KeywordDoc = {
  _id: string
  keyword?: string
  notes?: string
  createdAt?: string
}

type BlogDoc = {
  _id: string
  title?: string
  slug?: { current?: string }
  seoTitle?: string
  seoDescription?: string
  focusKeyword?: string
  published?: boolean
  publishedAt?: string
}

export async function GET(req: NextRequest) {
  if (!authenticate(req)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  try {
    const keywords: KeywordDoc[] = await sanityWriteClient.fetch(
      `*[_type=="keyword"] | order(coalesce(createdAt,_createdAt) desc){ _id, keyword, notes, createdAt }`
    )
    const blogs: BlogDoc[] = await sanityWriteClient.fetch(
      `*[_type=="blog"]{ _id, title, slug, seoTitle, seoDescription, focusKeyword, published, publishedAt }`
    )

    const rows = (keywords || [])
      .filter(k => k.keyword)
      .map(k => {
        const kw = k.keyword || ''
        const usedIn = (blogs || []).filter(b => parseFocusKeywords(b.focusKeyword || '').some(x => normalizeForMatch(x) === normalizeForMatch(kw)))
        const publishedUsedIn = usedIn.filter(b => b.published)
        const inTitle = publishedUsedIn.filter(b => keywordInText(b.title || '', kw)).length
        const inSlug = publishedUsedIn.filter(b => keywordInSlug(b.slug?.current || '', kw)).length
        const inMeta = publishedUsedIn.filter(b => keywordInText(b.seoDescription || '', kw) || keywordInText(b.seoTitle || '', kw)).length
        const lastUsed = publishedUsedIn
          .map(b => b.publishedAt)
          .filter(Boolean)
          .sort()
          .slice(-1)[0]
        const count = publishedUsedIn.length
        return {
          _id: k._id,
          keyword: kw,
          notes: k.notes || '',
          createdAt: k.createdAt || '',
          metrics: {
            posts: count,
            inTitle,
            inSlug,
            inMeta,
            lastUsed: lastUsed || '',
          },
        }
      })
    return NextResponse.json(rows)
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Failed to fetch keywords'
    return NextResponse.json({ error: message }, { status: 500 })
  }
}

export async function POST(req: NextRequest) {
  if (!authenticate(req)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  try {
    const data = await req.json()
    const keyword: string | undefined = data?.keyword
    if (!keyword || !keyword.trim()) {
      return NextResponse.json({ error: 'Keyword required' }, { status: 400 })
    }
    const normalized = normalizeForMatch(keyword)
    const existing = await sanityWriteClient.fetch(
      `*[_type=="keyword" && lower(keyword)==$kw][0]._id`,
      { kw: normalized }
    )
    if (existing) {
      const updated = await sanityWriteClient
        .patch(existing)
        .set({ notes: typeof data?.notes === 'string' ? data.notes : undefined })
        .setIfMissing({ createdAt: new Date().toISOString() })
        .commit()
      return NextResponse.json(updated)
    }
    const created = await sanityWriteClient.create({
      _type: 'keyword',
      keyword: keyword.trim(),
      notes: typeof data?.notes === 'string' ? data.notes : '',
      createdAt: new Date().toISOString(),
    })
    return NextResponse.json(created)
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Failed to create keyword'
    return NextResponse.json({ error: message }, { status: 500 })
  }
}

export async function DELETE(req: NextRequest) {
  if (!authenticate(req)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  try {
    const { searchParams } = new URL(req.url)
    const id = searchParams.get('id')
    if (!id) return NextResponse.json({ error: 'ID required' }, { status: 400 })
    await sanityWriteClient.delete(id)
    return NextResponse.json({ success: true })
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Failed to delete keyword'
    return NextResponse.json({ error: message }, { status: 500 })
  }
}

export const dynamic = 'force-dynamic'
export const revalidate = 0
