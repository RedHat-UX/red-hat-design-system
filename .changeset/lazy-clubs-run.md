---
"@rhds/elements": minor
---

`<rh-disclosure>`: add the `borderless` and `compact` variants.

When the `variant="compact"` attribute is present, disclosures will have less padding around the trigger and disclosure content:

```html
<rh-disclosure summary="Compact variant disclosure" variant="compact">
  <p>Lorem ipsum dolor sit amet.</p>
</rh-disclosure>
```

When the `variant="borderless"` attribute is present, disclosures will not have borders and will have a gray background when expanded:

```html
<rh-disclosure summary="Borderless variant disclosure" variant="borderless">
  <p>Lorem ipsum dolor sit amet.</p>
</rh-disclosure>
```

Additionally, all disclosures now have subtle rounded borders.
