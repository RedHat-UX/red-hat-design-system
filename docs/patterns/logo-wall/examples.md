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
---

<script type="module" data-helmet>
  import '@rhds/elements/rh-surface/rh-surface.js';
  import '@rhds/elements/rh-cta/rh-cta.js';
  import '@rhds/elements/lib/elements/rh-context-picker/rh-context-picker.js';
</script>

<link rel="stylesheet" data-helmet href="/styles/samp.css">
<link rel="stylesheet" data-helmet href="../logo-wall-lightdom.css">

<uxdot-pattern src="./patterns/1x1-grid.html"
               target="example-1x1-grid">
  <h2 slot="heading">Within a promo band (bordered)</h2>
</uxdot-pattern>


<uxdot-pattern src="./patterns/1x1-grid-flat.html"
               target="example-1x1-grid-flat">
  <h2 slot="heading">Within a promo band (borderless)</h2>
</uxdot-pattern>

<uxdot-pattern src="./patterns/2x2-grid.html"
               target="example-2x2-grid">
  <h2 slot="heading">With 2x2 grid</h2>
</uxdot-pattern>

<uxdot-pattern src="./patterns/2x3-grid.html"
               target="example-2x3-grid">
  <h2 slot="heading">With 2x3 grid</h2>
</uxdot-pattern>

{% renderFile './docs/_includes/partials/component/feedback.11ty.ts' %}
