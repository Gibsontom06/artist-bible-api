# Artist/Tour Booking OS (Next.js + Prisma)

This repository now contains a web-based Artist/Tour Booking OS focused on email-driven offers to booking readiness.

## Implemented scope
- Next.js App Router + TypeScript scaffold with required pages.
- Prisma schema covering Artists, Tours, Shows, Lineups, Financials, Marketing readiness, Email threads/messages, Offers, Files, Commissions, Marketing assets, and outbox logs.
- Basic API endpoints for:
  - Gmail sync trigger (`POST /api/sync-gmail`)
  - Offer approval -> show creation/link (`POST /api/offers/:id/approve`)
  - Marketing requirements update + server-side readiness recompute
  - Needs-answers reply-in-thread email trigger + outbox logging
  - AI draft generation with approval-ready MarketingAsset records
  - Admin import endpoint skeleton
- Storage abstraction with show workspace prefix generation:
  `Artists/{ArtistSlug}/Shows/{YYYY-MM-DD}_{City}_{VenueSlug}/`
- Seed script for admin + roster artists.

## Notes
- Gmail/OpenAI/storage providers are integrated behind abstractions and currently stubbed for local development.
- RBAC helper utilities are included for ADMIN/AGENT/ARTIST access checks.

## Quick start
```bash
npm install
npx prisma generate
npx prisma migrate deploy
npm run seed
npm run dev
```
