---
title: Overview
order: 1
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

Red Hat's Design System comes with a powerful, flexible, and easy-to-use
theming system. Design system elements come with branded, accessible defaults 
built-in, so that all you need to do to create quintessentially Red Hat 
experiences is write some HTML. For those occasions when we want to flex our 
design muscles, our elements come with powerful theming primitives in the form 
of **slots**, **design tokens**, and **CSS shadow parts** to enable you to theme 
a single element, a section, a page, or an entire app.

<nav class="card-grid" aria-label="Theming pages">
  <rh-tile>
    <svg slot="image" viewBox="0 0 296 171">
      <rect fill="#0066CC" fill-opacity="0.1"
            stroke="#0066CC" stroke-width="2" stroke-dasharray="1 1"
            clip-path="fill-box"
            width="100%" height="100%" />
    </svg>
    <h2 slot="headline">
      <a href="color-palettes/">Color Palettes</a>
    </h2>
    <p>Design system color palettes integrate tokens with elements and
       patterns to produce striking layouts</p>
  </rh-tile>

  <rh-tile>
    <svg slot="image" viewBox="0 0 296 171">
      <rect fill="#0066CC" fill-opacity="0.1"
            stroke="#0066CC" stroke-width="2" stroke-dasharray="1 1"
            clip-path="fill-box"
            width="100%" height="100%" />
    </svg>
    <h2 slot="headline">
      <a href="customizing/">Customizing</a>
    </h2>
    <p>How named design tokens and semantically-defined color palettes open up
       theming possibilities</p>
  </rh-tile>

  <rh-tile>
    <svg slot="image" viewBox="0 0 296 171">
      <rect fill="#0066CC" fill-opacity="0.1"
            stroke="#0066CC" stroke-width="2" stroke-dasharray="1 1"
            clip-path="fill-box"
            width="100%" height="100%" />
    </svg>
    <h2 slot="headline">
      <a href="developers/">Developers</a>
    </h2>
    <p>Tools and techniques to help you develop custom themes</p>
  </rh-tile>
</nav>
