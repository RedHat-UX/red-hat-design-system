---
title: Card
layout: layout-basic.njk
tags:
  - pattern
---

<script type="module">
  import '@rhds/elements/rh-avatar/rh-avatar.js';
  import '@rhds/elements/rh-card/rh-card.js';
  import '@rhds/elements/rh-cta/rh-cta.js';
  import '@rhds/elements/rh-surface/rh-surface.js';

  import '@rhds/elements/lib/elements/rh-context-picker/rh-context-picker.js';
</script>

## Overview

A card formats content in a small, contained space. It can be used to display a 
preview of information or provide secondary content in relation to the content 
it's near. Several cards can be used together to group related information.

{% alert state="info" %}
  These Card patterns document different design-approved uses of the `<rh-card>`
  element. [Consult the `<rh-card>` element documentation][element] for more
  information on how to use the card element.
{% endalert %}

## Asset
Use to display that an asset can be downloaded. An icon and label group or 
text may be used to describe the asset.

{% include './patterns/asset.html' %}

## Image

Use to add an image to the basic style above the text.
Secondary and Default calls to action may be used.

{% include './patterns/image.html' %}

## List
Use to display a short amount of content using various list styles. 
Secondary and Default calls to action may be used.


{% include './patterns/list.html' %}

## Data
Use to display quick facts or short data points under a label. A Secondary 
call to action may be used or not.

## Logo
Use to display a customer logo in a variety of arrangements. A call to 
action is required, otherwise use a logo wall.

## Bar

Use to add a small icon and a label group to the header section. A larger icon
or a logo may be used.

Alternative title bar styles can be achieved by selecting [card's `header` CSS
Shadow Part](/elements/card/code/#parts).

{% include './patterns/bar.html' %}

## Icon

Use to add an icon to the basic style above the text. Secondary and Default 
calls to action may be used.

## Quote

Use to display a short quote with attribution text. Logos, images, and a 
Secondary call to action may be used or not.

## Avatars

Use to highlight a group of people who engage in an event. A label
should be included, but including text is optional.

Use the [`<rh-avatar>`](/elements/avatar/) element to element to present
the list of users.

{% include './patterns/avatars.html' %}

## Video

Use to trigger a video that will play in a [Modal dialog](/elements/dialog).
Different layout configurations may be used.

## Pricing

Use to outline the pricing and benefits of something. Elements may be 
removed or rearranged depending on content needs.

## Logo slider

Use to display more content about a company when expanded on hover or tap. A 
title and text should be included.

## Name slider

Use to display more content about a person when the tray expands. A title 
and text should be included.

## Custom Theming

To customize a card the design tokens must be altered. These design tokens are 
different depending on the context for the card (light or dark theme).

Examples include:

- [`--rh-color-surface-lightest`](/tokens/color/#rh-color-surface-lightest)
- [`--rh-color-border-subtle-on-light`](/tokens/border/#rh-color-border-subtle-on-light)
- [`--rh-color-text-primary-on-light`](/tokens/font/#rh-color-text-primary-on-light)

For more information, please see the [card css custom properties][css-props].

### Custom themes

Themes are expressed in terms of color palettes.

{% include './patterns/themes.html' %}

{% include 'feedback.html' %}

element to present the list of users


[element]: /elements/card
[css-props]: /elements/card/code/#css-custom-properties
