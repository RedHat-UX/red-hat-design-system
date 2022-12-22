---
"@rhds/elements": patch
---

`<rh-stat>`: fixed several bugs
  - **BREAKING**: removed `@pfelement` decorator
  - **BREAKING**: removed `is-mobile` attribute
  - **BREAKING**: removed `description` slot, replace with anonymous slot
  - replaced internal `MatchMediaController` with `ScreenSizeController`
  - documented slots and css properties
  - hid empty slots
  - made `updateIcons` method private, and refactor it to run on slot
    change and affect only the icon slotted into `icon`
  - initialized properties in class field initializers
