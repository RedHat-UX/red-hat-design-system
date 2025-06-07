---
title: Examples
heading: Tag
layout: layouts/pages/pattern.njk
tags:
  - tagPatterns
subnav:
  collection: tagPatterns
  order: 2
---

<script type="module" data-helmet>
  import '@rhds/elements/lib/elements/rh-context-picker/rh-context-picker.js';
  import '@rhds/elements/rh-card/rh-card.js';
  import '@rhds/elements/rh-code-block/rh-code-block.js';
  import '@rhds/elements/rh-cta/rh-cta.js';
  import '@rhds/elements/rh-surface/rh-surface.js';
  import '@rhds/elements/rh-tag/rh-tag.js';
</script>

<link rel="stylesheet" href="/path/to/rh-code-block/rh-code-block-lightdom.css">

## Tag as a button

You can use tag within the `<button>` HTML element to make it trigger an action, like revealing a popover.

<uxdot-pattern src="./patterns/tag-as-button.html">
</uxdot-pattern>

### Interaction states

#### Hover

If a tag is being used as a button, the border width changes to `--rh-border-width-md` on hover.

<!-- add image of hover state -->

#### Focus and active

<!-- add image of hover state -->

