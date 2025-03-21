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

<style data-helmet>
  .theme-bordeaux {
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
the relevant color properties in the design system in their page's <abbr 
  title="Cascading style sheets">CSS</abbr>. For example, let's create a custom 
_Bordeaux_ theme. We'll write a CSS rule which selects for the `theme-bordeaux` 
class, and in that rule we'll set the values of <abbr title="red hat design 
  system">RHDS</abbr> theming tokens to our custom theme colors.
In the following example, you can see how we first define some custom theme 
colours as CSS custom properties beginning with `--bordeaux-`, then we use those 
values in our custom theme by applying them to RHDS theming tokens.

<rh-alert state="info">In order to support user's color 
scheme preference as well as elements with dark color palettes, always use sure 
to always use the `light-dark()` function when crafting custom themes.</rh-alert>

<uxdot-pattern class="card-snippet-grid"
               full-height
               active-tab="css"
               src="../patterns/card-bordeaux.html"></uxdot-pattern>

<rh-alert>When writing themes, override the semantic, themeable tokens such as
  `--rh-color-interactive-primary-default` rather than the crayon tokens
  e.g. `--rh-color-purple-10`. This ensures that your custom colors apply to 
  elements in the way the designers originally intended</rh-alert>

### Customizing entire pages

To customize entire page, we can apply the `theme-bordeaux` class to the body element.

<rh-card>
  <label for="bordeaux-page-switch">
    What would it look like to set that theme on an entire page?
  </label>
  <rh-switch id="bordeaux-page-switch"
             message-on="Bordeaux"
             message-off="Raleigh"></rh-switch>
</rh-card>

Have you written a custom theme for RHDS? Brag about it! Let us know in slack, show it off on your blog.

## When to use custom themes

A custom theme may be used for very specific brand projects like campaigns, podcasts, or events.
For other applications, the default theme is already perfectly weighted.
If your project does need a custom theme, contact the Brand team and [Design
system][designsystem] team for guidance.

<rh-alert state="warning">
  <h4 slot="header">Choosing a theme</h4>
  <p>For most projects, the light and dark themes are good enough. Evaluate
    your project thoroughly before creating a custom theme.</p>
</rh-alert>

<uxdot-example>
  <img alt="Example of a hero that uses light blue tags against a background image",
       src="custom-theme.png">
</uxdot-example>

{% renderFile './docs/_includes/partials/component/feedback.11ty.ts' %}

[designsystem]: https://github.com/RedHat-UX/red-hat-design-system/discussions/
