---
"@rhds/elements": minor
---

`<rh-stat>`: size text from the stat's width, and deprecate `is-mobile`.

Statistic, title, and body text use the compact sizes when the stat is under 768px wide. Remove `is-mobile`. To force those sizes on a wider stat, limit the width in CSS. The attribute still forces those sizes until a future release removes it.

Before:

```html
<rh-stat is-mobile>
  <span slot="statistic">40%</span>
  <p>Faster builds</p>
</rh-stat>
```

After:

```css
rh-stat {
  max-inline-size: 767px;
}
```

```html
<rh-stat>
  <span slot="statistic">40%</span>
  <p>Faster builds</p>
</rh-stat>
```
