---
title: Overview
heading: Logo wall
sidenavTitle: Logo wall
layout: layouts/pages/pattern.njk
order: 75
tags:
  - pattern
  - logowallPatterns
subnav:
  collection: logowallPatterns
  order: 1
---

<script type="module" data-helmet>
  import '@rhds/elements/lib/elements/rh-context-picker/rh-context-picker.js';
</script>

## Overview

A logo wall is a visual arrangement of logos representing various brands, companies, or organizations. It’s often used to showcase different partners or products within a particular ecosystem.

## Sample Patterns

<div class="grid">
  <div>
    <h3>Bordered</h3>
    <uxdot-example width-adjustment="1010px">
      <img src="./overview-sample-bordered.avif"
      alt="An example of a bordered logo wall with 6 logos each inside of a bordered container."
      width="1020"
      height="99"
      loading="lazy">
    </uxdot-example>
  </div>
  <div>
    <h3>Borderless</h3>
    <uxdot-example width-adjustment="1010px">
      <img src="./overview-sample-borderless.avif"
      alt="An example of a borderless logo wall with 6 logos."
      width="1113"
      height="110"
      loading="lazy">
    </uxdot-example>
  </div>
</div>

## When to use

Use a logo wall pattern when you need to display multiple logos in a group.

{% renderFile './docs/_includes/partials/component/feedback.11ty.ts' %}
