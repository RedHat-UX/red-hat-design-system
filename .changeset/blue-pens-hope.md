---
"@rhds/elements": patch
---

Changes to `<rh-stat>`:
  - **BREAKING**: remove `@pfelement` decorator
  - **BREAKING**: remove `is-mobile` attribute
  - **BREAKING**: remove `description` slot, replace with anonymous slot
  - replace internal `MatchMediaController` with `ScreenSizeController`
  - document slots and css properties
  - hide empty slots
  - make `updateIcons` method private, and refactor it to run on slot
    change and affect only the icon slotted into `icon`
  - initialize properties in class field initializers
