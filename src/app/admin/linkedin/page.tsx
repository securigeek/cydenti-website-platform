'use client';

import { useEffect, useState, useCallback, startTransition } from 'react';
import { AdminLayout } from '@/components/admin-layout';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface LinkedinPost {
  _id: string;
  title: string;
  date: string;
  postUrl: string;
  isActive: boolean;
}

export default function AdminLinkedinPage() {
  const [posts, setPosts] = useState<LinkedinPost[]>([]);

  const fetchPosts = useCallback(async () => {
    const token = localStorage.getItem('adminToken');
    const res = await fetch('/api/admin/linkedin', {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (res.ok) {
      const data = await res.json();
      startTransition(() => {
        setPosts(data);
      });
    }
  }, []);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this post?')) return;

    const token = localStorage.getItem('adminToken');
    const res = await fetch(`/api/admin/linkedin?id=${id}`, {
      method: 'DELETE',
      headers: { Authorization: `Bearer ${token}` },
    });

    if (res.ok) {
      fetchPosts();
    }
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">LinkedIn Posts</h1>
          <Button asChild>
            <Link href="/admin/linkedin/new">Add LinkedIn Post</Link>
          </Button>
        </div>

        <div className="bg-white rounded-lg border">
          {posts.length === 0 ? (
            <div className="p-8 text-center text-muted-foreground">
              No posts yet. Add your first one!
            </div>
          ) : (
            <div className="divide-y">
              {posts.map((post) => (
                <div key={post._id} className="p-4 flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold">{post.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {post.date} • {post.isActive ? 'Active' : 'Inactive'}
                    </p>
                    <a href={post.postUrl} target="_blank" rel="noopener noreferrer" className="text-xs text-blue-500 hover:underline">
                      {post.postUrl}
                    </a>
                  </div>
                  <div className="flex gap-2">
                    <Button asChild variant="outline" size="sm">
                      <Link href={`/admin/linkedin/edit/${post._id}`}>Edit</Link>
                    </Button>
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => handleDelete(post._id)}
                    >
                      Delete
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </AdminLayout>
  );
}
