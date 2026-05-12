---
title: Examples
heading: Side navigation
sidenavTitle: Side navigation
layout: layouts/pages/pattern.njk
tags:
  - sideNavigationPatterns
subnav:
  collection: sideNavigationPatterns
  order: 2
---

<uxdot-pattern src="./patterns/side-navigation.html">
  <h2 slot="heading">Side navigation</h2>
  <p>A responsive sidebar navigation using <code>&lt;rh-drawer&gt;</code> with
  the <code>flow</code> variant and <code>&lt;rh-navigation-vertical&gt;</code>
  slotted into the panel body. At wide viewports the navigation sits inline; at
  narrow viewports it collapses into a fixed overlay toggled by an external
  button.</p>
</uxdot-pattern>
