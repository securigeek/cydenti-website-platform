'use client';

import { useState, useEffect, useCallback } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { AdminLayout } from '@/components/admin-layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

export default function EditUpdatePage() {
  const router = useRouter();
  const params = useParams();
  const id = params.id as string;
  const [loading, setLoading] = useState(false);
  type UpdateDoc = {
    _id: string
    title?: string
    date?: string
    category?: string
    description?: string
    version?: string
    image?: unknown
  }
  const [formData, setFormData] = useState({
    title: '',
    date: '',
    category: 'Feature',
    description: '',
    version: '',
    image: null as unknown,
  });

  const fetchUpdate = useCallback(async () => {
    const token = localStorage.getItem('adminToken');
    const res = await fetch('/api/admin/updates', {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (res.ok) {
      const updates: UpdateDoc[] = await res.json();
      const update = updates.find((u) => u._id === id);
      if (update) {
        setFormData({
          title: update.title || '',
          date: update.date || '',
          category: update.category || 'Feature',
          description: update.description || '',
          version: update.version || '',
          image: update.image || null,
        });
      }
    }
  }, [id]);

  useEffect(() => {
    fetchUpdate();
  }, [fetchUpdate]);

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const token = localStorage.getItem('adminToken');
    const uploadData = new FormData();
    uploadData.append('file', file);

    try {
      const res = await fetch('/api/admin/upload', {
        method: 'POST',
        headers: { Authorization: `Bearer ${token}` },
        body: uploadData,
      });
      if (res.ok) {
        const asset = await res.json();
        setFormData({
          ...formData,
          image: {
            _type: 'image',
            asset: { _type: 'reference', _ref: asset._id },
          },
        });
      }
    } catch (error) {
      console.error('Upload failed', error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const token = localStorage.getItem('adminToken');
      const res = await fetch('/api/admin/updates', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ _id: id, ...formData }),
      });

      if (res.ok) {
        router.push('/admin/updates');
      }
    } catch (error) {
      console.error('Failed to update', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AdminLayout>
      <div className="space-y-6 max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold">Edit Update</h1>
        <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg border">
          <div className="space-y-2">
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="date">Date</Label>
              <Input
                id="date"
                type="date"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="category">Category</Label>
              <select
                id="category"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              >
                <option value="Feature">Feature</option>
                <option value="Improvement">Improvement</option>
                <option value="Fix">Fix</option>
                <option value="Announcement">Announcement</option>
                <option value="Product">Product</option>
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="version">Version (Optional)</Label>
            <Input
              id="version"
              placeholder="v1.0.0"
              value={formData.version}
              onChange={(e) => setFormData({ ...formData, version: e.target.value })}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              rows={4}
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="image">Image (Optional)</Label>
            <Input
              id="image"
              type="file"
              onChange={handleImageUpload}
              accept="image/*"
            />
            {Boolean(formData.image) && <p className="text-sm text-green-600">Image uploaded successfully</p>}
          </div>

          <div className="flex justify-end gap-4">
            <Button type="button" variant="outline" onClick={() => router.back()}>
              Cancel
            </Button>
            <Button type="submit" disabled={loading}>
              {loading ? 'Updating...' : 'Update'}
            </Button>
          </div>
        </form>
      </div>
    </AdminLayout>
  );
}
