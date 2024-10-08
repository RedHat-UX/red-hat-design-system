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

<uxdot-pattern src="./patterns/asset-text-and-cta.html">
  <h3 slot="heading">Text and CTA</h3>
</uxdot-pattern>

<uxdot-pattern src="./patterns/asset-title-and-link.html">
  <h3 slot="heading">Title and Link</h3>
</uxdot-pattern>

<uxdot-pattern src="./patterns/asset-title-and-link-top.html">
  <h3 slot="heading">Title and Link - Top</h3>
</uxdot-pattern>

<uxdot-pattern src="./patterns/avatars.html">
  <h2 slot="heading">Avatars card</h2>

  Use to highlight a group of people who engage in an event. A label
  should be included, but including text is optional.

  Use the [`<rh-avatar>`](/elements/avatar/) element to element to present
  the list of users.

</uxdot-pattern>

<uxdot-pattern src="./patterns/fast-facts.html">
  <h2 slot="heading">Fast facts card</h2>

  Use to display quick facts or short data points under a label. A Secondary 
  call to action may be used or not.

</uxdot-pattern>

<uxdot-pattern src="./patterns/icon.html">
  <h2 slot="heading">Icon card</h2>

  Use to add an icon to the basic style above the text. Secondary and Default 
  calls to action may be used.

</uxdot-pattern>

<uxdot-pattern src="./patterns/image.html">
  <h2 slot="heading">Image card</h2>

  Use to add an image to the basic style above the text.
  Secondary and Default calls to action may be used.

</uxdot-pattern>

## List cards
Use to display a short amount of content using various list styles. 
Secondary and Default calls to action may be used.

<uxdot-pattern src="./patterns/list-flat.html">
  <h3 slot="heading">Flat list</h3>
</uxdot-pattern>

<uxdot-pattern src="./patterns/list-with-dividers.html">
  <h3 slot="heading">List with dividers</h3>
</uxdot-pattern>

<uxdot-pattern src="./patterns/ordered-list.html">
  <h3 slot="heading">Ordered list</h3>
</uxdot-pattern>

<uxdot-pattern src="./patterns/unordered-list.html">
  <h3 slot="heading">Unordered list</h3>
</uxdot-pattern>

## Logo cards
Use to display a customer logo in a variety of arrangements. A call to 
action is required, otherwise use a logo wall.

<uxdot-pattern src="./patterns/logo-cta.html">
  <h3 slot="heading">CTA only</h3>
</uxdot-pattern>

### Text and CTA
<uxdot-pattern src="./patterns/logo-text-and-cta.html">
</uxdot-pattern>

<uxdot-pattern src="./patterns/title-bar.html">
  <h2 slot="heading">Title bar card</h2>

  Use to add a small icon and a label group to the header section. A larger
  icon or a logo may be used.

  Alternative title bar styles can be achieved by selecting [card's `header`
  CSS Shadow Part](/elements/card/code/#parts).

</uxdot-pattern>

## Quote cards

Use to display a short quote with attribution text. Logos, images, and a 
Secondary call to action may be used or not.

<uxdot-pattern src="./patterns/quote.html">
  <h3 slot="heading">Basic</h3>
</uxdot-pattern>

<uxdot-pattern src="./patterns/logo-and-quote.html">
  <h3 slot="heading">Logo and quote</h3>
</uxdot-pattern>

{% include 'partials/component/feedback.html' %}

[element]: /elements/card
[css-props]: /elements/card/code/#css-custom-properties
