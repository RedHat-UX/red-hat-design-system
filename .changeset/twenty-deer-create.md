---
"@rhds/elements": major
---

Updating @rhds/icons to version 2.0

#### ⛔️ Breaking changes with `<rh-icon>`

Removed `auto-light-dark-mode-fill` UI icon. Please use `auto-light-dark-mode` instead.

  **Before**

  ```html
  <rh-icon set="ui" icon="auto-light-dark-mode-fill"></rh-icon>
  ```

  **After**

  ```html
  <rh-icon set="ui" icon="auto-light-dark-mode"></rh-icon>
  ```

  #### ⚠️ Potentially breaking changes with `<rh-icon>`

  ##### ✨ AI Experiences

  The `new` and `new-fill` UI icons have been updated and are no longer using the "sparkle" metaphor. Therefore, this may potentially break implementations and/or uses of `new` or `new-fill` to symbolize AI experiences.

  Where `new` or `new-fill` are used to symbolize AI experiences, please use one of our new AI Experience icon instead:

  - ai-experience
  - ai-experience-fill

  **Before**

  ```html
  <rh-icon set="ui" icon="new"></rh-icon>
  <rh-icon set="ui" icon="new-fill"></rh-icon>
  ```

  **After**

  ```html
  <rh-icon set="ui" icon="ai-experience"></rh-icon>
  <rh-icon set="ui" icon="ai-experience-fill"></rh-icon>
  ```

Please see [Red Hat Icons version 2.0 release notes](https://github.com/RedHat-UX/red-hat-icons/releases/tag/v2.0.0) for more information about the @rhds/icons version 2.0 update.
