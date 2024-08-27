---
"@rhds/elements": major
---

`<rh-tabs>`: Removed the deprectated attribute that sets the theme for the tabs and panels
Please use the `--rh-tabs-active-border-color` CSS property directly.

Before:

```html
<rh-tabs theme="base">
  <!-- ... -->
</rh-tabs>
```

After:

```html
<rh-tabs style="--rh-tabs-active-border-color: var(--rh-color-border-interactive-on-light, #0066cc)">
  <!-- ... -->
</rh-tabs>

<rh-tabs color-palette="darkest"
         style="--rh-tabs-active-border-color: var(--rh-color-border-interactive-on-dark, #92c5f9)">
  <!-- ... -->
</rh-tabs>
```
