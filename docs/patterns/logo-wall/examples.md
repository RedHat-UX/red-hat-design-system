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

## Within a promo band (bordered)
  {% include './patterns/bordered-single-row.html' %}

## Within a promo band (borderless)
  {% include './patterns/borderless-single-row.html' %}

## With 2x2 grid
  {% include './patterns/bordered-two-by-two.html' %}

## With 2x3 grid
  {% include './patterns/bordered-two-by-three.html' %}


{% include 'partials/component/feedback.html' %}