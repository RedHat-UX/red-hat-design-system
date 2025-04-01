---
"@rhds/elements": major
---

`<rh-dialog>`: Dialog now uses the native HTML `<dialog>` element internally.

Note: the `overlay` CSS shadow part has been removed in favor of the `--rh-dialog-backdrop-background-color` CSS custom property.

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
