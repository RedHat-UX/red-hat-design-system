---
title: Overview
heading: Tile
sidenavTitle: Tile
layout: layouts/pages/pattern.njk
hasToc: true
order: 120
tags:
  - pattern
  - tilePatterns
subnav:
  collection: tilePatterns
  order: 1
---

<link rel="stylesheet" data-helmet href="/assets/packages/@rhds/elements/elements/rh-table/rh-table-lightdom.css">
<link rel="stylesheet" data-helmet href="/assets/packages/@rhds/elements/elements/rh-tile/rh-tile-lightdom.css">
<link rel="stylesheet" data-helmet href="/styles/samp.css">
<script type="module" data-helmet>
  import '@rhds/elements/rh-tile/rh-tile.js';
  import '@rhds/elements/rh-tile/rh-tile-group.js';
  import '@rhds/elements/rh-cta/rh-cta.js';
  import '@rhds/elements/rh-surface/rh-surface.js';
  import '@rhds/elements/rh-code-block/rh-code-block.js';
</script>

<style data-helmet>
  .grid + rh-cta {
    margin-block-start: var(--rh-space-lg);
  }

  rh-tile {
    width: 320px;
  }

  rh-tile.accented-tile {
    position: relative;
    overflow: hidden;
    border-radius: var(--rh-border-radius-default);
  }

  rh-tile.accented-tile::before {
    content: '';
    position: absolute;
    z-index: 2;
    display: block;
    inset-block-start: 0;
    inset-inline: 0;
    border-block-start-color: var(--rh-color-brand-red);
    border-block-start-width: var--rh-border-width-lg;
    border-block-start-style: solid;
    pointer-events: none;
  }
</style>

## Overview

Tiles are flexible layouts with clickable and contained surfaces.

<rh-alert state="info">These Tile patterns document different design-approved 
  uses of the `<rh-tile>` element. Consult the [`<rh-tile>` element documentation][element]
  for more information on how to use the tile element.</rh-alert>

## Customizing tiles

Tiles act as both themeable containers and also respond to the color theme from
their themeable containers. 

Customize tiles by setting custom values for the element's color tokens. By 
setting the theme tokens for both `dark` and `light` color themes, you can theme 
an entire page or section.

Examples include:

 - [`--rh-color-border-interactive-on-light`](/tokens/color/#rh-color-border-interactive-on-light)
 - [`--rh-color-border-interactive-on-dark`](/tokens/color/#rh-color-border-interactive-on-dark)
 - [`--rh-color-interactive-primary-hover-on-light`](/tokens/color/#rh-color-interactive-primary-hover-on-light)
 - [`--rh-color-interactive-primary-hover-on-dark`](/tokens/color/#rh-color-interactive-primary-hover-on-dark)
 - [`--rh-color-text-primary-on-light`](/tokens/color/#rh-color-text-primary-on-light)
 - [`--rh-color-text-primary-on-dark`](/tokens/color/#rh-color-text-primary-on-dark)

For more information, please see the docs on [theming][theming] and
[`<rh-tile>` css custom properties][css-props].

{% uxdotPattern stacked=true %}{% include './patterns/custom-themes.html' %}{% enduxdotPattern %}

[element]: /elements/tile/
[css-props]: /elements/tile/code/#css-custom-properties
[theming]: /theming/
