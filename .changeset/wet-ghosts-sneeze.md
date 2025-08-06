---
"@rhds/elements": minor
---

✨ Added `<rh-progress-stepper>`

Progress stepper communicates how many steps are required to complete a process.

```html
<rh-progress-stepper orientation="horizontal">
  <rh-progress-step state="complete"
                    description="This step has been completed successfully">
    Complete Step
  </rh-progress-step>

  <rh-progress-step state="active"
                    description="Currently working on this step">
    Active Step
  </rh-progress-step>

  <rh-progress-step state="inactive">
    Inactive Step
    <span slot="description">
      This step is <strong>not yet started</strong>
    </span>
  </rh-progress-step>
</rh-progress-stepper>
```
