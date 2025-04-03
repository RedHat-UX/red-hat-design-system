---
"@rhds/elements": major
---

`<rh-dialog>`: Dialog now uses the native HTML [`<dialog>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog) internally.

Note: the `overlay` CSS shadow part has been removed. If RHDS consumers want to customize the overlay, refer to our [theming documentation](https://ux.redhat.com/theming/customizing/).

Before:

```css
rh-dialog::part(overlay) { ... }
```

After:

```css
rh-dialog.theme-bordeaux {
  --bordeaux-darker: #260710;
  --rh-color-surface-darker: var(--bordeaux-darker);
}
```
