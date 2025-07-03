---
"@rhds/elements": minor
---

`<rh-navigation-primary>`: added `logo-url` and `logo-text-hide-at` options for bi-modal default logo.

  - Default logo is now bi-modal auto adjusting text color to light or dark scheme.
  - `logo-href` sets the href for the `<a>` element wrapping the logo, defaults to `/`.
  - `logo-text-hide-at` sets the breakpoint at which the logo text is hidden, breakpoints available 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' defaulting to 'xl' (1440px)
  - If you are slotting in a logo these options will not take effect.

  ```html
    <rh-navigation-primary logo-href="/en" logo-text-hide-at="md">
      ...
    </rh-navigation-primary>
  ```