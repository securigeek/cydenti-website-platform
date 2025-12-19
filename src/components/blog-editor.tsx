'use client';

/* eslint-disable @typescript-eslint/no-explicit-any */

import { useState, useEffect, useRef, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Switch } from './ui/switch';
import { Check, Loader2 } from 'lucide-react';

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
    published: false,
    publishedAt: new Date().toISOString(),
  });
  const [imageFileName, setImageFileName] = useState('');

  // Auto-save states
  const [savingStatus, setSavingStatus] = useState<'saved' | 'saving' | 'unsaved'>('saved');
  const [isDirty, setIsDirty] = useState(false);
  const [currentId, setCurrentId] = useState(blogId);
  const [previewMode, setPreviewMode] = useState(false);

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

  const handleTitleChange = (title: string) => {
    handleChange(prev => ({
      ...prev,
      title,
      slug: { current: generateSlug(title) },
    }));
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

      <div>
        <Label htmlFor="title">Title *</Label>
        <Input
          id="title"
          value={formData.title}
          onChange={(e) => handleTitleChange(e.target.value)}
          required
          className="mt-1"
        />
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
        <Textarea
          id="excerpt"
          value={formData.excerpt}
          onChange={(e) => handleChange(prev => ({ ...prev, excerpt: e.target.value }))}
          rows={3}
          className="mt-1"
        />
      </div>

      <div>
        <div className="flex items-center justify-between mb-2">
          <Label>Content *</Label>
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
            
            {/* Simple Preview Render */}
            {(formData.content as any[])?.map((block: any, i: number) => {
              if (block._type !== 'block') return null;
              
              const style = block.style || 'normal';
              const text = block.children?.map((c: any) => c.text).join('') || '';
              
              if (style === 'h1') return <h1 key={i} className="text-3xl font-bold mt-6 mb-4">{text}</h1>;
              if (style === 'h2') return <h2 key={i} className="text-2xl font-bold mt-5 mb-3">{text}</h2>;
              if (style === 'h3') return <h3 key={i} className="text-xl font-bold mt-4 mb-2">{text}</h3>;
              if (style === 'blockquote') return <blockquote key={i} className="border-l-4 pl-4 italic my-4">{text}</blockquote>;
              
              return (
                <p key={i} className="mb-4">
                  {block.children?.map((child: any, ci: number) => {
                     let childText = <span key={ci}>{child.text}</span>;
                     if (child.marks?.includes('strong')) childText = <strong key={ci}>{childText}</strong>;
                     if (child.marks?.includes('em')) childText = <em key={ci}>{childText}</em>;
                     return childText;
                  })}
                </p>
              );
            })}
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
      </div>

      <div>
        <Label htmlFor="seoTitle">SEO Title</Label>
        <Input
          id="seoTitle"
          value={formData.seoTitle}
          onChange={(e) => handleChange(prev => ({ ...prev, seoTitle: e.target.value }))}
          className="mt-1"
        />
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
      </div>
    </form>
  );
}
