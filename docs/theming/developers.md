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

## Context protocol

The context protocol is an [open protocol](https://github.com/webcomponents-cg/community-protocols/blob/main/proposals/context.md) developed by the web components community to support the passing of data between components.

Our system utilizes this protocol with the setting of the `color-palette` attribute on a provider element which passes it's context data of `light` or `dark` on to it's children.  By doing so we can ensure accessible colors are applied given any possible change in context value higher up in the DOM tree. 

This is important not only for helping us ensure we maintain our own design guidelines, but also for accessibility compliance and enabling great experiences for all our users.

### Current implementation

The context protocol is enabled by two [ReactiveControllers](https://lit.dev/docs/composition/controllers/): the [provider controller](https://github.com/RedHat-UX/red-hat-design-system/blob/main/lib/context/color/provider.ts), and the [consumer controller](https://github.com/RedHat-UX/red-hat-design-system/blob/main/lib/context/color/consumer.ts).  These controllers work in tandem to provide the context data, and or consume it as a child element.  Custom elements can implement only the consumer, provider, or both depending on the needs of the particular element.

#### Providers

Custom Elements that implement the provider controller are elements that provide their own context and can override that of their parent.  Elements such as `<rh-surface>`, `<rh-card>`, and `<rh-accordion>` are examples of such context providers.  If a provider contains a set `color-palette` attribute, it will override any parent set context, and pass it's context on to its children.
 
To add a provider to your element:

1. First `import` the provider controller.
  <rh-code-block dedent language="js" highlighting="client"><script type="application/javascript">import { colorContextProvider, type ColorPalette } from '../../lib/context/color/provider.js';</script>
  </rh-code-block>
2. Then add the `@colorContextProvider` decorator to a property with the attribute `color-palette` which is the type `ColorPalette`.  
  <rh-code-block dedent language="js" highlighting="client"><script type="application/javascript">@colorContextProvider()
@property({ reflect: true, attribute: 'color-palette' }) colorPalette?: ColorPalette;</script>
  </rh-code-block>

Read "[What are color palettes](/theming/color-palettes/)" for more information about the 6 available `color-palettes`.

#### Consumers

Consumer elements are elements that only consume the parent context.  Elements such as `<rh-cta>`, `<rh-badge>` and `<rh-tag>` are examples of consumer only elements.

To add a consumer to your element:

<ol>
  <li>First `import` the classMap Lit directive, and the consumer controller
    <rh-code-block dedent language="js" highlighting="client">
      <script type="application/javascript">import { classMap } from 'lit/directives/class-map.js';
import { colorContextConsumer, type ColorTheme } from '../../lib/context/color/consumer.js';</script>
    </rh-code-block>
  </li>
  <li>Then add the `@colorContextConsumer()` decorator to a private property of `on` which is the type of `ColorTheme`.
    <rh-code-block dedent language="js" highlighting="client">/
      <script type="application/javascript">@colorContextConsumer() private on?: ColorTheme;</script>
    </rh-code-block>
  </li>
  <li>Add a classMap that implements the shadow class in your render method
    <rh-code-block dedent language="js" highlighting="client">
      <script type="application/javascript">
      render() {
        const { on = 'light' } = this;
        <div id="container" class="${classMap({ on: true, [on]: !!on })}"></div>
}</script>
    </rh-code-block>
  </li>
  <li>The classes of `on light` and `on dark` are then used to style your element when context switches in the elements shadow CSS.
  <rh-code-block dedent language="css" highlighting="client">
    <script type="text/css">#container {
  color: var(--rh-color-text-primary);
  background: var(--rh-color-surface);
  &.on.light { --rh-color-surface: var(--rh-color-surface-lightest, #ffffff); }
  &.on.dark { --rh-color-surface: var(--rh-color-surface-darkest, #151515); }
}</script>
</rh-code-block>
</ol>

For more information on what `ColorThemes` are read "[Background](/theming/color-palettes/#backgrounds)".

### Future state

In a not so distant future, we will be able to replace the context protocol completely and remove this code by implementing the web standard [container style queries](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_containment/Container_size_and_style_queries#container_style_queries_2).  We have been working toward aligning to this future state by ensuring any API we implement today can easily carry over in the implementation of style queries with the removal of the context protocol for theming.

#### Style queries

Your page markup declares a custom surface:

<rh-code-block dedent language="html" highlighting="client">
<script type="text/html"><div class="custom-surface dark">
  <rh-cta href="#">GO!</rh-cta>
</div></script>
</rh-code-block>

And your document css sets the desired color context:

<rh-code-block dedent language="css" highlighting="client">
<script type="text/css">.custom-surface {
  container: surface;
  &.dark { --rh-background-context: dark; }
  &.light { --rh-background-context: light; }
}</script>
</rh-code-block>

Internally / in shared CSS:

<rh-code-block dedent language="css" highlighting="client">
<script type="text/css">@container style (--rh-context-background: dark) {
  --rh-color-text-primary: var(--rh-color-text-primary-on-dark)
}</script>
</rh-code-block>

## Art Direction

Art direction is the process of selecting art assets based on the context in 
which they are used.

### Inline SVG

Page authors using _inline SVG_ can use theme tokens to style graphics.

<rh-code-block dedent language="html" highlighting="client">
<script type="text/html"><svg slot="header" width="80" height="80">
  <rect fill="var(--rh-color-border-interactive)"
        fill-opacity="0.1"
        stroke-dasharray="4"
        stroke-width="1"
        stroke="var(--rh-color-border-interactive)"
        width="80"
        height="80"/>
</svg></script>
</rh-code-block>

This approach _does not work_ with svg loaded through the `<img>` tag, or with 
raster graphics, however another approach is in development which could help:

### `<rh-picture>` <rh-tag icon="notification-fill" color="purple">Planned</rh-tag>

<rh-code-block dedent language="html" highlighting="client">
<script type="text/html"><rh-picture>
  <source srcset="../google-cloud-dark.svg" color-theme="dark"></source>
  <img src="../google-cloud.svg" alt="Logo for Red Hat partner Google Cloud">
<rh-picture></script>
</rh-code-block>

<rh-cta href="https://github.com/orgs/RedHat-UX/discussions/1780">Join the discussion</rh-cta>
