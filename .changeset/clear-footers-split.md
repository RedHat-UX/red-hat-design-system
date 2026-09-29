---
"@rhds/elements": major
---

`<rh-footer>`: split light DOM CSS so `<rh-footer-universal>` loads its own stylesheet.

`<rh-footer>` must load both stylesheets. `<rh-footer-universal>` used on its own loads only the universal footer's lightdom CSS.

Before:

```html
<link rel="stylesheet" href="/path/to/rh-footer/rh-footer-lightdom.css">
```

After, for `<rh-footer>`:

```html
<link rel="stylesheet" href="/path/to/rh-footer/rh-footer-lightdom.css">
<link rel="stylesheet" href="/path/to/rh-footer/rh-footer-universal-lightdom.css">
```

After, for `<rh-footer-universal>` alone:

```html
<link rel="stylesheet" href="/path/to/rh-footer/rh-footer-universal-lightdom.css">
```
