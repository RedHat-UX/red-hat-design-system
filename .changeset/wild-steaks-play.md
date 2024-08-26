---
"@rhds/elements": minor
---

✨ Added `<rh-switch>`

A switch toggles the state of a setting (between on and off). Switches and checkboxes can often be used interchangeably, but the switch provides a more explicit, visible representation on a setting.

html```
<rh-switch id="switch-a"
           accessible-label="Switch A"
           checked>
  <span slot="message-on">Message when <strong>on</strong></span>
  <span slot="message-off">Message when <strong>off</strong></span>
</rh-switch>
```
