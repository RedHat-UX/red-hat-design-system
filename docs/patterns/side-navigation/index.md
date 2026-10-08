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

A side navigation pattern that pairs `<rh-drawer>` with `<rh-navigation-vertical>` to create a sidebar for documentation sites and web applications. The drawer automatically responds to container width — appearing inline at wide widths and switching to overlay at narrow widths.

## When to use

- Documentation sites with hierarchical page structures
- Web applications that need persistent navigation alongside content
- Any layout that benefits from a collapsible sidebar

## How it works

Slot an `<rh-navigation-vertical>` into the drawer's default slot. Set `container-type: inline-size` on the layout wrapper so the drawer can detect container width and switch between inline and overlay modes automatically.

<rh-code-block highlighting="client" language="html" line-numbers>
  <script type="text/html">
<div id="layout">
  <rh-drawer id="side-nav" trigger-id="nav-trigger" open>
    <rh-navigation-vertical>
      <rh-navigation-link href="/" current-page>Home</rh-navigation-link>
      <rh-navigation-vertical-list summary="Section">
        <rh-navigation-link href="/page">Page</rh-navigation-link>
      </rh-navigation-vertical-list>
    </rh-navigation-vertical>
  </rh-drawer>
  <button id="nav-trigger" aria-label="Open navigation">☰</button>
  <div id="main">Page content</div>
</div>
<style>
  #layout {
    container: layout / inline-size;
    display: grid;
    grid-template-columns: auto 1fr;
  }
</style>
  </script>
</rh-code-block>

<script type="module" data-helmet>
  import '@rhds/elements/rh-code-block/rh-code-block.js';
  import '@rhds/elements/rh-drawer/rh-drawer.js';
  import '@rhds/elements/rh-navigation-vertical/rh-navigation-vertical.js';
  import '@rhds/elements/rh-navigation-link/rh-navigation-link.js';
  import '@rhds/elements/lib/elements/rh-context-picker/rh-context-picker.js';
</script>
