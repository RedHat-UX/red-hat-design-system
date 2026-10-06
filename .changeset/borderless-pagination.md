---
"@rhds/elements": major
---

`<rh-pagination>`: removed support for the deprecated `open` variant. Use `borderless` instead.

Before:

```html
<rh-pagination variant="open">
  <ol><!-- page links --></ol>
</rh-pagination>
```

After:

```html
<rh-pagination variant="borderless">
  <ol><!-- page links --></ol>
</rh-pagination>
```
