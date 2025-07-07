---
title: Overview
heading: Tile
sidenavTitle: Tile
layout: layouts/pages/pattern.njk
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
  import '@uxdot/elements/uxdot-pattern.js';
  import '@rhds/elements/rh-alert/rh-alert.js';
</script>

## Overview

Tiles are flexible layouts with clickable and contained surfaces.

<rh-alert state="info">These Tile patterns document different design-approved 
  uses of the `<rh-tile>` element. Consult the [`<rh-tile>` element documentation][element]
  for more information on how to use the tile element.</rh-alert>

## Customizing tiles

Tiles act as both themable containers and also respond to the color theme from
their themable containers. 

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

<uxdot-pattern src="./patterns/custom-themes.html"
               target="custom-tiles">
  <h3 id="custom-tiles">Custom tiles</h3>
</uxdot-pattern>

[element]: /elements/tile/
[css-props]: /elements/tile/code/#css-custom-properties
[theming]: /theming/
