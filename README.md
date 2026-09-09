# Villa Pools — Novenworks speculative redesign

Independent concept site for **Villa Pools, Inc.** (Villa Park / Southern California). Custom residential and commercial pools, spas, fountains, and water features.

This is **not** the official Villa Pools website. Villa Pools did not commission, approve, or endorse it. The footer discloses that this is an independent Novenworks concept. Do not present the prospect as a client.

Official site: [villapoolsinc.com](https://www.villapoolsinc.com/)

## Disclosures

- Business marks, wordmark, and photography remain property of their owners.
- Facts on the pages were checked against the live first-party site and the California CSLB record for license **1004609**.
- The contact form is honest demo behavior. It does not email Villa Pools. Use `(714) 488-7563` or `lbt@villapoolsinc.com` for a real inquiry.

## Stack

TanStack Start (Vite) · React 19 · TypeScript · Tailwind CSS v4 · Radix/shadcn-style primitives.

The original Novenworks prompt specified Next.js App Router. This demo uses TanStack Start so it can run in the App Builder preview and the existing Vercel nitro preset. The information architecture, copy, and asset rules are the same.

## Local setup

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
npm run preview
```

## Routes

- `/` homepage
- `/work` project photography
- `/residential`
- `/commercial`
- `/about`
- `/contact`
- `/outreach` operator-only, unlinked, `noindex`

## Content rules

See `AGENTS.project.md` and `docs/`. Do not invent reviews, ratings, warranties, pricing, timelines, or ROI. Do not recast 38+ years of industry experience as the company’s founding date (entity and C-53: 2015).
