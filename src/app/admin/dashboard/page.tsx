'use client';

import { AdminLayout } from '@/components/admin-layout';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function AdminDashboard() {
  return (
    <AdminLayout>
      <div className="space-y-8">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 bg-white rounded-lg border">
            <h2 className="text-xl font-semibold mb-4">Blog Management</h2>
            <p className="text-muted-foreground mb-4">
              Create, edit, and manage blog posts
            </p>
            <Button asChild>
              <Link href="/admin/blogs">Manage Blogs</Link>
            </Button>
          </div>

          <div className="p-6 bg-white rounded-lg border">
            <h2 className="text-xl font-semibold mb-4">Announcement Strip</h2>
            <p className="text-muted-foreground mb-4">
              Update the announcement banner shown across the site
            </p>
            <Button asChild>
              <Link href="/admin/announcement">Edit Announcement</Link>
            </Button>
          </div>

          <div className="p-6 bg-white rounded-lg border">
            <h2 className="text-xl font-semibold mb-4">Product Updates</h2>
            <p className="text-muted-foreground mb-4">
              Manage product updates, features, and changelog
            </p>
            <Button asChild>
              <Link href="/admin/updates">Manage Updates</Link>
            </Button>
          </div>

          <div className="p-6 bg-white rounded-lg border">
            <h2 className="text-xl font-semibold mb-4">LinkedIn Posts</h2>
            <p className="text-muted-foreground mb-4">
              Manage LinkedIn posts shown on the homepage
            </p>
            <Button asChild>
              <Link href="/admin/linkedin">Manage LinkedIn</Link>
            </Button>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
