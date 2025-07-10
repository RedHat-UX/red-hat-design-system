---
title: Grid
layout: layouts/pages/basic.njk
order: 20
tags:
  - foundations
---

<link rel="stylesheet"
      href="/assets/packages/@rhds/elements/elements/rh-table/rh-table-lightdom.css"
      data-helmet>

<script type="module" data-helmet>
  import '@rhds/elements/rh-table/rh-table.js';
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

<h2 class="large-red-text">Our grid is the structural foundation for visual elements across web experiences.</h2>

It helps us create consistent layouts that work across devices, screen sizes, and environments.

## Fixed grid values

We use [space tokens][space tokens] to define grid margins and gutters.

<rh-table>

| Grid name | Breakpoint | Margins and gutters | Max width   | Columns |
|-----------|------------|---------------------|-------------|---------|
| xs        | &lt;575px  | `--rh-space-lg`     | 100% - 32px | 2       |
| sm        | 576px      | `--rh-space-lg`     | 544px       | 2       |
| md        | 768px      | `--rh-space-2xl`    | 704px       | 12      |
| lg        | 992px      | `--rh-space-2xl`    | 928px       | 12      |
| xl        | 1200px     | `--rh-space-2xl`    | 1136px      | 12      |
| 2xl       | &gt;1440px | `--rh-space-2xl`    | 1376px      | 12      |

</rh-table>

## Fluid grid values

<rh-table>

| Grid name | Device             | Margins and gutters | Max width | Columns |
|-----------|--------------------|---------------------|-----------|---------|
| Fluid     | Desktop and tablet | `--rh-space-2xl`    | 100%      | 12      |
| Fluid     | Mobile             | `--rh-space-lg`     | 100%      | 2       |

</rh-table>

## Best practices

### Line length

<uxdot-best-practice variant="do">
  <uxdot-example slot="image" width-adjustment="1012px">
    <img src="/assets/grid/best-practice-line-length-do.svg" 
        alt="Text at a width of 789px and layered on a grid"
        width="1012"
        height="170"
        loading="lazy">
  </uxdot-example>

  <p>The width of body text should be 7 grid columns on desktop or 789px max in all layouts.</p>
</uxdot-best-practice>

<uxdot-best-practice variant="dont">
  <uxdot-example slot="image" width-adjustment="1012px">
    <img  src="/assets/grid/best-practice-line-length-dont.svg" 
        alt="Text spanning all 12 columns of a grid"
        width="1012"
        height="107"
        loading="lazy">
  </uxdot-example>

  <p>Do not allow the width of body text to span more than 789px.</p>
</uxdot-best-practice>



<uxdot-feedback>
  <h2>Foundations</h2>
  <p>To learn how to use our other foundations in your designs, visit the <a href="/foundations">foundations</a> section.</p>
</uxdot-feedback>

<!-- Links -->

[space tokens]: /tokens/space/


<!-----OLD---->
<!--

<section aria-labelledby="overview">

  ## Overview

  A grid is a group of columns that organize layouts and allow content to scale
  responsively based on screen size. They provide structure to pages and ensure
  optimal viewing experiences.

  ### Sample component

  <uxdot-example variant="full" no-border>
    {% include './grid.svg' %}
  </uxdot-example>

  ### Grid availability

  <uxdot-example variant="full" no-border>
    (coming soon)
  </uxdot-example>

  ### Style

  <uxdot-example variant="full" no-border>
    {% include './grid-style.svg' %}
  </uxdot-example>

</section>

<section aria-labelledby="usage">

  ## Usage

  Grids are fundamental to how content is organized across various devices and
  screen sizes.

  ### Columns

  The number of columns that a grid contains is determined by the screen size.

  <uxdot-example variant="full" no-border alignment="left">
    <figure>
      {% include './grid-usage-desktop.svg' %}
      <figcaption>A grid on large screens contains 12 columns</figcaption>
    </figure>
  </uxdot-example>

  <uxdot-example variant="full" no-border alignment="left" width-adjustment="576px">
    <figure>
      {% include './grid-usage-mobile.svg' %}
      <figcaption>A grid on small screens contains one column</figcaption>
    </figure>
  </uxdot-example>

  ### Gutters

  Gutters are the spaces in between columns, they also change depending on the
  screen size. Gutters help separate content into layouts based on the amount of
  columns being used.

  <div class="grid">
    <uxdot-example variant="full" no-border>{% include './grid-gutters-desktop.svg' %}</uxdot-example>
    <uxdot-example variant="full" no-border alignment="left" width-adjustment="576px">{% include './grid-gutters-mobile.svg' %}</uxdot-example>
  </div>

  ### Margins

  Margins are the spaces between a grid and the edges of the screen or window.
  They can be the same width or larger than gutters, depending on the screen
  size.

  ### Large screens

  The grid for large screens features 12 columns, like desktop and tablet.
  Column, gutter, and margin widths reduce as breakpoints get smaller.

  <uxdot-example variant="full" no-border>
    {% include './grid-margins-desktop.svg' %}
  </uxdot-example>

  ### Small screens

  The grid for small screens features one column. In rare cases, content on
  small screens can sometimes be arranged in two columns.

  <uxdot-example variant="full" no-border alignment="left" width-adjustment="576px">
    {% include './grid-margins-mobile.svg' %}
  </uxdot-example>

</section>


<section aria-labelledby="best-practices">

  ## Best practices

  Don’t align every component to the grid, doing so might compromise the design
  of individual elements.

  <uxdot-example variant="full" no-border alignment="left">
    <figure>
      {% include './grid-best-practices-1.svg' %}
      <figcaption>18px or larger text shouldn't exceed eight columns to maintain optimal readability.</figcaption>
    </figure>
  </uxdot-example>

  <uxdot-example variant="full" no-border>
    {% include './grid-best-practices-2.svg' %}
  </uxdot-example>

</section>

<section aria-labelledby="responsive-design">

  ## Responsive design

  Grids are designed to be responsive, meaning they adapt to different screen
  sizes and orientations.

  ### Large screens

  The grid for large screens features 12 columns, like desktop and tablet.
  Column, gutter, and margin widths reduce as breakpoints get smaller.

  <uxdot-example variant="full" no-border>
    {% include './grid-responsive-1.svg' %}
  </uxdot-example>

  <uxdot-example variant="full" no-border>
    {% include './grid-responsive-2.svg' %}
  </uxdot-example>

  ### Small screens

  The grid for small screens features one column. In rare cases, content on
  small screens can sometimes be arranged in two columns.

  <uxdot-example variant="full" no-border alignment="left" width-adjustment="576px">
    {% include "./grid-responsive-3.svg" %}
  </uxdot-example>

  <uxdot-example variant="full" no-border alignment="left" width-adjustment="360px">
    {% include "./grid-responsive-4.svg" %}
  </uxdot-example>

</section>


<section aria-labelledby="breakpoints">

  ## Breakpoints

  A breakpoint is a predetermined screen size that has specific layout
  requirements. When breakpoints change, content will shift around to fit the
  adjusted layout.

  <rh-table>

  | Breakpoint name | Size range      | Columns |
  |-----------------|-----------------|---------|
  | Desktop, large  | 1680px          | 12      |
  | Desktop, medium | 1440px          | 12      |
  | Desktop, small  | 1200px - 1439px | 12      |
  | Tablet, large   | 992px - 1199px  | 12      |
  | Tablet, small   | 768px - 991px   | 12      |
  | Mobile, large   | 576px - 767px   | 2       |
  | Mobile, small   | 0px             | 1       |

  </rh-table>

</section>
-->

