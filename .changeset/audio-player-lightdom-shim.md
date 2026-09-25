---
"@rhds/elements": major
---

`<rh-audio-player>`: moved `:not(:defined)` styles to the optional lightdom shim.

Load both stylesheets to retain `:not(:defined)` styles and avoid cumulative layout shift before the component loads.

If the component is defined before its markup renders, as is common in single-page apps, the shim may not be necessary.

Before:

```html
<link rel="stylesheet" href="/path/to/rh-audio-player/rh-audio-player-lightdom.css">
```

After:

```html
<link rel="stylesheet" href="/path/to/rh-audio-player/rh-audio-player-lightdom.css">
<link rel="stylesheet" href="/path/to/rh-audio-player/rh-audio-player-lightdom-shim.css">
```
