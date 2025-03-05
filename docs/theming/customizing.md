---
title: Customizing
bodyClasses: element-docs
layout: layouts/pages/has-toc.njk
order: 3
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
  document.getElementById('bordeaux-page-switch').addEventListener('change', function() {
    document.documentElement.classList.toggle('theme-bordeaux', this.checked);
  });
</script>

<style>
  .theme-bordeaux {
    --bordeaux-darkest: #19050a;
    --bordeaux-darker: #260710;
    --bordeaux-dark: #330915;
    --bordeaux-dark-alt: #290711;
    --bordeaux-brand-dark: #7f1734;
    --bordeaux-brand-light: #d52757;
    --bordeaux-light: #a55d71;
    --bordeaux-lighter: #d9b9c2;
    --bordeaux-lightest: #f2e8eb;
    --rh-color-surface-darkest: var(--bordeaux-darkest);
    --rh-color-surface-darker: var(--bordeaux-darker);
    --rh-color-surface-dark: var(--bordeaux-dark);
    --rh-color-surface-dark-alt: var(--bordeaux-dark-alt);
    --rh-color-surface-light: var(--bordeaux-light);
    --rh-color-surface-lighter: var(--bordeaux-lighter);
    --rh-color-surface-lightest: var(--bordeaux-lightest);
    --rh-color-border-interactive-on-dark: var(--bordeaux-lightest);
    --rh-color-border-interactive-on-light: var(--bordeaux-darkest);
    --rh-color-interactive-primary-default-on-dark: var(--bordeaux-lighter);
    --rh-color-interactive-primary-default-on-light: var(--bordeaux-darker);
    --rh-color-interactive-primary-hover-on-dark: var(--bordeaux-light);
    --rh-color-interactive-primary-hover-on-light: var(--bordeaux-dark);
    --rh-color-interactive-primary-focus-on-dark: var(--bordeaux-light);
    --rh-color-interactive-primary-focus-on-light: var(--bordeaux-dark);
    --rh-color-interactive-primary-active-on-dark: var(--bordeaux-light);
    --rh-color-interactive-primary-active-on-light: var(--bordeaux-dark);
    --rh-color-border-subtle-on-dark: var(--bordeaux-lighter);
    --rh-color-border-subtle-on-light: var(--bordeaux-darker);
    --rh-color-icon-primary-on-light: var(--bordeaux-brand-dark);
    --rh-color-icon-primary-on-dark: var(--bordeaux-brand-light);
  }
</style>


Red Hat Design System is composed of tokens, elements, and patterns, each layer
building on the last. Theming emerges as a design possibility from the
composition of those smaller pieces. By setting custom values for themeable
design tokens, elements, sections, or entire pages can take on a new color
scheme, layout density, etc. Custom themes can apply to multiple color-palettes
and to both the `light` and `dark` backgrounds.

## Custom themes

To create a custom theme, designers and developers need only set the values for
the relevant color properties in the design system. For example, a _Bordeaux_
theme might look like this:

<uxdot-pattern class="card-snippet-grid"
               full-height
               active-tab="css"
               src="./patterns/card-bordeaux.html">
</uxdot-pattern>

<rh-alert>When writing themes, use the semantic, themeable tokens such as
`--rh-color-interactive-primary-default-on-light` rather than the crayon tokens
e.g. `--rh-color-purple-10`.</rh-alert>

<rh-alert state="warning">
  <h4 slot="header">Careful!</h4>

Do not set the "computed" theme tokens, e.g.
`--rh-color-interactive-primary-default`, those will always be calculated for
you from their `-on-light` and `-on-dark` versions.

</rh-alert>

<rh-card>
  <label for="bordeaux-page-switch">
    What would it look like to set that theme on an entire page?
  </label>
  <rh-switch id="bordeaux-page-switch"
             message-on="Bordeaux"
             message-off="Raleigh"></rh-switch>
</rh-card>

- set token values on `:root` for whole pages, or on a selector for a class
(e.g. 3-card promo band)
- brag about your customizations! did other teams use it, or something similar?
  maybe it should be added upstream to the design system?

## When to use custom themes

A custom theme may be used for very specific brand projects like campaigns.
However, the light and dark themes are fine for the majority of other projects.
If your project does need a custom theme, contact the Brand team and [Design
system](https://github.com/RedHat-UX/red-hat-design-system/discussions) team for guidance. A custom theme may feature a bespoke color
palette, but try to use other styles with elements and patterns from the design
system if possible.

<rh-alert state="warning">
  <h4 slot="header">Choosing a theme</h4>
  <p>For most projects, the light and dark themes are good enough. Evaluate
    your project thoroughly before creating a custom theme.</p>
</rh-alert>

<uxdot-example>
  <img alt="Example of a hero that uses light blue tags against a background image",
       src="/assets/theming/custom-theme.png">
</uxdot-example>

{% renderFile './docs/_includes/partials/component/feedback.11ty.ts' %}
