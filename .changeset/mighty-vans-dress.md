---
"@rhds/elements": major
---

`<rh-cta>`: Removed previously-deprecated `color-palette` attribute

Use themable containers (e.g. `<rh-surface>` or `<rh-card>`) instead.

Before:

```html
<rh-cta color-palette="dark" href="#default">Default</rh-cta>
```

After:

```html
<rh-surface color-palette="dark">
  <rh-cta href="#default">Default</rh-cta>
</rh-surface>
```
