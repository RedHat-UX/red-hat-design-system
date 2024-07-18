---
title: Tile
layout: layouts/pages/basic.njk
hasToc: true
order: 120
tags:
  - pattern
importElements:
  - rh-tile
  - rh-cta
  - rh-surface
  - rh-code-block
---

<link rel="stylesheet" href="{{ '/assets/packages/@rhds/elements/elements/rh-table/rh-table-lightdom.css' | url }}">
<link rel="stylesheet" href="{{ '/styles/samp.css' | url }}">

<style>
  .sample-code rh-code-block + rh-cta {
    margin-block-start: var(--rh-space-lg, 16px);
  }

  rh-tile {
    width: 320px;
  }

  rh-tile.accented-tile {
    position: relative;
    overflow: hidden;
    border-radius: var(--rh-border-radius-default, 3px);
  }

  rh-tile.accented-tile::before {
    content: '';
    position: absolute;
    z-index: 2;
    display: block;
    inset-block-start: 0;
    inset-inline: 0;
    border-block-start-color: var(--rh-color-brand-red-on-light, #ee0000);
    border-block-start-width: var(--rh-border-width-lg, 3px);
    border-block-start-style: solid;
    pointer-events: none;
  }
</style>

## Overview

Tiles are flexible layouts with clickable and contained surfaces.


## Accented tile

The accented tile pattern should be used to draw attention to a specifc tile or set of tiles. Be careful not to apply the accented tile pattern to all tiles within a page, otherwise the accent effect will be lost. After all, "if everything is special, then nothing is special."

<div id="rhds-help-grid" class="grid sm-two-columns">
  <div class="sample">
    <h3>Example</h3>
    <uxdot-example width-adjustment="752px">
      <rh-tile class="accented-tile">
        <h2 slot="headline"><a href="#top">Link</a></h2>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </rh-tile>
    </uxdot-example>
  </div>
  <div class="sample-code">
    <h3>CSS</h3>
    <rh-code-block>
      <script type="text/css">rh-tile.accented-tile {
  position: relative;
  overflow: hidden;
  border-radius: var(--rh-border-radius-default, 3px);
}
rh-tile.accented-tile::before {
  content: '';
  position: absolute;
  z-index: 2;
  display: block;
  inset-block-start: 0;
  inset-inline: 0;
  border-block-start-color: var(--rh-color-brand-red-on-light, #ee0000);
  border-block-start-width: var(--rh-border-width-lg, 3px);
  border-block-start-style: solid;
  pointer-events: none;
}</script>
    </rh-code-block>
    <rh-cta><a href="/elements/tile/demos/#demo-accented-tiles">View accented tile demo</a></rh-cta>
  </div>
</div>
