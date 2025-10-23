---
"@rhds/elements": minor
---

`<rh-pagination>`: deprecate `variant="open"` in favor of `variant="borderless"`.

Before:
```html
<rh-pagination variant="open">
  ...
</rh-pagination>
```

After: 
```html
<rh-pagination variant="borderless">
  ...
</rh-pagination>
```

NOTE: Even though deprecated, `variant="open"` will continue to work until the next major release.