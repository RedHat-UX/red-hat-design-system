---
title: Developers
order: 4
---

<link rel="stylesheet"
      data-helmet
      href="/assets/packages/@rhds/elements/elements/rh-pagination/rh-pagination-lightdom.css">
<link rel="stylesheet"
      data-helmet
      href="/assets/packages/@rhds/elements/elements/rh-tile/rh-tile-lightdom.css">
<link rel="stylesheet"
      data-helmet
      href="../color-palettes.css">

<script type="module" data-helmet>
  import '/assets/javascript/elements/uxdot-pattern.js';
  import '@rhds/elements/lib/elements/rh-context-demo/rh-context-demo.js';
  import '@rhds/elements/rh-accordion/rh-accordion.js';
  import '@rhds/elements/rh-audio-player/rh-audio-player.js';
  import '@rhds/elements/rh-blockquote/rh-blockquote.js';
  import '@rhds/elements/rh-button/rh-button.js';
  import '@rhds/elements/rh-card/rh-card.js';
  import '@rhds/elements/rh-cta/rh-cta.js';
  import '@rhds/elements/rh-pagination/rh-pagination.js';
  import '@rhds/elements/rh-tabs/rh-tabs.js';
  import '@rhds/elements/rh-tag/rh-tag.js';
  import '@rhds/elements/rh-tile/rh-tile.js';
</script>

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
