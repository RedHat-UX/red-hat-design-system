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

Slotted `logo--on-dark.svg` images still work on a dark footer. To be light footer friendly, replace the slotted `<img>` with an inline SVG whose wordmark fill uses `light-dark()`. Copy the SVG from our [`<rh-footer>` demos](https://ux.redhat.com/elements/footer/demos/#demo-footer).

```html
<!-- before: raster that only works on dark -->
<img alt="Red Hat" src="https://static.redhat.com/libs/redhat/brand-assets/2/corp/logo--on-dark.svg" />

<!-- after: inline SVG with light-dark() wordmark fill; copy from the `<rh-footer>` demos -->
<svg>…</svg>
```
