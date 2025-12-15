# Quick Start Guide

## 1. Install Dependencies

```bash
npm install
```

## 2. Setup Sanity.io

### Option A: Use Sanity CLI (Recommended)

```bash
# Install Sanity CLI
npm install -g @sanity/cli

# Login to Sanity
sanity login

# Create new project
sanity init

# When prompted:
# - Create new project: Yes
# - Project name: cydenti-blog
# - Dataset: production
# - Output path: ./sanity-studio
# - Project template: Clean project

# Copy schemas
cp -r sanity-schemas/* sanity-studio/schemas/

# Deploy studio
cd sanity-studio
sanity deploy
cd ..
```

### Option B: Manual Setup

1. Go to https://www.sanity.io/manage
2. Create new project
3. Note Project ID
4. Go to API → Add API token (Viewer) → Copy token
5. Go to API → Add API token (Editor) → Copy token

## 3. Configure Environment

```bash
cp .env.example .env.local
```

Edit `.env.local`:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=abc123xyz    # Your project ID
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
NEXT_PUBLIC_SANITY_TOKEN=sk_read_token     # Viewer token
SANITY_WRITE_TOKEN=sk_write_token          # Editor token

ADMIN_EMAIL=admin@cydenti.com
ADMIN_PASSWORD=SecurePassword123!
JWT_SECRET=$(openssl rand -base64 32)      # Generate random secret
```

## 4. Import Schemas to Sanity

In Sanity Studio, create these document types:

### Blog Schema
```javascript
export default {
  name: 'blog',
  title: 'Blog Post',
  type: 'document',
  fields: [
    { name: 'title', type: 'string', validation: Rule => Rule.required() },
    { name: 'slug', type: 'slug', options: { source: 'title' } },
    { name: 'excerpt', type: 'text' },
    { name: 'content', type: 'array', of: [{ type: 'block' }] },
    { name: 'featuredImage', type: 'image' },
    { name: 'seoTitle', type: 'string' },
    { name: 'seoDescription', type: 'text' },
    { name: 'published', type: 'boolean', initialValue: false },
    { name: 'publishedAt', type: 'datetime' }
  ]
}
```

### Announcement Schema
```javascript
export default {
  name: 'announcement',
  title: 'Announcement',
  type: 'document',
  fields: [
    { name: 'message', type: 'string', validation: Rule => Rule.required() },
    { name: 'linkText', type: 'string' },
    { name: 'linkUrl', type: 'url' },
    { name: 'isActive', type: 'boolean', initialValue: false },
    { name: 'backgroundColor', type: 'string', initialValue: '#0A4CFF' },
    { name: 'textColor', type: 'string', initialValue: '#FFFFFF' }
  ]
}
```

## 5. Run Development Server

```bash
npm run dev
```

## 6. Access Admin Panel

1. Go to http://localhost:3000/admin/login
2. Login with credentials from `.env.local`
3. Create your first blog post!

## 7. View Public Blog

Visit http://localhost:3000/resources/blogs

## Troubleshooting

**Can't login?**
- Check ADMIN_EMAIL and ADMIN_PASSWORD in `.env.local`
- Verify JWT_SECRET is set

**No blogs showing?**
- Create a blog post in admin panel
- Toggle "Published" to ON
- Check Sanity dashboard for data

**Images not uploading?**
- Verify SANITY_WRITE_TOKEN has Editor permissions
- Check Sanity project CORS settings

## Next Steps

✅ Create your first blog post
✅ Setup announcement strip
✅ Customize colors and branding
✅ Deploy to production (see BLOG_SETUP.md)
