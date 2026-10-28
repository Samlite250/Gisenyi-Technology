# Deployment (Vercel Services)

Import Samlite250/Gisenyi-Technology as one Vercel project with the repository root as Root Directory. Root vercel.json owns services and routing.

- backend: Express in backend/, exported entrypoint src/app.ts.
- frontend: Vite in frontend/, output dist; service rewrites support React Router deep links.
- /api and /api/* reach the backend with the original path intact.
- Other paths reach the frontend. Public health check: /api/health.
- /health remains available directly on the local backend only.

## Calls and environment variables

There are currently no HTTP calls between services and no bindings. The frontend runs in the browser; future browser API calls should use same-origin /api/v1. VITE_API_BASE_URL is currently an example setting only, not read by application code. The API implements health checks only; /api/v1 endpoints do not exist yet.

If server-side code later calls another service, add a binding on the caller and read its injected URL at runtime. Do not manually set binding variables or expose them through VITE_* build variables.

Set backend secrets from backend/.env.example in Vercel settings as needed. Only public Supabase URL and anon key may use VITE_SUPABASE_* variables. Keep the service-role key, SMTP credentials, and auth secrets server-side. Set ALLOWED_ORIGINS for any separate browser origins. Do not rely on persistent local disk or in-memory background queues.

## Local verification

From the repository root run `vercel dev -L` with a current Vercel CLI. Check /api/health, /, /training, and /gtic-logo.png. An unknown /api/* path must return the backend 404, not frontend HTML. Alternatively run npm run dev in each service; Vite proxies /api to localhost:5000.

## Supabase

- Run migrations from supabase/migrations/ and apply RLS policies.
- Create buckets: public-media (public), applicant-docs (private), financial-attachments (private).
- Configure Auth redirect URLs for the final domain.

## Email outbox

Use a protected scheduled function (Vercel Cron) or external worker for email_outbox; jobs must be idempotent.

References: https://vercel.com/docs/services and https://vercel.com/docs/services/bindings
