# Fonts

The system uses three Google Fonts families. They are currently loaded
from the Google Fonts CDN via `@import` at the top of
`../colors_and_type.css`.

## To self-host

Download these files from Google Fonts and drop them in this folder:

- **Inter** — `Inter-Variable.woff2` (variable, weights 100–900)
  https://fonts.google.com/specimen/Inter
- **Instrument Serif** — `InstrumentSerif-Regular.woff2`,
  `InstrumentSerif-Italic.woff2`
  https://fonts.google.com/specimen/Instrument+Serif
- **JetBrains Mono** — `JetBrainsMono-Variable.woff2` (variable,
  weights 100–800)
  https://fonts.google.com/specimen/JetBrains+Mono

Then in `colors_and_type.css`, replace the `@import` with the
`@font-face` declarations that ship in this file's git history (or
restore the previous version of `colors_and_type.css`).

## Substitution flag

These three families are educated picks for an editorial-engineering
black-and-white system, **not** a brand decision. If/when a real type
direction is chosen, swap freely.
