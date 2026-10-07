---
"@rhds/elements": major
---

`<rh-alert>`: removed the deprecated `note`, `default`, and `error` states. Use `info`, `neutral`, and `danger` instead.

Before:

```html
<rh-alert state="note">...</rh-alert>
<rh-alert state="default">...</rh-alert>
<rh-alert state="error">...</rh-alert>
```

After:

```html
<rh-alert state="info">...</rh-alert>
<rh-alert state="neutral">...</rh-alert>
<rh-alert state="danger">...</rh-alert>
```
