---
title: Overview
heading: Logo wall
sidenavTitle: Logo wall
layout: layouts/pages/pattern.njk
hasToc: true
order: 20
tags:
  - pattern
  - logowallPatterns
subnav:
  collection: logowallPatterns
  order: 1
---

<script type="module">
  import '@rhds/elements/lib/elements/rh-context-picker/rh-context-picker.js';
</script>

## Overview

A logo wall is a visual arrangement of logos representing various brands, companies, or organizations. It’s often used to showcase different partners or products within a particular ecosystem.

## Sample Pattern

<div class="grid">
  <uxdot-example>
    <img src="./overview-sample-bordered.png"
         alt="An example of a bordered logo wall with 6 logos each inside of a bordered container.">
  </uxdot-example>

  <uxdot-example>
    <img src="./overview-sample-borderless.png"
         alt="An example of a borderless logo wall with 6 logos.">
  </uxdot-example>
</div>

## When to use

  - Use a logo wall pattern when you need to display multiple logos in a group. 

## Responsive sizing

Each logo is in a container. The size of each container and logo is determined by the designer but should abide by best practices. Designers should ensure that all logos are of a similar size and proportionate to each other. Logos are centered vertically and horizontally within the container.

Bordered:
  - Logo sizes may decrease on smaller screens, however the container will retain 16px padding on all sides. Logos are horizontally and vertically aligned.

Borderless:
  - Logo sizes may decrease on smaller screens. Logo containers can adjust margins and padding for smaller screens. Logos are horizontally and vertically aligned.


{% include 'partials/component/feedback.html' %}
