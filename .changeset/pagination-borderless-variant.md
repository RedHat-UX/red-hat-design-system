---
"@rhds/elements": minor
---

✨ `<rh-pagination>`: add borderless variant and deprecate open variant

Add support for `variant="borderless"` as new preferred API for transparent pagination styles. The "borderless" terminology is more descriptive and reserves "open" for disclosure/details elements per native browser conventions.

```html
<rh-pagination variant="borderless"></rh-pagination>
```