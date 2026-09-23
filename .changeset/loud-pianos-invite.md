---
"@rhds/elements": minor
---

`<rh-footer-links>`: added `accessible-label` to provide an accessible name for link groups.
`<rh-footer>`: added `social-links-label`

If you slot social links in the `tertiary` slot, add `accessible-label` on
`<rh-footer-links role="list">` so the group has an accessible name. See
the [default demo](https://ux.redhat.com/elements/footer/demos/#demo-footer)
for example code.

Use `social-links-label` on `<rh-footer>` only for the [legacy
`slot="social-links"` pattern](https://ux.redhat.com/elements/footer/demos/#demo-legacy).
