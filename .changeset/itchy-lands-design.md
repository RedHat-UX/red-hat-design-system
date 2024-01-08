---
"@rhds/elements": patch
---
`<rh-dialog>`: remove the dependency on `@patternfly/elements`.
*NOTE*: The `open`, `close`, and `cancel` events are no longer the same object constructor type as `<pf-modal>`, so `instanceof` checks may fail.
