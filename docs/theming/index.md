---
title: Overview
order: 1
hasToc: false
---
<style data-helmet>
  .card-grid {
    display: grid;
    gap: var(--rh-space-2xl, 32px);
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  }
</style>

<link rel="stylesheet" data-helmet href="/assets/packages/@rhds/elements/elements/rh-tile/rh-tile-lightdom.css">

<script type="module" data-helmet>
  import '@rhds/elements/rh-cta/rh-cta.js';
  import '@rhds/elements/rh-tile/rh-tile.js';
</script>

The Red Hat Design System features a powerful, flexible, and easy-to-use theming system.

## What is theming?

We use theming to modify our elements and patterns so they fit a specific visual style. Themes can be applied to an element, a page, or a UI. A common theming use case is dark theme or dark mode.

## How does it work?

Our design system includes built-in branded and accessible defaults, so all you need to do if you want to create digital experiences that feel like Red Hat is to write a few lines of HTML.

When we want to flex our design muscles, our elements include powerful theming primitives in the form of **slots**, **design tokens**, and **CSS shadow parts**. These primitives enable you to theme a single element, section, page, or entire app UI.

<nav class="card-grid" aria-label="Theming pages">
  <rh-tile>
    <img slot="image" src="/assets/theming/color-palettes.svg" alt="">
    <h2 slot="headline">
      <a href="color-palettes/">Color Palettes</a>
    </h2>
    <p>Design system color palettes integrate tokens with elements and
       patterns to produce striking layouts</p>
  </rh-tile>

  <rh-tile>
    <img slot="image" src="/assets/theming/customizing.svg" alt="">
    <h2 slot="headline">
      <a href="customizing/">Customizing</a>
    </h2>
    <p>How named design tokens and semantically-defined color palettes open up
       theming possibilities</p>
  </rh-tile>

  <rh-tile>
    <img slot="image" src="/assets/theming/developers.svg" alt="">
    <h2 slot="headline">
      <a href="developers/">Developers</a>
    </h2>
    <p>Tools and techniques to help you develop custom themes</p>
  </rh-tile>
</nav>
