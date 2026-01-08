'use client';

import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Switch } from './ui/switch';
import { Loader2 } from 'lucide-react';

interface ResourceEditorProps {
  resourceId?: string;
}

interface ResourceFormData {
  title: string;
  slug: { current: string };
  type: 'video' | 'whitepaper' | 'webinar';
  description: string;
  url: string;
  publishedAt: string;
  featured: boolean;
}

interface Resource {
  _id: string;
  title?: string;
  slug?: { current: string };
  type?: string;
  description?: string;
  url?: string;
  publishedAt?: string;
  featured?: boolean;
}

export function ResourceEditor({ resourceId }: ResourceEditorProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<ResourceFormData>({
    title: '',
    slug: { current: '' },
    type: 'video',
    description: '',
    url: '',
    publishedAt: new Date().toISOString(),
    featured: false,
  });

  const [currentId, setCurrentId] = useState(resourceId);

  const fetchResource = useCallback(async (id: string) => {
    const token = localStorage.getItem('adminToken');
    const res = await fetch('/api/admin/resource', {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (res.ok) {
      const resources: Resource[] = await res.json();
      const resource = resources.find((r) => r._id === id);
      if (resource) {
        const type: ResourceFormData['type'] =
          resource.type === 'video' ||
          resource.type === 'whitepaper' ||
          resource.type === 'webinar'
            ? resource.type
            : 'video';

        setFormData({
          title: resource.title || '',
          slug: resource.slug || { current: '' },
          type,
          description: resource.description || '',
          url: resource.url || '',
          publishedAt: resource.publishedAt || new Date().toISOString(),
          featured: resource.featured || false,
        });
      }
    }
  }, []);

  useEffect(() => {
    if (resourceId) {
      setCurrentId(resourceId);
      fetchResource(resourceId);
    }
  }, [resourceId, fetchResource]);

  const handleChange = <K extends keyof ResourceFormData>(
    field: K,
    value: ResourceFormData[K],
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSlugChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      slug: { current: e.target.value }
    }));
  };

  const generateSlug = () => {
    const slug = formData.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
    setFormData((prev) => ({ ...prev, slug: { current: slug } }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const token = localStorage.getItem('adminToken');
      const payload = { ...formData };

      const res = await fetch('/api/admin/resource', {
        method: currentId ? 'PATCH' : 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(currentId ? { _id: currentId, ...payload } : payload),
      });

      if (res.ok) {
        router.push('/admin/resources');
        router.refresh();
      } else {
        alert('Failed to save resource');
      }
    } catch {
      alert('An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8 max-w-2xl bg-white p-6 rounded-lg border">
      <div className="space-y-4">
        <div className="grid gap-2">
          <Label htmlFor="title">Title</Label>
          <Input
            id="title"
            value={formData.title}
            onChange={(e) => handleChange('title', e.target.value)}
            placeholder="Enter title"
            required
          />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="slug">Slug</Label>
          <div className="flex gap-2">
            <Input
              id="slug"
              value={formData.slug.current}
              onChange={handleSlugChange}
              placeholder="url-slug"
              required
            />
            <Button type="button" variant="outline" onClick={generateSlug}>
              Generate
            </Button>
          </div>
        </div>

        <div className="grid gap-2">
          <Label htmlFor="type">Type</Label>
          <select
            id="type"
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            value={formData.type}
            onChange={(e) =>
              handleChange('type', e.target.value as ResourceFormData['type'])
            }
          >
            <option value="video">Video</option>
            <option value="whitepaper">Whitepaper</option>
            <option value="webinar">Webinar</option>
          </select>
        </div>

        <div className="grid gap-2">
          <Label htmlFor="description">Description</Label>
          <Textarea
            id="description"
            value={formData.description}
            onChange={(e) => handleChange('description', e.target.value)}
            rows={4}
          />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="url">External URL / Video Link</Label>
          <Input
            id="url"
            value={formData.url}
            onChange={(e) => handleChange('url', e.target.value)}
            placeholder="https://youtube.com/..."
          />
        </div>

        <div className="flex items-center space-x-2">
          <Switch
            id="featured"
            checked={formData.featured}
            onCheckedChange={(checked) => handleChange('featured', checked)}
          />
          <Label htmlFor="featured">Featured Resource</Label>
        </div>

        <div className="grid gap-2">
            <Label htmlFor="publishedAt">Publish Date</Label>
            <Input
                id="publishedAt"
                type="datetime-local"
                value={formData.publishedAt ? new Date(formData.publishedAt).toISOString().slice(0, 16) : ''}
                onChange={(e) => handleChange('publishedAt', new Date(e.target.value).toISOString())}
            />
        </div>
      </div>

      <div className="flex justify-end gap-4">
        <Button type="button" variant="outline" onClick={() => router.back()}>
          Cancel
        </Button>
        <Button type="submit" disabled={loading}>
          {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          {currentId ? 'Update Resource' : 'Create Resource'}
        </Button>
      </div>
    </form>
  );
}
