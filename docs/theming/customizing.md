---
title: Customizing
bodyClasses: element-docs
hasToc: true
order: 3
---
<link rel="stylesheet"
      data-helmet
      href="../color-palettes.css">

<script type="module" data-helmet>
  import '/assets/javascript/elements/uxdot-pattern.js';
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
    document.body.classList.toggle('theme-bordeaux', this.checked);
  });
</script>

Red Hat Design System is composed of tokens, elements, and patterns, each layer
building on the last. Theming emerges as a design possibility from the
composition of those smaller pieces. By setting custom values for themable
design tokens, elements, sections, or entire pages can take on a new color 
scheme, layout density, etc. Custom themes can apply to multiple color-palettes
and to both the `light` and `dark` backgrounds.

## Custom themes

To create a custom theme, designers and developers need only set the values for 
the relevant color properties in the design system. For example, a _Bordeaux_ 
theme might look like this:

{% uxdotPattern class="card-snippet-grid", stacked=true %}
{% include './patterns/card-bordeaux.html' %}
{% enduxdotPattern %}

<rh-alert>When writing themes, use the semantic, themable tokens such as
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

### Inline theming  <rh-tag color="purple">Beta</rh-tag>

Inline theming is when a section switches themes and looks different
than the rest of the page or interface. Some use cases include
highlighting an important section on a page or adding a sidebar to an
interface. Use inline theming only for major shifts in color. For minor
shifts, use a different surface color from the same theme.

<rh-alert>
  <h4 slot="header">Update from the team</h4>
  <p>The design system team is working on creating inline theming best
     practices in the near future. <a href="https://github.com/RedHat-UX/red-hat-design-system/discussions">Contact
     us</a> if you would like to contribute.</p>
</rh-alert>

<uxdot-example color-palette="lighter">
  <img alt="wireframe of a dark theme section sandwiched by two light theme sections",
       src="/assets/theming/inline-theming-1.png">
</uxdot-example>

<uxdot-example color-palette="lighter">
  <img alt="wireframe of cards in a dark theme section extending into a light theme section",
       src="/assets/theming/inline-theming-2.png">
</uxdot-example>

<uxdot-example color-palette="lighter">
  <img alt="wireframe of dark theme navigation framing the top and left sides of a light theme content area",
       src="/assets/theming/inline-theming-3.png">
</uxdot-example>

<uxdot-feedback>

## Foundations
To learn how to use our other foundations in your designs, visit the
[foundations](/foundations) section.

</uxdot-feedback>
