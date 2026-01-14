'use client';

import { AdminLayout } from '@/components/admin-layout';
import { ResourceEditor } from '@/components/resource-editor';

export default function NewWhitepaperPage() {
  return (
    <AdminLayout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">Add Whitepaper</h1>
        <ResourceEditor defaultType="whitepaper" />
      </div>
    </AdminLayout>
  );
}
