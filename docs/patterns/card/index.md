---
title: Overview
heading: Card
sidenavTitle: Card
layout: layouts/pages/pattern.njk
hasToc: true
order: 20
tags:
  - pattern
  - cardPatterns
subnav:
  collection: cardPatterns
  order: 1
---

<script type="module" data-helmet>
  import '@rhds/elements/lib/elements/rh-context-picker/rh-context-picker.js';
  import '@rhds/elements/rh-card/rh-card.js';
  import '@rhds/elements/rh-cta/rh-cta.js';
  import '@rhds/elements/rh-surface/rh-surface.js';
  import '@rhds/elements/rh-avatar/rh-avatar.js';
  import '@rhds/elements/rh-accordion/rh-accordion.js';
</script>

<link rel="stylesheet" data-helmet href="/assets/packages/@rhds/elements/elements/rh-table/rh-table-lightdom.css">
<link rel="stylesheet" data-helmet href="/styles/samp.css">

## Overview

A card formats content in a small, contained space. It can be used to display a
preview of information or provide secondary content in relation to the content
it's near. Several cards can be used together to group related information.

<rh-alert state="info">These Card patterns document different design-approved 
  uses of the `<rh-card>` element. Consult the [`<rh-card>` element documentation][element]
  for more information on how to use the card element.</rh-alert>

## Customizing cards

Cards act as both themeable containers and also respond to the color theme from
their themeable containers. 

To customize a card the design tokens must be altered. These design tokens are 
different depending on the context for the card (light or dark theme).

Examples include:

- [`--rh-color-surface-lightest`][lightest]
- [`--rh-color-border-subtle-on-light`][border-subtle]
- [`--rh-color-text-primary-on-light`][text-primary]

For more information, please see the docs on [theming][theming] and
[`<rh-card>` css custom properties][css-props].

### Color Palettes

Cards will automatically react to the `color-palette` context provided by a 
parent element, like `<rh-surface>`.

<div id="card-themes" class="grid sm-two-columns">
  <uxdot-pattern allow="light, lighter, lightest"
                 src="./patterns/themes.html"></uxdot-pattern>
  <uxdot-pattern allow="dark, darker, darkest"
                 src="./patterns/themes.html"></uxdot-pattern>
</div>

### Explicit card theming

Cards can play an active role in theming by declaring a specific `color-palette`.

<uxdot-pattern src="./patterns/explicit-themes.html">
</uxdot-pattern>

### Custom theming

When using design tokens to apply custom themes, it is important to ensure that 
the colors used meet [color contrast guidelines][color-contrast].

<uxdot-pattern src="./patterns/custom-themes.html">
</uxdot-pattern>

{% include 'partials/component/feedback.html' %}

[element]: /elements/card
[css-props]: /elements/card/code/#css-custom-properties
[color-contrast]: /accessibility/design/#contrast
[theming]: /theming/
[lightest]: /tokens/color/#rh-color-surface-lightest
[border-subtle]: /tokens/border/#rh-color-border-subtle-on-light
[text-primary]: /tokens/font/#rh-color-text-primary-on-light
