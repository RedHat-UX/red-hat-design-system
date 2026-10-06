---
"@rhds/elements": major
---

`<rh-button>`: removed the deprecated `label` attribute. Use `accessible-label` to set the button's accessible name.

Before:

```html
<rh-button icon="search" label="Search"></rh-button>
```

After:

```html
<rh-button icon="search" accessible-label="Search"></rh-button>
```
