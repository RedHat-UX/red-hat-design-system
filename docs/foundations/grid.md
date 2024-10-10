---
title: Grid
layout: layouts/pages/has-toc.njk
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

<section aria-labelledby="overview">

  ## Overview

  A grid is a group of columns that organize layouts and allow content to scale
  responsively based on screen size. They provide structure to pages and ensure
  optimal viewing experiences.

  ### Sample component

  <uxdot-example variant="full" no-border>
    <img alt="Grid"
         src="/assets/grid/grid.svg"
         width="1000"
         height="160">
  </uxdot-example>

  ### Grid availability

  <uxdot-example variant="full" no-border>
    (coming soon)
  </uxdot-example>

  ### Style

  <uxdot-example variant="full" no-border>
    <img alt="Grid specs"
         src="/assets/grid/grid-style.svg"
         width="877"
         height="193">
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
      <img alt="Grid columns on desktop"
           src="/assets/grid/grid-usage-desktop.svg"
           width="1000"
           height="232">
      <figcaption>A grid on large screens contains 12 columns</figcaption>
    </figure>
  </uxdot-example>

  <uxdot-example variant="full" no-border alignment="left" width-adjustment="576px">
    <figure>
      <img alt="Grid columns on mobile"
           src="/assets/grid/grid-usage-mobile.svg"
           width="576"
           height="232">
      <figcaption>A grid on small screens contains one column</figcaption>
    </figure>
  </uxdot-example>

  ### Gutters

  Gutters are the spaces in between columns, they also change depending on the
  screen size. Gutters help separate content into layouts based on the amount of
  columns being used.

  <div class="grid">
    <uxdot-example variant="full" no-border>
      <img alt="Grid gutters on desktop"
           src="/assets/grid/grid-gutters-desktop.svg"
           width="1000"
           height="262">
    </uxdot-example>
    <uxdot-example variant="full" no-border alignment="left" width-adjustment="576px">
      <img alt="Grid gutters on mobile"
           src="/assets/grid/grid-gutters-mobile.svg"
           width="576"
           height="266">
    </uxdot-example>
  </div>

  ### Margins

  Margins are the spaces between a grid and the edges of the screen or window.
  They can be the same width or larger than gutters, depending on the screen
  size.

  ### Large screens

  The grid for large screens features 12 columns, like desktop and tablet.
  Column, gutter, and margin widths reduce as breakpoints get smaller.

  <uxdot-example variant="full" no-border>
    <img alt="Grid margins on desktop"
         src="/assets/grid/grid-margins-desktop.svg"
         width="1000"
         height="265">
  </uxdot-example>

  ### Small screens

  The grid for small screens features one column. In rare cases, content on
  small screens can sometimes be arranged in two columns.

  <uxdot-example variant="full" no-border alignment="left" width-adjustment="576px">
    <img alt="Grid margins on mobile"
         src="/assets/grid/grid-margins-mobile.svg"
         width="574"
         height="266">
  </uxdot-example>

</section>


<section aria-labelledby="best-practices">

  ## Best practices

  Don’t align every component to the grid, doing so might compromise the design
  of individual elements.

  <uxdot-example variant="full" no-border alignment="left">
    <figure>
      <img alt="Grid content outside of grid"
           src="/assets/grid/grid-best-practices-1.svg"
           width="872"
           height="427">
      <figcaption>18px or larger text shouldn't exceed eight columns to maintain optimal readability.</figcaption>
    </figure>
  </uxdot-example>

  <uxdot-example variant="full" no-border>
    <img alt="Grid alignment issues"
         src="/assets/grid/grid-best-practices-2.svg"
         width="872"
         height="158">
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
    <img alt="Example of responsive grid on large screen"
         src="/assets/grid/grid-responsive-1.svg"
         width="1000"
         height="232">
  </uxdot-example>

  <uxdot-example variant="full" no-border>
    <img alt="Example of responsive grid on smaller screen"
         src="/assets/grid/grid-responsive-2.svg"
         width="1000"
         height="232">
  </uxdot-example>

  ### Small screens

  The grid for small screens features one column. In rare cases, content on
  small screens can sometimes be arranged in two columns.

  <uxdot-example variant="full" no-border alignment="left" width-adjustment="576px">
    <img alt="Example of responsive grid on large screen"
         src="/assets/grid/grid-responsive-3.svg"
         width="576"
         height="232">
  </uxdot-example>

  <uxdot-example variant="full" no-border alignment="left" width-adjustment="360px">
    <img alt="Example of responsive grid on smaller screen"
         src="/assets/grid/grid-responsive-4.svg"
         width="360"
         height="232">
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

<uxdot-feedback>
  <h2>Foundations</h2>
  <p>To learn how to use our other foundations in your designs, visit the <a href="/foundations">foundations</a> section.</p>
</uxdot-feedback>
