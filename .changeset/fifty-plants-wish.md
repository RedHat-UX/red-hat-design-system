---
"@rhds/elements": minor
---

`<rh-navigation-primary>`: unified navigation redesign with sub-domain support and collapsible links menu

Redesigned the primary navigation to match the unified nav specification: removed pill-shaped nav buttons and gradient borders, reduced padding between items, and removed icon button labels. Secondary links now collapse into a bento-box toggle on narrow viewports via a new collapsible links menu. Added a sub-domain variation via `site-name` and `site-href` attributes that displays a sub-domain title alongside the Red Hat logo lockup, including a hat-tip hover animation that tilts the Red Hat fedora with `prefers-reduced-motion` respected. Added `logo-href` to customize the logo link destination and `mobile-links-toggle-label` for non-English locales. Improved keyboard navigation with Escape and Tab-out support for the links menu, and corrected ARIA role handling during SSR hydration.

```html
<rh-navigation-primary site-name="Customer Portal"
                       site-href="https://subdomain.redhat.com"
                       logo-href="https://www.redhat.com/en">
  ...
</rh-navigation-primary>
```