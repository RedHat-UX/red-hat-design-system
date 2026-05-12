---
title: Overview
heading: Stacked navigation
sidenavTitle: Stacked navigation
layout: layouts/pages/pattern.njk
order: 55
tags:
  - pattern
  - stackedNavigationPatterns
subnav:
  collection: stackedNavigationPatterns
  order: 1
---

## Overview

A full-width navigation stack combining `<rh-navigation-primary>` and
`<rh-navigation-secondary>`. The primary navigation provides global site links
and dropdown menus. The secondary navigation sits below it with product-specific
links and becomes sticky as the user scrolls.

## When to use

- Web properties that need both a primary navigation bar and a product-level navigation bar
- Pages where the secondary navigation should remain accessible while scrolling
- Layouts that require z-index coordination between stacked sticky elements

## How it works

The secondary nav uses `position: sticky` to pin itself to the top of the
viewport on scroll. A CSS `scroll-state(stuck: top)` container query
detects when the secondary has stuck and lowers the primary navigation's z-index,
preventing its dropdown panels from overlapping the sticky secondary.

For browsers without `scroll-state()` support, an `IntersectionObserver`
watches a sentinel element between the two navigations and toggles the same
`--rh-navigation-primary-z-index` custom property.

```html rhcodeblock
<rh-navigation-primary role="navigation">
  <!-- global nav items -->
</rh-navigation-primary>

<rh-navigation-secondary>
  <a href="#" slot="logo">Product Name</a>
  <ul slot="nav">
    <li><a href="#">Link</a></li>
  </ul>
</rh-navigation-secondary>
```

<script type="module" data-helmet>
  import '@rhds/elements/rh-navigation-primary/rh-navigation-primary.js';
  import '@rhds/elements/rh-navigation-secondary/rh-navigation-secondary.js';
</script>
