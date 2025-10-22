---
"@rhds/elements": major
---

`<rh-subnav>`: replaced slotted anchor elements with `<rh-navigation-link>` elements for improved accessibility.


Before:

```html
<rh-subnav>
  <a href="#">Users</a>
  <a href="#">Containers</a>
  <a href="#">Databases</a>
  <a href="#" active>Servers</a>
  <a href="#">System</a>
  <a href="#">Network</a>
  <a href="#">Cloud</a>
</rh-subnav>
```

After:

```html
<rh-subnav>
  <rh-navigation-link href="#">Users</rh-navigation-link>
  <rh-navigation-link href="#">Containers</rh-navigation-link>
  <rh-navigation-link href="#">Databases</rh-navigation-link>
  <rh-navigation-link href="#" current-page>Servers</rh-navigation-link>
  <rh-navigation-link href="#">System</rh-navigation-link>
  <rh-navigation-link href="#">Network</rh-navigation-link>
  <rh-navigation-link href="#">Cloud</rh-navigation-link>
</rh-subnav>
```