# QA notes

Targets: desktop ~1440px, mobile ~390px.

Checked 2026-09-08 (dev on :8080 and production https://villa-pools-demo.vercel.app):

- [x] Homepage renders with real photography
- [x] Nav + mobile menu; tap targets ≥ 44px
- [x] Phone `tel:` links
- [x] Demo form states it does not send (ack verified)
- [x] `/outreach` unlinked, `noindex`, capture files 200
- [x] No page errors; no horizontal overflow at 390 or 1440
- [x] Production `npm run build` succeeded; Vercel READY
- [x] BEFORE is live villapoolsinc.com (1440-class, 1455×3656)
- [x] AFTER desktop 1440×6452; AFTER mobile viewport 390 (780px @2x)
- [x] GIF 170 frames / ~21s scrolls hero → work → process → footer CTA
- [x] MP4 1440×900, ~21s, same scroll

Note: Playwright injected `caret-color` on inputs during desktop smoke; inputs use `suppressHydrationWarning`. No page errors.
