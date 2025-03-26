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
  <table>
  <!--
    <colgroup>
      <col>
      <col>
      <col>
    </colgroup>
    -->
    <thead>
      <tr>
        <th scope="col">Grid name</th>
        <th scope="col">Breakpoint</th>
        <th scope="col">Margins and gutters</th>
        <th scope="col">Max width</th>
        <th scope="col">Columns</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>xs</td>
        <td>&lt;575px</td>
        <td><code>--rh-space-lg</code></td>
        <td>100% - 32px</td>
        <td>2</td>
      </tr>
      <tr>
        <td>sm</td>
        <td>576px</td>
        <td><code>--rh-space-lg</code></td>
        <td>544px</td>
        <td>2</td>
      </tr>
      <tr>
        <td>md</td>
        <td>768px</td>
        <td><code>--rh-space-2xl</code></td>
        <td>704px</td>
        <td>12</td>
      </tr>
      <tr>
        <td>lg</td>
        <td>992px</td>
        <td><code>--rh-space-2xl</code></td>
        <td>928px</td>
        <td>12</td>
      </tr>
      <tr>
        <td>xl</td>
        <td>1200px</td>
        <td><code>--rh-space-2xl</code></td>
        <td>1136px</td>
        <td>12</td>
      </tr>
      <tr>
        <td>2xl</td>
        <td>&gt;1440px</td>
        <td><code>--rh-space-2xl</code></td>
        <td>1376px</td>
        <td>12</td>
      </tr>
    </tbody>
  </table>
</rh-table>

## Fluid grid values

<rh-table>
  <table>
    <colgroup>
      <col>
      <col>
      <col>
      <col>
      <col>
    </colgroup>
    <thead>
      <tr>
        <th scope="col">Grid name</th>
        <th scope="col">Device</th>
        <th scope="col">Margins and gutters</th>
        <th scope="col">Max width</th>
        <th scope="col">Columns</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Fluid</td>
        <td>Desktop and tablet</td>
        <td><code>--rh-space-2xl</code></td>
        <td>100%</td>
        <td>12</td>
      </tr>
      <tr>
        <td>Fluid</td>
        <td>Mobile</td>
        <td><code>--rh-space-lg</code></td>
        <td>100%</td>
        <td>2</td>
      </tr>
    </tbody>
  </table>
</rh-table>

## Best practices

### Line length

<uxdot-best-practice variant="do">
  <uxdot-example slot="image" width-adjustment="1012px">
    <img src="/assets/grid/best-practice-line-length-do.svg" 
        alt="Text at a width of 789px and layered on a grid"
        width="1012"
        height="170">
  </uxdot-example>

  <p>The width of body text should be 7 grid columns on desktop or 789px max in all layouts.</p>
</uxdot-best-practice>

<uxdot-best-practice variant="dont">
  <uxdot-example slot="image" width-adjustment="1012px">
    <img  src="/assets/grid/best-practice-line-length-dont.svg" 
        alt="Text spanning all 12 columns of a grid"
        width="1012"
        height="107">
  </uxdot-example>

  <p>Do not allow the width of body text to span more than 789px.</p>
</uxdot-best-practice>



<uxdot-feedback>
  <h2>Foundations</h2>
  <p>To learn how to use our other foundations in your designs, visit the <a href="/foundations">foundations</a> section.</p>
</uxdot-feedback>

[space tokens]: /tokens/space/

