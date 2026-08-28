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
