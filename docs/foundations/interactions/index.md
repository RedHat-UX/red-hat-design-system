---
title: Overview
heading: Interactions
sidenavTitle: Interactions
layout: layouts/pages/basic.njk
permalink: /foundations/interactions/index.html
tags:
  - foundations
  - interactions
subnav:
  collection: sortedInteractions
  order: 1
---

<link rel="stylesheet"
      href="/assets/packages/@rhds/elements/elements/rh-tile/rh-tile-lightdom.css"
      data-helmet>

<script type="module" data-helmet>
  import '@rhds/elements/rh-tile/rh-tile.js';
</script>

<style data-helmet>
  .large-red-text {
    grid-area: h;
    font-size: var(--rh-font-size-heading-2xl);
    font-weight: var(--rh-font-weight-heading-regular);
    font-family: var(--rh-font-family-heading);
    line-height: var(--rh-line-height-heading);
    color: var(--rh-color-brand-red);
    margin-block-end: var(--rh-space-xl);
  }
</style>

<h2 class="large-red-text">Consistent interactions help guide our users through complex tasks.</h2>

They help ensure that anything interactive is accessible, communicative, and intuitive.

## Types of interactions

Interactions are foundational to how our users engage with Red Hat digital experiences.

<nav id="interactions-nav"
     class="grid sm-three-columns"
     aria-label="Interaction types">
    <rh-tile compact>
      <img alt="abstract representation of a paragraph with an inline link and a call to action"
           src="./types-of-interactions-links.svg"
           slot="image"
           width="295"
           height="176">
      <h3 slot="headline"><a href="/foundations/interactions/links">Links</a></h3>
      Text that sends users to another destination
    </rh-tile>
</nav>