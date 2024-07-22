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
  order: 2
importElements:
  - rh-card
  - rh-cta
  - rh-surface
  - rh-avatar
  - rh-accordion
---

<script type="module">
  import '@rhds/elements/lib/elements/rh-context-picker/rh-context-picker.js';
</script>

<link rel="stylesheet" href="{{ '/assets/packages/@rhds/elements/elements/rh-table/rh-table-lightdom.css' | url }}">
<link rel="stylesheet" href="{{ '/styles/samp.css' | url }}">

<style>
  rh-card {
    display: block;
    max-width: 360px;
  }
</style>


## Asset cards
Use to display that an asset can be downloaded. An icon and label group or 
text may be used to describe the asset.

{% include './patterns/asset.html' %}


## Avatars card

Use to highlight a group of people who engage in an event. A label
should be included, but including text is optional.

Use the [`<rh-avatar>`](/elements/avatar/) element to element to present
the list of users.

{% include './patterns/avatars.html' %}


## Image card

Use to add an image to the basic style above the text.
Secondary and Default calls to action may be used.

{% include './patterns/image.html' %}


## Title bar card

Use to add a small icon and a label group to the header section. A larger icon
or a logo may be used.

Alternative title bar styles can be achieved by selecting [card's `header` CSS
Shadow Part](/elements/card/code/#parts).

{% include './patterns/title-bar.html' %}


{% include 'partials/component/feedback.html' %}

[element]: /elements/card
[css-props]: /elements/card/code/#css-custom-properties
