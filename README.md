# migrate-bot prod test

A minimal Next.js Pages Router sample app used to test the migrate-bot production
environment end-to-end with a real card purchase.

## Pages Router structure

- `pages/index.tsx` — Home page with `Head`, `Link`, shared `Header` component
- `pages/about.tsx` — Static page
- `pages/blog/[slug].tsx` — Dynamic route with `getStaticProps` + `getStaticPaths`
- `pages/api/hello.ts` — API route returning JSON
- `pages/_app.tsx`, `pages/_document.tsx` — App + Document wrappers
- `components/Header.tsx` — Shared client component
- `styles/globals.css` — Global stylesheet imported in `_app.tsx`

This repository is intentionally minimal but covers the core Pages Router
patterns that migrate-bot must convert to App Router (`app/` directory,
Server Components by default, `route.ts` for API endpoints, `layout.tsx`
replacing `_app.tsx` + `_document.tsx`).

## Expected migration output

After migrate-bot processes this repo, the draft PR should produce:

- `app/page.tsx` ← from `pages/index.tsx`
- `app/about/page.tsx` ← from `pages/about.tsx`
- `app/blog/[slug]/page.tsx` ← from `pages/blog/[slug].tsx`
- `app/api/hello/route.ts` ← from `pages/api/hello.ts`
- `app/layout.tsx` ← from `pages/_app.tsx` + `pages/_document.tsx`
- `components/Header.tsx` ← unchanged (or marked `'use client'`)
- Removal of `pages/` directory entries
