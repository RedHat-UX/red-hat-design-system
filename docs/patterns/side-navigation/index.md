---
title: Overview
heading: Side navigation
sidenavTitle: Side navigation
layout: layouts/pages/pattern.njk
order: 50
tags:
  - pattern
  - sideNavigationPatterns
subnav:
  collection: sideNavigationPatterns
  order: 1
---

## Overview

A side navigation pattern that pairs `<rh-drawer>` with `<rh-navigation-vertical>` to create a responsive sidebar for documentation sites and web applications. At wide viewports the navigation sits inline alongside the page content; at narrow viewports it collapses into a toggleable overlay.

## When to use

- Documentation sites with hierarchical page structures
- Web applications that need persistent navigation alongside content
- Any layout that benefits from a collapsible sidebar

## How it works

Slot an `<rh-navigation-vertical>` into the drawer's `body` slot. Use the `flow` variant so the drawer participates in the parent grid layout above the breakpoint and becomes a fixed overlay below it. An external trigger button (hidden at wide viewports) toggles the drawer at narrow widths.

```html
<rh-drawer variant="flow" trigger-id="nav-trigger" open>
  <rh-navigation-vertical slot="body">
    <rh-navigation-link href="/" current-page>Home</rh-navigation-link>
    <rh-navigation-vertical-list summary="Section">
      <rh-navigation-link href="/page">Page</rh-navigation-link>
    </rh-navigation-vertical-list>
  </rh-navigation-vertical>
</rh-drawer>
```

<script type="module" data-helmet>
  import '@rhds/elements/rh-drawer/rh-drawer.js';
  import '@rhds/elements/rh-navigation-vertical/rh-navigation-vertical.js';
  import '@rhds/elements/rh-navigation-link/rh-navigation-link.js';
  import '@rhds/elements/lib/elements/rh-context-picker/rh-context-picker.js';
</script>
