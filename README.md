# CalSnap Legal Pages

Simple Next.js website hosting privacy policy and terms of use for the CalSnap mobile app.

## Tech Stack

- **Next.js 15** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Shadcn/ui** - UI components
- **Vercel** - Deployment platform

## Pages

- `/` - Homepage with app info and links
- `/privacy` - Privacy Policy
- `/terms` - Terms of Use

## Local Development

```bash
npm install
npm run dev
```

Visit http://localhost:3000

## Deployment to Vercel

### Option 1: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel --prod
```

### Option 2: Deploy via GitHub

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your GitHub repo
5. Vercel will auto-detect Next.js and deploy

### Custom Domain (calsnap.me)

After deploying to Vercel:

1. Go to your project settings in Vercel
2. Navigate to "Domains"
3. Add `calsnap.me`
4. Update your DNS records as instructed by Vercel:
   - Add `A` record: `76.76.21.21`
   - Add `CNAME` record: `cname.vercel-dns.com`

Your URLs will be:
- https://calsnap.me
- https://calsnap.me/privacy
- https://calsnap.me/terms

## For iOS App Submission

Use these URLs in App Store Connect:

- **Privacy Policy URL:** `https://calsnap.me/privacy`
- **Terms of Use URL:** `https://calsnap.me/terms`

## Environment Variables

No environment variables needed for this simple site.

## License

Proprietary - CalSnap App
