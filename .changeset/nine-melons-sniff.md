---
"@rhds/elements": minor
---

Added `rh-context-provider` component, which is meant to be used internally within rh-elements shadow templates to override colour context.
In `rh-dialog`, fix the colour context overrides for slotted content. See https://github.com/patternfly/patternfly-elements/pull/2036#issuecomment-1134460631
In `rh-dialog`, changed the attribute `variant="video"` to `type="video"`, because `<pfe-modal>` uses variant for width.
