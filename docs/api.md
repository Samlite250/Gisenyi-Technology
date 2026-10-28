# API

Base path: `/api/v1`

## Conventions
- REST, JSON
- Pagination: `page`, `limit` (default reasonable limits)
- Filtering/sorting as needed
- Auth required for protected endpoints (Bearer token from Supabase Auth)
- Permission checks enforced server-side
- Validation with Zod
- Consistent error format

## Key areas (planned)
- `/auth/*` - session/role checks
- `/services` - catalogue
- `/projects` - portfolio
- `/training` - programmes/intakes
- `/applications` - public apply + staff review
- `/students` - enrolments
- `/transactions/services` - record service payments
- `/transactions/training` - record training payments
- `/finance/*` - income/expenses/invoices/receipts/reports (Super Admin)
- `/enquiries` - contact form
- `/website/*` - content management (Super Admin)
- `/media/*` - uploads
- `/notifications/outbox` - email outbox (admin)
- `/audit` - audit log (admin)
- `/corrections` - correction requests
