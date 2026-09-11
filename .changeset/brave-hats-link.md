---
"@rhds/elements": major
---

`<rh-navigation-primary>`: changed the `logo` slot to accept an inline SVG or `<img>` instead of an anchor wrapping the logo. Use the `logo-href` attribute to set the custom logo link destination.

This change does not affect implementations that already used the default logo and did not override the slot.

Before:

```html
<rh-navigation-primary>
  <a slot="logo" href="/">
    <img src="red-hat-logo.svg" alt="Red Hat">
  </a>
  <!-- ... -->
</rh-navigation-primary>
```

After:

```html
<rh-navigation-primary logo-href="/">
  <img slot="logo" src="red-hat-logo.svg" alt="Red Hat">
  <!-- ... -->
</rh-navigation-primary>
```
