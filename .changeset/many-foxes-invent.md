---
"@rhds/elements": major
---

`<rh-spinner>`: remove deprecated `color-palette` attribute

Before:

```html
<rh-spinner color-palette="darkest"></rh-spinner>
```

After:

```html
<rh-surface color-palette="darkest">
  <rh-spinner></rh-spinner>
</rh-surface>
```
