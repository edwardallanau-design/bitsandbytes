# Bits & Bytes — Design System

A design system for **Bits & Bytes**, a startup software solutions company.
Strict black-and-white theme with light/dark mode parity.

> **Status:** Bootstrapped from brief. No source codebase, Figma file, or
> existing brand assets were provided — everything here is original work
> grounded in the brief ("startup software solutions company, black and
> white theme, light + dark mode"). Logos, illustrations, and UI kits are
> all fresh creative output. Treat this as a **proposed** system; iterate
> with the user before considering it final.

---

## 1. Brand Premise

**Bits & Bytes** is a startup software solutions company. The name evokes
the smallest units of digital information — the literal substrate of
software. The brand leans into that:

- **Editorial-engineering** as the core voice. Software is craft, and
  craft writing is plain-spoken, exact, and a little bit serious.
- **Strict black & white.** No accent color, no gradients. Contrast,
  whitespace, and typography do all the heavy lifting. The system runs
  in **light** mode (paper-white canvas, ink-black type) or **dark**
  mode (true black canvas, off-white type) with full token parity.
- **A "pixel grid" visual motif** — the smallest building block of an
  image, a bit. Used sparingly, in the wordmark and as a structural
  hairline pattern on hero surfaces.
- **Monospace as a brand voice.** Labels, metadata, navigation chrome,
  and small technical surfaces use JetBrains Mono. Body copy is Inter.
  Headlines reach for Instrument Serif when the moment calls for weight.

## 2. Products covered

Two surfaces ship with this system:

- **Marketing website** (`ui_kits/website/`) — homepage, work index, work
  detail, contact. The face the world sees.
- **Web app** (`ui_kits/app/`) — the internal product surface: a project
  workspace with a sidebar, timeline, and detail pane.

## 3. Index

```
README.md                    ← you are here
SKILL.md                     ← skill manifest (Claude Code compatible)
colors_and_type.css          ← all design tokens (B&W ramp, type scale, semantic vars)
fonts/                       ← Inter, Instrument Serif, JetBrains Mono
assets/                      ← logos (SVG), favicons, brand marks
preview/                     ← design system preview cards (rendered in DS tab)
ui_kits/
  website/                   ← marketing site UI kit
    index.html               ← interactive demo
    *.jsx                    ← components
    README.md
  app/                       ← product UI kit
    index.html
    *.jsx
    README.md
```

## 4. Sources & inputs

- **Brief from user:** "Bits and Bytes : a startup software solutions
  company. Black and white theme, can also switch with a dark and light
  mode."
- **No codebase, Figma file, or existing brand assets were provided.**
  Everything in this system was generated from the brief.
- **Fonts** — sourced from Google Fonts (free, OFL-licensed):
  - [Inter](https://fonts.google.com/specimen/Inter)
  - [Instrument Serif](https://fonts.google.com/specimen/Instrument+Serif)
  - [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono)

  ⚠ **Substitution flag:** without a brand-specified type system, these
  are educated picks. Swap freely once a real type direction lands.

---

## 5. Content fundamentals

> How copy is written. Tone, casing, point-of-view, the vibe.

**Tone.** Plain-spoken. Exact. Low-key confident. The brand is technical
without being smug, modern without being trendy. Sentences are short.
Adverbs are rare. Marketing fluff ("revolutionary", "world-class",
"seamless") is off-limits.

**Voice.** First-person plural in marketing copy ("we"); second person
when addressing the user ("you"). Avoid "our team" / "our experts" — say
"we". Never "leverage", "synergize", "unlock" as verbs.

**Casing.** Sentence case for everything except the wordmark.
- ✅ "Ship better software" — sentence case
- ✅ "Recent work" — sentence case
- ❌ "Ship Better Software" — title case is reserved for proper nouns
- ❌ "SHIP BETTER SOFTWARE" — all caps is reserved for monospace eyebrow labels and tags

**Eyebrow labels.** Small monospace text, ALL CAPS, letter-spaced.
Examples: `01 — INDEX`, `CASE STUDY`, `CURRENTLY`, `READ TIME · 4 MIN`.
This is the only place all caps appears.

**Punctuation.** Em dashes for asides ("we ship software — the kind
that ships"). Ampersand reserved for the wordmark and a small set of
fixed phrases ("Bits & Bytes"). Oxford comma always.

**Numbers.** Numerals over words for any quantity that could be data
(`12 projects shipped`, not `twelve projects shipped`). Spell out
zero through nine in prose.

**Emoji.** **Never.** Not even sparingly. The brand voice does not use
emoji. If a glyph is needed, use a Unicode mark (→, —, •, §, ¶) or a
proper SVG icon.

**Examples (good).**
- *"We design and build software for teams that care about the details."*
- *"A studio that ships. Based in Brooklyn, working everywhere."*
- *"Currently booking projects starting Q1 2026."*
- *"We're eight engineers and designers. We work with one client at a time."*

**Examples (bad — do not write like this).**
- ❌ "🚀 Revolutionary AI-powered solutions for your business!"
- ❌ "Unleash the power of Bits & Bytes today."
- ❌ "Our world-class team of seasoned experts..."

---

## 6. Visual foundations

**Colors.** Pure grayscale. An 11-step ramp from `#FFFFFF` to `#000000`
in light mode, mirrored in dark. Two semantic layers (`bg`, `surface`),
three text levels (`fg-1` strongest → `fg-3` muted), one hairline
border. **No color accent.** No gradients except a single utility
"protection gradient" used to fade content under a sticky header.

**Type.** Three families, one each for serif display, sans body, and
mono accent. Full type scale lives in `colors_and_type.css`. Display
sizes are tracked tight (`-0.02em`); body text uses default tracking;
mono labels are letter-spaced (`0.08em`) and small (11–13 px).

**Spacing.** A 4-px base. Steps: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128.
We rely heavily on the larger end of the ramp — generous whitespace
is part of the brand.

**Backgrounds.** No imagery as background by default. Hero surfaces
optionally show a hairline pixel-grid pattern (1 px dots on a 32-px
grid, at ~6% opacity). Full-bleed photography is allowed in case
studies but rendered in true grayscale (`filter: grayscale(1)`).

**Animation.** Sparse and quiet.
- Easing: `cubic-bezier(0.2, 0, 0, 1)` — confident ease-out.
- Duration: 150 ms for state changes, 240 ms for layout, 400 ms for
  page transitions.
- No bounces, no springs, no overshoots. No parallax. No autoplay video.

**Hover states.** Text links: underline appears (or thickens). Buttons:
the `fg`/`bg` of the button **inverts** — the primary is solid black,
hovered it becomes solid white with a 1-px black border (and vice
versa in dark mode). Cards: a 1-px border darkens by one step;
no lift, no shadow change.

**Press states.** A 50-ms `scale(0.98)` and a one-step darken of the
fill. No ripple, no glow.

**Borders.** Always 1 px, always a single hairline color (`--border`).
Never thicker. Never dashed. Two corner radii: `4px` for small
elements (chips, inputs), `0px` for cards and large surfaces. We
**default to square corners**; rounding is the exception.

**Shadows.** Effectively none. The system uses borders, not shadows,
to separate surfaces. One exception: a faint `0 8px 32px rgba(0,0,0,0.08)`
on floating menus and modals.

**Transparency / blur.** Sticky headers use `backdrop-filter: blur(12px)`
with a `rgba(255,255,255,0.7)` (or dark equivalent) fill. Nowhere else.

**Imagery.** All photography is rendered in **grayscale**. Project work
photography is shown true-grayscale via CSS filter; brand photography
should be shot or selected with a high-contrast, slightly-grainy,
documentary feel.

**Cards.** Square corners, 1-px hairline border, no shadow, no fill
(transparent against `--bg`), generous internal padding (24–32 px).

**Layout rules.** Full-width hero, then a max-width container of
1280 px for content, with a 12-column grid and 24-px gutters. Sticky
header at 64 px tall. Footer always full-bleed.

---

## 7. Iconography

**Approach.** Hairline, geometric, monoline. 1.5-px stroke,
24×24 px viewbox, rounded line caps and joins, no fills. The
visual language matches the typography: precise, restrained, technical.

**Source.** **Lucide** (lucide.dev) is the chosen icon set — its
stroke and proportion match the system. Linked from CDN at runtime;
no icons are bundled into `assets/`.

> ⚠ **Substitution flag:** with no codebase to harvest from, Lucide is
> a pragmatic stand-in. If the brand later commits to a custom icon set,
> drop it into `assets/icons/` and update this section.

**Custom marks.** The brand uses real PNG logo lockups —
`assets/icon-black.png`, `assets/icon-white.png`,
`assets/logo-light.png` (black mark on white), `assets/logo-dark.png`
(white mark on black). The hexagonal `./b` icon and chunky modern-sans
wordmark are part of the brand identity, NOT the icon set. The earlier
SVG monograms in `assets/` are deprecated placeholders.

> ⚠ **Open question:** the supplied wordmark uses a chunky rounded
> display sans (Orbitron- or Eurostile-adjacent). The current type
> system uses Inter for headlines instead. Confirm with the user
> whether to adopt the wordmark's face for hero type, or keep
> headlines in Inter and the wordmark image-only.

**Emoji.** Never used.

**Unicode glyphs.** Allowed sparingly in copy as typographic accents:
em dash `—`, en dash `–`, bullet `•`, arrow `→`, section `§`. Not as
icons.

---

## 8. Caveats & follow-ups

- **No source materials provided.** Logos, voice, palette, type, and
  UI patterns are all proposed. Iterate with the user.
- **Fonts are Google Fonts substitutions.** If a real type direction
  is decided, replace the files in `fonts/` and re-run any embed
  references.
- **Single accent color absent by design.** If the brand later wants
  a single accent, the spot to introduce it is `--accent` in
  `colors_and_type.css` — the ramp is set up to receive it.
