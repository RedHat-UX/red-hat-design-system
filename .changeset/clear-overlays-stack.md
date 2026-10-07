---
"@rhds/elements": major
---

`<rh-navigation-secondary>`: removed the deprecated `--rh-secondary-nav-overlay-z-index` CSS custom property alias. Use `--rh-navigation-secondary-overlay-z-index` instead.

Before:

```css
rh-navigation-secondary {
  --rh-secondary-nav-overlay-z-index: 100;
}
```

After:

```css
rh-navigation-secondary {
  --rh-navigation-secondary-overlay-z-index: 100;
}
```
