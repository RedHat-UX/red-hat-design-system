---
"@rhds/elements": major
---
`<rh-tabs>`: removed `--rh-tabs-border-color`. Use `--rh-color-border-subtle` instead.

#### Before:
```css
.my-tabs {
  --rh-tabs-border-color: cadetblue;
}
```

#### Before:
```css
.my-tabs {
  --rh-color-border-subtle: light-dark(cadetblue, darkslategray);
}
```
