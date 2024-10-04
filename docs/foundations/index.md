---
layout: layouts/pages/basic.njk
title: Foundations
sidenavTitle: Overview
order: 0
tags:
  - foundations
importElements:
  - rh-tile
---

<link data-helmet rel="stylesheet" href="/assets/packages/@rhds/elements/elements/rh-tile/rh-tile-lightdom.css">

<section aria-labelledby="overview">

  ## Overview

  Foundations are the visual and structural elements of our design system. Foundations were created as the building blocks of all user interface elements. Foundations should be used as blueprints that all components and layouts are created from.

  <div class="grid sm-two-columns">
    <rh-tile>
      <uxdot-example variant="full" no-border slot="image">
        <img src="/assets/foundations/color.svg"
          alt="Color"
          width="1000"
          height="300">
      </uxdot-example>
      <h3 slot="headline"><a href="../foundations/color">Color</a></h3>
      <p>Unifies our brand while bringing accessibility and consistency to our digital experiences</p>
    </rh-tile>
    <rh-tile>
      <uxdot-example variant="full" no-border slot="image">
        <img src="/assets/foundations/grid.svg"
          alt="Grid"
          width="1000"
          height="300">
      </uxdot-example>
      <h3 slot="headline"><a href="../foundations/grid">Grid</a></h3>
      <p>Provides guidance and structure when positioning elements and components in a layout</p>
    </rh-tile>
    <rh-tile>
      <uxdot-example variant="full" no-border slot="image">
        <img src="/assets/foundations/spacing.svg"
          alt="Spacing"
          width="1000"
          height="300">
      </uxdot-example>
      <h3 slot="headline"><a href="../foundations/spacing">Spacing</a></h3>
      <p>Defines fixed amounts of space between elements and makes it easy to maintain consistency</p>
    </rh-tile>
    <rh-tile>
      <uxdot-example variant="full" no-border slot="image">
        <img src="/assets/foundations/typography.svg"
          alt="Typography"
          width="1000"
          height="300">
      </uxdot-example>
      <h3 slot="headline"><a href="../foundations/typography">Typography</a></h3>
      <p>A system of fonts that creates hierarchies and helps guide a user through an experience</p>
    </rh-tile>
  </div>
</section>

## Make a request

To request a new foundation or if updates need to be made to an existing foundation, [contact us](mailto:digital-design-system@redhat.com).

{% include 'partials/component/feedback.html' %}
