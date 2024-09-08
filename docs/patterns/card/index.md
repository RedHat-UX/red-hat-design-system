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

<rh-alert state="info">

  These Card patterns document different design-approved uses of the `<rh-card>`
  element. [Consult the `<rh-card>` element documentation][element] for more
  information on how to use the card element.

</rh-alert>

## Customizing cards

To customize a card the design tokens must be altered. These design tokens are 
different depending on the context for the card (light or dark theme).

Examples include:

- [`--rh-color-surface-lightest`](/tokens/color/#rh-color-surface-lightest)
- [`--rh-color-border-subtle-on-light`](/tokens/border/#rh-color-border-subtle-on-light)
- [`--rh-color-text-primary-on-light`](/tokens/font/#rh-color-text-primary-on-light)

For more information, please see the [card css custom properties][css-props].

## Themes

Themes are expressed in terms of color palettes.

- `lightest`
- `lighter`
- `light`
- `dark`
- `darker`
- `darkest`

### Context theming

Cards will automatically react to the `color-palette` context provided by a parent element, like `<rh-surface>`.

{% include './patterns/themes.html' %}

### Explicit card theming

Cards can play an active role in theming by declaring a specific `color-palette`.

{% include './patterns/explicit-themes.html' %}

### Custom theming

When using design tokens to apply custom themes, it is important to ensure that the colors used meet [color contrast guidelines][color-contrast].

{% include './patterns/custom-themes.html' %}

{% include 'partials/component/feedback.html' %}

[element]: /elements/card
[css-props]: /elements/card/code/#css-custom-properties
[color-contrast]: /accessibility/design/#contrast
