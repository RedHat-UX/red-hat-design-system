---
title: Overview
order: 1
---
<style>
  .card-grid {
    display: grid;
    gap: var(--rh-space-lg);
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    & rh-card {
      &::part(header) {
        padding: 0;
        margin: 0;
      }
  }
</style>

<script type="module">
  import '@rhds/elements/rh-card/rh-card.js'
</script>

Red Hat's Design System comes with a powerful, flexible, and easy-to-use
theming system. Design system elements come with branded, accessible defaults 
built-in, so that all you need to do to create quintessentially Red Hat 
experiences is write some HTML. For those occasions when we want to flex our 
design muscles, our elements come with powerful theming primitives in the form 
of **slots**, **design tokens**, and **CSS shadow parts** to enable you to theme 
a single element, a section, a page, or an entire app.

<nav class="card-grid">
  <rh-card>
    <svg slot="header" viewBox="0 0 161 100">
      <rect x="0" y="0" width="161" height="100" fill="var(--rh-color-brand-red-on-light)" />
      <text fill="white" font="bold" x="10" y="60">Insert graphic</text>
    </svg>
    <rh-cta slot="footer">
      <a href="palettes-and-themes/">Palettes and Themes</a>
    </rh-cta>
  </rh-card>
  <rh-card>
    <svg slot="header" viewBox="0 0 161 100">
      <rect x="0" y="0" width="161" height="100" fill="var(--rh-color-brand-red-on-light)" />
      <text fill="white" font="bold" x="10" y="60">Insert graphic</text>
    </svg>
    <rh-cta slot="footer">
      <a href="customizing/">Customizing</a>
    </rh-cta>
  </rh-card>
  <rh-card>
    <svg slot="header" viewBox="0 0 161 100">
      <rect x="0" y="0" width="161" height="100" fill="var(--rh-color-brand-red-on-light)" />
      <text fill="white" font="bold" x="10" y="60">Insert graphic</text>
    </svg>
    <rh-cta slot="footer">
      <a href="developers/">Developer Info</a>
    </rh-cta>
  </rh-card>
</nav>
