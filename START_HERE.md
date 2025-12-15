# 🚀 START HERE - Cydenti Blog CMS

## Welcome!

You now have a complete, production-ready blog CMS system integrated into your Cydenti website platform.

## 📋 What You Got

✅ **Headless CMS** - Sanity.io for content storage
✅ **Custom Admin Panel** - No Sanity Studio needed
✅ **Blog System** - Full CRUD operations
✅ **Announcement Strip** - Dynamic site-wide announcements
✅ **SEO Optimized** - Meta tags, OG tags, JSON-LD
✅ **Image CDN** - Sanity image hosting
✅ **Secure** - JWT auth, protected routes
✅ **Production Ready** - Fully functional system

## 🎯 Quick Start (5 Minutes)

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Setup Sanity
1. Go to https://sanity.io and create account
2. Create new project → Note Project ID
3. Go to API → Create tokens:
   - Viewer token (for reading)
   - Editor token (for writing)

### Step 3: Configure Environment
```bash
cp .env.example .env.local
```

Edit `.env.local` with your values:
```env
NEXT_PUBLIC_SANITY_PROJECT_ID=abc123        # From Sanity dashboard
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
NEXT_PUBLIC_SANITY_TOKEN=sk_viewer_token    # Viewer token
SANITY_WRITE_TOKEN=sk_editor_token          # Editor token

ADMIN_EMAIL=admin@cydenti.com
ADMIN_PASSWORD=YourSecurePassword123!
JWT_SECRET=$(openssl rand -base64 32)       # Run this command
```

### Step 4: Import Schemas to Sanity

**Option A: Using Sanity CLI (Recommended)**
```bash
npm install -g @sanity/cli
sanity login
sanity init
# Select your project
# Copy schemas from sanity-schemas/ to your studio
sanity deploy
```

**Option B: Manual (Copy-Paste)**
1. Go to Sanity Studio (your-project.sanity.studio)
2. Create document types from `sanity-schemas/blog.ts` and `sanity-schemas/announcement.ts`

### Step 5: Run Development Server
```bash
npm run dev
```

### Step 6: Access Admin Panel
1. Open http://localhost:3000/admin/login
2. Login with credentials from `.env.local`
3. Create your first blog post!

### Step 7: View Public Blog
Visit http://localhost:3000/resources/blogs

## 📚 Documentation

- **[QUICKSTART.md](./QUICKSTART.md)** - Detailed quick start guide
- **[BLOG_SETUP.md](./BLOG_SETUP.md)** - Complete documentation
- **[IMPLEMENTATION_SUMMARY.md](./IMPLEMENTATION_SUMMARY.md)** - What was built
- **[DEPLOYMENT_CHECKLIST.md](./DEPLOYMENT_CHECKLIST.md)** - Deploy to production

## 🎨 Key Features

### Admin Panel (`/admin`)
- **Dashboard** - Overview and quick access
- **Blog Management** - Create, edit, delete posts
- **Rich Content** - Portable Text support
- **Image Upload** - Direct to Sanity CDN
- **SEO Fields** - Title, description, OG tags
- **Draft/Publish** - Control visibility
- **Announcement Editor** - Site-wide messages

### Public Pages
- **Blog Listing** - `/resources/blogs`
- **Blog Detail** - `/resources/blogs/[slug]`
- **Announcement Strip** - Shows on all pages

### SEO Features
- Dynamic meta tags
- Open Graph support
- Twitter Cards
- JSON-LD structured data
- Image optimization
- Clean URLs

## 🔐 Security

✅ Write token never exposed to client
✅ JWT authentication for admin
✅ Protected API routes
✅ Server-side mutations only
✅ Environment variables for secrets

## 🏗️ Architecture

```
Frontend (Next.js)
    ↓
Custom Admin Panel → API Routes → Sanity.io
    ↓                                ↓
Public Blog Pages ← Read Token → Content + Images
```

## 📁 Project Structure

```
src/
├── app/
│   ├── api/admin/          # Protected API routes
│   ├── admin/              # Admin panel pages
│   └── resources/blogs/    # Public blog pages
├── components/
│   ├── admin-layout.tsx    # Admin wrapper
│   ├── blog-editor.tsx     # Blog form
│   └── news-ticker.tsx     # Announcement strip
├── lib/
│   ├── sanity.ts          # Sanity client
│   └── auth.ts            # JWT auth
└── sanity-schemas/        # Content schemas
```

## 🎯 Next Steps

1. ✅ Complete setup (Steps 1-7 above)
2. 📝 Create your first blog post
3. 🎨 Customize announcement strip
4. 🚀 Deploy to production (see DEPLOYMENT_CHECKLIST.md)
5. 📊 Monitor and maintain

## 💡 Tips

- **Content Format**: Use Portable Text JSON or plain text
- **Images**: Upload directly in admin panel
- **SEO**: Fill in SEO fields for better ranking
- **Drafts**: Toggle "Published" to control visibility
- **Announcement**: Use for important updates

## 🐛 Troubleshooting

**Can't login?**
→ Check credentials in `.env.local`

**No blogs showing?**
→ Ensure "Published" is ON and date is set

**Images not uploading?**
→ Verify SANITY_WRITE_TOKEN has Editor permissions

**Sanity connection error?**
→ Check Project ID and tokens

## 📞 Need Help?

1. Check documentation files
2. Review error messages in console
3. Verify environment variables
4. Check Sanity dashboard for data

## ✨ What Makes This Special

- **No Sanity Studio** - Custom admin panel only
- **Fully Integrated** - Matches your design system
- **Production Ready** - Secure and optimized
- **SEO First** - Built for search engines
- **Developer Friendly** - Clean, maintainable code

## 🎉 You're Ready!

Follow the Quick Start steps above and you'll have a working blog CMS in 5 minutes.

**Happy blogging! 🚀**

---

**Questions?** Check the documentation files or review the code comments.
