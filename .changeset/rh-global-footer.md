---
"@rhds/elements": major
---

Adds `<rh-global-footer>` standalone component

Global footer only

```html
<rh-global-footer>
  ...
</rh-global-footer>
```

Usage in <rh-footer>

```html
<rh-footer>
  ...
  <rh-global-footer slot="global">...</rh-global-footer>
</rh-footer>
```

Adds font-size initial and em values instead of px values for a11y.
Allow user stylesheet to increase and decrease font-size.

https://github.com/RedHat-UX/red-hat-design-system/issues/312

Fixes double border on mobile.

https://github.com/RedHat-UX/red-hat-design-system/issues/392

Removes `is-mobile` attribute
