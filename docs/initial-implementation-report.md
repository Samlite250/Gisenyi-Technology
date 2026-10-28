# GTIC project scaffold created in D:\Dev\GTIC\gtic

## What was done
- Created full folder structure per spec (frontend/backend/supabase/docs)
- Configured build/tooling (Vite, Tailwind, TypeScript, Express)
- Added base layouts/pages (public site with Home/About/Services/Our Work/Training/Insights/Contact + GTIC branding colors)
- Added backend skeleton with health endpoint
- Added docs (architecture, permissions, API, deployment)
- Added env examples, vercel config, README, .gitignore
- Added placeholder migrations/seed (demo data clearly labeled)

## Next steps
- Set up Supabase project and run migrations; implement RLS policies and storage buckets/policies
- Implement auth/roles (Supabase Auth + protected staff profiles), permission middleware
- Build hero carousel (5 slides, controls, keyboard, pause/respect reduced motion)
- Implement services/training/applications/workflows with server-side validation and atomic operations
- Implement worker/super-admin dashboards with proper access control
- Implement financials (services/training/payments/invoices/expenses/reports), corrections with history
- Implement email outbox + retries + dev preview
- Add tests for critical workflows per verification checklist
- Configure Vercel projects per docs/deployment.md

## Notes
- All privileged logic must run server-side; RLS enforced
- Money as numeric, external fees excluded from GTIC income
- Private docs never public; use signed URLs/authorized access
- No hard deletes of posted financial transactions
- Demo data clearly labeled; keep out of production
