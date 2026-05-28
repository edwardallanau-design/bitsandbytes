# Website UI kit

The marketing surface for **Bits & Bytes**. A small, calm, editorial-engineering site — homepage, work index, work detail, about, journal, contact.

## Run

Open `index.html` directly. No build step.

## Structure

```
site.css            ← layout, typography, buttons, container
components.css      ← per-component styles
Header.jsx          ← sticky blurred header + theme toggle
Footer.jsx          ← full-bleed footer with three link cols
Hero.jsx            ← homepage hero w/ display headline + meta strip
WorkGrid.jsx        ← clickable list of case studies (also exports WORK)
Manifesto.jsx       ← "How we work" — 4 numbered points
ContactForm.jsx     ← inline form with success receipt
index.html          ← interactive multi-route demo
```

## Routes (fake, in-memory)

- `/` — Hero + Work (3) + Manifesto + Contact
- `/work` — full work index
- `/work/:id` — case-study stub
- `/about` — manifesto only
- `/journal` — empty placeholder
- `/contact` — contact form

## Notes

- Theme toggle in the header switches `data-theme` on `<html>`.
- Lucide icons re-render via `lucide.createIcons()` after every state change.
- All copy follows the content fundamentals in the root `README.md`.
