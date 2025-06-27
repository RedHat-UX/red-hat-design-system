---
"@rhds/elements": minor
---

`<rh-navigation-primary>`: added `logo-url` and `logo-text-hide-at` options for bi-modal default logo.

  - Default logo is now bi-modal auto adjusting text color to light or dark scheme.
  - `logo-url` sets the url for the logo defaulting to `/`.
  - `logo-text-hide-at` sets the breakpoint at which the logo text is hidden, breakpoints available 'sm' | 'md' | 'lg' | 'xl' | '2xl' defaulting to 'md' (992px)
  - If you are slotting in a logo these options will not take effect.

  ```html
    <rh-navigation-primary logo-url="/en" logo-text-hide-at="md">
      ...
    </rh-navigation-primary>
  ```