# Artist Bible API

Backend API for the Artist Bible OS — DirtySnatcha Records.

## What this does
Provides a server-side proxy for Claude API calls so the frontend
can parse booking emails without CORS issues.

## Endpoints
- `GET /` — health check
- `POST /api/parse-email` — parse a booking email with Claude AI

## Setup on Replit
1. Import this repo
2. Click Run
3. Copy the live URL Replit gives you
4. Paste it into the Artist Bible app Settings tab
