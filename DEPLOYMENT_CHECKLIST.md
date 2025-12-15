# Deployment Checklist

## Pre-Deployment

### 1. Sanity Setup
- [ ] Sanity project created
- [ ] Schemas imported (blog + announcement)
- [ ] API tokens generated (read + write)
- [ ] CORS configured for production domain
- [ ] Test content created

### 2. Environment Variables
- [ ] `.env.local` configured for development
- [ ] Production environment variables ready
- [ ] JWT_SECRET generated (32+ characters)
- [ ] Admin credentials set
- [ ] All Sanity tokens valid

### 3. Code Review
- [ ] All dependencies installed (`npm install`)
- [ ] Build succeeds (`npm run build`)
- [ ] No TypeScript errors
- [ ] No console errors in browser
- [ ] All pages load correctly

### 4. Testing
- [ ] Admin login works
- [ ] Blog CRUD operations work
- [ ] Image upload works
- [ ] Announcement strip displays
- [ ] Public blog pages render
- [ ] SEO meta tags present
- [ ] Mobile responsive
- [ ] Cross-browser tested

## Deployment (Vercel)

### 1. Connect Repository
```bash
# Push to GitHub
git add .
git commit -m "Add blog CMS system"
git push origin main
```

### 2. Import to Vercel
- Go to https://vercel.com
- Click "New Project"
- Import your repository
- Configure project

### 3. Environment Variables
Add these in Vercel dashboard:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
NEXT_PUBLIC_SANITY_TOKEN=your_read_token
SANITY_WRITE_TOKEN=your_write_token
ADMIN_EMAIL=admin@cydenti.com
ADMIN_PASSWORD=your_secure_password
JWT_SECRET=your_32_char_secret
```

### 4. Deploy
- Click "Deploy"
- Wait for build to complete
- Test deployment

## Post-Deployment

### 1. Verify Functionality
- [ ] Visit production URL
- [ ] Test admin login: `https://yourdomain.com/admin/login`
- [ ] Create test blog post
- [ ] Verify blog appears: `https://yourdomain.com/resources/blogs`
- [ ] Test announcement strip
- [ ] Check SEO meta tags (view source)
- [ ] Test image uploads

### 2. SEO Setup
- [ ] Submit sitemap to Google Search Console
- [ ] Verify Open Graph tags (use https://www.opengraph.xyz/)
- [ ] Test Twitter Cards (use https://cards-dev.twitter.com/validator)
- [ ] Check structured data (use https://search.google.com/test/rich-results)

### 3. Performance
- [ ] Run Lighthouse audit
- [ ] Check Core Web Vitals
- [ ] Test page load speed
- [ ] Verify image optimization

### 4. Security
- [ ] Verify SANITY_WRITE_TOKEN not exposed in client
- [ ] Test admin authentication
- [ ] Check CORS settings
- [ ] Verify HTTPS enabled
- [ ] Test unauthorized access attempts

### 5. Monitoring
- [ ] Set up error tracking (Sentry, etc.)
- [ ] Configure analytics (Google Analytics, etc.)
- [ ] Set up uptime monitoring
- [ ] Configure alerts

## Sanity Production Settings

### CORS Configuration
In Sanity dashboard → API → CORS Origins:
- Add production domain: `https://yourdomain.com`
- Add Vercel preview domains: `https://*.vercel.app`

### API Tokens
- **Read Token**: Viewer permissions (public)
- **Write Token**: Editor permissions (server-only)

### Content Delivery Network
- [ ] Enable Sanity CDN for faster image delivery
- [ ] Configure image optimization settings

## Domain Configuration

### Custom Domain (if applicable)
- [ ] Add custom domain in Vercel
- [ ] Update DNS records
- [ ] Verify SSL certificate
- [ ] Test domain access

## Backup & Recovery

### 1. Sanity Backup
- [ ] Export Sanity dataset
- [ ] Store backup securely
- [ ] Document restore procedure

### 2. Code Backup
- [ ] Repository backed up
- [ ] Environment variables documented
- [ ] Deployment settings saved

## Documentation

- [ ] Update README with production URL
- [ ] Document admin access for team
- [ ] Create content guidelines
- [ ] Share blog post creation guide

## Launch Checklist

### Final Checks
- [ ] All pages load without errors
- [ ] Admin panel accessible
- [ ] Blog posts display correctly
- [ ] Images load from Sanity CDN
- [ ] Announcement strip works
- [ ] SEO tags present
- [ ] Mobile responsive
- [ ] Performance acceptable (Lighthouse > 90)
- [ ] Security headers configured
- [ ] Analytics tracking

### Communication
- [ ] Notify team of launch
- [ ] Share admin credentials securely
- [ ] Provide training if needed
- [ ] Document support process

## Maintenance

### Regular Tasks
- [ ] Monitor error logs
- [ ] Review analytics
- [ ] Update dependencies monthly
- [ ] Backup content weekly
- [ ] Review security quarterly

### Content Management
- [ ] Create editorial calendar
- [ ] Assign content responsibilities
- [ ] Set publishing schedule
- [ ] Review SEO performance

## Troubleshooting

### Common Issues

**Build fails on Vercel**
- Check Node.js version compatibility
- Verify all dependencies installed
- Review build logs for errors

**Admin can't login**
- Verify environment variables set
- Check JWT_SECRET is correct
- Ensure ADMIN_EMAIL and ADMIN_PASSWORD match

**Images not loading**
- Verify Sanity CORS settings
- Check image URLs in browser console
- Ensure NEXT_PUBLIC_SANITY_PROJECT_ID correct

**Blog posts not showing**
- Verify posts are published
- Check Sanity dataset name
- Review API token permissions

## Support Contacts

- **Vercel Support**: https://vercel.com/support
- **Sanity Support**: https://www.sanity.io/help
- **Next.js Docs**: https://nextjs.org/docs

## Success Criteria

✅ Production site accessible
✅ Admin panel functional
✅ Blog posts can be created/edited
✅ Images upload successfully
✅ Announcement strip displays
✅ SEO meta tags present
✅ Performance metrics acceptable
✅ No console errors
✅ Mobile responsive
✅ Team trained on usage

---

**Deployment Date**: _____________
**Deployed By**: _____________
**Production URL**: _____________
**Admin URL**: _____________/admin/login
