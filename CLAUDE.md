# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the **Bits & Bytes design system** — a static HTML/JSX component library and marketing site for a software solutions company. It is **not a Next.js or Node.js app**. There is no build step, no `package.json`, and no bundler. React 18 and Babel Standalone run entirely via CDN, meaning JSX is transpiled in the browser at runtime.

## How to Run

Open HTML files directly in a browser — no server or build required:

- **Marketing site:** `ui_kits/website/index.html`
- **App UI mockup:** `ui_kits/app/index.html`
- **Design previews:** any file in `preview/` (e.g. `preview/components-light.html`)

For Payload CMS integration (optional, not required for design work):
```bash
npm install payload express dotenv
# set MONGODB_URI and PAYLOAD_SECRET in .env
npm run payload dev   # Admin at localhost:3000, REST API at /api/*
```

## Architecture

### Two Interactive Surfaces

**`ui_kits/website/`** — Marketing SPA (single-page app via hash routing)
- Routes: `/` (home), `/work`, `/work/:id`, `/about`, `/journal`, `/contact`
- `Sections.jsx` is the dynamic route renderer — it maps route state to the correct component
- `index.html` bootstraps React and loads all JSX components via `<script type="text/babel">`

**`ui_kits/app/`** — Internal product mockup
- Three-pane layout: `Sidebar.jsx` → `Timeline.jsx` → `DetailPane.jsx`
- `Toolbar.jsx` provides global actions (search, add, theme toggle)

### Design Token Source of Truth

**`colors_and_type.css`** is the canonical token file. All components import values from here. Do not hardcode color, spacing, or type values — always reference CSS variables:
- Colors: `--gray-0` (black) through `--gray-10` (white), plus semantic aliases
- Spacing: `--s-1` (4px) through `--s-10` (128px)
- Type: `--font-display` (Instrument Serif), `--font-body` (Inter), `--font-mono` (JetBrains Mono)
- Dark mode: toggled via `data-theme="dark"` on `<html>`; all tokens have dark-mode overrides

### CSS Organization

- `colors_and_type.css` — tokens only (no component styles)
- `ui_kits/website/site.css` — layout, container, base typography, button primitives
- `ui_kits/website/components.css` — per-component styles (42 KB; organized by component section)
- `ui_kits/app/app.css` — app-specific layout and component styles

### Payload CMS Integration (Optional)

- `collections/` — TypeScript schemas for Payload collections (Projects, Testimonials, PricingTiers, TeamMembers)
- `globals/` — SiteSettings global
- `payload.config.example.ts` — bootstrapper config (copy and fill env vars to activate)
- `ui_kits/website/hooks.ts` — `useFetchPayload<T>()` React hook for consuming the Payload REST API

## Design System Constraints

These are hard constraints — do not violate them when modifying or adding components:

- **No accent color.** The palette is pure grayscale. `--gray-0` through `--gray-10` only.
- **Square corners.** `border-radius: 0` on all cards and inputs. Buttons use `--radius-pill` only.
- **No shadow on cards.** Cards use a 1-px hairline border (`--gray-8` / `--gray-2`), no `box-shadow`.
- **No background images or decorative images** except the pixel-grid pattern (`brand-pixel-grid.html`) used sparingly in heroes.
- **All photography in grayscale** (`filter: grayscale(1)`).
- **Icons: Lucide only.** 24×24, 1.5-px stroke, geometric monoline. No custom icons.
- **Animations:** Sparse and quiet. Use `--ease-out` (`cubic-bezier(0.2,0,0,1)`), 150ms for micro-interactions, 240ms standard, 400ms for larger transitions. No springs, bounces, or parallax.
- **Hover states:** Buttons invert (background becomes `--gray-0`, text `--gray-10`). Cards darken one step. Links underline on hover only.

## Adding Components

1. Add styles to `ui_kits/website/components.css` (or `app/app.css` for app components), using only existing CSS variables.
2. Create a `.jsx` file in the same `ui_kits/*/` directory.
3. Add a `<script type="text/babel" src="...">` tag to the relevant `index.html` — order matters (dependencies before dependents).
4. For preview pages, add a new `.html` file in `preview/` following the existing naming convention (`components-light.html`, `components-dark.html`).

## Voice & Copy

When writing any text content (headings, labels, microcopy): plain-spoken, exact, low-key confident. No marketing superlatives, no exclamation points, no "cutting-edge" or "world-class" language. The README.md root file contains the full brand voice guide.
