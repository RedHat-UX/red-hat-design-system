---
"@rhds/elements": major
---
`<rh-accordion>`: Removed the `heading-tag` and `heading-text` attributes from the `rh-accordion-header` element.
`<h2>` (etc.) elements are no longer valid content for `<rh-accordion-header>`,
but users are encouraged to wrap accordion headers in the appropriate heading element, in case javascript fails to load.

Before:
```html
<rh-accordion>
  <rh-accordion-header>
    <h2>First Header</h2>
  </rh-accordion-header>
  <rh-accordion-panel>...</rh-accordion-panel>
</rh-accordion>
```

After:
```html
<rh-accordion>
  <h2><rh-accordion-header>First Header</rh-accordion-header></h2>
  <rh-accordion-panel>...</rh-accordion-panel>
</rh-accordion>
```
