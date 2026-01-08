'use client';

import { AdminLayout } from '@/components/admin-layout';
import { ResourceEditor } from '@/components/resource-editor';
import { useParams } from 'next/navigation';

export default function EditResourcePage() {
  const params = useParams();
  const paramId = (params?.id as string) ?? (Array.isArray(params?.id) ? (params?.id as string[])[0] : undefined);

  return (
    <AdminLayout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">Edit Resource</h1>
        <ResourceEditor resourceId={paramId} />
      </div>
    </AdminLayout>
  );
}
