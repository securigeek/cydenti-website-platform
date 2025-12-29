'use client';

import { useEffect, useState, useCallback, startTransition } from 'react';
import { AdminLayout } from '@/components/admin-layout';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface ProductUpdate {
  _id: string;
  title: string;
  date: string;
  category: string;
  version?: string;
}

export default function AdminUpdatesPage() {
  const [updates, setUpdates] = useState<ProductUpdate[]>([]);

  const fetchUpdates = useCallback(async () => {
    const token = localStorage.getItem('adminToken');
    const res = await fetch('/api/admin/updates', {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (res.ok) {
      const data = await res.json();
      startTransition(() => {
        setUpdates(data);
      });
    }
  }, []);

  useEffect(() => {
    fetchUpdates();
  }, [fetchUpdates]);

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this update?')) return;

    const token = localStorage.getItem('adminToken');
    const res = await fetch(`/api/admin/updates?id=${id}`, {
      method: 'DELETE',
      headers: { Authorization: `Bearer ${token}` },
    });

    if (res.ok) {
      fetchUpdates();
    }
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Product Updates</h1>
          <Button asChild>
            <Link href="/admin/updates/new">Create New Update</Link>
          </Button>
        </div>

        <div className="bg-white rounded-lg border">
          {updates.length === 0 ? (
            <div className="p-8 text-center text-muted-foreground">
              No updates yet. Create your first one!
            </div>
          ) : (
            <div className="divide-y">
              {updates.map((update) => (
                <div key={update._id} className="p-4 flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold">{update.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {update.date} • {update.category} {update.version ? `• ${update.version}` : ''}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Button asChild variant="outline" size="sm">
                      <Link href={`/admin/updates/edit/${update._id}`}>Edit</Link>
                    </Button>
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => handleDelete(update._id)}
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
