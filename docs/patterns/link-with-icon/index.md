---
title: Link with icon
layout: layouts/pages/basic.njk
tags:
  - pattern
---

## Overview

Link with icon features an icon that adds context to the link itself. It’s positioned to the left or on top of a link, depending on orientation.

## Sample pattern

{% example palette="none",
           alt="Link with icon",
           src="./link-with-icon.svg" %}

{% repoStatus %}

## Style

Link with icon is available in light and dark themes. It’s a grouping of a small icon near a link, similar to how a list item is a grouping of a bullet point near text. The icon chosen should represent what a user will get when they click on or tap the link. It acts as a functional addition instead of only visual.

{% example palette="light",
           alt="Link with icon specs",
           src="./link-with-icon-style.svg" %}

### Theme

{% example palette="light",
           alt="Link with icon theme light",
           src="./link-with-icon-theme-light.svg" %}
  
{% example palette="darkest",
           alt="Link with icon theme dark",
           src="./link-with-icon-theme-dark.svg" %}

## Usage

Use link with icon to increase the visual interest of a link without using a call to action style. Link with icon can replace links that are used on their own, but not in a paragraph of text.

## Best practices

Don't increase the icon size because the link text size will appear smaller.

{% example palette="wrong",
           alt="Link with icon icon size issue",
           src="./link-with-icon-best-practices.svg" %}

## Behavior

### Responsive design

Link with icon can be used on large and small screens. When the width of the link exceeds the width of its container, the text will break to two lines.

{% example palette="none",
           alt="Link with icon responsive desktop",
           src="./link-with-icon-responsive.svg" %}

{% example palette="none",
           alt="Link with icon responsive mobile",
           src="./link-with-icon-responsive-mobile.svg" %}

Some text styles reduce in size on small screens. Learn more about typography on mobile
{.footnote}

### Alignment

The icon and the link are always vertically-aligned.

{% example palette="light",
           alt="Link with icon alignment",
           src="./link-with-icon-alignment-1.svg" %}

{% example palette="light",
           alt="Link with icon alignment",
           src="./link-with-icon-alignment-2.svg" %}

## Interaction states

The link has the same interaction states as a Link whereas the icon doesn't have any interaction states.

## Spacing

Link with icon uses [space tokens](/tokens/space/) to define spacing values between elements.

{% example palette="light",
           alt="Link with icon spacing",
           src="./link-with-icon-spacing.svg" %}

{% include 'partials/component/feedback.html' %}





