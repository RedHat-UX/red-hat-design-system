---
"@rhds/elements": major
---
`<rh-footer>`: removed deprecated CSS custom properties

Before:

```css
rh-footer.custom-footer {
  --rh-color-link-inline-on-dark: cyan;
  --rh-color-link-inline-hover-on-dark: cornflowerblue;
  --rh-color-link-inline-focus-on-dark: cornflowerblue;
  --rh-color-link-inline-visited-on-dark: cornflowerblue;
}
```

After:

```css
rh-footer.custom-footer {
  --rh-color-interactive-blue-lighter: cyan;
  --rh-color-interactive-blue-lightest: cornflowerblue;
}
```
