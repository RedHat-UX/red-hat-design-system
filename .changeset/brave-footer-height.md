---
"@rhds/elements": major
---

`<rh-footer>`: removed deprecated `--rh-footer-nojs-min-height`. Target `rh-footer:not(:defined)` directly if a no-JS min-height is still needed.

Before:

```css
rh-footer {
  --rh-footer-nojs-min-height: 750px;
}
```

After:

```css
rh-footer:not(:defined) {
  min-height: 750px;
}
```
