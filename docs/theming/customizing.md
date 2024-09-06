---
title: Customizing
bodyClasses: element-docs
order: 3
---
<script type="module">
  import '@rhds/elements/rh-blockquote/rh-blockquote.js';
  import '@rhds/elements/rh-cta/rh-cta.js';
  import '@rhds/elements/rh-card/rh-card.js';
  import '@rhds/elements/rh-tag/rh-tag.js';
  import '@rhds/elements/lib/elements/rh-context-demo/rh-context-demo.js';
</script>

- "Applying a theme" means setting token values
- prefer to customize 'semantic' (i.e. alias) tokens rather than 'base' (i.e. 
crayon) tokens
- set token values on `:root` for whole pages, or on a selector for a class 
(e.g. 3-card promo band)
- brag about your customizations! did other teams use it, or something similar? 
  maybe it should be added upstream to the design system?

```css
.theme-pink {
  --rh-color-surface-lightest: #feeded;
  --rh-color-surface-darkest: var(--rh-color-brand-red-darkest, #5f0000);
  --rh-color-text-primary-on-light: #131313;
}

.product-grid {
  & rh-card {
    --rh-border-radius-default: 10px;
  }
}
```

### Custom theme

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
