---
title: Overview
heading: Tile
sidenavTitle: Tile
layout: layouts/pages/pattern.njk
hasToc: true
order: 20
tags:
  - pattern
  - tilePatterns
subnav:
  collection: tilePatterns
  order: 1
---

---
title: Tile
layout: layouts/pages/basic.njk
hasToc: true
order: 120
tags:
  - pattern
importElements:
---

<link rel="stylesheet" data-helmet href="/assets/packages/@rhds/elements/elements/rh-table/rh-table-lightdom.css">
<link rel="stylesheet" data-helmet href="/styles/samp.css">
<script type="module" data-helmet>
  import '@rhds/elements/rh-tile/rh-tile.js';
  import '@rhds/elements/rh-cta/rh-cta.js';
  import '@rhds/elements/rh-surface/rh-surface.js';
  import '@rhds/elements/rh-code-block/rh-code-block.js';
</script>

<style data-helmet>
  .grid + rh-cta {
    margin-block-start: var(--rh-space-lg);
  }

  rh-tile {
    width: 320px;
  }

  rh-tile.accented-tile {
    position: relative;
    overflow: hidden;
    border-radius: var(--rh-border-radius-default);
  }

  rh-tile.accented-tile::before {
    content: '';
    position: absolute;
    z-index: 2;
    display: block;
    inset-block-start: 0;
    inset-inline: 0;
    border-block-start-color: var(--rh-color-brand-red);
    border-block-start-width: var(--rh-border-width-lg);
    border-block-start-style: solid;
    pointer-events: none;
  }
</style>

## Overview

Tiles are flexible layouts with clickable and contained surfaces.

