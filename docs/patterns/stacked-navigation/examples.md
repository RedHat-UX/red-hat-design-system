---
title: Examples
heading: Stacked navigation
sidenavTitle: Stacked navigation
layout: layouts/pages/pattern.njk
tags:
  - stackedNavigationPatterns
subnav:
  collection: stackedNavigationPatterns
  order: 2
---

<script type="module" data-helmet>
  import '@rhds/elements/rh-navigation-primary/rh-navigation-primary.js';
  import '@rhds/elements/rh-navigation-secondary/rh-navigation-secondary.js';
  import '@rhds/elements/rh-cta/rh-cta.js';
  import '@rhds/elements/rh-avatar/rh-avatar.js';
  import '@rhds/elements/rh-button/rh-button.js';
</script>

<uxdot-pattern src="./patterns/stacked-navigation.html" viewport>
  <h2 slot="heading">Stacked navigation</h2>
  <p>A primary navigation stacked above a sticky secondary navigation.
  Scroll within the viewport to see the secondary navigation stick to the top
  while the primary navigations's z-index adjusts to prevent dropdown conflicts.
  Use the viewport controls to preview responsive breakpoints.</p>
</uxdot-pattern>
