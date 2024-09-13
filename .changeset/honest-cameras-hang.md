---
"@rhds/elements": minor
---

`<rh-dialog>`: Dialog now uses the native HTML `<dialog>` element internally.

Note: `#overlay` is now deprecated in favor of a public variable on the CSS psuedo-element `::backdrop`:

Before:

```css
rh-dialog::part(overlay) { ... }
```

After:

```css
rh-dialog {
  --rh-dialog-backdrop-background-color: ghostwhite;
}
```
