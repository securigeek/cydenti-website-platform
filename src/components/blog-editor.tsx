'use client';

/* eslint-disable @typescript-eslint/no-explicit-any */

import { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Switch } from './ui/switch';
import { Check, Loader2, Sparkles } from 'lucide-react';

import { RichTextEditor } from './rich-text-editor';
import { Eye, Edit2 } from 'lucide-react';
import { urlFor } from '@/lib/sanity';

interface BlogEditorProps {
  blogId?: string;
}

export function BlogEditor({ blogId }: BlogEditorProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    slug: { current: '' },
    excerpt: '',
    content: [] as unknown[],
    featuredImage: null as unknown,
    category: 'Cloud Technologies',
    seoTitle: '',
    seoDescription: '',
    focusKeyword: '',
    index: true,
    canonicalUrl: '',
    schemaArticle: true,
    schemaFAQ: false,
    schemaHowTo: false,
    schemaAuthor: false,
    published: false,
    publishedAt: new Date().toISOString(),
  });
  const [imageFileName, setImageFileName] = useState('');

  // Auto-save states
  const [savingStatus, setSavingStatus] = useState<'saved' | 'saving' | 'unsaved'>('saved');
  const [isDirty, setIsDirty] = useState(false);
  const [currentId, setCurrentId] = useState(blogId);
  const [previewMode, setPreviewMode] = useState(false);
  const [showPublishChecklist, setShowPublishChecklist] = useState(false);
  const [allPosts, setAllPosts] = useState<{_id:string; title?:string; slug?:{current:string}}[]>([]);
  const [linkSuggestions, setLinkSuggestions] = useState<{title:string; slug:string; score:number}[]>([]);
  const [previewModeType, setPreviewModeType] = useState<'content'|'serp-desktop'|'serp-mobile'|'social'>('content');
  const [bucketKeywords, setBucketKeywords] = useState<{keyword:string; avgScore:number; category:string}[]>([]);
  const [showKeywordSuggestions, setShowKeywordSuggestions] = useState(false);
  const [generating, setGenerating] = useState(false);

  useEffect(() => {
    const fetchBucket = async () => {
      try {
        const token = localStorage.getItem('adminToken');
        const res = await fetch('/api/admin/keywords', {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (res.ok) {
          const data = await res.json();
          setBucketKeywords(data);
        }
      } catch (e) {
        console.error(e);
      }
    };
    fetchBucket();
  }, []);

  type BlogDoc = {
    _id: string
    title?: string
    slug?: { current: string }
    excerpt?: string
    content?: unknown[]
    featuredImage?: unknown
    category?: string
    seoTitle?: string
    seoDescription?: string
    published?: boolean
    publishedAt?: string
  }

  const fetchBlog = useCallback(async (id: string) => {
    const token = localStorage.getItem('adminToken');
    const res = await fetch('/api/admin/blog', {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (res.ok) {
      const blogs: BlogDoc[] = await res.json();
      const blog = blogs.find((b) => b._id === id);
      if (blog) {
        setFormData({
          title: blog.title || '',
          slug: blog.slug || { current: '' },
          excerpt: blog.excerpt || '',
          content: blog.content || [],
          featuredImage: blog.featuredImage || null,
          category: (blog.category as any) || 'Cloud Technologies',
          seoTitle: blog.seoTitle || '',
          seoDescription: blog.seoDescription || '',
          focusKeyword: (blog as any).focusKeyword || '',
          index: (blog as any).index !== false,
          canonicalUrl: (blog as any).canonicalUrl || '',
          schemaArticle: (blog as any).schemaArticle !== false,
          schemaFAQ: (blog as any).schemaFAQ || false,
          schemaHowTo: (blog as any).schemaHowTo || false,
          schemaAuthor: (blog as any).schemaAuthor || false,
          published: blog.published || false,
          publishedAt: blog.publishedAt || new Date().toISOString(),
        });
      }
    }
  }, []);

  const performSave = useCallback(async (isAutoSave = false) => {
    if (isAutoSave) setSavingStatus('saving');
    else setLoading(true);

    try {
      const token = localStorage.getItem('adminToken');
      const payload = { ...formData, content: formData.content };

      const res = await fetch('/api/admin/blog', {
        method: currentId ? 'PATCH' : 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(currentId ? { _id: currentId, ...payload } : payload),
      });

      if (res.ok) {
        if (!isAutoSave) {
            // If manual save (create or update)
            if (!currentId) {
                const newBlog = await res.json();
                setCurrentId(newBlog._id); // Switch to edit mode
                // Optionally update URL without reload
                window.history.replaceState(null, '', `/admin/blogs/edit/${newBlog._id}`);
                alert('Blog created successfully! Auto-save is now active.');
            } else {
                router.push('/admin/blogs');
            }
        }
        setSavingStatus('saved');
        setIsDirty(false);
      } else {
        if (!isAutoSave) alert('Failed to save blog');
        setSavingStatus('unsaved');
      }
    } catch {
      if (!isAutoSave) alert('An error occurred');
      setSavingStatus('unsaved');
    } finally {
      if (!isAutoSave) setLoading(false);
    }
  }, [formData, currentId, router]);

  useEffect(() => {
    if (blogId) {
      setCurrentId(blogId);
      fetchBlog(blogId);
    }
  }, [blogId, fetchBlog]);
  useEffect(() => {
    (async () => {
      const token = localStorage.getItem('adminToken');
      const res = await fetch('/api/admin/blog', { headers: { Authorization: `Bearer ${token}` } });
      if (res.ok) {
        const blogs = await res.json();
        setAllPosts(blogs || []);
      }
    })();
  }, []);

  // Debounced Auto-save
  useEffect(() => {
    if (!isDirty || !currentId) return; // Only auto-save existing posts

    const timeoutId = setTimeout(async () => {
      await performSave(true);
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, [formData, isDirty, currentId, performSave]);

  const handleChange = (updater: (prev: typeof formData) => typeof formData) => {
    setFormData(updater);
    setIsDirty(true);
    setSavingStatus('unsaved');
  };

  

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
  };

  const generateKey = () => Math.random().toString(36).slice(2);

  const parseInline = (text: string) => {
    const children = [];
    const parts = text.split(/(\*\*.*?\*\*)/g);
    
    parts.forEach(part => {
       if (part.startsWith('**') && part.endsWith('**') && part.length > 4) {
          children.push({ _key: generateKey(), _type: 'span', text: part.slice(2, -2), marks: ['strong'] });
       } else if (part) {
          children.push({ _key: generateKey(), _type: 'span', text: part });
       }
    });
    
    if (children.length === 0) children.push({ _key: generateKey(), _type: 'span', text: '' });
    return children;
  };

  const parseMarkdown = (markdown: string) => {
    const blocks: any[] = [];
    const chunks = markdown.split(/\n\n+/);

    chunks.forEach(chunk => {
      const text = chunk.trim();
      if (!text) return;

      if (text.startsWith('## ')) {
        blocks.push({ _key: generateKey(), _type: 'block', style: 'h2', children: parseInline(text.replace(/^##\s+/, '')) });
        return;
      }
      if (text.startsWith('### ')) {
        blocks.push({ _key: generateKey(), _type: 'block', style: 'h3', children: parseInline(text.replace(/^###\s+/, '')) });
        return;
      }
      if (text.startsWith('> ')) {
         blocks.push({ _key: generateKey(), _type: 'block', style: 'blockquote', children: parseInline(text.replace(/^>\s+/, '')) });
         return;
      }

      // Handle lists (start with - or * followed by space)
      if (/^[-*]\s/.test(text)) {
        const lines = text.split(/\n/);
        lines.forEach(line => {
          const lineText = line.trim();
          if (/^[-*]\s/.test(lineText)) {
             blocks.push({ 
               _key: generateKey(), 
               _type: 'block', 
               listItem: 'bullet', 
               children: parseInline(lineText.replace(/^[-*]\s+/, '')) 
             });
          } else if (lineText) {
             blocks.push({ _key: generateKey(), _type: 'block', style: 'normal', children: parseInline(lineText) });
          }
        });
        return;
      }

      // Normal Paragraph
      blocks.push({ _key: generateKey(), _type: 'block', style: 'normal', children: parseInline(text) });
    });

    return blocks;
  };

  const handleGenerateBlog = async () => {
    const kw = (formData as any).focusKeyword;
    if (!kw) {
      alert('Please enter a Focus Keyword first.');
      return;
    }
    
    setGenerating(true);
    try {
      const token = localStorage.getItem('adminToken');
      const res = await fetch('/api/admin/ai-assist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        body: JSON.stringify({ action: 'generate_blog', focusKeyword: kw, title: formData.title })
      });
      
      if (!res.ok) throw new Error('Generation failed');
      
      const data = await res.json();
      if (data.error) throw new Error(data.error);

      // Convert Markdown to Portable Text blocks
      const blocks = parseMarkdown(data.content);

      handleChange(prev => ({
        ...prev,
        title: data.title,
        slug: { current: generateSlug(data.title) },
        content: blocks,
        excerpt: data.excerpt,
        seoTitle: data.seoTitle,
        seoDescription: data.seoDescription,
        canonicalUrl: data.canonicalUrl
      }));
    } catch (e) {
      console.error(e);
      alert('Failed to generate blog content');
    } finally {
      setGenerating(false);
    }
  };

  const handleTitleChange = (title: string) => {
    handleChange(prev => ({
      ...prev,
      title,
      slug: { current: generateSlug(title) },
    }));
  };
  const powerWords = ['ultimate','guide','proven','essential','easy','secret','powerful','best','free'];
  const normalizeForMatch = (s: string) => {
    return (s || '')
      .toLowerCase()
      .replace(/[’‘]/g, "'")
      .replace(/[^a-z0-9]+/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
  };
  const parseFocusKeywords = (raw: string) => {
    return (raw || '')
      .split(/[,;\n]+/g)
      .map(s => s.trim())
      .filter(Boolean);
  };
  const slugifyKeyword = (s: string) => normalizeForMatch(s).replace(/\s+/g, '-');
  const matchAnyKeywordInText = (text: string, keywords: string[]) => {
    const hay = normalizeForMatch(text);
    return keywords.some(k => {
      const needle = normalizeForMatch(k);
      return needle ? hay.includes(needle) : false;
    });
  };
  const matchAnyKeywordInSlug = (slug: string, keywords: string[]) => {
    const hay = (slug || '').toLowerCase();
    return keywords.some(k => {
      const needle = slugifyKeyword(k);
      return needle ? hay.includes(needle) : false;
    });
  };
  const titleQuality = (t: string, keywords: string[]) => {
    if (!t || !t.trim()) return 0;
    const len = t.trim().length;
    const lenScore = len >= 50 && len <= 60 ? 1 : len >= 45 && len <= 65 ? 0.7 : 0.4;
    const hasPower = powerWords.some(w => t.toLowerCase().includes(w));
    const titleNorm = normalizeForMatch(t);
    const bestKwScore = (keywords || []).reduce((best, k) => {
      const kwNorm = normalizeForMatch(k);
      if (!kwNorm) return best;
      const score = titleNorm.startsWith(kwNorm) ? 1 : titleNorm.includes(kwNorm) ? 0.7 : 0.2;
      return Math.max(best, score);
    }, 0);
    const kwPosScore = keywords.length ? bestKwScore : 0.5;
    const score = Math.round((lenScore + (hasPower ? 1 : 0.5) + kwPosScore) / 3 * 100);
    return Math.max(0, Math.min(100, score));
  };
  const metaIdeal = (d: string) => {
    const len = d.trim().length;
    if (len >= 140 && len <= 160) return 'green';
    if (len >= 120 && len <= 180) return 'yellow';
    return 'red';
  };
  const autoGenerateMeta = () => {
    const firstPara = (formData.content as any[])?.find((b: any) => b._type==='block' && (b.style==='normal' || !b.style));
    const text = firstPara?.children?.map((c: any)=>c.text).join(' ') || '';
    const kw = (formData as any).focusKeyword as string;
    const base = text ? text : formData.excerpt || formData.title;
    const withKw = kw && base ? `${base.slice(0, 140 - Math.min(kw.length+2, 30))} ${kw}` : base;
    handleChange(prev => ({ ...prev, seoDescription: (withKw || '').slice(0, 160) }));
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    setImageFileName(file.name);
    const token = localStorage.getItem('adminToken');
    const formDataUpload = new FormData();
    formDataUpload.append('file', file);

    try {
      const res = await fetch('/api/admin/upload', {
        method: 'POST',
        headers: { Authorization: `Bearer ${token}` },
        body: formDataUpload,
      });

      if (res.ok) {
        const asset = await res.json();
        handleChange(prev => ({
          ...prev,
          featuredImage: {
            _type: 'image',
            asset: {
              _type: 'reference',
              _ref: asset._id,
            },
          },
        }));
      }
    } catch {
      alert('Failed to upload image');
    } finally {
      setUploading(false);
    }
  };

  

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    performSave(false);
  };

  const plainText = () => {
    const blocks = (formData.content as any[]) || [];
    return blocks.filter((b: any) => b._type==='block').map((b: any) => (b.children||[]).map((c: any)=>c.text||'').join(' ')).join('\n');
  };
  const first100Words = () => {
    const words = plainText().trim().split(/\s+/);
    return words.slice(0, 100).join(' ');
  };
  const wordCount = () => {
    return plainText().trim().split(/\s+/).filter(Boolean).length;
  };
  const readability = () => {
    const text = plainText();
    const sentences = text.split(/[.!?]+/).filter(s=>s.trim().length>0);
    const words = text.trim().split(/\s+/).filter(Boolean);
    const syllables = words.reduce((acc, w) => acc + Math.max(1, (w.match(/[aeiouy]+/gi)||[]).length), 0);
    const ASL = sentences.length ? words.length / sentences.length : words.length;
    const ASW = words.length ? syllables / words.length : syllables;
    const score = Math.round(206.835 - 1.015 * ASL - 84.6 * ASW);
    return Math.max(0, Math.min(100, score));
  };
  const linkCounts = () => {
    const blocks = (formData.content as any[]) || [];
    let internal = 0, external = 0;
    blocks.forEach((b: any) => {
      const marks = (b.markDefs || []) as any[];
      marks.forEach((m: any) => {
        if (m?._type === 'link' || m?.name === 'link') {
          const href = m?.href || '';
          if (href.includes(window.location.host) || href.startsWith('/') || href.includes('cydenti')) internal += 1;
          else external += 1;
        }
      });
    });
    return { internal, external };
  };
  const imageAltCoverage = () => {
    const blocks = (formData.content as any[]) || [];
    const imgs = blocks.filter((b: any)=>b._type==='image');
    const withAlt = imgs.filter((b: any)=>Boolean(b.alt || (b.fields||[]).find((f: any)=>f.name==='alt' && f.value)));
    const featuredOk = Boolean((formData.featuredImage as any)?.asset) && Boolean((formData.featuredImage as any)?.alt);
    const ratio = imgs.length ? Math.round(withAlt.length / imgs.length * 100) : 100;
    return { ratio, featuredOk };
  };
  const focusKeyword = (formData as any).focusKeyword as string | undefined;
  const keywordList = useMemo(
    () => parseFocusKeywords((focusKeyword || '').trim()),
    [focusKeyword]
  );
  const primaryKeyword = keywordList[0] || '';
  const titleHasKw = keywordList.length ? matchAnyKeywordInText(formData.title, keywordList) : false;
  const slugHasKw = keywordList.length ? matchAnyKeywordInSlug(formData.slug.current, keywordList) : false;
  const first100HasKw = keywordList.length ? matchAnyKeywordInText(first100Words(), keywordList) : false;
  const h1HasKw = keywordList.length ? ((formData.content as any[])||[]).some((b: any)=>b._type==='block' && (b.style==='h1') && matchAnyKeywordInText((b.children||[]).map((c: any)=>c.text).join(' '), keywordList)) : false;
  const metaHasKw = keywordList.length ? matchAnyKeywordInText(formData.seoDescription, keywordList) : false;
  const wc = wordCount();
  const idealWc = wc >= 800 && wc <= 2000;
  const readabilityScore = readability();
  const links = linkCounts();
  const imgAlt = imageAltCoverage();
  const hasH2 = ((formData.content as any[])||[]).some((b: any)=>b._type==='block' && b.style==='h2');
  const longParagraphs = ((formData.content as any[])||[]).filter((b: any)=>b._type==='block' && (b.style==='normal'||!b.style)).filter((b: any) => {
     const text = (b.children||[]).map((c: any)=>c.text).join(' ');
     return text.split(/\s+/).length > 150; // Warn if > 150 words
  }).length;

  const density = (() => {
    const phrase = normalizeForMatch(primaryKeyword);
    if (!phrase) return 0;
    const text = normalizeForMatch(plainText());
    const totalWords = text.split(/\s+/).filter(Boolean).length;
    if (!totalWords) return 0;
    const occurrences = text.split(phrase).length - 1;
    const phraseWords = phrase.split(/\s+/).filter(Boolean).length || 1;
    const keywordWords = occurrences * phraseWords;
    return Math.round((keywordWords / totalWords) * 1000) / 10;
  })();
  const densityStatus = density > 2.5 ? 'red' : density > 1.5 ? 'yellow' : 'green';
  useEffect(() => {
    const kwTokens = keywordList.flatMap(k => normalizeForMatch(k).split(/\s+/)).filter(Boolean);
    const titleTokens = normalizeForMatch(formData.title || '').split(/\s+/).filter(Boolean);
    const scoreFor = (t: string) => {
      const tokens = normalizeForMatch(t).split(/\s+/).filter(Boolean);
      const overlap = new Set(tokens.filter(x => kwTokens.includes(x) || titleTokens.includes(x)));
      return overlap.size;
    };
    const suggestions = allPosts
      .filter(p => p._id !== currentId)
      .map(p => ({ title: p.title || '', slug: p.slug?.current || '', score: scoreFor(p.title || '') }))
      .filter(s => s.slug)
      .sort((a,b)=>b.score - a.score)
      .slice(0,5);
    setLinkSuggestions(suggestions);
  }, [focusKeyword, formData.title, allPosts, currentId]);

  const handleAiFix = async (action: string, context?: any) => {
    const kw = (formData as any).focusKeyword;
    if (!kw) {
      alert('Please enter a Focus Keyword first.');
      return;
    }
    
    setGenerating(true);
    try {
      const token = localStorage.getItem('adminToken');
      const body: any = { action, keyword: kw, title: formData.title };
      
      if (action === 'rewrite_text') {
        if (context === 'first100') {
           body.text = first100Words();
           body.instruction = `Rewrite this introduction to naturally include the keyword "${kw}". Keep it engaging.`;
        } else if (context === 'paragraphs') {
           // Find first long paragraph
           const longPara = ((formData.content as any[])||[]).find((b: any)=>b._type==='block' && (b.style==='normal'||!b.style) && (b.children||[]).map((c: any)=>c.text).join(' ').split(/\s+/).length > 150);
           if (longPara) {
             body.text = (longPara.children||[]).map((c: any)=>c.text).join(' ');
             body.instruction = "Split this long text into 2-3 shorter, punchy paragraphs.";
           } else {
             setGenerating(false);
             return;
           }
        }
      } else if (action === 'generate_alt') {
         // Find first image without alt
         const imgBlock = ((formData.content as any[])||[]).find((b: any)=>b._type==='image' && !b.alt);
         if (imgBlock) {
            // Get surrounding text (prev block)
            const idx = (formData.content as any[]).indexOf(imgBlock);
            const prevBlock = idx > 0 ? (formData.content as any[])[idx-1] : null;
            body.context = prevBlock ? (prevBlock.children||[]).map((c: any)=>c.text).join(' ') : formData.title;
         } else {
            setGenerating(false);
            return;
         }
      } else if (action === 'fix_internal_links') {
         body.posts = allPosts.map(p => ({ title: p.title, slug: p.slug?.current }));
      } else if (action === 'fix_external_links') {
         // No extra context needed
      } else if (action === 'fix_readability') {
         // Find complex paragraph (naive: longest word count)
         const complexPara = ((formData.content as any[])||[]).reduce((max: any, b: any) => {
            if (b._type !== 'block' || (b.style && b.style !== 'normal')) return max;
            const len = (b.children||[]).map((c: any)=>c.text).join(' ').length;
            return len > (max?.len || 0) ? { block: b, len } : max;
         }, null)?.block;
         
         if (complexPara) {
            body.action = 'rewrite_text'; // Reuse rewrite action
            body.text = (complexPara.children||[]).map((c: any)=>c.text).join(' ');
            body.instruction = "Rewrite this paragraph to improve readability (Grade 8 level). Use shorter sentences and simpler words.";
            // Store context to know we are fixing readability
            context = { type: 'readability', blockKey: complexPara._key };
         } else {
            setGenerating(false);
            return;
         }
      } else if (action === 'fix_density') {
         const currentDensity = density; // from closure
         const mode = currentDensity > 2.5 ? 'decrease' : 'increase';
         // Find target paragraph
         let targetPara;
         if (mode === 'decrease') {
            // Find para with most keywords
            targetPara = ((formData.content as any[])||[]).find((b: any) => b._type==='block' && matchAnyKeywordInText((b.children||[]).map((c: any)=>c.text).join(' '), [kw]));
         } else {
            // Find para without keywords (to add)
            targetPara = ((formData.content as any[])||[]).find((b: any) => b._type==='block' && !matchAnyKeywordInText((b.children||[]).map((c: any)=>c.text).join(' '), [kw]));
         }
         
         if (targetPara) {
            body.action = 'rewrite_text';
            body.text = (targetPara.children||[]).map((c: any)=>c.text).join(' ');
            body.instruction = mode === 'decrease' 
               ? `Rewrite this to reduce the repetition of "${kw}" using synonyms.` 
               : `Rewrite this to naturally include the keyword "${kw}".`;
            context = { type: 'density', blockKey: targetPara._key };
         } else {
             setGenerating(false);
             return;
         }
      }

      const res = await fetch('/api/admin/ai-assist', { method: 'POST', headers: { 'Content-Type':'application/json', Authorization: `Bearer ${token}` }, body: JSON.stringify(body) });
      const data = await res.json();
      
      if (data.suggestion) {
         if (action === 'rewrite_text' && context === 'first100') {
            // Replace first normal paragraph
            const newContent = [...(formData.content as any[])];
            const firstParaIdx = newContent.findIndex(b => b._type==='block' && (b.style==='normal' || !b.style));
            
            if (firstParaIdx !== -1) {
               // Preserve key if possible
               const oldKey = newContent[firstParaIdx]._key;
               newContent[firstParaIdx] = { 
                 ...newContent[firstParaIdx], 
                 children: [{ _key: generateKey(), _type: 'span', text: data.suggestion }] 
               };
               if (oldKey) newContent[firstParaIdx]._key = oldKey;
               handleChange(prev => ({ ...prev, content: newContent }));
            }
         } else if (action === 'rewrite_text' && context === 'paragraphs') {
            // Replace long paragraph with multiple blocks
            const newBlocks = parseMarkdown(data.suggestion);
            const newContent = [...(formData.content as any[])];
            const idx = newContent.findIndex((b: any)=>b._type==='block' && (b.style==='normal'||!b.style) && (b.children||[]).map((c: any)=>c.text).join(' ').split(/\s+/).length > 150);
            if (idx !== -1) {
               newContent.splice(idx, 1, ...newBlocks);
               handleChange(prev => ({ ...prev, content: newContent }));
            }
         } else if (action === 'generate_alt') {
            const newContent = [...(formData.content as any[])];
            const imgBlock = newContent.find((b: any)=>b._type==='image' && !b.alt);
            if (imgBlock) {
               imgBlock.alt = data.suggestion;
               handleChange(prev => ({ ...prev, content: newContent }));
            }
         } else if (action === 'fix_slug') {
            handleChange(prev => ({ ...prev, slug: { current: slugifyKeyword(kw) } }));
         } else if (action === 'fix_h1') {
            // Smart H1 update
            const newContent = [...(formData.content as any[])];
            const h1Index = newContent.findIndex(b => b._type === 'block' && b.style === 'h1');
            const h1Text = `${formData.title}: ${kw}`;
            
            if (h1Index !== -1) {
              // Update existing H1
              newContent[h1Index] = {
                ...newContent[h1Index],
                children: [{ _key: generateKey(), _type: 'span', text: h1Text }]
              };
            } else {
              // Insert H1 at top
              const h1Block = { 
                _key: generateKey(),
                _type: 'block', 
                style: 'h1', 
                children: [{ _key: generateKey(), _type: 'span', text: h1Text }] 
              };
              newContent.unshift(h1Block);
            }
            handleChange(prev => ({ ...prev, content: newContent }));
         } else if (action === 'fix_internal_links' || action === 'fix_external_links') {
            // Append markdown block
            const lines = data.suggestion.split('\n');
            const blocks = lines.map((line: string) => {
               const key = generateKey();
               if (line.startsWith('### ')) return { _key: key, _type: 'block', style: 'h3', children: [{ _key: generateKey(), _type: 'span', text: line.replace('### ', '') }] };
               if (line.startsWith('- ')) {
                  // Basic link parsing [Text](url)
                  const match = line.match(/\[(.*?)\]\((.*?)\)/);
                  if (match) {
                     return { 
                        _key: key,
                        _type: 'block', 
                        listItem: 'bullet', 
                        children: [{ _key: generateKey(), _type: 'span', text: match[1] }], 
                        markDefs: [{ _type: 'link', href: match[2], _key: generateKey() }] 
                     };
                  }
                  return { _key: key, _type: 'block', listItem: 'bullet', children: [{ _key: generateKey(), _type: 'span', text: line.replace('- ', '') }] };
               }
               return { _key: key, _type: 'block', style: 'normal', children: [{ _key: generateKey(), _type: 'span', text: line }] };
            });
            handleChange(prev => ({ ...prev, content: [...(prev.content as any[]), ...blocks] }));
         } else if (context?.type === 'readability' || context?.type === 'density') {
            // Replace specific block by key
            if (!context.blockKey) return;
            const newContent = (formData.content as any[]).map((b: any) => {
               if (b._key === context.blockKey) {
                  return { 
                    ...b, 
                    children: [{ _key: generateKey(), _type: 'span', text: data.suggestion }] 
                  };
               }
               return b;
            });
            handleChange(prev => ({ ...prev, content: newContent }));
         }
      }
    } catch (e) {
      console.error(e);
    } finally {
      setGenerating(false);
    }
  };

  const AiFixBtn = ({ action, context }: { action: string, context?: any }) => (
    <button 
      type="button" 
      onClick={() => handleAiFix(action, context)}
      className="ml-2 p-1 rounded-full hover:bg-indigo-50 text-indigo-500 transition-colors"
      title="Auto-fix with AI"
      disabled={generating}
    >
      <Sparkles className="h-3 w-3" />
    </button>
  );

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-4xl relative">
      {/* Auto-save Indicator */}
      <div className="absolute top-0 right-0 flex items-center gap-2 text-sm text-muted-foreground">
        {savingStatus === 'saving' && (
           <>
             <Loader2 className="h-3 w-3 animate-spin" />
             <span>Saving...</span>
           </>
        )}
        {savingStatus === 'saved' && (
           <>
             <Check className="h-3 w-3" />
             <span>Saved</span>
           </>
        )}
        {savingStatus === 'unsaved' && isDirty && (
            <span>Unsaved changes</span>
        )}
      </div>
      <aside className="absolute right-[-22rem] top-0 w-80 border rounded-md p-4 bg-white">
        <div className="font-semibold mb-2">SEO Score</div>
        <div className="space-y-2 text-sm">
          <div className={`flex items-center justify-between ${titleHasKw ? 'text-green-600' : 'text-red-600'}`}>
             <span>Keyword in Title</span>
             <div className="flex items-center">
                <span>{titleHasKw ? '✓' : '!'}</span>
                {!titleHasKw && <AiFixBtn action="title" />}
             </div>
          </div>
          <div className={`flex items-center justify-between ${slugHasKw ? 'text-green-600' : 'text-yellow-600'}`}>
             <span>Keyword in Slug</span>
             <div className="flex items-center">
                <span>{slugHasKw ? '✓' : '•'}</span>
                {!slugHasKw && <AiFixBtn action="fix_slug" />}
             </div>
          </div>
          <div className={`flex items-center justify-between ${first100HasKw ? 'text-green-600' : 'text-red-600'}`}>
             <span>Keyword in First 100 words</span>
             <div className="flex items-center">
                <span>{first100HasKw ? '✓' : '!'}</span>
                {!first100HasKw && <AiFixBtn action="rewrite_text" context="first100" />}
             </div>
          </div>
          <div className={`flex items-center justify-between ${h1HasKw ? 'text-green-600' : 'text-yellow-600'}`}>
             <span>Keyword in H1</span>
             <div className="flex items-center">
                <span>{h1HasKw ? '✓' : '•'}</span>
                {!h1HasKw && <AiFixBtn action="fix_h1" />}
             </div>
          </div>
          <div className={`flex items-center justify-between ${metaHasKw ? 'text-green-600' : 'text-yellow-600'}`}>
             <span>Keyword in Meta</span>
             <div className="flex items-center">
                <span>{metaHasKw ? '✓' : '•'}</span>
                {!metaHasKw && <AiFixBtn action="meta" />}
             </div>
          </div>
          <div className={`flex items-center justify-between ${idealWc ? 'text-green-600' : 'text-yellow-600'}`}><span>Word count 800–2000</span><span>{wc}</span></div>
          <div className="flex items-center justify-between">
             <span>Readability</span>
             <div className="flex items-center">
                <span className={readabilityScore>=60?'text-green-600':readabilityScore>=40?'text-yellow-600':'text-red-600'}>{readabilityScore}</span>
                {readabilityScore < 60 && <AiFixBtn action="fix_readability" />}
             </div>
          </div>
          <div className="flex items-center justify-between">
             <span>Internal links</span>
             <div className="flex items-center">
                <span className={links.internal>0?'text-green-600':'text-yellow-600'}>{links.internal}</span>
                {links.internal === 0 && <AiFixBtn action="fix_internal_links" />}
             </div>
          </div>
          <div className="flex items-center justify-between">
             <span>External links</span>
             <div className="flex items-center">
                <span className={links.external>0?'text-green-600':'text-yellow-600'}>{links.external}</span>
                {links.external === 0 && <AiFixBtn action="fix_external_links" />}
             </div>
          </div>
          <div className="flex items-center justify-between">
             <span>Image ALT coverage</span>
             <div className="flex items-center">
                <span className={imgAlt.ratio===100 && imgAlt.featuredOk?'text-green-600':'text-yellow-600'}>{imgAlt.ratio}%</span>
                {imgAlt.ratio < 100 && <AiFixBtn action="generate_alt" />}
             </div>
          </div>
          <div className="flex items-center justify-between">
             <span>Keyword density</span>
             <div className="flex items-center">
                <span className={densityStatus==='green'?'text-green-600':densityStatus==='yellow'?'text-yellow-600':'text-red-600'}>{density}%</span>
                {densityStatus !== 'green' && <AiFixBtn action="fix_density" />}
             </div>
          </div>
          <div className={`flex items-center justify-between ${hasH2 ? 'text-green-600' : 'text-red-600'}`}>
             <span>Has H2 Subheadings</span>
             <div className="flex items-center">
                <span>{hasH2 ? '✓' : '!'}</span>
                {!hasH2 && <AiFixBtn action="fix_h1" />} 
             </div>
          </div>
          <div className={`flex items-center justify-between ${longParagraphs===0 ? 'text-green-600' : 'text-yellow-600'}`}>
             <span>Paragraph Length</span>
             <div className="flex items-center">
                <span>{longParagraphs===0 ? '✓' : `${longParagraphs} long`}</span>
                {longParagraphs > 0 && <AiFixBtn action="rewrite_text" context="paragraphs" />}
             </div>
          </div>
        </div>
        <div className="mt-4">
          <div className="font-semibold mb-2">Internal Linking</div>
          <div className="space-y-1 text-sm">
            {linkSuggestions.map(s => (
              <div key={s.slug} className="flex items-center justify-between">
                <a href={`/resources/blogs/${s.slug}/`} target="_blank" rel="noopener noreferrer" className="text-cydenti-primary hover:underline">{s.title || s.slug}</a>
                <Button type="button" variant="outline" size="sm" className="h-7 px-2" onClick={() => {
                  const linkDef = { _type: 'link', href: `/resources/blogs/${s.slug}/` };
                  setFormData(prev => ({ ...prev, content: [...(prev.content as any[]), { _type: 'block', style: 'normal', children: [{ _type: 'span', _key: Math.random().toString(36).slice(2), text: s.title || s.slug, marks: [] }], markDefs: [linkDef] }] }));
                  setIsDirty(true); setSavingStatus('unsaved');
                }}>Add Link</Button>
              </div>
            ))}
          </div>
        </div>
      </aside>

      <div className="relative">
        <div className="flex items-end gap-4">
          <div className="flex-1">
            <Label htmlFor="focusKeyword">Focus Keyword</Label>
            <Input
              id="focusKeyword"
              value={(formData as any).focusKeyword as string}
              onChange={(e) => handleChange(prev => ({ ...prev, focusKeyword: e.target.value }))}
              onFocus={() => setShowKeywordSuggestions(true)}
              onBlur={() => setTimeout(() => setShowKeywordSuggestions(false), 200)}
              placeholder="e.g., cloud security posture management"
              className="mt-1"
              autoComplete="off"
            />
          </div>
          <Button 
            type="button" 
            variant="outline" 
            onClick={handleGenerateBlog} 
            disabled={generating}
            className="mb-[1px] bg-gradient-to-r from-indigo-50 to-purple-50 border-indigo-200 text-indigo-700 hover:from-indigo-100 hover:to-purple-100"
          >
             {generating ? <Loader2 className="h-4 w-4 animate-spin mr-2" /> : <Sparkles className="h-4 w-4 mr-2" />}
             Create with AI
          </Button>
        </div>
        {showKeywordSuggestions && bucketKeywords.length > 0 && (
          <div className="absolute z-50 w-full mt-1 bg-white border rounded-md shadow-lg max-h-60 overflow-auto">
             {bucketKeywords
                .filter(k => k.keyword.toLowerCase().includes(((formData as any).focusKeyword || '').toLowerCase()))
                .map((k) => (
                  <div
                    key={k.keyword}
                    className="px-4 py-2 hover:bg-slate-100 cursor-pointer flex items-center justify-between"
                    onClick={() => {
                      handleChange(prev => ({ ...prev, focusKeyword: k.keyword }));
                      setShowKeywordSuggestions(false);
                    }}
                  >
                    <div>
                      <div className="font-medium text-sm">{k.keyword}</div>
                      <div className="text-xs text-muted-foreground">{k.category}</div>
                    </div>
                    {k.avgScore > 0 && (
                      <div className={`text-xs font-bold ${k.avgScore >= 80 ? 'text-green-600' : k.avgScore >= 50 ? 'text-yellow-600' : 'text-red-600'}`}>
                        {Math.round(k.avgScore)}%
                      </div>
                    )}
                  </div>
                ))}
              {bucketKeywords.filter(k => k.keyword.toLowerCase().includes(((formData as any).focusKeyword || '').toLowerCase())).length === 0 && (
                <div className="px-4 py-2 text-sm text-muted-foreground">No matching saved keywords</div>
              )}
          </div>
        )}
      </div>

      <div>
        <Label htmlFor="title">Title *</Label>
        <Input
          id="title"
          value={formData.title}
          onChange={(e) => handleTitleChange(e.target.value)}
          required
          className="mt-1"
        />
        <div className="mt-2 text-sm flex items-center gap-3">
          <span>Title score</span>
          <div className="h-2 w-40 bg-gray-200 rounded">
            <div
              className={`h-2 rounded ${titleQuality(formData.title, keywordList) >= 70 ? 'bg-green-500' : titleQuality(formData.title, keywordList) >= 50 ? 'bg-yellow-500' : 'bg-red-500'}`}
              style={{ width: `${titleQuality(formData.title, keywordList)}%` }}
            />
          </div>
          <span className="text-muted-foreground">{titleQuality(formData.title, keywordList)}%</span>
          <Button type="button" variant="outline" size="sm" onClick={async () => {
             const token = localStorage.getItem('adminToken');
             const res = await fetch('/api/admin/ai-assist', { method: 'POST', headers: { 'Content-Type':'application/json', Authorization: `Bearer ${token}` }, body: JSON.stringify({ action: 'title', title: formData.title, focusKeyword: (formData as any).focusKeyword }) });
             const data = await res.json();
             if (data?.suggestion) handleTitleChange(data.suggestion);
          }}>AI Improve</Button>
        </div>
      </div>

      <div>
        <Label htmlFor="slug">Slug *</Label>
        <Input
          id="slug"
          value={formData.slug.current}
          onChange={(e) => handleChange(prev => ({ ...prev, slug: { current: e.target.value } }))}
          required
          className="mt-1"
        />
      </div>

      <div>
        <Label htmlFor="excerpt">Excerpt</Label>
        <div className="relative">
          <Textarea
            id="excerpt"
            value={formData.excerpt}
            onChange={(e) => handleChange(prev => ({ ...prev, excerpt: e.target.value }))}
            rows={3}
            className="mt-1 pr-24"
          />
          <Button 
             type="button" 
             variant="ghost" 
             size="sm" 
             className="absolute bottom-2 right-2 h-7 text-xs text-indigo-600 hover:text-indigo-700 hover:bg-indigo-50"
             onClick={async () => {
                const token = localStorage.getItem('adminToken');
                const res = await fetch('/api/admin/ai-assist', { method: 'POST', headers: { 'Content-Type':'application/json', Authorization: `Bearer ${token}` }, body: JSON.stringify({ action: 'excerpt', title: formData.title, focusKeyword: (formData as any).focusKeyword, content: plainText() }) });
                const data = await res.json();
                if (data?.suggestion) handleChange(prev => ({ ...prev, excerpt: data.suggestion }));
             }}
          >
             <Sparkles className="h-3 w-3 mr-1" /> Auto-write
          </Button>
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-3">
            <Label>Content *</Label>
            <Button 
               type="button" 
               variant="ghost" 
               size="sm" 
               className="h-6 px-2 text-xs text-indigo-600 hover:text-indigo-700 hover:bg-indigo-50"
               onClick={async () => {
                 const kw = (formData as any).focusKeyword;
                 if (!kw) {
                   alert('Please enter a Focus Keyword first.');
                   return;
                 }
                 if (!confirm('This will overwrite current content. Continue?')) return;
                 
                 setGenerating(true);
                 try {
                    const token = localStorage.getItem('adminToken');
                    const res = await fetch('/api/admin/ai-assist', { method: 'POST', headers: { 'Content-Type':'application/json', Authorization: `Bearer ${token}` }, body: JSON.stringify({ action: 'generate_blog', title: formData.title, focusKeyword: kw }) });
                    const data = await res.json();
                    
                    if (data.content) {
                       const blocks = data.content.split('\n\n').map((para: string) => {
                          const p = para.trim();
                          const key = generateKey();
                          if (p.startsWith('## ')) return { _key: key, _type: 'block', style: 'h2', children: [{ _key: generateKey(), _type: 'span', text: p.replace(/^##\s+/, '') }] };
                          if (p.startsWith('### ')) return { _key: key, _type: 'block', style: 'h3', children: [{ _key: generateKey(), _type: 'span', text: p.replace(/^###\s+/, '') }] };
                          if (p.startsWith('> ')) return { _key: key, _type: 'block', style: 'blockquote', children: [{ _key: generateKey(), _type: 'span', text: p.replace(/^>\s+/, '') }] };
                          if (p.startsWith('- ') || p.startsWith('* ')) return { _key: key, _type: 'block', listItem: 'bullet', children: [{ _key: generateKey(), _type: 'span', text: p.replace(/^[-*]\s+/, '') }] };
                          
                          // Handle bold marks
                          const children = [];
                          const boldRegex = /\*\*(.*?)\*\*/g;
                          let lastIndex = 0;
                          let match;
                          
                          while ((match = boldRegex.exec(p)) !== null) {
                            if (match.index > lastIndex) {
                              children.push({ _key: generateKey(), _type: 'span', text: p.slice(lastIndex, match.index) });
                            }
                            children.push({ _key: generateKey(), _type: 'span', text: match[1], marks: ['strong'] });
                            lastIndex = boldRegex.lastIndex;
                          }
                          if (lastIndex < p.length) {
                            children.push({ _key: generateKey(), _type: 'span', text: p.slice(lastIndex) });
                          }
                          
                          return { 
                             _key: key,
                             _type: 'block', 
                             style: 'normal', 
                             children: children.length ? children : [{ _key: generateKey(), _type: 'span', text: p }] 
                          };
                       });
                       handleChange(prev => ({ ...prev, content: blocks }));
                    }
                 } catch (e) {
                    console.error(e);
                    alert('Failed to auto-write content');
                 } finally {
                    setGenerating(false);
                 }
               }}
            >
               {generating ? <Loader2 className="h-3 w-3 animate-spin mr-1" /> : <Sparkles className="h-3 w-3 mr-1" />}
               Auto-write
            </Button>
          </div>
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => setPreviewMode(!previewMode)}
          >
            {previewMode ? (
              <>
                <Edit2 className="h-4 w-4 mr-2" />
                Edit
              </>
            ) : (
              <>
                <Eye className="h-4 w-4 mr-2" />
                Preview
              </>
            )}
          </Button>
        </div>

        {previewMode ? (
          <div className="border rounded-md p-6 bg-white prose max-w-none min-h-[300px]">
            <div className="flex gap-2 mb-4">
              <Button type="button" variant={previewModeType==='content'?'default':'outline'} size="sm" onClick={()=>setPreviewModeType('content')}>Content</Button>
              <Button type="button" variant={previewModeType==='serp-desktop'?'default':'outline'} size="sm" onClick={()=>setPreviewModeType('serp-desktop')}>SERP Desktop</Button>
              <Button type="button" variant={previewModeType==='serp-mobile'?'default':'outline'} size="sm" onClick={()=>setPreviewModeType('serp-mobile')}>SERP Mobile</Button>
              <Button type="button" variant={previewModeType==='social'?'default':'outline'} size="sm" onClick={()=>setPreviewModeType('social')}>Social</Button>
            </div>
            {previewModeType==='content' && (
            <>
            <h1 className="text-3xl font-bold mb-4">{formData.title}</h1>
            {Boolean(formData.featuredImage) && (
               <div className="relative aspect-video w-full mb-6 rounded-lg overflow-hidden bg-gray-100">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src={urlFor(formData.featuredImage).url()} 
                    alt="Cover" 
                    className="object-cover w-full h-full"
                  />
               </div>
            )}
            <div className="text-sm text-muted-foreground mb-6">
              {new Date(formData.publishedAt).toLocaleDateString()} • {formData.category}
            </div>
            
            {(formData.content as any[])?.map((block: any, i: number) => {
              if (block._type !== 'block') return null;

              const style = block.style || 'normal';
              const isBullet = block.listItem === 'bullet';

              const renderChildren = () =>
                (block.children || []).map((child: any, ci: number) => {
                  let childNode = <span key={ci}>{child.text}</span>;
                  if (child.marks?.includes('strong')) childNode = <strong key={ci}>{childNode}</strong>;
                  if (child.marks?.includes('em')) childNode = <em key={ci}>{childNode}</em>;
                  return childNode;
                });

              if (isBullet) {
                return (
                  <ul key={i} className="list-disc pl-6 mb-3">
                    <li>{renderChildren()}</li>
                  </ul>
                );
              }

              if (style === 'h1') return <h1 key={i} className="text-3xl font-bold mt-6 mb-4">{renderChildren()}</h1>;
              if (style === 'h2') return <h2 key={i} className="text-2xl font-bold mt-5 mb-3">{renderChildren()}</h2>;
              if (style === 'h3') return <h3 key={i} className="text-xl font-bold mt-4 mb-2">{renderChildren()}</h3>;
              if (style === 'blockquote') {
                return (
                  <blockquote key={i} className="border-l-4 pl-4 italic my-4">
                    {renderChildren()}
                  </blockquote>
                );
              }

              return (
                <p key={i} className="mb-4 leading-7">
                  {renderChildren()}
                </p>
              );
            })}
            </>
            )}
            {previewModeType==='serp-desktop' && (
              <div className="border rounded-md p-4">
                <div className="text-[#1a0dab] text-xl leading-snug truncate">{formData.seoTitle || formData.title}</div>
                <div className="text-[#006621] text-sm truncate">{window.location.host}/resources/blogs/{formData.slug.current}/</div>
                <div className="text-[#545454] text-sm">{(formData.seoDescription || first100Words()).slice(0, 160)}</div>
              </div>
            )}
            {previewModeType==='serp-mobile' && (
              <div className="border rounded-md p-4 max-w-sm">
                <div className="text-[#1a0dab] text-base leading-snug truncate">{formData.seoTitle || formData.title}</div>
                <div className="text-[#006621] text-xs truncate">{window.location.host}/resources/blogs/{formData.slug.current}/</div>
                <div className="text-[#545454] text-xs">{(formData.seoDescription || first100Words()).slice(0, 140)}</div>
              </div>
            )}
            {previewModeType==='social' && (
              <div className="border rounded-md p-4">
                <div className="flex items-center gap-3">
                  {Boolean(formData.featuredImage) && (
                    <div className="w-40 h-20 bg-gray-100 overflow-hidden rounded">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={urlFor(formData.featuredImage).width(800).height(418).url()} alt="OG" className="w-full h-full object-cover" />
                    </div>
                  )}
                  <div className="flex-1">
                    <div className="font-semibold truncate">{formData.seoTitle || formData.title}</div>
                    <div className="text-sm text-muted-foreground">{(formData.seoDescription || first100Words()).slice(0, 160)}</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ) : (
          <RichTextEditor
            initialValue={formData.content as any[]}
            onChange={(val) => {
                setFormData(prev => ({ ...prev, content: val }));
                setIsDirty(true);
                setSavingStatus('unsaved');
            }}
          />
        )}
      </div>

      <div>
        <Label htmlFor="image">Featured Image</Label>
        <input
          id="image"
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="sr-only"
        />
        <div className="mt-1 flex items-center gap-3">
          <Button
            type="button"
            variant="outline"
            disabled={uploading}
          onClick={() => {
            const el = fileInputRef.current;
            if (!el) return;
            const pickerInput = el as HTMLInputElement & { showPicker?: () => void };
            if (typeof pickerInput.showPicker === 'function') {
              pickerInput.showPicker.call(pickerInput);
            } else {
              el.click();
            }
          }}
        >
            {uploading ? 'Uploading...' : 'Choose File'}
          </Button>
          <span className="text-sm text-muted-foreground">
            {imageFileName ? imageFileName : 'No file chosen'}
          </span>
        </div>
        {imageFileName && /image\d+\.(png|jpg|jpeg|gif|webp)$/i.test(imageFileName) && (
          <div className="text-xs text-yellow-700 mt-2">Filename looks generic. Consider a keyword-based name.</div>
        )}
        {Boolean(formData.featuredImage) && (
          <div className="mt-3">
            <Label htmlFor="featuredAlt">Featured Image ALT</Label>
            <Input
              id="featuredAlt"
              value={(formData.featuredImage as any)?.alt || ''}
              onChange={(e)=> setFormData(prev => ({ ...prev, featuredImage: { ...(prev.featuredImage as any), alt: e.target.value } }))}
              placeholder="Describe the image, include keyword when natural"
              className="mt-1"
            />
          </div>
        )}
      </div>

      <div>
        <Label htmlFor="seoTitle">SEO Title</Label>
        <Input
          id="seoTitle"
          value={formData.seoTitle}
          onChange={(e) => handleChange(prev => ({ ...prev, seoTitle: e.target.value }))}
          className="mt-1"
        />
        <div className="mt-2 flex items-center gap-3 text-sm">
           <span>Chars: {formData.seoTitle?.trim().length || 0} (Ideal: 50-60)</span>
           <span className={(formData.seoTitle?.trim().length || 0) >= 50 && (formData.seoTitle?.trim().length || 0) <= 60 ? 'text-green-600' : 'text-yellow-600'}>
              {(formData.seoTitle?.trim().length || 0) >= 50 && (formData.seoTitle?.trim().length || 0) <= 60 ? 'green' : 'check length'}
           </span>
           <Button type="button" variant="outline" size="sm" onClick={async () => {
             const token = localStorage.getItem('adminToken');
             const res = await fetch('/api/admin/ai-assist', { method: 'POST', headers: { 'Content-Type':'application/json', Authorization: `Bearer ${token}` }, body: JSON.stringify({ action: 'title', title: formData.title, focusKeyword: (formData as any).focusKeyword }) });
             const data = await res.json();
             if (data?.suggestion) handleChange(prev => ({ ...prev, seoTitle: data.suggestion }));
           }}>AI Improve</Button>
        </div>
      </div>

      <div>
        <Label htmlFor="seoDescription">SEO Description</Label>
        <Textarea
          id="seoDescription"
          value={formData.seoDescription}
          onChange={(e) => handleChange(prev => ({ ...prev, seoDescription: e.target.value }))}
          rows={2}
          className="mt-1"
        />
        <div className="mt-2 flex items-center gap-3 text-sm">
          <span>Chars: {formData.seoDescription.trim().length} (Ideal: 140-160)</span>
          <span className={metaIdeal(formData.seoDescription)==='green' ? 'text-green-600' : metaIdeal(formData.seoDescription)==='yellow' ? 'text-yellow-600' : 'text-red-600'}>
            {metaIdeal(formData.seoDescription)}
          </span>
          <Button type="button" variant="outline" size="sm" onClick={autoGenerateMeta}>Auto-generate</Button>
          <Button type="button" variant="outline" size="sm" onClick={async () => {
            const token = localStorage.getItem('adminToken');
            const res = await fetch('/api/admin/ai-assist', { method: 'POST', headers: { 'Content-Type':'application/json', Authorization: `Bearer ${token}` }, body: JSON.stringify({ action: 'meta', description: formData.seoDescription, focusKeyword: (formData as any).focusKeyword, content: plainText() }) });
            const data = await res.json();
            if (data?.suggestion) handleChange(prev => ({ ...prev, seoDescription: data.suggestion }));
          }}>AI Improve</Button>
        </div>
      </div>

      <div className="border p-4 rounded-md bg-slate-50 space-y-4">
         <div className="font-semibold text-sm uppercase tracking-wider text-slate-500">Technical SEO & Schema</div>
         
         <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Switch
                  id="index"
                  checked={(formData as any).index}
                  onCheckedChange={(checked) => handleChange(prev => ({ ...prev, index: checked }))}
                />
                <Label htmlFor="index">Allow Search Indexing (index)</Label>
              </div>
              
              <div>
                <Label htmlFor="canonicalUrl" className="text-xs">Canonical URL (Optional Override)</Label>
                <Input
                  id="canonicalUrl"
                  value={(formData as any).canonicalUrl}
                  onChange={(e) => handleChange(prev => ({ ...prev, canonicalUrl: e.target.value }))}
                  placeholder="https://..."
                  className="mt-1 h-8 text-sm"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label className="text-xs">Rich Results (Schema)</Label>
              <div className="flex flex-col gap-2">
                 <div className="flex items-center gap-2">
                    <Switch
                      id="schemaArticle"
                      checked={(formData as any).schemaArticle}
                      onCheckedChange={(checked) => handleChange(prev => ({ ...prev, schemaArticle: checked }))}
                    />
                    <Label htmlFor="schemaArticle" className="font-normal">Article Schema</Label>
                 </div>
                 <div className="flex items-center gap-2">
                    <Switch
                      id="schemaFAQ"
                      checked={(formData as any).schemaFAQ}
                      onCheckedChange={(checked) => handleChange(prev => ({ ...prev, schemaFAQ: checked }))}
                    />
                    <Label htmlFor="schemaFAQ" className="font-normal">FAQ Schema</Label>
                 </div>
                 <div className="flex items-center gap-2">
                    <Switch
                      id="schemaHowTo"
                      checked={(formData as any).schemaHowTo}
                      onCheckedChange={(checked) => handleChange(prev => ({ ...prev, schemaHowTo: checked }))}
                    />
                    <Label htmlFor="schemaHowTo" className="font-normal">How-To Schema</Label>
                 </div>
                 <div className="flex items-center gap-2">
                    <Switch
                      id="schemaAuthor"
                      checked={(formData as any).schemaAuthor}
                      onCheckedChange={(checked) => handleChange(prev => ({ ...prev, schemaAuthor: checked }))}
                    />
                    <Label htmlFor="schemaAuthor" className="font-normal">Author Schema</Label>
                 </div>
              </div>
            </div>
         </div>
      </div>

      <div className="flex items-center gap-2">
        <Switch
          id="published"
          checked={formData.published}
          onCheckedChange={(checked) => handleChange(prev => ({ ...prev, published: checked }))}
        />
        <Label htmlFor="published">Published</Label>
      </div>

      <div className="flex gap-4">
        <Button type="submit" disabled={loading}>
          {loading ? 'Saving...' : currentId ? 'Update Post' : 'Create Post'}
        </Button>
        <Button type="button" variant="outline" onClick={() => router.push('/admin/blogs')}>
          {currentId ? 'Done' : 'Cancel'}
        </Button>
        <Button type="button" variant="outline" onClick={() => setShowPublishChecklist(true)}>
          Pre-Publish SEO Checklist
        </Button>
      </div>
      {showPublishChecklist && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-md p-6 w-[32rem]">
            <div className="text-lg font-semibold mb-4">Pre-Publish SEO Checklist</div>
            <div className="space-y-2 text-sm">
              <div className={`${keywordList.length ? 'text-green-600' : 'text-red-600'}`}>{keywordList.length ? '✓' : '✗'} Focus keyword set</div>
              <div className={`${links.internal>0 ? 'text-green-600' : 'text-red-600'}`}>{links.internal>0 ? '✓' : '✗'} Has internal links</div>
              <div className={`${formData.seoDescription.trim().length>0 ? 'text-green-600' : 'text-red-600'}`}>{formData.seoDescription.trim().length>0 ? '✓' : '✗'} Meta description present</div>
              <div className={`${(formData.featuredImage as any)?.asset ? 'text-green-600' : 'text-red-600'}`}>{(formData.featuredImage as any)?.asset ? '✓' : '✗'} Featured image present</div>
            </div>
            <div className="mt-4 flex gap-3">
              <Button type="button" onClick={() => { setShowPublishChecklist(false); handleChange(prev => ({ ...prev, published: true })); }}>Override and Publish</Button>
              <Button type="button" variant="outline" onClick={() => setShowPublishChecklist(false)}>Close</Button>
            </div>
          </div>
        </div>
      )}
    </form>
  );
}
