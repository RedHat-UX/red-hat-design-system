---
layout: layouts/pages/basic.njk
title: Scale
heading: Typography
sidenavTitle: Typography
hasToc: true
tags:
  - typography
subnav:
  collection: sortedTypography
  order: 2
importElements:
  - rh-table
permalink: /foundations/typography/scale.html
---

<link rel="stylesheet" href="/assets/packages/@rhds/elements/elements/rh-table/rh-table-lightdom.css">

<style>
  table td,
  table th {
    width: 20%;
  }

  /* Removes margin below <p>s in table */
  td.altered-text p,
  td.not-altered-text p {
    margin-block-start: 0;
    margin-block-end: 0;
  }

  /* Adds strikethrough and gray font color to first line in cell */
  td.altered-text p:first-child {
    color: var(--rh-color-gray-40, #a3a3a3);
  }

  /* Changes text color to red */
  td.altered-text p:last-child {
    color: var(--rh-color-text-brand-on-light, #ee0000);
  }

  /* Changes text color to green */
  td.not-altered-text p:last-child {
    color: var(--rh-color-green-60, #3d7317);
  }
</style>

## Overview

The type scale includes a range of text sizes and weights designed to support various content needs. There are type scales for both desktop and mobile environments. For more technical details, go to the [Tokens](https://ux.redhat.com/tokens/font/) section.

## Desktop scale

### Heading

You might see headings with larger sizes or different weights. Those are used for limited bespoke use cases only. Contact the [Brand team](https://brand.redhat.com/) to learn more about using heading sizes and weights different from the table below.

<rh-table>
  <table>
    <thead>
      <tr>
        <th scope="col" data-label="Style">Style</th>
        <th scope="col" data-label="Font family">Font family</th>
        <th scope="col" data-label="Font weight">Font weight</th>
        <th scope="col" data-label="Font size">Font size</th>
        <th scope="col" data-label="Line height">Line height</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td data-label="Style">Heading, 2xl</td>
        <td data-label="Font family">Red Hat Display</td>
        <td data-label="Font weight">Regular (400)</td>
        <td data-label="Font size">48 (3.0rem)</td>
        <td data-label="Line height">62.4 (1.3)</td>
      </tr>
      <tr>
        <td data-label="Style">Heading, xl</td>
        <td data-label="Font family">Red Hat Display</td>
        <td data-label="Font weight">Regular (400)</td>
        <td data-label="Font size">40 (2.5rem)</td>
        <td data-label="Line height">52 (1.3)</td>
      </tr>
      <tr>
        <td data-label="Style">Heading, lg</td>
        <td data-label="Font family">Red Hat Display</td>
        <td data-label="Font weight">Medium (500)</td>
        <td data-label="Font size">36 (2.25rem)</td>
        <td data-label="Line height">46.8 (1.3)</td>
      </tr>
      <tr>
        <td data-label="Style">Heading, md</td>
        <td data-label="Font family">Red Hat Display</td>
        <td data-label="Font weight">Medium (500)</td>
        <td data-label="Font size">28 (1.75rem)</td>
        <td data-label="Line height">36.4 (1.3)</td>
      </tr>
      <tr>
        <td data-label="Style">Heading, sm</td>
        <td data-label="Font family">Red Hat Display</td>
        <td data-label="Font weight">Medium (500)</td>
        <td data-label="Font size">24 (1.5rem)</td>
        <td data-label="Line height">31.2 (1.3)</td>
      </tr>
      <tr>
        <td data-label="Style">Heading, xs</td>
        <td data-label="Font family">Red Hat Display</td>
        <td data-label="Font weight">Medium (500)</td>
        <td data-label="Font size">20 (1.25rem)</td>
        <td data-label="Line height">26 (1.3)</td>
      </tr>
    </tbody>
  </table>
</rh-table>

### Body text

Body text can use italic and medium styles for emphasis.

<rh-table>
  <table>
    <thead>
      <tr>
        <th scope="col" data-label="Style">Style</th>
        <th scope="col" data-label="Font family">Font family</th>
        <th scope="col" data-label="Font weight">Font weight</th>
        <th scope="col" data-label="Font size">Font size</th>
        <th scope="col" data-label="Line height">Line height</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td data-label="Style">Body text, 2xl</td>
        <td data-label="Font family">Red Hat Text</td>
        <td data-label="Font weight">Regular (400)</td>
        <td data-label="Font size">24 (1.5rem)</td>
        <td data-label="Line height">36 (1.5)</td>
      </tr>
      <tr>
        <td data-label="Style">Body text, xl</td>
        <td data-label="Font family">Red Hat Text</td>
        <td data-label="Font weight">Regular (400)</td>
        <td data-label="Font size">20 (1.25rem)</td>
        <td data-label="Line height">30 (1.5)</td>
      </tr>
      <tr>
        <td data-label="Style">Body text, lg</td>
        <td data-label="Font family">Red Hat Text</td>
        <td data-label="Font weight">Regular (400)</td>
        <td data-label="Font size">18 (1.125rem)</td>
        <td data-label="Line height">27 (1.5)</td>
      </tr>
      <tr>
        <td data-label="Style">Body text, md</td>
        <td data-label="Font family">Red Hat Text</td>
        <td data-label="Font weight">Regular (400)</td>
        <td data-label="Font size">16 (1.0rem)</td>
        <td data-label="Line height">24 (1.5)</td>
      </tr>
      <tr>
        <td data-label="Style">Body text, sm</td>
        <td data-label="Font family">Red Hat Text</td>
        <td data-label="Font weight">Regular (400)</td>
        <td data-label="Font size">14 (0.875rem)</td>
        <td data-label="Line height">21 (1.5)</td>
      </tr>
      <tr>
        <td data-label="Style">Body text, xs</td>
        <td data-label="Font family">Red Hat Text</td>
        <td data-label="Font weight">Regular (400)</td>
        <td data-label="Font size">12 (0.75rem)</td>
        <td data-label="Line height">18 (1.5)</td>
      </tr>
    </tbody>
  </table>
</rh-table>

### Code text

Code text may use italic and medium styles for emphasis if absolutely necessary.

<rh-table>
  <table>
    <thead>
      <tr>
        <th scope="col" data-label="Style">Style</th>
        <th scope="col" data-label="Font family">Font family</th>
        <th scope="col" data-label="Font weight">Font weight</th>
        <th scope="col" data-label="Font size">Font size</th>
        <th scope="col" data-label="Line height">Line height</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td data-label="Style">Code text, 2xl</td>
        <td data-label="Font family">Red Hat Mono</td>
        <td data-label="Font weight">Regular (400)</td>
        <td data-label="Font size">24 (1.5rem)</td>
        <td data-label="Line height">36 (1.5)</td>
      </tr>
<tr>
        <td data-label="Style">Code text, xl</td>
        <td data-label="Font family">Red Hat Mono</td>
        <td data-label="Font weight">Regular (400)</td>
        <td data-label="Font size">20 (1.25rem)</td>
        <td data-label="Line height">30 (1.5)</td>
      </tr>
      <tr>
        <td data-label="Style">Code text, lg</td>
        <td data-label="Font family">Red Hat Mono</td>
        <td data-label="Font weight">Regular (400)</td>
        <td data-label="Font size">18 (1.125rem)</td>
        <td data-label="Line height">27 (1.5)</td>
      </tr>
      <tr>
        <td data-label="Style">Code text, md</td>
        <td data-label="Font family">Red Hat Mono</td>
        <td data-label="Font weight">Regular (400)</td>
        <td data-label="Font size">16 (1.0rem)</td>
        <td data-label="Line height">24 (1.5)</td>
      </tr>
      <tr>
        <td data-label="Style">Code text, sm</td>
        <td data-label="Font family">Red Hat Mono</td>
        <td data-label="Font weight">Regular (400)</td>
        <td data-label="Font size">14 (0.875rem)</td>
        <td data-label="Line height">21 (1.5)</td>
      </tr>
      <tr>
        <td data-label="Style">Code text, xs</td>
        <td data-label="Font family">Red Hat Mono</td>
        <td data-label="Font weight">Regular (400)</td>
        <td data-label="Font size">12 (0.75rem)</td>
        <td data-label="Line height">18 (1.5)</td>
      </tr>
    </tbody>
  </table>
</rh-table>

### Title

<rh-table>
  <table>
    <thead>
      <tr>
        <th scope="col" data-label="Style">Style</th>
        <th scope="col" data-label="Font family">Font family</th>
        <th scope="col" data-label="Font weight">Font weight</th>
        <th scope="col" data-label="Font size">Font size</th>
        <th scope="col" data-label="Line height">Line height</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td data-label="Style">Title, lg</td>
        <td data-label="Font family">Red Hat Text</td>
        <td data-label="Font weight">Regular (400)</td>
        <td data-label="Font size">24 (1.5rem)</td>
        <td data-label="Line height">36 (1.5)</td>
      </tr>
      <tr>
        <td data-label="Style">Title, sm</td>
        <td data-label="Font family">Red Hat Text</td>
        <td data-label="Font weight">Regular (400)</td>
        <td data-label="Font size">16 (1.0rem)</td>
        <td data-label="Line height">24 (1.5)</td>
      </tr>
    </tbody>
  </table>
</rh-table>

### Blockquote

<rh-table>
  <table>
    <thead>
      <tr>
        <th scope="col" data-label="Style">Style</th>
        <th scope="col" data-label="Font family">Font family</th>
        <th scope="col" data-label="Font weight">Font weight</th>
        <th scope="col" data-label="Font size">Font size</th>
        <th scope="col" data-label="Line height">Line height</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td data-label="Style">Blockquote, lg</td>
        <td data-label="Font family">Red Hat Display</td>
        <td data-label="Font weight">Regular (400)</td>
        <td data-label="Font size">28 (1.75rem)</td>
        <td data-label="Line height">36.4 (1.3)</td>
      </tr>
      <tr>
        <td data-label="Style">Blockquote, sm</td>
        <td data-label="Font family">Red Hat Display</td>
        <td data-label="Font weight">Regular (400)</td>
        <td data-label="Font size">20 (1.25rem)</td>
        <td data-label="Line height">26 (1.3)</td>
      </tr>
    </tbody>
  </table>
</rh-table>

## Mobile scale

The mobile scale takes effect when the viewport size is less than 768px.

### Heading

<rh-table>
  <table>
    <thead>
      <tr>
        <th scope="col" data-label="Style">Style</th>
        <th scope="col" data-label="Font family">Font family</th>
        <th scope="col" data-label="Font weight">Font weight</th>
        <th scope="col" data-label="Font size">Font size</th>
        <th scope="col" data-label="Line height">Line height</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td data-label="Style">Heading, 2xl</td>
        <td data-label="Font family">Red Hat Display</td>
        <td data-label="Font weight">Regular (400)</td>
        <td data-label="Font size" class="altered-text">
          <p><s>48 (3.0rem)</s></p>
          <p>Reduces to 35</p>
        </td>
        <td data-label="Line height" class="altered-text">
          <p><s>62.4 (1.3)</s></p>
          <p>45.5 (1.3)</p>
        </td>
      </tr>
      <tr>
        <td data-label="Style">Heading, xl</td>
        <td data-label="Font family">Red Hat Display</td>
        <td data-label="Font weight">Regular (400)</td>
        <td data-label="Font size" class="altered-text">
          <p><s>40 (2.5rem)</s></p>
          <p>Reduces to 29</p>
        </td>
        <td data-label="Line height" class="altered-text">
          <p><s>52 (1.3)</s></p>
          <p>37.7 (1.3)</p>
        </td>
      </tr>
      <tr>
        <td data-label="Style">Heading, lg</td>
        <td data-label="Font family">Red Hat Display</td>
        <td data-label="Font weight">Medium (500)</td>
        <td data-label="Font size" class="altered-text">
          <p><s>36 (2.25rem)</s></p>
          <p>Reduces to 26</p>
        </td>
        <td data-label="Line height" class="altered-text">
          <p><s>46.8 (1.3)</s></p>
          <p>33.8 (1.3)</p>
        </td>
      </tr>
      <tr>
        <td data-label="Style">Heading, md</td>
        <td data-label="Font family">Red Hat Display</td>
        <td data-label="Font weight">Medium (500)</td>
        <td data-label="Font size" class="altered-text">
          <p><s>28 (1.75rem)</s></p>
          <p>Reduces to 24</p>
        </td>
        <td data-label="Line height" class="altered-text">
          <p><s>36.4 (1.3)</s></p>
          <p>31.2 (1.3)</p>
        </td>
      </tr>
      <tr>
        <td data-label="Style">Heading, sm</td>
        <td data-label="Font family">Red Hat Display</td>
        <td data-label="Font weight">Medium (500)</td>
        <td data-label="Font size" class="altered-text">
          <p><s>24 (1.5rem)</s></p>
          <p>Reduces to 20</p>
        </td>
        <td data-label="Line height" class="altered-text">
          <p><s>31.2 (1.3)</s></p>
          <p>26 (1.3)</p>
        </td>
      </tr>
      <tr>
        <td data-label="Style">Heading, xs</td>
        <td data-label="Font family">Red Hat Display</td>
        <td data-label="Font weight">Medium (500)</td>
        <td data-label="Font size" class="altered-text">
          <p><s>20 (1.25rem)</s></p>
          <p>Reduces to 18</p>
        </td>
        <td data-label="Line height" class="altered-text">
          <p><s>26 (1.3)</s></p>
          <p>23.4 (1.3)</p>
        </td>
      </tr>
    </tbody>
  </table>
</rh-table>

### Body text

<rh-table>
  <table>
    <thead>
      <tr>
        <th scope="col" data-label="Style">Style</th>
        <th scope="col" data-label="Font family">Font family</th>
        <th scope="col" data-label="Font weight">Font weight</th>
        <th scope="col" data-label="Font size">Font size</th>
        <th scope="col" data-label="Line height">Line height</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td data-label="Style">Body text, 2xl</td>
        <td data-label="Font family">Red Hat Text</td>
        <td data-label="Font weight">Regular (400)</td>
        <td data-label="Font size" class="altered-text">
          <p><s>24 (1.5rem)</s></p>
          <p>Reduces to 20</p>
        </td>
        <td data-label="Line height" class="altered-text">
          <p><s>36 (1.5)</s></p>
          <p>30 (1.5)</p>
        </td>
      </tr>
      <tr>
        <td data-label="Style">Body text, xl</td>
        <td data-label="Font family">Red Hat Text</td>
        <td data-label="Font weight">Regular (400)</td>
        <td data-label="Font size" class="altered-text">
          <p><s>20 (1.25rem)</s></p>
          <p>Reduces to 18</p>
        </td>
        <td data-label="Line height" class="altered-text">
          <p><s>30 (1.5)</s></p>
          <p>27 (1.5)</p>
        </td>
      </tr>
      <tr>
        <td data-label="Style">Body text, lg</td>
        <td data-label="Font family">Red Hat Text</td>
        <td data-label="Font weight">Regular (400)</td>
        <td data-label="Font size" class="altered-text">
          <p><s>18 (1.125rem)</s></p>
          <p>Reduces to 16</p>
        </td>
        <td data-label="Line height" class="altered-text">
          <p><s>27 (1.5)</s></p>
          <p>24 (1.5)</p>
        </td>
      </tr>
      <tr>
        <td data-label="Style">Body text, md</td>
        <td data-label="Font family">Red Hat Text</td>
        <td data-label="Font weight">Regular (400)</td>
        <td data-label="Font size" class="not-altered-text">
          <p>16 (1.0rem)</p>
          <p>Does not change</p>
        </td>
        <td data-label="Line height">24 (1.5)</td>
      </tr>
      <tr>
        <td data-label="Style">Body text, sm</td>
        <td data-label="Font family">Red Hat Text</td>
        <td data-label="Font weight">Regular (400)</td>
        <td data-label="Font size" class="not-altered-text">
          <p>14 (0.875rem)</p>
          <p>Does not change</p>
        </td>
        <td data-label="Line height">21 (1.5)</td>
      </tr>
      <tr>
        <td data-label="Style">Body text, xs</td>
        <td data-label="Font family">Red Hat Text</td>
        <td data-label="Font weight">Regular (400)</td>
        <td data-label="Font size" class="not-altered-text">
          <p>12 (0.75rem)</p>
          <p>Does not change</p>
        </td>
        <td data-label="Line height">18 (1.5)</td>
      </tr>
    </tbody>
  </table>
</rh-table>

### Code text

<rh-table>
  <table>
    <thead>
      <tr>
        <th scope="col" data-label="Style">Style</th>
        <th scope="col" data-label="Font family">Font family</th>
        <th scope="col" data-label="Font weight">Font weight</th>
        <th scope="col" data-label="Font size">Font size</th>
        <th scope="col" data-label="Line height">Line height</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td data-label="Style">Code text, 2xl</td>
        <td data-label="Font family">Red Hat Mono</td>
        <td data-label="Font weight">Regular (400)</td>
        <td data-label="Font size" class="altered-text">
          <p><s>24 (1.5rem)</s></p>
          <p>Reduces to 20</p>
        </td>
        <td data-label="Line height" class="altered-text">
          <p><s>36 (1.5)</s></p>
          <p>30 (1.5)</p>
        </td>
      </tr>
      <tr>
        <td data-label="Style">Code text, xl</td>
        <td data-label="Font family">Red Hat Mono</td>
        <td data-label="Font weight">Regular (400)</td>
        <td data-label="Font size" class="altered-text">
          <p><s>20 (1.25rem)</s></p>
          <p>Reduces to 18</p>
        </td>
        <td data-label="Line height" class="altered-text">
          <p><s>30 (1.5)</s></p>
          <p>27 (1.5)</p>
        </td>
      </tr>
      <tr>
        <td data-label="Style">Code text, lg</td>
        <td data-label="Font family">Red Hat Mono</td>
        <td data-label="Font weight">Regular (400)</td>
        <td data-label="Font size" class="altered-text">
          <p><s>18 (1.125rem)</s></p>
          <p>Reduces to 16</p>
        </td>
        <td data-label="Line height" class="altered-text">
          <p><s>27 (1.5)</s></p>
          <p>24 (1.5)</p>
        </td>
      </tr>
      <tr>
        <td data-label="Style">Code text, md</td>
        <td data-label="Font family">Red Hat Mono</td>
        <td data-label="Font weight">Regular (400)</td>
        <td data-label="Font size" class="not-altered-text">
          <p>16 (1.0rem)</p>
          <p>Does not change</p>
        </td>
        <td data-label="Line height">24 (1.5)</td>
      </tr>
      <tr>
        <td data-label="Style">Code text, sm</td>
        <td data-label="Font family">Red Hat Mono</td>
        <td data-label="Font weight">Regular (400)</td>
        <td data-label="Font size" class="not-altered-text">
          <p>14 (0.875rem)</p>
          <p>Does not change</p>
        </td>
        <td data-label="Line height">21 (1.5)</td>
      </tr>
      <tr>
        <td data-label="Style">Code text, xs</td>
        <td data-label="Font family">Red Hat Mono</td>
        <td data-label="Font weight">Regular (400)</td>
        <td data-label="Font size" class="not-altered-text">
          <p>12 (0.75rem)</p>
          <p>Does not change</p>
        </td>
        <td data-label="Line height">18 (1.5)</td>
      </tr>
    </tbody>
  </table>
</rh-table>

### Title

<rh-table>
  <table>
    <thead>
      <tr>
        <th scope="col" data-label="Style">Style</th>
        <th scope="col" data-label="Font family">Font family</th>
        <th scope="col" data-label="Font weight">Font weight</th>
        <th scope="col" data-label="Font size">Font size</th>
        <th scope="col" data-label="Line height">Line height</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td data-label="Style">Title, lg</td>
        <td data-label="Font family">Red Hat Text</td>
        <td data-label="Font weight">Regular (400)</td>
        <td data-label="Font size" class="altered-text">
          <p><s>24 (1.5rem)</s></p>
          <p>Reduces to 20</p>
        </td>
        <td data-label="Line height" class="altered-text">
          <p><s>36 (1.5)</s></p>
          <p>30 (1.5)</p>
        </td>
      </tr>
      <tr>
        <td data-label="Style">Title, sm</td>
        <td data-label="Font family">Red Hat Text</td>
        <td data-label="Font weight">Regular (400)</td>
        <td data-label="Font size" class="not-altered-text">
          <p>16 (1.0rem)</p>
          <p>Does not change</p>
        </td>
        <td data-label="Line height">24 (1.5)</td>
      </tr>
    </tbody>
  </table>
</rh-table>

### Blockquote

<rh-table>
  <table>
    <thead>
      <tr>
        <th scope="col" data-label="Style">Style</th>
        <th scope="col" data-label="Font family">Font family</th>
        <th scope="col" data-label="Font weight">Font weight</th>
        <th scope="col" data-label="Font size">Font size</th>
        <th scope="col" data-label="Line height">Line height</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td data-label="Style">Blockquote, lg</td>
        <td data-label="Font family">Red Hat Display</td>
        <td data-label="Font weight">Regular (400)</td>
        <td data-label="Font size" class="altered-text">
          <p><s>28 (1.75rem)</s></p>
          <p>Reduces to 24</p>
        </td>
        <td data-label="Line height" class="altered-text">
          <p><s>36.4 (1.3)</s></p>
          <p>31.2 (1.3)</p>
        </td>
      </tr>
      <tr>
        <td data-label="Style">Blockquote, sm</td>
        <td data-label="Font family">Red Hat Display</td>
        <td data-label="Font weight">Regular (400)</td>
        <td data-label="Font size" class="altered-text">
          <p><s>20 (1.25rem)</s></p>
          <p>Reduces to 18</p>
        </td>
        <td data-label="Line height" class="altered-text">
          <p><s>26 (1.3)</s></p>
          <p>23.4 (1.3)</p>
        </td>
      </tr>
    </tbody>
  </table>
</rh-table>

<uxdot-feedback>
  <h2>Foundations</h2>
  <p>To learn how to use our other foundations in your designs, visit the <a href="/foundations">foundations</a> section.</p>
</uxdot-feedback>