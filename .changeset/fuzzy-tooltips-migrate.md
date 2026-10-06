---
"@rhds/elements": major
---

`<rh-tooltip>`: removed support for deprecated CSS custom properties. Use the current
properties instead.

Before:

```css
rh-tooltip {
  --rh-tooltip__arrow--Width: 8px;
  --rh-tooltip--MaxWidth: 20rem;
  --rh-tooltip__content--PaddingTop: 8px;
  --rh-tooltip__content--PaddingBottom: 8px;
  --rh-tooltip__content--PaddingLeft: 12px;
  --rh-tooltip__content--PaddingRight: 12px;
  --rh-tooltip__content--FontSize: 1rem;
  --rh-tooltip__content--Color: rebeccapurple;
  --rh-tooltip__content--BackgroundColor: lavender;
}
```

After:

```css
rh-tooltip {
  --rh-tooltip-arrow-size: 8px;
  --rh-tooltip-max-width: 20rem;
  --rh-tooltip-content-padding-block-start: 8px;
  --rh-tooltip-content-padding-block-end: 8px;
  --rh-tooltip-content-padding-inline-start: 12px;
  --rh-tooltip-content-padding-inline-end: 12px;
  --rh-tooltip-content-font-size: 1rem;
  --rh-tooltip-content-color: rebeccapurple;
  --rh-tooltip-content-background-color: lavender;
}
```
