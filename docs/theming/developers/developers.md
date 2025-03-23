---
title: Developers
layout: layouts/pages/has-toc.njk
order: 4
---

<link rel="stylesheet"
      data-helmet
      href="/assets/packages/@rhds/elements/elements/rh-pagination/rh-pagination-lightdom.css">
<link rel="stylesheet"
      data-helmet
      href="/assets/packages/@rhds/elements/elements/rh-tile/rh-tile-lightdom.css">
<link rel="stylesheet"
      data-helmet
      href="../color-palettes.css">
<link rel="stylesheet"
      data-helmet
      href="../developers.css">

<script type="module" data-helmet>
  import '@uxdot/elements/uxdot-pattern.js';
  import '@rhds/elements/lib/elements/rh-context-demo/rh-context-demo.js';
  import '@rhds/elements/rh-accordion/rh-accordion.js';
  import '@rhds/elements/rh-audio-player/rh-audio-player.js';
  import '@rhds/elements/rh-blockquote/rh-blockquote.js';
  import '@rhds/elements/rh-button/rh-button.js';
  import '@rhds/elements/rh-card/rh-card.js';
  import '@rhds/elements/rh-code-block/rh-code-block.js';
  import '@rhds/elements/rh-cta/rh-cta.js';
  import '@rhds/elements/rh-pagination/rh-pagination.js';
  import '@rhds/elements/rh-tabs/rh-tabs.js';
  import '@rhds/elements/rh-tag/rh-tag.js';
  import '@rhds/elements/rh-tile/rh-tile.js';
</script>

## Using the theming system

<abbr title="Red Hat Design System">RHDS</abbr>’s theming system is a high-level 
expression of the lower-level components of the system: [tokens][tokens], and 
[elements][elements]. In turn, it factors into the development of the 
highest-level design system component: [patterns][patterns]. To use 
the theming system, then, developers must already be familiar with our tokens 
and elements. In other words, theming is the developer’s process of 
orchestrating design tokens with elements, particularly by way of themeable 
container elements.

## How theming works

### Color scheme providers
<a id="providers"></a>

<rh-alert state=info>[Read more about color palettes and schemes][palettes] in the theming overview.</rh-alert>

To make your element a color scheme provider:

1. Import the provider decorator from the `lib` directory.
2. Add the `@colorPalettes` decorator to the element's class.
3. Add a reflecting `colorPalette` property with `color-palette` attribute.

```ts rhcodeblock
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';

import {
  colorPalettes,
  type ColorPalette
} from '@rhds/elements/lib/color-palettes.js';             // 1

@customElement('rh-provider')
@colorPalettes                                             // 2
export class RhProvider extends LitElement {
  @property({ reflect: true, attribute: 'color-palette' }) // 3
  colorPalette?: ColorPalette;
}
```

If the element only allows a subset of color palettes, you may pass them to the
decorator to limit which palettes can be applied.

```ts rhcodeblock
@customElement('rh-subset-provider')
@colorPalettes('darker', 'lighter')
export class RhSubsetProvider extends LitElement { /*...*/ }
```

#### Color scheme consumers
<a id="consumers"></a>

Color scheme consumers are elements which cannot set their own color scheme,
but instead passively consume it from their parents. Elements such as
`<rh-cta>`, `<rh-badge>` and `<rh-tag>` are examples of consumers.

To make your element a color context consumer:

1. Import the `@themable` decorator from the `lib` directory.
2. Add the `@themable` decorator to the element's class.
3. Use computed theming tokens to color your element
3. When needed, override scheme values using [`light-dark()`][lightdark]

<rh-tabs class="code-tabs">
  <rh-tab slot="tab">TypeScript</rh-tab>
  <rh-tab-panel>

```ts rhcodeblock
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { themable } from '@rhds/elements/lib/themable.js';               // 1

@customElement('rh-consumer')
@themable                                                                // 2
export class RhConsumer extends LitElement {
  render() {
    return html`<div id="container"></div>`;
  }
}
```

  </rh-tab-panel>
  <rh-tab slot="tab">CSS</rh-tab>
  <rh-tab-panel>

```css rhcodeblock
#container {
  color: var(--rh-color-text-primary);
  background: var(--rh-color-surface);
}
```

  </rh-tab-panel>
</rh-tabs>

The `@themable` decorator applies a stylesheet from `@rhds/tokens` to the page. 
That stylesheet containing the default theme, using [`light-dark()`][lightdark] 
to compute theming tokens depending on the color scheme.

```css rhcodeblock
--rh-color-text-primary: light-dark(
  var(--rh-color-text-primary-on-light, #151515)
  var(--rh-color-text-primary-on-dark, #ffffff)
);
```

### Themeable containers

In <abbr>RHDS</abbr>, elements such as `<rh-surface>`, `<rh-card>`, `<rh-tabs>`, 
and others are considered themeable containers. Developers can provide custom 
values for theming tokens on those elements in a [custom theme][themes].

A common pattern for a themeable container is the full-width band. For example, 
a `<rh-surface>` may be used as a full-width container and provide the 
*Bordeaux* theme values to a set of 3 cards in a grid:

<uxdot-pattern src="../patterns/band.html"
               class="band-example"
               target="band">
</uxdot-pattern>

### Theming whole pages

To theme an entire page, you may replace the `<main>` element with an 
`<rh-surface role="main">`. This ensures that computed theme tokens propagate to 
all children while maintaining the proper [landmark semantics][landmarks].

```html rhcodeblock
<!DOCTYPE html>
<html lang="en-US">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <title>My Themed Page</title>
  </head>
  <body>
    <rh-surface role="main" color-palette="darker">
      ...
    </rh-surface>
  </body>
</html>
```

You may also style a built-in `<main>` element with `color-scheme` and `light-dark()`:

```css rhcodeblock
body {
  color-scheme: light dark;
  main {
    background-color: light-dark(var(--rh-surface-lightest), var(--rh-surface-darkest));
  }
}
```

### Theming individual sections

You may also theme particular sections, giving them a contrasting color palette.
Read more about the design considerations for contrasting sections on the
[color-palettes page](/theming/color-palettes/#inline-color-palettes-beta).

```html rhcodeblock
<body>
  <rh-surface role="main">
    <section aria-labelledby="heading">
      <h2 id="default">Default palette</h2>
      <p>Default color palette (i.e. lightest)</p>
    </section>
    <rh-surface role="section"
                aria-labelledby="darker"
                color-palette="darker">
      <h2 id="darker">Darker palette</h2>
      <p>Contrasting color palette (i.e. darker)</p>
    </rh-surface>
  </rh-surface>
</body>
```

## Writing themes

When theming pages, sections, or elements, developers should carefully review
the designs they received and seek to make as few customizations as necessary.
The ideal order of operations is as follows:

1. Search for an appropriate or approximate [pattern][patterns]
1. Use element-specific tokens to customize an element e.g. `--rh-card-header-background-on-light`
1. Use theme tokens to customize the target e.g. `--rh-color-interactive-primary-default`
1. Use element CSS Shadow Parts for greater control

<rh-alert state="caution">Avoid setting values for CSS custom properties 
  beginning with an underscore (`_`). These should be considered "private" and 
  may change at any time without warning.</rh-alert>

## Art Direction

Art direction is the process of selecting art assets based on the context in 
which they are viewed. Regarding theming, art direction means choosing or 
modifying graphics based on the surrounding theme or color palette. There are 
two ways to approach this:

1. Dynamic graphics
2. Alternating graphics

### Dynamic graphics

Page authors can create dynamic graphics that respond to their surrounding 
theme by using _inline SVGs_ that reference theme tokens. For example, this SVG
graphic uses the `--rh-color-border-interactive` theme token to style a 
rectangle.

```html rhcodeblock
<svg slot="header" width="80" height="80">
  <rect fill="var(--rh-color-border-interactive, #0066CC)"
        fill-opacity="0.1"
        stroke-dasharray="4"
        stroke-width="1"
        stroke="var(--rh-color-border-interactive, #0066CC)"
        width="80"
        height="80"/>
</svg>
```

When using this approach, there are some important things to keep in mind:

First, all element IDs on the page must be unique, including inline SVG elements.
When inlining SVGs onto the page, try to reduce the number of IDs in the graphic
to the bare minimum, and make sure the IDs are either random or prefixed with some 
unique identifier, like the file name.

Second, when using themable tokens in graphics, e.g `--rh-color-text-primary`, always
provide the light-scheme value as a fallback. This ensures that the graphic will
still render correctly (for light color schemes) when loaded in an `<img>` tag. As long 
as you supply the light scheme fallback value, we don't need to use `light-dark()` except 
when there's no appropriate themable variable.

```svg-diff rhcodeblock
- fill="var(--rh-color-text-primary, light-dark(var(--rh-color-text-primary-on-light, #151515), var(--rh-color-text-primary-on-dark, #ffffff))"
+ fill="var(--rh-color-text-primary, #151515)"
```

This approach _does not work_ with SVGs loaded through the `<img>` tag, or with 
raster graphics; however, another approach is in development that could help.

### Alternating Graphics

Developers can accomplish graphical art direction in their themed pages by
swapping linked or raster graphics depending on the context. For example, if
the Red Hat logo appears on sections with both light and dark backgrounds,
developers should carefully choose the graphic that matches the background.

```html rhcodeblock
<rh-surface role="section"
            aria-labelledby="products"
            color-palette="darkest">
  <h2 id="products">Products</h2>
  <img alt="Red Hat Enterprise Linux"
       src="/assets/logos/products/rhel-on-dark.svg">
</rh-surface>
```

### `<rh-picture>` <rh-tag icon="notification-fill" color="purple">Planned</rh-tag>

We’re now in the early stages of developing an art direction element for these
scenarios, tentatively named `<rh-picture>`. The following speculative code
block shows how the element may be used in the future to enable responsive
themable graphics.

```html rhcodeblock
<rh-surface role="section"
            aria-labelledby="products"
            color-palette="darkest">
  <h2 id="products">Products</h2>
  <rh-picture>
    <source srcset="/assets/logos/products/rhel-on-dark.png" color-theme="dark"></source>
    <source srcset="/assets/logos/products/rhel-on-light.png" color-theme="light"></source>
    <img src="/assets/logos/products/rhel.png" alt="Red Hat Enterprise Linux">
  <rh-picture>
</rh-surface>
```

<rh-cta href="https://github.com/orgs/RedHat-UX/discussions/1780">Join the discussion</rh-cta>

[backgrounds]: /theming/color-palettes/#backgrounds
[consumersrc]: https://github.com/RedHat-UX/red-hat-design-system/blob/main/lib/themable.ts
[contextprotocol]: https://github.com/webcomponents-cg/community-protocols/blob/main/proposals/context.md
[controllers]: https://lit.dev/docs/composition/controllers/
[elements]: /elements/
[landmarks]: https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/landmark_role
[palettes]: /theming/color-palettes/
[patterns]: /patterns/
[providersrc]: https://github.com/RedHat-UX/red-hat-design-system/blob/main/lib/color-palettes.ts
[themes]: /theming/customizing/#custom-themes
[tokens]: /tokens/
[lightdark]: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/light-dark
