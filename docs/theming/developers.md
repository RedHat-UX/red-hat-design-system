---
title: Developers
order: 4
---

## Context Protocol

## Style Queries

Your page markup declares a custom surface:

```html
<div class="custom-surface dark">
  <rh-cta href="#">GO!</rh-cta>
</div>
```

And your document css sets the desired color context:

```css
.custom-surface {
  container: surface;
  & .dark { --rh-background-context: dark; }
  & .light { --rh-background-context: light; }
}
```

Internally / in shared CSS:

```css
@container style (--rh-context-background: dark) {
  --rh-color-text-primary: var(--rh-color-text-primary-on-dark)
}
```

## Art Direction

Art direction is the process of 

### Inline SVG

```html
<svg slot="header" width="80" height="80">
  <rect fill="var(--rh-color-border-interactive)"
        fill-opacity="0.1"
        stroke-dasharray="4"
        stroke-width="1"
        stroke="var(--rh-color-border-interactive)"
        width="80"
        height="80"/>
</svg>
```

### `<rh-picture>` <rh-tag icon="notification-fill">Planned</rh-tag>

```html
<rh-picture>
  <source srcset="../google-cloud-dark.svg" color-theme="dark"></source>
  <img src="../google-cloud.svg" alt="Logo for Red Hat partner Google Cloud">
<rh-picture>
```
