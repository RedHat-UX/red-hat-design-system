---
"@rhds/elements": patch
---

`<rh-avatar>`: removed non-existent `name` slot from the element manifest.
This doesn't change the element, only the documentation. Instead of `name`, use
the anonymous slot:

```html
<rh-avatar>
  <span>Title</span>
  <span slot="subtitle">Subtitle</span>
</rh-avatar>
```
