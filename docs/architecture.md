# Architecture

## Overview
GTIC is a corporate website + internal management system. Frontend and backend are separate; deployment targets Vercel (frontend + backend as serverless functions).

## Folders
- `frontend/` - React + Vite + TypeScript + Tailwind
- `backend/` - Express + TypeScript (Vercel Functions compatible)
- `supabase/` - migrations, policies, seed data
- `docs/` - documentation

## Data
Supabase PostgreSQL with RLS. Money uses `numeric` (fixed precision). Timestamps UTC, display Africa/Kigali. Currency RWF.

## Auth
Supabase Auth. Roles stored in protected table/trusted claims. Server-side permission checks + RLS. No public staff registration.

## Storage
Public bucket for approved website media. Private buckets for applicant docs and financial attachments (signed URLs/authorized access only).

## Business logic
All privileged operations via backend API. Financial operations use atomic DB functions/transactions. Email via DB-backed outbox with retries.

## Key constraints
- External provider fees excluded from GTIC income
- Partial payments supported with allocation tracking
- Approvals idempotent (no duplicate students/enrollments/welcome emails)
- No hard-delete of posted financial transactions; use reversals/adjustments
- Workers cannot access other workers' transactions or change prices/roles/content
- Private documents never public
