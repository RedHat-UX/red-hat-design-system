---
title: Developers
order: 4
hasToc: true
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
  import '/assets/javascript/elements/uxdot-pattern.js';
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

### Themeable containers

In <abbr>RHDS</abbr>, special provider elements such as `<rh-surface>`, 
`<rh-card>`, `<rh-tabs>`, and others are considered themeable containers. A 
themeable container is an element that can have custom classes attached, which 
provide values for the relevant CSS color properties in a [custom 
theme][themes].

A common pattern for a themeable container is the full-width band. For example, 
a `<rh-surface>` may be used as a full-width container and provide the 
*Bordeaux* theme values to a set of 3 cards in a grid:

<uxdot-pattern src="./patterns/band.html"
                class="band-example"
                target="band">
</uxdot-pattern>

### The `color-palette` attribute

The `color-palette` attribute is a fundamental aspect of the theming system. The 
attribute is available on specially designated provider elements that actively 
define a [color palette][palettes], while their children passively accept their 
background color and text color. The `color-palette` can be set to six possible 
values:

  * `lightest`
  * `lighter`
  * `light`
  * `dark`
  * `darker`
  * `darkest`

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
1. Use theme tokens to customize the target e.g. `--rh-color-interactive-primary-default-on-light`
1. Use element CSS Shadow Parts for greater control

<rh-alert state="caution">Avoid setting values for CSS custom properties beginning with an underscore (`_`). These should be considered "private" and may change at any time without warning.</rh-alert>

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
  <rect fill="var(--rh-color-border-interactive)"
        fill-opacity="0.1"
        stroke-dasharray="4"
        stroke-width="1"
        stroke="var(--rh-color-border-interactive)"
        width="80"
        height="80"/>
</svg>
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

## How theming works

We've developed our theming system with web standards in mind, aiming to use
CSS over JavaScript as much as possible. At the current state of browser technology,
we found that some JavaScript is required for the system to work correctly.
But we soon expect to be able to remove all (or nearly all) of that 
JavaScript and have the theming system work entirely (or almost entirely) 
through plain CSS. The following explains how the system currently operates, how
element authors can hook into it, and what the future holds for theming.

### Current implementation - Context Protocol

<abbr title="Red Hat Design System">RHDS</abbr>’s theming system is primarily 
about styles. It currently relies on JavaScript to work, via the [context 
protocol][contextprotocol] developed by the web components community to support 
passing data between components.

Our system utilizes this protocol with the setting of the `color-palette` 
attribute on a provider element, which makes its context data (in our case, 
`light` or `dark`) available to its children. By doing so we ensure accessible 
colors are applied given any possible change in context value higher up in the 
<abbr title="Document Object Model">DOM</abbr> tree. 

This is important not only for helping us maintain our design guidelines but
also for accessibility compliance and enabling great experiences for all our 
users.

The context protocol is enabled by two [reactive controllers][controllers]: the
[provider controller][providersrc] and the [consumer controller][consumersrc].
The provider and consumer controllers work together. The provider supplies the
context data, while the consumer receives and uses it within child elements.
Custom elements can implement the consumer, the provider, or both, depending
on the needs of that particular element.

#### Providers

Custom Elements that implement the provider controller are elements that provide
their own context, overriding that of their parent. Elements such as
`<rh-surface>`, `<rh-card>`, and `<rh-accordion>` are examples of such context
providers. If a provider contains a set `color-palette` attribute, it will
override any parent context and pass its context on to its children.

To make your element a color context provider:

1. First import the provider controller.
2. Then add the `@colorContextProvider()` decorator to a property with the
   attribute `color-palette` which is the type `ColorPalette`.

```ts rhcodeblock
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';

import {
  colorContextProvider,                                    // 1
  type ColorPalette,
} from '@rhds/elements/lib/context/color/provider.js';

@customElement('rh-provider')
export class RhProvider extends LitElement {
  @colorContextProvider()                                  // 2
  @property({ reflect: true, attribute: 'color-palette' })
  colorPalette?: ColorPalette;
}
```

Read “[What are color palettes][palettes]” for more information about the six
available `color-palettes`.

#### Consumers

Context consumers are elements that passively consume the parent context.
Elements such as `<rh-cta>`, `<rh-badge>` and `<rh-tag>` are examples of
consumers.

To make your element a color context consumer:

1. First `import` the [classMap Lit directive](https://lit.dev/docs/templates/directives/#classmap),
   and the consumer controller.
2. Then add the `@colorContextConsumer()` decorator to a private property of
   `on` which is the type of `ColorTheme`.
3. Add a classMap that implements the shadow class in your render method.
4. Use the theming tokens in your element’s shadow styles, being sure
   to select the element that has the `.on.light`/`.on.dark` classes.

<rh-tabs class="code-tabs">
  <rh-tab slot="tab">TypeScript</rh-tab>
  <rh-tab-panel>

```ts rhcodeblock
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { classMap } from 'lit/directives/class-map.js';  // 1
import {
  colorContextConsumer,
  type ColorTheme,
} from '@rhds/elements/lib/context/color/consumer.js';

@customElement('rh-consumer')
export class RhConsumer extends LitElement {
  @colorContextConsumer() private on?: ColorTheme;       // 2

  render() {
    const { on = 'light' } = this;                       // 3
    return html`
      <div id="container"
           class="${classMap({ on: true, [on]: true })}">
      </div>`;
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

What the `@colorContextConsumer` decorator does, in addition to participating in
the context event system, is apply a stylesheet from
`@rhds/tokens/css/color-context-consumer.css.js` to the element’s shadow root.
That stylesheet selects well-known class names `.on.light` and `.on.dark`,
and applies values to the theming tokens, depending on the context received.

```css rhcodeblock
.on.light {
  --rh-color-text-primary: var(--rh-color-text-primary-on-light, #151515);
   /* etc... */
}

.on.dark {
  --rh-color-text-primary: var(--rh-color-text-primary-on-dark, #ffffff);
   /* etc... */
}
```

For more information on the significance of the context values (i.e.
`ColorTheme`), read “[Background][backgrounds]”.

### Future state - style queries  <rh-tag color="purple" icon="notification-fill">Planned</rh-tag>

In the not-so-distant future, we will be able to replace the context protocol
completely and remove this code by implementing the web standard [container
style queries][stylequeries].

In anticipation of this upcoming browser feature, we attempt to ensure that our
theming system as implemented today using context can easily be replaced with
style queries in the near future.

<rh-alert>Note: the examples in this section are hypothetical. The final markup
and styles may not be the same.</rh-alert>

In addition to reducing the JavaScript payload of the design system, style
queries will allow authors to attach surface styles to any element. For example,
your page markup declares a custom surface with some classes:

```html rhcodeblock
<div class="custom-surface dark">
  <rh-cta href="#">GO!</rh-cta>
</div>
```

And your document CSS sets the desired color context:

```css rhcodeblock
.custom-surface {
  container: surface;
  &.dark { --rh-background-context: dark; }
  &.light { --rh-background-context: light; }
}
```

And you would declare the import a shared stylesheet that activates the theming system,
similarly to how elements import `@rhds/tokens/css/color-context-consumer.css.js`.

```css rhcodeblock
@container style (--rh-context-background: dark) {
  --rh-color-text-primary: var(--rh-color-text-primary-on-dark)
}
```

[backgrounds]: /theming/color-palettes/#backgrounds
[consumersrc]: https://github.com/RedHat-UX/red-hat-design-system/blob/main/lib/context/color/consumer.ts
[contextprotocol]: https://github.com/webcomponents-cg/community-protocols/blob/main/proposals/context.md
[controllers]: https://lit.dev/docs/composition/controllers/
[elements]: /elements/
[landmarks]: https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/landmark_role
[palettes]: /theming/color-palettes/
[patterns]: /patterns/
[providersrc]: https://github.com/RedHat-UX/red-hat-design-system/blob/main/lib/context/color/provider.ts
[stylequeries]: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_containment/Container_size_and_style_queries#container_style_queries_2
[themes]: /theming/customizing/#custom-themes
[tokens]: /tokens/
