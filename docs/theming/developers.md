---
templateEngineOverride: njk
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

{% renderTemplate 'md' %}

## Using the theming system

<abbr title="Red Hat Design System">RHDS</abbr>' theming system is a high-level 
expression of the lower-level components of the system, [tokens][tokens], and 
[elements][elements], and in turn, it factors into the development of the 
highest level design system component, [patterns][patterns]. In order to use 
the theming system, then, developers must already be familiar with our tokens 
and elements. In other words, theming is the developer's process of 
orchestrating design tokens with elements, particularly by way of themable 
container elements

### Themable containers

In <abbr>RHDS</abbr>, special provider elements such as `<rh-surface>`, 
`<rh-card>`, `<rh-tabs>`, and others are considered themeable containers.  A 
themeable container is an element that can have custom classes attached which 
provide values for the relevant CSS color properties in a [custom 
theme][themes].

A common pattern for a themeable container is the full width band.  For example, 
a `<rh-surface>` may be used as a full-width container and provide the 
*Bordeaux* theme values to a set of 3 cards in a grid:

[patterns]: /patterns/
[tokens]: /tokens/
[elements]: /elements/
[themes]: /theming/customizing/#custom-themes

{% endrenderTemplate %}

{% uxdotPattern class="band-example", stacked=true, allow="lightest"%}
{% include './patterns/band.html' %}
{% enduxdotPattern %}

{% renderTemplate 'md' %}

### The color-palette attribute

The `color-palette` is a fundamental aspect of the theming system.  The 
attribute is available on specially designated provider elements that actively 
define a [color palette][palettes], while their children passively accept their 
background color and text color.  The `color-palette` can be set to six possible 
values `lightest`, `lighter`, `light`, `dark`, `darker` and `darkest`.

[palettes]: /theming/color-palettes/

### Theming whole pages

{% endrenderTemplate %}
<rh-code-block dedent
               full-height
               highlighting="prerendered">
{% renderTemplate 'md' %}
```html
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
{% endrenderTemplate %}
</rh-code-block>
{% renderTemplate 'md' %}

### Theming individual sections

{% endrenderTemplate %}
<rh-code-block dedent
               full-height
               highlighting="prerendered">
{% renderTemplate 'md' %}
```html
<body>
  <main>
    <section>
      Default theme (i.e. lightest)
    </section>
    <rh-surface color-palette="darker">
      ...
    </rh-surface>
  </main>
</body>
```
{% endrenderTemplate %}
</rh-code-block>
{% renderTemplate 'md' %}

## Art Direction

Art direction is the process of selecting art assets based on the context in 
which they are used.

### Inline SVG

Page authors using _inline SVG_ can use theme tokens to style graphics.

{% endrenderTemplate %}
<rh-code-block dedent
               full-height
               highlighting="prerendered">
{% renderTemplate 'md' %}
```html
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
{% endrenderTemplate %}
</rh-code-block>
{% renderTemplate 'md' %}

This approach _does not work_ with svg loaded through the `<img>` tag, or with 
raster graphics, however another approach is in development which could help:

### `<rh-picture>` <rh-tag icon="notification-fill" color="purple">Planned</rh-tag>

{% endrenderTemplate %}
<rh-code-block dedent
               full-height
               highlighting="prerendered">
{% renderTemplate 'md' %}
```html
<rh-picture>
  <source srcset="../google-cloud-dark.svg" color-theme="dark"></source>
  <img src="../google-cloud.svg" alt="Logo for Red Hat partner Google Cloud">
<rh-picture>
```
{% endrenderTemplate %}
</rh-code-block>

<rh-cta href="https://github.com/orgs/RedHat-UX/discussions/1780">Join the discussion</rh-cta>
{% renderTemplate 'md' %}

## How theming works
### Current implementation - Context Protocol

<abbr title="Red Hat Design System">RHDS</abbr>' Theming system is primarily 
about styles. Tt currently relies on JavaScript to work, by way of the [context 
protocol][contextprotocol] developed by the web components community to support 
passing data between components.

Our system utilizes this protocol with the setting of the `color-palette` 
attribute on a provider element which makes its context data (in our case, 
`light` or `dark`) to it's children.  By doing so we can ensure accessible 
colors are applied given any possible change in context value higher up in the 
<abbr title="Document Object Model">DOM</abbr> tree. 

This is important not only for helping us maintain our own design guidelines, 
but also for accessibility compliance and enabling great experiences for all our 
users.

The context protocol is enabled by two [reactive controllers][controllers]: the
[provider controller][providersrc], and the [consumer controller][consumersrc].
These controllers work in tandem to alternately provide the context data, or
consume it as a child element. Custom elements can implement the consumer, the
provider, or both, depending on the needs of that particular element.

#### Providers

Custom Elements that implement the provider controller are elements that provide
their own context, overriding that of their parent.  Elements such as
`<rh-surface>`, `<rh-card>`, and `<rh-accordion>` are examples of such context
providers. If a provider contains a set `color-palette` attribute, it will
override any parent context, and pass its context on to its children.

To make your element a color context provider,

1. First import the provider controller.
2. Then add the `@colorContextProvider()` decorator to a property with the
   attribute `color-palette` which is the type `ColorPalette`.

[contextprotocol]: https://github.com/webcomponents-cg/community-protocols/blob/main/proposals/context.md
[controllers]: https://lit.dev/docs/composition/controllers/
[providersrc]: https://github.com/RedHat-UX/red-hat-design-system/blob/main/lib/context/color/provider.ts
[consumersrc]: https://github.com/RedHat-UX/red-hat-design-system/blob/main/lib/context/color/consumer.ts

{% endrenderTemplate %}
<rh-code-block dedent
               full-height
               highlighting="prerendered">
{% renderTemplate 'md' %}
```ts
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
{% endrenderTemplate %}
</rh-code-block>
{% renderTemplate 'md' %}

Read "[What are color palettes][palettes]" for more information about the six
available `color-palettes`.

#### Consumers

Context consumers are elements that passively consume the parent context.
Elements such as `<rh-cta>`, `<rh-badge>` and `<rh-tag>` are examples of
consumers.

To make your element a color context consumer,

1. First `import` the classMap Lit directive, and the consumer controller
2. Then add the `@colorContextConsumer()` decorator to a private property of
   `on` which is the type of `ColorTheme`.
3. Add a classMap that implements the shadow class in your render method
4. Use the theming tokens in your element's shadow styles, being sure.
   to select the element which has the `.on.light`/`.on.dark` classes

[palettes]: /theming/color-palettes/

{% endrenderTemplate %}
<rh-tabs class="code-tabs">
  <rh-tab slot="tab">TypeScript</rh-tab>
  <rh-tab-panel>
    <rh-code-block dedent
                   full-height
                   highlighting="prerendered">
{%- renderTemplate 'md' -%}
```ts
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
{% endrenderTemplate %}
    </rh-code-block>
  </rh-tab-panel>
  <rh-tab slot="tab">CSS</rh-tab>
  <rh-tab-panel>
    <rh-code-block dedent
                   full-height
                   highlighting="prerendered">
{% renderTemplate 'md' %}
```css
#container {
  color: var(--rh-color-text-primary);
  background: var(--rh-color-surface);
}
```
{% endrenderTemplate %}
    </rh-code-block>
  </rh-tab-panel>
</rh-tabs>
{% renderTemplate 'md' %}

What the `@colorContextConsumer` decorator does, in addition to participating in
the context event system, is apply a stylesheet from
`@rhds/tokens/css/color-context-consumer.css.js` to the element's shadow root.
That stylesheet selects for well-known class names `.on.light` and `.on.dark`,
and applies values to the theming tokens, depending on the context received.

{% endrenderTemplate %}
<rh-code-block dedent
               full-height
               highlighting="prerendered">
{% renderTemplate 'md' %}
```css
.on.light {
  --rh-color-text-primary: var(--rh-color-text-primary-on-light, #151515);
   /* etc... */
}

.on.dark {
  --rh-color-text-primary: var(--rh-color-text-primary-on-dark, #ffffff);
   /* etc... */
}
```
{% endrenderTemplate %}
</rh-code-block>
{% renderTemplate 'md' %}

For more information on the significance of the context values (i.e.
`ColorTheme`), read "[Background][backgrounds]".

### Future state - style queries  <rh-tag color="purple" icon="notification-fill">Planned</rh-tag>

In a not so distant future, we will be able to replace the context protocol
completely and remove this code by implementing the web standard [container
style queries][stylequeries].

In anticipation of this upcoming browser feature, we attempt to ensure that our
theming system as implemented today using context can easily replaced with style
queries in the near future.

<rh-alert>Note, the examples in this section are hypothetical, the final markup
and styles may not be the same</rh-alert>

In addition to reducing the javascript payload of the design system, style
queries will allow authors to attach surface styles to any element. For example,
Your page markup declares a custom surface with some classes:

[backgrounds]: /theming/color-palettes/#backgrounds
[stylequeries]: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_containment/Container_size_and_style_queries#container_style_queries_2

{% endrenderTemplate %}
<rh-code-block dedent
               full-height
               highlighting="prerendered">
{% renderTemplate 'md' %}
```html
<div class="custom-surface dark">
  <rh-cta href="#">GO!</rh-cta>
</div>
```
{% endrenderTemplate %}
</rh-code-block>
{% renderTemplate 'md' %}

And your document CSS sets the desired color context:

{% endrenderTemplate %}
<rh-code-block dedent
               full-height
               highlighting="prerendered">
{% renderTemplate 'md' %}
```css
.custom-surface {
  container: surface;
  &.dark { --rh-background-context: dark; }
  &.light { --rh-background-context: light; }
}
```
{% endrenderTemplate %}
</rh-code-block>
{% renderTemplate 'md' %}

And you would declare the import a shared stylesheet which activates the theming system,
similarly to how elements import `@rhds/tokens/css/color-context-consumer.css.js`

{% endrenderTemplate %}
<rh-code-block dedent
               full-height
               highlighting="prerendered">
{% renderTemplate 'md' %}
```css
@container style (--rh-context-background: dark) {
  --rh-color-text-primary: var(--rh-color-text-primary-on-dark)
}
```
{% endrenderTemplate %}
</rh-code-block>
