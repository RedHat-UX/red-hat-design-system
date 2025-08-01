---
"@rhds/elements": minor
---

✨ Added `<rh-progress-stepper>`

Progress stepper communicates how many steps are required to complete a process.

```html
<rh-progress-stepper role="list" orientation="horizontal">
  <rh-progress-step state="complete" role="listitem">
    Complete Step
    <span slot="description">This step has been completed successfully</span>
  </rh-progress-step>

  <rh-progress-step state="active" role="listitem">
    Active Step
    <span slot="description">Currently working on this step</span>
  </rh-progress-step>

  <rh-progress-step role="listitem" state="inactive">
    Inactive Step
    <span slot="description">This step is not yet started</span>
  </rh-progress-step>
</rh-progress-stepper>
```
