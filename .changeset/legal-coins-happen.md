---
"@rhds/elements": major
---
`<rh-dialog>`: removed deprecated `--rh-modal-video-aspect-ratio` CSS custom property

Before:

```css
rh-dialog.custom-dialog {
  --rh-modal-video-aspect-ratio: 3/2;
}
```

After:

```css
rh-dialog.custom-dialog {
  --rh-dialog-video-aspect-ratio: 3/2;
}
```
