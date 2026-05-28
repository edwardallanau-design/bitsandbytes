---
name: bitsandbytes-design
description: Use this skill to generate well-branded interfaces and assets for Bits & Bytes (a startup software solutions company), either for production or throwaway prototypes/mocks. Contains essential design guidelines, colors, type, fonts, logos, and UI kit components for prototyping. Strict black-and-white system with light + dark theme parity.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc.), copy assets out of `assets/` and create static HTML files for the user to view. Reference `colors_and_type.css` for tokens; the system supports light and dark themes via `[data-theme="light"|"dark"]` on `<html>`.

If working on production code, copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions (audience, surface, light vs dark), and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

Key files to read first:
- `README.md` — full system: voice, content fundamentals, visual foundations, iconography
- `colors_and_type.css` — the canonical token file
- `assets/` — real logo files (icon-black/white.png, logo-light/dark.png)
- `ui_kits/website/` and `ui_kits/app/` — reference UIs to mirror
