---
title: Link with icon
order: 60
layout: layouts/pages/basic.njk
hasToc: true
tags:
  - pattern
---

<link rel="stylesheet" href="{{ '/assets/packages/@rhds/elements/elements/rh-table/rh-table-lightdom.css' | url }}">
<link rel="stylesheet" href="{{ '/styles/samp.css' | url }}">


## Overview

Link with icon features an icon that adds context to the link itself. It’s positioned to the left or on top of a link, depending on orientation.


## Sample pattern

<uxdot-example width-adjustment="484px">
  <img src="{{ './link-with-icon.svg' | url }}" alt="Link with icon">
</uxdot-example>


{% repoStatus type="Pattern" %}


## Style

Link with icon is available in light and dark themes. It’s a grouping of a small icon near a link, similar to how a list item is a grouping of a bullet point near text. The icon chosen should represent what a user will get when they click on or tap the link. It acts as a functional addition instead of only visual.

<uxdot-example width-adjustment="484px">
  <img src="{{ './link-with-icon-style.svg' | url }}" alt="Link with icon specs">
</uxdot-example>


### Theme

<uxdot-example width-adjustment="484px">
  <img src="{{ './link-with-icon-theme-light.svg' | url }}" alt="Link with icon theme light">
</uxdot-example>

<uxdot-example color-palette="darkest" width-adjustment="484px">
  <img src="{{ './link-with-icon-theme-dark.svg' | url }}" alt="Link with icon theme dark">
</uxdot-example>


## Usage

Use link with icon to increase the visual interest of a link without using a call to action style. Link with icon can replace links that are used on their own, but not in a paragraph of text.


## Best practices

Don't increase the icon size because the link text size will appear smaller.

<uxdot-example width-adjustment="484px" danger>
  <img src="{{ './link-with-icon-best-practices.svg' | url }}" alt="Link with icon icon size issue">
</uxdot-example>


## Behavior

### Responsive design

Link with icon can be used on large and small screens. When the width of the link exceeds the width of its container, the text will break to two lines.

<uxdot-example width-adjustment="1000px" variant="full" alignment="left" no-border>
  <img src="{{ './link-with-icon-responsive.svg' | url }}" alt="Link with icon responsive desktop">
</uxdot-example>

<figure>
  <uxdot-example width-adjustment="360px" variant="full" alignment="left" no-border>
    <img src="{{ './link-with-icon-responsive-mobile.svg' | url }}" alt="Link with icon responsive mobile">
  </uxdot-example>
  <figcaption>Some text styles reduce in size on small screens. Learn more about typography on mobile</figcaption>
</figure>


### Alignment

The icon and the link are always vertically-aligned.

<uxdot-example width-adjustment="269px">
  <img src="{{ './link-with-icon-alignment-1.svg' | url }}" alt="Link with icon alignment">
</uxdot-example>

<uxdot-example width-adjustment="269px">
  <img src="{{ './link-with-icon-alignment-2.svg' | url }}" alt="Link with icon alignment">
</uxdot-example>


## Interaction states

The link has the same interaction states as a Link whereas the icon doesn't have any interaction states.


## Spacing

Link with icon uses [space tokens](/tokens/space/) to define spacing values between elements.

<uxdot-example width-adjustment="484px">
  <img src="{{ './link-with-icon-spacing.svg' | url }}" alt="Link with icon spacing">
</uxdot-example>

<rh-table>
{% spacerTokensTable 
  tokens="--rh-space-lg" %}
{% endspacerTokensTable %}
</rh-table>


{% include 'partials/component/feedback.html' %}
