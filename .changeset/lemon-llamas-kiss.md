---
"@rhds/elements": minor
---

`rh-card`: `header` slot now displays items vertically instead of stacked, allowing for more than one item to display in the header.

Example:

```html
<rh-card>
  <img slot="header" src="kitten-400x250.jpeg"></img>
  <h2 slot="header">Headline, sm</h2>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
     Nullam eleifend elit sed est egestas, a sollicitudin mauris
     tincidunt. Pellentesque vel dapibus risus. Nullam aliquam
     felis orci, eget cursus mi lacinia quis. Vivamus at felis sem.</p>
  <rh-cta priority="primary" slot="footer">
    <a href="#">Call to action</a>
  </rh-cta>
</rh-card>
```
