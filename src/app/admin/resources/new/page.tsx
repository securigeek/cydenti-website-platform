'use client';

import { AdminLayout } from '@/components/admin-layout';
import { ResourceEditor } from '@/components/resource-editor';

export default function NewResourcePage() {
  return (
    <AdminLayout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">Add Resource</h1>
        <ResourceEditor />
      </div>
    </AdminLayout>
  );
}
