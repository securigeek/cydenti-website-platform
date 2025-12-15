# Cydenti Website Platform

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Features

- ✅ Modern Next.js 16 with React 19
- ✅ Tailwind CSS v4 with custom design system
- ✅ Framer Motion animations
- ✅ Radix UI components
- ✅ **CMS-Driven Blog System** with Sanity.io
- ✅ **Custom Admin Panel** for content management
- ✅ **Dynamic Announcement Strip**
- ✅ SEO-optimized blog pages
- ✅ Image CDN via Sanity

## Getting Started

### Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Blog CMS Setup

The platform includes a complete blog management system. See detailed setup instructions:

- **[QUICKSTART.md](./QUICKSTART.md)** - Get started in 5 minutes
- **[BLOG_SETUP.md](./BLOG_SETUP.md)** - Complete documentation

#### Quick Setup

1. Install dependencies: `npm install`
2. Setup Sanity.io project at https://sanity.io
3. Copy `.env.example` to `.env.local` and configure
4. Run `npm run dev`
5. Access admin at http://localhost:3000/admin/login

## Project Structure

```
src/
├── app/
│   ├── api/admin/          # Admin API routes (protected)
│   ├── admin/              # Admin panel UI
│   ├── resources/blogs/    # Public blog pages
│   ├── company/            # Company pages
│   ├── platform/           # Platform pages
│   └── solution/           # Solution pages
├── components/
│   ├── ui/                 # Reusable UI components
│   ├── admin-layout.tsx    # Admin panel layout
│   ├── blog-editor.tsx     # Blog content editor
│   └── news-ticker.tsx     # Announcement strip
├── lib/
│   ├── sanity.ts          # Sanity CMS client
│   ├── auth.ts            # Admin authentication
│   └── utils.ts           # Utilities
└── sanity-schemas/        # CMS content schemas
```

## Key Pages

### Public
- `/` - Homepage
- `/platform` - Platform overview
- `/solution` - Solution details
- `/resources/blogs` - Blog listing
- `/resources/blogs/[slug]` - Blog detail
- `/company/about` - About page
- `/itdr` - ITDR information

### Admin (Protected)
- `/admin/login` - Admin login
- `/admin/dashboard` - Admin dashboard
- `/admin/blogs` - Blog management
- `/admin/announcement` - Announcement strip editor

## Design System

The project uses a custom design system with:
- **Primary Color**: `#0A4CFF` (Cydenti Blue)
- **Secondary Color**: `#0CB7B8` (Cydenti Teal)
- **Typography**: Geist Sans & Geist Mono
- **Components**: Radix UI primitives
- **Animations**: Framer Motion

## Environment Variables

Required for blog CMS:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
NEXT_PUBLIC_SANITY_TOKEN=
SANITY_WRITE_TOKEN=
ADMIN_EMAIL=
ADMIN_PASSWORD=
JWT_SECRET=
```

See `.env.example` for template.

## Learn More

To learn more about Next.js:
- [Next.js Documentation](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn)

To learn more about Sanity.io:
- [Sanity Documentation](https://www.sanity.io/docs)
- [GROQ Query Language](https://www.sanity.io/docs/groq)

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

**Important**: Set all environment variables in Vercel dashboard before deploying.

Check out [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Security Notes

- Never commit `.env.local` to version control
- Keep `SANITY_WRITE_TOKEN` secret (server-side only)
- Use strong passwords for admin access
- Rotate JWT_SECRET regularly in production

## Support

For issues or questions about:
- **Platform**: Check existing components and pages
- **Blog CMS**: See BLOG_SETUP.md
- **Deployment**: See Vercel/hosting documentation
