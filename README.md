# APOWUS — Astro site

Static rebuild of [myapowus.com](https://myapowus.com/) migrated from WordPress to Astro.

## Commands

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # output in dist/
npm run preview  # preview production build
```

## Deploy

1. Build: `npm run build`
2. Upload the `dist/` folder to your host (Netlify, Cloudflare Pages, Vercel, or any static hosting).
3. Point DNS for `myapowus.com` to the new host.
4. Disable or remove the old WordPress installation.

`dist/` is ~9 MB, and the largest single file (`videos/promo.mp4`, 8 MB) sits under
Cloudflare Pages' 25 MiB per-file limit. Re-encode before raising the video quality.

## Project structure

- `src/data/affiliate.ts` — **every Amazon link is built here**
- `src/data/site.ts` — page content (text, images, product copy)
- `src/components/` — UI sections
- `src/assets/` — images processed by `astro:assets` (responsive AVIF/WebP)
- `public/images/` — favicons only, served as-is
- `public/videos/promo.mp4` — product video, 720p H.264

## Affiliate links

All CTAs resolve through `affiliateUrl()` in `src/data/affiliate.ts`. To deep-link a
product, set its ASIN in `targets`:

```ts
product1: { asin: 'B0XXXXXXXX', linkId: '<from SiteStripe>' },
```

`asin: null` falls back to the APOWUS brand storefront, which stays live even when an
individual listing is pulled.

Verify an ASIN before committing it: open `https://www.amazon.com/dp/<ASIN>` with the
Amazon delivery address set to a **US** location. A non-US delivery address makes live
US-only listings return Amazon's 404 page, which looks identical to a dead ASIN.

The WordPress site's original link (`amzn.to/3Xx7b6w` → `B095RZDJJD`) is dead and must
not be restored.

## Notes

- Amazon Associates tag: `rjkey-20`
- Required disclosure is rendered in the footer from `AFFILIATE_DISCLOSURE`
- Phone: +1-800-284-4873
