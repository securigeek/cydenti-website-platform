'use client';

import { useState, useEffect } from 'react';
import { AdminLayout } from '@/components/admin-layout';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Trash2, Edit } from 'lucide-react';

interface Resource {
  _id: string;
  title: string;
  slug: { current: string };
  type: string;
  publishedAt: string;
  featured: boolean;
}

export default function ResourcesPage() {
  const [resources, setResources] = useState<Resource[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchResources = async () => {
    try {
      const token = localStorage.getItem('adminToken');
      const res = await fetch('/api/admin/resource', {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.ok) {
        const data = await res.json();
        setResources(data);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchResources();
  }, []);

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this resource?')) return;

    try {
      const token = localStorage.getItem('adminToken');
      const res = await fetch(`/api/admin/resource?id=${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` },
      });

      if (res.ok) {
        setResources((prev) => prev.filter((r) => r._id !== id));
      } else {
        alert('Failed to delete resource');
      }
    } catch {
      alert('An error occurred');
    }
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Resources</h1>
          <Button asChild>
            <Link href="/admin/resources/new">Add Resource</Link>
          </Button>
        </div>

        <div className="bg-white rounded-lg border">
          {loading ? (
            <div className="p-8 text-center text-muted-foreground">Loading...</div>
          ) : resources.length === 0 ? (
            <div className="p-8 text-center text-muted-foreground">
              No resources yet. Add your first one!
            </div>
          ) : (
            <div className="divide-y">
              {resources.map((resource) => (
                <div key={resource._id} className="p-4 flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-lg">{resource.title}</h3>
                    <div className="text-sm text-muted-foreground flex items-center gap-2">
                      <span className="capitalize px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-medium text-xs">
                        {resource.type}
                      </span>
                      <span>•</span>
                      <span>{new Date(resource.publishedAt).toLocaleDateString()}</span>
                      {resource.featured && (
                        <>
                          <span>•</span>
                          <span className="text-blue-600 font-medium">Featured</span>
                        </>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="icon" asChild>
                      <Link href={`/admin/resources/edit/${resource._id}`}>
                        <Edit className="h-4 w-4" />
                      </Link>
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-red-500 hover:text-red-700 hover:bg-red-50"
                      onClick={() => handleDelete(resource._id)}
                    >
                      <Trash2 className="h-4 w-4" />
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
