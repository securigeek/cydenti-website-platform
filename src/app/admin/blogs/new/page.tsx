'use client';

import { AdminLayout } from '@/components/admin-layout';
import { BlogEditor } from '@/components/blog-editor';

export default function NewBlogPage() {
  return (
    <AdminLayout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">Create New Blog Post</h1>
        <BlogEditor />
      </div>
    </AdminLayout>
  );
}
