# Quick Deployment Guide

## Deploy to Vercel (Recommended)

### Step 1: Create Vercel Account
1. Go to https://vercel.com
2. Sign up with GitHub (free)

### Step 2: Push to GitHub

```bash
cd /Users/leo.zhang/Projects/others/calsnap
git init
git add .
git commit -m "Initial commit: CalSnap legal pages"

# Create repo on GitHub, then:
git remote add origin https://github.com/YOUR_USERNAME/calsnap-legal.git
git branch -M main
git push -u origin main
```

### Step 3: Deploy on Vercel
1. Go to https://vercel.com/new
2. Import your GitHub repository
3. Vercel auto-detects Next.js - no config needed
4. Click "Deploy"

**Done!** Your site will be live at `https://calsnap-legal.vercel.app`

### Step 4: Add Custom Domain (calsnap.me)

In Vercel dashboard:
1. Go to your project → Settings → Domains
2. Add `calsnap.me`
3. Update DNS at your domain registrar:
   - **A Record:** `@` → `76.76.21.21`
   - **CNAME Record:** `www` → `cname.vercel-dns.com`

Wait 1-24 hours for DNS propagation.

## URLs for App Store Connect

Once deployed, use these URLs:

- **Privacy Policy:** `https://calsnap.me/privacy`
- **Terms of Use:** `https://calsnap.me/terms`

## Alternative: Deploy via CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
cd /Users/leo.zhang/Projects/others/calsnap
vercel --prod
```

## Test Locally

```bash
npm run dev
# Visit http://localhost:3000
```

## Updating Content

After making changes:

```bash
git add .
git commit -m "Update privacy policy"
git push
```

Vercel auto-deploys on every push to `main` branch.
