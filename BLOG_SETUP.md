# Cydenti Blog CMS Setup Guide

## Overview
This is a complete CMS-driven blog system using Sanity.io as a headless CMS with a custom-built admin panel.

## Architecture
- **Frontend**: Next.js 16 (React 19)
- **CMS**: Sanity.io (content storage only)
- **Admin Panel**: Custom React-based UI
- **Image Storage**: Sanity CDN
- **Authentication**: JWT-based admin auth

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Create Sanity Project

1. Go to [sanity.io](https://www.sanity.io/) and create a free account
2. Create a new project
3. Note your Project ID and Dataset name (usually "production")

### 3. Configure Sanity Schemas

1. In your Sanity project dashboard, go to the Studio
2. Import the schemas from `sanity-schemas/` directory:
   - `blog.ts` - Blog post schema
   - `announcement.ts` - Announcement strip schema

Or use Sanity CLI:

```bash
npm install -g @sanity/cli
sanity init
# Follow prompts and select your project
# Copy schemas from sanity-schemas/ to your Sanity studio schemas folder
sanity deploy
```

### 4. Get Sanity API Tokens

1. In Sanity dashboard, go to **API** section
2. Create two tokens:
   - **Read token** (Viewer permissions) - for public access
   - **Write token** (Editor permissions) - for admin operations

### 5. Configure Environment Variables

Copy `.env.example` to `.env.local` and fill in:

```env
# Sanity Configuration
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id_here
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
NEXT_PUBLIC_SANITY_TOKEN=your_read_token_here
SANITY_WRITE_TOKEN=your_write_token_here

# Admin Authentication
ADMIN_EMAIL=admin@cydenti.com
ADMIN_PASSWORD=your_secure_password_here
JWT_SECRET=your_random_32_char_secret_key_here
```

**Security Notes:**
- Never commit `.env.local` to git
- Use strong passwords
- Generate JWT_SECRET with: `openssl rand -base64 32`
- Keep SANITY_WRITE_TOKEN secret (server-side only)

### 6. Run Development Server

```bash
npm run dev
```

Visit:
- Public blog: `http://localhost:3000/resources/blogs`
- Admin login: `http://localhost:3000/admin/login`

## Admin Panel Features

### Login
- URL: `/admin/login`
- Use credentials from `.env.local`

### Dashboard (`/admin/dashboard`)
- Overview of blog and announcement management

### Blog Management (`/admin/blogs`)
- **List all blogs** - View all posts with status
- **Create new post** - Rich content editor
- **Edit existing post** - Update any field
- **Delete post** - Remove posts
- **Draft/Publish toggle** - Control visibility
- **SEO metadata** - Title, description, OG tags
- **Image upload** - Upload to Sanity CDN
- **Auto-generate slug** - From title

### Announcement Strip (`/admin/announcement`)
- Edit announcement message
- Optional CTA link
- Toggle visibility ON/OFF
- Customize colors (background & text)
- Live preview

## Content Management

### Creating a Blog Post

1. Go to `/admin/blogs` and click "Create New Post"
2. Fill in:
   - **Title** (required) - Auto-generates slug
   - **Slug** (required) - URL-friendly identifier
   - **Excerpt** - Short description
   - **Content** - Portable Text JSON or plain text
   - **Featured Image** - Upload image
   - **SEO Title** - Custom meta title
   - **SEO Description** - Meta description
   - **Published** - Toggle to publish
3. Click "Create Post"

### Content Format (Portable Text)

Simple text:
```json
[
  {
    "_type": "block",
    "children": [
      {"_type": "span", "text": "Your content here"}
    ]
  }
]
```

Rich content:
```json
[
  {
    "_type": "block",
    "style": "h2",
    "children": [
      {"_type": "span", "text": "Heading"}
    ]
  },
  {
    "_type": "block",
    "children": [
      {"_type": "span", "text": "Paragraph with "},
      {"_type": "span", "text": "bold text", "marks": ["strong"]},
      {"_type": "span", "text": " and "},
      {
        "_type": "span",
        "text": "a link",
        "marks": ["link-123"]
      }
    ],
    "markDefs": [
      {
        "_key": "link-123",
        "_type": "link",
        "href": "https://example.com"
      }
    ]
  }
]
```

## Public Pages

### Blog Listing (`/resources/blogs`)
- Shows all published blogs
- Displays: title, excerpt, image, date
- SEO-optimized
- Responsive grid layout

### Blog Detail (`/resources/blogs/[slug]`)
- Full blog content with Portable Text rendering
- Featured image
- SEO metadata (title, description, OG tags)
- JSON-LD schema for BlogPosting
- Responsive typography

### Announcement Strip
- Appears on all pages (via NewsTicker component)
- Fetches active announcement from Sanity
- Customizable colors and CTA link
- Marquee animation

## SEO Features

✅ Dynamic meta tags (title, description)
✅ Open Graph tags for social sharing
✅ Twitter Card support
✅ JSON-LD structured data (BlogPosting schema)
✅ Image alt tags
✅ Clean, semantic URLs
✅ Server-side rendering (SSR)
✅ Revalidation every 60 seconds

## Security

✅ Admin routes protected with JWT
✅ Write token never exposed to client
✅ Read-only public token for fetching
✅ Server-side API routes for mutations
✅ Input validation
✅ CORS protection

## Deployment

### Environment Variables (Production)

Set these in your hosting platform (Vercel, Netlify, etc.):
- All variables from `.env.local`
- Ensure `SANITY_WRITE_TOKEN` is kept secret

### Build Command

```bash
npm run build
```

### Start Command

```bash
npm start
```

## API Routes

### Public (No Auth)
- None - All reads happen client-side with public token

### Admin (Requires JWT)
- `POST /api/admin/auth` - Login
- `GET /api/admin/blog` - List blogs
- `POST /api/admin/blog` - Create blog
- `PATCH /api/admin/blog` - Update blog
- `DELETE /api/admin/blog?id=xxx` - Delete blog
- `GET /api/admin/announcement` - Get announcement
- `POST /api/admin/announcement` - Update announcement
- `POST /api/admin/upload` - Upload image

## Troubleshooting

### "Unauthorized" errors
- Check JWT token in localStorage
- Verify admin credentials in `.env.local`
- Re-login at `/admin/login`

### Images not loading
- Verify Sanity project ID is correct
- Check image upload completed successfully
- Ensure CORS is enabled in Sanity dashboard

### Content not updating
- Check revalidation settings (60s default)
- Clear browser cache
- Verify `published` field is true

### Sanity connection issues
- Verify project ID and dataset name
- Check API tokens are valid
- Ensure tokens have correct permissions

## File Structure

```
src/
├── app/
│   ├── api/admin/          # Admin API routes
│   ├── admin/              # Admin panel pages
│   └── resources/blogs/    # Public blog pages
├── components/
│   ├── ui/                 # UI components
│   ├── admin-layout.tsx    # Admin layout wrapper
│   ├── blog-editor.tsx     # Blog editor form
│   └── news-ticker.tsx     # Announcement strip
├── lib/
│   ├── sanity.ts          # Sanity client config
│   └── auth.ts            # JWT auth utilities
└── sanity-schemas/        # Sanity content schemas
```

## Support

For issues or questions:
1. Check Sanity dashboard for API status
2. Verify environment variables
3. Check browser console for errors
4. Review API route responses

## Next Steps

- Add rich text editor UI (e.g., Tiptap, Slate)
- Implement image optimization
- Add blog categories/tags
- Create sitemap generation
- Add RSS feed
- Implement search functionality
