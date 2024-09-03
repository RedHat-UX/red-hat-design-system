---
"@rhds/elements": minor
---

`<rh-subnav>`:
 - removed Roving Tabindex keyboard navigation in favor of tab based navigation.
 - add `accessible-label` attribute to explicitly label landmark.

 ```
 <rh-subnav accessible-label="Customer service">
  <a href="#" active>Help</a>
  <a href="#">Contact Us</a>
  <a href="#">FAQ</a>
 </rh-subnav>
 ```
