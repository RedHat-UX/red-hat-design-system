---
"@rhds/elements": minor
---

`<rh-alert>`: removed deprecated toast boolean attribute

  Before: 
  ```html
  <rh-alert toast>
    <h3 slot="header">Default</h3>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eleifend
      elit sed est egestas, a sollicitudin mauris tincidunt.
    </p>
  </rh-alert>
  ```

  After:
  ```html
  <rh-alert variant="toast">
    <h3 slot="header">Default</h3>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eleifend
      elit sed est egestas, a sollicitudin mauris tincidunt.
    </p>
  </rh-alert>
  ```