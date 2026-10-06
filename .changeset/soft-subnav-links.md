---
"@rhds/elements": major
---

`<rh-subnav>`: no longer supports slotted `<a href>` elements; use `<rh-navigation-link>` elements for subnav links.

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
