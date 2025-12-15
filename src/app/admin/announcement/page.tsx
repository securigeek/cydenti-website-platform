'use client';

import { useEffect, useState } from 'react';
import { AdminLayout } from '@/components/admin-layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';

export default function AnnouncementPage() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    message: '',
    linkText: '',
    linkUrl: '',
    isActive: false,
    backgroundColor: '#0A4CFF',
    textColor: '#FFFFFF',
  });

  useEffect(() => {
    fetchAnnouncement();
  }, []);

  const fetchAnnouncement = async () => {
    const token = localStorage.getItem('adminToken');
    const res = await fetch('/api/admin/announcement', {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (res.ok) {
      const data = await res.json();
      if (data) {
        setFormData(data);
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const token = localStorage.getItem('adminToken');
    const res = await fetch('/api/admin/announcement', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      alert('Announcement saved successfully!');
    } else {
      alert('Failed to save announcement');
    }
    setLoading(false);
  };

  return (
    <AdminLayout>
      <div className="space-y-6 max-w-2xl">
        <h1 className="text-3xl font-bold">Announcement Strip</h1>

        <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg border">
          <div>
            <Label htmlFor="message">Message *</Label>
            <Input
              id="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="linkText">Link Text (Optional)</Label>
            <Input
              id="linkText"
              value={formData.linkText}
              onChange={(e) => setFormData({ ...formData, linkText: e.target.value })}
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="linkUrl">Link URL (Optional)</Label>
            <Input
              id="linkUrl"
              type="url"
              value={formData.linkUrl}
              onChange={(e) => setFormData({ ...formData, linkUrl: e.target.value })}
              className="mt-1"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="backgroundColor">Background Color</Label>
              <div className="flex gap-2 mt-1">
                <Input
                  id="backgroundColor"
                  type="color"
                  value={formData.backgroundColor}
                  onChange={(e) => setFormData({ ...formData, backgroundColor: e.target.value })}
                  className="w-20 h-10"
                />
                <Input
                  value={formData.backgroundColor}
                  onChange={(e) => setFormData({ ...formData, backgroundColor: e.target.value })}
                  className="flex-1"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="textColor">Text Color</Label>
              <div className="flex gap-2 mt-1">
                <Input
                  id="textColor"
                  type="color"
                  value={formData.textColor}
                  onChange={(e) => setFormData({ ...formData, textColor: e.target.value })}
                  className="w-20 h-10"
                />
                <Input
                  value={formData.textColor}
                  onChange={(e) => setFormData({ ...formData, textColor: e.target.value })}
                  className="flex-1"
                />
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Switch
              id="isActive"
              checked={formData.isActive}
              onCheckedChange={(checked) => setFormData({ ...formData, isActive: checked })}
            />
            <Label htmlFor="isActive">Active (Show on website)</Label>
          </div>

          <div
            className="p-4 rounded-md text-center"
            style={{
              backgroundColor: formData.backgroundColor,
              color: formData.textColor,
            }}
          >
            <span>{formData.message || 'Preview your announcement here'}</span>
            {formData.linkText && (
              <span className="ml-2 underline">{formData.linkText}</span>
            )}
          </div>

          <Button type="submit" disabled={loading}>
            {loading ? 'Saving...' : 'Save Announcement'}
          </Button>
        </form>
      </div>
    </AdminLayout>
  );
}
