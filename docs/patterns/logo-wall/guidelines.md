---
title: Guidelines
heading: Logo wall
sidenavTitle: Logo wall
layout: layouts/pages/pattern.njk
hasToc: true
order: 20
tags:
  - logowallPatterns
subnav:
  collection: logowallPatterns
  order: 3
---

<script type="module" src="/assets/javascript/elements/uxdot-best-practice.js"></script>

## Usage

Use a logo wall when you need to display multiple Red Hat and/or partner logos in a group. 

## Variants

A logo wall is available in two styles: bordered and borderless. Both variants can be either interactive or static. However, it is recommended to use the bordered variant for interactive logos and the borderless variant for static logos.

### Bordered

<uxdot-example>
  <img src="../guidelines-variants-bordered.png"
       alt="An example of a bordered logo wall with 6 logos each inside of a bordered container.">
</uxdot-example>

### Borderless

<uxdot-example>
  <img src="../guidelines-variants-borderless.png"
       alt="An example of a borderless logo wall with 6 logos.">
</uxdot-example>

## Layout

Ensure that all logos are at a size in which they are clearly legible. Use your best judgment to ensure that logos are neither too large nor too small and are proportionate to other elements on the page.

Here are some guidelines to follow if you’re unsure:
 - On desktop, there should be a maximum of 6 logos in a row.
 - On mobile, there should be a maximum of 2 logos in a row.

### Responsive sizing

Each logo is in a container. The size of each container and logo is determined by the designer but should abide by best practices. Designers should ensure that all logos are of a similar size and proportionate to each other. Logos are centered vertically and horizontally within the container.

### Bordered
Logo sizes may decrease on smaller screens, however the container will retain 16px padding on all sides. Logos are horizontally and vertically aligned.

### Borderless
Logo sizes may decrease on smaller screens. Logo containers can adjust margins and padding for smaller screens. Logos are horizontally and vertically aligned.

## Best practices

### Color contrast

When displaying our partners' logos, it is essential to respect their brand identity by ensuring that their logos meet accessibility standards.

<div class="grid sm-two-columns">
  <uxdot-best-practice variant="do">
    <uxdot-example slot="image" alignment="left">
      <img src="../guidelines-bestpractices-contrast-do.svg"
           alt="Examples of two Red Hat logos in dark and light themes against background colors that ensure enough color contrast.">
    </uxdot-example>
    <p>Ensure that the color contrast between each logo and the background meets accessibility standards.</p>
  </uxdot-best-practice>

  <uxdot-best-practice variant="dont">
    <uxdot-example slot="image" alignment="left">
      <img src="../guidelines-bestpractices-contrast-dont.svg"
           alt="Examples of two Red Hat logos in dark and light themes against background colors that do not provide enough contrast.">
    </uxdot-example>
    <p>Place a logo over a background that does not meet accessibility standards.</p>
  </uxdot-best-practice>
</div>

### Logo sizes

<div class="grid sm-two-columns">
  <uxdot-best-practice variant="do">
    <uxdot-example slot="image" alignment="left">
      <img src="../guidelines-bestpractices-sizing-do.png"
           alt="Example of a borderless logo wall with similarly sized logos that represent each partner evenly.">
    </uxdot-example>
    <p>Because the size and shape of our partners’ logos can vary, make sure to size them similarly so that each partner is evenly represented.</p>  
  </uxdot-best-practice>

  <uxdot-best-practice variant="dont">
    <uxdot-example slot="image" alignment="left">
      <img src="../guidelines-bestpractices-sizing-dont.png"
           alt="Example of a borderless logo wall in which the sizes of logos varies and disproportionately represents each partner.">
    </uxdot-example>
    <p>Each logo does not need to be the same height or width.</p>
  </uxdot-best-practice>
</div>

### Alignment

<div class="grid sm-two-columns">
  <uxdot-best-practice variant="do">
    <uxdot-example slot="image" alignment="left">
      <img src="../guidelines-bestpractices-align-do.png"
           alt="Example of a borderless logo wall in which each logo is horizontally and vertically aligned in its container.">
    </uxdot-example>
    <p>Align logos vertically and horizontally within a container.</p>
  </uxdot-best-practice>

  <uxdot-best-practice variant="dont">
    <uxdot-example slot="image" alignment="left">
      <img src="../guidelines-bestpractices-align-dont.png"
           alt="Example of a borderless logo wall in which each logo is aligned to the bottom of the container.">
    </uxdot-example>
    <p>Don’t align all logos to the top or bottom of a container.</p>
  </uxdot-best-practice>
</div>

{% include 'partials/component/feedback.html' %}
