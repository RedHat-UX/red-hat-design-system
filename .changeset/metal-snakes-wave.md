---
"@rhds/elements": minor
---

✨ Added `<rh-breadcrumb>`.

A breadcrumb navigation is a secondary navigation element consisting of a list of links to the parent pages of the current page in hierarchical order. It helps users find their place within a website or web application.

```html
<rh-breadcrumb>
  <ol>
    <li><a href="../../../..">Home</a></li>
    <li><a href="../../../">About</a></li>
    <li><a href="#" aria-current="page">Our Team</a></li>
  </ol>
</rh-breadcrumb>
```
