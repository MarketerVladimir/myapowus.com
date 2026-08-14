# APOWUS — Astro site

Static rebuild of [myapowus.com](https://myapowus.com/) migrated from WordPress to Astro.

## Commands

```bash
npm ci
npm run dev      # http://localhost:4321
npm run build    # output in dist/
npm run preview  # preview production build
```

## Deploy (Cloudflare Pages)

Connect the GitHub repo in Cloudflare Pages:

| Setting | Value |
|---------|-------|
| Build command | `npm run build` |
| Build output directory | `dist` |
| Node.js version | `22.12.0` (via `.nvmrc`) |

Pages runs `npm ci` automatically. No GitHub Actions required.

## Project structure

- `src/config/site.ts` — **Amazon Associates tag + `buildAmazonLink()`**
- `src/data/site.ts` — page content (text, images, product copy)
- `src/components/` — UI sections
- `src/assets/` — images processed by `astro:assets` (responsive AVIF/WebP)
- `public/_redirects` — www → apex 301
- `public/_headers` — long-cache for hashed `/_astro/*` assets
- `public/videos/promo.mp4` — product video (lazy-loaded on click)

## Affiliate links

All CTAs resolve through `buildAmazonLink()` in `src/config/site.ts`. To deep-link a
product, set its ASIN in `amazonTargets`:

```ts
product1: 'B0XXXXXXXX',
```

`null` falls back to the APOWUS brand storefront.

Verify an ASIN with Amazon delivery set to a **US** address before committing.

## Notes

- Amazon Associates tag: configured in `ASSOCIATE_TAG` (`src/config/site.ts`)
- Required disclosure is rendered in the footer from `AFFILIATE_DISCLOSURE`
- Phone: +1-800-284-4873
