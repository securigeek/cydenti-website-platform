'use client';

import { useState, useEffect, useCallback } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { AdminLayout } from '@/components/admin-layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';

type LinkedinPost = {
  _id: string;
  title?: string;
  content?: string;
  postUrl?: string;
  authorName?: string;
  date?: string;
  isActive?: boolean;
};

export default function EditLinkedinPostPage() {
  const router = useRouter();
  const params = useParams();
  const id = params.id as string;
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    postUrl: '',
    authorName: '',
    date: '',
    isActive: true,
  });

  const fetchPost = useCallback(async () => {
    const token = localStorage.getItem('adminToken');
    const res = await fetch('/api/admin/linkedin', {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (res.ok) {
      const posts: LinkedinPost[] = await res.json();
      const post = posts.find((p) => p._id === id);
      if (post) {
        setFormData({
          title: post.title || '',
          content: post.content || '',
          postUrl: post.postUrl || '',
          authorName: post.authorName || '',
          date: post.date || '',
          isActive: post.isActive !== undefined ? post.isActive : true,
        });
      }
    }
  }, [id]);

  useEffect(() => {
    fetchPost();
  }, [fetchPost]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const token = localStorage.getItem('adminToken');
      const res = await fetch('/api/admin/linkedin', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ _id: id, ...formData }),
      });

      if (res.ok) {
        router.push('/admin/linkedin');
      } else {
        alert('Failed to update post');
      }
    } catch (error) {
      console.error('Failed to update post', error);
      alert('An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <AdminLayout>
      <div className="space-y-6 max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold">Edit LinkedIn Post</h1>
        <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg border">
          <div className="space-y-2">
            <Label htmlFor="title">Internal Title *</Label>
            <Input
              id="title"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="content">Post Content *</Label>
            <Textarea
              id="content"
              value={formData.content}
              onChange={(e) => setFormData({ ...formData, content: e.target.value })}
              required
              rows={5}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="postUrl">LinkedIn Post URL *</Label>
            <Input
              id="postUrl"
              type="url"
              value={formData.postUrl}
              onChange={(e) => setFormData({ ...formData, postUrl: e.target.value })}
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="authorName">Author Name</Label>
              <Input
                id="authorName"
                value={formData.authorName}
                onChange={(e) => setFormData({ ...formData, authorName: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="date">Date</Label>
              <Input
                id="date"
                type="date"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              />
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Switch
              id="isActive"
              checked={formData.isActive}
              onCheckedChange={(checked) => setFormData({ ...formData, isActive: checked })}
            />
            <Label htmlFor="isActive">Show on Homepage</Label>
          </div>

          <div className="flex justify-end gap-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => router.back()}
              disabled={loading}
            >
              Cancel
            </Button>
            <Button type="submit" disabled={loading}>
              {loading ? 'Saving...' : 'Save Changes'}
            </Button>
          </div>
        </form>
      </div>
    </AdminLayout>
  );
}
