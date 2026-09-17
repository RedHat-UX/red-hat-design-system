---
"@rhds/elements": major
---

`<rh-footer>`: added a light color scheme.

#### ⛔️ Breaking changes with `<rh-footer>`

Omitting `color-palette` now renders a light footer. Add `color-palette="darkest"` to keep a dark footer. 

If using a standalone `<rh-footer-universal>`, add `color-palette="darkest"` to keep a dark universal footer.

**Before**

```html
<rh-footer>
  <!-- ... -->
  <rh-footer-universal slot="universal">
    <!-- ... -->
  </rh-footer-universal>
</rh-footer>
```

**After**

```html
<rh-footer color-palette="darkest">
  <!-- ... -->
  <rh-footer-universal slot="universal">
    <!-- ... -->
  </rh-footer-universal>
</rh-footer>
```

**Optional, but recommended**

Slotted images that use `<img>` are not compatible with `light-dark()` CSS, to support user preference/switched light and dark schemes when a preset `color-palette` attribute is not present we suggest replacing the slotted `<img>` with a compatible inline `<svg>`.  For an example see the SVG from the [`<rh-footer>` slotted logo demo](https://ux.redhat.com/elements/footer/demos/#demo-slotted-logo).

```html
<!-- before: raster that only works on dark -->
<img alt="Red Hat" src="https://static.redhat.com/libs/redhat/brand-assets/2/corp/logo--on-dark.svg" />

<!-- after: inline SVG with light-dark() wordmark fill; copy from the `<rh-footer>` demos -->
<svg>…</svg>
```
