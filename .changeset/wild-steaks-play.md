---
"@rhds/elements": minor
---

✨ Added `<rh-switch>`

A switch toggles the state of a setting (between on and off). Switches and checkboxes can often be used interchangeably, but the switch provides a more explicit, visible representation on a setting.

html```
<rh-switch id="a" checked></rh-switch>
<label for="a">
  <span data-state="on">Message when on</span>
  <span data-state="off" hidden>Message when off</span>
</label>
```