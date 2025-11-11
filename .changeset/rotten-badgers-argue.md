---
"@rhds/elements": patch
---

`<rh-footer>`: remove `<footer>` element from shadowdom, set `role="contentinfo"` on host

`<rh-footer-universal>` also removes the `<footer>` element from its shadowdom and set's 
`role="contentinfo"` on the host if it's not already wrapped in a `<rh-footer>` or `<footer>` 
element.
