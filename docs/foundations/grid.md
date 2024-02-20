---
layout: layouts/pages/basic.njk
title: Grid
order: 2
hasToc: true
tags:
  - foundations
importElements: 
  - rh-table
---

<link rel="stylesheet" href="{{ '/assets/packages/@rhds/elements/elements/rh-table/rh-table-lightdom.css' | url }}">

<section>

  ## Overview

  A grid is a group of columns that organize layouts and allow content to scale responsively based on screen size. They provide structure to pages and ensure optimal viewing experiences.

  ### Sample component

  <uxdot-example variant="full" no-border>  
    <img src="{{ '/assets/grid/grid.svg' | url }}" alt="Grid">
  </uxdot-example>

  ### Grid availability
  
  <uxdot-example variant="full" no-border>
    (coming soon)
  </uxdot-example>

  ### Style

  <uxdot-example variant="full" no-border>
    <img src="{{ '/assets/grid/grid-style.svg' | url }}" alt="Grid specs">
  </uxdot-example>

</section>


<section>

  ## Usage

  Grids are fundamental to how content is organized across various devices and screen sizes.

  ### Columns

  The number of columns that a grid contains is determined by the screen size.

  <uxdot-example variant="full" no-border alignment="left">
    <figure>
      <img src="{{ '/assets/grid/grid-usage-desktop.svg' | url }}" alt="Grid columns on desktop">
      <figcaption>A grid on large screens contains 12 columns</figcaption>
    </figure>
  </uxdot-example>
  
  <uxdot-example variant="full" no-border alignment="left" width-adjustment="576px">
    <figure>
      <img src="{{ '/assets/grid/grid-usage-mobile.svg' | url }}" alt="Grid columns on mobile">
      <figcaption>A grid on small screens contains one column</figcaption>
    </figure>
  </uxdot-example>

  ### Gutters

  Gutters are the spaces in between columns, they also change depending on the screen size. Gutters help separate content into layouts based on the amount of columns being used.

  <div class="grid">
    <uxdot-example variant="full" no-border>
      <img src="{{ '/assets/grid/grid-gutters-desktop.svg' | url }}" alt="Grid gutters on desktop">
    </uxdot-example>
    <uxdot-example variant="full" no-border alignment="left" width-adjustment="576px">
      <img src="{{ '/assets/grid/grid-gutters-mobile.svg' | url }}" alt="Grid gutters on mobile">
    </uxdot-example>
  </div>

  ### Margins

  Margins are the spaces between a grid and the edges of the screen or window. They can be the same width or larger than gutters, depending on the screen size.

  ### Large screens
  
  The grid for large screens features 12 columns, like desktop and tablet. Column, gutter, and margin widths reduce as breakpoints get smaller.

  <uxdot-example variant="full" no-border>
    <img src="{{ '/assets/grid/grid-margins-desktop.svg' | url }}" alt="Grid margins on desktop">
  </uxdot-example>

  ### Small screens

  The grid for small screens features one column. In rare cases, content on small screens can sometimes be arranged in two columns.

  <uxdot-example variant="full" no-border alignment="left" width-adjustment="576px">
    <img src="{{ '/assets/grid/grid-margins-mobile.svg' | url }}" alt="Grid margins on mobile">
  </uxdot-example>

</section>


<section>

  ## Best practices
  
  Don’t align every component to the grid, doing so might compromise the design of individual elements.

  <uxdot-example variant="full" no-border alignment="left">
    <figure>
      <img src="{{ '/assets/grid/grid-best-practices-1.svg' | url }}" alt="Grid content outside of grid">
      <figcaption>18px or larger text shouldn't exceed eight columns to maintain optimal readability.</figcaption>
    </figure>
  </uxdot-example>

  <uxdot-example variant="full" no-border>
    <img src="{{ '/assets/grid/grid-best-practices-2.svg' | url }}" alt="Grid alignment issues">
  </uxdot-example>

</section>



<section>

  ## Responsive design
  
  Grids are designed to be responsive, meaning they adapt to different screen sizes and orientations.

  ### Large screens

  The grid for large screens features 12 columns, like desktop and tablet. Column, gutter, and margin widths reduce as breakpoints get smaller.

  <uxdot-example variant="full" no-border>
    <img src="{{ '/assets/grid/grid-responsive-1.svg' | url }}" alt="Example of responsive grid on large screen">
  </uxdot-example>

  <uxdot-example variant="full" no-border>
    <img src="{{ '/assets/grid/grid-responsive-2.svg' | url }}" alt="Example of responsive grid on smaller screen">
  </uxdot-example>

  ### Small screens

  The grid for small screens features one column. In rare cases, content on small screens can sometimes be arranged in two columns.

  <uxdot-example variant="full" no-border alignment="left" width-adjustment="576px">
    <img src="{{ '/assets/grid/grid-responsive-3.svg' | url }}" alt="Example of responsive grid on large screen">
  </uxdot-example>

  <uxdot-example variant="full" no-border alignment="left" width-adjustment="360px">
    <img src="{{ '/assets/grid/grid-responsive-4.svg' | url }}" alt="Example of responsive grid on smaller screen">
  </uxdot-example>

</section>


<section>

  ## Breakpoints

  A breakpoint is a predetermined screen size that has specific layout requirements. When breakpoints change, content will shift around to fit the adjusted layout.

  <rh-table>
    <table>
      <thead>
        <tr>
          <th scope="col" data-label="Breakpoint name">Breakpoint name</th>
          <th scope="col" data-label="Size range">Size range</th>
          <th scope="col" data-label="Columns">Columns</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td data-label="Breakpoint name">Desktop, large</td>
          <td data-label="Size range">1680px</td>
          <td data-label="Columns">12</td>
        </tr>
        <tr>
          <td data-label="Breakpoint name">Desktop, medium</td>
          <td data-label="Size range">1440px</td>
          <td data-label="Columns">12</td>
        </tr>
          <tr>
          <td data-label="Breakpoint name">Desktop, small</td>
          <td data-label="Size range">1200px - 1439px</td>
          <td data-label="Columns">12</td>
        </tr>
        <tr>
          <td data-label="Breakpoint name">Tablet, large</td>
          <td data-label="Size range">992px - 1199px</td>
          <td data-label="Columns">12</td>
        </tr>
        <tr>
          <td data-label="Breakpoint name">Tablet, small</td>
          <td data-label="Size range">768px - 991px</td>
          <td data-label="Columns">12</td>
        </tr>
        <tr>
          <td data-label="Breakpoint name">Mobile, large</td>
          <td data-label="Size range">576px - 767px</td>
          <td data-label="Columns">2</td>
        </tr>
        <tr>
          <td data-label="Breakpoint name">Mobile, small</td>
          <td data-label="Size range">0px</td>
          <td data-label="Columns">1</td>
        </tr>
      </tbody>
    </table>    
  </rh-table>
</section>

<uxdot-feedback>
  <h2>Foundations</h2>
  <p>To learn how to use our other foundations in your designs, visit the <a href="/foundations">foundations</a> section.</p>
</uxdot-feedback>


