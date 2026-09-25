---
"@rhds/elements": major
---

`<rh-subnav>`: moved `:not(:defined)` styles to the optional lightdom shim.

Load both stylesheets to retain `:not(:defined)` styles and avoid cumulative layout shift before the component loads.

If the component is defined before its markup renders, as is common in single-page apps, the shim may not be necessary.

Before:

```html
<link rel="stylesheet" href="/path/to/rh-subnav/rh-subnav-lightdom.css">
```

After:

```html
<link rel="stylesheet" href="/path/to/rh-subnav/rh-subnav-lightdom.css">
<link rel="stylesheet" href="/path/to/rh-subnav/rh-subnav-lightdom-shim.css">
```
