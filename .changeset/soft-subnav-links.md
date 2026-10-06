---
"@rhds/elements": major
---

`<rh-subnav>`: removed deprecated support for slotted `<a href>` links. Use `<rh-navigation-link>` elements instead.

Before:

```html
<rh-subnav>
  <a href="#" active>Servers</a>
</rh-subnav>
```

After:

```html
<rh-subnav>
  <rh-navigation-link href="#" current-page>Servers</rh-navigation-link>
</rh-subnav>
```
