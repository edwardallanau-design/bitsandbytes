# App UI kit

The internal product surface for **Bits & Bytes** — a studio workspace
with a left sidebar, a main timeline, and a right detail pane.

## Run

Open `index.html` directly. No build step.

## Structure

```
app.css           ← shell layout, sidebar, toolbar, timeline, detail
Sidebar.jsx       ← workspace nav + projects + footer (avatar + theme toggle)
Toolbar.jsx       ← Toolbar + Tabs components for the main pane
Timeline.jsx      ← grouped-by-day list of journal-style entries
DetailPane.jsx    ← right pane with notes, activity, composer
index.html        ← three-pane interactive demo
```

## Interactions

- Click a project in the sidebar → toolbar title updates.
- Click an entry in the timeline → detail pane updates.
- Click "New entry" → an entry is prepended to today.
- Type in the composer + click "Comment" → activity log gets a new row.
- Theme toggle in sidebar foot.

## Notes

- This is a recreation of a plausible studio-internal tool, sized to
  exercise the design system: sidebar, sticky toolbar, blurred header,
  long-form list, detail pane, composer.
- Layout is fixed at 240 / 1fr / 360 — it does not collapse below
  ~960 px. Add responsive breakpoints if needed.
