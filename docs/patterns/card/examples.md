---
title: Examples
heading: Card
sidenavTitle: Card
layout: layouts/pages/pattern.njk
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
{% uxdotPattern %}{% include './patterns/asset-text-and-cta.html' %}{% enduxdotPattern %}

### Title and Link
{% uxdotPattern %}{% include './patterns/asset-title-and-link.html' %}{% enduxdotPattern %}

### Title and Link - Top
{% uxdotPattern %}{% include './patterns/asset-title-and-link-top.html' %}{% enduxdotPattern %}

## Avatars card

Use to highlight a group of people who engage in an event. A label
should be included, but including text is optional.

Use the [`<rh-avatar>`](/elements/avatar/) element to element to present
the list of users.

{% uxdotPattern %}{% include './patterns/avatars.html' %}{% enduxdotPattern %}

## Fast facts card
Use to display quick facts or short data points under a label. A Secondary 
call to action may be used or not.

{% uxdotPattern %}{% include './patterns/fast-facts.html' %}{% enduxdotPattern %}

## Icon card

Use to add an icon to the basic style above the text. Secondary and Default 
calls to action may be used.

{% uxdotPattern %}{% include './patterns/icon.html' %}{% enduxdotPattern %}

## Image card

Use to add an image to the basic style above the text.
Secondary and Default calls to action may be used.

{% uxdotPattern %}{% include './patterns/image.html' %}{% enduxdotPattern %}

## List cards
Use to display a short amount of content using various list styles. 
Secondary and Default calls to action may be used.

### Flat list
{% uxdotPattern %}{% include './patterns/list-flat.html' %}{% enduxdotPattern %}

### List with dividers
{% uxdotPattern %}{% include './patterns/list-with-dividers.html' %}{% enduxdotPattern %}

### Ordered list

{% uxdotPattern %}{% include './patterns/ordered-list.html' %}{% enduxdotPattern %}

### Unordered list

{% uxdotPattern %}{% include './patterns/unordered-list.html' %}{% enduxdotPattern %}

## Logo cards
Use to display a customer logo in a variety of arrangements. A call to 
action is required, otherwise use a logo wall.

### CTA only
{% uxdotPattern %}{% include './patterns/logo-cta.html' %}{% enduxdotPattern %}

### Text and CTA
{% uxdotPattern %}{% include './patterns/logo-text-and-cta.html' %}{% enduxdotPattern %}

## Title bar card

Use to add a small icon and a label group to the header section. A larger icon
or a logo may be used.

Alternative title bar styles can be achieved by selecting [card's `header` CSS
Shadow Part](/elements/card/code/#parts).

{% uxdotPattern %}{% include './patterns/title-bar.html' %}{% enduxdotPattern %}

## Quote cards

Use to display a short quote with attribution text. Logos, images, and a 
Secondary call to action may be used or not.

### Basic
{% uxdotPattern %}{% include './patterns/quote.html' %}{% enduxdotPattern %}

### Logo and quote
{% uxdotPattern %}{% include './patterns/logo-and-quote.html' %}{% enduxdotPattern %}


<!-- ## Video cards

Use to trigger a video that will play in a [Modal dialog](/elements/dialog).
Different layout configurations may be used.

{% include './patterns/video.html' %} -->


{% include 'partials/component/feedback.html' %}

[element]: /elements/card
[css-props]: /elements/card/code/#css-custom-properties
