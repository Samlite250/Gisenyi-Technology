# Permissions

## Roles
### WORKER_ADMIN
Allowed: view active services/standard charges, view published training/intakes, record completed services, review applications/private docs for admissions, approve/decline/request more docs, register students, record training payments, view own financial transactions only, view own daily summary, request corrections.
Not allowed: other workers' transactions, company-wide financial reports, manage staff/roles, change prices/fees/schedules, manage website content, edit/delete submitted financial records directly.

### SUPER_ADMIN
Allowed: manage workers (deactivate), manage services/prices/training/fees/intakes, review all applications/registrations, view all transactions, review correction requests, manage essential finances, manage website content/media, review audit history, manage settings.

## Enforcement
Backend permission middleware + RLS on all protected tables. Frontend hiding is insufficient.
