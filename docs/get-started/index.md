---
layout: layouts/pages/basic.njk
title: Overview
order: 00
tags:
  - getstarted
---

<link data-helmet rel="stylesheet" href="/assets/packages/@rhds/elements/elements/rh-tile/rh-tile-lightdom.css">

<script type="module" data-helmet>
  import '@rhds/elements/rh-tile/rh-tile.js';
</script>

<style data-helmet>
  #get-started-nav {
    margin-block-start: var(--rh-space-2xl);
  }

  #get-started-nav figcaption {
    font-family: var(--rh-font-family-heading);
    font-size: var(--rh-font-size-heading-sm);
  }
</style>

## Get started

The Red Hat Design System for digital experiences gives designers and developers the tools to create accessible and on-brand user interfaces quickly. The role-specific pages linked below will guide you through using the design system.

<nav id="get-started-nav" aria-label="Get Started" class="grid sm-two-columns">
  <rh-tile>
    <uxdot-example slot="image" no-border variant="full" transparent>
      <img alt="Row of two cards being resized with a mouse pointer" src="designers.svg">
    </uxdot-example>
    <h3 slot="headline"><a href="./designers">Designers</a></h3>
  </rh-tile>
  <rh-tile>
    <uxdot-example slot="image" no-border variant="full" transparent>
      <img alt="Card overlapping code editor user interface" src="developers.svg">
    </uxdot-example>
    <h3 slot="headline"><a href="./developers">Developers</a></h3>
  </rh-tile>
</nav>

<uxdot-feedback>
  <h2>Release notes</h2>
  <p>To see what foundations, tokens, elements, or patterns have been released recently, check out our <a href="/release-notes">release notes</a>.</p>
</uxdot-feedback>
