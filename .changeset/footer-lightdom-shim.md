---
"@rhds/elements": major
---

`<rh-footer>` and `<rh-footer-universal>`: moved `:not(:defined)` styles to their optional lightdom shims.

Load the corresponding shims alongside the lightdom stylesheets to retain `:not(:defined)` styles and avoid cumulative layout shift before the components load.

If the component is defined before its markup renders, as is common in single-page apps, the shim may not be necessary.

Before:

```html
<link rel="stylesheet" href="/path/to/rh-footer/rh-footer-lightdom.css">
<link rel="stylesheet" href="/path/to/rh-footer/rh-footer-universal-lightdom.css">
```

After:

```html
<link rel="stylesheet" href="/path/to/rh-footer/rh-footer-lightdom.css">
<link rel="stylesheet" href="/path/to/rh-footer/rh-footer-lightdom-shim.css">
<link rel="stylesheet" href="/path/to/rh-footer/rh-footer-universal-lightdom.css">
<link rel="stylesheet" href="/path/to/rh-footer/rh-footer-universal-lightdom-shim.css">
```

When using `<rh-footer-universal>` alone, load only its lightdom stylesheet and optional shim:

```html
<link rel="stylesheet" href="/path/to/rh-footer/rh-footer-universal-lightdom.css">
<link rel="stylesheet" href="/path/to/rh-footer/rh-footer-universal-lightdom-shim.css">
```
