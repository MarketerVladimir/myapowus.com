# myapowus.com — Astro site

An independent page about **APOWUS portable nebulizer availability**, plus links to
portable steam inhalers that are actually on sale.

This is deliberately **not** an official APOWUS site. APOWUS listings disappeared from
Amazon.com; rather than keep pointing buy buttons at a storefront with nothing in it,
the page states what was observed and links to alternatives.

## Commands

```bash
npm ci
npm run dev      # http://localhost:4321
npm run build    # output in dist/
npm run preview  # preview production build
```

`astro check` is not wired up here: `@astrojs/check` 0.9.x conflicts on peer deps with
Astro 7. Types are therefore not verified in CI or locally.

## Deploy (Cloudflare Workers Static Assets)

Pushing to `master` is the deploy. Cloudflare builds the commit and publishes it —
there are no GitHub Actions.

| Setting | Value |
|---------|-------|
| Repository | `MarketerVladimir/myapowus.com` |
| Production branch | `master` |
| Build command | `npm run build` |
| Deploy command | `npx wrangler deploy` |
| Output directory | `dist` |
| Node.js | `22.19.0` (via `.nvmrc`) |

Worker config lives in `wrangler.jsonc`. Cloudflare runs `npm ci` itself — do not add
it to the build command.

Notes specific to Workers Static Assets:

- `public/_headers` **is** honoured (verified live: `/_astro/*` returns
  `Cache-Control: immutable`).
- `public/_redirects` was removed — a `www → apex` rule there is silently ignored on
  Workers. Do that with a Cloudflare **Redirect Rule** instead.
- `src/pages/404.astro` must keep producing `dist/404.html`; `not_found_handling` in
  `wrangler.jsonc` points at it.

## Project structure

- `src/config/site.ts` — Amazon Associates tag, `buildAmazonLink()`, `AFFILIATE_DISCLOSURE`
- `src/data/site.ts` — all page copy, the product list, and the dated APOWUS findings
- `src/components/` — UI sections
- `src/assets/` — images processed by `astro:assets` (responsive AVIF/WebP)
- `public/` — favicons, `robots.txt`, `llms.txt`, `_headers`

## Affiliate links

Every Amazon URL is built by `buildAmazonLink()` in `src/config/site.ts`; never hardcode
`tag=` in markup. Products live in `products` in `src/data/site.ts`, keyed by ASIN:

```ts
{ asin: 'B07WGXM2TT', brand: 'Mypurmist', title: '…', text: '…' }
```

**Verify an ASIN before committing it.** Open `https://www.amazon.com/dp/<ASIN>` with the
Amazon delivery address set to a **US** location. With a non-US address, live US-only
listings return the same "Page Not Found" as a dead ASIN, so the check is worthless
without it.

## The APOWUS availability claim

`src/data/site.ts` holds `APOWUS_LAST_VERIFIED` and `apowusStatus`. These are the only
place the page makes a factual claim about APOWUS, and every line was observed directly
on that date with a US delivery address:

- APOWUS product pages return Amazon's "Page Not Found"
- an Amazon search for "APOWUS nebulizer" returns no APOWUS products
- the APOWUS storefront is online, but its own search for "nebulizer" returns nothing

Two rules when editing this:

1. **Do not attribute wording to Amazon.** The pages 404 — they do not show the
   "Currently unavailable / we don't know when or if this item will be back in stock"
   state. Quoting that would invent a status nobody observed.
2. **Re-check before changing the date.** If the listings return, the page needs
   rewriting, not a date bump.

## Notes

- Amazon Associates tag: `ASSOCIATE_TAG` in `src/config/site.ts`
- The required disclosure renders in the footer from `AFFILIATE_DISCLOSURE`
- The non-affiliation notice renders beside the header wordmark and, below `sm`, as a
  separate always-visible strip
