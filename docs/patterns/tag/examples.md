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

## Tag in a button

You can use tag within the `<button>` HTML element to make it trigger an action, like revealing a popover.

<uxdot-pattern src="./patterns/tag-in-button.html">
</uxdot-pattern>

### Interaction states

#### Hover

If a tag is being used as a button, the border width changes to `--rh-border-width-md` on hover.

<div class="grid sm-two-columns">
  <uxdot-example color-palette="lightest">
    <img src="../tag-in-button-style-interaction-states-hover-scheme-light.svg"
        alt="A row of light scheme tag variants used in buttons and showing the difference between the default state and the hover state"
        width="448"
        height="32">
  </uxdot-example>
  <uxdot-example color-palette="darkest">
    <img src="../tag-in-button-style-interaction-states-hover-scheme-dark.svg"
        alt="A row of dark scheme tag variants used in buttons and showing the difference between the default state and the hover state"
        width="448"
        height="32">
  </uxdot-example>
</div>

#### Focus and active

A focus ring wraps around the text and icon in both focus and active states. Hover state styles are retained.

<div class="grid sm-two-columns">
  <uxdot-example color-palette="lightest">
    <img src="../tag-in-button-style-interaction-states-focus-active-scheme-light.svg"
        alt="A row of light scheme tag variants used in buttons and showing showing the difference between the default state and the focus/active states"
        width="448"
        height="29">
  </uxdot-example>
  <uxdot-example color-palette="darkest">
    <img src="../tag-in-button-style-interaction-states-focus-active-scheme-dark.svg"
        alt="A row of dark scheme tag variants used in buttons and showing the difference between the default state and the focus/active states"
        width="448"
        height="29">
  </uxdot-example>
</div>

