# Deployment (Vercel)

## Frontend (separate Vercel project)
- Root Directory: `gtic/frontend`
- Build Command: `npm run build`
- Output Directory: `dist`
- Env vars: `VITE_API_BASE_URL`, `VITE_SUPABASE_URL`, `VITE_SUPABASE_ANON_KEY`

## Backend (separate Vercel project)
- Root Directory: `gtic/backend`
- Build Command: `npm run vercel-build` (or `tsc`)
- Entry: `api/index.ts` or use `vercel.json` as provided; route all to serverless function
- Env vars: all backend `.env.example` values (Supabase service role, email, etc.)
- Do not rely on in-memory queues or persistent local disk

## SPA rewrites
Add rewrite `/* -> /index.html` for frontend.

## Supabase
- Run migrations from `supabase/migrations/`
- Apply RLS policies
- Create storage buckets: `public-media` (public), `applicant-docs` (private), `financial-attachments` (private)
- Configure Auth redirect URLs

## Email outbox
Use a protected scheduled function (Vercel Cron) or external worker to process `email_outbox`. Jobs must be idempotent.

## CORS
Set `ALLOWED_ORIGINS` to frontend domain(s).
