# Verity Guide — veritysgame.xyz

Fan-made companion site for Verity (Roblox) by The ROBO Studio! and the Verity universe games.

## Stack

- Next.js 16 (App Router, static export) + Tailwind v4
- Deploy: Cloudflare Workers static assets (`wrangler deploy`) or Git-connected Workers Builds

## Structure

- `src/data/game.config.json` — site config (domain, SEO, routes)
- `src/data/badges.json` — all 6 badge unlock data (verified)
- Pages: `/badges` `/good-ending` `/walkthrough` `/characters` `/veritys-game` `/codes` + legal

## Develop

```bash
npm install
npm run dev
npm run build   # outputs out/
npx wrangler deploy
```
