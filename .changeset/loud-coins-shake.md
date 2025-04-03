---
"@rhds/elements": major
---

`<rh-dialog>`: Dialog now uses the native HTML [`<dialog>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog) internally.

Note: the `overlay` CSS shadow part has been removed. Background overlay's on dialogs can no longer be customized.

Before:

```css
rh-dialog::part(overlay) { ... }
```

After:

```css
/* Delete any rh-dialog::part(overlay) declarations */
```
