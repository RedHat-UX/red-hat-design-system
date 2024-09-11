---
title: Examples
heading: Tile
sidenavTitle: Tile
layout: layouts/pages/pattern.njk
hasToc: true
order: 20
tags:
  - tilePatterns
subnav:
  collection: tilePatterns
  order: 3
---
<script type="module" data-helmet>
  import '@rhds/elements/lib/elements/rh-context-picker/rh-context-picker.js';
  import '@rhds/elements/rh-card/rh-card.js';
  import '@rhds/elements/rh-cta/rh-cta.js';
  import '@rhds/elements/rh-surface/rh-surface.js';
  import '@rhds/elements/rh-avatar/rh-avatar.js';
  import '@rhds/elements/rh-tile/rh-tile.js';
  import '@rhds/elements/rh-accordion/rh-accordion.js';
  import '@rhds/elements/rh-blockquote/rh-blockquote.js';
</script>

<link rel="stylesheet" data-helmet href="/assets/packages/@rhds/elements/elements/rh-table/rh-table-lightdom.css">
<link rel="stylesheet" data-helmet href="/styles/samp.css">

## Accented tile

The accented tile pattern should be used to draw attention to a specifc tile or 
set of tiles. Be careful not to apply the accented tile pattern to all tiles 
within a page, otherwise the accent effect will be lost. After all, "if 
everything is special, then nothing is special."

{% uxdotPattern %}{% include './patterns/accented-tile.html' %}{% enduxdotPattern %}

<rh-cta href="/elements/tile/demos/#demo-accented-tiles">View accented tile demo</rh-cta>
