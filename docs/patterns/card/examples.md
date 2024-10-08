---
title: Examples
heading: Card
sidenavTitle: Card
layout: layouts/pages/pattern.njk
hasToc: true
order: 20
tags:
  - cardPatterns
subnav:
  collection: cardPatterns
  order: 3
---

<script type="module" data-helmet>
  import '@rhds/elements/lib/elements/rh-context-picker/rh-context-picker.js';
  import '@rhds/elements/rh-card/rh-card.js';
  import '@rhds/elements/rh-cta/rh-cta.js';
  import '@rhds/elements/rh-surface/rh-surface.js';
  import '@rhds/elements/rh-avatar/rh-avatar.js';
  import '@rhds/elements/rh-accordion/rh-accordion.js';
  import '@rhds/elements/rh-blockquote/rh-blockquote.js';
</script>

<link rel="stylesheet" data-helmet href="/assets/packages/@rhds/elements/elements/rh-table/rh-table-lightdom.css">
<link rel="stylesheet" data-helmet href="/styles/samp.css">

<style data-helmet>
  rh-card {
    display: block;
    max-width: 360px;
  }

  [color-palette^="light"] :is(a):link {
    color: var(--rh-color-interactive-blue-darker, #0066cc);
  }

  [color-palette^="light"] :is(a):hover {
    color: var(--rh-color-interactive-blue-darkest, #003366);
  }

  [color-palette^="dark"] :is(a):link {
    color: var(--rh-color-interactive-blue-lighter, #92c5f9);
  }

  [color-palette^="dark"] :is(a):hover {
    color: var(--rh-color-interactive-blue-lightest, #b9dafc);
  }
</style>

## Asset cards
Use to display that an asset can be downloaded. An icon and label group or 
text may be used to describe the asset.

### Text and CTA

<uxdot-pattern src="./patterns/asset-text-and-cta.html">
</uxdot-pattern>


### Title and Link
<uxdot-pattern src="./patterns/asset-title-and-link.html">
</uxdot-pattern>

### Title and Link - Top
<uxdot-pattern src="./patterns/asset-title-and-link-top.html">
</uxdot-pattern>

## Avatars card

Use to highlight a group of people who engage in an event. A label
should be included, but including text is optional.

Use the [`<rh-avatar>`](/elements/avatar/) element to element to present
the list of users.

<uxdot-pattern src="./patterns/avatars.html">
</uxdot-pattern>

## Fast facts card
Use to display quick facts or short data points under a label. A Secondary 
call to action may be used or not.

<uxdot-pattern src="./patterns/fast-facts.html">
</uxdot-pattern>

## Icon card

Use to add an icon to the basic style above the text. Secondary and Default 
calls to action may be used.

<uxdot-pattern src="./patterns/icon.html">
</uxdot-pattern>

## Image card

Use to add an image to the basic style above the text.
Secondary and Default calls to action may be used.

<uxdot-pattern src="./patterns/image.html">
</uxdot-pattern>

## List cards
Use to display a short amount of content using various list styles. 
Secondary and Default calls to action may be used.

### Flat list
<uxdot-pattern src="./patterns/list-flat.html">
</uxdot-pattern>

### List with dividers
<uxdot-pattern src="./patterns/list-with-dividers.html">
</uxdot-pattern>

### Ordered list

<uxdot-pattern src="./patterns/ordered-list.html">
</uxdot-pattern>

### Unordered list

<uxdot-pattern src="./patterns/unordered-list.html">
</uxdot-pattern>

## Logo cards
Use to display a customer logo in a variety of arrangements. A call to 
action is required, otherwise use a logo wall.

### CTA only
<uxdot-pattern src="./patterns/logo-cta.html">
</uxdot-pattern>

### Text and CTA
<uxdot-pattern src="./patterns/logo-text-and-cta.html">
</uxdot-pattern>

## Title bar card

Use to add a small icon and a label group to the header section. A larger icon
or a logo may be used.

Alternative title bar styles can be achieved by selecting [card's `header` CSS
Shadow Part](/elements/card/code/#parts).

<uxdot-pattern src="./patterns/title-bar.html">
</uxdot-pattern>

## Quote cards

Use to display a short quote with attribution text. Logos, images, and a 
Secondary call to action may be used or not.

### Basic
<uxdot-pattern src="./patterns/quote.html">
</uxdot-pattern>

### Logo and quote
<uxdot-pattern src="./patterns/logo-and-quote.html">
</uxdot-pattern>

{% include 'partials/component/feedback.html' %}

[element]: /elements/card
[css-props]: /elements/card/code/#css-custom-properties
