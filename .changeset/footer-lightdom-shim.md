---
"@rhds/elements": major
---

`<rh-footer>` and `<rh-footer-universal>`: moved `:not(:defined)` styles to the optional `rh-footer-lightdom-undefined.css` and `rh-footer-universal-lightdom-undefined.css` stylesheets.

Load the corresponding undefined stylesheets alongside the lightdom stylesheets to retain `:not(:defined)` styles and avoid cumulative layout shift before the components load.

If the component is defined before its markup renders, as is common in single-page apps, or is server-side rendered using Declarative Shadow DOM, the stylesheet may not be necessary.

Before:

```html
<link rel="stylesheet" href="/path/to/rh-footer/rh-footer-lightdom.css">
<link rel="stylesheet" href="/path/to/rh-footer/rh-footer-universal-lightdom.css">
```

After:

```html
<link rel="stylesheet" href="/path/to/rh-footer/rh-footer-lightdom.css">
<link rel="stylesheet" href="/path/to/rh-footer/rh-footer-lightdom-undefined.css">
<link rel="stylesheet" href="/path/to/rh-footer/rh-footer-universal-lightdom.css">
<link rel="stylesheet" href="/path/to/rh-footer/rh-footer-universal-lightdom-undefined.css">
```

When using `<rh-footer-universal>` alone, load only its lightdom stylesheet and optional undefined stylesheet:

```html
<link rel="stylesheet" href="/path/to/rh-footer/rh-footer-universal-lightdom.css">
<link rel="stylesheet" href="/path/to/rh-footer/rh-footer-universal-lightdom-undefined.css">
```
