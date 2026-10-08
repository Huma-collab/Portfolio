# Huma Saira — Portfolio

A one-page portfolio built with Next.js (App Router) and ready to deploy on Vercel.

## Edit content

Everything on the site comes from `data/cv.ts`. Change text there; no layout code needs touching.
Colors and fonts are at the top of `app/globals.css` (dark mode follows the visitor's system setting).

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Deploy to Vercel

**Option A — through GitHub (recommended, auto-redeploys on every push)**

1. Create a new GitHub repository and push this folder to it:
   ```bash
   git init
   git add .
   git commit -m "Portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/portfolio.git
   git push -u origin main
   ```
2. Go to https://vercel.com/new, sign in with GitHub, and import the repository.
3. Vercel detects Next.js automatically — click **Deploy**. You get a URL like `huma-saira.vercel.app`.

**Option B — Vercel CLI**

```bash
npm i -g vercel
vercel        # preview deploy
vercel --prod # production deploy
```

To use a custom domain, open the project in Vercel → Settings → Domains.
