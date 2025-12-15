'use client';

import { AdminLayout } from '@/components/admin-layout';
import { BlogEditor } from '@/components/blog-editor';
import { useParams } from 'next/navigation';

export default function EditBlogPage() {
  const params = useParams();
  const paramId = (params?.id as string) ?? (Array.isArray(params?.id) ? (params?.id as string[])[0] : undefined);

  return (
    <AdminLayout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">Edit Blog Post</h1>
        <BlogEditor blogId={paramId} />
      </div>
    </AdminLayout>
  );
}
