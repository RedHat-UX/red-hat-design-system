---
"@rhds/elements": minor
---

`<rh-button>`: deprecate `label` in favor of `accessible-label`.

BEFORE:

```html
<rh-button label="Search"></rh-button>
```

AFTER:

```html
<rh-button accessible-label="Search"></rh-button>
```

`label` will continue to function until the next major release.
