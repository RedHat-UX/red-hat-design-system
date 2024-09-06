---
"@rhds/elements": minor
---

`<rh-subnav>`:
 - removed arrow-key keyboard navigation in favor of tab navigation.
 - add `accessible-label` attribute to explicitly label landmark.
 - corrects overflow icons

 ```
 <rh-subnav accessible-label="Customer service">
  <a href="#" active>Help</a>
  <a href="#">Contact Us</a>
  <a href="#">FAQ</a>
 </rh-subnav>
 ```
