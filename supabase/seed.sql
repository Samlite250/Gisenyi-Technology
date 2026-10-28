-- Demo seed data (CLEARLY LABELED - DO NOT USE IN PRODUCTION)
-- This file contains non-production demonstration records only.
INSERT INTO services (name, description, category, is_active) VALUES
('DEMO: Irembo assistance', 'Demo service - requires company confirmation', 'government', true),
('DEMO: RRA assistance', 'Demo service - requires company confirmation', 'government', true)
ON CONFLICT DO NOTHING;
