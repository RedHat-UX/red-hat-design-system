---
title: Examples
heading: Logo wall
sidenavTitle: Logo wall
layout: layouts/pages/pattern.njk
hasToc: true
order: 20
tags:
  - logowallPatterns
subnav:
  collection: logowallPatterns
  order: 4
importElements:
  - rh-cta
  - rh-surface
---

<script type="module">
  import '@rhds/elements/lib/elements/rh-context-picker/rh-context-picker.js';
</script>

<link rel="stylesheet" href="{{ '/styles/samp.css' | url }}">

<!-- TODO: Fix this path and reference the file from logo-wall/rh-logo-wall-lightdom.css instead of styles directory-->
<link rel="stylesheet" href="{{ '/styles/rh-logo-wall-lightdom.css' | url }}" />

## Within a promo band (bordered)
  {% include './patterns/1x1-grid.html' %}

## Within a promo band (borderless)
  {% include './patterns/1x1-grid-flat.html' %}

## With 2x2 grid
  {% include './patterns/2x2-grid.html' %}

## With 2x3 grid
  {% include './patterns/2x3-grid.html' %}


{% include 'partials/component/feedback.html' %}