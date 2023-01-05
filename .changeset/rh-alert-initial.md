---
"@rhds/elements": minor
---

✨ Added `<rh-alert>`.

An alert displays auxiliary information on a website. An alert can have one of 
several states of severity.

```html
<rh-alert>
  <h3 slot="header">Default</h3>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eleifend
    elit sed est egestas, a sollicitudin mauris tincidunt.
  </p>
  <button slot="actions" data-action="dismiss">Dismiss</button>
  <button slot="actions" data-action="confirm">Confirm</button>
</rh-alert>
```
