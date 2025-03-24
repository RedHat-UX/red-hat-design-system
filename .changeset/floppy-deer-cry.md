---
"@rhds/elements": major
---
`<rh-accordion>`: make accordion panel always use it's parent's color scheme

BEFORE: Users could override an accordion panel's color palette
```html
<rh-accordion color-palette="darkest">
  <rh-accordion-header>Override Panel</rh-accordion-header>
  <rh-accordion-panel color-palette="lightest">Overridden panel</rh-accordion-panel>
</rh-accordion>
```

AFTER: Users cannot override an accordion panel's color palette
```html
<rh-accordion color-palette="darkest">
  <rh-accordion-header>Consistent Panel</rh-accordion-header>
  <rh-accordion-panel>Consistent panel</rh-accordion-panel>
</rh-accordion>
```
