---
"@rhds/elements": major
---

`<rh-subnav>`: removed the deprecated `color-palette` attribute. It continues to adapt to its parent color scheme through `light-dark()`. To set a specific color context, apply `color-palette` to a parent container such as `<rh-surface>`.

Before:

```html
<rh-subnav color-palette="dark">
  <rh-navigation-link href="/">Home</rh-navigation-link>
</rh-subnav>
```

After:

```html
<rh-surface color-palette="dark">
  <rh-subnav>
    <rh-navigation-link href="/">Home</rh-navigation-link>
  </rh-subnav>
</rh-surface>
```
