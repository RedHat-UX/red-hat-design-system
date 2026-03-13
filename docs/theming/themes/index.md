---
layout: layouts/pages/has-toc.njk
title: Overview
heading: Themes
sidenavTitle: Themes
permalink: /theming/themes/index.html
tags:
  - theming
  - themes
subnav:
  collection: sortedThemes
  order: 00
order: 10
---
<link rel="stylesheet"
      data-helmet
      href="../color-palettes.css">

<script type="module" data-helmet>
  import '@uxdot/elements/uxdot-pattern.js';
  import '@rhds/elements/lib/elements/rh-context-demo/rh-context-demo.js';
  import '@rhds/elements/rh-accordion/rh-accordion.js';
  import '@rhds/elements/rh-audio-player/rh-audio-player.js';
  import '@rhds/elements/rh-blockquote/rh-blockquote.js';
  import '@rhds/elements/rh-button/rh-button.js';
  import '@rhds/elements/rh-card/rh-card.js';
  import '@rhds/elements/rh-cta/rh-cta.js';
  import '@rhds/elements/rh-pagination/rh-pagination.js';
  import '@rhds/elements/rh-switch/rh-switch.js';
  import '@rhds/elements/rh-tabs/rh-tabs.js';
  import '@rhds/elements/rh-tag/rh-tag.js';
  import '@rhds/elements/rh-tile/rh-tile.js';
//   document.getElementById('bordeaux-page-switch').addEventListener('change', function() {
//     document.documentElement.classList.toggle('theme-bordeaux', this.checked);
//   });
</script>

<style data-helmet>
  /* .theme-bordeaux {
    --bordeaux-darkest: #19050a;
    --bordeaux-darker: #260710;
    --bordeaux-dark: #330915;
    --bordeaux-brand-dark: #7f1734;
    --bordeaux-brand-light: #d52757;
    --bordeaux-light: #a55d71;
    --bordeaux-lighter: #d9b9c2;
    --bordeaux-lightest: #f2e8eb;
    --rh-color-surface-darkest: var(--bordeaux-darkest);
    --rh-color-surface-darker: var(--bordeaux-darker);
    --rh-color-surface-dark: var(--bordeaux-dark);
    --rh-color-surface-light: var(--bordeaux-light);
    --rh-color-surface-lighter: var(--bordeaux-lighter);
    --rh-color-surface-lightest: var(--bordeaux-lightest);

    --rh-color-border-interactive: light-dark(
      var(--bordeaux-darkest),
      var(--bordeaux-lightest)
    );

    --rh-color-interactive-primary-default: light-dark(
      var(--bordeaux-darker),
      var(--bordeaux-lighter)
    );

    --rh-color-interactive-primary-hover: light-dark(
      var(--bordeaux-dark),
      var(--bordeaux-light)
    );

    --rh-color-interactive-primary-focus: light-dark(
      var(--bordeaux-dark),
      var(--bordeaux-light)
    );

    --rh-color-interactive-primary-active: light-dark(
      var(--bordeaux-dark),
      var(--bordeaux-light)
    );

    --rh-color-border-subtle: light-dark(
      var(--bordeaux-darker),
      var(--bordeaux-lighter)
    );

    --rh-color-icon-primary: light-dark(
      var(--bordeaux-brand-dark),
      var(--bordeaux-brand-light)
    );
  } */
</style>

Overview content



{% renderFile './docs/_includes/partials/component/feedback.11ty.ts' %}
