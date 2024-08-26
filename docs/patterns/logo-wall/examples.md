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

<link rel="stylesheet" href="/styles/samp.css">
<link rel="stylesheet" href="../logo-wall-lightdom.css">

## Within a promo band (bordered)

{% uxdotPattern stacked=true, css='./logo-wall-lightdom.css' %}
{% include './patterns/1x1-grid.html' %}
{% enduxdotPattern %}

## Within a promo band (borderless)
{% uxdotPattern stacked=true, css='./logo-wall-lightdom.css' %}
{% include './patterns/1x1-grid-flat.html' %}
{% enduxdotPattern %}

## With 2x2 grid
{% uxdotPattern stacked=true, css='./logo-wall-lightdom.css' %}
{% include './patterns/2x2-grid.html' %}
{% enduxdotPattern %}

## With 2x3 grid
{% uxdotPattern stacked=true, css='./logo-wall-lightdom.css' %}
{% include './patterns/2x3-grid.html' %}
{% enduxdotPattern %}

{% include 'partials/component/feedback.html' %}
