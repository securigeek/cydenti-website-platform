'use client';

import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import { Button } from './ui/button';
import { 
  LayoutDashboard, 
  FileText, 
  Video, 
  File, 
  FolderOpen, 
  Megaphone, 
  RefreshCw, 
  Linkedin, 
  Key, 
  LogOut 
} from 'lucide-react';

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

  const navItems = [
    { name: 'Dashboard', href: '/admin/dashboard', icon: LayoutDashboard },
    { name: 'Blogs', href: '/admin/blogs', icon: FileText },
    { name: 'Videos', href: '/admin/videos', icon: Video },
    { name: 'Whitepapers', href: '/admin/whitepapers', icon: File },
    { name: 'Resources', href: '/admin/resources', icon: FolderOpen },
    { name: 'Announcement', href: '/admin/announcement', icon: Megaphone },
    { name: 'Updates', href: '/admin/updates', icon: RefreshCw },
    { name: 'LinkedIn', href: '/admin/linkedin', icon: Linkedin },
    { name: 'Keywords', href: '/admin/keywords', icon: Key },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r fixed top-20 md:top-24 bottom-0 overflow-y-auto z-30">
        <div className="p-6 border-b">
          <h1 className="text-xl font-bold flex items-center gap-2">
            <span className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white text-lg">C</span>
            Cydenti Admin
          </h1>
        </div>
        
        <nav className="p-4 space-y-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href || pathname?.startsWith(item.href + '/');
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium transition-colors ${
                  isActive 
                    ? 'bg-blue-50 text-blue-700' 
                    : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                }`}
              >
                <item.icon className={`w-4 h-4 ${isActive ? 'text-blue-600' : 'text-gray-500'}`} />
                {item.name}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t absolute bottom-0 w-full bg-white">
          <Button 
            onClick={handleLogout} 
            variant="ghost" 
            className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50"
          >
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-64 px-4 md:px-8 pt-24 md:pt-28 pb-8">
        <div className="max-w-6xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
}
