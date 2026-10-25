# ADELE — website

Website for ADELE, a couture and bespoke tailoring house at 435 Congress Street, Portland, Maine 04101 (formerly Antoine's Formalwear).

COUTURE • BESPOKE TAILORING

## What is in here

- React + Vite + TypeScript single-page site.
- Pages are switched by URL path in `src/App.tsx`: home, shop, lookbook, archive, about, contact, pickup & delivery (`/shipping`), returns, privacy, product pages (`/product/...`) and a 404 page.
- Shared navbar, bag drawer, mobile menu and footer live in `src/components/site/`. Site links live in `src/config/navigation.ts`.
- Pages are built from exported Framer components in `src/components/*-experience/` and `src/components/staticform-shopmosaic/`. Do not edit the `_framer-runtime.js` files.
- Colours and fonts are in `src/tokens.css` and `src/components/site/site.css`.

## Running it

```bash
npm install
npm run dev     # http://localhost:5173
npm run build   # production build in dist/
```

## Photos

All photos are placeholders in `public/adele/`. Each file is labelled "ADELE — IMAGE COMING". To replace one, keep the same filename and file type. The list of which page uses which file is in `public/adele/IMAGE-MAP.md`.

## Placeholder text

Text marked `[CONFIRM WITH ADELE]` or `[... — CONFIRM]` needs Adele's answer before launch. Prices are still template numbers shown in dollars and need confirming. Privacy, returns and shipping pages are marked "NEEDS REVIEW BEFORE LAUNCH" or contain CONFIRM placeholders.

## Known follow-ups

- Requests in the bag are not sent anywhere yet. The contact form needs a real destination before launch.
- Folder names still carry the template name (`staticform-shopmosaic`). Rename later.
- The Framer exports still include the template's internal layer names and some hidden text. These are not visible on the site.
