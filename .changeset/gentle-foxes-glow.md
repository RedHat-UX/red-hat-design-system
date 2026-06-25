---
"@rhds/elements": minor
---

feat(footer): move social links and copyright to universal footer's new `tertiary` slot

Social links have moved from `slot="social-links"` in the header to
`slot="tertiary"` inside `<rh-footer-universal>`, wrapped in
`<rh-footer-links>`. Copyright has moved from `slot="links-secondary"`
to `slot="tertiary"`.

The previous slot pattern (`slot="social-links"` and copyright in
`slot="links-secondary"`) continues to work for backward compatibility.
Users should migrate to the new pattern at their convenience.

```html
<rh-footer-universal slot="universal">
  <!-- ...links-primary, links-secondary... -->
  <rh-footer-copyright slot="tertiary">&copy; 2026 Red Hat</rh-footer-copyright>
  <rh-footer-links slot="tertiary" role="list">
    <rh-footer-social-link icon="linkedin" href="..." accessible-label="LinkedIn"></rh-footer-social-link>
  </rh-footer-links>
</rh-footer-universal>
```
