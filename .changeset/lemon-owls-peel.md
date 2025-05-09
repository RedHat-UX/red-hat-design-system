---
"@rhds/elements": minor
---

`<rh-breadcrumb>`: added the `truncate` attribute.

When present, the middle breadcrumb items are hidden until the user interacts with them:

```html
<rh-breadcrumb truncate>
  <ol>
    <li><a href="#home">Home</a></li>
    <li><a href="#products">Products</a></li>
    <li><a href="#open-shift-aws">Red Hat OpenShift on AWS</a></li>
    <li><a href="#4">4</a></li>
    <li><a href="#introduction-to-rosa">Introduction to ROSA</a></li>
    <li><a href="#understanding-rosa" aria-current="page">Chapter 1. Understanding ROSA</a></li>
  </ol>
</rh-breadcrumb>
```
