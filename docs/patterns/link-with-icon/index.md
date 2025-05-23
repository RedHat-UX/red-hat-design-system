---
title: Link with icon
order: 70
layout: layouts/pages/has-toc.njk
tags:
  - pattern
---

<link rel="stylesheet" data-helmet href="/assets/packages/@rhds/elements/elements/rh-table/rh-table-lightdom.css">
<link rel="stylesheet" data-helmet href="/styles/samp.css">

## Overview

Link with icon features an icon that adds context to the link itself. It’s
positioned to the left or on top of a link, depending on orientation.

## Sample pattern

<uxdot-example width-adjustment="484px">
  <img alt="Link with icon"
       src="./link-with-icon.svg"
       width="484"
       height="35">
</uxdot-example>

## Style

Link with icon is available in light and dark themes. It’s a grouping of a small
icon near a link, similar to how a list item is a grouping of a bullet point
near text. The icon chosen should represent what a user will get when they click
on or tap the link. It acts as a functional addition instead of only visual.

<uxdot-example width-adjustment="484px">
  <img alt="Link with icon specs"
       src="./link-with-icon-style.svg"
       width="484"
       height="65">
</uxdot-example>

### Color scheme
<a id="theme"></a>

<uxdot-example width-adjustment="484px">
  <img alt="Link with icon theme light"
       src="./link-with-icon-theme-light.svg"
       width="484"
       height="145">
</uxdot-example>

<uxdot-example color-palette="darkest" width-adjustment="484px">
  <img alt="Link with icon theme dark"
       src="./link-with-icon-theme-dark.svg"
       width="484"
       height="145">
</uxdot-example>

## Usage

Use link with icon to increase the visual interest of a link without using a
call to action style. Link with icon can replace links that are used on their
own, but not in a paragraph of text.

## Best practices

Don't increase the icon size because the link text size will appear smaller.

<uxdot-example width-adjustment="484px" danger>
  <img alt="Link with icon icon size issue"
       src="./link-with-icon-best-practices.svg"
       width="516"
       height="67">
</uxdot-example>

## Behavior

### Responsive design

Link with icon can be used on large and small screens. When the width of the
link exceeds the width of its container, the text will break to two lines.

<uxdot-example width-adjustment="1000px" variant="full" alignment="left" no-border>
  <img alt="Link with icon responsive desktop"
       src="./link-with-icon-responsive.svg"
       width="1000"
       height="273">
</uxdot-example>

<figure>
  <uxdot-example width-adjustment="360px" variant="full" alignment="left" no-border>
    <img alt="Link with icon responsive mobile"
         src="./link-with-icon-responsive-mobile.svg"
         width="360"
         height="640">
  </uxdot-example>
  <figcaption>Some text styles reduce in size on small screens. Learn more about typography on mobile</figcaption>
</figure>

### Alignment

The icon and the link are always vertically-aligned.

<uxdot-example width-adjustment="269px">
  <img alt="Link with icon alignment"
       src="./link-with-icon-alignment-1.svg"
       width="269"
       height="35">
</uxdot-example>

<uxdot-example width-adjustment="269px">
  <img alt="Link with icon alignment"
       src="./link-with-icon-alignment-2.svg"
       width="270"
       height="54">
</uxdot-example>

## Interaction states

The link has the same interaction states as a Link whereas the icon doesn't have
any interaction states.

## Spacing

Link with icon uses [space tokens](/tokens/space/) to define spacing values
between elements.

<uxdot-example width-adjustment="484px">
  <img alt="Link with icon spacing"
       src="./link-with-icon-spacing.svg"
       width="484"
       height="231">
</uxdot-example>

<uxdot-spacer-tokens-table tokens="lg"></uxdot-spacer-tokens-table>

{% renderFile './docs/_includes/partials/component/feedback.11ty.ts' %}
