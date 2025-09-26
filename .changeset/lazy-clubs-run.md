---
"@rhds/elements": minor
---

`<rh-disclosure>`: add the `open` and `compact` variants.

When the `variant="compact"` attribute is present, disclosures will have less padding around the trigger and disclosure content:

```html
<rh-disclosure summary="Compact variant disclosure" variant="compact">
  <p>Lorem ipsum dolor sit amet.</p>
</rh-disclosure>
```

When the `variant="open"` attribute is present, disclosures will not have borders and will have a gray background when expanded:

```html
<rh-disclosure summary="Open variant disclosure" variant="open">
  <p>Lorem ipsum dolor sit amet.</p>
</rh-disclosure>
```
