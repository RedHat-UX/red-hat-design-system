---
"@rhds/elements": minor
---

✨ Added `<rh-drawer>`

A collapsible side panel for supplementary content or navigation. The drawer
slides in from the side and supports several layout modes depending on context.

By default, the drawer opens as an overlay that slides over page content:

```html
<button id="menu-toggle">Open menu</button>
<rh-drawer trigger-id="menu-toggle"
           accessible-label="Site navigation">
  <nav>
    <a href="/docs">Documentation</a>
    <a href="/about">About</a>
  </nav>
</rh-drawer>
```

When the drawer's parent element has `container-type: inline-size`, it responds
to the available width — appearing inline at wide widths and switching to an
overlay at narrow widths:

```html
<div style="container-type: inline-size;">
  <rh-drawer open accessible-label="Navigation">
    <nav>Panel content</nav>
  </rh-drawer>
  <main>Page content</main>
</div>
```

Add `collapsible` to show a toggle that lets users expand and collapse the panel:

```html
<rh-drawer collapsible open accessible-label="Filters">
  <nav>Collapsible panel content</nav>
</rh-drawer>
```

Use `inline="end"` to position the panel on the opposite side, and `position="fixed"`
for a full-viewport overlay. The `open`, `close`, and `toggle` events fire when
the panel state changes, and the `show()`, `close()`, and `toggle()` methods
allow programmatic control.
