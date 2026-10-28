# GTIC - Gisenyi Technology Innovation Center Ltd

Corporate website and integrated internal management system for GTIC (Gisenyi, Rwanda).

## Stack
- Frontend: React + Vite + TypeScript + Tailwind CSS + React Router + TanStack Query + React Hook Form + Zod
- Backend: Node.js + Express + TypeScript
- Database/Auth/Storage: Supabase (PostgreSQL, Auth, Storage)
- Deployment: Vercel Services (one project for frontend and backend)
- Email: Configurable transactional email provider (with local dev preview)

## Structure
See `docs/architecture.md`. This repo follows feature-based organization with separate `frontend/` and `backend/`.

## Setup (Windows PowerShell)
1. Install Node.js LTS (18+ recommended)
2. Install dependencies
```powershell
cd gtic\frontend; npm install
cd ..\backend; npm install
```
3. Configure environment variables (see `.env.example` files)
4. Set up Supabase (migrations + RLS + storage policies) - see `docs/deployment.md`
5. Run dev servers
```powershell
# Terminal 1 - backend
cd gtic\backend; npm run dev
# Terminal 2 - frontend  
cd gtic\frontend; npm run dev
```

## Notes
- Do not use MySQL/MongoDB/custom auth - use Supabase Auth as specified
- Money stored as numeric (Postgres), calculated server-side with fixed precision
- Private documents require authorization; never exposed via public URLs
- Workers have restricted access; all privileges enforced server-side + RLS
- Demo data must be clearly labeled and kept out of production by default
- Email uses DB-backed outbox with retries
