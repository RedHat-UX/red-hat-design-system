---
title: Examples
heading: Logo wall
sidenavTitle: Logo wall
layout: layouts/pages/pattern.njk
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

<script type="module" data-helmet>
  import '@rhds/elements/lib/elements/rh-context-picker/rh-context-picker.js';
</script>

<link rel="stylesheet" data-helmet href="/styles/samp.css">
<link rel="stylesheet" data-helmet href="../logo-wall-lightdom.css">

<uxdot-pattern src="./patterns/1x1-grid.html"
               css-src="./logo-wall-lightdom.css"
               target="example-1x1-grid">
  <h2 slot="heading">Within a promo band (bordered)</h2>
</uxdot-pattern>


<uxdot-pattern src="./patterns/1x1-grid-flat.html"
               css-src="./logo-wall-lightdom.css"
               target="example-1x1-grid-flat">
  <h2 slot="heading">Within a promo band (borderless)</h2>
</uxdot-pattern>

<uxdot-pattern src="./patterns/2x2-grid.html"
               css-src="./logo-wall-lightdom.css"
               target="example-2x2-grid">
  <h2 slot="heading">With 2x2 grid</h2>
</uxdot-pattern>

<uxdot-pattern src="./patterns/2x3-grid.html"
               css-src="./logo-wall-lightdom.css"
               target="example-2x3-grid">
  <h2 slot="heading">With 2x3 grid</h2>
</uxdot-pattern>

{% include 'partials/component/feedback.11ty.cjs' %}
