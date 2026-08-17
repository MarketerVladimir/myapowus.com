# myapowus.com — Astro site

An **authorized partner store** for the **APOWUS Portable Nebulizer**.

This is deliberately **not** the official APOWUS site — myapowus.com is an independent
partner, not operated by APOWUS. That is disclosed in the header (next to the wordmark)
and in the footer, alongside the affiliate/commission disclosure. The product is
currently out of stock; `PRODUCT_PURCHASE_URL` in `src/data/site.ts` points at the
manufacturer's own site until a real, live purchase link is available — see the TODO
comment there before launch.

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

## Purchase link

If a real Amazon listing becomes available, build its URL with `buildAmazonLink()` in
`src/config/site.ts` — never hardcode `tag=` in markup — and point `PRODUCT_PURCHASE_URL`
in `src/data/site.ts` at it. Until then, `PRODUCT_PURCHASE_URL` deliberately points at
`https://apowus.org/` so the CTA never links to something dead or misleading.

**Verify an ASIN before committing it.** Open `https://www.amazon.com/dp/<ASIN>` with the
Amazon delivery address set to a **US** location. With a non-US address, live US-only
listings return the same "Page Not Found" as a dead ASIN, so the check is worthless
without it.

## The availability claim

`src/data/site.ts` holds `APOWUS_LAST_VERIFIED` and `availability`. Keep this factual —
say "temporarily unavailable" / "coming soon" rather than implying the product can be
bought today when `PRODUCT_PURCHASE_URL` isn't a live buy link yet. Re-check and update
the wording (not just the date) once that changes.

## Notes

- Amazon Associates tag: `ASSOCIATE_TAG` in `src/config/site.ts`
- The required disclosure renders in the footer from `AFFILIATE_DISCLOSURE`
- The non-affiliation notice renders beside the header wordmark and, below `sm`, as a
  separate always-visible strip
