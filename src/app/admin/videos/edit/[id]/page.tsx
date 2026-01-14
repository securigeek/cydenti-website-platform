'use client';

import { AdminLayout } from '@/components/admin-layout';
import { ResourceEditor } from '@/components/resource-editor';
import { useParams } from 'next/navigation';

export default function EditVideoPage() {
  const params = useParams();
  const paramId = (params?.id as string) ?? (Array.isArray(params?.id) ? (params?.id as string[])[0] : undefined);

  return (
    <AdminLayout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">Edit Video</h1>
        <ResourceEditor resourceId={paramId} defaultType="video" />
      </div>
    </AdminLayout>
  );
}
