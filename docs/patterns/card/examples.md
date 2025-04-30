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

## Accented cards

Use to highlight a single card or set of cards in a group or row.

<uxdot-pattern src="./patterns/accented.html"></uxdot-pattern>

## Asset cards

Use to display that an asset can be downloaded. An icon and label group or
text may be used to describe the asset.

<uxdot-pattern src="./patterns/asset-text-and-cta.html">
  <h3 id="text-and-cta" slot="heading">Text and CTA</h3>
</uxdot-pattern>

<uxdot-pattern src="./patterns/asset-title-and-link.html">
  <h3 id="title-and-link" slot="heading">Title and Link</h3>
</uxdot-pattern>

<uxdot-pattern src="./patterns/asset-title-and-link-top.html">
  <h3 id="title-and-link-top" slot="heading">Title and Link - Top</h3>
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

<uxdot-pattern src="./patterns/list-flat.html">
  <h3 id="flat-list" slot="heading">Flat list</h3>
</uxdot-pattern>

<uxdot-pattern src="./patterns/list-with-dividers.html">
  <h3 id="list-with-dividers" slot="heading">List with dividers</h3>
</uxdot-pattern>

<uxdot-pattern src="./patterns/ordered-list.html">
  <h3 id="ordered-list" slot="heading">Ordered list</h3>
</uxdot-pattern>

<uxdot-pattern src="./patterns/unordered-list.html">
  <h3 id="unordered-list" slot="heading">Unordered list</h3>
</uxdot-pattern>

<uxdot-pattern src="./patterns/definition-list.html">
  <h3 id="definition-list" slot="heading">Definition list</h3>
</uxdot-pattern>

## Logo cards
Use to display a customer logo in a variety of arrangements. A call to
action is required, otherwise use a logo wall.

<uxdot-pattern src="./patterns/logo-cta.html">
  <h3 id="cta-only" slot="heading">CTA only</h3>
</uxdot-pattern>

### Text and CTA
<uxdot-pattern src="./patterns/logo-text-and-cta.html">
</uxdot-pattern>

## Title bar card
  Use to add a small icon and a label group to the header section. A larger
  icon or a logo may be used.

  Alternative title bar styles can be achieved by selecting [card's `header`
  CSS Shadow Part](/elements/card/code/#parts).
<uxdot-pattern src="./patterns/title-bar.html">
</uxdot-pattern>

## Quote cards

Use to display a short quote with attribution text. Logos, images, and a
Secondary call to action may be used or not.

<uxdot-pattern src="./patterns/quote.html">
  <h3 id="basic" slot="heading">Basic</h3>
</uxdot-pattern>

<uxdot-pattern src="./patterns/logo-and-quote.html">
  <h3 id="logo-and-quote" slot="heading">Logo and quote</h3>
</uxdot-pattern>

{% renderFile './docs/_includes/partials/component/feedback.11ty.ts' %}

[element]: /elements/card
[css-props]: /elements/card/code/#css-custom-properties
