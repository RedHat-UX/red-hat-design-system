---
"@rhds/elements": minor
---

`<rh-footer-links>`: added `accessible-label` to provide an accessible name for link groups.
`<rh-footer>`: added `social-links-label`

For social links slotted into `tertiary`, set `accessible-label` on `<rh-footer-links role="list">`. See the [default demo](https://ux.redhat.com/elements/footer/demos/#demo-footer) for an example.

For the legacy `slot="social-links"` pattern, `social-links-label` on `<rh-footer>` names the list. It defaults to "Red Hat social media links"; customize it only when the accounts are not corporate Red Hat.