---
"@rhds/elements": minor
---

`<rh-dialog>`: Dialog now uses the native HTML `<dialog>` element internally.

Note: the `overlay` CSS shadow part is now deprecated in favor of the `--rh-dialog-backdrop-background-color` CSS custom property.

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
