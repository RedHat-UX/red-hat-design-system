---
"@rhds/elements": major
---

`<rh-badge>`: removed deprecated `state` aliases (`moderate`, `important`, `critical`, and `note`) and their CSS selectors. Use `warning`, `caution`, `danger`, and `info`, respectively. Unsupported state values continue to normalize to `neutral`.

Before:

```html
<rh-badge state="moderate">50</rh-badge>
<rh-badge state="important">50</rh-badge>
<rh-badge state="critical">50</rh-badge>
<rh-badge state="note">50</rh-badge>
```

After:

```html
<rh-badge state="warning">50</rh-badge>
<rh-badge state="caution">50</rh-badge>
<rh-badge state="danger">50</rh-badge>
<rh-badge state="info">50</rh-badge>
```
