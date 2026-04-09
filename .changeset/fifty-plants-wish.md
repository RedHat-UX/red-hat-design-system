---
"@rhds/elements": minor
---

`<rh-navigation-primary>`: unified navigation design with sub-domain support and collapsible links menu

Added `sub-domain` attribute and slot for displaying sub-domain text alongside the logo lockup. Added `logo-href` attribute to customize the logo link destination. Added `mobile-links-toggle-label` attribute for translatable links menu toggle text. Improved accessibility and keyboard navigation.

```html
<rh-navigation-primary sub-domain logo-href="https://www.redhat.com/en">
  <a slot="sub-domain" href="https://subdomain.redhat.com">Sub Domain</a>
  ...
</rh-navigation-primary>
```