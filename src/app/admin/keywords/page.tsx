'use client';

import { AdminLayout } from '@/components/admin-layout';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Loader2, Trash2, Plus, TrendingUp, BookOpen } from 'lucide-react';

interface Keyword {
  _id: string;
  keyword: string;
  category?: string;
  notes?: string;
  blogCount: number;
  avgScore: number;
  createdAt: string;
}

export default function KeywordsPage() {
  const [keywords, setKeywords] = useState<Keyword[]>([]);
  const [loading, setLoading] = useState(true);
  const [newKeyword, setNewKeyword] = useState('');
  const [category, setCategory] = useState('Cloud');
  const [adding, setAdding] = useState(false);

  const fetchKeywords = async () => {
    try {
      const token = localStorage.getItem('adminToken');
      const res = await fetch('/api/admin/keywords', {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.ok) {
        const data = await res.json();
        setKeywords(data);
      }
    } catch (error) {
      console.error('Failed to fetch keywords', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchKeywords();
  }, []);

  const handleAddKeyword = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newKeyword.trim()) return;

    setAdding(true);
    try {
      const token = localStorage.getItem('adminToken');
      const res = await fetch('/api/admin/keywords', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          keyword: newKeyword,
          category,
        }),
      });

      if (res.ok) {
        setNewKeyword('');
        fetchKeywords();
      }
    } catch (error) {
      console.error('Failed to add keyword', error);
    } finally {
      setAdding(false);
    }
  };

  const handleDeleteKeyword = async (id: string) => {
    if (!confirm('Are you sure you want to delete this keyword?')) return;

    try {
      const token = localStorage.getItem('adminToken');
      const res = await fetch(`/api/admin/keywords?id=${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` },
      });

      if (res.ok) {
        setKeywords(keywords.filter((k) => k._id !== id));
      }
    } catch (error) {
      console.error('Failed to delete keyword', error);
    }
  };

  return (
    <AdminLayout>
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Keyword Bucket</h1>
          <div className="text-sm text-muted-foreground">
            Manage your focus keywords and track their performance
          </div>
        </div>

        {/* Add Keyword Form */}
        <div className="bg-white p-6 rounded-lg border shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Add New Keyword</h2>
          <form onSubmit={handleAddKeyword} className="flex gap-4 items-end">
            <div className="flex-1 space-y-2">
              <Label htmlFor="keyword">Keyword</Label>
              <Input
                id="keyword"
                placeholder="e.g. cloud security posture management"
                value={newKeyword}
                onChange={(e) => setNewKeyword(e.target.value)}
              />
            </div>
            <div className="w-48 space-y-2">
              <Label htmlFor="category">Category</Label>
              <select
                id="category"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="Cloud">Cloud</option>
                <option value="Security">Security</option>
                <option value="Compliance">Compliance</option>
                <option value="Identity">Identity</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <Button type="submit" disabled={adding || !newKeyword.trim()}>
              {adding ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Plus className="mr-2 h-4 w-4" />}
              Add Keyword
            </Button>
          </form>
        </div>

        {/* Keywords List */}
        <div className="bg-white rounded-lg border shadow-sm overflow-hidden">
          <div className="p-6 border-b">
            <h2 className="text-lg font-semibold">Tracked Keywords</h2>
          </div>
          
          {loading ? (
            <div className="p-8 text-center">
              <Loader2 className="h-8 w-8 animate-spin mx-auto text-slate-400" />
            </div>
          ) : keywords.length === 0 ? (
            <div className="p-8 text-center text-muted-foreground">
              No keywords added yet. Add some keywords to start tracking.
            </div>
          ) : (
            <div className="relative w-full overflow-auto">
              <table className="w-full caption-bottom text-sm">
                <thead className="[&_tr]:border-b">
                  <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Keyword</th>
                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Category</th>
                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <BookOpen className="h-4 w-4" />
                        Usage
                      </div>
                    </th>
                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <TrendingUp className="h-4 w-4" />
                        Avg. SEO Score
                      </div>
                    </th>
                    <th className="h-12 px-4 text-right align-middle font-medium text-muted-foreground">Actions</th>
                  </tr>
                </thead>
                <tbody className="[&_tr:last-child]:border-0">
                  {keywords.map((kw) => (
                    <tr key={kw._id} className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                      <td className="p-4 align-middle font-medium">{kw.keyword}</td>
                      <td className="p-4 align-middle">
                        <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
                          {kw.category || 'Uncategorized'}
                        </span>
                      </td>
                      <td className="p-4 align-middle">{kw.blogCount} posts</td>
                      <td className="p-4 align-middle">
                        <div className="flex items-center gap-2">
                          <div className="h-2 w-16 bg-slate-100 rounded-full overflow-hidden">
                            <div 
                              className={`h-full ${
                                kw.avgScore >= 80 ? 'bg-emerald-500' : 
                                kw.avgScore >= 50 ? 'bg-yellow-500' : 'bg-red-500'
                              }`} 
                              style={{ width: `${kw.avgScore}%` }} 
                            />
                          </div>
                          <span className="text-xs text-muted-foreground">{Math.round(kw.avgScore)}%</span>
                        </div>
                      </td>
                      <td className="p-4 align-middle text-right">
                        <Button
                          variant="ghost" // Changed from destructive to ghost with red text/hover
                          size="sm"
                          onClick={() => handleDeleteKeyword(kw._id)}
                          className="text-red-500 hover:text-red-600 hover:bg-red-50"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </AdminLayout>
  );
}
