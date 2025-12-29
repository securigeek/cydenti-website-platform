'use client';

import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import { Button } from './ui/button';

export function AdminLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [authenticated, setAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setAuthenticated(Boolean(localStorage.getItem('adminToken')));
  }, []);

  useEffect(() => {
    if (authenticated === false) router.push('/admin');
  }, [authenticated, router]);

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    setAuthenticated(false);
    router.push('/admin');
  };

  if (authenticated !== true) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <h1 className="text-xl font-bold">Cydenti Admin</h1>
            <div className="flex gap-4">
              <Link
                href="/admin/dashboard"
                className={`px-3 py-2 rounded-md ${
                  pathname === '/admin/dashboard' ? 'bg-gray-100' : 'hover:bg-gray-50'
                }`}
              >
                Dashboard
              </Link>
              <Link
                href="/admin/blogs"
                className={`px-3 py-2 rounded-md ${
                  pathname?.startsWith('/admin/blogs') ? 'bg-gray-100' : 'hover:bg-gray-50'
                }`}
              >
                Blogs
              </Link>
              <Link
                href="/admin/announcement"
                className={`px-3 py-2 rounded-md ${
                  pathname === '/admin/announcement' ? 'bg-gray-100' : 'hover:bg-gray-50'
                }`}
              >
                Announcement
              </Link>
              <Link
                href="/admin/keywords"
                className={`px-3 py-2 rounded-md ${
                  pathname === '/admin/keywords' ? 'bg-gray-100' : 'hover:bg-gray-50'
                }`}
              >
                Keywords
              </Link>
            </div>
          </div>
          <Button onClick={handleLogout} variant="outline">
            Logout
          </Button>
        </div>
      </nav>
      <main className="max-w-7xl mx-auto px-6 py-8">{children}</main>
    </div>
  );
}
