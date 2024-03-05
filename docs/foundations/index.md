---
layout: layouts/pages/basic.njk
title: Foundations
sidenavTitle: Overview
order: 0
tags:
  - foundations
importElements:
  - rh-card
---

<style>
  #grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--rh-space-2xl, 32px);
    margin-block-start: var(--rh-space-2xl, 32px);
    margin-block-end: var(--rh-space-5xl, 80px);
  }

  @container container (min-width: 567px) {
    #grid {
      grid-template-columns: 1fr 1fr;
    }
  }
</style>

<section>

  ## Overview

  Foundations are the visual and structural elements of our design system. Foundations were created as the building blocks of all user interface elements. Foundations should be used as blueprints that all components and layouts are created from.

  <div id="grid">
    <rh-card>
      <a href="../foundations/color" slot="header">
        <uxdot-example variant="full" no-border>
          <img src="{{ '/assets/foundations/color.svg' | url }}" alt="Color">
        </uxdot-example>
      </a>
      <h3 slot="header"><a href="../foundations/color">Color</a></h3>
      <p>Unifies our brand while bringing accessibility and consistency to our digital experiences</p>
      <rh-cta>
        <a href="../foundations/color">View colors</a>
      </rh-cta>
    </rh-card>
    <rh-card>
      <a href="../foundations/grid" slot="header">
        <uxdot-example variant="full" no-border>
          <img src="{{ '/assets/foundations/grid.svg' | url }}" alt="Grid">
        </uxdot-example>
      </a>
      <h3 slot="header"><a href="../foundations/grid">Grid</a></h3>
      <p>Provides guidance and structure when positioning elements and components in a layout</p>
      <rh-cta>
        <a href="../foundations/grid">View grids</a>
      </rh-cta>
    </rh-card>
    <rh-card>
      <a href="../foundations/spacing" slot="header">
        <uxdot-example variant="full" no-border>
          <img src="{{ '/assets/foundations/spacing.svg' | url }}" alt="Spacing">
        </uxdot-example>
      </a>
      <h3 slot="header"><a href="../foundations/spacing">Spacing</a></h3>
      <p>Defines fixed amounts of space between elements and makes it easy to maintain consistency</p>
      <rh-cta>
        <a href="../foundations/spacing">View spacing</a>
      </rh-cta>
    </rh-card>
    <rh-card>
      <a href="../foundations/typography" slot="header">
        <uxdot-example variant="full" no-border>
          <img src="{{ '/assets/foundations/typography.svg' | url }}" alt="Typography">
        </uxdot-example>
      </a>
      <h3 slot="header"><a href="../foundations/typography">Typography</a></h3>
      <p>A system of fonts that creates hierarchies and helps guide a user through an experience</p>
      <rh-cta>
        <a href="../foundations/typography">View typography</a>
      </rh-cta>
    </rh-card>
  </div>
</section>

<section>
  <h2>Make a request</h2>
   <p>To request a new foundation or if updates need to be made to an existing foundation, <a href="mailto:digital-design-system@redhat.com">contact us</a>.</p>
</section>


{% include 'partials/component/feedback.html' %}
