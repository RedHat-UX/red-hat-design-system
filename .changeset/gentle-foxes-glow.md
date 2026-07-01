---
"@rhds/elements": minor
---

`<rh-footer-universal>`: added `tertiary` slot for social links and copyright. The previous slot pattern continues to work for backward compatibility.

### Migration

1. Move `<rh-footer-social-link>` elements from `slot="social-links"` on `<rh-footer>` into a `<rh-footer-links slot="tertiary">` inside `<rh-footer-universal>`.
2. Move `<rh-footer-copyright>` from `slot="links-secondary"` to `slot="tertiary"` inside `<rh-footer-universal>`.

```html
<rh-footer-universal slot="universal">
  <!-- ...links-primary, links-secondary... -->
  <rh-footer-copyright slot="tertiary">&copy; 2026 Red Hat</rh-footer-copyright>
  <rh-footer-links slot="tertiary" role="list">
    <rh-footer-social-link icon="linkedin" href="..." accessible-label="LinkedIn"></rh-footer-social-link>
  </rh-footer-links>
</rh-footer-universal>
```
