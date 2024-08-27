---
"@rhds/elements": major
---

`<rh-footer>`: removed deprecated `<rh-global-footer>` element and deprecated `global` slot. Use `<rh-footer-universal>` element and `universal` slot.

Before:

```html
<rh-footer>
  <!-- ... -->
  <rh-global-footer slot="global">
    <!-- ... -->
  </rh-global-footer>
</rh-footer>
```

After:

```html
<rh-footer>
  <!-- ... -->
  <rh-footer-universal slot="universal">
    <!-- ... -->
  </rh-footer-universal>
</rh-footer>
```
