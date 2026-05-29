# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the **Bits & Bytes** marketing website — a Next.js 15 app with Payload CMS v3 as the backend, TypeScript throughout, and a custom pure-CSS design system (no Tailwind). Deployed on Vercel with Neon (serverless PostgreSQL) as the database.

## How to Run

```powershell
npm run dev        # starts Next.js + Payload at localhost:3000
                   # /admin → Payload admin panel
                   # / → marketing site
```

Environment variables required in `.env.local`:
```
DATABASE_URL=      # Neon PostgreSQL connection string (pooled)
PAYLOAD_SECRET=    # JWT signing secret
NEXT_PUBLIC_SERVER_URL=http://localhost:3000
```

## Architecture

### Stack

- **Framework:** Next.js 15 (App Router, server components by default)
- **CMS:** Payload v3 — runs as a Next.js plugin, admin at `/admin`
- **Database:** Neon PostgreSQL via `@payloadcms/db-postgres`
- **Styling:** Plain CSS — no Tailwind, no CSS-in-JS
- **Language:** TypeScript throughout

### Directory Structure

```
src/
├── app/
│   ├── (frontend)/          ← public marketing site
│   │   ├── page.tsx         ← homepage
│   │   ├── work/            ← /work and /work/[slug]
│   │   ├── about/           ← /about
│   │   ├── journal/         ← /journal and /journal/[slug]
│   │   ├── contact/         ← /contact
│   │   ├── layout.tsx       ← root layout (SiteHeader, PageTransition, SiteFooter)
│   │   └── globals.css      ← imports design tokens + site/component CSS
│   └── (payload)/
│       └── admin/           ← Payload admin panel (auto-generated)
├── collections/             ← Payload v3 collection schemas
│   ├── Projects/            ← work showcase
│   ├── Testimonials.ts
│   ├── PricingTiers.ts
│   ├── TeamMembers.ts
│   ├── Pages/               ← scaffold CMS pages (keep, may use later)
│   ├── Posts/               ← scaffold blog posts (keep, may use later)
│   ├── Media.ts
│   └── Users/
├── globals/
│   └── SiteSettings.ts      ← availability status, hero copy, contact info
├── components/              ← frontend React components (TSX)
│   ├── SiteHeader/          ← sticky header, nav, theme toggle (Client Component)
│   ├── SiteFooter/          ← full-bleed footer (Server Component)
│   ├── Hero/                ← homepage hero with typing animation + pixel grid
│   ├── WorkGrid/            ← work cards grid
│   ├── Sections/            ← TrustedBy, Process, Capabilities, Pricing, Testimonial, BookCall, Referral
│   ├── Manifesto/           ← about page team + stats section
│   ├── Journal/             ← journal list + PostView
│   ├── ContactForm/         ← booking calendar + brief form
│   └── PageTransition/      ← slide-in animation on route change
├── data/
│   ├── work.ts              ← static WORK array (migrate to Payload later)
│   └── posts.ts             ← static POSTS array (migrate to Payload later)
├── hooks/
│   ├── useInView.ts          ← IntersectionObserver hook for scroll animations
│   └── useFetchPayload.ts    ← client-side Payload REST hook (for dynamic client components)
├── styles/
│   ├── tokens.css            ← design tokens (source of truth)
│   ├── site.css              ← layout, containers, button primitives
│   └── components.css        ← per-component styles
└── payload.config.ts         ← Payload configuration
```

### Payload Collections

| Collection | Slug | Purpose |
|---|---|---|
| Projects | `projects` | Work showcase — title, slug, year, client, kind, summary, richText description, tags, image, featured, order |
| Testimonials | `testimonials` | Social proof — quote, author, role, avatarInitials, featured |
| PricingTiers | `pricing-tiers` | Pricing section — name, description, price, cadence, featured, features[], order |
| TeamMembers | `team-members` | About section — name, role, initials, bio, avatar, order |
| Pages | `pages` | CMS-driven pages (scaffold, not yet used by frontend) |
| Posts | `posts` | Blog posts (scaffold, not yet used by frontend) |
| Media | `media` | File uploads |
| Users | `users` | Admin users |

### Payload Globals

| Global | Slug | Purpose |
|---|---|---|
| SiteSettings | `site-settings` | availabilityStatus, heroTitle, heroSubtitle, aboutPillText, contactEmail, contactPhone |
| Header | `header` | CMS nav items (scaffold, not yet wired to SiteHeader) |
| Footer | `footer` | CMS nav items (scaffold, not yet wired to SiteFooter) |

### Data Flow (current — static)

Frontend pages currently use static data from `src/data/work.ts` and `src/data/posts.ts`. The Payload collections exist and are editable in `/admin` but are not yet wired to the frontend. The migration path is:

1. Replace `WORK` imports with `payload.find({ collection: 'projects' })` in server components
2. Replace `POSTS` imports with `payload.find({ collection: 'posts' })` in server components
3. Wire `SiteSettings` global to Hero, Contact, and About sections

### CSS Architecture

No Tailwind. All styling via plain CSS imported in `src/app/(frontend)/globals.css`:

```css
@import '../../styles/tokens.css';     /* design tokens */
@import '../../styles/site.css';       /* layout, containers, button primitives */
@import '../../styles/components.css'; /* per-component styles */
```

All CSS lives in `src/styles/`. Do not create CSS outside this directory.

### Design Token Source of Truth

**`src/styles/tokens.css`** is the canonical token file. Never hardcode color, spacing, or type values:
- Colors: `--gray-0` (black) through `--gray-10` (white), plus semantic aliases (`--bg`, `--fg-1`, `--fg-2`, `--fg-3`, `--border`)
- Spacing: `--s-1` (4px) through `--s-10` (128px)
- Type: `--font-display` (Instrument Serif), `--font-body` (Inter), `--font-mono` (JetBrains Mono)
- Dark mode: toggled via `data-theme="dark"` on `<html>`; all tokens have dark-mode overrides

## Design System Constraints

Hard constraints — do not violate when modifying or adding components:

- **No accent color.** Pure grayscale only. `--gray-0` through `--gray-10`.
- **Square corners.** `border-radius: 0` on all cards and inputs. Buttons use `--radius-pill` only.
- **No shadow on cards.** Cards use a 1-px hairline border, no `box-shadow`.
- **All photography in grayscale** (`filter: grayscale(1)`).
- **Icons: Lucide only** via `lucide-react`. 24×24, 1.5-px stroke. No custom icons.
- **Animations:** Sparse and quiet. `--ease-out` (`cubic-bezier(0.2,0,0,1)`), 150ms micro, 240ms standard, 400ms large. No springs, bounces, or parallax.
- **Hover states:** Buttons invert. Cards darken one step. Links underline on hover only.

## Client vs Server Components

- **Server Components (default):** pages, layout, SiteFooter, data-fetching wrappers
- **Client Components (`'use client'`):** SiteHeader, Hero, WorkGrid, Sections, Manifesto, Journal, ContactForm, PageTransition, useInView hook
- Any component using `useState`, `useEffect`, `usePathname`, or browser APIs needs `'use client'`

## Key Patterns

**Async params in Next.js 15** — `params` is a Promise, always await it:
```ts
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
}
```

**Static data → Payload migration pattern:**
```ts
// current (static)
import { WORK } from '@/data/work'

// future (Payload local API — server components only)
import { getPayload } from 'payload'
import configPromise from '@payload-config'
const payload = await getPayload({ config: configPromise })
const { docs } = await payload.find({ collection: 'projects', where: { featured: { equals: true } } })
```

**Theme-aware images in Server Components** — render both and hide with CSS:
```tsx
<img src="/assets/logo-dark.png" className="logo--dark" />
<img src="/assets/logo-light.png" className="logo--light" />
```
```css
[data-theme='light'] .logo--dark  { display: none; }
[data-theme='dark']  .logo--light { display: none; }
```

## Adding Components

1. Create `src/components/ComponentName/index.tsx`
2. Add `'use client'` if it uses hooks or browser APIs
3. Add styles to `src/styles/components.css` using only existing CSS variables
4. Import in the relevant page under `src/app/(frontend)/`

## Adding Payload Collections

1. Create `src/collections/CollectionName.ts` — import types from `'payload'` not `'payload/types'`
2. Use named export: `export const CollectionName: CollectionConfig = { ... }`
3. Add to `collections` array in `src/payload.config.ts`
4. Run `npm run generate:types` to update `src/payload-types.ts`

## Hooks

- `useInView` — scroll-triggered CSS animations (client components only)
- `useFetchPayload<T>(endpoint)` — client-side Payload REST fetches; prefer the Payload local API (`payload.find(...)`) in server components instead

## Voice & Copy

Plain-spoken, exact, low-key confident. No marketing superlatives, no exclamation points. Sentence case everywhere except the wordmark. Full brand voice guide in `README.md`.
